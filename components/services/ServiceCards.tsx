import { extendedServices } from "@/lib/constants";

export default function ServiceCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12">
          {extendedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-8 md:p-12"
            >

              {/* Service Title */}
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-md border border-border bg-secondary p-3 text-primary">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Best for
                    </p>
                    <p className="mt-1 text-sm text-foreground/80">
                      {service.audience}
                    </p>
                  </div>
                </div>

                {/* Service Content */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What this includes
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
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
                          className="mt-0.5 shrink-0 text-primary"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
