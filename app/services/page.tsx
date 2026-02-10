import PageHeader from "@/components/shared/PageHeader";
import ServiceCards from "@/components/services/ServiceCards";
import Process from "@/components/services/Process";
import CallToAction from "@/components/shared/CallToAction";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <PageHeader
        label="Services"
        title="What We Offer"
        description="Every engagement is custom. I focus on understanding your specific needs and building thoughtful, well-architected solutions."
      />
      <ServiceCards/>
      <Process/>
      <CallToAction/>
    </main>
  );
}
