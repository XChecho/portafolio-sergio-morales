'use client';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter cursor-pointer"
        >
          SM<span className="text-blue-400">.</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors" aria-label={t('home')}>{t('home')}</a>
          <a href="#skills" className="hover:text-white transition-colors" aria-label={t('skills')}>{t('skills')}</a>
          <a href="#projects" className="hover:text-white transition-colors" aria-label={t('projects')}>{t('projects')}</a>
          <a href="#experience" className="hover:text-white transition-colors" aria-label={t('experience')}>{t('experience')}</a>
          <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors" aria-label={t('contact')}>{t('contact')}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
