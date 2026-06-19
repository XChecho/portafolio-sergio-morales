'use client';
import { useState } from 'react';
import { Smartphone, Globe, Bot, Palette, Layers, Server, Cloud, Sparkles, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BentoSkills() {
  const t = useTranslations('skills');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const skills = [
    { 
      name: 'React Native / Expo', 
      icon: <Smartphone className="w-6 h-6" />, 
      desc: t('reactNative'),
      descLong: t('reactNativeLong'),
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30'
    },
    { 
      name: 'Next.js', 
      icon: <Globe className="w-6 h-6" />, 
      desc: t('nextjs'),
      descLong: t('nextjsLong'),
      color: 'from-zinc-500/20 to-zinc-600/10',
      borderColor: 'border-zinc-500/30'
    },
    { 
      name: 'Hermes Agent', 
      icon: <Bot className="w-6 h-6" />, 
      desc: t('hermes'),
      descLong: t('hermesLong'),
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/30'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <Palette className="w-6 h-6" />, 
      desc: t('tailwind'),
      descLong: t('tailwindLong'),
      color: 'from-cyan-500/20 to-cyan-600/10',
      borderColor: 'border-cyan-500/30'
    },
    { 
      name: 'NativeWind CSS', 
      icon: <Layers className="w-6 h-6" />, 
      desc: t('nativewind'),
      descLong: t('nativewindLong'),
      color: 'from-sky-500/20 to-sky-600/10',
      borderColor: 'border-sky-500/30'
    },
    { 
      name: 'Zustand', 
      icon: <Layers className="w-6 h-6" />, 
      desc: t('zustand'),
      descLong: t('zustandLong'),
      color: 'from-amber-500/20 to-amber-600/10',
      borderColor: 'border-amber-500/30'
    },
    { 
      name: 'NestJS', 
      icon: <Server className="w-6 h-6" />, 
      desc: t('nestjs'),
      descLong: t('nestjsLong'),
      color: 'from-red-500/20 to-red-600/10',
      borderColor: 'border-red-500/30'
    },
    { 
      name: 'AI', 
      icon: <Sparkles className="w-6 h-6" />, 
      desc: t('ai'),
      descLong: t('aiLong'),
      color: 'from-indigo-500/20 to-indigo-600/10',
      borderColor: 'border-indigo-500/30'
    },
    { 
      name: 'Deploy Stores', 
      icon: <Cloud className="w-6 h-6" />, 
      desc: t('deploy'),
      descLong: t('deployLong'),
      color: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/30'
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">{t('title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isExpanded}
              className={`p-5 rounded-2xl border ${skill.borderColor} bg-gradient-to-br ${skill.color} flex flex-col cursor-pointer transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-white/80">{skill.icon}</div>
                <h3 className="text-sm font-bold text-white flex-grow">{skill.name}</h3>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
              <p className={`text-xs text-zinc-400 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                {isExpanded ? skill.descLong : skill.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
