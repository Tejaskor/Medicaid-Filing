import type { Metadata } from "next"
import { CalendarCheck, MessageSquareText, PhoneCall, ShieldCheck } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { LeadForm } from "@/components/blocks/lead-form"

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Book a free, no-pressure Texas Medicaid consultation. Tell us about your situation and we'll help you understand your options.",
  alternates: { canonical: "/schedule" },
}

const reassurances = [
  {
    icon: ShieldCheck,
    title: "No pressure, ever",
    body: "A consultation is a conversation, not a sales pitch. You decide the next step.",
  },
  {
    icon: MessageSquareText,
    title: "Plain-language answers",
    body: "We'll explain where you stand and what your options are, without the jargon.",
  },
  {
    icon: CalendarCheck,
    title: "Fast scheduling",
    body: "Submit the form and we'll reach out to find a time that works for you.",
  },
]

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a Consultation"
        title="Book your free Medicaid consultation"
        description="Tell us a little about your situation. We'll follow up to schedule a time and, in many cases, can answer your first questions right away."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Schedule a Consultation" },
        ]}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold">Request your consultation</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked with{" "}
                <span className="text-destructive">*</span> are required.
              </p>
              <div className="mt-6">
                <LeadForm variant="schedule" />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4">
              {reassurances.map((r) => {
                const Icon = r.icon
                return (
                  <div
                    key={r.title}
                    className="flex gap-4 rounded-2xl border bg-card p-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {r.body}
                      </p>
                    </div>
                  </div>
                )
              })}

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <PhoneCall className="size-6" aria-hidden="true" />
                <p className="mt-3 text-sm text-primary-foreground/85">
                  Prefer to talk now?
                </p>
                <p className="text-lg font-semibold">Call us during business hours</p>
              </div>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  )
}
