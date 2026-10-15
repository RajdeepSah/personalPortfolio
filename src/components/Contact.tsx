import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { XIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
  },
  {
    icon: Mail,
    label: "University Email",
    value: siteConfig.universityEmail,
    link: `mailto:${siteConfig.universityEmail}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone.display,
    link: siteConfig.phone.href,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    link: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", link: siteConfig.socials.github },
  { icon: Linkedin, label: "LinkedIn", link: siteConfig.socials.linkedin },
  { icon: XIcon, label: "X (Twitter)", link: siteConfig.socials.x },
  { icon: Facebook, label: "Facebook", link: siteConfig.socials.facebook },
  { icon: Instagram, label: "Instagram", link: siteConfig.socials.instagram },
];

const Contact = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <PageHeader eyebrow="Contact" title="Let’s build something intentional.">
        I&rsquo;m always interested in new opportunities, collaborations, and
        innovative projects. Let&rsquo;s connect and explore how we can work
        together.
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-12 animate-fade-up [animation-delay:120ms]">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-5">
              Contact Information
            </h2>
            <ul className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <span className="w-12 h-12 shrink-0 icon-chip rounded-2xl flex items-center justify-center mr-4">
                      <Icon aria-hidden="true" className="w-6 h-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">
                        {info.label}
                      </span>
                      <span className="block text-primary font-medium break-words">
                        {info.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={info.label}>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center p-4 card-premium card-interactive"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center p-4 card-premium">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Follow Me</h2>
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="icon-link w-12 h-12 icon-chip rounded-2xl flex items-center justify-center text-primary"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="card-premium p-6">
            <div className="flex items-center mb-3">
              <span
                aria-hidden="true"
                className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"
              />
              <h2 className="text-lg font-bold text-primary">
                Currently Available
              </h2>
            </div>
            <p className="text-secondary text-sm">
              Graduating December 2026 and open to new opportunities,
              collaborations, and interesting projects. Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-premium p-6 md:p-8 h-fit">
          <div className="flex items-center mb-6">
            <MessageCircle
              className="w-6 h-6 text-accent mr-3"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold text-primary">Send a Message</h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
