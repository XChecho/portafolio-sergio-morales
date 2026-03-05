import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<Locale, string> = {
    en: 'Sergio Morales | Mobile Specialist & React Native Developer',
    es: 'Sergio Morales | Especialista Móvil y Desarrollador React Native',
    pt: 'Sergio Morales | Especialista Mobile e Desenvolvedor React Native'
  };
  
  const descriptions: Record<Locale, string> = {
    en: 'Portfolio of Sergio Alejandro Morales Cuesta, Senior Frontend Developer specialized in React Native, Expo, and Next.js. 3+ years of experience creating mobile applications.',
    es: 'Portfolio profesional de Sergio Alejandro Morales Cuesta, Desarrollador Frontend Senior especializado en React Native, Expo y Next.js. 3+ años de experiencia creando aplicaciones móviles.',
    pt: 'Portfólio de Sergio Alejandro Morales Cuesta, Desenvolvedor Frontend Sênior especializado em React Native, Expo e Next.js. 3+ anos de experiência criando aplicativos móveis.'
  };

  return {
    metadataBase: new URL('https://sergio-morales.dev'),
    title: {
      default: titles[locale as Locale] || titles.en,
      template: '%s | Sergio Morales',
    },
    description: descriptions[locale as Locale] || descriptions.en,
    keywords: ['React Native Developer', 'Mobile Developer', 'Frontend Developer', 'Next.js', 'Expo', 'Sergio Morales', 'Portfolio'],
    authors: [{ name: 'Sergio Alejandro Morales Cuesta' }],
    creator: 'Sergio Morales',
    publisher: 'Sergio Morales',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_CO' : 'en_US',
      url: `https://sergio-morales.dev/${locale}`,
      siteName: 'Sergio Morales Portfolio',
      title: titles[locale as Locale] || titles.en,
      description: descriptions[locale as Locale] || descriptions.en,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Sergio Morales - Mobile Specialist',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as Locale] || titles.en,
      description: descriptions[locale as Locale] || descriptions.en,
      images: ['/og-image.png'],
      creator: '@XChecho',
    },
    verification: {
      google: 'google-site-verification-code',
    },
    icons: {
      icon: '/favicon.svg',
      apple: '/favicon.svg',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased bg-[#0a0a0a] text-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
