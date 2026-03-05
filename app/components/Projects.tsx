'use client';
import { motion } from 'motion/react';
import { Smartphone, Zap, Globe, AppWindow } from 'lucide-react';

const projects = [
  {
    title: 'AgriGlobal Market - B2B Marketplace',
    desc: 'Plataforma líder en el sector agroindustrial que conecta proveedores y compradores globalmente.',
    tags: ['Next.js', 'ReactJS', 'Tailwind CSS'],
    link: 'https://agriglobalmarket.com',
    images: ['/assets/agmweb.png'],
  },
  {
    title: 'AgriGlobal Market Native App',
    desc: 'Aplicación nativa diseñada para facilitar el comercio agrícola desde cualquier lugar.',
    tags: ['React Native', 'Expo', 'Zustand', 'NativeWindCSS'],
    appStoreLink: 'https://apps.apple.com/us/app/agriglobal-market/id6746349961',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.xchecho.agriglobalmApp',
    images: ['/assets/agmapp1.png', '/assets/agmapp2.png', '/assets/agmapp3.png'],
  },
  {
    title: 'Rendering University - E-Learning',
    desc: 'Plataforma educativa especializada en la industria del rendering.',
    tags: ['ReactJS', 'Next.js', 'Tailwind CSS'],
    link: 'https://renderinguniversity.com',
    images: ['/assets/renderuniweb.png'],
  },
  {
    title: 'Rendering University Mobile',
    desc: 'Extensión móvil de la academia para aprendizaje on-the-go.',
    tags: ['React Native', 'Expo', 'NativeWindCSS'],
    appStoreLink: 'https://apps.apple.com/us/app/rendering-university/id6744409489',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.anonymous.appRenderingUniversity',
    images: ['/assets/ruapp1.png', '/assets/ruapp2.png', '/assets/ruapp3.png'],
  },
  {
    title: 'Nutrihorto - Reciclou (Brasil)',
    desc: 'Aplicación móvil que conecta los principales actores del aceite de cocina usado.',
    tags: ['React Native', 'Expo', 'NativeWindCSS'],
    link: 'https://www.nutrihorto.com.br',
    images: [],
  },
  {
    title: 'Routte - Dashboard Admin',
    desc: 'Panel administrativo para la gestión de rutas de entrega y seguimiento de mensajeros.',
    tags: ['ReactJS', 'Next.js', 'TypeScript'],
    link: 'https://routte.co/',
    images: [],
  },
];

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  images?: string[];
}

function ProjectCard({ title, desc, tags, link, appStoreLink, playStoreLink, images = [] }: ProjectCardProps) {
  const displayImages = images.length > 0 ? images : [];
  const hasAppLinks = appStoreLink || playStoreLink;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-6 rounded-3xl border border-white/10 bg-white/5 glow-hover transition-all duration-300 flex flex-col"
    >
      <div className="aspect-video mb-6 rounded-2xl bg-zinc-900 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 z-10" />
        {displayImages.length > 0 ? (
          displayImages.length === 1 ? (
            <img 
              src={displayImages[0]} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="grid grid-cols-2 gap-1 h-full">
              {displayImages.slice(0, 4).map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
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
      {hasAppLinks ? (
        <div className="flex gap-3">
          {appStoreLink && (
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
              <Smartphone className="w-3 h-3" /> App Store
            </a>
          )}
          {playStoreLink && (
            <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
              <Zap className="w-3 h-3" /> Play Store
            </a>
          )}
        </div>
      ) : link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors w-fit">
          <Globe className="w-3 h-3" /> Visitar sitio
        </a>
      ) : null}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-zinc-400">Una selección de mis trabajos más recientes en mobile y web.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
