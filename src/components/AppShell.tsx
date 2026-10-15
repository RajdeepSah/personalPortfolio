"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import MathBackground from "@/components/MathBackground";
import RouteTransition from "@/components/RouteTransition";

type AppShellProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

const AppShell = ({ children, footer }: AppShellProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="portfolio-theme"
      disableTransitionOnChange
    >
      {/* Framer animations follow the OS "reduce motion" setting. LazyMotion
          + `m` components load only the DOM animation features we use. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          {isHome && <MathBackground />}
          <main id="main-content" tabIndex={-1} className="relative z-10">
            <RouteTransition>{children}</RouteTransition>
          </main>
          {footer}
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
};

export default AppShell;
