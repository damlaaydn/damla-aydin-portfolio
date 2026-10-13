import { Award, Users, HeartHandshake } from "lucide-react";

export default function Certificates() {
  const certs = [
    { title: "Introduction to Data Science", provider: "Ayeum" },
    { title: "Veri Ön İşleme Eğitimi", provider: "Turkcell Akademi" },
    { title: "TÜBİTAK 2209 Üniversite Öğrencileri Araştırma Projeleri Bilgilendirme Semineri", provider: "Manisa Celal Bayar Üniversitesi" },
  ];

  const activities = [
    { title: "Optimum Kulüp", role: "Eğitim Ekibi Aktif Üye", desc: "Kulüp içi eğitim organizasyonları ve teknik gelişim faaliyetleri." },
    { title: "Manisa Özel Huzurevi Vakfı Ziyareti", role: "Dijital Farkındalık Çalışması", desc: "Huzurevi sakini yaşlılar için dijital farkındalık ve teknoloji kullanımı bilgilendirmesi." },
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certificates Column */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <Award className="w-4 h-4" /> Eğitim & Sertifikalar
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Sertifikalar</h2>

            <div className="space-y-4">
              {certs.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                  <div className="text-xs text-cyan-400 font-mono">{c.provider}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Column */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <HeartHandshake className="w-4 h-4" /> Toplumsal Katkı
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Gönüllülük & Kulüp Faaliyetleri</h2>

            <div className="space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-bold text-white">{a.title}</div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      {a.role}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
