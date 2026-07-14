import { cn } from "@/lib/utils"

/**
 * Cohesive duotone icon family for category / service cards.
 * Two-tone brand-green fills via Tailwind token classes so every icon
 * adapts automatically to light/dark mode. viewBox is a 48×48 grid.
 */
type IconProps = { className?: string }

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-full", className)}
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function ChecklistIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="12" y="8" width="24" height="33" rx="4" className="fill-primary/15" />
      <rect x="18" y="5" width="12" height="6" rx="3" className="fill-primary/40" />
      <circle cx="19" cy="19" r="2.2" className="fill-primary" />
      <rect x="23.5" y="17.5" width="9" height="3" rx="1.5" className="fill-primary/40" />
      <circle cx="19" cy="27" r="2.2" className="fill-primary" />
      <rect x="23.5" y="25.5" width="9" height="3" rx="1.5" className="fill-primary/40" />
      <circle cx="19" cy="35" r="2.2" className="fill-primary/40" />
      <rect x="23.5" y="33.5" width="6" height="3" rx="1.5" className="fill-primary/25" />
    </Svg>
  )
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M24 5l15 5.2v9.3C39 29 32.8 35.9 24 39c-8.8-3.1-15-10-15-19.5V10.2L24 5z"
        className="fill-primary/15"
      />
      <path
        d="M17 24l4.6 4.6L31 18.5"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function HouseHeartIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 8l16 12.5V22H8v-1.5L24 8z" className="fill-primary/40" />
      <rect x="12" y="22" width="24" height="18" rx="2.5" className="fill-primary/15" />
      <path
        d="M24 37.5c-4.3-3-6.7-5.2-6.7-8.2 0-2.1 1.6-3.7 3.6-3.7 1.3 0 2.4.7 3.1 1.8.7-1.1 1.8-1.8 3.1-1.8 2 0 3.6 1.6 3.6 3.7 0 3-2.4 5.2-6.7 8.2z"
        className="fill-primary"
      />
    </Svg>
  )
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 6l16 8.5V17H8v-2.5L24 6z" className="fill-primary/40" />
      <rect x="11" y="17" width="26" height="21" rx="1.5" className="fill-primary/15" />
      <rect x="15" y="21" width="4" height="13" rx="1" className="fill-primary/35" />
      <rect x="22" y="21" width="4" height="13" rx="1" className="fill-primary/35" />
      <rect x="29" y="21" width="4" height="13" rx="1" className="fill-primary/35" />
      <rect x="8" y="38" width="32" height="4" rx="1.5" className="fill-primary" />
    </Svg>
  )
}

export function FamilyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 41c0-6.1 4.7-11 10.5-11S29 34.9 29 41z" className="fill-primary/25" />
      <circle cx="18.5" cy="16" r="6.5" className="fill-primary" />
      <path d="M27 41c0-4.7 3.4-8.5 7.5-8.5S42 36.3 42 41z" className="fill-primary/15" />
      <circle cx="34.5" cy="22" r="5" className="fill-primary/45" />
    </Svg>
  )
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M19 16v-2.5A3.5 3.5 0 0 1 22.5 10h3A3.5 3.5 0 0 1 29 13.5V16"
        className="stroke-primary"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <rect x="8" y="16" width="32" height="23" rx="3.5" className="fill-primary/15" />
      <rect x="8" y="24" width="32" height="3" className="fill-primary/30" />
      <rect x="21" y="23" width="6" height="5" rx="1.5" className="fill-primary" />
    </Svg>
  )
}

export function UmbrellaIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 8c9 0 16.2 6 16.2 13.2 0 .5-.4.8-.8.8H8.6c-.4 0-.8-.3-.8-.8C7.8 14 15 8 24 8z" className="fill-primary/25" />
      <rect x="22.4" y="21" width="3.2" height="15" rx="1.6" className="fill-primary/45" />
      <path
        d="M25.6 34.5c0 3.1-2.6 5.5-5.8 5.5"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="8.5" r="2.2" className="fill-primary" />
    </Svg>
  )
}

export function ScaleIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="22.5" y="10" width="3" height="28" rx="1.5" className="fill-primary/45" />
      <rect x="14" y="38" width="20" height="4" rx="2" className="fill-primary" />
      <circle cx="24" cy="10" r="3.2" className="fill-primary" />
      <path d="M10 15h28" className="stroke-primary/45" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 15l-5 9a5 5 0 0 0 10 0l-5-9z" className="fill-primary/15" />
      <path d="M38 15l-5 9a5 5 0 0 0 10 0l-5-9z" className="fill-primary/15" />
    </Svg>
  )
}

/** Slug/key → icon component maps used across the site. */
export const serviceIcons = {
  "application-assistance": ChecklistIcon,
  "eligibility-planning": ScaleIcon,
  "long-term-care": HouseHeartIcon,
  "facility-support": BuildingIcon,
} as const

export const audienceIcons = {
  families: FamilyIcon,
  facilities: BuildingIcon,
  partners: BriefcaseIcon,
} as const

export const categoryIcons = {
  eligibility: ShieldCheckIcon,
  application: ChecklistIcon,
  "long-term-care": HouseHeartIcon,
  planning: UmbrellaIcon,
  facilities: BuildingIcon,
} as const
