'use client';

import { useState, useEffect, useCallback } from 'react';

export type Locale = 'en' | 'es' | 'pt';

const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      available: 'Available for new projects',
      title: 'Sergio Alejandro Morales',
      subtitle: 'Mobile Specialist',
      description: 'Senior Frontend Developer focused on creating exceptional mobile experiences with React Native and Expo. 3+ apps published and counting.',
      viewProjects: 'View Projects',
      contact: 'Contact'
    },
    skills: {
      title: 'Tech Stack',
      reactNative: 'Native app development for iOS and Android with a single codebase.',
      nextjs: 'React framework for server-side rendered and static web applications.',
      n8n: 'Open-source workflow automation to connect APIs and services.',
      tailwind: 'Utility-first CSS framework for building modern responsive interfaces.',
      nativewind: 'Tailwind implementation for React Native, utility styles in mobile apps.',
      zustand: 'Simple and minimalist state management for React and React Native.',
      nestjs: 'Progressive Node.js framework for building scalable backend applications.',
      dotnet: 'Microsoft platform for enterprise application and backend development.',
      deploy: 'Publishing and deployment of apps to App Store and Play Store.'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my most recent work in mobile and web.',
      visitSite: 'Visit site',
      appStore: 'App Store',
      playStore: 'Play Store'
    },
    experience: {
      title: 'Experience',
      present: 'Present'
    },
    contact: {
      title: 'Have a project in mind?',
      description: "I'm always open to discussing new opportunities and collaborations in mobile development.",
      sendEmail: 'Send Email'
    },
    footer: {
      text: 'Made with Next.js and Tailwind.'
    },
    downloadCV: 'Download CV'
  },
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Skills',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      title: 'Sergio Alejandro Morales',
      subtitle: 'Mobile Specialist',
      description: 'Desarrollador Frontend Senior enfocado en crear experiencias móviles excepcionales con React Native y Expo. 3+ apps publicadas y contando.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar'
    },
    skills: {
      title: 'Stack Tecnológico',
      reactNative: 'Desarrollo de aplicaciones móviles nativas para iOS y Android con un solo código base.',
      nextjs: 'Framework React para crear aplicaciones web server-side rendered y estáticas.',
      n8n: 'Automatización de flujos de trabajo open-source para conectar APIs y servicios.',
      tailwind: 'Framework CSS utility-first para crear interfaces responsivas y modernas.',
      nativewind: 'Implementación de Tailwind para React Native, estilos utility en apps móviles.',
      zustand: 'Gestión de estado simple y minimalista para React y React Native.',
      nestjs: 'Framework Node.js progresivo para construir aplicaciones backend escalables.',
      dotnet: 'Plataforma Microsoft para desarrollo de aplicaciones empresariales y backend.',
      deploy: 'Publicación y despliegue de apps en App Store y Play Store.'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Una selección de mis trabajos más recientes en mobile y web.',
      visitSite: 'Visitar sitio',
      appStore: 'App Store',
      playStore: 'Play Store'
    },
    experience: {
      title: 'Experiencia',
      present: 'Presente'
    },
    contact: {
      title: '¿Tienes un proyecto en mente?',
      description: 'Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones en el desarrollo móvil.',
      sendEmail: 'Enviar Email'
    },
    footer: {
      text: 'Hecho con Next.js y Tailwind.'
    },
    downloadCV: 'Descargar CV'
  },
  pt: {
    nav: {
      home: 'Início',
      skills: 'Skills',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato'
    },
    hero: {
      available: 'Disponível para novos projetos',
      title: 'Sergio Alejandro Morales',
      subtitle: 'Mobile Specialist',
      description: 'Desenvolvedor Frontend Sênior focado em criar experiências móveis excepcionais com React Native e Expo. 3+ apps publicados e contando.',
      viewProjects: 'Ver Projetos',
      contact: 'Contatar'
    },
    skills: {
      title: 'Stack Tecnológico',
      reactNative: 'Desenvolvimento de aplicativos nativos para iOS e Android com uma única base de código.',
      nextjs: 'Framework React para criar aplicações web server-side rendered e estáticas.',
      n8n: 'Automação de fluxos de trabalho open-source para conectar APIs e serviços.',
      tailwind: 'Framework CSS utility-first para criar interfaces responsivas e modernas.',
      nativewind: 'Implementação do Tailwind para React Native, estilos utility em apps móveis.',
      zustand: 'Gerenciamento de estado simples e minimalista para React e React Native.',
      nestjs: 'Framework Node.js progressivo para construir aplicações backend escaláveis.',
      dotnet: 'Plataforma Microsoft para desenvolvimento de aplicações empresariais e backend.',
      deploy: 'Publicação e implantação de apps na App Store e Play Store.'
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Uma seleção dos meus trabalhos mais recentes em mobile e web.',
      visitSite: 'Visitar site',
      appStore: 'App Store',
      playStore: 'Play Store'
    },
    experience: {
      title: 'Experiência',
      present: 'Atual'
    },
    contact: {
      title: 'Tem um projeto em mente?',
      description: 'Estou sempre aberto a discutir novas oportunidades e colaborações em desenvolvimento móvil.',
      sendEmail: 'Enviar Email'
    },
    footer: {
      text: 'Feito com Next.js e Tailwind.'
    },
    downloadCV: 'Baixar CV'
  }
};

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' || browserLang === 'pt' || browserLang === 'en') {
      setLocale(browserLang as Locale);
    }
  }, []);

  const t = useCallback((key: string): string => {
    if (!mounted) return key;
    const keys = key.split('.');
    let value: any = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }, [locale, mounted]);

  return { locale, setLocale, t, mounted };
}
