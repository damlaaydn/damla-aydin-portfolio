import React from 'react';
import { skills } from '../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-cyan-400">#</span> Yetenekler & Teknolojiler
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-colors p-4 rounded-xl backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              {skill.category}
            </span>
            <h3 className="text-base font-medium text-slate-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
