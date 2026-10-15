import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/icons";
import { navItems } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { icon: Github, label: "GitHub", link: siteConfig.socials.github },
  { icon: Linkedin, label: "LinkedIn", link: siteConfig.socials.linkedin },
  { icon: XIcon, label: "X (Twitter)", link: siteConfig.socials.x },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[var(--surface-muted)] text-primary border-t border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <p className="text-2xl font-bold text-primary">{siteConfig.name}</p>
            <p className="text-muted leading-relaxed max-w-md">
              Computer Information Science student and AI/ML researcher building
              data-driven software at the intersection of code and mathematics.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="icon-link w-10 h-10 icon-chip rounded-2xl flex items-center justify-center text-primary"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer" className="space-y-4">
            <p className="text-lg font-semibold text-primary">Quick Links</p>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-primary">Get In Touch</p>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors duration-200 [overflow-wrap:anywhere]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center px-4 py-2 btn-premium text-sm font-medium gap-2"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Send Email
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-soft mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-muted text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-muted text-sm">
              Designed with logic, symmetry & a little chaos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
