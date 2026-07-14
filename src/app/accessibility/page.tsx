import type { Metadata } from "next"
import { LegalPage } from "@/components/blocks/legal-page"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to making this website accessible to everyone.",
}

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="We are committed to ensuring our website is accessible to people of all abilities."
      sections={[
        {
          heading: "Our commitment",
          body: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and continually work to improve the experience for every visitor.",
        },
        {
          heading: "Ongoing effort",
          body: "Accessibility is an ongoing effort. We regularly review the site to identify and resolve potential barriers.",
        },
        {
          heading: "Feedback",
          body: "If you encounter any difficulty using our site, please contact us so we can help and improve.",
        },
      ]}
    />
  )
}
