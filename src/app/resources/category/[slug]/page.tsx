import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { ResourceCard } from "@/components/blocks/cards"
import {
  resources,
  resourceCategories,
  getCategory,
} from "@/lib/resources"

export function generateStaticParams() {
  return resourceCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: `${category.name} — Resource Center`,
    description: category.description,
    alternates: { canonical: `/resources/category/${category.slug}` },
  }
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const items = resources.filter((r) => r.category === slug)

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resource Center", href: "/resources" },
          { label: category.name },
        ]}
      />

      <Section>
        <Container>
          {items.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              New resources for this topic are coming soon.
            </p>
          )}

          <div className="mt-12">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to all resources
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
