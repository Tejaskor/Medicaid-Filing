import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { LeadForm } from "@/components/blocks/lead-form"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Medicaid Filing Connection. Call, email, or send us a message and our team will help you navigate Texas Medicaid.",
  alternates: { canonical: "/contact" },
}

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.contact.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: siteConfig.contact.hours,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help"
        description="Have a question about eligibility, an application, or a facility partnership? Reach out and a real person will get back to you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and we&apos;ll respond within one business day.
            </p>
            <div className="mt-8">
              <LeadForm variant="contact" />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold">Reach us directly</h2>
              <ul className="mt-6 space-y-5">
                {details.map((d) => {
                  const Icon = d.icon
                  return (
                    <li key={d.label} className="flex items-start gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {d.label}
                        </p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {d.value}
                          </p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 rounded-xl bg-muted/50 p-4">
                <p className="text-sm font-medium">In a hurry?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Calling is the fastest way to reach us during business hours.
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  )
}
