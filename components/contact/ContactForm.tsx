"use client";

import { email } from "@/lib/constants";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent,SelectItem } from "@/components/ui/select";

// Todo: Integrate with email service
// Todo: Integrate with scheduling service for calls
// Todo: Break into smaller components
// Todo: Use ZOD form validation and error handling

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    { value: "5K", label: "Under $5,000" },
    { value: "5-10k", label: "$5,000 - $10,000" },
    { value: "10-25k", label: "$10,000 - $25,000" },
    { value: "25-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" }
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {"Let's work together"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you have a detailed spec or just a rough idea, I am
              happy to discuss how I can help. Every project starts with a
              conversation.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Email
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Response Time
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours, usually sooner
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Location
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Remote - Based in Toronto, Ontario
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule CTA */}
            <div className="mt-10 rounded-lg border border-border bg-secondary/30 p-6">
              <p className="text-sm font-semibold text-foreground">
                Prefer to talk?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Schedule a free 30-minute consultation to discuss your
                project requirements.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Schedule a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            {submitted ? (

              // Submit Confirmation Message
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 p-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. I will review your message and
                  get back to you within 24 hours.
                </p>
              </div>

            ) : (

              // Contact Form
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  
                  {/* Name Input Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                   />
                  </div>

                  {/* Email Input Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                   />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Company Input Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Company{" "}
                      <span className="text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                      className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your company"
                   />
                  </div>

                  {/* Budget Range Select Field */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Budget Range{" "}
                      <span className="text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger data-size="large" aria-label="Budget range" className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                        <SelectValue placeholder="Select a range"/>
                      </SelectTrigger>
                      <SelectContent position="popper" align="end">
                        {budgetOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Details Textarea Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell me about your project, goals, and timeline..."
                 />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
