'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
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
            <a href="https://github.com/XChecho" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sergio-alejandro-morales-cuesta-frontend/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
