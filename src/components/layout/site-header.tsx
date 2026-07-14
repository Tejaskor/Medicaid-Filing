"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { mainNav, siteConfig, type NavItem } from "@/lib/site-config"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const active = isActive(pathname, item.href)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active && "text-primary"
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className="group/nav relative">
      <Link
        href={item.href}
        className={cn(
          "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active && "text-primary"
        )}
        aria-haspopup="true"
      >
        {item.title}
        <ChevronDown
          className="size-3.5 transition-transform duration-200 group-hover/nav:rotate-180 group-has-[a:focus-visible]/nav:rotate-180"
          aria-hidden="true"
        />
      </Link>

      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 pt-2 opacity-0 translate-y-1 transition-all duration-200",
          "group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0",
          "group-has-[a:focus-visible]/nav:visible group-has-[a:focus-visible]/nav:opacity-100 group-has-[a:focus-visible]/nav:translate-y-0"
        )}
      >
        <div className="w-80 rounded-xl border bg-popover p-2 shadow-lg ring-1 ring-black/5">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
            >
              <span className="block text-sm font-medium text-foreground">
                {child.title}
              </span>
              {child.description ? (
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                  {child.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <DesktopNavItem key={item.title} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <Button render={<Link href="/schedule" />}>
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button size="sm" render={<Link href="/schedule" />}>
            Consultation
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex size-10 items-center justify-center rounded-lg border text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <SheetHeader className="border-b px-5 py-4">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-3 py-4">
                <Accordion className="w-full">
                  {mainNav.map((item) =>
                    item.children ? (
                      <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger className="px-2 text-base font-medium">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <div className="flex flex-col">
                            {item.children.map((child) => (
                              <SheetClose
                                key={child.href}
                                render={
                                  <Link
                                    href={child.href}
                                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                  />
                                }
                              >
                                {child.title}
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <SheetClose
                        key={item.title}
                        render={
                          <Link
                            href={item.href}
                            className="flex items-center rounded-lg px-4 py-3.5 text-base font-medium hover:bg-muted"
                          />
                        }
                      >
                        {item.title}
                      </SheetClose>
                    )
                  )}
                </Accordion>
              </div>

              <div className="border-t p-4">
                <Button
                  className="w-full"
                  render={<Link href="/schedule" />}
                >
                  Schedule Consultation
                </Button>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
