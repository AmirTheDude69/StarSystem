import { useEffect, useRef } from 'react';

export default function CosmicGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      glowRef.current.style.left = (e.clientX - 100) + 'px';
      glowRef.current.style.top = (e.clientY - 100) + 'px';
      glowRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (!glowRef.current) return;
      glowRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[200px] h-[200px] pointer-events-none z-10 transition-opacity duration-300 opacity-0"
      style={{
        background: 'radial-gradient(circle, rgba(0, 245, 255, 0.3) 0%, rgba(0, 245, 255, 0.1) 40%, transparent 70%)',
        borderRadius: '50%'
      }}
    />
  );
}
