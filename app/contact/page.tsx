import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <PageHeader
        label="Contact"
        title="Start a conversation"
        description="Have a project in mind? Fill out the form below and I will get back to you within 24 hours."
      />
      <ContactForm/>
    </main>
  );
}
