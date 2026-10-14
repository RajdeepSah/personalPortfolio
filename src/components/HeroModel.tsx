"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MODEL_SRC = "/models/hero-sculpture.glb";
const POSTER_SRC = "/models/hero-sculpture-poster.webp";
const MODEL_ALT =
  "3D sculpture of a DNA helix wrapped around gears, equations, a molecule and a key, resting on a book — symbolizing curiosity in AI and mathematics";

const HeroModel = () => {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load the web component on the client only, after first paint,
    // so it never blocks the hero text (LCP).
    let cancelled = false;
    import("@google/model-viewer").then(() => {
      if (!cancelled) setViewerReady(true);
    });

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewerReady || !viewer) return;
    const onLoad = () => setModelLoaded(true);
    viewer.addEventListener("load", onLoad);
    return () => viewer.removeEventListener("load", onLoad);
  }, [viewerReady]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full aspect-square max-w-[17rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[34rem]"
    >
      {/* Soft accent glow behind the model */}
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--accent-gradient-soft)" }}
      />

      {/* Static poster shown instantly, cross-fades out once the 3D model is ready */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={POSTER_SRC}
        alt={modelLoaded ? "" : MODEL_ALT}
        aria-hidden={modelLoaded}
        width={900}
        height={900}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 pointer-events-none ${
          modelLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {viewerReady &&
        createElement("model-viewer", {
          ref: viewerRef,
          src: MODEL_SRC,
          alt: MODEL_ALT,
          "camera-controls": true,
          "disable-zoom": true,
          "disable-pan": true,
          "touch-action": "pan-y",
          "interaction-prompt": "none",
          ...(reducedMotion ? {} : { "auto-rotate": true }),
          "auto-rotate-delay": 0,
          "rotation-per-second": "18deg",
          "camera-orbit": "90deg 80deg 112%",
          "min-camera-orbit": "auto 55deg 112%",
          "max-camera-orbit": "auto 100deg 112%",
          "field-of-view": "28deg",
          "shadow-intensity": "1",
          "shadow-softness": "0.9",
          exposure: "1.05",
          "environment-image": "neutral",
          className: `hero-model-viewer transition-opacity duration-700 ${
            modelLoaded ? "opacity-100" : "opacity-0"
          }`,
        })}
    </motion.div>
  );
};

export default HeroModel;
