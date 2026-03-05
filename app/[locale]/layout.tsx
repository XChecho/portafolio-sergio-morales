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
  // Always use English for metadata (for sharing purposes)
  const title = 'Sergio Morales | Mobile Specialist & React Native Developer';
  const description = 'Portfolio of Sergio Alejandro Morales Cuesta, Senior Frontend Developer specialized in React Native, Expo, and Next.js. 3+ years of experience creating mobile applications.';
  
  return {
    metadataBase: new URL('https://sergio-morales.dev'),
    title: {
      default: title,
      template: '%s | Sergio Morales',
    },
    description: description,
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
      locale: 'en_US',
      url: 'https://sergio-morales.dev',
      siteName: 'Sergio Morales Portfolio',
      title: title,
      description: description,
      images: [
        {
          url: '/assets/profile.png',
          width: 800,
          height: 800,
          alt: 'Sergio Morales - Mobile Specialist & React Native Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/assets/profile.png'],
      creator: '@XChecho',
    },
    alternates: {
      canonical: 'https://sergio-morales.dev',
      languages: {
        'en': 'https://sergio-morales.dev/en',
        'es': 'https://sergio-morales.dev/es',
        'pt': 'https://sergio-morales.dev/pt',
      },
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
