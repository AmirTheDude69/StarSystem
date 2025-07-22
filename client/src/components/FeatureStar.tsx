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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: colors.glow,
            left: '50%',
            top: '50%',
            transformOrigin: '0 0'
          }}
          animate={{
            rotate: 360,
            opacity: [0, 1, 0]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
          }}
          initial={{
            x: Math.cos(i * 45 * Math.PI / 180) * 60,
            y: Math.sin(i * 45 * Math.PI / 180) * 60
          }}
        />
      ))}
      
      {/* Main feature star */}
      <motion.div
        className="relative w-32 h-32 rounded-full premium-glass cursor-pointer overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, ${colors.from} 0%, ${colors.to} 70%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)
          `,
          boxShadow: `
            0 0 40px ${colors.glow},
            0 0 80px ${colors.glow.replace('0.6', '0.3')},
            0 0 120px ${colors.glow.replace('0.6', '0.1')},
            inset 0 0 30px rgba(255, 255, 255, 0.1)
          `,
          border: `2px solid ${colors.glow.replace('0.6', '0.8')}`
        }}
        animate={{
          y: [0, -8, 0],
          rotateY: [0, 360]
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
          rotateY: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: `
            0 0 60px ${colors.glow},
            0 0 120px ${colors.glow.replace('0.6', '0.4')},
            0 0 180px ${colors.glow.replace('0.6', '0.2')},
            inset 0 0 40px rgba(255, 255, 255, 0.2)
          `
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Particle trail effect */}
        <div className="particle-trail absolute inset-0 rounded-full" />
        
        {/* Pulsing energy ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: colors.glow.replace('0.6', '0.4')
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Surface pattern */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 45% 70%, rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px),
              radial-gradient(circle at 65% 85%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 30px 30px, 35px 35px, 25px 25px'
          }}
        />
        
        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div 
            className="text-4xl mb-2"
            animate={isHovered ? { 
              scale: 1.2, 
              rotate: [0, -10, 10, 0],
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))'
            } : {}}
            transition={{ duration: 0.4 }}
          >
            {emoji}
          </motion.div>
          <motion.p 
            className="text-sm font-inter font-bold text-white/95 tracking-wide leading-tight"
            animate={isHovered ? { scale: 1.05 } : {}}
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