import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Separator className="mb-20"/>

        {/* Call to Action Header */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {"Let\u2019s build something great together"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Have a project in mind? I would love to hear about it. Reach out and
            let us discuss how I can help bring your vision to life.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
