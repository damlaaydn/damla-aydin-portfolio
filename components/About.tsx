import { GraduationCap, Target, Globe, BookOpen, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          
          {/* Education & Overview Card */}
          <div className="w-full md:w-5/12 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-cyan-500/5">
              <GraduationCap size={160} />
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                Eğitim & Profil
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Manisa Celal Bayar Üniversitesi
              </h3>
              <p className="text-sm font-semibold text-cyan-300 mb-2">
                Büyük Veri Analistliği (2025 - Halen)
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-xs font-mono text-cyan-400 mb-6">
                <span>Genel Not Ortalaması (GANO):</span>
                <span className="font-bold text-white">3.07 / 4.00</span>
              </div>

              <div className="border-t border-slate-800/80 pt-4 mt-2">
                <div className="text-xs text-slate-400 mb-1">Lise Eğitimi</div>
                <div className="text-sm font-medium text-slate-200">İzmir İnönü Anadolu Lisesi (2021-2025)</div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-4 h-4 text-emerald-400" /> Yabancı Dil: İngilizce (B1)
              </span>
            </div>
          </div>

          {/* Career Target & Strategic Vision */}
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <Target className="w-4 h-4" /> Kariyer Hedefi
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
              Veriyi Yorumlayarak Karar Alma ve Üretim Süreçlerini Dönüştürme
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Büyük Veri Analistliği öğrencisi olarak; veri analizi, veriyi anlamlı içgörülere dönüştürerek karar alma mekanizmalarını destekleme ve üretim süreçlerinin veri odaklı yönetimi alanlarında kendimi geliştirmeyi hedefliyorum.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Staj ve proje deneyimlerimle teorik bilgilerimi pratikte sınarken, yeni teknolojileri hızlı kavrayan yapımla iş süreçlerinde değer üreten aktif bir rol üstleniyorum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Power BI ile Executive & Satış Dashboard'ları",
                "DAX ve İlişkisel Veri Modelleme",
                "Python ile Veri Ön İşleme & ML Modelleri",
                "Excel Pivot, Veri Temizleme & Raporlama",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
