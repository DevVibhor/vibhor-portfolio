import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtifactsSection from './components/ArtifactsSection';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ArtifactModal from './components/ArtifactModal';

export default function App() {
  const [activeArtifact, setActiveArtifact] = useState(null);

  // Initialize theme from localStorage or system preference (defaults to light)
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // Fallback
    }
    return 'light';
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

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <main className="flex-1">
        {/* Intro and fact sheet */}
        <Hero />

        {/* Key numbers and client logos */}
        <Highlights />

        {/* Work carousel: documents and process flows */}
        <ArtifactsSection onOpenArtifact={setActiveArtifact} paused={Boolean(activeArtifact)} />

        {/* Work history */}
        <Experience />
      </main>

      <Footer />

      {/* Document / flow viewer */}
      {activeArtifact && (
        <ArtifactModal
          key={activeArtifact.id}
          artifact={activeArtifact}
          onClose={() => setActiveArtifact(null)}
        />
      )}
    </div>
  );
}
