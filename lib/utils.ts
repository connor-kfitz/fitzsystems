import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createContactMessage(data: ContactFormData) {
  const { name, email, company, budget, message } = data;

  const companyRow = company ? `<p><strong>Company:</strong> ${company}</p>` : "";
  const budgetRow = budget ? `<p><strong>Budget:</strong> ${budget}</p>` : "";

  return `
    <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111827;">
      <h2 style="margin:0 0 8px 0;">New Contact Message</h2>
      <div style="font-size:14px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${companyRow}
        ${budgetRow}
        <hr />
        <div>
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
  `;
}

export function rgbaGenerator(rgb: string, a: number) {
  return `rgba(${rgb},${a})`;
} 

