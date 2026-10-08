import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OrangeMantraCallout from './components/OrangeMantraCallout';
import ArtifactsSection from './components/ArtifactsSection';
import Footer from './components/Footer';
import ArtifactModal from './components/ArtifactModal';
import AiContextModal from './components/AiContextModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArtifact, setActiveArtifact] = useState(null);
  const [aiInfoOpen, setAiInfoOpen] = useState(false);

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
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Sticky Header with navigation & OrangeMantra badge */}
      <Header
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onOpenAiInfo={() => setAiInfoOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectCategory={handleSelectCategory}
          onOpenAiInfo={() => setAiInfoOpen(true)}
        />

        {/* Personalized OrangeMantra Interview Section */}
        <OrangeMantraCallout
          onOpenDetails={() => setAiInfoOpen(true)}
        />

        {/* Evaluated Deliverables / Artifacts Section */}
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

      {/* AI Prototyping & Technical Context Modal */}
      <AiContextModal
        isOpen={aiInfoOpen}
        onClose={() => setAiInfoOpen(false)}
      />
    </div>
  );
}
