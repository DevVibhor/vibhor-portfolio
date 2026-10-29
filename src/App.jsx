import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtifactsSection from './components/ArtifactsSection';
import Footer from './components/Footer';
import ArtifactModal from './components/ArtifactModal';
import AiContextModal from './components/AiContextModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArtifact, setActiveArtifact] = useState(null);
  const [aiInfoOpen, setAiInfoOpen] = useState(false);

  // Initialize theme from localStorage or system preference (defaults to dark)
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch (e) {
      // Fallback
    }
    return 'dark';
  });

  // Keep DOM class and localStorage in sync with theme state
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // Ignore
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleOpenArtifact = (artifact) => {
    setActiveArtifact(artifact);
  };

  const handleCloseArtifact = () => {
    setActiveArtifact(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Top Sticky Navigation with Theme Toggle */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1">
        {/* Homepage Hero: Bio, Credentials & Competencies */}
        <Hero
          onSelectCategory={handleSelectCategory}
        />

        {/* Deliverables Repository: Live Platforms, BRDs, BPMN Flows, Solution Proposals */}
        <ArtifactsSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onOpenArtifact={handleOpenArtifact}
        />
      </main>

      {/* Footer & Contact */}
      <Footer
        onOpenAiInfo={() => setAiInfoOpen(true)}
      />

      {/* Interactive Artifact Viewer Modal (PDF / Diagram / Spec) */}
      {activeArtifact && (
        <ArtifactModal
          artifact={activeArtifact}
          onClose={handleCloseArtifact}
        />
      )}

      {/* Architecture & Engineering Agility Modal */}
      <AiContextModal
        isOpen={aiInfoOpen}
        onClose={() => setAiInfoOpen(false)}
      />
    </div>
  );
}
