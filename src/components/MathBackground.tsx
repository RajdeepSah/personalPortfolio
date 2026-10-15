"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = ["∫", "∑", "π", "∞", "∇", "∂", "α", "β", "γ"];
const FRAME_MS = 1000 / 30; // a slow ambient background doesn't need 60fps

/** Decorative sine waves, orbiting circles and drifting math symbols. */
const MathBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Phones get a single static frame: saves battery and keeps the main
    // thread free for the 3D model.
    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches;

    let width = 0;
    let height = 0;
    let color = "";

    // Theme-aware stroke color from the --bg-line token.
    const readColor = () => {
      color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--bg-line")
          .trim() || "rgba(91, 61, 245, 0.1)";
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = "20px serif";
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1;

      // Sine waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = height / 4 + (i * height) / 4;
        const amplitude = 50 * (1 - i * 0.3);
        const frequency = 0.01 * (1 + i * 0.5);
        for (let x = 0; x <= width; x += 4) {
          const y =
            yOffset +
            Math.sin(x * frequency + time + (i * Math.PI) / 3) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Drifting symbols
      for (let i = 0; i < 8; i++) {
        const x = (time * 0.5 + i * 200) % (width + 100);
        const y = height / 2 + Math.sin(time * 0.02 + i) * 100;
        ctx.fillText(SYMBOLS[i % SYMBOLS.length], x, y);
      }

      // Orbiting circles
      for (let i = 0; i < 5; i++) {
        const angle = time * 0.01 + (i * Math.PI) / 2.5;
        const radius = 30 + Math.sin(time * 0.02 + i) * 10;
        ctx.beginPath();
        ctx.arc(
          width / 2 + Math.cos(angle) * 200,
          height / 2 + Math.sin(angle) * 100,
          radius,
          0,
          2 * Math.PI,
        );
        ctx.stroke();
      }
    };

    readColor();
    resize();

    let time = 0;
    let frameId = 0;
    let last = 0;

    const loop = (now: number) => {
      frameId = requestAnimationFrame(loop);
      if (now - last < FRAME_MS) return;
      last = now;
      time += 0.5;
      draw(time);
    };

    const start = () => {
      cancelAnimationFrame(frameId);
      if (reducedMotion) draw(time);
      else frameId = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (reducedMotion) draw(time);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frameId);
      else start();
    };

    // Re-read the color when the theme class on <html> changes.
    const themeObserver = new MutationObserver(() => {
      readColor();
      if (reducedMotion) draw(time);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    // Purely decorative: wait until the page is idle so it never delays the
    // first paint or hydration.
    const idleHandle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 3000 })
        : undefined;
    const fallbackTimer =
      idleHandle === undefined ? setTimeout(start, 1500) : undefined;

    return () => {
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(frameId);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 h-full w-full pointer-events-none z-0"
    />
  );
};

export default MathBackground;
