import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  Newspaper,
} from "lucide-react";
import { ProjectCard } from "@/components/Projects";
import Reveal from "@/components/Reveal";
import { projects } from "@/content/projects";
import { featuredArticles, publications } from "@/content/research";
import { siteConfig } from "@/lib/site";

const SectionHeading = ({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
    <div>
      <p className="section-eyebrow mb-2">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
        {title}
      </h2>
    </div>
    <Link
      href={href}
      className="group inline-flex self-start sm:self-auto items-center gap-1.5 py-2 -my-2 font-semibold text-accent"
    >
      {linkLabel}
      <ArrowRight
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  </div>
);

const HomeHighlights = () => {
  const featured = projects.filter((p) => p.featured);
  const paper = publications[0];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">
      {/* Selected work */}
      <section id="featured" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          href="/projects"
          linkLabel="All projects"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-center-orphan">
          {featured.map((project, index) => (
            <Reveal as="li" key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} headingLevel="h3" />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Research highlight */}
      <section>
        <SectionHeading
          eyebrow="Research"
          title="Published work"
          href="/research"
          linkLabel="All research"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6">
          <Reveal>
            <article className="card-premium h-full p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent" aria-hidden="true" />
                <span className="badge-premium badge-success text-xs">
                  {paper.status} · {paper.year}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                {paper.title}
              </h3>
              <p className="text-sm text-muted mb-4">{paper.venue}</p>
              <p className="text-secondary leading-relaxed mb-6 line-clamp-4">
                {paper.description}
              </p>
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 btn-premium text-sm font-medium gap-2"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Read the paper
              </a>
            </article>
          </Reveal>

          <ul className="grid gap-6">
            {featuredArticles.map((article, index) => (
              <Reveal as="li" key={article.link} delay={0.08 * (index + 1)}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium card-interactive flex h-full flex-col p-6"
                >
                  <span className="flex items-center gap-2 text-sm text-muted mb-2">
                    <Newspaper className="w-4 h-4" aria-hidden="true" />
                    {article.source}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {article.title}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Currently */}
      <Reveal>
        <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center bg-surface border border-soft">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{ background: "var(--accent-gradient-soft)" }}
          />
          <div className="relative space-y-5">
            <p className="section-eyebrow">Currently</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Graduating December 2026 and open to new opportunities
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Software engineering, AI/ML, and research collaborations.
              I&rsquo;d love to hear what you&rsquo;re working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 btn-premium font-medium gap-2"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Get in touch
              </Link>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 btn-outline-premium font-medium gap-2"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                View Resume
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default HomeHighlights;
