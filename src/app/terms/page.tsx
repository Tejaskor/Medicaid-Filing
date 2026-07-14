import type { Metadata } from "next"
import { LegalPage } from "@/components/blocks/legal-page"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Medicaid Filing Connection website.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By using this website, you agree to the following terms."
      sections={[
        {
          heading: "Educational purpose",
          body: "Content on this site is provided for general educational purposes and does not constitute legal, financial, or medical advice.",
        },
        {
          heading: "No government affiliation",
          body: "Medicaid Filing Connection is a private company and is not affiliated with any state or federal Medicaid program or agency.",
        },
        {
          heading: "Use of the site",
          body: "You agree to use this site lawfully and not to misuse any content or functionality provided here.",
        },
        {
          heading: "Changes",
          body: "We may update these terms from time to time. Continued use of the site constitutes acceptance of any changes.",
        },
      ]}
    />
  )
}
