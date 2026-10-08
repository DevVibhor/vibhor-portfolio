import React from 'react';
import { User, CheckCircle, Code, Layers, Sparkles, Database, FileSpreadsheet, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function AboutMe() {
  const iconList = [Layers, GitBranch, Database, Sparkles, FileSpreadsheet];

  return (
    <section id="about" className="py-16 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-orange-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Domain Expertise</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            About Me &amp; Technical Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PERSONAL_INFO.coreCompetencies.map((comp, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/40 transition-all group hover:bg-slate-900/90"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  {comp.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            );
          })}

          {/* AI Advantage Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-950/40 to-slate-900 border border-orange-500/30 hover:border-orange-500/60 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
              <Sparkles className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
              The AI-Assisted Edge
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Able to take concepts from conversation to executable code, writing scripts, SQL queries, OpenAPI schemas, and frontend prototypes in record turnaround time.
            </p>
          </div>
        </div>

        {/* Tools and Technologies Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400">Technical Toolkit &amp; Methodology</h4>
              <p className="text-xs text-slate-500 mt-0.5">Software, modeling languages, and platforms utilized across past engagements</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:border-orange-500/30 hover:text-white transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
