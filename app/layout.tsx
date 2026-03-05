import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sergio Morales | Mobile Specialist',
  description: 'Portfolio profesional de Sergio Alejandro Morales Cuesta, Desarrollador Frontend Senior especialista en React Native y Expo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
