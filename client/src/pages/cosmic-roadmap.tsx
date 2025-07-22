import { motion } from 'framer-motion';
import PremiumStarField from '@/components/PremiumStarField';
import PremiumCosmicGlow from '@/components/PremiumCosmicGlow';
import PremiumCentralStar from '@/components/PremiumCentralStar';
import PremiumOrbitingPlanet from '@/components/PremiumOrbitingPlanet';

const planets = [
  {
    name: 'AI Solutions',
    emoji: '🤖',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that power intelligent automation and decision-making systems.',
    colors: {
      from: 'hsl(187, 100%, 50%)',
      to: 'hsl(217, 91%, 60%)',
      glow: 'rgba(6, 182, 212, 0.6)'
    },
    distance: 220,
    duration: 25,
    delay: 0,
    technologies: ['Machine Learning', 'Neural Networks', 'NLP', 'Computer Vision', 'Deep Learning']
  },
  {
    name: 'Cloud Services',
    emoji: '☁️',
    description: 'Scalable cloud infrastructure and services that provide reliable, secure, and efficient computing resources for modern applications.',
    colors: {
      from: 'hsl(271, 91%, 65%)',
      to: 'hsl(330, 85%, 60%)',
      glow: 'rgba(168, 85, 247, 0.6)'
    },
    distance: 320,
    duration: 35,
    delay: 0.8,
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Serverless']
  },
  {
    name: 'Data Analytics',
    emoji: '📊',
    description: 'Advanced data processing and analytics platforms that transform raw data into actionable insights and strategic intelligence.',
    colors: {
      from: 'hsl(142, 76%, 47%)',
      to: 'hsl(160, 84%, 39%)',
      glow: 'rgba(34, 197, 94, 0.6)'
    },
    distance: 420,
    duration: 45,
    delay: 1.6,
    technologies: ['Big Data', 'Real-time Analytics', 'Data Visualization', 'ETL', 'Data Warehousing']
  },
  {
    name: 'Security',
    emoji: '🔒',
    description: 'Comprehensive cybersecurity solutions that protect digital assets and ensure compliance with the highest security standards.',
    colors: {
      from: 'hsl(25, 95%, 53%)',
      to: 'hsl(0, 84%, 60%)',
      glow: 'rgba(249, 115, 22, 0.6)'
    },
    distance: 520,
    duration: 55,
    delay: 2.4,
    technologies: ['Zero Trust', 'Encryption', 'Identity Management', 'Threat Detection', 'Compliance']
  },
  {
    name: 'Automation',
    emoji: '⚡',
    description: 'Intelligent automation solutions that streamline workflows and optimize business processes for maximum efficiency.',
    colors: {
      from: 'hsl(51, 93%, 53%)',
      to: 'hsl(25, 95%, 53%)',
      glow: 'rgba(251, 191, 36, 0.6)'
    },
    distance: 620,
    duration: 65,
    delay: 3.2,
    technologies: ['RPA', 'Workflow Automation', 'API Integration', 'Process Mining', 'DevOps']
  }
];

const orbitalPaths = [
  { width: 440, height: 440, opacity: 0.3 },
  { width: 640, height: 640, opacity: 0.25 },
  { width: 840, height: 840, opacity: 0.2 },
  { width: 1040, height: 1040, opacity: 0.15 },
  { width: 1240, height: 1240, opacity: 0.1 }
];

export default function CosmicRoadmap() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Premium starfield background */}
      <PremiumStarField />
      
      {/* Enhanced cosmic glow effect */}
      <PremiumCosmicGlow />
      
      {/* Ambient energy fields */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none z-1 animate-pulse" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-400/25 via-pink-500/15 to-transparent rounded-full blur-3xl pointer-events-none z-1 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-emerald-400/15 via-green-500/8 to-transparent rounded-full blur-3xl pointer-events-none z-1 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {/* Responsive orbital system container */}
        <motion.div 
          className="orbit-container relative w-full h-full flex items-center justify-center"
          initial={{ scale: 0.3, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Enhanced orbital paths with glow effects */}
          {orbitalPaths.map((path, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: path.width,
                height: path.height,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: `1px solid rgba(0, 245, 255, ${path.opacity})`,
                boxShadow: `0 0 20px rgba(0, 245, 255, ${path.opacity * 0.5}), inset 0 0 20px rgba(0, 245, 255, ${path.opacity * 0.2})`
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
            />
          ))}
          
          {/* Central star - Mirage Tech */}
          <motion.div
            initial={{ scale: 0, rotate: -360, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
          >
            <PremiumCentralStar />
          </motion.div>
          
          {/* Orbiting service planets with staggered entrance */}
          {planets.map((planet, index) => (
            <motion.div
              key={planet.name}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.6 + 2,
                ease: "backOut"
              }}
            >
              <PremiumOrbitingPlanet {...planet} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced title section */}
        <motion.div 
          className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text mb-6"
            style={{
              background: 'linear-gradient(45deg, #00f5ff, #a855f7, #ec4899, #00f5ff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MIRAGE TECH
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <p className="text-xl font-inter text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A constellation of cutting-edge technology services
            </p>
            <p className="text-sm font-inter text-cyan-400/80 mt-2 tracking-wide">
              Hover over planets to explore our technologies
            </p>
          </motion.div>
        </motion.div>
        
        {/* Enhanced navigation panel */}
        <motion.div 
          className="absolute bottom-8 left-8 premium-glass rounded-xl p-6 max-w-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 15, 35, 0.8))',
            border: '1px solid rgba(0, 245, 255, 0.3)'
          }}
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <h3 className="font-orbitron font-bold text-cyan-400 mb-4 text-lg">SYSTEM MAP</h3>
          <div className="space-y-3">
            {planets.map((planet, index) => (
              <motion.div
                key={planet.name}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${planet.colors.from}, ${planet.colors.to})`,
                    boxShadow: `0 0 10px ${planet.colors.glow}`
                  }}
                />
                <div>
                  <span className="text-white font-medium text-sm">{planet.name}</span>
                  <div className="text-xs text-gray-400">{planet.emoji} {planet.technologies[0]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Performance metrics panel */}
        <motion.div 
          className="absolute bottom-8 right-8 premium-glass rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 15, 35, 0.8))',
            border: '1px solid rgba(168, 85, 247, 0.3)'
          }}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        >
          <h3 className="font-orbitron font-bold text-purple-400 mb-4">SYSTEM STATUS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Services</span>
              <span className="text-green-400 font-bold">5/5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Performance</span>
              <span className="text-cyan-400 font-bold">98.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Efficiency</span>
              <span className="text-pink-400 font-bold">Optimal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
