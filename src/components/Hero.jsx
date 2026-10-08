import React from 'react';
import { FileText, GitMerge, Cpu, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Hero({ onSelectCategory }) {
  const links = [
    { id: 'brd', name: 'BRDs', icon: FileText },
    { id: 'flow', name: 'Process Flow', icon: GitMerge },
    { id: 'solution', name: 'Solution Proposal', icon: Cpu },
    { id: 'design', name: 'Website Designs', icon: Layout },
  ];

  const handleLinkClick = (e, catId) => {
    e.preventDefault();
    onSelectCategory(catId);
    const el = document.getElementById('artifacts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden text-center">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Name and Role */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300">
          {PERSONAL_INFO.targetRole}
          <span className="text-orange-400 font-normal text-base sm:text-lg block sm:inline sm:ml-2">
            • Prepared for {PERSONAL_INFO.targetCompany}
          </span>
        </p>

        {/* About Me bio */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {PERSONAL_INFO.bio}
        </p>

        {/* Hyperlinks directly below */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-orange-500 hover:text-white text-slate-200 border border-slate-700/80 hover:border-orange-500 transition-all text-sm font-semibold shadow-md group hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
