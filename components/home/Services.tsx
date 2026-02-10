import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Separator className="mb-20"/>

        {/* Services Header */}
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Services
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          What I build
        </h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground">
          End-to-end development services with a focus on quality, performance,
          and maintainability.
        </p>

        {/* Service Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="shadow-none">
              <CardHeader>
                <CardTitle className="text-base font-medium">
                  {service.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
