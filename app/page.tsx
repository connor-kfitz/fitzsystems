import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/shared/CallToAction";

export default function HomePage() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Projects/>
      <Testimonials testimonials={[]}/>
      <CallToAction/>
    </main>
  );
}
