'use client';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');
  const experiences = t.raw('items') as Array<{
    date: string;
    title: string;
    company: string;
    desc: string;
    skills: string[];
  }>;

  return (
    <section id="experience" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
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
