import type { Metadata } from "next"
import { LegalPage } from "@/components/blocks/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Medicaid Filing Connection collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect and how we use it."
      sections={[
        {
          heading: "Information we collect",
          body: "We collect information you provide directly, such as your name, contact details, and any information you share when requesting a consultation or contacting us.",
        },
        {
          heading: "How we use information",
          body: "We use your information to respond to inquiries, provide our services, and improve your experience. We do not sell your personal information.",
        },
        {
          heading: "Data security",
          body: "We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure.",
        },
        {
          heading: "Contact",
          body: "If you have questions about this policy, please reach out through our contact page.",
        },
      ]}
    />
  )
}
