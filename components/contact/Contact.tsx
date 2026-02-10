"use client";

import ContactInfo from "./ContactInfo";
import ConfirmationMessage from "./ConfirmationMessage";
import ContactForm from "./ContactForm";

import { useState } from "react";

// Todo: Integrate with email service
// Todo: Integrate with scheduling service for calls
// Todo: Use ZOD form validation and error handling

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">          
          <ContactInfo/>
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            {submitted 
              ? <ConfirmationMessage/>
              : <ContactForm onSubmit={() => setSubmitted(true)}/>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
