"use client";

import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent,SelectItem } from "@/components/ui/select";

interface ContactFormProps {
  onSubmit: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const budgetOptions = [
    { value: "5K", label: "Under $5,000" },
    { value: "5-10k", label: "$5,000 - $10,000" },
    { value: "10-25k", label: "$10,000 - $25,000" },
    { value: "25-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" }
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
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
  );
}
