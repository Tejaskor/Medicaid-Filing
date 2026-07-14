import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  MessageSquareText,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Container, Section, SectionHeading, Eyebrow } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { StatBar } from "@/components/blocks/stats"
import { CtaBand } from "@/components/blocks/cta-band"
import { MediaSplit } from "@/components/blocks/media-split"
import { ResourceCard } from "@/components/blocks/cards"
import { CategoryCard, CategoryGrid } from "@/components/blocks/category-card"
import { serviceIcons, audienceIcons } from "@/components/icons/category-icons"
import { services } from "@/lib/services"
import { resources } from "@/lib/resources"
import { audiences } from "@/lib/site-config"
import { images } from "@/lib/images"

const steps = [
  {
    icon: MessageSquareText,
    title: "Free eligibility review",
    body: "Tell us about your situation. We assess where you stand — no jargon, no obligation.",
  },
  {
    icon: ScrollText,
    title: "A clear plan",
    body: "We map the path to coverage and the documents you'll need, organized so nothing slips.",
  },
  {
    icon: FileCheck2,
    title: "We file it right",
    body: "We prepare, review, and submit a complete application, then track it through the state.",
  },
  {
    icon: ShieldCheck,
    title: "Approval & beyond",
    body: "We respond to state requests and manage renewals so coverage stays uninterrupted.",
  },
]

const values = [
  {
    title: "Educate first, sell second",
    body: "Our Resource Center exists to make you smarter about Medicaid — whether or not you ever hire us.",
  },
  {
    title: "Plain language, always",
    body: "Medicaid is complicated. Our job is to make it understandable, not to hide behind acronyms.",
  },
  {
    title: "One point of contact",
    body: "You'll work with a real person who knows your case from the first call to final approval.",
  },
]

export default function HomePage() {
  const featured = resources.filter((r) => r.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-authority relative">
        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Serving families &amp; facilities across Texas
            </span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Texas Medicaid,{" "}
              <span className="text-primary">made understandable</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We help Texas families and healthcare facilities navigate Medicaid
              planning, eligibility, and applications — with less stress, fewer
              denials, and a clear path from first question to final approval.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="/schedule" />}>
                Schedule a Free Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/resources" />}
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Explore the Resource Center
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "No-pressure consultation",
                "Statewide Texas coverage",
                "Facility partnerships available",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[var(--success)]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-xl shadow-primary/10">
                <Image
                  src={images.heroFamilySupport.src}
                  alt={images.heroFamilySupport.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  placeholder="blur"
                  blurDataURL={images.heroFamilySupport.blurDataURL}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur lg:block">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--success)]/12 text-[var(--success)]">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">
                      Trusted by Texas families
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Free, no-pressure consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatBar />

      {/* Who we help */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="One partner for every side of Medicaid"
            description="Families planning for a loved one. Facilities protecting their census. Partners who need someone they can trust to get it right."
          />
          <CategoryGrid className="mt-10 lg:grid-cols-3">
            {audiences.map((a) => (
              <CategoryCard
                key={a.key}
                title={a.title}
                description={a.blurb}
                href={a.href}
                icon={audienceIcons[a.key]}
              />
            ))}
          </CategoryGrid>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Services built around real situations"
              description="From a first eligibility question to full facility operational support, we meet you wherever you are in the process."
            />
            <Button
              variant="outline"
              className="w-fit shrink-0"
              render={<Link href="/services" />}
            >
              View all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <CategoryGrid className="mt-10">
            {services.map((service, i) => (
              <CategoryCard
                key={service.slug}
                title={service.title}
                description={service.summary}
                href={`/services/${service.slug}`}
                icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
                active={i === 0}
              />
            ))}
          </CategoryGrid>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="A clear path, from first call to approval"
            description="No mystery, no runaround. Here's exactly how we work with you."
            className="mx-auto"
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="relative flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </li>
              )
            })}
          </ol>
        </Container>
      </Section>

      {/* Support / partner narrative */}
      <Section>
        <MediaSplit
          image={images.caregiverHands}
          reverse
          eyebrow="A partner, not a portal"
          title="We handle the hard part, so your family doesn't have to"
          bullets={[
            "One dedicated point of contact from first call to approval",
            "We gather documents, prepare the application, and track it with the state",
            "Fewer denials and delays — because the details are handled right",
          ]}
          cta={{ href: "/services", label: "See how we help" }}
        >
          <p>
            A health crisis is stressful enough without a maze of Medicaid
            paperwork. We step in as your guide and advocate, turning a
            confusing process into a few clear steps.
          </p>
        </MediaSplit>
      </Section>

      {/* Resource Center teaser */}
      <Section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Texas Medicaid Resource Center"
              title="Learn before you decide"
              description="Guides, checklists, and plain-English articles that answer the questions families actually ask."
            />
            <Button
              variant="outline"
              className="w-fit shrink-0"
              render={<Link href="/resources" />}
            >
              Browse the library
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Values / why us */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-sm">
                <Image
                  src={images.planningTogether.src}
                  alt={images.planningTogether.alt}
                  fill
                  sizes="(min-width: 1024px) 44rem, 100vw"
                  placeholder="blur"
                  blurDataURL={images.planningTogether.blurDataURL}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <Eyebrow>Why families trust us</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                The authority on Texas Medicaid — and the partner who actually
                picks up the phone
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We built the most comprehensive Texas Medicaid resource anywhere
                because informed families make better decisions. When you&apos;re
                ready for help, the same expertise is there to guide you.
              </p>
              <div className="mt-8 grid gap-4">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-[var(--success)]/12 text-[var(--success)]">
                      <CheckCircle2 className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-8" render={<Link href="/about" />}>
                Learn about our approach
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section className="bg-primary/[0.04] py-16 sm:py-20">
        <Container>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-balance text-2xl font-medium leading-relaxed sm:text-3xl">
              &ldquo;They turned the most stressful paperwork of my life into a
              handful of simple steps. My mother&apos;s coverage was approved
              without a single delay.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Family caregiver
              </span>{" "}
              · Long-term care Medicaid, Dallas, TX
            </figcaption>
          </figure>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
