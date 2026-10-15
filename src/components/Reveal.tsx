"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode, Ref } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Fades its children up the first time they scroll into view. Anything
 * already on screen when it mounts (first load, or right after a client-side
 * navigation) renders immediately, so visible content never waits on an
 * animation. Server HTML is always fully visible; only off-screen elements
 * are hidden, after hydration. Styles live in globals.css ([data-reveal]).
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  // Layout effect: decide before paint, so on-screen content never flickers.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.dataset.reveal = "shown";
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as Ref<never>}
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  );
};

export default Reveal;
