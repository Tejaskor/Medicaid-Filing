import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { Container } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

type CtaBandProps = {
  title?: string
  description?: string
}

export function CtaBand({
  title = "Not sure where to start? Neither are most families.",
  description = "Book a free, no-pressure consultation. We'll review your situation and explain your Medicaid options in plain language.",
}: CtaBandProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(30rem 20rem at 90% -20%, rgba(255,255,255,0.35), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                size="lg"
                variant="secondary"
                render={<Link href="/schedule" />}
              >
                Schedule a Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<a href={siteConfig.contact.phoneHref} />}
              >
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
