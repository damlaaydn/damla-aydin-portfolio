"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  // Kaydırma animasyonları (Scroll Reveal) için IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    const hiddenElements = document.querySelectorAll(".data-reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      <Head>
        <title>Damla Aydın | Portfolyo</title>
        <meta name="description" content="Damla Aydın - Büyük Veri Analisti Portfolyosu" />
      </Head>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            Damla<span className="text-teal-400">.</span>Aydın
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#hakkimda" className="hover:text-teal-400 transition-colors">Hakkımda</a>
            <a href="#deneyim" className="hover:text-teal-400 transition-colors">Deneyim</a>
            <a href="#projeler" className="hover:text-teal-400 transition-colors">Projeler</a>
            <a href="#yetenekler" className="hover:text-teal-400 transition-colors">Yetenekler</a>
            <a href="#iletisim" className="hover:text-teal-400 transition-colors">İletişim</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hakkimda" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="data-reveal transition-all duration-1000 ease-out translate-y-12 opacity-0">
          <p className="text-teal-400 font-mono mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-teal-400"></span> Merhaba, ben
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            Damla Aydın.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
            Veriyi değere dönüştürüyorum.
          </h2>
          <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
            Manisa Celal Bayar Üniversitesi'nde Büyük Veri Analistliği öğrencisiyim. 
            Makine öğrenmesi, veri görselleştirme ve iş zekâsı araçlarını kullanarak karmaşık veri 
            kümelerinden anlamlı içgörüler ve optimizasyon modelleri çıkarıyorum. Üretim süreçlerinin veri odaklı yönetimi alanında kendimi geliştirmeye devam ediyorum.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projeler" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 px-8 rounded-lg transition-colors">
              Projelerimi İncele
            </a>
            <a href="/cv-damla-aydin (1).pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500/10 font-bold py-3 px-8 rounded-lg transition-colors">
              Özgeçmişimi İndir
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="deneyim" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="data-reveal transition-all duration-1000 ease-out translate-y-12 opacity-0">
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">01.</span> Deneyim & Eğitim
            <span className="flex-1 h-[1px] bg-slate-800 ml-4"></span>
          </h3>
          
          <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-950"></span>
              <h4 className="text-xl font-bold text-white">Veri Analisti Stajyeri</h4>
              <p className="text-teal-400 font-medium mb-2">Toyo Matbaa Mürekkepleri (Artience Group)</p>
              <p className="text-sm text-slate-400 mb-4">6 Temmuz 2026 - 3 Ağustos 2026</p>
              <ul className="list-disc list-outside ml-4 text-slate-400 space-y-2">
                <li>Power BI kullanarak yönetici, satış ve kârlılık analizlerine yönelik interaktif dashboardlar geliştirildi.</li>
                <li>Veri modelleme yapılarak farklı tablolar arası ilişkiler kuruldu ve DAX ile iş ihtiyaçlarına uygun ölçüler geliştirildi.</li>
                <li>KPI'lar, finansal göstergeler ve performans metrikleri üzerinden karar destek raporları hazırlandı.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
              <h4 className="text-xl font-bold text-white">Büyük Veri Analistliği</h4>
              <p className="text-teal-400 font-medium mb-2">Manisa Celal Bayar Üniversitesi</p>
              <p className="text-sm text-slate-400 mb-4">2025 - Halen | GANO: 3.07</p>
              <ul className="list-disc list-outside ml-4 text-slate-400 space-y-2">
                <li>Makine öğrenmesi, istatistiksel analiz, SQL/NoSQL veritabanları ve veri görselleştirme üzerine akademik eğitim.</li>
                <li>Aktif Kulüp Üyeliği: Optimum Kulüp (Eğitim Ekibi)</li>
                <li>Sosyal Sorumluluk: Manisa Özel Huzurevi Dijital Farkındalık Çalışması</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projeler" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="data-reveal transition-all duration-1000 ease-out translate-y-12 opacity-0">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span> Öne Çıkan Projeler
            <span className="flex-1 h-[1px] bg-slate-800 ml-4"></span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proje 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="text-teal-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">TÜBİTAK 2209-B: Servis Araçları Rotalama Optimizasyonu</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                TÜBİTAK 2209-B Sanayiye Yönelik Lisans Araştırma Projeleri Desteği kapsamında, Manisa'daki bir asansör bakım firması için Dinamik Karma Tam Sayılı Programlama (D-MIP) kullanılarak oluşturulan optimizasyon modeli.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">PuLP / OR-Tools</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Matlab</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">TÜBİTAK 2209-B</span>
              </div>
            </div>

            {/* Proje 2 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="text-teal-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">K-Means Algoritması ile Müşteri Segmentasyonu</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Satış veri seti üzerinden PCA (Temel Bileşen Analizi) ve K-Means kümeleme algoritmaları kullanılarak gerçekleştirilen müşteri segmentasyonu analizi. Çıktılar interaktif bir Excel Dashboard'u ile görselleştirildi.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">K-Means</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">PCA</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Excel Dashboard</span>
              </div>
            </div>

            {/* Proje 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="text-teal-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Kestirimci Bakım Modeli (Predictive Maintenance)</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Endüstriyel ekipmanların arıza sürelerini tahmin etmek için döngüsel zaman dönüşümleri ve özellik mühendisliği (feature engineering) kullanılarak geliştirilmiş makine öğrenmesi projesi.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Python</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Scikit-learn</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Pandas</span>
              </div>
            </div>
            
             {/* Proje 4 */}
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="text-teal-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Lojistik Maliyet Tahminlemesi</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                USAID tedarik zinciri fiyatlandırma verileri kullanılarak Python ve Excel üzerinde Çoklu Doğrusal Regresyon modeli tasarımı. Kapsamlı veri temizleme işlemleri gerçekleştirildi.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Regression</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Data Cleaning</span>
                <span className="text-xs font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="yetenekler" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="data-reveal transition-all duration-1000 ease-out translate-y-12 opacity-0">
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">03.</span> Teknik Yetkinlikler
            <span className="flex-1 h-[1px] bg-slate-800 ml-4"></span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Python', 'Power BI (DAX)', 'İleri Düzey Excel', 'SQL / MongoDB', 'C#', 'Microsoft Visio', 'İngilizce (B1)', 'Next.js & Tailwind'].map((skill, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-medium text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="iletisim" className="py-32 px-6 max-w-2xl mx-auto text-center">
        <div className="data-reveal transition-all duration-1000 ease-out translate-y-12 opacity-0">
          <h3 className="text-teal-400 font-mono text-lg mb-4">04. Sırada Ne Var?</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">İletişime Geçin</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Şu anda yeni staj ve proje fırsatlarına açığım. Veri odaklı projeleriniz hakkında konuşmak, 
            bir soru sormak veya sadece merhaba demek isterseniz bana ulaşabilirsiniz.
          </p>
          <a href="mailto:damlaaydiin7@gmail.com" className="inline-block border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-bold py-4 px-10 rounded-lg transition-colors">
            E-posta Gönder
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-slate-500 text-sm font-mono border-t border-slate-900 mt-20">
        <p>Tasarım ve Geliştirme: Damla Aydın &copy; {new Date().getFullYear()}</p>
        <p className="mt-2 text-xs opacity-60">Next.js & Tailwind CSS ile oluşturulmuştur.</p>
      </footer>
    </div>
  );
}

