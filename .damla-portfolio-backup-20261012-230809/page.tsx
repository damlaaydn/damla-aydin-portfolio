'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Database, LineChart, Briefcase, 
  GraduationCap, Mail, MapPin, Code2, Users, LayoutDashboard 
} from 'lucide-react';

export default function PremiumPortfolio() {
  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  // Animasyon varyasyonları
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans selection:bg-blue-600/20 selection:text-blue-900">
      
      {/* Üst Navigasyon - Minimal */}
      <nav className="fixed w-full top-0 z-50 bg-[#F8F9FA]/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter">
            DamlaAydın<span className="text-blue-600">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">Hakkımda</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Deneyim & Projeler</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">İletişim</a>
            <a href="mailto:damlaaydiin7@gmail.com" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300">
              Birlikte Çalışalım
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="py-20 lg:py-32 flex flex-col md:flex-row items-start justify-between gap-12">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex-1 max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Büyük Veri Analistliği
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] mb-8 text-zinc-900">
              Veriyi stratejik <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                iş kararlarına
              </span> dönüştürüyorum.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
              Python, Power BI ve veri modelleme mimarileri ile karmaşık veri setlerini temizliyor, 
              analiz ediyor ve yöneticiler için eyleme dönüştürülebilir net içgörüler (insights) sunuyorum.
            </motion.p>
          </motion.div>
          
          {/* Quick Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-6 p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-sm min-w-[280px]"
          >
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Eğitim</p>
              <div className="flex items-start gap-2 text-zinc-800 font-medium">
                <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Manisa Celal Bayar Üni.<br/><span className="text-zinc-500 text-sm font-normal">Büyük Veri Analistliği</span></span>
              </div>
            </div>
            <div className="h-px w-full bg-zinc-100"></div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Konum</p>
              <div className="flex items-center gap-2 text-zinc-800 font-medium">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                İzmir / Manisa, Türkiye
              </div>
            </div>
            <div className="h-px w-full bg-zinc-100"></div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Bağlantılar</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/damla-aydın-437350381/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-zinc-600 hover:text-blue-600 transition-colors font-medium group">
                  LinkedIn <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="mailto:damlaaydiin7@gmail.com" className="flex items-center justify-between text-zinc-600 hover:text-blue-600 transition-colors font-medium group">
                  E-Posta <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BENTO GRID: DENEYİM & PROJELER */}
        <section id="experience" className="py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">Deneyim & Öne Çıkanlar</h2>
            <p className="text-zinc-500 font-light text-lg">Pratik uygulamalar, staj deneyimleri ve veri odaklı araştırmalarım.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-6">
            
            {/* Büyük Kutu: Staj Deneyimi */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 row-span-2 rounded-3xl bg-white border border-zinc-200/60 p-10 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Briefcase className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-zinc-400 bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-100">Tem 2026 - Ağu 2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">Veri Analisti Stajyeri</h3>
              <h4 className="text-lg text-blue-600 font-medium mb-6">Toyo Matbaa Mürekkepleri (Artience Group)</h4>
              
              <div className="mt-auto grid sm:grid-cols-2 gap-x-8 gap-y-4 text-zinc-600 leading-relaxed font-light">
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  Yönetici (Executive), satış ve kârlılık analizleri için interaktif Power BI dashboardları geliştirdim.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  Farklı kaynaklardan veri çekerek model görünümü optimizasyonu ve tablolar arası ilişkiler kurdum.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  DAX formülleri ile iş ihtiyaçlarına özel ölçüler (measures) ve filtreler tanımladım.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  Finansal KPI'lar oluşturarak yöneticilerin karar alma hızını destekleyen görselleştirmeler hazırladım.
                </p>
              </div>
            </motion.div>

            {/* Orta Kutu 1: TÜBİTAK */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-3xl bg-zinc-900 text-white p-8 hover:shadow-xl hover:shadow-zinc-900/10 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <MapPin className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">TÜBİTAK 2209-B Projesi</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                Manisa'da faaliyet gösteren bir asansör firmasının servis araçları için rotalama optimizasyonu ve zaman/maliyet analizi.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="text-[11px] font-medium px-3 py-1 bg-white/10 rounded-lg">Optimizasyon</span>
                <span className="text-[11px] font-medium px-3 py-1 bg-white/10 rounded-lg">Python</span>
              </div>
            </motion.div>

            {/* Orta Kutu 2: Müşteri Segmentasyonu */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-3xl bg-white border border-zinc-200/60 p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col"
            >
              <Users className="w-8 h-8 text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Müşteri Segmentasyonu</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">
                Makine öğrenmesi teknikleri ile müşteri veri setlerinin incelenmesi ve K-Means algoritması ile anlamlı davranışsal segmentler oluşturulması.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="text-[11px] font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg">K-Means</span>
                <span className="text-[11px] font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg">Machine Learning</span>
              </div>
            </motion.div>

            {/* Geniş Kutu: Excel Dashboard */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 rounded-3xl bg-blue-600 text-white p-8 sm:p-10 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8 overflow-hidden relative"
            >
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="p-4 bg-white/10 rounded-2xl shrink-0 backdrop-blur-md">
                <LayoutDashboard className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Öğrenci Sınav Takip Dashboard'u</h3>
                <p className="text-blue-100 font-light leading-relaxed max-w-xl">
                  Öğrencilerin deneme sınavlarındaki ders bazlı performanslarını, gelişim grafiklerini ve net sayılarını tek ekranda toplayan dinamik Excel dashboard tasarımı. Veri temizleme, Pivot tablolar ve dilimleyiciler kullanılarak interaktif bir deneyim oluşturuldu.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* YETENEKLER & ARAÇLAR */}
        <section className="py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                <Database className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-zinc-900">Veri Analizi & BI</h3>
              </div>
              <ul className="space-y-4 text-zinc-600 font-medium text-sm">
                <li>Power BI & DAX</li>
                <li>Microsoft Excel & Pivot Table</li>
                <li>Veri Görselleştirme (Dashboard)</li>
                <li>Veri Temizleme & Modelleme</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                <Code2 className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-zinc-900">Yazılım & Teknolojiler</h3>
              </div>
              <ul className="space-y-4 text-zinc-600 font-medium text-sm">
                <li>Python</li>
                <li>Makine Öğrenmesi (K-Means)</li>
                <li>SQL / MongoDB (Temel)</li>
                <li>C# (Temel Programlama)</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                <LineChart className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-zinc-900">Araçlar & Optimizasyon</h3>
              </div>
              <ul className="space-y-4 text-zinc-600 font-medium text-sm">
                <li>Yöneylem Araştırması</li>
                <li>Microsoft Visio</li>
                <li>Microsoft Word & PowerPoint</li>
                <li>Süreç Optimizasyonu</li>
              </ul>
            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-zinc-900 text-zinc-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-white font-bold text-xl tracking-tighter block mb-2">DamlaAydın.</span>
            <p className="text-sm">Büyük Veri Analistliği Öğrencisi & Veri Analisti</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/damla-aydın-437350381/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:damlaaydiin7@gmail.com" className="hover:text-white transition-colors">E-Posta</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
