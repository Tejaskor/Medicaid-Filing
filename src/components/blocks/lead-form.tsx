"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  role: z.string().min(1, "Please choose an option."),
  message: z.string().max(1000).optional(),
})

type FormValues = z.infer<typeof schema>

const roleOptions = [
  { value: "", label: "Select one…" },
  { value: "family", label: "I'm helping a family member" },
  { value: "self", label: "I'm applying for myself" },
  { value: "facility", label: "I represent a healthcare facility" },
  { value: "partner", label: "I'm a referral partner" },
  { value: "other", label: "Something else" },
]

export function LeadForm({
  variant = "contact",
}: {
  variant?: "contact" | "schedule"
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", role: "", message: "" },
    mode: "onBlur",
  })

  const {
    formState: { isSubmitting },
  } = form

  async function onSubmit(values: FormValues) {
    // Demo only — simulate a network request. Wire to your CRM/API in production.
    await new Promise((r) => setTimeout(r, 900))
    // eslint-disable-next-line no-console
    console.info("Lead submitted:", values)
    toast.success(
      variant === "schedule"
        ? "Request received — we'll reach out to schedule your consultation."
        : "Thanks for reaching out — we'll be in touch shortly."
    )
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What best describes you?{" "}
                <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-lg border bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {roleOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={o.value === ""}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {variant === "schedule"
                  ? "Anything we should know before your consultation?"
                  : "How can we help?"}
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Share a little about your situation…"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please don&apos;t include sensitive medical or financial details
                in this form.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : variant === "schedule" ? (
            "Request My Consultation"
          ) : (
            "Send Message"
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your inquiry. This is a
          demo form and does not transmit data.
        </p>
      </form>
    </Form>
  )
}
