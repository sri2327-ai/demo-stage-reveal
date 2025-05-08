
import React, { useRef, useEffect, useState } from 'react';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { DemoSection } from '../components/DemoSection';
import { ROISection } from '../components/ROISection';
import { CallToAction } from '../components/CallToAction';

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [hasScrolledToDemo, setHasScrolledToDemo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Scroll to demo section
  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track if user has scrolled to the demo section and monitor current section
  useEffect(() => {
    const handleScroll = () => {
      if (demoRef.current) {
        const demoRect = demoRef.current.getBoundingClientRect();
        const isDemoVisible = demoRect.top <= window.innerHeight * 0.5;
        setIsInViewport(isDemoVisible);
        
        if (isDemoVisible && !hasScrolledToDemo) {
          setHasScrolledToDemo(true);
        }
        
        // Determine current section
        if (demoRect.top <= window.innerHeight * 0.5 && 
            demoRect.bottom >= window.innerHeight * 0.5) {
          setCurrentSection('demo');
        } else if (demoRect.top > window.innerHeight * 0.5) {
          setCurrentSection('hero');
        } else {
          setCurrentSection('roi');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToDemo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Clinical Focus */}
      <Hero scrollToDemo={scrollToDemo} currentSection={currentSection} />

      {/* Demo Section with Enhanced Clinical Context */}
      <main ref={demoRef} id="demo-section">
        <DemoSection 
          isInViewport={isInViewport} 
          hasScrolledToDemo={hasScrolledToDemo} 
          stages={demoStages}
          currentSection={currentSection}
        />
        
        {/* ROI Section */}
        <ROISection />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
