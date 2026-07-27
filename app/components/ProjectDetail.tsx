'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Smartphone, Zap, Globe, ArrowLeft, Calendar, User, CheckCircle2, Lightbulb, Target, AppWindow } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProjectCard from './ProjectCard';

interface ProjectDetailData {
  role: string;
  date: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  gallery: string[];
}

interface ProjectData {
  title: string;
  desc: string;
  slug: string;
  tags: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  images?: string[];
  detail: ProjectDetailData;
}

interface ProjectDetailProps {
  project: ProjectData;
  allProjects: ProjectData[];
  locale: string;
}

export default function ProjectDetail({ project, allProjects, locale }: ProjectDetailProps) {
  const t = useTranslations('projects');
  const { detail } = project;
  const displayImages = detail.gallery.length > 0 ? detail.gallery : (project.images && project.images.length > 0 ? project.images : []);
  
  // Cross-link: if current project is Vantio frontend/api, show the other one first
  const vantioSlugs = ['vantio-frontend', 'vantio-api'];
  const isVantioProject = vantioSlugs.includes(project.slug);
  const otherProjects = allProjects.filter(p => p.slug !== project.slug);
  
  if (isVantioProject) {
    const relatedVantio = otherProjects.find(p => vantioSlugs.includes(p.slug));
    const rest = otherProjects.filter(p => !vantioSlugs.includes(p.slug));
    if (relatedVantio) {
      otherProjects.length = 0;
      otherProjects.push(relatedVantio, ...rest);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToProjects')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayImages.length > 0 && (
            <div className="aspect-video mb-8 rounded-3xl bg-zinc-900 overflow-hidden relative shadow-2xl">
              <Image
                src={displayImages[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                className="object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-3xl">{project.desc}</p>

          <div className="flex flex-wrap gap-4 mb-12">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 transition-colors">
                <Globe className="w-4 h-4" /> {t('visitSite')}
              </a>
            )}
            {project.appStoreLink && (
              <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                <Smartphone className="w-4 h-4" /> {t('appStore')}
              </a>
            )}
            {project.playStoreLink && (
              <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                <Zap className="w-4 h-4" /> {t('playStore')}
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
                <User className="w-4 h-4" /> {t('role')}
              </div>
              <p className="text-white font-medium">{detail.role}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
                <Calendar className="w-4 h-4" /> {t('date')}
              </div>
              <p className="text-white font-medium">{detail.date}</p>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">{t('overview')}</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">{detail.overview}</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold">{t('problem')}</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">{detail.problem}</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold">{t('solution')}</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">{detail.solution}</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">{t('features')}</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {detail.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {displayImages.length > 1 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">{t('gallery')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayImages.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-2xl bg-zinc-900 overflow-hidden relative">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.div>

        {otherProjects.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8">{t('otherProjects')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.slice(0, 3).map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
