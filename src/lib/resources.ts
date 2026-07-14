/**
 * Resource Center content model.
 * In production this maps to a CMS collection; here it seeds the
 * searchable, filterable library and article template.
 */
export type ResourceType = "Guide" | "Article" | "Checklist" | "FAQ" | "Video"

export type ResourceCategory = {
  slug: string
  name: string
  description: string
}

export type Resource = {
  slug: string
  title: string
  excerpt: string
  category: string // category slug
  type: ResourceType
  readingTime: number // minutes
  updated: string // ISO date
  featured?: boolean
  /** Article body as simple sections for the template. */
  body: { heading: string; paragraphs: string[] }[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "eligibility",
    name: "Eligibility Basics",
    description:
      "Income limits, asset rules, and who qualifies for Texas Medicaid.",
  },
  {
    slug: "application",
    name: "Application Process",
    description: "Step-by-step help through every stage of filing.",
  },
  {
    slug: "long-term-care",
    name: "Long-Term Care",
    description:
      "Nursing home, assisted living, and in-home care coverage and planning.",
  },
  {
    slug: "planning",
    name: "Planning & Protection",
    description:
      "Asset protection, spend-down, and the Medicaid look-back period.",
  },
  {
    slug: "facilities",
    name: "For Facilities",
    description:
      "Operational guidance for nursing homes and healthcare organizations.",
  },
]

export const resources: Resource[] = [
  {
    slug: "texas-medicaid-income-limits-2025",
    title: "Texas Medicaid Income Limits: A Plain-English Guide",
    excerpt:
      "What counts as income, where the limits fall for long-term care, and what to do if you're slightly over.",
    category: "eligibility",
    type: "Guide",
    readingTime: 8,
    updated: "2025-11-02",
    featured: true,
    body: [
      {
        heading: "How Texas measures income",
        paragraphs: [
          "Medicaid eligibility in Texas depends on the specific program you're applying for. Long-term care Medicaid uses different thresholds than programs for children or pregnant women, so the first step is always identifying the right program.",
          "Income generally includes Social Security, pensions, and most other regular payments. Understanding what's counted — and what isn't — is often the difference between an approval and a denial.",
        ],
      },
      {
        heading: "What if you're over the limit?",
        paragraphs: [
          "Being slightly over the income limit does not automatically disqualify you. Tools such as a Qualified Income Trust (also called a Miller Trust) can help applicants who exceed the cap still qualify for long-term care Medicaid.",
          "These strategies are compliant and common — but they must be set up correctly and at the right time. This is where working with an experienced partner matters.",
        ],
      },
    ],
  },
  {
    slug: "medicaid-application-checklist",
    title: "The Complete Texas Medicaid Application Checklist",
    excerpt:
      "Every document you'll need to gather before you file — organized so nothing gets missed.",
    category: "application",
    type: "Checklist",
    readingTime: 5,
    updated: "2025-10-18",
    featured: true,
    body: [
      {
        heading: "Financial documents",
        paragraphs: [
          "Bank statements, proof of income, retirement accounts, life insurance policies, and property records are all commonly required. Missing or incomplete financial documentation is the leading cause of application delays.",
        ],
      },
      {
        heading: "Personal and medical documents",
        paragraphs: [
          "Have identity documents, proof of Texas residency, and relevant medical records ready. For long-term care applications, a level-of-care assessment will also be part of the process.",
        ],
      },
    ],
  },
  {
    slug: "medicaid-look-back-period-explained",
    title: "The Medicaid Look-Back Period, Explained",
    excerpt:
      "How the 60-month look-back works in Texas, which transfers trigger penalties, and how to plan ahead.",
    category: "planning",
    type: "Article",
    readingTime: 7,
    updated: "2025-09-30",
    featured: true,
    body: [
      {
        heading: "What the look-back period is",
        paragraphs: [
          "When you apply for long-term care Medicaid in Texas, the state reviews the previous 60 months of financial history for asset transfers made for less than fair market value.",
          "Transfers within that window can create a penalty period during which Medicaid will not pay for care — even if you otherwise qualify.",
        ],
      },
      {
        heading: "Why early planning matters",
        paragraphs: [
          "Because the look-back reaches back five years, the best protection strategies are put in place well before care is needed. Waiting until a health crisis narrows your options considerably.",
        ],
      },
    ],
  },
  {
    slug: "star-plus-waiver-overview",
    title: "STAR+PLUS and Texas Medicaid Waivers Overview",
    excerpt:
      "How Texas waiver programs can cover assisted living and in-home services — and who's eligible.",
    category: "long-term-care",
    type: "Guide",
    readingTime: 9,
    updated: "2025-11-10",
    body: [
      {
        heading: "What STAR+PLUS covers",
        paragraphs: [
          "STAR+PLUS is a Texas managed-care program that combines traditional Medicaid with long-term services and supports, including certain in-home and community-based care.",
          "For families hoping to avoid or delay nursing home placement, understanding waiver options can open the door to care in a less restrictive setting.",
        ],
      },
    ],
  },
  {
    slug: "avoiding-medicaid-application-denials",
    title: "5 Reasons Medicaid Applications Get Denied (and How to Avoid Them)",
    excerpt:
      "The most common, preventable mistakes we see — and exactly how to steer clear of each one.",
    category: "application",
    type: "Article",
    readingTime: 6,
    updated: "2025-10-05",
    body: [
      {
        heading: "Incomplete documentation",
        paragraphs: [
          "The single most common reason for denial is missing paperwork. A rigorous, checklist-driven approach prevents the back-and-forth that stalls applications.",
        ],
      },
      {
        heading: "Missed deadlines",
        paragraphs: [
          "The state issues requests for information with firm deadlines. Missing one can end an application entirely. Active case tracking keeps every deadline covered.",
        ],
      },
    ],
  },
  {
    slug: "reducing-pending-days-facilities",
    title: "How Facilities Can Reduce Medicaid Pending Days",
    excerpt:
      "Practical steps nursing homes and assisted living communities can take to protect census and revenue.",
    category: "facilities",
    type: "Guide",
    readingTime: 7,
    updated: "2025-11-14",
    body: [
      {
        heading: "Why pending days matter",
        paragraphs: [
          "Every day a resident's Medicaid application sits in 'pending' status represents care delivered without confirmed reimbursement. Reducing pending days directly improves a facility's financial health.",
        ],
      },
      {
        heading: "Building a repeatable process",
        paragraphs: [
          "Facilities that pair a clear intake process with a dedicated Medicaid partner see faster approvals and cleaner accounts receivable — turning a reactive scramble into a predictable workflow.",
        ],
      },
    ],
  },
  {
    slug: "spousal-impoverishment-protections",
    title: "Protecting the Healthy Spouse: Impoverishment Rules",
    excerpt:
      "How federal spousal protections keep a community spouse financially secure when a partner needs care.",
    category: "planning",
    type: "Article",
    readingTime: 6,
    updated: "2025-08-22",
    body: [
      {
        heading: "The community spouse resource allowance",
        paragraphs: [
          "Federal rules allow the spouse who remains at home to keep a portion of the couple's combined assets and income. These protections are designed to prevent one spouse's care needs from impoverishing the other.",
        ],
      },
    ],
  },
  {
    slug: "what-is-medicaid-planning",
    title: "What Is Medicaid Planning? A Beginner's Introduction",
    excerpt:
      "A gentle starting point for families who are just beginning to think about long-term care coverage.",
    category: "eligibility",
    type: "Article",
    readingTime: 5,
    updated: "2025-07-15",
    body: [
      {
        heading: "Planning is not the same as hiding assets",
        paragraphs: [
          "Medicaid planning is the legal, ethical process of arranging your finances to qualify for benefits you may be entitled to. It's about using the rules as they're written — not evading them.",
        ],
      },
    ],
  },
]

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug)
}

export function getCategory(slug: string) {
  return resourceCategories.find((c) => c.slug === slug)
}

export function categoryName(slug: string) {
  return getCategory(slug)?.name ?? slug
}
