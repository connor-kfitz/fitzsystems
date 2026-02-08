import { projects } from "@/lib/constants";

export default function ProjectCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24 rounded-xl border border-border bg-card p-8 md:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">

                {/* Card Header */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    {project.client}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
                    {project.title}
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-secondary/30 px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Outcomes
                    </h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
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
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Problem
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Solution
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {project.solution}
                    </p>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
