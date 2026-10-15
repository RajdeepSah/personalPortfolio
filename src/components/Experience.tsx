import {
  Briefcase,
  Building2,
  Calendar,
  GraduationCap,
  MapPin,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  experienceStats,
  experienceTypeLabels,
  experiences,
  type ExperienceType,
} from "@/content/experience";

const typeIcons: Record<ExperienceType, LucideIcon> = {
  internship: Briefcase,
  teaching: GraduationCap,
  campus: Building2,
};

const typeBadge: Record<ExperienceType, string> = {
  internship: "badge-premium badge-success",
  teaching: "badge-premium",
  campus: "badge-premium badge-warning",
};

const Meta = ({ period, location }: { period: string; location: string }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
    <span className="flex items-center">
      <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
      {period}
    </span>
    <span className="flex items-center">
      <MapPin className="w-4 h-4 mr-1.5" aria-hidden="true" />
      {location}
    </span>
  </div>
);

const Experience = () => {
  const headline = experiences.filter((e) => e.highlight);
  const other = experiences.filter((e) => !e.highlight);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <PageHeader eyebrow="Experience" title="Professional Experience">
          Internships, teaching, and campus roles that shaped how I build,
          explain, and lead.
        </PageHeader>

        {/* Headline roles */}
        <div className="space-y-6">
          {headline.map((experience) => {
            const Icon = typeIcons[experience.type];

            return (
              <Reveal key={experience.title}>
                <article className="card-premium p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 icon-chip rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="text-xl md:text-2xl font-bold text-primary">
                          {experience.title}
                        </h2>
                        <span
                          className={`text-xs ${typeBadge[experience.type]}`}
                        >
                          {experienceTypeLabels[experience.type]}
                        </span>
                      </div>
                      <p className="text-base md:text-lg font-semibold text-accent mb-2">
                        {experience.company}
                      </p>
                      <Meta
                        period={experience.period}
                        location={experience.location}
                      />
                    </div>
                  </div>

                  <p className="text-secondary mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-base font-semibold text-primary mb-3 flex items-center">
                        <Trophy
                          className="w-5 h-5 mr-2 text-amber-500"
                          aria-hidden="true"
                        />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-secondary flex items-start"
                          >
                            <span
                              aria-hidden="true"
                              className="w-1.5 h-1.5 bg-[var(--accent)] opacity-60 rounded-full mt-2 mr-3 shrink-0"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-primary mb-3">
                        Skills
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <li key={skill} className="tag">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Other roles: compact timeline */}
        <Reveal>
          <h2 className="text-2xl font-bold text-primary mb-6">
            Teaching & Campus Roles
          </h2>
          <ol className="relative border-l border-soft ml-3 space-y-6">
            {other.map((experience) => {
              const Icon = typeIcons[experience.type];

              return (
                <li key={experience.title} className="ml-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full icon-chip bg-surface"
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <article className="card-premium p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-primary">
                        {experience.title}
                      </h3>
                      <span className={`text-xs ${typeBadge[experience.type]}`}>
                        {experienceTypeLabels[experience.type]}
                      </span>
                    </div>
                    <p className="font-medium text-accent mb-2">
                      {experience.company}
                    </p>
                    <Meta
                      period={experience.period}
                      location={experience.location}
                    />
                    <p className="text-sm text-secondary mt-3 leading-relaxed">
                      {experience.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-3">
                      {experience.skills.map((skill) => (
                        <li key={skill} className="tag">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* Statistics */}
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {experienceStats.map((item) => (
              <li key={item.label} className="text-center card-premium p-5">
                <div className="text-3xl font-bold gradient-text mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-muted">{item.label}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
