'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Code2, 
  Layers, 
  Zap, 
  Globe, 
  Cpu, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail,
  ChevronRight,
  ExternalLink,
  AppWindow,
  Terminal
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        SM<span className="text-blue-400">.</span>
      </motion.div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
        <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
        <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">Contacto</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 blur-[120px] -z-10" />
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-6">
          Disponible para nuevos proyectos
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Sergio Alejandro Morales <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Mobile Specialist
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Desarrollador Frontend Senior enfocado en crear experiencias móviles excepcionales con React Native y Expo. 3 apps publicadas y contando.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform">
            Ver Proyectos
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/10 bg-white/5 font-semibold rounded-xl hover:bg-white/10 transition-colors">
            Contactar
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const BentoSkills = () => {
  const skills = [
    { name: 'React Native / Expo', icon: <Smartphone className="w-8 h-8" />, desc: 'Especialista en desarrollo cross-platform con 3 apps en tiendas.', size: 'large', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Next.js', icon: <Globe className="w-6 h-6" />, desc: 'Aplicaciones web modernas y escalables.', size: 'small', color: 'from-zinc-500/10 to-zinc-500/5' },
    { name: 'NestJS', icon: <Terminal className="w-6 h-6" />, desc: 'Backend robusto y tipado.', size: 'small', color: 'from-red-500/10 to-red-500/5' },
    { name: 'Zustand', icon: <Layers className="w-6 h-6" />, desc: 'Gestión de estado ligera y eficiente.', size: 'small', color: 'from-amber-500/10 to-amber-500/5' },
    { name: 'Tailwind CSS', icon: <Zap className="w-6 h-6" />, desc: 'Interfaces rápidas y responsivas.', size: 'small', color: 'from-sky-500/10 to-sky-500/5' },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Stack Tecnológico</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${skill.color} flex flex-col justify-between glow-hover transition-all duration-300 ${
              skill.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'
            }`}
          >
            <div>
              <div className="mb-4 text-white/80">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>
            {skill.size === 'large' && (
              <div className="mt-8 flex gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider">Performance</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider">UX/UI</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, tags, stores }: { title: string, desc: string, tags: string[], stores?: boolean }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group p-6 rounded-3xl border border-white/10 bg-white/5 glow-hover transition-all duration-300"
  >
    <div className="aspect-video mb-6 rounded-2xl bg-zinc-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <button className="p-2 bg-white rounded-full text-black">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center text-zinc-800">
        <AppWindow className="w-12 h-12" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-zinc-300">
          {tag}
        </span>
      ))}
    </div>
    {stores && (
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
          <Smartphone className="w-3 h-3" /> App Store
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
          <Zap className="w-3 h-3" /> Play Store
        </button>
      </div>
    )}
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="flex items-end justify-between mb-12">
      <div>
        <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
        <p className="text-zinc-400">Una selección de mis trabajos más recientes en mobile y web.</p>
      </div>
      <a href="#" className="hidden md:flex items-center gap-2 text-sm text-blue-400 font-medium hover:underline">
        Ver todos <ChevronRight className="w-4 h-4" />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard 
        title="Fitness Tracker App" 
        desc="Aplicación de seguimiento de entrenamiento con integración de sensores y mapas en tiempo real." 
        tags={['React Native', 'Expo', 'Zustand']}
        stores
      />
      <ProjectCard 
        title="E-commerce Dashboard" 
        desc="Panel administrativo para gestión de inventarios y ventas con gráficas avanzadas." 
        tags={['Next.js', 'Tailwind', 'Recharts']}
      />
      <ProjectCard 
        title="Social Media App" 
        desc="Red social enfocada en comunidades locales con notificaciones push y chat en vivo." 
        tags={['React Native', 'Firebase', 'NestJS']}
        stores
      />
    </div>
  </section>
);

const Experience = () => {
  const items = [
    { date: '2022 - Presente', title: 'Senior Frontend Lead', company: 'Tech Solutions', desc: 'Liderazgo de proyectos móviles y despliegue de soluciones escalables para clientes internacionales.' },
    { date: '2020 - 2022', title: 'React Native Developer', company: 'Mobile First Studio', desc: 'Desarrollo y publicación de 3 aplicaciones en App Store y Play Store.' },
    { date: '2018 - 2020', title: 'Frontend Developer', company: 'Web Agency', desc: 'Creación de interfaces web dinámicas y optimización de rendimiento.' },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
      <div className="space-y-12">
        {items.map((item, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            <span className="text-xs font-medium text-zinc-500 mb-2 block">{item.date}</span>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-blue-400 text-sm mb-3 font-medium">{item.company}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
    <div className="p-12 rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
      <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
        Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones en el mundo del desarrollo móvil.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="mailto:sam94c@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
          <Mail className="w-5 h-5" /> Enviar Email
        </a>
        <div className="flex gap-4">
          <a href="#" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-500 text-sm">
    <p>© {new Date().getFullYear()} Sergio Alejandro Morales Cuesta. Hecho con Next.js y Tailwind.</p>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <BentoSkills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
