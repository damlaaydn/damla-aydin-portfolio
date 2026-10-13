export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
        Büyük Veri Analitiği &amp; Yazılım
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold text-zinc-100 tracking-tight mb-6 leading-tight">
        Veriyi anlamlı içgörülere ve modern web deneyimlerine dönüştürüyorum.
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed">
        Büyük Veri Analitiği öğrencisiyim. Python, SQL ve Excel ile veri işleme, analitik panolar ve Next.js ile modern web projeleri geliştiriyorum.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all text-sm"
        >
          Projeleri İncele
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium rounded-lg transition-all text-sm"
        >
          İletişime Geç
        </a>
      </div>
    </section>
  );
}