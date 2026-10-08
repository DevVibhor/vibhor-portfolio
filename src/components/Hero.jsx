import React from 'react';
import { PERSONAL_INFO } from '../data/artifacts';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current text-slate-100" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Hero() {
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

        {/* Profile Links: LinkedIn & GitHub */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-blue-500/60 transition-all text-sm font-semibold shadow-md group hover:-translate-y-0.5"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all text-sm font-semibold shadow-md group hover:-translate-y-0.5"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
