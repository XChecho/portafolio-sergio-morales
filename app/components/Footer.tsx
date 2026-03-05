'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Sergio Alejandro Morales Cuesta. {t('text')}</p>
    </footer>
  );
}
