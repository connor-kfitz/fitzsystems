import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pb-20 pt-32">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Custom software and web development
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Fitzsystems builds reliable, maintainable web applications for
          businesses and startups.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
