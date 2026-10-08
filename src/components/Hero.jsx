import React from 'react';
import { FileText, GitMerge, Cpu, Layout, Building2, Sparkles, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Hero({ onSelectCategory, onOpenAiInfo }) {
  const links = [
    { id: 'brd', name: 'BRDs', icon: FileText, desc: 'Requirement Specs' },
    { id: 'flow', name: 'Process Flow', icon: GitMerge, desc: 'BPMN & System Flows' },
    { id: 'solution', name: 'Solution Proposal', icon: Cpu, desc: 'Architecture Blueprints' },
    { id: 'design', name: 'Website Designs', icon: Layout, desc: 'UI/UX Wireframes' },
  ];

  const handleLinkClick = (e, catId) => {
    e.preventDefault();
    onSelectCategory(catId);
    const el = document.getElementById('artifacts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-10 pb-12 md:pt-16 md:pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tailored Pill for OrangeMantra */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/40 text-xs font-semibold text-orange-300 mb-6 shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-orange-400" />
          <span>Prepared for the <strong className="text-white underline decoration-orange-500 decoration-2">{PERSONAL_INFO.targetCompany}</strong> Hiring Team</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          Hi, I'm <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mt-2">
            Technical Business Analyst
          </span>
        </h1>

        {/* About Me snippet */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* Quick Hyperlinks */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center justify-center gap-1.5">
            <span>Explore Documented Artifacts</span>
            <ArrowDown className="w-3.5 h-3.5 text-orange-400" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-orange-500 hover:text-white text-slate-200 border border-slate-700/80 hover:border-orange-500 transition-all text-sm font-semibold shadow-sm group hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
