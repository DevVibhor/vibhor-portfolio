import React, { useState } from 'react';
import { FileText, GitMerge, Cpu, Layout, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Header({ activeCategory, onSelectCategory, onOpenAiInfo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'BRDs', category: 'brd', icon: FileText },
    { label: 'Process Flow', category: 'flow', icon: GitMerge },
    { label: 'Solution Proposal', category: 'solution', icon: Cpu },
    { label: 'Website Designs', category: 'design', icon: Layout },
  ];

  const handleNavClick = (item) => {
    if (item.category) {
      onSelectCategory(item.category);
      const el = document.getElementById('artifacts-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id) {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top Personalized Bar for OrangeMantra */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span>Prepared Exclusively for <strong>{PERSONAL_INFO.targetCompany}</strong> • {PERSONAL_INFO.targetRole} Assessment Showcase</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30">
                    Portfolio
                  </span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {PERSONAL_INFO.targetRole}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = item.category && activeCategory === item.category;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-orange-400" />}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: AI Badge & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAiInfo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-colors cursor-pointer"
              title="Click to view details on AI-assisted development"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-spin-slow" />
              <span>Coded with AI</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 hover:from-orange-600 hover:to-amber-700 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 backdrop-blur-lg">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = item.category && activeCategory === item.category;
            return (
              <button
                key={idx}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-orange-400" />}
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAiInfo();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-orange-300 border border-orange-500/30"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Built with AI in React Details</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-orange-500 text-white"
            >
              Contact Vibhor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
