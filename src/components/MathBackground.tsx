'use client';

import { useEffect, useRef } from 'react';

const MathBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mathematical function parameters
    const amplitude = 50;
    const frequency = 0.01;
    const phase = 0;
    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set stroke style
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;

      // Draw multiple sine waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = canvas.height / 4 + (i * canvas.height / 4);
        const waveAmplitude = amplitude * (1 - i * 0.3);
        const waveFrequency = frequency * (1 + i * 0.5);
        
        for (let x = 0; x < canvas.width; x += 2) {
          const y = yOffset + Math.sin(x * waveFrequency + time + i * Math.PI / 3) * waveAmplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw mathematical symbols as floating particles
      ctx.fillStyle = 'rgba(59, 130, 246, 0.05)';
      const symbols = ['∫', '∑', 'π', '∞', '∇', '∂', 'α', 'β', 'γ'];
      
      for (let i = 0; i < 8; i++) {
        const x = (time * 0.5 + i * 200) % (canvas.width + 100);
        const y = canvas.height / 2 + Math.sin(time * 0.02 + i) * 100;
        const symbol = symbols[i % symbols.length];
        
        ctx.font = '20px serif';
        ctx.fillText(symbol, x, y);
      }

      // Draw geometric shapes
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      
      // Circles
      for (let i = 0; i < 5; i++) {
        const centerX = canvas.width / 2 + Math.cos(time * 0.01 + i * Math.PI / 2.5) * 200;
        const centerY = canvas.height / 2 + Math.sin(time * 0.01 + i * Math.PI / 2.5) * 100;
        const radius = 30 + Math.sin(time * 0.02 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }

      time += 0.5;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default MathBackground;
