"use client";

import ContactInfo from "./ContactInfo";
import ConfirmationMessage from "./ConfirmationMessage";
import ContactForm from "./ContactForm";
import ErrorModal from "../shared/ErrorModal";

import { useState } from "react";
import { createContactMessage } from "../../lib/utils";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [errorState, setErrorState] = useState<ModalErrorState>({ open: false, title: "", message: "" });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, message: createContactMessage(data) })
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setSubmitted(true);
      return await response.json();
    } catch (error) {
      console.error("Email error", error);
      setErrorState({
        open: true,
        title: "Error Sending Message",
        message: "Something went wrong sending the message. Please try again later."
      });
    }
  }
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">          
          <ContactInfo/>
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <ConfirmationMessage/>
            ) : (
              <ContactForm onSubmit={onSubmit}/>
            )}
          </div>
        </div>
      </div>
      <ErrorModal
        open={errorState.open}
        title={errorState.title}
        message={errorState.message}
        onClose={() => setErrorState({ open: false, title: "", message: "" })}
      />
    </section>
  );
}
