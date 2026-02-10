import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialProps) {

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Separator className="mb-20"/>

        {/* Testimonials Header */}
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Testimonials
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          What clients say
        </h2>

        {/* Testimonials Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col shadow-none">
              <CardContent className="flex-1 pt-6">
                <blockquote className="text-sm leading-relaxed text-foreground/80">
                  {`\u201C${testimonial.quote}\u201D`}
                </blockquote>
              </CardContent>
              <CardFooter className="flex-col items-start border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
