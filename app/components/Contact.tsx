'use client';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function Contact() {
  const t = useTranslations();
  const locale = useLocale();

  const getCVUrl = () => {
    switch (locale) {
      case 'es':
        return '/documents/CV ATS Sergio Alejandro Morales Cuesta.pdf';
      case 'pt':
        return '/documents/English CV ATS Sergio Alejandro Morales Cuesta.pdf';
      case 'en':
      default:
        return '/documents/English CV ATS Sergio Alejandro Morales Cuesta.pdf';
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <div className="p-12 rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <h2 className="text-4xl font-bold mb-6">{t('contact.title')}</h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          {t('contact.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:sam94c@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" /> {t('contact.sendEmail')}
          </a>
          <a 
            href={getCVUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            <Download className="w-5 h-5" /> {t('downloadCV')}
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/XChecho" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sergio-alejandro-morales-cuesta-frontend/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
