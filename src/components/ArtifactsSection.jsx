import React, { useState, useMemo } from 'react';
import { Search, Filter, FileText, Layers, RotateCcw } from 'lucide-react';
import { ARTIFACTS, CATEGORIES } from '../data/artifacts';
import ArtifactCard from './ArtifactCard';

export default function ArtifactsSection({ selectedCategory, onSelectCategory, onOpenArtifact }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        (item.categoryName || item.category || '').toLowerCase().includes(q) ||
        (item.tools && item.tools.some(t => t.toLowerCase().includes(q))) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(q)))
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="artifacts-section" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>Portfolio Repository</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work &amp; Technical Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Real-world client deployments, BPMN 2.0 system workflows, specifications, and architecture proposals.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specs, tools, workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-14 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200 dark:border-slate-800/80">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? ARTIFACTS.length 
              : ARTIFACTS.filter(a => a.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                  isSelected ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6">
          <span>
            Showing <strong className="text-slate-900 dark:text-white font-semibold">{filteredArtifacts.length}</strong> {filteredArtifacts.length === 1 ? 'deliverable' : 'deliverables'}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium hidden sm:inline">
            Click any deliverable card to inspect embedded documents or flows
          </span>
        </div>

        {/* Artifacts Grid */}
        {filteredArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtifacts.map((artifact) => (
              <ArtifactCard
                key={artifact.id}
                artifact={artifact}
                onOpen={onOpenArtifact}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 text-sm">No deliverables match your search query or filter.</p>
            <button
              onClick={() => { onSelectCategory('all'); setSearchQuery(''); }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
