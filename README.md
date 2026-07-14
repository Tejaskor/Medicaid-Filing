# Medicaid Filing Connection — Demo Website

A premium, content-rich authority website concept for **Medicaid Filing Connection**,
a Texas-based Medicaid planning and application company.

This is a **sample/demo build** created to demonstrate design and engineering
quality. It implements the client's full vision — information architecture,
premium editorial design, SEO, a searchable resource library, and lead capture —
in a modern React stack rather than WordPress.

> Reference bar for quality & feel: Mayo Clinic, Stripe, NerdWallet, Investopedia.
> Educate first, sell second.

## Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Base UI primitives), Lucide icons |
| Fonts | Geist Sans / Geist Mono |
| Forms | react-hook-form + Zod + Sonner toasts |
| Rendering | Static Site Generation (SSG) for every page |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm start        # serve the production build
```

## Information Architecture

- `/` — Homepage (authority hero, audiences, services, resource teaser, trust, CTA)
- `/services` + `/services/[slug]` — Services index and detail template
- `/resources` — **Texas Medicaid Resource Center** (searchable + filterable library)
- `/resources/[slug]` — Article/guide template
- `/resources/category/[slug]` — Category pages
- `/partnerships` — Facility Partnerships (B2B)
- `/about`, `/faq`, `/contact`, `/schedule` — Core pages
- `/privacy`, `/terms`, `/accessibility` — Legal
- `sitemap.xml`, `robots.txt` — generated automatically

## What's Implemented

- **Premium, minimal design** — heavy whitespace, refined typography, an
  accessible medical-teal + emerald palette, light/dark aware tokens.
- **Real photography** — CC0 (public-domain) imagery on the homepage hero and
  section blocks, served through `next/image` (auto WebP/AVIF, responsive
  `srcset`, blur-up placeholders). Swap in client photos by replacing the files
  in `public/images/` — see `public/images/CREDITS.md`.
- **Fully responsive**, mobile-first, sticky header with dropdown nav and a
  mobile sheet menu.
- **Searchable, filterable Resource Center** (keyword search + topic + type filters).
- **Lead capture** — validated Contact and Schedule forms with inline errors,
  loading state, and success toasts. _(Demo only — not wired to a backend.)_
- **SEO** — per-page metadata & canonicals, Open Graph/Twitter, XML sitemap,
  robots, and **JSON-LD schema** (Organization, WebSite+SearchAction, Service,
  Article, FAQPage).
- **Accessibility** — skip link, semantic landmarks, keyboard-navigable nav,
  visible focus rings, `aria` labeling, and `prefers-reduced-motion` support.
- **Performance** — 100% statically prerendered pages for excellent Core Web Vitals.

## Scalability Notes

Content lives in typed modules under `src/lib/` (`services.ts`, `resources.ts`,
`faqs.ts`). Each maps cleanly to a CMS collection, so the site is built to scale
to hundreds of articles. Templates (`[slug]` routes) render any number of items
via `generateStaticParams`. Future phases (calculators, downloads, client portal,
AI assistant, referral portal) slot in as new routes/components without rework.

## Project Structure

```
src/
  app/                    # App Router pages, layout, sitemap, robots
  components/
    layout/               # SiteHeader, SiteFooter
    blocks/               # Composable sections (hero, cards, CTA, forms, library)
    seo/                  # JSON-LD helper
    ui/                   # shadcn/ui primitives
  lib/                    # site-config + typed content (services, resources, faqs)
```
