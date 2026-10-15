"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { navItems } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full icon-chip text-primary transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      {/* Both icons render; CSS picks one, so there's no post-hydration swap. */}
      <Sun size={20} aria-hidden="true" className="hidden dark:block" />
      <Moon size={20} aria-hidden="true" className="dark:hidden" />
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation (including back/forward).
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 w-full z-50 premium-nav shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            aria-label={`${siteConfig.name} - Home`}
            className="text-xl font-bold text-primary"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link px-3 py-2 rounded-full text-sm font-medium ${
                    active ? "nav-link-active" : "text-muted hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-full bg-surface-muted text-primary"
            >
              {isOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-surface border-t border-soft"
          >
            <ul className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block w-full px-3 py-3 rounded-lg transition-colors duration-200 ${
                        active
                          ? "nav-link-active"
                          : "text-muted hover:text-primary hover:bg-surface-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
