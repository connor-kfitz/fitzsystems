"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { budgetOptions } from "@/lib/constants";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

interface ContactFormProps {
  onSubmit: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { 
    register, handleSubmit, control, formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: ""
    }
  });

  const onSubmitHandler: SubmitHandler<ContactFormData> = (data) => {
    onSubmit();
    // Todo: Integrate with email service
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">

        {/* Name Input Field */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name"
         />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-sm text-destructive/60">
              {String(errors.name?.message)}
            </p>
          ) : null}
        </div>

        {/* Email Input Field */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="your@email.com"
         />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-destructive/60">
              {String(errors.email?.message)}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">

        {/* Company Input Field */}
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="w-full rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your company"
         />
        </div>

        {/* Budget Range Select Field */}
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
            Budget Range <span className="text-muted-foreground">(optional)</span>
          </label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
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
            )}
         />
        </div>
      </div>

      {/* Project Details Textarea Field */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full resize-none rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Tell me about your project, goals, and timeline..."
       />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-destructive/60">
            {String(errors.message?.message)}
          </p>
        ) : null}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto disabled:opacity-60"
      >
        Send Message
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </button>

    </form>
  );
}
