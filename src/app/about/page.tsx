import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, HeartHandshake, ShieldCheck } from "lucide-react"

import { Container, Section, SectionHeading, Eyebrow } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import { StatBar } from "@/components/blocks/stats"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description:
    "Medicaid Filing Connection helps Texas families and healthcare facilities navigate Medicaid with clarity, expertise, and genuine care.",
  alternates: { canonical: "/about" },
}

const principles = [
  {
    icon: Compass,
    title: "Clarity over complexity",
    body: "We translate a famously confusing system into steps anyone can follow. If you don't understand it, we haven't done our job.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity in everything",
    body: "Medicaid planning is legal and ethical. We use the rules exactly as written — and we're transparent about what's possible.",
  },
  {
    icon: HeartHandshake,
    title: "People before paperwork",
    body: "Behind every application is a family under stress. We lead with empathy and treat your situation like it's our own.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Texas Medicaid is complicated. We make it navigable."
        description="Medicaid Filing Connection was built on a simple belief: families facing a health crisis shouldn't also have to become Medicaid experts overnight."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                To be the most trusted guide to Texas Medicaid
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We help Texas families navigate Medicaid planning, eligibility,
                  and the application process — and we partner with healthcare
                  facilities to provide customized operational support.
                </p>
                <p>
                  We also believe education is the foundation of good decisions.
                  That&apos;s why we&apos;ve invested in building the most
                  comprehensive Texas Medicaid resource anywhere — free and open
                  to everyone, whether or not they ever become a client.
                </p>
                <p>
                  When families are informed, they make better choices. And when
                  they&apos;re ready for hands-on help, we&apos;re here with the
                  expertise to guide them through every step.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <h3 className="text-lg font-semibold">Who we help</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="font-medium">Texas families</p>
                    <p className="mt-1 text-muted-foreground">
                      Planning for a parent, spouse, or loved one who needs care.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Healthcare facilities</p>
                    <p className="mt-1 text-muted-foreground">
                      Nursing homes, assisted living, and rehab centers seeking
                      operational support.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Referral partners</p>
                    <p className="mt-1 text-muted-foreground">
                      Discharge planners, attorneys, and advisors who need a
                      reliable Medicaid partner.
                    </p>
                  </li>
                </ul>
                <Button className="mt-6 w-full" render={<Link href="/services" />}>
                  Explore our services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <StatBar />

      {/* Principles */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="What we stand for"
            title="The principles behind every case"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border bg-card p-6 text-center"
                >
                  <span className="mx-auto grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
