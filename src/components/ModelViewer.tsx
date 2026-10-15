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
  /** Above-the-fold model: fetch the poster eagerly with high priority. */
  priority?: boolean;
};

type NetworkInformation = { saveData?: boolean };

/**
 * Interactive GLB viewer. A static poster renders immediately and
 * cross-fades out once <model-viewer> has finished loading the model.
 * The viewer is only loaded once the container is near the viewport and the
 * browser is idle, so hidden (display: none) or off-screen instances cost
 * nothing and the model never competes with the first paint. On Data Saver
 * connections it waits for a tap instead. Fills its positioned parent.
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
  priority = false,
}: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<HTMLElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [waitingForTap, setWaitingForTap] = useState(false);
  const loadRequested = useRef(false);

  const loadViewer = () => {
    if (loadRequested.current) return;
    loadRequested.current = true;
    setWaitingForTap(false);
    // Self-hosted Draco decoder (copied from three) instead of Google's CDN.
    // Every <model-viewer> constructor re-reads this global config and falls
    // back to the CDN, so it must be set here rather than on the class.
    const globalConfig = window as Window & {
      ModelViewerElement?: Record<string, unknown>;
    };
    globalConfig.ModelViewerElement = {
      ...globalConfig.ModelViewerElement,
      dracoDecoderLocation: "/draco/",
    };
    import("@google/model-viewer").then(() => setViewerReady(true));
  };

  useEffect(() => {
    // Load the web component on the client only, once the container is
    // visible and the main thread is idle, so it never blocks the page text.
    const saveData = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection?.saveData;
    let idleHandle: number | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (saveData) {
          setWaitingForTap(true);
        } else if ("requestIdleCallback" in window) {
          idleHandle = window.requestIdleCallback(loadViewer, {
            timeout: 2500,
          });
        } else {
          fallbackTimer = setTimeout(loadViewer, 600);
        }
      },
      { rootMargin: "200px" },
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);

    return () => {
      observer.disconnect();
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      clearTimeout(fallbackTimer);
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
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none ${
          modelLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {waitingForTap && (
        <button
          type="button"
          onClick={loadViewer}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-surface/90 px-4 py-2 text-sm font-medium text-primary shadow border border-soft"
        >
          View in 3D
        </button>
      )}

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
