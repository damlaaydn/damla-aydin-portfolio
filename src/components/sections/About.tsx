import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-cyan-400">#</span> Hakkımda
      </h2>
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
          {personalInfo.about}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
          <div>
            <span className="text-slate-500 font-semibold">Konum:</span> {personalInfo.location}
          </div>
          <div>
            <span className="text-slate-500 font-semibold">Odak Alanları:</span> Büyük Veri, Veri Analitiği, BI Raporlama
          </div>
        </div>
      </div>
    </section>
  );
};
