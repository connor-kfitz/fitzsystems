import PageHeader from "@/components/shared/PageHeader";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <PageHeader
        label="Contact"
        title="Start a conversation"
        description="Have a project in mind? Fill out the form below and we will get back to you."
      />
      <Contact/>
    </main>
  );
}
