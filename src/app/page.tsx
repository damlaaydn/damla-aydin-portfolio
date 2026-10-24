// Sayfanda kullanılan Icon ve bileşenler (Eğer varsa) import edilmeli. 
// Hata vermemesi için React'in temel yapısını kuruyoruz.

export default function Portfolio() {
  // Sildiğin kısımlardaki eksikleri tamamlamak için örnek yetkinlikler dizisi
  const skillGroups = [
    { number: "01", title: "Veri Bilimi", subtitle: "Veri manipülasyonu ve analizi", skills: ["Python", "Pandas", "NumPy"] },
    { number: "02", title: "Makine Öğrenmesi", subtitle: "Model geliştirme", skills: ["Scikit-learn", "K-Means", "XGBoost"] },
    { number: "03", title: "Veritabanı & İş Zekası", subtitle: "Veri saklama ve görselleştirme", skills: ["SQL", "MongoDB", "Excel", "Power BI"] }
  ];

  // Eksik bileşenlerin hata vermemesi için geçici tanımlamaları
  
const Icon = ({ name, size }: { name: string; size: number }) => (
  <span style={{ fontSize: size }}>
    {name === "arrow" ? "→" : "•"}
  </span>
);

  const RouteVisual = () => <div className="bg-gray-200 w-full h-32 rounded-lg flex items-center justify-center">Rota Görseli</div>;
  const ClusterVisual = () => <div className="bg-gray-200 w-full h-32 rounded-lg flex items-center justify-center">Kümeleme Görseli</div>;

  return (
    <main>
      {/* SİLİNEN ANA SAYFA / GİRİŞ KISMI (Eksik olmaması için eklendi) */}
      <section className="content-section section-shell" id="anasayfa" style={{ padding: "100px 0" }}>
        <h1>Damla Aydın</h1>
        <p>Büyük Veri Analistliği Öğrencisi | Veri Bilimi & Makine Öğrenmesi</p>
      </section>

      {/* SENİN BANA ATTIĞIN PROJELER BÖLÜMÜ */}
      <section className="content-section section-shell projects-section" id="projeler">
        <div className="section-heading section-heading-row" data-reveal>
          <div>
            <div className="section-kicker"><span>03</span> SEÇİLİ ÇALIŞMALAR</div>
            <h2>Analitik düşünce,<br /><span className="serif-accent">uygulamayla buluşur.</span></h2>
          </div>
          <p className="heading-side-note">CV’de yer alan iki proje çalışması.</p>
        </div>
        <div className="projects-grid">
          <article className="project-card" data-reveal>
            <div className="project-card-head"><span className="project-number">PROJE / 01</span><span className="project-kind">ARAŞTIRMA PROJESİ</span></div>
            <div className="project-visual route-visual"><RouteVisual /></div>
            <div className="project-card-body">
              <div className="project-tags"><span>TÜBİTAK 2209-B</span><span>Optimizasyon</span></div>
              <h3>Servis Araçları Rotalama Optimizasyonu</h3>
              <p>Manisa’da bir asansör firmasının servis araçları rotalama optimizasyonu konulu araştırma projesi.</p>
              <div className="project-card-foot"><span>ÜNİVERSİTE ÖĞRENCİLERİ ARAŞTIRMA PROJELERİ</span><span className="project-arrow"><Icon name="arrow" size={17} /></span></div>
            </div>
          </article>
          <article className="project-card" data-reveal>
            <div className="project-card-head"><span className="project-number">PROJE / 02</span><span className="project-kind">VERİ ANALİZİ</span></div>
            <div className="project-visual cluster-visual"><ClusterVisual /></div>
            <div className="project-card-body">
              <div className="project-tags"><span>Makine öğrenmesi</span><span>K-Means</span></div>
              <h3>K-Means ile Müşteri Segmentasyonu</h3>
              <p>K-Means kümeleme algoritmasını temel alan müşteri segmentasyonu analizi çalışması.</p>
              <div className="project-card-foot"><span>KÜMELEME · SEGMENTASYON</span><span className="project-arrow"><Icon name="arrow" size={17} /></span></div>
            </div>
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
          <div className="section-heading" data-reveal>
            <div className="section-kicker"><span>04</span> YETKİNLİKLER</div>
            <h2>Araçlarım değişir,<br /><span className="serif-accent">öğrenme merakım kalır.</span></h2>
            <p className="section-description">CV’mde yer alan teknik beceriler ve çalışma araçları.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" data-reveal key={group.number}>
                <div className="skill-group-top">
                  <span className="skill-number">{group.number}</span>
                  <span className="skill-group-mark"><Icon name="spark" size={17} /></span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
                <div className="skill-chips">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="language-card" data-reveal>
            <div className="language-left">
              <span className="language-icon">Aa</span>
              <div>
                <span className="micro-label">YABANCI DİL</span>
                <h3>İngilizce</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="language-right">
              <span className="language-level">B1</span>
              <div className="language-meter" aria-label="İngilizce seviyesi B1"><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell education-section" id="egitim">
        <div className="education-layout">
          <div className="education-column" data-reveal>
            <div className="section-kicker"><span>05</span> EĞİTİM</div>
            <h2>Temelden<br /><span className="serif-accent">ileriye.</span></h2>
            <div className="education-timeline">
              <article className="education-item current">
                <span className="education-point" />
                <div className="education-date">2025 — DEVAM EDİYOR</div>
                <h3>Manisa Celal Bayar Üniversitesi</h3>
                <p>Büyük Veri Analistliği</p>
                <span className="education-badge">GANO · 3.07</span>
              </article>
              <article className="education-item">
                <span className="education-point" />
                <div className="education-date">2021 — 2025</div>
                <h3>İzmir İnönü Anadolu Lisesi</h3>
                <p>Lise eğitimi</p>
              </article>
            </div>
          </div>
          <div className="certificates-column" data-reveal>
            <div className="section-kicker"><span>06</span> SERTİFİKALAR</div>
            <h2>Bilgiyi sürekli<br /><span className="serif-accent">güncel tutmak.</span></h2>
            <div className="certificate-list">
              <article className="certificate-item">
                <span className="certificate-icon"><Icon name="check" size={16} /></span>
                <div><h3>Introduction to Data Science</h3><p>AYEUM</p></div>
                <span className="certificate-index">01</span>
              </article>
              <article className="certificate-item">
                <span className="certificate-icon"><Icon name="check" size={16} /></span>
                <div><h3>Veri Ön İşleme Eğitimi</h3><p>Turkcell Akademi</p></div>
                <span className="certificate-index">02</span>
              </article>
              <article className="certificate-item">
                <span className="certificate-icon"><Icon name="check" size={16} /></span>
                <div><h3>TÜBİTAK 2209 Projeleri Semineri</h3><p>Manisa Celal Bayar Üniversitesi</p></div>
                <span className="certificate-index">03</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="community-strip section-shell" data-reveal>
        <div className="community-symbol"><Icon name="spark" size={21} /></div>
        <div className="community-copy">
          <span className="section-kicker">TOPLULUK & GÖNÜLLÜLÜK</span>
          <h2>Bilgiyi paylaşmak, birlikte gelişmek.</h2>
          <p><strong>Optimum Kulüp</strong> · Eğitim Ekibi Aktif Üye <span className="community-separator">/</span> <strong>Manisa Özel Huzurevi Vakfı</strong> · Yaşlılar için dijital farkındalık çalışması</p>
        </div>
        <span className="community-outline">WITH PURPOSE</span>
      </section>

      {/* İŞTE ÇALIŞAN İLETİŞİM FORMUN BURADA */}
      <section className="contact-section" id="iletisim">
        <div className="section-shell contact-layout">
          <div className="contact-copy" data-reveal>
            <div className="section-kicker"><span>07</span> İLETİŞİM</div>
            <h2>Bir fikirle<br />başlayalım<span className="headline-period">.</span></h2>
            <p>Staj, iş birliği veya veri analitiği üzerine bir sohbet için bana ulaşabilirsiniz.</p>
            <a className="contact-email" href="mailto:damlaaydiin7@gmail.com">
              <span><Icon name="mail" size={18} /></span> damlaaydiin7@gmail.com <Icon name="arrow" size={16} />
            </a>
            <div className="contact-details">
              <div><Icon name="pin" size={16} /><span>İzmir, Türkiye</span></div>
              <div><Icon name="phone" size={16} /><a href="tel:+905308506973">+90 530 850 69 73</a></div>
            </div>
            <div className="contact-endnote"><span className="availability-dot" /> Yeni bağlantılara ve öğrenme fırsatlarına açığım.</div>
          </div>
          
          {/* FORMSUBMIT BAĞLANTISI BURAYA EKLENDİ */}
          <form className="contact-form" action="https://formsubmit.co/damlaaydiin7@gmail.com" method="POST" data-reveal>
            <div className="form-heading"><span className="micro-label">BİR MESAJ BIRAKIN</span><span className="form-heading-mark"><Icon name="arrow" size={17} /></span></div>
            
            <input type="hidden" name="_captcha" value="false" />
            
            <label htmlFor="contact-name">Adınız</label>
            <input id="contact-name" name="name" type="text" placeholder="Adınız soyadınız" autoComplete="name" required />
            
            <label htmlFor="contact-email">E-posta adresiniz</label>
            <input id="contact-email" name="email" type="email" placeholder="ornek@eposta.com" autoComplete="email" required />
            
            <label htmlFor="contact-subject">Konu</label>
            <input id="contact-subject" name="subject" type="text" placeholder="Mesajınızın konusu" required />
            
            <label htmlFor="contact-message">Mesajınız</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="Size nasıl yardımcı olabilirim?" required maxLength={5000} />

            <label className="contact-consent" htmlFor="contact-kvkk">
              <input id="contact-kvkk" type="checkbox" name="kvkk" required />
              <span>İletişim talebime yanıt verilmesi amacıyla bilgilerimin işlenmesine ilişkin aydınlatma metnini okudum.</span>
            </label>

            <button type="submit" className="button button-primary form-submit">
              Mesajı gönder
              <Icon name="arrow" size={17} />
            </button>

            <p className="form-privacy">Mesajınız Formsubmit aracılığıyla doğrudan e-posta adresinize iletilecektir.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="footer-brand" href="#anasayfa"><span className="brand-mark">d<span>.</span></span><span>Damla Aydın</span></a>
          <p>Veriyi anlamak. İçgörü üretmek. Gelişmeye devam etmek.</p>
          <a className="back-to-top" href="#anasayfa">Başa dön <span>↑</span></a>
          <span className="footer-copyright">© {new Date().getFullYear()} DAMLA AYDIN</span>
        </div>
      </footer>
    </main>
  );
}
