import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sergio-morales.dev'),
  title: {
    default: 'Sergio Morales | Mobile Specialist & React Native Developer',
    template: '%s | Sergio Morales',
  },
  description: 'Portfolio profesional de Sergio Alejandro Morales Cuesta, Desarrollador Frontend Senior especializado en React Native, Expo y Next.js. 3+ años de experiencia creando aplicaciones móviles nativas.',
  keywords: ['React Native Developer', 'Mobile Developer', 'Frontend Developer', 'Next.js', 'Expo', 'Sergio Morales', 'Portfolio'],
  authors: [{ name: 'Sergio Alejandro Morales Cuesta' }],
  creator: 'Sergio Morales',
  publisher: 'Sergio Morales',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://sergio-morales.dev',
    siteName: 'Sergio Morales Portfolio',
    title: 'Sergio Morales | Mobile Specialist & React Native Developer',
    description: 'Portfolio profesional de Sergio Alejandro Morales Cuesta, Desarrollador Frontend Senior especializado en React Native, Expo y Next.js.',
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
    title: 'Sergio Morales | Mobile Specialist & React Native Developer',
    description: 'Portfolio profesional de Sergio Alejandro Morales Cuesta, Desarrollador Frontend Senior especializado en React Native, Expo y Next.js.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sergio Alejandro Morales Cuesta",
              "url": "https://sergio-morales.dev",
              "jobTitle": "Mid Frontend - Mobile Developer",
              "sameAs": [
                "https://github.com/XChecho",
                "https://www.linkedin.com/in/sergio-alejandro-morales-cuesta-frontend/"
              ],
              "knowsAbout": ["React Native", "Expo", "Next.js", "ReactJS", "TypeScript", "Mobile Development"]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
