"use client"

import { useEffect, useRef } from 'react';

interface HeroCanvasProps {
  particleCount?: number;
  particleColor?: string;
  particleSizeRange?: [number, number];
  speedRange?: [number, number];
}

export const HeroCanvas = ({
  particleCount = 100,
  particleColor = 'rgba(255, 255, 255, 0.1)',
  particleSizeRange = [1, 4],
  speedRange = [-0.5, 0.5]
}: HeroCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * (particleSizeRange[1] - particleSizeRange[0]) + particleSizeRange[0];
        this.speedX = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
        this.speedY = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas!.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColor, particleSizeRange, speedRange]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};