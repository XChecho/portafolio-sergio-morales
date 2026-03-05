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
  Mail
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations();
  const router = useRouter();
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-white/5 px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold tracking-tighter">
            SM<span className="text-blue-400">.</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Sergio Alejandro</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#hero">Sobre mí</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#projects">Proyectos</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#experience">Experiencia</Link>
          <Link className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/#contact">Contacto</Link>
        </nav>
        <button className="md:hidden text-blue-400">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Floating Tech Icons Decor */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 opacity-20 text-blue-400 pointer-events-none"
        >
          <Cpu className="w-16 h-16" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-1/4 opacity-10 text-blue-400 pointer-events-none"
        >
          <Bug className="w-24 h-24" />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-10 opacity-15 text-blue-400 pointer-events-none"
        >
          <Rocket className="w-12 h-12" />
        </motion.div>

        <div className="max-w-4xl w-full flex flex-col items-center gap-12 z-10">
          {/* Glitchy Smartphone Component */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-64 h-[450px] bg-zinc-900 rounded-[2.5rem] border-4 border-white/10 p-3 shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-xl z-20"></div>
            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden flex flex-col p-4 font-mono text-[10px] relative">
              {/* Fake React Native Code / Error Screen */}
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
              {/* Glitch Overlay effect */}
              <div className="absolute inset-0 bg-blue-400/5 mix-blend-overlay pointer-events-none group-hover:bg-blue-400/10 transition-colors"></div>
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="text-center space-y-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              ¡Ups! Esta ruta no ha sido <span className="text-blue-400 italic">desplegada</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Parece que esta pantalla no pasó el control de calidad o se quedó en el ambiente de <span className="text-blue-400/80 font-mono">staging</span>. No te preocupes, los mejores bugs ocurren en producción.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <button 
                onClick={() => router.back()}
                className="min-w-[200px] bg-white text-black font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> Volver al Home
              </button>
              <a className="text-zinc-500 hover:text-blue-400 text-sm flex items-center gap-2 underline underline-offset-4 transition-colors" href="mailto:sam94c@gmail.com">
                <Bug className="w-4 h-4" /> Reportar bug
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 w-full max-w-4xl px-4">
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">React Native</h3>
              <p className="text-xs text-zinc-500">Cross-platform Core</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Rocket className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">Expo</h3>
              <p className="text-xs text-zinc-500">Universal Workflow</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className="text-blue-400">
              <Bug className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-white">Bug Hunter</h3>
              <p className="text-xs text-zinc-500">QA Specialist</p>
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
