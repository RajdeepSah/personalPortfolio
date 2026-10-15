"use client";

import { createElement, useEffect, useRef, useState } from "react";

type ModelViewerProps = {
  src: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
  alt: string;
  cameraOrbit: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  cameraTarget?: string;
  fieldOfView?: string;
  rotationPerSecond?: string;
  exposure?: string;
  shadowIntensity?: string;
  /** Sway ± this many degrees around the starting angle instead of spinning 360°. */
  sway?: number;
};

/**
 * Interactive GLB viewer. A static poster renders immediately and
 * cross-fades out once <model-viewer> has finished loading the model.
 * The viewer is only loaded once the container is near the viewport, so
 * hidden (display: none) or off-screen instances cost nothing. Fills its
 * positioned parent.
 */
const ModelViewer = ({
  src,
  poster,
  posterWidth,
  posterHeight,
  alt,
  cameraOrbit,
  minCameraOrbit,
  maxCameraOrbit,
  cameraTarget = "auto auto auto",
  fieldOfView = "28deg",
  rotationPerSecond = "18deg",
  exposure = "1.05",
  shadowIntensity = "1",
  sway,
}: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<HTMLElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load the web component on the client only, once the container is
    // visible, so it never blocks the page text (LCP).
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import("@google/model-viewer").then(({ ModelViewerElement }) => {
          // Self-hosted Draco decoder (copied from three) instead of Google's CDN.
          ModelViewerElement.dracoDecoderLocation = "/draco/";
          if (!cancelled) setViewerReady(true);
        });
      },
      { rootMargin: "200px" },
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      observer.disconnect();
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

  useEffect(() => {
    const viewer = viewerRef.current as
      | (HTMLElement & { cameraOrbit: string })
      | null;
    if (!sway || reducedMotion || !modelLoaded || !viewer) return;

    // Gentle side-to-side sway; pauses while (and shortly after) the
    // visitor drags the model, then resumes from the start angle.
    const [theta, ...rest] = cameraOrbit.split(" ");
    const baseTheta = parseFloat(theta);
    let frame = 0;
    let pausedUntil = 0;
    let start = performance.now();
    const onCameraChange = (e: Event) => {
      if ((e as CustomEvent).detail?.source === "user-interaction") {
        pausedUntil = performance.now() + 2500;
      }
    };
    const tick = (now: number) => {
      if (now < pausedUntil) {
        start = now;
      } else {
        const t = (now - start) / 1000;
        const angle = baseTheta + sway * Math.sin((t * Math.PI * 2) / 9);
        viewer.cameraOrbit = `${angle}deg ${rest.join(" ")}`;
      }
      frame = requestAnimationFrame(tick);
    };
    viewer.addEventListener("camera-change", onCameraChange);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      viewer.removeEventListener("camera-change", onCameraChange);
    };
  }, [sway, reducedMotion, modelLoaded, cameraOrbit]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={modelLoaded ? "" : alt}
        aria-hidden={modelLoaded}
        width={posterWidth}
        height={posterHeight}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none ${
          modelLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {viewerReady &&
        createElement("model-viewer", {
          ref: viewerRef,
          src,
          alt,
          "camera-controls": true,
          "disable-zoom": true,
          "disable-pan": true,
          "touch-action": "pan-y",
          "interaction-prompt": "none",
          ...(reducedMotion || sway ? {} : { "auto-rotate": true }),
          "auto-rotate-delay": 0,
          "rotation-per-second": rotationPerSecond,
          "camera-orbit": cameraOrbit,
          "camera-target": cameraTarget,
          ...(minCameraOrbit ? { "min-camera-orbit": minCameraOrbit } : {}),
          ...(maxCameraOrbit ? { "max-camera-orbit": maxCameraOrbit } : {}),
          "field-of-view": fieldOfView,
          "shadow-intensity": shadowIntensity,
          "shadow-softness": "0.9",
          exposure,
          "environment-image": "neutral",
          className: `model-viewer-canvas transition-opacity duration-700 ${
            modelLoaded ? "opacity-100" : "opacity-0"
          }`,
        })}
    </div>
  );
};

export default ModelViewer;
