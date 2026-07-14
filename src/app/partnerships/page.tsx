import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  ClipboardList,
  LineChart,
  Users,
  TrendingDown,
  HandshakeIcon,
} from "lucide-react"

import { Container, Section, SectionHeading } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Facility Partnerships",
  description:
    "Medicaid operational support for nursing homes, assisted living communities, and rehabilitation centers. Reduce pending days and protect revenue.",
  alternates: { canonical: "/partnerships" },
}

const facilityTypes = [
  "Skilled nursing facilities",
  "Assisted living communities",
  "Rehabilitation centers",
  "Memory care communities",
  "Long-term acute care",
  "Home health agencies",
]

const benefits = [
  {
    icon: TrendingDown,
    title: "Fewer pending days",
    body: "We move resident applications through the state faster, cutting the days care is delivered without confirmed reimbursement.",
  },
  {
    icon: LineChart,
    title: "Protected revenue",
    body: "Higher approval rates and cleaner accounts receivable mean a healthier bottom line for your facility.",
  },
  {
    icon: Users,
    title: "A dedicated liaison",
    body: "Your admissions and business office get a single, responsive point of contact who knows your workflows.",
  },
  {
    icon: ClipboardList,
    title: "Transparent reporting",
    body: "Regular, leadership-ready reporting on pending days, approvals, and revenue impact.",
  },
]

const process = [
  {
    title: "Partnership scoping",
    body: "We learn your census, payer mix, and pain points to design the right engagement for your facility.",
  },
  {
    title: "Onboarding",
    body: "We integrate with your admissions and business office workflows with minimal disruption.",
  },
  {
    title: "Application management",
    body: "We manage resident Medicaid applications end-to-end, from intake to approval.",
  },
  {
    title: "Ongoing optimization",
    body: "Regular reviews keep pending days low and identify opportunities to improve.",
  },
]

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Healthcare Organizations"
        title="Medicaid operational support that protects your census and revenue"
        description="We partner with nursing homes, assisted living communities, and rehabilitation centers to manage resident Medicaid applications — becoming a seamless extension of your team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facility Partnerships" },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/schedule" />}>
            Discuss a Partnership
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button variant="outline" render={<Link href="/services/facility-support" />}>
            View facility service
          </Button>
        </div>
      </PageHero>

      {/* Problem framing */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The challenge"
                title="Pending Medicaid applications quietly drain revenue"
              />
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Every day a resident&apos;s application sits in &ldquo;pending&rdquo;
                status is a day of care delivered without confirmed payment. For
                a busy facility, those days add up fast — and pull your business
                office away from the work only they can do.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We take that burden off your team, so applications get filed
                correctly, tracked closely, and approved sooner.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div
                      key={b.title}
                      className="rounded-2xl border bg-card p-6"
                    >
                      <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-semibold">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {b.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who we partner with */}
      <Section className="border-y bg-muted/40">
        <Container>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Who we work with"
            title="Built for the facilities that serve Medicaid residents"
          />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {facilityTypes.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3"
              >
                <Building2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How partnerships work"
            title="A partnership designed around your operations"
          />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="flex flex-col">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border bg-card p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="flex items-start gap-4">
              <span className="hidden size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:grid">
                <HandshakeIcon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold">
                  Let&apos;s build a partnership
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Tell us about your facility and we&apos;ll show you exactly how
                  we can help reduce pending days and protect revenue.
                </p>
              </div>
            </div>
            <Button size="lg" className="shrink-0" render={<Link href="/schedule" />}>
              Start the Conversation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
