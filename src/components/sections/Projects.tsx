import React from 'react';
import { projects } from '../../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-cyan-400">#</span> Öne Çıkan Projeler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
          >
            <div>
              {project.metrics && (
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block mb-3">
                  {project.metrics}
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
