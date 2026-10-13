import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
          İletişime Geçin
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Birlikte Çalışalım
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-10">
          Staj, proje veya veri analitiği fırsatları için benimle doğrudan iletişime geçebilirsiniz.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:damlaaydiin7@gmail.com"
            className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center gap-2 group"
          >
            <Mail className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-slate-400">E-posta</span>
            <span className="text-xs font-semibold text-white">damlaaydiin7@gmail.com</span>
          </a>

          <a
            href="tel:05308506973"
            className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center gap-2 group"
          >
            <Phone className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-slate-400">Telefon</span>
            <span className="text-xs font-semibold text-white">0530 850 69 73</span>
          </a>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center gap-2">
            <MapPin className="w-6 h-6 text-sky-400" />
            <span className="text-xs text-slate-400">Adres</span>
            <span className="text-xs font-semibold text-white">İzmir / Karabağlar</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-12">
          <a
            href="/cv/Damla_Aydın_CV.pdf"
            download="Damla_Aydın_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>CV'yi PDF Olarak İndir</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} Damla Aydın. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-2 font-mono text-cyan-400">
            <span>Manisa Celal Bayar Üniversitesi - Büyük Veri Analistliği</span>
          </div>
        </div>

      </div>
    </section>
  );
}
