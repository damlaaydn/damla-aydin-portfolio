export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800/60 mb-12">
      <div className="bg-gradient-to-r from-indigo-950/40 to-zinc-900 border border-indigo-500/20 rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Birlikte Çalışalım</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Proje iş birlikleri, staj imkanları veya veri analitiği üzerine konuşmak için bana ulaşabilirsiniz.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:iletisim@example.com"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all text-sm"
          >
            E-posta Gönder
          </a>
        </div>
      </div>
    </section>
  );
}