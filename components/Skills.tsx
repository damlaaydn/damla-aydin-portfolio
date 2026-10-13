import { BarChart3, Database, Code, FileSpreadsheet, Presentation, Layout } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Power BI & İş Zekası",
      icon: BarChart3,
      items: ["Power BI", "DAX Ölçüleri", "Veri Modelleme", "Executive Dashboard", "KPI Raporlama"],
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
    },
    {
      title: "Python & Makine Öğrenmesi",
      icon: Code,
      items: ["Python", "Pandas & NumPy", "Scikit-Learn", "K-Means Kümeleme", "Veri Ön İşleme"],
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
    },
    {
      title: "Microsoft Excel & Veri İşleme",
      icon: FileSpreadsheet,
      items: ["İleri Excel", "Pivot Table", "Veri Temizleme", "Grafik & Görselleştirme", "Formüller"],
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
    },
    {
      title: "Programlama & Süreç Diyagramı",
      icon: Layout,
      items: ["C# (Temel)", "Microsoft Visio (Süreç Akışı)", "Microsoft Word", "Microsoft PowerPoint"],
      color: "text-sky-400 border-sky-500/30 bg-sky-950/20",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            Teknoloji & Yeterlilikler
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Teknik Beceriler</h2>
          <p className="text-slate-400 text-sm">
            Veri hazırlama, modelleme ve görselleştirme süreçlerinde kullandığım temel araçlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl border ${group.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
