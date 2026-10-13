const projectList = [
  {
    title: "Öğrenci Performans & Analiz Panosu",
    desc: "Excel ve veri analizi teknikleri kullanılarak sınav sonuçlarını, ders başarısını ve konu hakimiyetini değerlendiren dinamik performans takip sistemi.",
    tags: ["Excel", "Veri Analizi", "Görselleştirme"],
  },
  {
    title: "Lojistik Maliyet & Çoklu Regresyon Modeli",
    desc: "Lojistik operasyonlarındaki maliyet verileri üzerinden çoklu doğrusal regresyon analizi ile tahminleme ve optimizasyon çalışması.",
    tags: ["Python", "Pandas", "Makine Öğrenmesi"],
  },
  {
    title: "Kişisel Portfolyo Web Sitesi",
    desc: "Next.js, TypeScript ve Tailwind CSS ile geliştirilmiş modern, responsive ve performanslı kişisel tanıtım sitesi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800/60">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Öne Çıkan Projeler</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-md font-mono"
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
}