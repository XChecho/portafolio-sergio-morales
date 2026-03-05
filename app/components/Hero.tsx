'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 blur-[120px] -z-10" />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-6">
              {t('available')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {t('title')} <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {t('subtitle')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform">
                {t('viewProjects')}
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/10 bg-white/5 font-semibold rounded-xl hover:bg-white/10 transition-colors">
                {t('contact')}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/assets/profile.png"
                alt="Sergio Alejandro Morales"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
