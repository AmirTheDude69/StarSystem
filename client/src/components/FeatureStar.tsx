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
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: colors.glow.replace('0.6', '0.4'),
            filter: 'blur(1px)',
            left: '50%',
            top: '50%'
          }}
          animate={{
            x: [
              Math.cos(i * 90 * Math.PI / 180) * 60,
              Math.cos((i * 90 + 45) * Math.PI / 180) * 80,
              Math.cos(i * 90 * Math.PI / 180) * 60
            ],
            y: [
              Math.sin(i * 90 * Math.PI / 180) * 60,
              Math.sin((i * 90 + 45) * Math.PI / 180) * 80,
              Math.sin(i * 90 * Math.PI / 180) * 60
            ],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}
      
      {/* Main feature star - Enhanced 3D sphere */}
      <motion.div
        className="relative w-36 h-36 rounded-full cursor-pointer"
        style={{
          background: `
            radial-gradient(ellipse 80px 60px at 30% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 120px 100px at 70% 80%, rgba(0, 0, 0, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.15) 100%)
          `,
          boxShadow: `
            0 0 60px ${colors.glow.replace('0.6', '0.15')},
            0 0 120px ${colors.glow.replace('0.6', '0.08')},
            0 0 200px ${colors.glow.replace('0.6', '0.04')},
            inset 0 0 80px rgba(0, 0, 0, 0.4),
            inset 30px 30px 60px rgba(255, 255, 255, 0.08),
            inset -30px -30px 60px rgba(0, 0, 0, 0.25)
          `,
          border: `0.5px solid ${colors.glow.replace('0.6', '0.15')}`,
          backdropFilter: 'blur(1px)'
        }}
        animate={{
          x: [0, 6, -3, 0],
          y: [0, -8, 4, 0],
          scale: [1, 1.01, 0.99, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: `
            0 0 80px ${colors.glow.replace('0.6', '0.25')},
            0 0 160px ${colors.glow.replace('0.6', '0.12')},
            0 0 240px ${colors.glow.replace('0.6', '0.06')},
            inset 0 0 100px rgba(0, 0, 0, 0.3),
            inset 35px 35px 70px rgba(255, 255, 255, 0.12),
            inset -35px -35px 70px rgba(0, 0, 0, 0.3)
          `
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Primary 3D highlight */}
        <motion.div
          className="absolute top-8 left-10 w-12 h-10 rounded-full"
          style={{
            background: `
              radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 80%)
            `,
            filter: 'blur(1px)'
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary highlight for more depth */}
        <motion.div
          className="absolute top-12 left-6 w-6 h-4 rounded-full"
          style={{
            background: `radial-gradient(ellipse, rgba(255, 255, 255, 0.25) 0%, transparent 70%)`,
            filter: 'blur(0.5px)'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Soft inner glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.glow.replace('0.6', '0.08')}`,
            filter: 'blur(3px)'
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.5
          }}
        />
        
        {/* Very soft outer glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `0.5px solid ${colors.glow.replace('0.6', '0.04')}`,
            filter: 'blur(8px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.3
          }}
        />
        
        {/* Central content - name only */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <motion.p 
            className="text-base font-inter font-semibold text-white/85 tracking-wide leading-tight"
            animate={isHovered ? { scale: 1.08 } : {}}
            style={{
              textShadow: `0 0 15px ${colors.glow.replace('0.6', '0.3')}, 0 0 30px ${colors.glow.replace('0.6', '0.15')}`
            }}
          >
            {name}
          </motion.p>
        </div>
        
        {/* COMPLETELY CENTERED POPUP OVERLAY */}
        {isHovered && (
          <>
            {/* Full screen backdrop */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]" />
            
            {/* Popup container - GUARANTEED CENTER */}
            <div 
              className="fixed z-[10000]"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                maxWidth: '90vw',
                maxHeight: '80vh'
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  border: `2px solid ${colors.glow.replace('0.6', '0.7')}`,
                  boxShadow: `
                    0 25px 50px rgba(0, 0, 0, 0.9), 
                    0 0 60px ${colors.glow.replace('0.6', '0.6')},
                    0 0 120px ${colors.glow.replace('0.6', '0.4')}
                  `,
                  backdropFilter: 'blur(30px)'
                }}
              >
                <h3 
                  className="font-orbitron font-bold text-white mb-3 text-xl"
                  style={{ color: colors.from }}
                >
                  {name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Core Technologies:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {technologies.map((tech, i) => (
                      <div
                        key={tech}
                        className="text-sm text-gray-400 flex items-center gap-2 p-2 rounded-lg bg-white/5"
                      >
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: colors.glow }}
                        />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}