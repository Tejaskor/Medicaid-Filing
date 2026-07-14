/**
 * Renders a JSON-LD structured-data script.
 * Keeps schema markup colocated with the page that owns it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static content authored in-repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
