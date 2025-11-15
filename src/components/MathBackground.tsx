'use client';

import { useEffect, useRef } from 'react';

const MathBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
        drift: 40 + Math.random() * 60,
        size: 16 + Math.random() * 10,
        speed: 0.2 + Math.random() * 0.35,
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
      linear.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      linear.addColorStop(1, 'rgba(14, 165, 233, 0.02)');
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
      radial.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
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

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.16 - i * 0.02})`;
        ctx.lineWidth = 1.2 - i * 0.1;
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawNodeGrid = () => {
      ctx.save();
      ctx.lineWidth = 0.4;
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.12)';
      ctx.fillStyle = 'rgba(96, 165, 250, 0.45)';

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
      ctx.fillStyle = 'rgba(191, 219, 254, 0.9)';

      symbolParticles.forEach((particle, index) => {
        const x = (particle.baseX + time * 50 * particle.speed + width) % width;
        const y =
          (particle.baseY + Math.sin(time * particle.speed + index) * particle.drift + height) %
          height;

        ctx.globalAlpha = 0.25;
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

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 select-none"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen',
        opacity: 0.75,
      }}
    />
  );
};

export default MathBackground;
