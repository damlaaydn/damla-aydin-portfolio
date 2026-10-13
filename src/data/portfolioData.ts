import { Skill, Project, Experience, Education } from '../types/portfolio';

export const personalInfo = {
  name: 'Damla Aydın',
  title: 'Büyük Veri Analistliği Öğrencisi & Veri Analisti Adayı',
  location: 'İzmir / Manisa, Türkiye',
  about: 'Manisa Celal Bayar Üniversitesi Büyük Veri Analistliği öğrencisiyim. Veri analizi, veri işleme, iş zekası (BI) raporlaması ve büyük veri mimarileri üzerine çalışıyorum. Python, SQL, Excel, Power BI ve NoSQL (MongoDB, Cassandra, Hive) teknolojilerini kullanarak veriden anlamlı grafikler ve analitik çözümler üretiyorum.',
  github: 'https://github.com/damlaaydin',
  linkedin: 'https://linkedin.com/in/damlaaydin',
  email: 'damla.aydin@example.com',
};

export const skills: Skill[] = [
  { name: 'Python (Pandas, NumPy, Scikit-Learn)', category: 'Programming' },
  { name: 'SQL & İlişkisel Veri Tabanları', category: 'Programming' },
  { name: 'Excel (Gelişmiş Formüller & Analiz)', category: 'Data Analysis' },
  { name: 'Power BI & Raporlama', category: 'Data Analysis' },
  { name: 'MongoDB & NoSQL', category: 'Databases' },
  { name: 'Apache Cassandra & Apache Hive', category: 'Databases' },
  { name: 'Çoklu Doğrusal Regresyon & ML', category: 'Data Analysis' },
  { name: 'Canva & Görsel Tasarım', category: 'Tools & Frameworks' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lojistik Ar-Ge Maliyet ve Kestirimsel Regresyon Modeli',
    description: 'Lojistik maliyet analizi ve gelecek dönem harcamalarını tahmin etmek için Çoklu Doğrusal Regresyon (Multiple Linear Regression) modeli kullanılarak geliştirilmiş veri analitiği projesi.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regresyon', 'Veri Analizi'],
    featured: true,
    metrics: 'Maliyet Optimizasyon Analizi'
  },
  {
    id: '2',
    title: 'Öğrenci Sınav Performans Takip Dashboardu',
    description: '20 öğrenci ve 15 farklı deneme sınavının sonuçlarını işleyen, ders bazlı başarı ve konu hakimiyeti analizi sunan gelişmiş Excel analiz ve dashboard sistemi.',
    tags: ['Excel', 'Veri Görselleştirme', 'Dashboard', 'Veri Temizleme'],
    featured: true,
    metrics: '20 Öğrenci & 15 Deneme Takibi'
  },
  {
    id: '3',
    title: 'Dijital Okuryazarlık ve Bilinçlendirme Projesi',
    description: 'Büyüklere ve huzurevi sakinlerine yönelik e-Devlet, MHRS ve E-Nabız gibi dijital sistemlerin kullanımını kolaylaştıran basitleştirilmiş arayüz rehberleri ve eğitim sunumu.',
    tags: ['Dijital Okuryazarlık', 'UX/UI', 'Sosyal Sorumluluk', 'Canva'],
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Veri Analitiği Stajyeri / Proje Çalışmaları',
    company: 'Spiltech & Türk Tuborg Süreçleri',
    period: '2026',
    description: [
      'Veri seti temizleme, eksik veri yönetimi ve özellik ölçeklendirme çalışmaları yapıldı.',
      'İş süreçlerini destekleyici analitik raporlar ve veri dashboardları hazırlandı.'
    ],
    technologies: ['Python', 'SQL', 'Excel', 'Power BI']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Büyük Veri Analistliği',
    institution: 'Manisa Celal Bayar Üniversitesi',
    period: '2025 - Halen',
    details: 'Büyük veri mimarileri (Hive, Cassandra), NoSQL (MongoDB), SQL, Python ve Veri Analitiği odaklı eğitim.'
  }
];
