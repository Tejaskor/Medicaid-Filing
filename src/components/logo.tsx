import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

/**
 * Brand lockup. The mark is an inline SVG (crisp, themeable) rather than a
 * raster asset — a shield + cross conveying trust and healthcare.
 */
export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 21.3 5 17.4 5 13V6l7-3z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      </span>
      {showText ? (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">
            Medicaid Filing
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-primary">
            Connection
          </span>
        </span>
      ) : null}
    </Link>
  )
}
