import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import type { SiteImage } from "@/lib/images"

export function MediaSplit({
  image,
  reverse = false,
  eyebrow,
  title,
  children,
  bullets,
  cta,
  priority = false,
}: {
  image: SiteImage
  reverse?: boolean
  eyebrow?: string
  title: string
  children?: React.ReactNode
  bullets?: string[]
  cta?: { href: string; label: string }
  priority?: boolean
}) {
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reverse && "lg:order-2")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-sm">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 44rem, 100vw"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {children ? (
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        ) : null}
        {bullets ? (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-[var(--success)]"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <Button className="mt-8" render={<Link href={cta.href} />}>
            {cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </Container>
  )
}
