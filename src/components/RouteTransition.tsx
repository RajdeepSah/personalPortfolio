"use client";

import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const RouteTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    // initial={false}: the first page load renders fully visible (no
    // opacity:0 in the server HTML); only client-side navigations animate.
    // No exit animation: the old page is swapped out at once, so the new one
    // doesn't wait for a fade-out before it starts appearing.
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default RouteTransition;
