import { ExternalLink, Github } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export const ProjectCard = ({
  project,
  headingLevel: Heading = "h2",
}: {
  project: Project;
  /** h2 on /projects (under the page h1); h3 under a section heading. */
  headingLevel?: "h2" | "h3";
}) => {
  const Icon = project.icon;

  return (
    <article className="card-premium card-interactive group flex h-full flex-col p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 icon-chip rounded-2xl flex items-center justify-center">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <span
          className={`badge-premium text-xs ${
            project.status === "Completed" ? "badge-success" : "badge-warning"
          }`}
        >
          {project.status}
        </span>
      </div>

      <Heading className="text-xl font-bold text-primary mb-2">
        {project.title}
      </Heading>
      <p className="text-secondary text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="mb-5 grid grid-cols-1 gap-1.5">
        {project.features.map((feature) => (
          <li key={feature} className="text-sm text-muted flex items-start">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 bg-[var(--accent)] opacity-60 rounded-full mt-2 mr-2.5 shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>

      <ul aria-label="Tech stack" className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className="flex-1 flex items-center justify-center px-4 py-2 btn-outline-premium text-sm font-medium gap-2"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="flex-1 flex items-center justify-center px-4 py-2 btn-premium text-sm font-medium gap-2"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          Demo
        </a>
      </div>
    </article>
  );
};

const Projects = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <PageHeader eyebrow="Portfolio" title="Featured Projects">
        A collection of projects across AI/ML, web development, game
        development, and database systems.
      </PageHeader>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 grid-center-orphan">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.title} delay={(index % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>

      <div className="text-center">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 btn-premium font-medium gap-2"
        >
          <Github size={20} aria-hidden="true" />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
