const skills = [
  { category: "Veri & Analiz", items: ["Python", "SQL", "Excel (Gelişmiş)", "Pandas", "Büyük Veri Mimarileri"] },
  { category: "Web & Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML / CSS"] },
  { category: "Veritabanı & Araçlar", items: ["MongoDB", "Apache Cassandra", "Apache Hive", "Git / GitHub", "Canva"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800/60">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Yetenekler &amp; Teknolojiler</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800/80">
            <h3 className="text-indigo-400 font-semibold mb-4 text-xs tracking-wider uppercase">
              {group.category}
            </h3>
            <ul className="space-y-2 text-zinc-300 text-sm">
              {group.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}