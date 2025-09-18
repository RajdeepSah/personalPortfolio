'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import MathBackground from '@/components/MathBackground';
import RouteTransition from '@/components/RouteTransition';
import { ThemeProvider } from '@/components/ThemeProvider';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Navigation />
      {isHome && <MathBackground />}
      <main className="relative z-10">
        <RouteTransition>
          {children}
        </RouteTransition>
      </main>
    </ThemeProvider>
  );
};

export default AppShell;


