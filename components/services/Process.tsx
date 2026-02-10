import { process } from "@/lib/constants";

export default function Process() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Process Header */}
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we work together
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="flex flex-col">
              <span className="font-mono text-3xl font-bold text-primary/80">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
