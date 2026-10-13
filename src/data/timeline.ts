import type { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    id: "toyo-power-bi",
    kind: "experience",
    title: "Power BI Stajyeri",
    organization: "Toyo Matbaa Mürekkepleri",
    location: "Türkiye",
    period: "Staj",
    description:
      "Power BI dashboardları, veri modelleme, DAX ölçüleri ve veri analizi üzerine çalıştım. İş birimlerinin takip ettiği satış ve operasyon göstergelerini daha okunabilir hale getirmek için rapor katmanını sadeleştirdim.",
    highlights: [
      "İlişkisel veri modelleri ve ölçü tabloları üzerinde çalıştım.",
      "DAX ile kârlılık, sapma ve dönem karşılaştırması ölçüleri geliştirdim.",
      "Dashboardlarda filtreleme, hiyerarşi ve görsel hiyerarşiyi netleştirdim.",
    ],
  },
  {
    id: "mcbu-buyuk-veri",
    kind: "education",
    title: "Büyük Veri Analistliği",
    organization: "Manisa Celal Bayar Üniversitesi",
    location: "Teknik Bilimler Meslek Yüksekokulu",
    period: "Devam ediyor",
    description:
      "Büyük veri analistliği eğitiminde veri tabanı, istatistiksel düşünme, iş zekâsı ve makine öğrenmesine giriş konularında uygulamalı olarak ilerliyorum.",
    highlights: [
      "Veri analizi ve iş zekâsı odaklı ders ve projeler.",
      "SQL, Python ve görselleştirme araçlarıyla pratik çalışma.",
      "Gerçek veri setleri üzerinden rapor ve model geliştirme.",
    ],
  },
];

export const experience = timeline.filter((item) => item.kind === "experience");
export const education = timeline.filter((item) => item.kind === "education");
