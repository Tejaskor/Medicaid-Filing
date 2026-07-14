/**
 * Central site configuration for Medicaid Filing Connection.
 * Single source of truth for brand, contact, and navigation.
 * Sample/demo build — placeholder contact details.
 */
export const siteConfig = {
  name: "Medicaid Filing Connection",
  shortName: "MFC",
  tagline: "Texas Medicaid, Made Understandable",
  description:
    "The most comprehensive resource for Texas Medicaid planning, eligibility, and applications — helping families, healthcare facilities, and referral partners navigate the process with confidence.",
  url: "https://tejaskor.github.io/Medicaid-Filing",
  locale: "en-US",
  serviceArea: "Texas",
  contact: {
    email: "info@medicaidfilingconnection.example.com",
    phone: "(555) 123-4567",
    phoneHref: "tel:+15551234567",
    address: "1201 Congress Ave, Suite 200, Austin, TX 78701",
    hours: "Mon–Fri, 8:00 AM – 6:00 PM CT",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    youtube: "#",
  },
} as const

export type NavChild = {
  title: string
  href: string
  description?: string
}

export type NavItem = {
  title: string
  href: string
  children?: NavChild[]
}

/** Primary navigation — mirrors the planned information architecture. */
export const mainNav: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Medicaid Application Assistance",
        href: "/services/application-assistance",
        description: "End-to-end help filing a complete, accurate application.",
      },
      {
        title: "Eligibility & Planning",
        href: "/services/eligibility-planning",
        description: "Understand qualification rules and plan ahead with confidence.",
      },
      {
        title: "Long-Term Care Medicaid",
        href: "/services/long-term-care",
        description: "Nursing home, assisted living, and in-home care coverage.",
      },
      {
        title: "Facility Operational Support",
        href: "/services/facility-support",
        description: "Medicaid operational support for healthcare organizations.",
      },
    ],
  },
  {
    title: "Resource Center",
    href: "/resources",
    children: [
      {
        title: "Browse the Library",
        href: "/resources",
        description: "Guides, checklists, and articles on Texas Medicaid.",
      },
      {
        title: "Eligibility Basics",
        href: "/resources/category/eligibility",
        description: "Income, assets, and qualification explained plainly.",
      },
      {
        title: "Application Process",
        href: "/resources/category/application",
        description: "Step-by-step help through every stage of filing.",
      },
      {
        title: "Long-Term Care",
        href: "/resources/category/long-term-care",
        description: "Planning for nursing home and assisted living care.",
      },
    ],
  },
  { title: "Facility Partnerships", href: "/partnerships" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
]

/** Audiences the platform serves — used across the site. */
export const audiences = [
  {
    key: "families",
    title: "Families",
    blurb:
      "Navigate Medicaid planning, eligibility, and applications for a loved one.",
    href: "/services/application-assistance",
  },
  {
    key: "facilities",
    title: "Healthcare Facilities",
    blurb:
      "Nursing homes, assisted living, and rehab centers — Medicaid operational support that protects revenue.",
    href: "/partnerships",
  },
  {
    key: "partners",
    title: "Referral Partners",
    blurb:
      "Discharge planners, elder-law attorneys, and advisors who need a reliable Medicaid partner.",
    href: "/partnerships",
  },
] as const
