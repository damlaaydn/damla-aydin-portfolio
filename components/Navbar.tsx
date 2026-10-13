"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Hakkımda", href: "#about" },
  { name: "Deneyim", href: "#experience" },
  { name: "Projeler", href: "#projects" },
  { name: "Sertifikalar", href: "#certificates" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl shadow-cyan-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center group-hover:bg-transparent transition-colors">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              DAMLA AYDIN
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
              Data Analyst
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 rounded-full hover:bg-slate-800/60 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/cv/Damla_Aydın_CV.pdf"
            download="Damla_Aydın_CV.pdf"
            className="relative group overflow-hidden px-5 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-3.5 h-3.5" />
              <span>CV'mi İndir</span>
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/cv/Damla_Aydın_CV.pdf"
            download="Damla_Aydın_CV.pdf"
            className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg"
          >
            <Download className="w-4 h-4" />
            <span>CV'mi İndir (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}
