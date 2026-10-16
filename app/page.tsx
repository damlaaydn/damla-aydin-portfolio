"use client";

import { useEffect, useState, type FormEvent } from "react";

type IconName = "arrow" | "download" | "spark" | "menu" | "close" | "mail" | "phone" | "pin" | "external" | "check" | "chart";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (name) {
    case "arrow": return <svg {...common}><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
    case "download": return <svg {...common}><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 17v3h14v-3" /></svg>;
    case "spark": return <svg {...common}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></svg>;
    case "menu": return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close": return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "mail": return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case "phone": return <svg {...common}><path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-3-6Z" /></svg>;
    case "pin": return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "external": return <svg {...common}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>;
    case "check": return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "chart": return <svg {...common}><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 5-7" /><path d="M16 6h3v3" /></svg>;
  }
}

const experienceItems = [
  "Power BI ile yönetici (Executive), satış ve kârlılık analizleri için interaktif dashboardlar geliştirdim.",
  "Farklı veri kaynaklarından dinamik veri çekme ve bu verileri dashboardlara entegre etme süreçlerinde görev aldım.",
  "Veri modelleme yaparak tablolar arasında ilişkiler kurdum ve model görünümünü optimize ettim.",
  "DAX ile iş ihtiyaçlarına uygun ölçüler (Measures) ve filtreleme mantıkları geliştirdim.",
  "KPI’lar, finansal göstergeler ve performans metrikleri oluşturarak karar destek raporlarına katkı sağladım.",
  "Satış, üretim ve müşteri verilerini analiz ederek karar alma süreçlerini destekleyen görselleştirmeler hazırladım.",
];

const skillGroups = [
  {
    number: "01",
    title: "Veri analizi & iş zekâsı",
    subtitle: "Analiz · modelleme · görselleştirme",
    skills: ["Power BI", "DAX ve ölçüler", "Veri modelleme", "Dashboard geliştirme", "Microsoft Excel", "Veri temizleme", "Pivot Table", "Grafik ve raporlama"],
  },
  {
    number: "02",
    title: "Programlama",
    subtitle: "Veriyle çalışma ve temel uygulamalar",
    skills: ["Python", "Veri analizi", "Makine öğrenmesine giriş", "C#", "Temel programlama"],
  },
  {
    number: "03",
    title: "Dokümantasyon & süreç",
    subtitle: "Bilgiyi açık ve düzenli aktarma",
    skills: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Visio", "Süreç diyagramları", "Sunum hazırlama", "Dokümantasyon"],
  },
];

function RouteVisual() {
  return (
    <svg className="project-visual-svg" viewBox="0 0 420 180" role="img" aria-label="Rota optimizasyonu temasını anlatan temsili çizim">
      <defs><pattern id="route-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="1" /></pattern><linearGradient id="route-line" x1="0" x2="1"><stop offset="0" stopColor="#74dfc1" /><stop offset="1" stopColor="#a0d7ff" /></linearGradient></defs>
      <rect width="420" height="180" rx="14" fill="url(#route-grid)" />
      <path d="M48 128 C80 128 73 47 129 47 S177 127 221 110 S273 40 320 55 S348 131 377 131" fill="none" stroke="url(#route-line)" strokeWidth="2.5" strokeDasharray="5 6" />
      <path d="M48 128 C80 128 73 47 129 47 S177 127 221 110 S273 40 320 55 S348 131 377 131" fill="none" stroke="#74dfc1" strokeOpacity=".12" strokeWidth="10" />
      {[[48,128],[129,47],[221,110],[320,55],[377,131]].map(([x,y], i) => <g key={i}><circle cx={x} cy={y} r="10" fill="#0e1b27" stroke={i === 0 || i === 4 ? "#74dfc1" : "#a0d7ff"} strokeWidth="2"/><circle cx={x} cy={y} r="3" fill={i === 0 || i === 4 ? "#74dfc1" : "#a0d7ff"}/></g>)}
      <text x="22" y="158" fill="currentColor" opacity=".58" fontSize="9" letterSpacing="2">ROUTE LOGIC / CONCEPT</text>
    </svg>
  );
}

function ClusterVisual() {
  const dots = [
    [50,48],[65,40],[76,57],[43,63],[60,69],[85,45],[72,77],[94,62],[128,95],[142,85],[153,103],[135,112],[163,91],[153,120],[118,108],[278,45],[296,37],[308,53],[286,65],[313,72],[329,47],[302,82],[337,63],[347,84],[235,119],[250,108],[265,124],[239,137],[256,146],[279,136],[219,139]
  ];
  return (
    <svg className="project-visual-svg" viewBox="0 0 420 180" role="img" aria-label="Kümeleme analizini anlatan temsili nokta grafiği">
      <defs><pattern id="cluster-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="1" /></pattern></defs>
      <rect width="420" height="180" rx="14" fill="url(#cluster-grid)" />
      <ellipse cx="65" cy="57" rx="47" ry="39" fill="#74dfc1" fillOpacity=".06" stroke="#74dfc1" strokeOpacity=".25" strokeDasharray="3 5" />
      <ellipse cx="145" cy="103" rx="43" ry="38" fill="#a0d7ff" fillOpacity=".06" stroke="#a0d7ff" strokeOpacity=".25" strokeDasharray="3 5" />
      <ellipse cx="304" cy="59" rx="54" ry="38" fill="#cfb6ff" fillOpacity=".06" stroke="#cfb6ff" strokeOpacity=".25" strokeDasharray="3 5" />
      <ellipse cx="253" cy="132" rx="48" ry="30" fill="#ffc78b" fillOpacity=".05" stroke="#ffc78b" strokeOpacity=".25" strokeDasharray="3 5" />
      {dots.map(([x,y], i) => { const c = i < 8 ? "#74dfc1" : i < 16 ? "#a0d7ff" : i < 24 ? "#cfb6ff" : "#ffc78b"; return <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 3.6 : 2.7} fill={c} fillOpacity={i % 4 === 0 ? .7 : .95} />; })}
      <text x="22" y="164" fill="currentColor" opacity=".58" fontSize="9" letterSpacing="2">CLUSTER PATTERNS / CONCEPT</text>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = [`Ad Soyad: ${name}`, `E-posta: ${email}`, "", message].join("\n");
    const mailto = `mailto:damlaaydiin7@gmail.com?subject=${encodeURIComponent(subject || `Portfolyo iletişimi - ${name}`)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
    window.location.href = mailto;
  }

  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#anasayfa" onClick={closeMenu} aria-label="Damla Aydın, ana sayfa">
          <span className="brand-mark">d<span>.</span></span>
          <span className="brand-copy"><strong>Damla Aydın</strong><small>DATA · INSIGHTS · GROWTH</small></span>
        </a>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={21} /></button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Ana menü">
          <a href="#hakkimda" onClick={closeMenu}>Hakkımda</a>
          <a href="#deneyim" onClick={closeMenu}>Deneyim</a>
          <a href="#projeler" onClick={closeMenu}>Projeler</a>
          <a href="#yetkinlikler" onClick={closeMenu}>Yetkinlikler</a>
          <a className="nav-contact" href="#iletisim" onClick={closeMenu}>İletişim <Icon name="arrow" size={14} /></a>
        </nav>
      </header>

      <section className="hero section-shell" id="anasayfa">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /><span>BÜYÜK VERİ ANALİSTLİĞİ ÖĞRENCİSİ</span><span className="eyebrow-line" /></div>
          <h1>Veriyi keşfediyor,<br /><span className="headline-accent">anlamlı içgörülere</span><br />dönüştürüyorum<span className="headline-period">.</span></h1>
          <p className="hero-description">Veri analizi, iş zekâsı ve üretim süreçlerinin veri odaklı yönetimi alanlarında kendimi geliştiriyorum. Amacım, veriyi anlaşılır kılarak daha güçlü kararların alınmasına katkı sağlamak.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/cv-damla-aydin.pdf" download><Icon name="download" size={17} /> CV’mi indir</a>
            <a className="button button-secondary" href="#projeler">Projeleri keşfet <Icon name="arrow" size={17} /></a>
          </div>
          <div className="hero-meta"><span><Icon name="pin" size={15} /> İzmir, Türkiye</span><span className="meta-divider" /><span><span className="availability-dot" /> Yeni fırsatlara açık</span></div>
        </div>

        <div className="hero-art" aria-label="Veri analizi temalı görsel kompozisyon">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="data-card main-data-card">
            <div className="data-card-top"><div><span className="micro-label">ANALYTICAL MINDSET</span><h2>Veriden değere.</h2></div><span className="icon-tile"><Icon name="chart" size={19} /></span></div>
            <div className="chart-caption"><span>Analiz süreci</span><span className="chart-caption-right"><span className="legend-dot" /> Keşfet · Yorumla · Karar ver</span></div>
            <div className="hero-chart">
              <div className="chart-y-labels"><span>İçgörü</span><span>Bağlantı</span><span>Veri</span></div>
              <svg viewBox="0 0 320 130" preserveAspectRatio="none" role="img" aria-label="Temsili veri eğrisi">
                <defs><linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#78e2c1" stopOpacity=".26"/><stop offset="100%" stopColor="#78e2c1" stopOpacity="0"/></linearGradient><linearGradient id="hero-stroke" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#78e2c1"/><stop offset="100%" stopColor="#9bcfff"/></linearGradient></defs>
                {[22,52,82,112].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="currentColor" strokeOpacity=".09" strokeDasharray="3 5" />)}
                <path d="M0 103 C22 98 25 76 48 81 S79 95 99 63 S132 74 152 54 S187 66 208 38 S243 59 261 33 S294 38 320 15 L320 130 L0 130Z" fill="url(#hero-area)" />
                <path d="M0 103 C22 98 25 76 48 81 S79 95 99 63 S132 74 152 54 S187 66 208 38 S243 59 261 33 S294 38 320 15" fill="none" stroke="url(#hero-stroke)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="208" cy="38" r="4" fill="#b2f4da" stroke="#10212b" strokeWidth="2"/><circle cx="320" cy="15" r="4" fill="#9bcfff" stroke="#10212b" strokeWidth="2" />
              </svg>
            </div>
            <div className="chart-bottom-labels"><span>Gözlem</span><span>Örüntü</span><span>İçgörü</span><span>Karar</span></div>
            <div className="data-card-footer"><span className="footer-spark"><Icon name="spark" size={15} /></span><span>Merakla başlar, anlamla değer kazanır.</span></div>
          </div>
          <div className="floating-note floating-note-top"><span className="floating-note-icon"><Icon name="spark" size={15} /></span><span><strong>Veri odaklı</strong><small>Düşünme biçimi</small></span></div>
          <div className="floating-note floating-note-bottom"><span className="mini-bars"><i /><i /><i /><i /><i /></span><span><strong>BI & Analytics</strong><small>Öğren · Uygula · Geliştir</small></span></div>
          <div className="art-coordinate coordinate-one">38°25′ N</div><div className="art-coordinate coordinate-two">27°08′ E</div>
        </div>
        <div className="hero-bottom-line"><span>MERAKTAN ANALİZE</span><span className="hero-bottom-rule" /><span>ANALİZDEN İÇGÖRÜYE</span></div>
      </section>

      <section className="quick-facts" aria-label="Kısa bilgiler">
        <div className="quick-facts-inner">
          <div className="fact-item" data-reveal><span className="fact-value">3.07</span><span className="fact-label">Genel not ortalaması</span><span className="fact-footnote">MCBÜ · Büyük Veri Analistliği</span></div>
          <div className="fact-item" data-reveal><span className="fact-value fact-value-word">Power BI</span><span className="fact-label">Uygulamalı staj deneyimi</span><span className="fact-footnote">Toyo Matbaa Mürekkepleri</span></div>
          <div className="fact-item" data-reveal><span className="fact-value">B1</span><span className="fact-label">İngilizce</span><span className="fact-footnote">Intermediate</span></div>
          <div className="fact-item fact-item-last" data-reveal><span className="fact-value fact-value-word">2026</span><span className="fact-label">Veri analisti stajı</span><span className="fact-footnote">6 Temmuz – 3 Ağustos</span></div>
        </div>
      </section>

      <section className="content-section section-shell" id="hakkimda">
        <div className="section-heading" data-reveal><div className="section-kicker"><span>01</span> PROFİL</div><h2>Verinin arkasındaki<br /><span className="serif-accent">anlamı</span> keşfetmek.</h2></div>
        <div className="about-layout">
          <div className="about-intro" data-reveal><p className="lead-copy">Ben Damla. Büyük Veri Analistliği öğrencisi olarak, veriyi yalnızca sayılardan ibaret görmüyor; doğru sorularla yorumlanması ve karar süreçlerine katkı sağlaması gereken bir kaynak olarak ele alıyorum.</p><p>Power BI ile dashboard geliştirme, veri modelleme ve DAX ölçüleri üzerinde çalıştım. Analiz becerilerimi Python ve makine öğrenmesi alanlarında geliştirmeyi; özellikle iş süreçleri ve üretim ortamlarında veriden anlamlı sonuçlar çıkarmayı hedefliyorum.</p><a className="text-link" href="#deneyim">Deneyimimi tanıyın <Icon name="arrow" size={16} /></a></div>
          <div className="about-principles" data-reveal>
            <article className="principle-row"><span className="principle-index">A.</span><div><h3>Merakla yaklaş</h3><p>Problemi anlamak, doğru soruyu sormak ve veriyi keşfetmek.</p></div><span className="principle-mark"><Icon name="spark" size={17} /></span></article>
            <article className="principle-row"><span className="principle-index">B.</span><div><h3>Özenle analiz et</h3><p>Veriyi düzenlemek, ilişkileri görmek ve anlaşılır biçimde sunmak.</p></div><span className="principle-mark"><Icon name="chart" size={17} /></span></article>
            <article className="principle-row"><span className="principle-index">C.</span><div><h3>Karara katkı sağla</h3><p>Analitik çıktıları iş ihtiyaçlarıyla buluşturmak.</p></div><span className="principle-mark"><Icon name="arrow" size={17} /></span></article>
          </div>
        </div>
      </section>

      <section className="content-section experience-section" id="deneyim">
        <div className="section-shell">
          <div className="section-heading section-heading-row" data-reveal><div><div className="section-kicker"><span>02</span> DENEYİM</div><h2>Gerçek iş süreçlerinde<br /><span className="serif-accent">veriyle çalışmak.</span></h2></div><p className="heading-side-note">Öğrenilen bilgiyi gerçek iş ihtiyaçlarıyla bir araya getiren staj deneyimi.</p></div>
          <article className="experience-card" data-reveal>
            <div className="experience-rail"><span className="rail-dot" /><span className="rail-line" /><span className="rail-caption">01 / EXPERIENCE</span></div>
            <div className="experience-main">
              <div className="experience-topline"><span className="experience-date">06.07.2026 — 03.08.2026</span><span className="experience-tag"><span className="tag-dot" /> Tamamlandı</span></div>
              <div className="company-heading"><div><h3>Toyo Matbaa Mürekkepleri</h3><p className="company-group">Artience Group</p></div><span className="company-monogram">TOYO<span>•</span></span></div>
              <p className="role-title">Veri Analisti Stajyeri</p>
              <div className="experience-divider" />
              <ul className="experience-list">{experienceItems.map((item) => <li key={item}><span className="list-check"><Icon name="check" size={13} /></span><span>{item}</span></li>)}</ul>
              <div className="experience-tools"><span>POWER BI</span><span>DAX</span><span>DATA MODELING</span><span>DECISION SUPPORT</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section section-shell projects-section" id="projeler">
        <div className="section-heading section-heading-row" data-reveal><div><div className="section-kicker"><span>03</span> SEÇİLİ ÇALIŞMALAR</div><h2>Analitik düşünce,<br /><span className="serif-accent">uygulamayla buluşur.</span></h2></div><p className="heading-side-note">CV’de yer alan iki proje çalışması.</p></div>
        <div className="projects-grid">
          <article className="project-card" data-reveal>
            <div className="project-card-head"><span className="project-number">PROJE / 01</span><span className="project-kind">ARAŞTIRMA PROJESİ</span></div>
            <div className="project-visual route-visual"><RouteVisual /></div>
            <div className="project-card-body"><div className="project-tags"><span>TÜBİTAK 2209-B</span><span>Optimizasyon</span></div><h3>Servis Araçları Rotalama Optimizasyonu</h3><p>Manisa’da bir asansör firmasının servis araçları rotalama optimizasyonu konulu araştırma projesi.</p><div className="project-card-foot"><span>ÜNİVERSİTE ÖĞRENCİLERİ ARAŞTIRMA PROJELERİ</span><span className="project-arrow"><Icon name="arrow" size={17} /></span></div></div>
          </article>
          <article className="project-card" data-reveal>
            <div className="project-card-head"><span className="project-number">PROJE / 02</span><span className="project-kind">VERİ ANALİZİ</span></div>
            <div className="project-visual cluster-visual"><ClusterVisual /></div>
            <div className="project-card-body"><div className="project-tags"><span>Makine öğrenmesi</span><span>K-Means</span></div><h3>K-Means ile Müşteri Segmentasyonu</h3><p>K-Means kümeleme algoritmasını temel alan müşteri segmentasyonu analizi çalışması.</p><div className="project-card-foot"><span>KÜMELEME · SEGMENTASYON</span><span className="project-arrow"><Icon name="arrow" size={17} /></span></div></div>
          </article>
          <article className="project-card" data-reveal>
            <div className="project-card-head">
              <span className="project-number">PROJE / 03</span>
              <span className="project-kind">VERİ HİKÂYESİ</span>
            </div>
            <div className="project-visual cluster-visual">
              <svg className="project-visual-svg" viewBox="0 0 420 180" role="img" aria-label="Türkiye'nin elektrik üretim kaynaklarını temsil eden enerji görseli">
                <defs>
                  <pattern id="energy-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="energy-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="#74dfc1" />
                    <stop offset="100%" stopColor="#a0d7ff" />
                  </linearGradient>
                </defs>
                <rect width="420" height="180" rx="14" fill="url(#energy-grid)" />
                <path d="M35 143H390" stroke="currentColor" strokeOpacity=".18" />
                <path d="M35 112 C75 104 90 124 130 96 S190 91 225 67 S285 80 320 48 S365 42 390 27" fill="none" stroke="url(#energy-line)" strokeWidth="3" strokeLinecap="round" />
                <path d="M35 143 C75 135 95 143 130 126 S190 119 225 105 S285 110 320 91 S365 85 390 72" fill="none" stroke="#a0d7ff" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
                <path d="M35 143H390V27 C365 42 345 51 320 48 S260 72 225 67 S165 82 130 96 S75 104 35 112Z" fill="#74dfc1" fillOpacity=".06" />
                {[[35,112],[130,96],[225,67],[320,48],[390,27]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="4.5" fill="#74dfc1" stroke="#0e1b27" strokeWidth="2" />)}
                <text x="35" y="164" fill="currentColor" opacity=".65" fontSize="10">2004</text>
                <text x="365" y="164" fill="currentColor" opacity=".65" fontSize="10">2025</text>
                <text x="35" y="18" fill="currentColor" opacity=".8" fontSize="10" letterSpacing="2">ENERJİ DÖNÜŞÜMÜ</text>
              </svg>
            </div>
            <div className="project-card-body">
              <div className="project-tags">
                <span>Veri Görselleştirme</span>
                <span>Enerji Analizi</span>
              </div>
              <h3>Türkiye'nin Enerji Dönüşümü</h3>
              <p>Türkiye'nin elektrik üretiminde yenilenebilir enerji kaynaklarının yıllar içindeki değişimini etkileşimli grafikler ve veri hikâyesiyle inceliyorum.</p>
              <div className="project-card-foot">
                <a href="https://enerji-donusumu-hikayesi.vercel.app/" target="_blank" rel="noopener noreferrer">CANLI PROJEYİ İNCELE</a>
                <a className="project-arrow" href="https://enerji-donusumu-hikayesi.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Enerji dönüşümü projesini yeni sekmede aç"><Icon name="arrow" size={17} /></a>
              </div>
            </div>
          </article>
        </div>
        <p className="project-note"><span className="note-line" /> Proje görselleri kavramsal illüstrasyonlardır; sonuç grafiği veya ölçülmüş proje verisi değildir.</p>
      </section>

      <section className="content-section skills-section" id="yetkinlikler">
        <div className="section-shell">
          <div className="section-heading" data-reveal><div className="section-kicker"><span>04</span> YETKİNLİKLER</div><h2>Araçlarım değişir,<br /><span className="serif-accent">öğrenme merakım kalır.</span></h2><p className="section-description">CV’mde yer alan teknik beceriler ve çalışma araçları.</p></div>
          <div className="skill-groups">{skillGroups.map((group) => <article className="skill-group" data-reveal key={group.number}><div className="skill-group-top"><span className="skill-number">{group.number}</span><span className="skill-group-mark"><Icon name="spark" size={17} /></span></div><h3>{group.title}</h3><p>{group.subtitle}</p><div className="skill-chips">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></article>)}</div>
          <div className="language-card" data-reveal><div className="language-left"><span className="language-icon">Aa</span><div><span className="micro-label">YABANCI DİL</span><h3>İngilizce</h3><p>Intermediate</p></div></div><div className="language-right"><span className="language-level">B1</span><div className="language-meter" aria-label="İngilizce seviyesi B1"><span /></div></div></div>
        </div>
      </section>

      <section className="content-section section-shell education-section" id="egitim">
        <div className="education-layout">
          <div className="education-column" data-reveal><div className="section-kicker"><span>05</span> EĞİTİM</div><h2>Temelden<br /><span className="serif-accent">ileriye.</span></h2>
            <div className="education-timeline"><article className="education-item current"><span className="education-point" /><div className="education-date">2025 — DEVAM EDİYOR</div><h3>Manisa Celal Bayar Üniversitesi</h3><p>Büyük Veri Analistliği</p><span className="education-badge">GANO · 3.07</span></article><article className="education-item"><span className="education-point" /><div className="education-date">2021 — 2025</div><h3>İzmir İnönü Anadolu Lisesi</h3><p>Lise eğitimi</p></article></div>
          </div>
          <div className="certificates-column" data-reveal><div className="section-kicker"><span>06</span> SERTİFİKALAR</div><h2>Bilgiyi sürekli<br /><span className="serif-accent">güncel tutmak.</span></h2><div className="certificate-list"><article className="certificate-item"><span className="certificate-icon"><Icon name="check" size={16} /></span><div><h3>Introduction to Data Science</h3><p>AYEUM</p></div><span className="certificate-index">01</span></article><article className="certificate-item"><span className="certificate-icon"><Icon name="check" size={16} /></span><div><h3>Veri Ön İşleme Eğitimi</h3><p>Turkcell Akademi</p></div><span className="certificate-index">02</span></article><article className="certificate-item"><span className="certificate-icon"><Icon name="check" size={16} /></span><div><h3>TÜBİTAK 2209 Üniversite Öğrencileri Araştırma Projeleri Bilgilendirme Semineri</h3><p>Manisa Celal Bayar Üniversitesi</p></div><span className="certificate-index">03</span></article></div></div>
        </div>
      </section>

      <section className="community-strip section-shell" data-reveal><div className="community-symbol"><Icon name="spark" size={21} /></div><div className="community-copy"><span className="section-kicker">TOPLULUK & GÖNÜLLÜLÜK</span><h2>Bilgiyi paylaşmak, birlikte gelişmek.</h2><p><strong>Optimum Kulüp</strong> · Eğitim Ekibi Aktif Üye <span className="community-separator">/</span> <strong>Manisa Özel Huzurevi Vakfı</strong> · Huzurevi ziyareti ve yaşlılar için dijital farkındalık çalışması</p></div><span className="community-outline">WITH PURPOSE</span></section>

      <section className="contact-section" id="iletisim">
        <div className="section-shell contact-layout">
          <div className="contact-copy" data-reveal><div className="section-kicker"><span>07</span> İLETİŞİM</div><h2>Bir fikirle<br />başlayalım<span className="headline-period">.</span></h2><p>Staj, iş birliği veya veri analitiği üzerine bir sohbet için bana ulaşabilirsiniz.</p><a className="contact-email" href="mailto:damlaaydiin7@gmail.com"><span><Icon name="mail" size={18} /></span> damlaaydiin7@gmail.com <Icon name="arrow" size={16} /></a><div className="contact-details"><div><Icon name="pin" size={16} /><span>İzmir, Türkiye</span></div><div><Icon name="phone" size={16} /><a href="tel:+905308506973">+90 530 850 69 73</a></div></div><div className="contact-endnote"><span className="availability-dot" /> Yeni bağlantılara ve öğrenme fırsatlarına açığım.</div></div>
          <form className="contact-form" onSubmit={handleContactSubmit} data-reveal>
            <div className="form-heading"><span className="micro-label">BİR MESAJ BIRAKIN</span><span className="form-heading-mark"><Icon name="arrow" size={17} /></span></div>
            <label htmlFor="contact-name">Adınız</label><input id="contact-name" name="name" type="text" placeholder="Adınız soyadınız" autoComplete="name" required />
            <label htmlFor="contact-email">E-posta adresiniz</label><input id="contact-email" name="email" type="email" placeholder="ornek@eposta.com" autoComplete="email" required />
            <label htmlFor="contact-subject">Konu</label><input id="contact-subject" name="subject" type="text" placeholder="Mesajınızın konusu" required />
            <label htmlFor="contact-message">Mesajınız</label><textarea id="contact-message" name="message" rows={4} placeholder="Size nasıl yardımcı olabilirim?" required />
            <button type="submit" className="button button-primary form-submit">E-posta ile gönder <Icon name="arrow" size={17} /></button>
            <p className="form-privacy">Gönder düğmesi, e-posta uygulamanızda doldurulmuş bir taslak açar. Mesajınız bu web sitesinde saklanmaz.</p>
            {formSent && <p className="form-status" role="status">E-posta taslağı açılmadıysa <a href="mailto:damlaaydiin7@gmail.com">buradan doğrudan e-posta gönderin.</a></p>}
          </form>
        </div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-inner"><a className="footer-brand" href="#anasayfa"><span className="brand-mark">d<span>.</span></span><span>Damla Aydın</span></a><p>Veriyi anlamak. İçgörü üretmek. Gelişmeye devam etmek.</p><a className="back-to-top" href="#anasayfa">Başa dön <span>↑</span></a><span className="footer-copyright">© {new Date().getFullYear()} DAMLA AYDIN</span></div></footer>
    </main>
  );
}