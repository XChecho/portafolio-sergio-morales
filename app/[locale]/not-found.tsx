'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-white/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <Search className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-zinc-400 mb-8 text-lg">
          Parece que esta página se perdió en el código... 
          <br />
          <span className="text-zinc-500 text-sm">
            But don&apos;t worry, even the best developers hit a 404 sometimes!
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
            🧭 Navigating
          </span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
            🔍 Searching
          </span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
            💻 Coding
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
}
