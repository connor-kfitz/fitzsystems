import PageHeader from "@/components/shared/PageHeader";
import ProjectCards from "@/components/projects/ProjectCards";
import CallToAction from "@/components/shared/CallToAction";

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <PageHeader
        label="Portfolio"
        title="Featured Projects"
        description="A collection of shipped applications built to meet specific business needs."
      />
      <ProjectCards/>
      <CallToAction/>
    </main>
  );
}
