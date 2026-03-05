'use client';

const experiences = [
  { 
    date: 'Oct 2022 - Presente', 
    title: 'Mid Frontend - Mobile Developer', 
    company: 'AgriGlobal Market', 
    desc: 'Desarrollar y desplegar la aplicación de AgriGlobal Market, maquetar y desarrollar la página Agriglobalmarket.com, participar en la toma de decisiones para nuevos desarrollos, y crear aplicaciones nativas mediante React Native para clientes externos como Nutrihorto (Brasil) y Nara (Norteamérica).',
    skills: ['ReactJS', 'NextJS', 'React Native', 'Expo', 'App Store Deployment']
  },
  { 
    date: 'Abr 2022 - Oct 2022', 
    title: 'Frontend Developer', 
    company: 'Routte', 
    desc: 'Mejorar el desarrollo visual de la plataforma Routte, verificando y arreglando soportes de clientes, prestando apoyo al equipo de desarrollo y fortaleciendo conocimientos en desarrollo backend con Python/Django.',
    skills: ['ReactJS', 'NextJS', 'Django']
  },
  { 
    date: 'Sep 2016 - Abr 2022', 
    title: 'Administrador de Planta de Producción', 
    company: 'Madecentro', 
    desc: 'Administrar y coordinar la planta especializada de producción Madeservicios. Recibir, planear y despachar órdenes de producción de los puntos de venta de la zona cafetera. Realizar inventarios mensuales.',
    skills: ['Sistemas ERP', 'Liderazgo de equipo', 'Administración de recursos']
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
      <div className="space-y-12">
        {experiences.map((item, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            <span className="text-xs font-medium text-zinc-500 mb-2 block">{item.date}</span>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-blue-400 text-sm mb-3 font-medium">{item.company}</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
