import type { Metadata } from "next"
import Link from "next/link"

import { Container, Section } from "@/components/primitives"
import { PageHero } from "@/components/blocks/page-hero"
import { CtaBand } from "@/components/blocks/cta-band"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/json-ld"
import { faqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Texas Medicaid eligibility, applications, long-term care, and working with Medicaid Filing Connection.",
  alternates: { canonical: "/faq" },
}

const groups = Array.from(new Set(faqs.map((f) => f.category)))

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions we hear most"
        description="Texas Medicaid is complex. Here are clear answers to the questions families and facilities ask us every day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group}>
                <h2 className="text-xl font-semibold">{group}</h2>
                <Accordion className="mt-4 w-full">
                  {faqs
                    .filter((f) => f.category === group)
                    .map((f) => (
                      <AccordionItem key={f.q} value={f.q}>
                        <AccordionTrigger className="text-left text-base font-medium">
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center">
            <p className="font-medium">Still have a question?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;re happy to help — reach out and we&apos;ll get you an
              answer.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
