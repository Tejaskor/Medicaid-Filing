export type Faq = {
  q: string
  a: string
  category: "Eligibility" | "Applications" | "Long-Term Care" | "Working With Us"
}

export const faqs: Faq[] = [
  {
    category: "Eligibility",
    q: "Who qualifies for Medicaid in Texas?",
    a: "Eligibility depends on the specific program, your income, your assets, and your care needs. Long-term care Medicaid has different rules than programs for children or pregnant women. A free eligibility review is the fastest way to know where you stand.",
  },
  {
    category: "Eligibility",
    q: "What are the income and asset limits?",
    a: "Limits vary by program and change over time. Being slightly over a limit does not always disqualify you — compliant tools like a Qualified Income Trust can help. We'll walk you through the numbers that apply to your situation.",
  },
  {
    category: "Applications",
    q: "How long does the application process take?",
    a: "Most applications receive a decision within about 45 days, though long-term care cases can take longer. Active case management helps avoid the preventable delays that stretch timelines out.",
  },
  {
    category: "Applications",
    q: "What happens if my application is denied?",
    a: "A denial is not the end of the road. We frequently help families correct issues and re-file, and we can assist with the formal appeals process when appropriate.",
  },
  {
    category: "Long-Term Care",
    q: "Does Medicaid pay for nursing homes and assisted living?",
    a: "Medicaid can cover nursing home care, and Texas waiver programs like STAR+PLUS may cover certain assisted living and in-home services. Coverage depends on eligibility and program availability.",
  },
  {
    category: "Long-Term Care",
    q: "Will my family lose our home or savings?",
    a: "Many assets, including a primary residence up to certain limits, can be protected. Federal spousal rules also shield income and assets for a spouse who remains at home. Proper planning is key.",
  },
  {
    category: "Working With Us",
    q: "How is Medicaid Filing Connection different from doing it myself?",
    a: "We handle the complexity — document gathering, accurate preparation, deadline tracking, and communication with the state — so you avoid the errors that cause denials and delays. You get a single point of contact from start to finish.",
  },
  {
    category: "Working With Us",
    q: "Do you work with healthcare facilities?",
    a: "Yes. We partner with nursing homes, assisted living communities, and rehabilitation centers to provide customized Medicaid operational support that reduces pending days and protects revenue.",
  },
]
