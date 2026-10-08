import React from 'react';
import { FileText, GitMerge, Cpu, Layout, ArrowRight, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Hero({ onSelectCategory, onOpenAiInfo }) {
  const categoryShortcuts = [
    { id: 'brd', name: 'BRDs', count: '2 Docs', desc: 'Functional & Non-Functional Specs', icon: FileText, color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400' },
    { id: 'flow', name: 'Process Flow', count: '2 Flows', desc: 'BPMN & Sequence Logic', icon: GitMerge, color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400' },
    { id: 'solution', name: 'Solution Proposal', count: '2 Plans', desc: 'Microservices & Event Arch', icon: Cpu, color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400' },
    { id: 'design', name: 'Website Designs', count: '2 Specs', desc: 'High-Fidelity Mocks & UI/UX', icon: Layout, color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400' },
  ];

  const handleScrollToArtifacts = (catId) => {
    onSelectCategory(catId);
    const el = document.getElementById('artifacts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personalization Pill for OrangeMantra */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/40 text-xs font-semibold text-orange-300 mb-6 shadow-sm">
          <Building2 className="w-4 h-4 text-orange-400" />
          <span>Tailored Submission for the <strong className="text-white underline decoration-orange-500 decoration-2">{PERSONAL_INFO.targetCompany}</strong> Hiring Team</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 mt-2">
                Technical Business Analyst Portfolio
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Bridging strategic business goals with resilient technical engineering. Here is a curated repository of my real-world 
              <strong className="text-white font-semibold"> BRDs</strong>, 
              <strong className="text-white font-semibold"> Process Flows</strong>, 
              <strong className="text-white font-semibold"> Solution Proposals</strong>, and 
              <strong className="text-white font-semibold"> Website Designs</strong>.
            </p>

            {/* AI Agility Callout */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>AI-Assisted Frontend Deployment (React + Vite + GitHub Pages)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Embedded PDFs &amp; Interactive Vector Diagrams</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => handleScrollToArtifacts('all')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 transition-all hover:scale-[1.02]"
              >
                <span>Explore All Artifacts</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAiInfo}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-orange-500/40 transition-all"
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Why This Was Built With AI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fast Stats Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-orange-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                    BA
                  </div>
                  <div>
                    <h2 className="text-xs uppercase font-bold tracking-wider text-slate-400">Deliverables Matrix</h2>
                    <p className="text-xs text-orange-400 font-semibold">{PERSONAL_INFO.targetCompany} Evaluation</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-5">
                {PERSONAL_INFO.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-2xl font-extrabold text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Sanitized enterprise specifications ready for immediate technical review.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Category Jump Cards (Requested by User) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span>Direct Jump to Evaluated Artifacts:</span>
            <span className="text-orange-400">• Click any tile below to filter</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryShortcuts.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleScrollToArtifacts(cat.id)}
                  className={`text-left p-4 rounded-xl bg-gradient-to-b ${cat.color} border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-orange-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {cat.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
