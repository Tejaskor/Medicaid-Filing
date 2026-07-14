import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string
  intro: string
  sections: { heading: string; body: string }[]
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <Section>
        <Container className="prose-measure">
          <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
          {sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </section>
          ))}
          <p className="mt-10 text-sm text-muted-foreground">
            This is placeholder content for a demonstration site. Replace with
            your organization&apos;s finalized policy before launch.
          </p>
        </Container>
      </Section>
    </>
  )
}
