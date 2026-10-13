import React from 'react';
import { experiences, education } from '../../data/portfolioData';

export const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400">#</span> Deneyim & Süreçler
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-4">{exp.company}</p>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400">#</span> Eğitim
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">{edu.period}</span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-3">{edu.institution}</p>
                {edu.details && <p className="text-slate-300 text-sm leading-relaxed">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
