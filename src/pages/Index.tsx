
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ManifestoSection from '../components/ManifestoSection';
import RoadmapSection from '../components/RoadmapSection';
import ContractAddressSection from '../components/ContractAddressSection';
import CTASection from '../components/CTASection';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-300 to-cyan-400 relative overflow-hidden">
      <FloatingElements />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ManifestoSection />
        <RoadmapSection />
        <ContractAddressSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
