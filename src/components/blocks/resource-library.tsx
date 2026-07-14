"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ResourceCard } from "@/components/blocks/cards"
import type { Resource, ResourceCategory, ResourceType } from "@/lib/resources"

const types: (ResourceType | "All")[] = [
  "All",
  "Guide",
  "Article",
  "Checklist",
  "Video",
  "FAQ",
]

export function ResourceLibrary({
  resources,
  categories,
}: {
  resources: Resource[]
  categories: ResourceCategory[]
}) {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState<string>("all")
  const [type, setType] = React.useState<ResourceType | "All">("All")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q)
      const matchesCategory = category === "all" || r.category === category
      const matchesType = type === "All" || r.type === type
      return matchesQuery && matchesCategory && matchesType
    })
  }, [resources, query, category, type])

  const hasFilters = query !== "" || category !== "all" || type !== "All"

  function reset() {
    setQuery("")
    setCategory("all")
    setType("All")
  }

  return (
    <div>
      {/* Controls */}
      <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, checklists, and articles…"
            aria-label="Search the resource library"
            className="h-11 pl-10"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <FilterChip
              active={category === "all"}
              onClick={() => setCategory("all")}
            >
              All topics
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>

          {/* Type select */}
          <div className="flex items-center gap-2">
            <label htmlFor="type-filter" className="text-sm text-muted-foreground">
              Type
            </label>
            <select
              id="type-filter"
              value={type}
              onChange={(e) => setType(e.target.value as ResourceType | "All")}
              className="h-9 rounded-lg border bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results meta */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
          {hasFilters ? " match your filters" : ""}
        </p>
        {hasFilters ? (
          <Button variant="ghost" size="sm" onClick={reset}>
            <X className="size-4" aria-hidden="true" />
            Clear filters
          </Button>
        ) : null}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed bg-muted/30 p-12 text-center">
          <p className="text-base font-medium">No resources found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term or clear your filters.
          </p>
          <Button variant="outline" className="mt-5" onClick={reset}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}
