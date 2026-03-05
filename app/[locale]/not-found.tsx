'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  Menu, 
  Bug, 
  Rocket, 
  Cpu, 
  Signal, 
  Wifi, 
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  Code,
  Smartphone,
  Globe,
  Terminal,
  Layers,
  Zap,
  Database
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  const router = useRouter();
  
  const floatingIcons = [
    { icon: <Cpu className="w-16 h-16" />, delay: 0, x: '10%', y: '10%', duration: 4 },
    { icon: <Bug className="w-20 h-20" />, delay: 1, x: '85%', y: '15%', duration: 5 },
    { icon: <Rocket className="w-14 h-14" />, delay: 0.5, x: '75%', y: '40%', duration: 3.5 },
    { icon: <Code className="w-12 h-12" />, delay: 1.5, x: '15%', y: '35%', duration: 4.5 },
    { icon: <Smartphone className="w-10 h-10" />, delay: 2, x: '80%', y: '60%', duration: 3 },
    { icon: <Globe className="w-14 h-14" />, delay: 0.8, x: '20%', y: '55%', duration: 4.2 },
    { icon: <Terminal className="w-11 h-11" />, delay: 1.2, x: '60%', y: '70%', duration: 3.8 },
    { icon: <Layers className="w-9 h-9" />, delay: 0.3, x: '5%', y: '75%', duration: 4.8 },
    { icon: <Zap className="w-10 h-10" />, delay: 1.8, x: '90%', y: '80%', duration: 3.2 },
    { icon: <Database className="w-8 h-8" />, delay: 2.2, x: '45%', y: '8%', duration: 4 },
  ];
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      <header className="w-full border-b border-white/5 px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-tighter">
            SM<span className="text-blue-400">.</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Sergio Alejandro</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/">Inicio</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#projects">Proyectos</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#experience">Experiencia</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#contact">Contacto</Link>
        </nav>
        <button className="md:hidden text-blue-400">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: item.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: item.delay
            }}
            className="absolute text-blue-400 pointer-events-none"
            style={{ 
              left: item.x, 
              top: item.y 
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        <div className="max-w-4xl w-full flex flex-col items-center gap-12 z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-64 h-[450px] bg-zinc-900 rounded-[2.5rem] border-4 border-white/10 p-3 shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-xl z-20"></div>
            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden flex flex-col p-4 font-mono text-[10px] relative">
              <div className="flex justify-between items-center mb-4 pt-4">
                <div className="text-zinc-500">9:41</div>
                <div className="flex gap-1">
                  <Signal className="w-3 h-3 text-zinc-500" />
                  <Wifi className="w-3 h-3 text-zinc-500" />
                </div>
              </div>
              <div className="space-y-1 text-blue-400/80">
                <p className="text-pink-500">import <span className="text-white">React</span> from <span className="text-green-400">&apos;react&apos;</span>;</p>
                <p className="text-pink-500">import {'{'} <span className="text-white">View, Text</span> {'}'} from <span className="text-green-400">&apos;react-native&apos;</span>;</p>
                <p className="mt-4 text-blue-400">const <span className="text-yellow-400">NotFoundScreen</span> = () =&gt; {'{'}</p>
                <p className="pl-4 text-blue-400">return (</p>
                <p className="pl-8 text-white">&lt;<span className="text-pink-500">View</span> style={'{'}styles.container{'}'}&gt;</p>
                <div className="pl-12 bg-red-900/30 py-1 my-1 border-l-2 border-red-500 animate-pulse">
                  <p className="text-red-400 font-bold">{"// FATAL_ERROR: 404"}</p>
                  <p className="text-red-400">Route not found</p>
                </div>
                <p className="pl-8 text-white">&lt;/<span className="text-pink-500">View</span>&gt;</p>
                <p className="pl-4 text-blue-400">);</p>
                <p className="text-blue-400">{'}'};</p>
              </div>
              <div className="absolute inset-0 bg-blue-400/5 mix-blend-overlay pointer-events-none group-hover:bg-blue-400/10 transition-colors"></div>
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </motion.div>

          <div className="text-center space-y-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t('title')}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <button 
                onClick={() => router.back()}
                className="min-w-[200px] bg-white text-black font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> {t('backHome')}
              </button>
              <a className="text-zinc-500 hover:text-blue-400 text-sm flex items-center gap-2 underline underline-offset-4 transition-colors" href="mailto:sam94c@gmail.com">
                <Bug className="w-4 h-4" /> {t('reportBug')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 w-full max-w-4xl px-4">
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">{t('techStack.reactNative')}</h3>
              <p className="text-xs text-zinc-500">{t('techStack.reactNativeDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Rocket className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">{t('techStack.expo')}</h3>
              <p className="text-xs text-zinc-500">{t('techStack.expoDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Bug className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">{t('techStack.bugHunter')}</h3>
              <p className="text-xs text-zinc-500">{t('techStack.bugHunterDesc')}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-10 px-6 border-t border-white/5 bg-[#0a0a0a]/50 text-center">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <a className="text-zinc-500 hover:text-blue-400 transition-colors font-medium" href="https://github.com/XChecho" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a className="text-zinc-500 hover:text-blue-400 transition-colors font-medium" href="https://www.linkedin.com/in/sergio-alejandro-morales-cuesta-frontend/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a className="text-zinc-500 hover:text-blue-400 transition-colors font-medium" href="mailto:sam94c@gmail.com">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Sergio Alejandro Morales Cuesta. Crafted with <span className="text-blue-400">React</span> &amp; passion.
        </p>
      </footer>
    </div>
  );
}
