import { Calendar, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { leadershipRoles } from "@/content/leadership";

const Leadership = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <PageHeader eyebrow="Leadership" title="Leadership & Events">
        Club leadership, competitions, and community events, newest first.
      </PageHeader>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipRoles.map((role, index) => {
          const Icon = role.icon;

          return (
            <Reveal as="li" key={role.title} delay={(index % 2) * 0.08}>
              <article className="card-premium h-full p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl icon-chip flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-primary">
                      {role.title}
                    </h2>
                    <p className="text-accent font-medium">{role.org}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mt-1">
                      <span className="flex items-center">
                        <Calendar
                          className="w-4 h-4 mr-1.5"
                          aria-hidden="true"
                        />
                        {role.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-secondary flex items-start"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 bg-[var(--accent)] opacity-60 rounded-full mt-2 mr-3 shrink-0"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Leadership;
