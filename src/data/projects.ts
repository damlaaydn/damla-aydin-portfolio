import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "power-bi-sales-profitability-dashboard",
    title: "Power BI Sales & Profitability Dashboard",
    summary:
      "Satış, maliyet, kârlılık ve performans göstergelerini analiz eden Power BI dashboard projesi.",
    description:
      "Bu çalışmada satış ve maliyet verileri tek bir semantik modelde birleştirildi. Yönetimin günlük olarak takip edebileceği kârlılık, ürün ve kanal performansına dair göstergeler Power BI üzerinde tasarlandı. DAX ölçüleri ile dönem karşılaştırmaları, marj hesapları ve sapma analizleri kuruldu.",
    highlights: [
      "Satış, maliyet ve kâr metriklerini tek modelde birleştirdim.",
      "DAX ile dönemsel karşılaştırma ve kârlılık ölçüleri yazdım.",
      "Yönetim için sade, filtrelenebilir bir rapor katmanı oluşturdum.",
    ],
    technologies: ["Power BI", "DAX", "Excel"],
    githubUrl: "https://github.com/damlaaydin/power-bi-sales-profitability",
  },
  {
    slug: "kmeans-satis-segmentasyonu",
    title: "K-Means ile Satış Segmentasyonu",
    summary:
      "Müşteri/satış verilerini kullanarak K-Means kümeleme algoritmasıyla satış segmentasyonu yapılması.",
    description:
      "Satış kayıtları temizlenip ölçeklendikten sonra K-Means ile müşteri ve satış kümeleri çıkarıldı. Amaç, benzer davranış gösteren grupları ayırarak kampanya ve stok kararlarına girdi üretmekti. Küme sayısı elbow yöntemi ve silüet skoru ile değerlendirildi; sonuçlar yorumlanabilir etiketlerle raporlandı.",
    highlights: [
      "Pandas ile veri hazırlığı ve özellik mühendisliği yaptım.",
      "K-Means kümelerini elbow ve silüet skoru ile değerlendirdim.",
      "Segmentleri iş kararlarına çevrilebilir şekilde özetledim.",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/damlaaydin/kmeans-satis-segmentasyonu",
  },
  {
    slug: "kestirimci-bakim-ttf-tahmini",
    title: "Kestirimci Bakım – TTF Tahmini",
    summary:
      "Makine arıza kayıtlarından bir sonraki arızaya kadar geçen sürenin makine öğrenmesi ile tahmin edilmesini amaçlayan proje.",
    description:
      "Arıza geçmişinden Time-to-Failure (TTF) hedefi türetildi. Eksik kayıtlar ve aykırı değerler kontrol edildikten sonra regresyon tabanlı modellerle kalan süre tahmini denendi. Amaç, bakım ekiplerinin reaktif müdahale yerine planlı duruş kararı alabilmesi için erken bir sinyal üretmekti.",
    highlights: [
      "Arıza kayıtlarından TTF hedef değişkenini oluşturdum.",
      "Keşifsel analiz ve model karşılaştırması yaptım.",
      "Bakım planlamasına yönelik yorumlanabilir çıktılar ürettim.",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com/damlaaydin/kestirimci-bakim-ttf",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
