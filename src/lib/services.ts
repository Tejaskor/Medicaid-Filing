import type { LucideIcon } from "lucide-react"
import {
  ClipboardCheck,
  Scale,
  HeartHandshake,
  Building2,
} from "lucide-react"

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  audience: string
  summary: string
  /** Longer intro shown on the detail page hero. */
  intro: string
  outcomes: string[]
  steps: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: "application-assistance",
    title: "Medicaid Application Assistance",
    icon: ClipboardCheck,
    audience: "For families",
    summary:
      "End-to-end support to file a complete, accurate Texas Medicaid application — the first time.",
    intro:
      "The Texas Medicaid application is long, document-heavy, and unforgiving of small errors. We prepare, review, and submit your application, then track it through approval so nothing falls through the cracks.",
    outcomes: [
      "A complete application package with every required document",
      "Fewer denials and requests for additional information",
      "A single point of contact from filing through approval",
      "Clear timelines so your family always knows what's next",
    ],
    steps: [
      {
        title: "Free eligibility review",
        body: "We assess your situation and explain exactly where you stand before any paperwork begins.",
      },
      {
        title: "Document gathering",
        body: "A guided checklist and hands-on help collecting financial and medical records.",
      },
      {
        title: "Preparation & submission",
        body: "We complete the application, review it line by line, and submit to the state.",
      },
      {
        title: "Tracking to approval",
        body: "We respond to state requests and keep your case moving until a decision is made.",
      },
    ],
    faqs: [
      {
        q: "How long does a Texas Medicaid application take?",
        a: "Most applications receive a decision within 45 days, though long-term care cases can take longer. We track every case actively to avoid preventable delays.",
      },
      {
        q: "What if I've already been denied?",
        a: "We regularly help families correct and re-file after a denial, and can assist with the appeals process.",
      },
    ],
  },
  {
    slug: "eligibility-planning",
    title: "Eligibility & Planning",
    icon: Scale,
    audience: "For families",
    summary:
      "Understand Texas Medicaid income and asset rules — and plan ahead so you qualify without costly mistakes.",
    intro:
      "Qualifying for Medicaid is about more than income. Asset limits, transfer rules, and look-back periods trip up families every day. We help you understand the rules and build a compliant plan before you apply.",
    outcomes: [
      "A clear picture of income and asset eligibility",
      "A compliant plan that avoids transfer penalties",
      "Coordination with your attorney or financial advisor",
      "Confidence that you're applying at the right time",
    ],
    steps: [
      {
        title: "Situation assessment",
        body: "We review income, assets, and care needs to map your path to eligibility.",
      },
      {
        title: "Strategy",
        body: "We outline compliant options and the trade-offs of each, in plain language.",
      },
      {
        title: "Coordination",
        body: "We work alongside your elder-law attorney or advisor where appropriate.",
      },
      {
        title: "Readiness check",
        body: "We confirm you meet the criteria before an application is filed.",
      },
    ],
    faqs: [
      {
        q: "What is the Medicaid look-back period in Texas?",
        a: "Texas uses a 60-month look-back for long-term care Medicaid. Transfers made during that window can create penalties, which is why early planning matters.",
      },
      {
        q: "Will I lose my home?",
        a: "In many cases a primary residence is protected up to certain limits. We help you understand exactly how the rules apply to your situation.",
      },
    ],
  },
  {
    slug: "long-term-care",
    title: "Long-Term Care Medicaid",
    icon: HeartHandshake,
    audience: "For families",
    summary:
      "Coverage for nursing homes, assisted living, and in-home care — with planning that protects your family.",
    intro:
      "Long-term care is the most complex — and most expensive — corner of Medicaid. We specialize in helping families secure coverage for nursing home, assisted living, and in-home care while navigating spend-down and spousal protections.",
    outcomes: [
      "Coverage secured for the appropriate level of care",
      "Spousal impoverishment protections applied correctly",
      "A compliant spend-down plan where needed",
      "Coordination with the care facility's admissions team",
    ],
    steps: [
      {
        title: "Care & financial review",
        body: "We evaluate the level of care needed and the financial picture together.",
      },
      {
        title: "Protection planning",
        body: "We apply spousal and homestead protections available under Texas rules.",
      },
      {
        title: "Application & placement support",
        body: "We coordinate with the facility so admission and coverage move in step.",
      },
      {
        title: "Ongoing case management",
        body: "We manage renewals and changes so coverage stays uninterrupted.",
      },
    ],
    faqs: [
      {
        q: "Does Medicaid pay for assisted living in Texas?",
        a: "Texas offers waiver programs such as STAR+PLUS that can cover certain assisted living and in-home services. Eligibility and availability vary, and we help you understand your options.",
      },
      {
        q: "What happens to the healthy spouse's income?",
        a: "Federal spousal impoverishment rules protect a portion of income and assets for the community spouse. We ensure those protections are applied correctly.",
      },
    ],
  },
  {
    slug: "facility-support",
    title: "Facility Operational Support",
    icon: Building2,
    audience: "For healthcare organizations",
    summary:
      "Customized Medicaid operational support for nursing homes, assisted living, and rehab centers.",
    intro:
      "For facilities, pending and denied Medicaid applications directly impact census and revenue. We become an extension of your team — managing resident applications, reducing pending days, and protecting reimbursement.",
    outcomes: [
      "Fewer pending days and cleaner accounts receivable",
      "A dedicated liaison for your admissions and business office",
      "Higher application approval rates for residents",
      "Predictable, transparent reporting for leadership",
    ],
    steps: [
      {
        title: "Partnership scoping",
        body: "We learn your census, payer mix, and pain points to design the right engagement.",
      },
      {
        title: "Onboarding",
        body: "We integrate with your admissions and business office workflows.",
      },
      {
        title: "Application management",
        body: "We manage resident Medicaid applications end-to-end on your behalf.",
      },
      {
        title: "Reporting & optimization",
        body: "Regular reporting on pending days, approvals, and revenue impact.",
      },
    ],
    faqs: [
      {
        q: "How do you work with our business office?",
        a: "We operate as an extension of your team with a dedicated liaison, shared reporting, and clearly defined handoffs — customized to your existing workflows.",
      },
      {
        q: "What types of facilities do you support?",
        a: "Nursing homes, assisted living communities, rehabilitation centers, and other healthcare organizations that serve Medicaid-eligible residents.",
      },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
