import { motion } from 'framer-motion';
import StarField from '@/components/StarField';
import CosmicGlow from '@/components/CosmicGlow';
import CentralStar from '@/components/CentralStar';
import OrbitingPlanet from '@/components/OrbitingPlanet';

const planets = [
  {
    name: 'AI Solutions',
    emoji: '🤖',
    colors: {
      from: 'hsl(187, 100%, 50%)',
      to: 'hsl(217, 91%, 60%)',
      border: 'border-cyan-300',
      glow: 'rgba(6, 182, 212, 0.5)'
    },
    distance: 200,
    duration: 20,
    delay: 0
  },
  {
    name: 'Cloud Services',
    emoji: '☁️',
    colors: {
      from: 'hsl(271, 91%, 65%)',
      to: 'hsl(330, 85%, 60%)',
      border: 'border-purple-300',
      glow: 'rgba(168, 85, 247, 0.5)'
    },
    distance: 280,
    duration: 25,
    delay: 0.5
  },
  {
    name: 'Data Analytics',
    emoji: '📊',
    colors: {
      from: 'hsl(142, 76%, 47%)',
      to: 'hsl(160, 84%, 39%)',
      border: 'border-green-300',
      glow: 'rgba(34, 197, 94, 0.5)'
    },
    distance: 350,
    duration: 30,
    delay: 1
  },
  {
    name: 'Security',
    emoji: '🔒',
    colors: {
      from: 'hsl(25, 95%, 53%)',
      to: 'hsl(0, 84%, 60%)',
      border: 'border-orange-300',
      glow: 'rgba(249, 115, 22, 0.5)'
    },
    distance: 420,
    duration: 35,
    delay: 1.5
  },
  {
    name: 'Automation',
    emoji: '⚡️',
    colors: {
      from: 'hsl(51, 93%, 53%)',
      to: 'hsl(25, 95%, 53%)',
      border: 'border-yellow-300',
      glow: 'rgba(251, 191, 36, 0.5)'
    },
    distance: 490,
    duration: 40,
    delay: 2
  }
];

const orbitalPaths = [
  { width: 400, height: 400 },
  { width: 560, height: 560 },
  { width: 700, height: 700 },
  { width: 840, height: 840 },
  { width: 980, height: 980 }
];

export default function CosmicRoadmap() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Starfield background */}
      <StarField />
      
      {/* Mouse following cosmic glow */}
      <CosmicGlow />
      
      {/* Corner gradient overlays */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/30 via-emerald-500/20 to-transparent rounded-full blur-3xl pointer-events-none z-1" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-400/30 via-purple-500/20 to-transparent rounded-full blur-3xl pointer-events-none z-1" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/30 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none z-1" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {/* Orbital system container */}
        <motion.div 
          className="orbit-container relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            transform: 'scale(1)',
            '@media (max-width: 768px)': {
              transform: 'scale(0.6)'
            },
            '@media (max-width: 480px)': {
              transform: 'scale(0.4)'
            }
          }}
        >
          {/* Orbital paths */}
          {orbitalPaths.map((path, index) => (
            <motion.div
              key={index}
              className="absolute border border-dashed border-white/20 rounded-full pointer-events-none"
              style={{
                width: path.width,
                height: path.height,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
          ))}
          
          {/* Central star - Mirage Tech */}
          <CentralStar />
          
          {/* Orbiting service planets */}
          {planets.map((planet, index) => (
            <motion.div
              key={planet.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.5 + 1 }}
            >
              <OrbitingPlanet {...planet} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Title and description */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            COSMIC ROADMAP
          </h1>
          <p className="text-lg font-inter text-gray-300 max-w-2xl mx-auto">
            Explore our constellation of cutting-edge technology services orbiting around innovation
          </p>
        </motion.div>
        
        {/* Legend */}
        <motion.div 
          className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md rounded-lg p-4 border border-gray-700/50"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3 className="font-orbitron font-bold text-cyan-400 mb-2">NAVIGATION</h3>
          <div className="space-y-1 text-sm font-inter text-gray-300">
            {planets.map((planet, index) => (
              <motion.div
                key={planet.name}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.5 + index * 0.1 }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${planet.colors.from}, ${planet.colors.to})` }}
                />
                <span>{planet.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
