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
      {/* Main cursor glow - subtle soft white */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 w-[200px] h-[200px] pointer-events-none z-20 transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(circle, 
              rgba(255, 255, 255, 0.08) 0%, 
              rgba(255, 255, 255, 0.04) 40%, 
              transparent 70%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(25px)'
        }}
      />
      
      {/* Secondary ethereal glow - very subtle */}
      <div
        className={`fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-15 transition-opacity duration-1000 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
          background: `
            radial-gradient(circle, 
              rgba(255, 255, 255, 0.03) 0%, 
              rgba(255, 255, 255, 0.015) 50%, 
              transparent 80%
            )
          `,
          borderRadius: '50%',
          filter: 'blur(50px)'
        }}
      />
      
      {/* Minimal trailing particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`fixed w-1 h-1 bg-white rounded-full pointer-events-none transition-opacity duration-500 ${
            isVisible ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x + 100 - i * 20}px, ${mousePosition.y + 100 - i * 12}px)`,
            transitionDelay: `${i * 80}ms`,
            filter: 'blur(1px)',
            zIndex: 18
          }}
        />
      ))}
    </>
  );
}