import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { navItems } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-xl text-center animate-fade-up">
        <p className="text-7xl md:text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
          This page doesn&rsquo;t exist
        </h1>
        <p className="text-lg text-secondary mb-8">
          The link may be broken, or the page may have moved. Try one of these
          instead:
        </p>
        <ul className="flex flex-wrap justify-center gap-2 mb-10">
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block px-4 py-2 rounded-full btn-outline-premium text-sm font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3 btn-premium font-medium gap-2"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
