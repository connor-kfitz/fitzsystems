import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24">
      <HeroBackground/>
      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Title */}
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Custom software and web development
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Fitzsystems builds reliable, maintainable web applications designed to scale with your business.
        </p>

        {/* Call To Actions */}
        <div className="mt-10 flex items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button size="lg" asChild variant="outline">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
