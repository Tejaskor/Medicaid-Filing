import { Container } from "@/components/primitives"

export type Stat = { value: string; label: string }

const defaultStats: Stat[] = [
  { value: "60-month", label: "Medicaid look-back period we help you navigate" },
  { value: "45 days", label: "Typical time to an application decision" },
  { value: "100%", label: "Applications reviewed line-by-line before filing" },
  { value: "Statewide", label: "Serving families across Texas" },
]

export function StatBar({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="border-y bg-muted/40 py-12">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-sm leading-snug text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
