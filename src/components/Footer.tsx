'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/rajdeepsah',
      color: 'hover:text-[var(--accent)]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/rajdeepsah',
      color: 'hover:text-[var(--accent-strong)]'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com/rajdeepsah',
      color: 'hover:text-[var(--accent-strong)]'
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:rajdeep.sah@example.com',
      color: 'hover:text-[var(--accent)]'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-[var(--surface-muted)] text-primary border-t border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Rajdeep Sah</h3>
            <p className="text-muted leading-relaxed">
              AI/ML Engineer, Researcher, and Developer passionate about solving complex problems 
              through artificial intelligence and machine learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 icon-chip rounded-2xl flex items-center justify-center text-primary transition-transform duration-200 ${social.color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2 text-muted">
              <p>rajdeep.sah@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Topeka, Kansas, USA</p>
            </div>
            <motion.a
              href="mailto:rajdeep.sah@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 btn-premium text-sm font-medium gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-soft mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted text-sm">
              © {currentYear} Rajdeep Sah. All rights reserved.
            </p>
            <motion.p 
              className="text-muted text-sm flex items-center mt-4 md:mt-0"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using Next.js & TailwindCSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
