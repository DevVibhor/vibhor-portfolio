import React from 'react';
import { ArrowDown, ArrowRight, Globe, FileText, Cpu, GitMerge, Mail } from 'lucide-react';
import { PERSONAL_INFO, CATEGORIES, ARTIFACTS } from '../data/artifacts';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current text-slate-700 dark:text-slate-200" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const CATEGORY_ICONS = {
  design: { icon: Globe, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' },
  brd: { icon: FileText, color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10' },
  solution: { icon: Cpu, color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10' },
  flow: { icon: GitMerge, color: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10' },
};

const COMPETENCIES = ['Requirement Gathering', 'BRD & FRD Writing', 'BPMN Process Flows', 'Solution Design', 'Agile / Scrum', 'UAT', 'Web & Mobile Platforms'];

export default function Hero({ onSelectCategory }) {
  const scrollToDeliverables = () => {
    const el = document.getElementById('artifacts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const jumpToCategory = (categoryId) => {
    onSelectCategory(categoryId);
    scrollToDeliverables();
  };

  return (
    <section className="relative pt-14 pb-16 md:pt-20 md:pb-20 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-cyan-500/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to Technical BA roles</span>
          </div>

          {/* Name and Role */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
            {PERSONAL_INFO.role} <span className="text-slate-400 dark:text-slate-500 font-normal">·</span> {PERSONAL_INFO.yearsExperience} years in IT
          </p>

          {/* Bio */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToDeliverables}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-105 cursor-pointer"
            >
              <span>See my work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Email me</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:scale-105"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:scale-105"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon />
            </a>
          </div>

          {/* Core Competencies */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 max-w-3xl mx-auto">
            {COMPETENCIES.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What's inside: quick links into each type of deliverable */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            What you'll find here
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CATEGORIES.filter((cat) => cat.id !== 'all').map((cat) => {
              const meta = CATEGORY_ICONS[cat.id];
              const Icon = meta.icon;
              const count = ARTIFACTS.filter((a) => a.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => jumpToCategory(cat.id)}
                  className="group text-left p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex p-2 rounded-xl ${meta.color}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">{count}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cat.name}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed hidden sm:block">
                    {cat.description}
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
