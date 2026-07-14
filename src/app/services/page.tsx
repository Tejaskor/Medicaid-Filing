import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { Button } from "@/components/ui/button"
import { serviceIcons } from "@/components/icons/category-icons"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Medicaid application assistance, eligibility & planning, long-term care coverage, and facility operational support across Texas.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Help at every stage of the Medicaid journey"
        description="Whether you're asking your first eligibility question or running a facility with dozens of pending applications, we have a service built for exactly where you are."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section>
        <Container className="flex flex-col gap-6">
          {services.map((service) => {
            const Icon =
              serviceIcons[service.slug as keyof typeof serviceIcons]
            return (
              <div
                key={service.slug}
                className="grid gap-6 rounded-2xl border bg-card p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/12 to-primary/[0.04] ring-1 ring-primary/10">
                      <Icon className="size-7 text-primary" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {service.audience}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-2 text-muted-foreground">{service.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.outcomes.slice(0, 4).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-[var(--success)]"
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Button render={<Link href={`/services/${service.slug}`} />}>
                    Explore this service
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            )
          })}
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
