import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { resourceCategories } from "@/lib/resources"
import { Logo } from "@/components/logo"

const columns = [
  {
    heading: "Services",
    links: services.map((s) => ({
      title: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  {
    heading: "Resource Center",
    links: [
      { title: "Browse the Library", href: "/resources" },
      ...resourceCategories.slice(0, 4).map((c) => ({
        title: c.name,
        href: `/resources/category/${c.slug}`,
      })),
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Facility Partnerships", href: "/partnerships" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact", href: "/contact" },
      { title: "Schedule a Consultation", href: "/schedule" },
    ],
  },
]

export function SiteFooter() {
  const year = 2026

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-foreground">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-foreground">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground/80">
          Medicaid Filing Connection provides Medicaid planning and application
          assistance. We are not a government agency and are not affiliated with
          any state or federal Medicaid program. Information on this site is
          educational and not legal or financial advice.
        </p>
      </div>
    </footer>
  )
}
