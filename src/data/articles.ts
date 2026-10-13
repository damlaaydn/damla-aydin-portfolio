import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "veri-analizi-nedir",
    title: "Veri Analizi Nedir?",
    category: "Veri Analizi",
    date: "12 Mart 2026",
    excerpt:
      "Ham kayıttan karara giden yolu sadeleştiren bir bakış: soru, temizlik, analiz ve anlatım.",
    content: [
      "Veri analizi, bir soruya cevap vermek için kayıtları toplama, temizleme, dönüştürme ve yorumlama sürecidir. Amaç tabloyu doldurmak değil; belirsizliği azaltacak bir içgörü üretmektir.",
      "İyi bir analiz genellikle doğru soruyla başlar. “Satış neden düştü?” gibi geniş bir ifade, ürün, kanal, dönem ve müşteri kırılımlarına indirgenmeden yanıltıcı sonuçlar verebilir.",
      "Temizlik adımı çoğu zaman analizin kendisinden daha fazla zaman alır. Eksik değerler, tekrarlayan satırlar ve tutarsız kategoriler düzeltilmeden yapılan görselleştirme, yanlış bir hikâye anlatır.",
      "Sonuç ancak paylaşılabilir olduğunda tamamlanır. Bir grafik, bir ölçü veya kısa bir özet; karar vericinin ne yapacağını netleştirmelidir.",
    ],
  },
  {
    slug: "power-bi-ile-veri-gorsellestirme",
    title: "Power BI ile Veri Görselleştirme",
    category: "Business Intelligence",
    date: "28 Mart 2026",
    excerpt:
      "Gösterge panosunu süslemek yerine, doğru ölçüyü doğru bağlamda göstermek üzerine notlar.",
    content: [
      "Power BI güçlü bir görselleştirme aracıdır; fakat değerini model ve ölçü kalitesi belirler. Zayıf bir veri modeli, gösterişli görsellerle kapatılamaz.",
      "Star şemaya yakın, okunabilir tablolar ve açık DAX ölçüleri; raporun hem performansını hem güvenilirliğini artırır. Her görsele yeni bir hesap yazmak yerine, iş dilinde adlandırılmış merkezi ölçüler kullanmak daha sürdürülebilirdir.",
      "Görsel seçimi hikâyeye hizmet etmelidir. Trend için çizgi, katkı için çubuk, dağılım için harita veya saçılım; “hepsi bir arada” panolar çoğu zaman hiçbir şeyi anlatmaz.",
      "Filtreler, kesitler ve hiyerarşiler kullanıcıya kontrol verir. Yine de ilk bakışta görünen varsayılan görünüm, en kritik soruyu tek başına cevaplamalıdır.",
    ],
  },
  {
    slug: "makine-ogrenmesine-baslarken",
    title: "Makine Öğrenmesine Başlarken",
    category: "Makine Öğrenmesi",
    date: "8 Nisan 2026",
    excerpt:
      "Algoritmadan önce veri, metrik ve iş problemi: başlangıç için sade bir çerçeve.",
    content: [
      "Makine öğrenmesi, geçmiş örneklerden tekrar kullanılabilir bir ilişki öğrenmeye çalışır. İlk adım algoritma seçmek değil; tahmin edilecek şeyi ve başarı ölçütünü netleştirmektir.",
      "Sınıflandırma, regresyon ve kümeleme farklı sorular sorar. Müşteriyi segmentlemek ile arızaya kalan süreyi tahmin etmek aynı araç kutusunu paylaşsa da aynı değerlendirme dilini kullanmaz.",
      "Scikit-learn gibi kütüphaneler denemeyi hızlandırır. Asıl iş, sızıntıyı önlemek, ölçeklemek, basit bir taban modelle karşılaştırmak ve sonucu iş diline çevirmektir.",
      "Başlangıç için yeterli olan şey genellikle karmaşık bir ağ değil; temiz bir tablo, dürüst bir doğrulama ayrımı ve yorumlanabilir bir hatadır.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
