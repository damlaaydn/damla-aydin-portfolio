import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          İletişime Geçelim
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          Veri projeleri, staj/iş fırsatları veya akademik iş birlikleri için benimle doğrudan iletişime geçebilirsiniz.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20"
          >
            E-Posta Gönder
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
