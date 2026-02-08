import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Projects/>
      <Testimonials testimonials={[]}/>
    </main>
  );
}
