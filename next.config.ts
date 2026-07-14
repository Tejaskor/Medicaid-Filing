import type { NextConfig } from "next"

/**
 * Static-export config for GitHub Pages.
 *
 * The site is fully static (every route is prerendered; forms are client-side
 * demo-only), so it exports to plain HTML/CSS/JS in `out/`.
 *
 * `basePath`/`assetPrefix` are only applied in the GitHub Pages build (the
 * Action sets GITHUB_PAGES=true) so local `next dev`/`next start` still serve
 * from the root. Update `repo` if the repository is renamed.
 */
const repo = "Medicaid-Filing"
const isPages = process.env.GITHUB_PAGES === "true"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
}

export default nextConfig
