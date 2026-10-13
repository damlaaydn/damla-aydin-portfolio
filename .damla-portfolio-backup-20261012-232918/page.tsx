"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    category: "BUSINESS INTELLIGENCE",
    title: "Power BI Sales & Profitability Dashboard",
    description:
      "Satış, maliyet ve kârlılık verilerini analiz ederek yöneticilerin hızlı karar almasını destekleyen interaktif Power BI dashboard çalışması.",
    tags: ["Power BI", "DAX", "Excel", "Data Analysis"],
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "K-Means ile Satış Segmentasyonu",
    description:
      "Müşteri ve satış verilerini kullanarak benzer davranış gösteren grupları belirleyen ve satış segmentlerini analiz eden makine öğrenmesi projesi.",
    tags: ["Python", "Pandas", "Scikit-learn", "K-Means"],
  },
  {
    number: "03",
    category: "PREDICTIVE MAINTENANCE",
    title: "Kestirimci Bakım – TTF Tahmini",
    description:
      "Makine arıza kayıtlarından bir sonraki arızaya kadar geçen sürenin tahmin edilmesini amaçlayan veri analizi ve makine öğrenmesi projesi.",
    tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
  },
];

const skills = [
  {
    title: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "Excel"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "Dashboard Design", "Data Visualization"],
  },
  {
    title: "Database",
    items: ["SQL", "Microsoft SQL Server", "Data Modeling"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Regression", "Clustering", "Predictive Analytics"],
  },
  {
    title: "Programming",
    items: ["Python", "C#"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Jupyter", "VS Code"],
  },
];

const articles = [
  {
    number: "01",
    title: "Veri Analizi Nedir?",
    text: "Verilerin ham halden anlamlı bilgiye dönüşmesini, veri analizi sürecinin temel adımlarını ve gerçek hayattaki kullanım alanlarını keşfediyorum.",
  },
  {
    number: "02",
    title: "Power BI ile Veri Görselleştirme",
    text: "Dashboard tasarımında doğru grafik seçiminin, KPI'ların ve kullanıcı deneyiminin neden önemli olduğunu ele alıyorum.",
  },
  {
    number: "03",
    title: "Makine Öğrenmesine Başlarken",
    text: "Makine öğrenmesinin temel mantığını, model eğitimi sürecini ve veri bilimi projelerinde kullanılan temel yaklaşımı anlatıyorum.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.7c.57.1.78-.25.78-.55v-2.1c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.67 5.37-5.21 5.65.41.36.77 1.07.77 2.16v3.2c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.4A2.2 2.2 0 1 1 .8 3.4a2.2 2.2 0 0 1 4.4 0ZM1 8h4.2v13H1V8Zm6.8 0h4v1.78h.06c.56-1.06 1.93-2.18 3.98-2.18 4.25 0 5.04 2.8 5.04 6.44V21h-4.16v-6.17c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V21H7.8V8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>D</span>
            <strong>Damla Aydın</strong>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Ana Sayfa</a>
            <a href="#about" onClick={closeMenu}>Hakkımda</a>
            <a href="#skills" onClick={closeMenu}>Yetenekler</a>
            <a href="#projects" onClick={closeMenu}>Projeler</a>
            <a href="#experience" onClick={closeMenu}>Deneyim</a>
            <a href="#articles" onClick={closeMenu}>Yazılarım</a>
            <a href="#contact" onClick={closeMenu}>İletişim</a>
            <a
              href="/cv/Damla-Aydin-CV.pdf"
              download
              className="nav-cv"
              onClick={closeMenu}
            >
              CV
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="data-lines">
          <span className="line line-one" />
          <span className="line line-two" />
          <span className="line line-three" />
          <span className="data-dot dot-one" />
          <span className="data-dot dot-two" />
          <span className="data-dot dot-three" />
          <span className="data-dot dot-four" />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              BÜYÜK VERİ ANALİTİĞİ ÖĞRENCİSİ
            </div>

            <h1>
              Veriyi keşfediyor,
              <br />
              <span>anlamlı içgörülere</span>
              <br />
              dönüştürüyorum.
            </h1>

            <p className="hero-description">
              Veriyi keşfediyor, analiz ediyor ve karar vermeyi
              kolaylaştıran çözümlere dönüştürüyorum.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Projelerimi İncele
                <ArrowIcon />
              </a>

              <a
                href="/cv/Damla-Aydin-CV.pdf"
                download
                className="button button-secondary"
              >
                CV&apos;mi İndir
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GithubIcon />
                GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <LinkedinIcon />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-card">
              <div className="visual-top">
                <div>
                  <small>DATA INSIGHT</small>
                  <strong>Analytics</strong>
                </div>
                <div className="visual-status">● LIVE</div>
              </div>

              <div className="chart-area">
                <div className="chart-y">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <div className="chart">
                  <div className="chart-grid-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <svg viewBox="0 0 420 190" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7ee0c8" stopOpacity=".28" />
                        <stop offset="100%" stopColor="#7ee0c8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 160 C35 150 45 130 75 138 S125 90 155 110 S200 125 225 83 S270 65 295 92 S330 54 355 60 S395 28 420 38 V190 H0Z"
                      fill="url(#areaGradient)"
                    />
                    <path
                      d="M0 160 C35 150 45 130 75 138 S125 90 155 110 S200 125 225 83 S270 65 295 92 S330 54 355 60 S395 28 420 38"
                      fill="none"
                      stroke="#7ee0c8"
                      strokeWidth="3"
                    />
                    <circle cx="355" cy="60" r="5" fill="#0b0f14" stroke="#7ee0c8" strokeWidth="3" />
                  </svg>
                </div>
              </div>

              <div className="visual-bottom">
                <div>
                  <span>Projects</span>
                  <strong>03</strong>
                </div>
                <div>
                  <span>Tools</span>
                  <strong>10+</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Data</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span />
          Aşağı kaydır
        </a>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="section-label">HAKKIMDA</p>
              <h2>Verinin arkasındaki<br /><em>hikâyeyi</em> keşfediyorum.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                Ben <strong>Damla Aydın</strong>. Manisa Celal Bayar Üniversitesi
                Büyük Veri Analistliği öğrencisiyim.
              </p>

              <p>
                Veri analizi, Business Intelligence ve makine öğrenmesi
                alanlarında kendimi geliştiriyorum. Ham veriyi temizlemekten,
                analiz etmeye ve sonuçları anlaşılır dashboardlara
                dönüştürmeye kadar veriyle çalışmanın farklı aşamalarına
                ilgi duyuyorum.
              </p>

              <p>
                Özellikle <strong>Python, SQL, Excel ve Power BI</strong> ile
                çalışıyor; gerçek problemlere veri odaklı çözümler üretmeye
                odaklanıyorum.
              </p>
            </div>

            <div className="about-side">
              <div className="stat">
                <strong>01</strong>
                <span>Big Data<br />Analytics</span>
              </div>
              <div className="stat">
                <strong>02</strong>
                <span>Business<br />Intelligence</span>
              </div>
              <div className="stat">
                <strong>03</strong>
                <span>Machine<br />Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="section-label">YETENEKLER</p>
              <h2>Kullandığım <em>araçlar.</em></h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading heading-with-link">
            <div className="heading-left">
              <span className="section-number">03</span>
              <div>
                <p className="section-label">PROJELER</p>
                <h2>Üzerinde çalıştığım <em>projeler.</em></h2>
              </div>
            </div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-link">
              GitHub&apos;ı Gör
              <ArrowIcon />
            </a>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-arrow"
                  aria-label={`${project.title} GitHub`}
                >
                  <ExternalIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <p className="section-label">DENEYİM</p>
              <h2>Öğrenirken <em>üretmeye</em> devam.</h2>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">
              <span>2026</span>
              <small>STAJ</small>
            </div>

            <div className="experience-company">
              <div className="experience-title-row">
                <div>
                  <span className="company-label">TOYO MATBAA MÜREKKEPLERİ</span>
                  <h3>Power BI Stajı</h3>
                </div>
                <span className="current-badge">DATA & BI</span>
              </div>

              <p>
                Power BI dashboardları, veri modelleme, DAX ölçüleri ve veri
                analizi üzerine çalışmalar gerçekleştirdim. Satış,
                üretim ve kârlılık verilerini yönetim kararlarını destekleyecek
                şekilde görselleştirmeye odaklandım.
              </p>

              <div className="experience-tools">
                <span>Power BI</span>
                <span>DAX</span>
                <span>Excel</span>
                <span>Data Modeling</span>
              </div>
            </div>
          </div>

          <div className="experience-item education">
            <div className="experience-date">
              <span>2025 —</span>
              <small>DEVAM</small>
            </div>

            <div className="experience-company">
              <div className="experience-title-row">
                <div>
                  <span className="company-label">MANİSA CELAL BAYAR ÜNİVERSİTESİ</span>
                  <h3>Büyük Veri Analistliği</h3>
                </div>
                <span className="current-badge">EĞİTİM</span>
              </div>

              <p>
                Veri analizi, büyük veri teknolojileri, makine öğrenmesi,
                veri tabanı sistemleri ve istatistiksel analiz üzerine
                akademik çalışmalarımı sürdürüyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="section articles-section">
        <div className="container">
          <div className="section-heading heading-with-link">
            <div className="heading-left">
              <span className="section-number">05</span>
              <div>
                <p className="section-label">YAZILARIM</p>
                <h2>Öğrendiklerimi <em>paylaşıyorum.</em></h2>
              </div>
            </div>
            <span className="article-note">DATA • ANALYTICS • AI</span>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.number}>
                <div className="article-top">
                  <span>{article.number}</span>
                  <ArrowIcon />
                </div>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <div className="article-read">Yakında yayınlanacak</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-box">
            <div className="contact-grid" />
            <div className="contact-content">
              <span className="section-label">İLETİŞİM</span>
              <h2>
                Bir proje mi var?
                <br />
                <em>Konuşalım.</em>
              </h2>
              <p>
                Veri analizi, Business Intelligence veya veri odaklı
                projeler hakkında iletişime geçebilirsiniz.
              </p>

              <a href="mailto:damla.aydin@example.com" className="contact-mail">
                damla.aydin@example.com
                <ArrowIcon />
              </a>
            </div>

            <div className="contact-decoration">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a href="#home" className="footer-logo">Damla Aydın<span>.</span></a>
            <p>Big Data Analytics Student</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Damla Aydın
          </div>
        </div>
      </footer>
    </main>
  );
}
