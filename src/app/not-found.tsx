import Link from "next/link"
import { ArrowRight, Home, Search } from "lucide-react"

import { Container, Section } from "@/components/primitives"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Section className="bg-authority">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          404
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you&apos;re looking for may have moved. Try the homepage or
          browse our Texas Medicaid Resource Center.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/" />}>
            <Home className="size-4" aria-hidden="true" />
            Back to home
          </Button>
          <Button variant="outline" render={<Link href="/resources" />}>
            <Search className="size-4" aria-hidden="true" />
            Search resources
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
