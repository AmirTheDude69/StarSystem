import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface PremiumOrbitingPlanetProps {
  name: string;
  emoji: string;
  description: string;
  colors: {
    from: string;
    to: string;
    glow: string;
  };
  distance: number;
  duration: number;
  delay: number;
  technologies: string[];
}

export default function PremiumOrbitingPlanet({ 
  name, 
  emoji, 
  description,
  colors, 
  distance, 
  duration, 
  delay,
  technologies 
}: PremiumOrbitingPlanetProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const planetRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        transformOrigin: '0 0'
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    >
      {/* Orbital trail effect */}
      <motion.div
        className="absolute w-1 h-1 rounded-full"
        style={{
          background: colors.glow,
          transform: `translateX(${distance - 50}px)`,
          filter: 'blur(1px)'
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.5, 2, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5
        }}
      />
      
      <motion.div
        ref={planetRef}
        className="relative w-24 h-24 rounded-full cursor-pointer premium-glass overflow-hidden"
        style={{
          transform: `translateX(${distance}px)`,
          background: `
            radial-gradient(circle at 30% 30%, ${colors.from} 0%, ${colors.to} 70%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)
          `,
          boxShadow: `
            0 0 30px ${colors.glow},
            0 0 60px ${colors.glow.replace('0.6', '0.3')},
            inset 0 0 20px rgba(255, 255, 255, 0.1)
          `,
          border: `1px solid ${colors.glow.replace('0.6', '0.8')}`
        }}
        animate={{
          y: [0, -15, 0],
          rotateY: [0, 360]
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay + 1 },
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        whileHover={{
          scale: 1.3,
          boxShadow: `
            0 0 50px ${colors.glow},
            0 0 100px ${colors.glow.replace('0.6', '0.4')},
            0 0 150px ${colors.glow.replace('0.6', '0.2')},
            inset 0 0 30px rgba(255, 255, 255, 0.2)
          `
        }}
        whileTap={{
          scale: 1.1
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Particle trail effect */}
        <div className="particle-trail absolute inset-0 rounded-full" />
        
        {/* Energy rings */}
        <motion.div
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: colors.glow.replace('0.6', '0.3')
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Surface pattern */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.3) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '30px 30px, 20px 20px, 25px 25px'
          }}
        />
        
        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.div 
            className="text-3xl mb-1"
            animate={isHovered ? { 
              scale: 1.3, 
              rotate: [0, -15, 15, 0],
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
            } : {}}
            transition={{ duration: 0.4 }}
          >
            {emoji}
          </motion.div>
          <motion.p 
            className="text-xs font-inter font-bold text-white/90 tracking-wide"
            animate={isHovered ? { scale: 1.1 } : {}}
          >
            {name}
          </motion.p>
        </div>
        
        {/* Hover information panel */}
        <motion.div
          className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 w-64 premium-glass rounded-lg p-4 z-20"
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -20,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.8), 
                rgba(15, 15, 35, 0.9)
              )
            `,
            border: `1px solid ${colors.glow.replace('0.6', '0.4')}`
          }}
        >
          <h3 className="font-orbitron font-bold text-white mb-2 text-sm">{name}</h3>
          <p className="text-xs text-gray-300 mb-3 leading-relaxed">{description}</p>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-cyan-400 mb-1">Technologies:</p>
            {technologies.map((tech, i) => (
              <motion.div
                key={tech}
                className="text-xs text-gray-400 flex items-center gap-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: colors.glow }}
                />
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}