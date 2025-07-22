import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
  type: 'normal' | 'bright' | 'distant';
}

export default function PremiumStarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initializeStars = () => {
      const numStars = 800;
      starsRef.current = [];
      
      for (let i = 0; i < numStars; i++) {
        const starType = Math.random();
        let type: 'normal' | 'bright' | 'distant';
        let color: string;
        let size: number;
        
        if (starType < 0.7) {
          type = 'normal';
          color = '#ffffff';
          size = Math.random() * 1.5 + 0.5;
        } else if (starType < 0.9) {
          type = 'bright';
          color = Math.random() > 0.5 ? '#00f5ff' : '#a855f7';
          size = Math.random() * 2.5 + 1;
        } else {
          type = 'distant';
          color = '#4a5568';
          size = Math.random() * 0.8 + 0.2;
        }
        
        starsRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 1000,
          size,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          color,
          type
        });
      }
    };

    const animateStars = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Create constellation connections
      const brightStars = starsRef.current.filter(star => star.type === 'bright');
      for (let i = 0; i < brightStars.length - 1; i++) {
        const star1 = brightStars[i];
        const star2 = brightStars[i + 1];
        const distance = Math.sqrt(
          Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
        );
        
        if (distance < 300) {
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
          ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / 300)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      starsRef.current.forEach(star => {
        // Parallax effect based on mouse position
        const parallaxX = (mouseRef.current.x - window.innerWidth / 2) * 0.01 * (star.z / 1000);
        const parallaxY = (mouseRef.current.y - window.innerHeight / 2) * 0.01 * (star.z / 1000);
        
        const adjustedX = star.x + parallaxX;
        const adjustedY = star.y + parallaxY;
        
        // Enhanced twinkle effect
        star.opacity += (Math.sin(Date.now() * star.twinkleSpeed) * 0.3);
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Draw star with enhanced effects
        if (star.type === 'bright') {
          // Bright stars get extra glow
          const gradient = ctx.createRadialGradient(
            adjustedX, adjustedY, 0,
            adjustedX, adjustedY, star.size * 8
          );
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(0.3, star.color + '80');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(adjustedX, adjustedY, star.size * 8, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Main star
        ctx.beginPath();
        ctx.arc(adjustedX, adjustedY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color + Math.floor(star.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Subtle cross pattern for bright stars
        if (star.type === 'bright' && star.opacity > 0.7) {
          ctx.beginPath();
          ctx.moveTo(adjustedX - star.size * 3, adjustedY);
          ctx.lineTo(adjustedX + star.size * 3, adjustedY);
          ctx.moveTo(adjustedX, adjustedY - star.size * 3);
          ctx.lineTo(adjustedX, adjustedY + star.size * 3);
          ctx.strokeStyle = star.color + '40';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animateStars);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      initializeStars();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    initializeStars();
    animateStars();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}