import { motion } from 'framer-motion';
import { useState } from 'react';

interface OrbitingPlanetProps {
  name: string;
  emoji: string;
  colors: {
    from: string;
    to: string;
    border: string;
    glow: string;
  };
  distance: number;
  duration: number;
  delay: number;
}

export default function OrbitingPlanet({ name, emoji, colors, distance, duration, delay }: OrbitingPlanetProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      <motion.div
        className={`w-20 h-20 rounded-full border flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${colors.border}`}
        style={{
          background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
          transform: `translateX(${distance}px)`,
          boxShadow: `0 0 30px ${colors.glow}`
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 1
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: `0 0 50px ${colors.glow.replace('0.5)', '0.8)')}`
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="text-center">
          <motion.div 
            className="text-2xl mb-1"
            animate={isHovered ? { scale: 1.2, rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {emoji}
          </motion.div>
          <p className="text-xs font-inter font-semibold text-white">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
