import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { Breadcrumbs } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { ResourceCard } from "@/components/blocks/cards"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/json-ld"
import { resources, getResource, categoryName } from "@/lib/resources"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) return {}
  return {
    title: resource.title,
    description: resource.excerpt,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      type: "article",
      title: resource.title,
      description: resource.excerpt,
      publishedTime: resource.updated,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) notFound()

  const related = resources
    .filter((r) => r.slug !== resource.slug && r.category === resource.category)
    .slice(0, 3)
  const fallbackRelated = resources
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 3)
  const relatedList = related.length > 0 ? related : fallbackRelated

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.excerpt,
          datePublished: resource.updated,
          dateModified: resource.updated,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
          articleSection: categoryName(resource.category),
        }}
      />

      <article>
        <header className="bg-authority border-b">
          <Container className="py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resource Center", href: "/resources" },
                {
                  label: categoryName(resource.category),
                  href: `/resources/category/${resource.category}`,
                },
                { label: resource.title },
              ]}
            />
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{resource.type}</Badge>
              <Link
                href={`/resources/category/${resource.category}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {categoryName(resource.category)}
              </Link>
            </div>
            <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {resource.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {resource.readingTime} min read
              </span>
              <span>Updated {formatDate(resource.updated)}</span>
            </div>
          </Container>
        </header>

        <Section className="py-12 sm:py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <div className="prose-measure">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {resource.excerpt}
                  </p>
                  {resource.body.map((section) => (
                    <section key={section.heading} className="mt-10">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {section.heading}
                      </h2>
                      {section.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="mt-4 leading-relaxed text-foreground/90"
                        >
                          {p}
                        </p>
                      ))}
                    </section>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl border bg-muted/40 p-6">
                  <p className="text-sm text-muted-foreground">
                    This article is for educational purposes and is not legal or
                    financial advice. Medicaid rules change and vary by
                    situation.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Back to the Resource Center
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-sm">
                  <h2 className="text-base font-semibold">
                    Need help with your application?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Reading is a great start. When you&apos;re ready, we&apos;ll
                    handle the paperwork and filing for you.
                  </p>
                  <Link
                    href="/schedule"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Schedule a Consultation
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </Section>

        {/* Related */}
        <Section className="border-t bg-muted/30 py-14">
          <Container>
            <h2 className="text-2xl font-semibold">Keep reading</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedList.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </div>
          </Container>
        </Section>
      </article>

      <CtaBand />
    </>
  )
}
