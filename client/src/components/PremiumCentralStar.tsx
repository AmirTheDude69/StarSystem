import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PremiumCentralStar() {
  const [pulseIntensity, setPulseIntensity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity(Math.random() * 0.5 + 0.75);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="relative">
        {/* Outer energy rings */}
        <motion.div
          className="absolute inset-0 w-48 h-48 rounded-full border border-cyan-400/20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute inset-0 w-56 h-56 rounded-full border border-purple-400/15"
          animate={{ 
            rotate: -360,
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        <motion.div
          className="absolute inset-0 w-64 h-64 rounded-full border border-pink-400/10"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
        
        {/* Energy particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transformOrigin: '0 0'
            }}
            animate={{
              rotate: 360,
              opacity: [0, 1, 0]
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear", delay: i * 0.5 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
            }}
            initial={{
              x: Math.cos(i * 30 * Math.PI / 180) * 80,
              y: Math.sin(i * 30 * Math.PI / 180) * 80
            }}
          />
        ))}
        
        {/* Central core */}
        <motion.div
          className="relative w-32 h-32 rounded-full premium-glass flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(0, 245, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(15, 15, 35, 0.9))
            `,
            boxShadow: `
              0 0 40px rgba(0, 245, 255, ${pulseIntensity * 0.8}),
              0 0 80px rgba(0, 245, 255, ${pulseIntensity * 0.5}),
              0 0 120px rgba(0, 245, 255, ${pulseIntensity * 0.3}),
              inset 0 0 30px rgba(0, 245, 255, 0.1)
            `,
            border: '2px solid rgba(0, 245, 255, 0.5)'
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Neural network pattern */}
          <div className="absolute inset-0 neural-grid opacity-20" />
          
          {/* Holographic overlay */}
          <div className="absolute inset-0 holographic rounded-full" />
          
          {/* Central content */}
          <div className="relative text-center z-10">
            <motion.h1 
              className="text-lg font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 tracking-wider"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              MIRAGE
            </motion.h1>
            <motion.p 
              className="text-sm font-orbitron text-cyan-300/90 tracking-widest"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              TECH
            </motion.p>
          </div>
          
          {/* Floating binary particles */}
          {['01', '10', '11', '00', '101', '010'].map((binary, i) => (
            <motion.div
              key={binary}
              className="absolute text-xs font-mono text-cyan-400/60"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${15 + (i * 12)}%`
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -10, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              {binary}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}