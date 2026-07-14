import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/json-ld"
import { services, getService } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.summary,
          areaServed: { "@type": "State", name: "Texas" },
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            telephone: siteConfig.contact.phone,
          },
        }}
      />

      <PageHero
        eyebrow={service.audience}
        title={service.title}
        description={service.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/schedule" />}>
            Schedule a Consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button variant="outline" render={<a href={siteConfig.contact.phoneHref} />}>
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">What you can expect</h2>
            <ul className="mt-6 grid gap-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--success)]"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How it works</h2>
            <ol className="mt-6 space-y-6">
              {service.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl font-semibold">
              Common questions
            </h2>
            <Accordion className="mt-4 w-full">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Talk to a specialist</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every situation is different. A free consultation is the fastest
                way to understand your options for {service.title.toLowerCase()}.
              </p>
              <Button className="mt-5 w-full" render={<Link href="/schedule" />}>
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="mt-3 w-full"
                render={<a href={siteConfig.contact.phoneHref} />}
              >
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </Button>

              <div className="mt-6 border-t pt-6">
                <h4 className="text-sm font-semibold">Other services</h4>
                <ul className="mt-3 space-y-2">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {s.title}
                        <ArrowRight
                          className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
