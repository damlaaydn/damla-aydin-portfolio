import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[85vh]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Veri Analizi & Büyük Veri
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
        {personalInfo.name}
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-400 mb-6 max-w-2xl">
        {personalInfo.title}
      </h2>
      <p className="text-slate-400 max-w-2xl leading-relaxed text-base sm:text-lg mb-8">
        Verilerden anlamlı hikayeler ve analitik çözümler çıkarıyorum. Python, SQL, Power BI ve NoSQL ekosisteminde çalışıyorum.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
        >
          Projelerimi İncele
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium transition-all"
        >
          İletişime Geç
        </a>
      </div>
    </section>
  );
};
