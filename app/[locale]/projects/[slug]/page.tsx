import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { isValidLocale } from '@/i18n/config';
import ProjectDetail from '@/app/components/ProjectDetail';
import type { Metadata } from 'next';

interface ProjectItem {
  title: string;
  desc: string;
  slug: string;
  tags: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  images?: string[];
  detail: {
    role: string;
    date: string;
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    gallery: string[];
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of routing.locales) {
    const messages = require(`@/messages/${locale}.json`);
    const projects = messages.projects.items as ProjectItem[];
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }
  
  return params;
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = t.raw('items') as ProjectItem[];
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return {};
  }

  const title = project.title;
  const description = project.desc;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Sergio Morales`,
      description,
      images: project.images && project.images.length > 0
        ? [{ url: project.images[0], width: 1200, height: 630, alt: title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: project.images && project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = t.raw('items') as ProjectItem[];
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} allProjects={projects} locale={locale} />;
}
