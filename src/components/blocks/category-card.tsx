import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

type IconComponent = React.ComponentType<{ className?: string }>

/** Elevated, gradient-tinted tile that gives the duotone icon depth. */
export function IconTile({
  icon: Icon,
  active,
  className,
}: {
  icon: IconComponent
  active?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        "grid size-16 place-items-center rounded-2xl bg-gradient-to-br ring-1 shadow-sm transition-colors",
        active
          ? "from-primary/20 to-primary/8 ring-primary/20"
          : "from-primary/12 to-primary/[0.04] ring-primary/10 group-hover:from-primary/18 group-hover:to-primary/8",
        className
      )}
    >
      <Icon className="size-9 text-primary" />
    </span>
  )
}

export function CategoryCard({
  href,
  title,
  description,
  icon,
  active = false,
}: {
  href: string
  title: string
  description: string
  icon: IconComponent
  active?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group relative flex flex-col items-center rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active && "border-primary ring-1 ring-primary/25"
      )}
    >
      <ArrowUpRight
        className="absolute right-4 top-4 size-4 text-muted-foreground/50 transition-colors group-hover:text-primary"
        aria-hidden="true"
      />
      <IconTile icon={icon} active={active} />
      <h3
        className={cn(
          "mt-5 text-base font-semibold",
          active ? "text-primary" : "text-foreground"
        )}
      >
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Link>
  )
}

export function CategoryGrid({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  )
}
