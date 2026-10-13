import { Cpu, MapPin, Users, ArrowUpRight, Check } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      code: "TÜBİTAK 2209-B",
      title: "Manisa'da Bir Asansör Firmasının Servis Araçları Rotalama Optimizasyonu",
      category: "Üniversite Öğrencileri Araştırma Projesi",
      description: "Saha servis araçlarının yakıt, zaman ve operasyonel maliyetlerini en aza indirmek üzere geliştirilen rotalama optimizasyon modeli ve veri analizi çalışması.",
      tags: ["Rotalama Optimizasyonu", "Python", "Veri Analitiği", "Saha Operasyonları"],
      badgeColor: "border-emerald-500/40 bg-emerald-950/30 text-emerald-300",
    },
    {
      code: "ML & SEGMENTASYON",
      title: "K-Means Algoritması ile Müşteri Segmentasyonu Analizi",
      category: "Makine Öğrenmesi Uygulaması",
      description: "Müşteri satın alma davranışları ve verilerini K-Means kümeleme algoritmasıyla gruplandırarak stratejik müşteri segmentleri oluşturan makine öğrenmesi modeli.",
      tags: ["K-Means", "Python", "Scikit-Learn", "Müşteri Segmentasyonu", "Pandas"],
      badgeColor: "border-cyan-500/40 bg-cyan-950/30 text-cyan-300",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              Araştırma & Uygulama
            </span>
            <h2 className="text-3xl font-bold text-white">Öne Çıkan Projeler</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
            TÜBİTAK destekli optimizasyon ve makine öğrenmesi tabanlı analitik projelerim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border ${p.badgeColor}`}>
                    {p.code}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{p.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-slate-950 border border-slate-800 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
