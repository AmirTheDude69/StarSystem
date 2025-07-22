import { motion } from 'framer-motion';

export default function CentralStar() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="relative">
        {/* Rotating outer rings */}
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full border-2 border-cyan-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-40 h-40 rounded-full border border-purple-400/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Central core */}
        <motion.div
          className="relative w-24 h-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full border-2 border-cyan-400 binary-pattern flex items-center justify-center cosmic-glow-cyan"
          animate={{
            boxShadow: [
              '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3), 0 0 60px rgba(0, 245, 255, 0.1)',
              '0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(0, 245, 255, 0.5), 0 0 90px rgba(0, 245, 255, 0.2)',
              '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3), 0 0 60px rgba(0, 245, 255, 0.1)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-center">
            <h1 className="text-xs font-orbitron font-bold text-cyan-400 tracking-wider">MIRAGE</h1>
            <p className="text-xs font-orbitron text-cyan-300">TECH</p>
          </div>
          
          {/* Binary code pattern overlay */}
          <div className="absolute inset-0 rounded-full opacity-20 text-xs font-mono text-cyan-400 overflow-hidden">
            <motion.div
              className="absolute top-2 left-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              01
            </motion.div>
            <motion.div
              className="absolute top-4 right-3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              10
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              11
            </motion.div>
            <motion.div
              className="absolute bottom-2 right-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              00
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
