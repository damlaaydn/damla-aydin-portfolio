"use client";

import DataCanvas from "./DataCanvas";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Database, LineChart, Cpu, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-16"
    >
      <DataCanvas />

      {/* Glowing Lighting Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl shadow-cyan-950/50 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span>Büyük Veri Analistliği & İş Zekası (Power BI & DAX)</span>
        </div>

        {/* Main Header Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-4">
          DAMLA AYDIN
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-emerald-400 mb-6">
          Büyük Veri Analisti Öğrencisi
        </h2>

        {/* Concise High-Impact Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10">
          Ham verileri stratejik kararlara dönüştüren interaktif <span className="text-cyan-400 font-semibold">Power BI Dashboard'ları</span>, 
          <span className="text-emerald-400 font-semibold"> DAX veri modelleri</span> ve <span className="text-sky-300 font-semibold">Makine Öğrenmesi</span> çözümleri geliştiriyorum.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Projelerimi İncele</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/cv/Damla_Aydın_CV.pdf"
            download="Damla_Aydın_CV.pdf"
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>CV'mi İndir (PDF)</span>
          </a>
        </div>

        {/* Quick Highlights / Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
              <Database className="w-4 h-4" /> EĞİTİM
            </div>
            <div className="text-lg font-bold text-white">MCBÜ</div>
            <div className="text-[11px] text-slate-400">GANO: 3.07 / 4.00</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
              <LineChart className="w-4 h-4" /> STAJ
            </div>
            <div className="text-lg font-bold text-white">Toyo Matbaa</div>
            <div className="text-[11px] text-slate-400">Power BI & DAX</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-1">
              <Cpu className="w-4 h-4" /> AKADEMİK PROJE
            </div>
            <div className="text-lg font-bold text-white">TÜBİTAK 2209-B</div>
            <div className="text-[11px] text-slate-400">Rotalama Optimizasyonu</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
              <Award className="w-4 h-4" /> LOKASYON
            </div>
            <div className="text-lg font-bold text-white">İzmir, Türkiye</div>
            <div className="text-[11px] text-slate-400">Karabağlar</div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-6 mt-12 pt-6 border-t border-slate-800/60 max-w-md mx-auto">
          <a
            href="mailto:damlaaydiin7@gmail.com"
            className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="E-posta Gönder"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:05308506973"
            className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="Ara"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
