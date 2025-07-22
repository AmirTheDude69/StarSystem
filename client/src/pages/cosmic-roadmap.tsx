import { motion } from 'framer-motion';
import PremiumStarField from '@/components/PremiumStarField';
import PremiumCosmicGlow from '@/components/PremiumCosmicGlow';
import PremiumCentralStar from '@/components/PremiumCentralStar';
import FeatureStar from '@/components/FeatureStar';

const featureStars = [
  {
    name: 'AI Solutions',
    emoji: '🤖',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that power intelligent automation and decision-making systems.',
    colors: {
      from: 'hsl(187, 100%, 50%)',
      to: 'hsl(217, 91%, 60%)',
      glow: 'rgba(6, 182, 212, 0.6)'
    },
    position: { x: '15%', y: '20%' },
    delay: 0.5,
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
    position: { x: '85%', y: '25%' },
    delay: 1,
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
    position: { x: '12%', y: '78%' },
    delay: 1.5,
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
    position: { x: '88%', y: '75%' },
    delay: 2,
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
    position: { x: '50%', y: '15%' },
    delay: 2.5,
    technologies: ['RPA', 'Workflow Automation', 'API Integration', 'Process Mining', 'DevOps']
  }
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
      <div className="relative z-10 min-h-screen w-full">
        {/* Central star - Mirage Tech */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: -360, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        >
          <PremiumCentralStar />
        </motion.div>
        
        {/* Feature stars spread across the screen */}
        {featureStars.map((star, index) => (
          <FeatureStar key={star.name} {...star} />
        ))}
        
        {/* Connecting constellation lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, delay: 3 }}
        >
          {/* Connection from center to each feature star */}
          {featureStars.map((star, index) => {
            const centerX = '50%';
            const centerY = '50%';
            return (
              <motion.line
                key={`connection-${index}`}
                x1={centerX}
                y1={centerY}
                x2={star.position.x}
                y2={star.position.y}
                stroke="rgba(0, 245, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 3 + index * 0.3 }}
              />
            );
          })}
          
          {/* Subtle connections between feature stars */}
          <motion.line
            x1="20%"
            y1="25%"
            x2="25%"
            y2="75%"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeWidth="1"
            strokeDasharray="3,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 5 }}
          />
          <motion.line
            x1="80%"
            y1="30%"
            x2="75%"
            y2="70%"
            stroke="rgba(34, 197, 94, 0.15)"
            strokeWidth="1"
            strokeDasharray="3,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 5.5 }}
          />
        </motion.svg>


      </div>
    </div>
  );
}
