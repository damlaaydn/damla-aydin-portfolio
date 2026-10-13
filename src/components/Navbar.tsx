export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg text-zinc-100 tracking-tight">
          Damla Aydın<span className="text-indigo-500">.</span>
        </span>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">Hakkımda</a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">Deneyim</a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">Projeler</a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">Yetenekler</a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">İletişim</a>
        </div>
      </div>
    </nav>
  );
}