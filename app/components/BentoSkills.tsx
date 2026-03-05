'use client';
import { motion } from 'motion/react';
import { Smartphone, Globe, Workflow, Palette, Layers, Database, Server, Cloud } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BentoSkills() {
  const t = useTranslations('skills');

  const skills = [
    { 
      name: 'React Native / Expo', 
      icon: <Smartphone className="w-6 h-6" />, 
      desc: t('reactNative'),
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30'
    },
    { 
      name: 'Next.js', 
      icon: <Globe className="w-6 h-6" />, 
      desc: t('nextjs'),
      color: 'from-zinc-500/20 to-zinc-600/10',
      borderColor: 'border-zinc-500/30'
    },
    { 
      name: 'n8n', 
      icon: <Workflow className="w-6 h-6" />, 
      desc: t('n8n'),
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/30'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <Palette className="w-6 h-6" />, 
      desc: t('tailwind'),
      color: 'from-cyan-500/20 to-cyan-600/10',
      borderColor: 'border-cyan-500/30'
    },
    { 
      name: 'NativeWind CSS', 
      icon: <Layers className="w-6 h-6" />, 
      desc: t('nativewind'),
      color: 'from-sky-500/20 to-sky-600/10',
      borderColor: 'border-sky-500/30'
    },
    { 
      name: 'Zustand', 
      icon: <Layers className="w-6 h-6" />, 
      desc: t('zustand'),
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/30'
    },
    { 
      name: 'NestJS', 
      icon: <Server className="w-6 h-6" />, 
      desc: t('nestjs'),
      color: 'from-red-500/20 to-red-600/10',
      borderColor: 'border-red-500/30'
    },
    { 
      name: '.NET', 
      icon: <Database className="w-6 h-6" />, 
      desc: t('dotnet'),
      color: 'from-indigo-500/20 to-indigo-600/10',
      borderColor: 'border-indigo-500/30'
    },
    { 
      name: 'Deploy Stores', 
      icon: <Cloud className="w-6 h-6" />, 
      desc: t('deploy'),
      color: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/30'
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">{t('title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`p-5 rounded-2xl border ${skill.borderColor} bg-gradient-to-br ${skill.color} flex flex-col transition-all duration-300 cursor-default`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-white/80">{skill.icon}</div>
              <h3 className="text-sm font-bold text-white">{skill.name}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
