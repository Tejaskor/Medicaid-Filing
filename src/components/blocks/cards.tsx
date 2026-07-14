import Link from "next/link"
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { type Service } from "@/lib/services"
import { type Resource, categoryName } from "@/lib/resources"

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5.5" aria-hidden="true" />
      </span>
      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {service.audience}
      </p>
      <h3 className="mt-1.5 text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}

export function ResourceCard({
  resource,
  className,
}: {
  resource: Resource
  className?: string
}) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="font-medium">
          {resource.type}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {categoryName(resource.category)}
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" />
          {resource.readingTime} min read
        </span>
        <ArrowUpRight
          className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}

export function AudienceCard({
  title,
  blurb,
  href,
}: {
  title: string
  blurb: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {blurb}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Explore
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
