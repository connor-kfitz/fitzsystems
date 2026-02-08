import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
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
