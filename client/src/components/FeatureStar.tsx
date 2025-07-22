import { motion } from 'framer-motion';
import { useState } from 'react';

interface FeatureStarProps {
  name: string;
  emoji: string;
  description: string;
  colors: {
    from: string;
    to: string;
    glow: string;
  };
  position: {
    x: string;
    y: string;
  };
  technologies: string[];
  delay: number;
}

export default function FeatureStar({ 
  name, 
  emoji, 
  description,
  colors, 
  position,
  technologies,
  delay 
}: FeatureStarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 2, 
        delay,
        ease: "backOut"
      }}
    >
      {/* Floating energy particles around the star */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: colors.glow.replace('0.6', '0.8'),
            filter: 'blur(0.5px)',
            left: '50%',
            top: '50%'
          }}
          animate={{
            x: [
              Math.cos(i * 60 * Math.PI / 180) * 50,
              Math.cos((i * 60 + 30) * Math.PI / 180) * 70,
              Math.cos(i * 60 * Math.PI / 180) * 50
            ],
            y: [
              Math.sin(i * 60 * Math.PI / 180) * 50,
              Math.sin((i * 60 + 30) * Math.PI / 180) * 70,
              Math.sin(i * 60 * Math.PI / 180) * 50
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}
      
      {/* Main feature star - 3D sphere */}
      <motion.div
        className="relative w-32 h-32 rounded-full cursor-pointer"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)
          `,
          boxShadow: `
            0 0 40px ${colors.glow},
            0 0 80px ${colors.glow.replace('0.6', '0.4')},
            0 0 120px ${colors.glow.replace('0.6', '0.2')},
            inset 0 0 60px rgba(0, 0, 0, 0.3),
            inset 20px 20px 40px rgba(255, 255, 255, 0.1),
            inset -20px -20px 40px rgba(0, 0, 0, 0.2)
          `,
          border: `1px solid ${colors.glow.replace('0.6', '0.3')}`,
          backdropFilter: 'blur(2px)'
        }}
        animate={{
          x: [0, 8, -4, 0],
          y: [0, -12, 6, 0],
          scale: [1, 1.02, 0.98, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: `
            0 0 60px ${colors.glow},
            0 0 120px ${colors.glow.replace('0.6', '0.5')},
            0 0 180px ${colors.glow.replace('0.6', '0.3')},
            inset 0 0 80px rgba(0, 0, 0, 0.2),
            inset 25px 25px 50px rgba(255, 255, 255, 0.15),
            inset -25px -25px 50px rgba(0, 0, 0, 0.3)
          `
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* 3D highlight effect */}
        <motion.div
          className="absolute top-6 left-8 w-8 h-8 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)`
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Soft pulsing glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${colors.glow.replace('0.6', '0.2')}`,
            filter: 'blur(2px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.5
          }}
        />
        
        {/* Outer ethereal glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.glow.replace('0.6', '0.1')}`,
            filter: 'blur(4px)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.3
          }}
        />
        
        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div 
            className="text-4xl mb-2"
            animate={isHovered ? { 
              scale: 1.3, 
              rotate: [0, -8, 8, 0],
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))'
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.div>
          <motion.p 
            className="text-sm font-inter font-bold text-white/90 tracking-wide leading-tight"
            animate={isHovered ? { scale: 1.1 } : {}}
            style={{
              textShadow: `0 0 10px ${colors.glow.replace('0.6', '0.4')}`
            }}
          >
            {name}
          </motion.p>
        </div>
        
        {/* Enhanced hover information panel */}
        <motion.div
          className="absolute left-full ml-6 top-1/2 transform -translate-y-1/2 w-80 premium-glass rounded-xl p-6 z-20"
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -30,
            scale: isHovered ? 1 : 0.9
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.85), 
                rgba(15, 15, 35, 0.95)
              )
            `,
            border: `1px solid ${colors.glow.replace('0.6', '0.5')}`,
            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${colors.glow.replace('0.6', '0.3')}`
          }}
        >
          <motion.h3 
            className="font-orbitron font-bold text-white mb-3 text-lg"
            style={{ color: colors.from }}
          >
            {name}
          </motion.h3>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-cyan-400 mb-2">Core Technologies:</p>
            <div className="grid grid-cols-1 gap-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  className="text-sm text-gray-400 flex items-center gap-2 p-2 rounded-lg bg-white/5"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -15 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: colors.glow }}
                  />
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}