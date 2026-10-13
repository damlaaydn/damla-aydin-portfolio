const experiences = [
  {
    role: "Veri Analizi Çalışmaları",
    place: "Üniversite Projeleri",
    period: "2024 - Devam ediyor",
    desc: "Python ve Excel ile veri temizleme, keşifsel veri analizi, kümeleme ve regresyon çalışmaları.",
  },
  {
    role: "Staj / İş Deneyimi",
    place: "Şirket Adı",
    period: "Tarih",
    desc: "Buraya kendi staj veya iş deneyimini yazabilirsin.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800/60">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Deneyim</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
              <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
            </div>
            <p className="text-indigo-400 text-sm mb-3">{exp.place}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}