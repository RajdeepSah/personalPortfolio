import { Award, Download, GraduationCap } from "lucide-react";
import AboutPortrait from "@/components/AboutPortrait";
import Reveal from "@/components/Reveal";
import { certifications, competencies, education } from "@/content/about";
import { siteConfig } from "@/lib/site";

const About = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Intro + 3D portrait */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-10 lg:gap-16">
        <header className="order-2 md:order-1 text-center md:text-left animate-fade-up">
          <p className="section-eyebrow mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-5">
            About Me
          </h1>
          <div className="space-y-4 text-lg text-secondary leading-relaxed max-w-2xl mx-auto md:mx-0">
            <p>
              I&rsquo;m a Computer Information Science student at Washburn
              University with a Mathematics minor, and an AI/ML researcher with
              a peer-reviewed paper on generative AI in higher education.
            </p>
            <p>
              I like turning complex ideas into practical, data-driven software,
              from research analysis to 3D web games, and I spend a lot of my
              time tutoring and mentoring other students.
            </p>
          </div>
          <a
            href={siteConfig.resume}
            download
            className="mt-8 inline-flex items-center px-7 py-3 btn-premium font-medium"
          >
            <Download className="mr-2" size={20} aria-hidden="true" />
            Download Resume
          </a>
        </header>

        <div className="order-1 md:order-2 flex justify-center">
          <AboutPortrait className="w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96" />
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Education
        </h2>
        <ol className="relative border-l border-soft ml-3 md:ml-6 space-y-8">
          {education.map((item) => (
            <Reveal as="li" key={item.title} className="relative ml-8 md:ml-10">
              <span
                aria-hidden="true"
                className="absolute top-5 -left-[52px] md:-left-[60px] flex items-center justify-center icon-ring"
              >
                <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-accent">
                  <GraduationCap className="w-5 h-5" />
                </span>
              </span>
              <article className="card-premium p-6">
                <p className="text-sm font-medium text-muted mb-1">
                  {item.period}
                </p>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-sm font-semibold text-secondary mb-1">
                  {item.subtitle}
                </p>
                <p className="font-semibold text-accent mb-3">
                  {item.institution}
                </p>
                <p className="text-secondary mb-4">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-muted flex items-start"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 bg-[var(--accent)] opacity-60 rounded-full mt-2 mr-2.5 shrink-0"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Certifications */}
      <Reveal>
        <div className="card-premium p-6 md:p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-accent" aria-hidden="true" />
            Certifications & Online Courses
          </h2>
          <ul className="space-y-3 text-secondary max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 bg-[var(--accent)] opacity-60 rounded-full mt-2 mr-3 shrink-0"
                />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Competencies */}
      <Reveal>
        <div className="card-premium p-6 md:p-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold text-accent mb-3 text-center md:text-left">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
