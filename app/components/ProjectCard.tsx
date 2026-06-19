'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Smartphone, Zap, Globe, AppWindow, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface ProjectCardProps {
  title: string;
  desc: string;
  slug: string;
  tags: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  images?: string[];
}

export default function ProjectCard({ title, desc, slug, tags, link, appStoreLink, playStoreLink, images = [] }: ProjectCardProps) {
  const t = useTranslations('projects');
  const displayImages = images.length > 0 ? images : [];
  const hasAppLinks = appStoreLink || playStoreLink;

  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group p-6 rounded-3xl border border-white/10 bg-white/5 glow-hover transition-all duration-300 flex flex-col h-full cursor-pointer"
      >
        <div className="aspect-video mb-6 rounded-2xl bg-zinc-900 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 z-10" />
          {displayImages.length > 0 ? (
            displayImages.length === 1 ? (
              <Image
                src={displayImages[0]}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="grid grid-cols-2 gap-1 h-full">
                {displayImages.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden">
                    <Image
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-800">
              <AppWindow className="w-12 h-12" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto">
          {hasAppLinks ? (
            <div className="flex gap-3">
              {appStoreLink && (
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors"
                >
                  <Smartphone className="w-3 h-3" /> {t('appStore')}
                </a>
              )}
              {playStoreLink && (
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors"
                >
                  <Zap className="w-3 h-3" /> {t('playStore')}
                </a>
              )}
            </div>
          ) : link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors"
            >
              <Globe className="w-3 h-3" /> {t('visitSite')}
            </a>
          ) : <div />}
          <span className="flex items-center gap-1 text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
            {t('viewDetails')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
