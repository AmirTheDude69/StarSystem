import { useEffect, useRef, useState } from 'react';

export default function PremiumCosmicGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const newX = e.clientX - 150;
      const newY = e.clientY - 150;
      
      setMousePosition({ x: newX, y: newY });
      setIsVisible(true);
      
      glowRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-20 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(circle, 
              rgba(0, 245, 255, 0.4) 0%, 
              rgba(168, 85, 247, 0.3) 30%, 
              rgba(236, 72, 153, 0.2) 60%, 
              transparent 80%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}
      />
      
      {/* Secondary ethereal glow */}
      <div
        className={`fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-15 transition-opacity duration-700 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
          background: `
            radial-gradient(circle, 
              rgba(0, 245, 255, 0.1) 0%, 
              rgba(168, 85, 247, 0.08) 40%, 
              transparent 70%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Trailing particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none transition-opacity duration-300 ${
            isVisible ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x + 150 - i * 15}px, ${mousePosition.y + 150 - i * 8}px)`,
            transitionDelay: `${i * 50}ms`,
            filter: 'blur(1px)',
            zIndex: 18
          }}
        />
      ))}
    </>
  );
}