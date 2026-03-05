'use client';

import { motion } from 'motion/react';
import { Cpu, Code, Smartphone, Globe, Layers, Zap, Terminal, Database, Server, Cloud } from 'lucide-react';

const floatingIcons = [
  { icon: <Cpu className="w-8 h-8" />, x: '3%', y: '10%', duration: 5, color: 'text-blue-500/30' },
  { icon: <Code className="w-6 h-6" />, x: '92%', y: '8%', duration: 4.5, color: 'text-cyan-500/30' },
  { icon: <Smartphone className="w-7 h-7" />, x: '5%', y: '30%', duration: 4.8, color: 'text-blue-400/30' },
  { icon: <Globe className="w-6 h-6" />, x: '90%', y: '25%', duration: 4.2, color: 'text-cyan-400/30' },
  { icon: <Layers className="w-5 h-5" />, x: '2%', y: '50%', duration: 5.2, color: 'text-blue-600/30' },
  { icon: <Zap className="w-5 h-5" />, x: '95%', y: '45%', duration: 4, color: 'text-cyan-500/30' },
  { icon: <Terminal className="w-6 h-6" />, x: '8%', y: '70%', duration: 4.6, color: 'text-blue-400/30' },
  { icon: <Database className="w-5 h-5" />, x: '88%', y: '65%', duration: 5.5, color: 'text-cyan-400/30' },
  { icon: <Server className="w-6 h-6" />, x: '4%', y: '85%', duration: 4.3, color: 'text-blue-500/30' },
  { icon: <Cloud className="w-5 h-5" />, x: '93%', y: '80%', duration: 4.7, color: 'text-cyan-500/30' },
];

export default function FloatingIcons() {
  return (
    <>
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.15, 1],
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{ 
            duration: item.duration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * 0.4,
          }}
          className={`fixed ${item.color} pointer-events-none z-0`}
          style={{ 
            left: item.x, 
            top: item.y 
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}
