'use client';

import { useEffect, useRef } from 'react';

type ThemePalette = {
  accent: string;
  accentStrong: string;
  accentMuted: string;
  foreground: string;
  background: string;
};

const defaultPalette: ThemePalette = {
  accent: '#7a5afa',
  accentStrong: '#2dd4bf',
  accentMuted: 'rgba(122, 90, 250, 0.35)',
  foreground: '#0f172a',
  background: '#f4f7fb',
};

const hexToRgb = (hex: string) => {
  let sanitized = hex.replace('#', '').trim();
  if (sanitized.length === 3) {
    sanitized = sanitized
      .split('')
      .map((char) => `${char}${char}`)
      .join('');
  }

  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
};

const applyAlpha = (color: string, alpha: number) => {
  const trimmed = color.trim();
  if (!trimmed) return `rgba(255, 255, 255, ${alpha})`;

  if (trimmed.startsWith('#')) {
    const { r, g, b } = hexToRgb(trimmed);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  if (trimmed.startsWith('rgb')) {
    const parts = trimmed
      .replace(/rgba?\(/, '')
      .replace(')', '')
      .split(',')
      .map((value) => parseFloat(value.trim()));
    const [r, g, b] = parts;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return trimmed;
};

const getThemePalette = (): ThemePalette => {
  if (typeof window === 'undefined') return defaultPalette;
  const styles = getComputedStyle(document.documentElement);

  return {
    accent: styles.getPropertyValue('--accent').trim() || defaultPalette.accent,
    accentStrong:
      styles.getPropertyValue('--accent-strong').trim() || defaultPalette.accentStrong,
    accentMuted:
      styles.getPropertyValue('--accent-muted').trim() || defaultPalette.accentMuted,
    foreground:
      styles.getPropertyValue('--text-primary').trim() || defaultPalette.foreground,
    background:
      styles.getPropertyValue('--background').trim() || defaultPalette.background,
  };
};

const MathBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let palette = getThemePalette();
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let lastTimestamp = 0;
    let time = 0;

    const symbols = ['∑', '∫', '∞', 'π', '∇', 'ϕ', '≈', 'λ', '∂', '√'];

    type SymbolParticle = {
      char: string;
      baseX: number;
      baseY: number;
      drift: number;
      size: number;
      speed: number;
    };

    type NodePoint = {
      baseX: number;
      baseY: number;
      radius: number;
      stretch: number;
      speed: number;
      offset: number;
    };

    const createSymbolParticles = (): SymbolParticle[] =>
      symbols.map((char) => ({
        char,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        drift: 35 + Math.random() * 70,
        size: 20 + Math.random() * 14,
        speed: 0.22 + Math.random() * 0.35,
      }));

    const createNodePoints = (): NodePoint[] =>
      Array.from({ length: 28 }, () => ({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: 0.6 + Math.random() * 1.2,
        stretch: 18 + Math.random() * 32,
        speed: 0.35 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
      }));

    let symbolParticles: SymbolParticle[] = [];
    let nodePoints: NodePoint[] = [];

      const regenerateScene = () => {
        symbolParticles = createSymbolParticles();
        nodePoints = createNodePoints();
      };

      const refreshPalette = () => {
        palette = getThemePalette();
      };

      const resizeCanvas = () => {
        width = window.innerWidth;
        height = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.width = width * dpr;
        canvas.height = height * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        regenerateScene();
      };

      const drawGradient = () => {
        ctx.save();
        const linear = ctx.createLinearGradient(0, 0, width, height);
        linear.addColorStop(0, applyAlpha(palette.accent, 0.22));
        linear.addColorStop(1, applyAlpha(palette.accentStrong, 0.08));
        ctx.fillStyle = linear;
        ctx.fillRect(0, 0, width, height);

        const radius = Math.max(width, height);
        const radial = ctx.createRadialGradient(
          width * 0.5,
          height * 0.5,
          radius * 0.1,
          width * 0.5,
          height * 0.5,
          radius * 0.8
        );
        radial.addColorStop(0, applyAlpha(palette.accentStrong, 0.18));
        radial.addColorStop(1, 'transparent');
        ctx.fillStyle = radial;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      };

    const drawWaves = () => {
      ctx.save();
      ctx.lineCap = 'round';

      const layers = 4;
      for (let i = 0; i < layers; i++) {
        const amplitude = 28 - i * 4;
        const frequency = 0.0025 + i * 0.0009;
        const speed = 0.5 + i * 0.1;
        const yOffset = height * 0.25 + i * height * 0.15;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const angle = x * frequency + time * speed;
          const wave = Math.sin(angle) * amplitude;
          const noise = Math.sin(angle * 0.35 + time * 0.4) * 3;
          const y = yOffset + wave + noise;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = applyAlpha(palette.accent, 0.32 - i * 0.05);
        ctx.lineWidth = 1.6 - i * 0.2;
        ctx.shadowColor = applyAlpha(palette.accentStrong, 0.35);
        ctx.shadowBlur = 22 - i * 3;
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawNodeGrid = () => {
      ctx.save();
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = applyAlpha(palette.accentStrong, 0.25);
      ctx.fillStyle = applyAlpha(palette.accent, 0.55);
      ctx.shadowColor = applyAlpha(palette.accent, 0.35);
      ctx.shadowBlur = 12;

      nodePoints.forEach((point, index) => {
        const oscillationX = Math.sin(time * point.speed + point.offset) * point.stretch;
        const oscillationY = Math.cos(time * point.speed + point.offset) * point.stretch;

        const x = (point.baseX + oscillationX + width) % width;
        const y = (point.baseY + oscillationY + height) % height;

        ctx.beginPath();
        ctx.arc(x, y, point.radius, 0, Math.PI * 2);
        ctx.fill();

        if (index % 3 === 0) {
          const next = nodePoints[(index + 5) % nodePoints.length];
          const nextX =
            (next.baseX + Math.sin(time * next.speed + next.offset) * next.stretch + width) % width;
          const nextY =
            (next.baseY + Math.cos(time * next.speed + next.offset) * next.stretch + height) % height;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
        }
      });

      ctx.restore();
    };

    const drawSymbols = () => {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = applyAlpha(palette.accentStrong, 0.95);
      ctx.shadowColor = applyAlpha(palette.accent, 0.65);
      ctx.shadowBlur = 18;

      symbolParticles.forEach((particle, index) => {
        const x = (particle.baseX + time * 50 * particle.speed + width) % width;
        const y =
          (particle.baseY + Math.sin(time * particle.speed + index) * particle.drift + height) %
          height;

        ctx.globalAlpha = 0.35;
        ctx.font = `${particle.size}px "IBM Plex Mono", "Space Grotesk", "SFMono-Regular", ui-monospace`;
        ctx.fillText(particle.char, x, y);
      });

      ctx.restore();
    };

    const render = (timestamp: number) => {
      const delta = lastTimestamp ? timestamp - lastTimestamp : 16;
      lastTimestamp = timestamp;
      time += delta * 0.001;

      ctx.clearRect(0, 0, width, height);
      drawGradient();
      drawNodeGrid();
      drawWaves();
      drawSymbols();

      animationFrameId = requestAnimationFrame(render);
    };

    resizeCanvas();
    animationFrameId = requestAnimationFrame(render);
    window.addEventListener('resize', resizeCanvas);
    const observer =
      typeof MutationObserver !== 'undefined'
        ? new MutationObserver(() => {
            refreshPalette();
          })
        : null;

    observer?.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 select-none"
      style={{
        background: 'transparent',
        mixBlendMode: 'soft-light',
        opacity: 0.9,
      }}
    />
  );
};

export default MathBackground;
