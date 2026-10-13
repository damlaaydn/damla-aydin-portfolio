import { Briefcase, Calendar, Building2, CheckCircle2, TrendingUp, Layers, Database, BarChart2 } from "lucide-react";

export default function Experience() {
  const duties = [
    "Power BI kullanarak yönetici (Executive), satış ve kârlılık analizlerine yönelik interaktif dashboard'lar geliştirdim.",
    "Farklı veri kaynaklarından dinamik veri çekme ve bu verileri Power BI dashboard'larına entegre etme süreçlerinde görev aldım.",
    "Veri modelleme yaparak farklı tablolar arasında ilişkiler kurdum ve model görünümünü optimize ettim.",
    "DAX kullanarak iş ihtiyaçlarına uygun ölçüler (Measures) ve filtreleme mantıkları geliştirdim.",
    "KPI'lar, finansal göstergeler ve performans metriklerini oluşturarak karar destek raporlarının hazırlanmasına katkı sağladım.",
    "Satış, üretim ve müşteri verilerini analiz ederek yöneticilerin karar alma süreçlerini destekleyen görselleştirmeler hazırladım."
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            Sektörel Deneyim
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">İş & Staj Deneyimi</h2>
          <p className="text-slate-400 text-sm">
            Kurumsal üretim ve satış verileriyle iş zekası uygulamaları geliştirdiğim staj tecrübem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
                  <Building2 className="w-4 h-4" /> Toyo Matbaa Mürekkepleri (Artience Group)
                </div>
                <h3 className="text-2xl font-bold text-white">Veri Analisti Stajyeri</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-300">
                <Calendar className="w-3.5 h-3.5" /> 6 Temmuz 2026 - 3 Ağustos 2026
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {duties.map((duty, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{duty}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono mr-2">Teknolojiler:</span>
              {["Power BI", "DAX", "Data Modeling", "Executive Dashboards", "Sales & Profitability", "KPI Tracking"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
