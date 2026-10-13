const certificates = [
  { name: "Sertifika Adı 1", issuer: "Veren Kurum", year: "2025" },
  { name: "Sertifika Adı 2", issuer: "Veren Kurum", year: "2025" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800/60">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Sertifikalar</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all"
          >
            <h3 className="text-base font-semibold text-zinc-100 mb-1">{cert.name}</h3>
            <p className="text-sm text-zinc-400">
              {cert.issuer} · <span className="font-mono text-zinc-500">{cert.year}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}