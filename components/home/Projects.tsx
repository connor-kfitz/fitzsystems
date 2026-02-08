import Link from "next/link";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Separator className="mb-20"/>

        {/* Projects Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Selected work
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {"View all projects \u2192"}
          </Link>
        </div>

        {/* Project Cards */}
        <div className="mt-10 grid gap-4">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects#${project.slug}`}>
              <Card className="shadow-none transition-colors hover:bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-base font-medium">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
