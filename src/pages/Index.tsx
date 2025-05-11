
import React, { useRef, useEffect, useState } from 'react';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { DemoSection } from '../components/DemoSection';
import { ROISection } from '../components/ROISection';
import { CallToAction } from '../components/CallToAction';
import { MouseTrackerProvider } from '../components/ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [hasScrolledToDemo, setHasScrolledToDemo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const isMobile = useIsMobile();

  // Track if user has scrolled to the demo section and monitor current section
  useEffect(() => {
    const handleScroll = () => {
      if (demoRef.current) {
        const demoRect = demoRef.current.getBoundingClientRect();
        // Make demo visible earlier for better user experience
        const isDemoVisible = demoRect.top <= window.innerHeight * 0.6;
        setIsInViewport(isDemoVisible);
        
        if (isDemoVisible && !hasScrolledToDemo) {
          setHasScrolledToDemo(true);
        }
        
        // Determine current section with improved thresholds
        if (demoRect.top <= window.innerHeight * 0.3 && 
            demoRect.bottom >= window.innerHeight * 0.3) {
          setCurrentSection('demo');
        } else if (demoRect.top > window.innerHeight * 0.3) {
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
    <MouseTrackerProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section with Clinical Focus */}
        <Hero currentSection={currentSection} />

        {/* Demo Section with Enhanced Clinical Context - give it more space */}
        <main ref={demoRef} id="demo-section" className="w-full max-w-[98vw] mx-auto">
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
    </MouseTrackerProvider>
  );
};

export default Index;
