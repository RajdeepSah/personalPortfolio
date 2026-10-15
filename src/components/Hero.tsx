import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import HeroModel from "@/components/HeroModel";
import { XIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { icon: Github, label: "GitHub", link: siteConfig.socials.github },
  { icon: Linkedin, label: "LinkedIn", link: siteConfig.socials.linkedin },
  { icon: XIcon, label: "X (Twitter)", link: siteConfig.socials.x },
];

// Staggered CSS fade-in. CSS (not JS) animation so the text paints with the
// server HTML instead of waiting for hydration.
const stagger = (ms: number) => ({ animationDelay: `${ms}ms` });

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24 pb-24 lg:pb-16"
  >
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-8 sm:gap-10 lg:gap-12">
      <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
        <p className="section-eyebrow animate-fade-up">Hello, I&rsquo;m</p>

        <h1
          className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-primary animate-fade-up"
          style={stagger(60)}
        >
          {siteConfig.name}
        </h1>

        <div
          className="space-y-2 text-lg sm:text-xl xl:text-2xl animate-fade-up"
          style={stagger(140)}
        >
          <p className="font-semibold text-primary">
            Computer Information Science student{" "}
            <span className="hidden sm:inline text-muted" aria-hidden="true">
              ·{" "}
            </span>
            <span className="block sm:inline">Math minor</span>
          </p>
          <p className="gradient-text font-semibold">
            AI/ML Researcher · Developer · Entrepreneur · Mentor
          </p>
        </div>

        <p
          className="text-base sm:text-lg xl:text-xl text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up"
          style={stagger(220)}
        >
          Naturally curious about the &ldquo;why&rdquo; behind things, I turn
          complex ideas in AI and mathematical modeling into practical,
          data-driven systems.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-up"
          style={stagger(300)}
        >
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 btn-premium font-medium"
          >
            <FileText className="mr-2" size={20} aria-hidden="true" />
            View Resume
          </a>

          <Link
            href="/projects"
            className="group inline-flex items-center px-7 py-3 btn-outline-premium font-medium"
          >
            Explore Projects
            <ArrowRight
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              size={20}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul
          className="flex justify-center lg:justify-start gap-3 pt-2 animate-fade-up"
          style={stagger(380)}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.label}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="icon-link w-11 h-11 icon-chip rounded-2xl flex items-center justify-center text-primary"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full">
        <HeroModel />
      </div>
    </div>

    {/* Scroll cue to the content below */}
    <a
      href="#featured"
      aria-label="Scroll to featured work"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex w-6 h-10 border-2 border-soft rounded-full justify-center"
    >
      <span
        aria-hidden="true"
        className="w-1 h-3 bg-[var(--accent)] rounded-full mt-2 animate-scroll-cue"
      />
    </a>
  </section>
);

export default Hero;
