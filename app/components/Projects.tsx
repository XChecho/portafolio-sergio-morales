'use client';
import { useTranslations } from 'next-intl';
import ProjectCard from './ProjectCard';

interface ProjectItem {
  title: string;
  desc: string;
  slug: string;
  tags: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  images?: string[];
}

export default function Projects() {
  const t = useTranslations('projects');
  const projects = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
          <p className="text-zinc-400">{t('subtitle')}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
