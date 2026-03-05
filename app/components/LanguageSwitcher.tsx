'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // next-intl's usePathname already returns the path WITHOUT the locale prefix
      // So pathname is already clean (e.g., "/" or "/about")
      // We just need to pass the new locale to router.replace
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          disabled={isPending || locale === lang.code}
          className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
            locale === lang.code
              ? 'bg-white text-black'
              : 'text-zinc-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
