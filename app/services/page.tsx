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
        description="Each project is custom-built, grounded in a clear understanding of your requirements."
      />
      <ServiceCards/>
      <Process/>
      <CallToAction/>
    </main>
  );
}
