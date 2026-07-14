import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { resources, resourceCategories } from "@/lib/resources"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticRoutes = [
    "",
    "/services",
    "/resources",
    "/partnerships",
    "/about",
    "/faq",
    "/contact",
    "/schedule",
    "/privacy",
    "/terms",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }))

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const categoryRoutes = resourceCategories.map((c) => ({
    url: `${base}/resources/category/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const resourceRoutes = resources.map((r) => ({
    url: `${base}/resources/${r.slug}`,
    lastModified: new Date(r.updated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...categoryRoutes,
    ...resourceRoutes,
  ]
}
