import React, { useState, useMemo } from 'react';
import { Search, Filter, FileText, GitMerge, Cpu, Layout, Layers, Sparkles } from 'lucide-react';
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
        item.categoryName.toLowerCase().includes(q) ||
        item.tools.some(t => t.toLowerCase().includes(q)) ||
        item.highlights.some(h => h.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="artifacts-section" className="py-16 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Deliverables
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specs, tools, flows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800/80">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                  isSelected ? 'bg-black/20 text-white' : 'bg-slate-950 text-slate-400'
                }`}>
                  {cat.id === 'all' 
                    ? ARTIFACTS.length 
                    : ARTIFACTS.filter(a => a.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredArtifacts.length}</strong> {filteredArtifacts.length === 1 ? 'artifact' : 'artifacts'}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span className="text-orange-400 font-medium hidden sm:inline">
            Click any card to open the embedded document viewer
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
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">No artifacts found matching your current filter.</p>
            <button
              onClick={() => { onSelectCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
