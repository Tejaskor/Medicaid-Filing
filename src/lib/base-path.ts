/**
 * Base path for the deployment.
 *
 * next/link and _next assets get the basePath automatically, but files served
 * from /public (e.g. images) do NOT when using unoptimized images, so we
 * prepend it explicitly via `asset()`.
 *
 * Kept in sync with `basePath` in next.config.ts (GitHub Pages build).
 */
export const basePath =
  process.env.GITHUB_PAGES === "true" ? "/Medicaid-Filing" : ""

export function asset(path: string) {
  return `${basePath}${path}`
}
