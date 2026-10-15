import { ExternalLink, FileText, Newspaper } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  featuredArticles,
  publications,
  researchAreas,
  researchStats,
  upcomingResearch,
} from "@/content/research";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
    {children}
  </h2>
);

const Research = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <PageHeader eyebrow="Research" title="Publications & Research">
        Exploring artificial intelligence, machine learning, and mathematical
        modeling to solve real-world problems.
      </PageHeader>

      <div>
        <SectionTitle>Publications</SectionTitle>
        <div className="space-y-6">
          {publications.map((publication) => (
            <Reveal key={publication.title}>
              <article className="card-premium p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <FileText
                    className="w-6 h-6 text-accent"
                    aria-hidden="true"
                  />
                  <span
                    className={`text-xs ${
                      publication.status === "Published"
                        ? "badge-premium badge-success"
                        : "badge-premium badge-warning"
                    }`}
                  >
                    {publication.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {publication.title}
                </h3>
                <p className="text-secondary mb-1">{publication.authors}</p>
                <p className="text-muted text-sm mb-4">
                  {publication.venue} · {publication.year} · {publication.type}
                </p>

                <p className="text-secondary mb-5 leading-relaxed">
                  {publication.description}
                </p>

                <ul aria-label="Keywords" className="flex flex-wrap gap-2 mb-6">
                  {publication.keywords.map((keyword) => (
                    <li key={keyword} className="tag">
                      {keyword}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm text-muted">
                    <strong className="text-secondary">DOI:</strong>{" "}
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-premium break-all"
                    >
                      {publication.doi}
                    </a>
                  </p>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 btn-premium text-sm font-medium gap-2"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Publication
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>Upcoming Research</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingResearch.map((research, index) => (
            <Reveal as="li" key={research.title} delay={index * 0.08}>
              <article className="card-premium h-full p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`text-xs ${
                      research.status === "In Progress"
                        ? "badge-premium badge-success"
                        : "badge-premium"
                    }`}
                  >
                    {research.status}
                  </span>
                  <span className="text-sm text-muted">
                    Expected: {research.expectedCompletion}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {research.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {research.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <div>
        <SectionTitle>Research Focus Areas</SectionTitle>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal as="li" key={area.title} delay={index * 0.08}>
                <article className="card-premium h-full p-6">
                  <div className="w-12 h-12 rounded-2xl icon-chip flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-secondary mb-4">{area.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {area.focus.map((focus) => (
                      <li key={focus} className="tag">
                        {focus}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <div>
        <SectionTitle>In the News</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article, index) => (
            <Reveal as="li" key={article.link} delay={index * 0.08}>
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
                <h3 className="text-lg font-bold text-primary mb-2">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read article
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {researchStats.map((stat) => (
            <li key={stat.label} className="text-center card-premium p-5">
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Research;
