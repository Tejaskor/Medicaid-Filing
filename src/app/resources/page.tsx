import type { Metadata } from "next"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { ResourceLibrary } from "@/components/blocks/resource-library"
import { CategoryCard, CategoryGrid } from "@/components/blocks/category-card"
import { categoryIcons } from "@/components/icons/category-icons"
import { resources, resourceCategories } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Texas Medicaid Resource Center",
  description:
    "Guides, checklists, and plain-English articles on Texas Medicaid eligibility, applications, long-term care, and planning. Search and filter our full library.",
  alternates: { canonical: "/resources" },
}

export default function ResourceCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Texas Medicaid Resource Center"
        title="The comprehensive guide to Texas Medicaid"
        description="Everything families and facilities need to understand eligibility, applications, long-term care, and planning — written in plain language and kept up to date."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resource Center" },
        ]}
      />

      {/* Category overview */}
      <Section className="py-12 sm:py-14">
        <Container>
          <h2 className="sr-only">Browse by topic</h2>
          <CategoryGrid className="lg:grid-cols-5">
            {resourceCategories.map((c) => (
              <CategoryCard
                key={c.slug}
                title={c.name}
                description={c.description}
                href={`/resources/category/${c.slug}`}
                icon={categoryIcons[c.slug as keyof typeof categoryIcons]}
              />
            ))}
          </CategoryGrid>
        </Container>
      </Section>

      {/* Searchable library */}
      <Section className="border-t bg-muted/30 pt-12 sm:pt-14">
        <Container>
          <h2 className="text-2xl font-semibold">Browse the library</h2>
          <p className="mt-2 text-muted-foreground">
            Search by keyword, or filter by topic and content type.
          </p>
          <div className="mt-8">
            <ResourceLibrary
              resources={resources}
              categories={resourceCategories}
            />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Still have questions after reading?"
        description="A free consultation is the fastest way to get answers specific to your family's situation."
      />
    </>
  )
}
