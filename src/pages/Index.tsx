
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

  // Enhanced scroll tracking to accurately determine current section
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
        
        // Get all section elements for more accurate current section detection
        const demoElement = document.querySelector('#demo-section');
        const roiElement = document.querySelector('#roi-section');
        const ctaElement = document.querySelector('#cta-section');
        
        // Improved section detection logic with more precise thresholds
        if (demoElement && 
            demoElement.getBoundingClientRect().top <= window.innerHeight * 0.3 && 
            demoElement.getBoundingClientRect().bottom >= window.innerHeight * 0.3) {
          setCurrentSection('demo');
        } else if (roiElement && 
                  roiElement.getBoundingClientRect().top <= window.innerHeight * 0.5 && 
                  roiElement.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
          setCurrentSection('roi');
        } else if (ctaElement && 
                  ctaElement.getBoundingClientRect().top <= window.innerHeight * 0.5 && 
                  ctaElement.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
          setCurrentSection('cta');
        } else {
          setCurrentSection('hero');
        }
        
        console.log("Current section:", currentSection); // Log current section for debugging
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToDemo, currentSection]);

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <Hero currentSection={currentSection} />

        {/* Demo Section */}
        <main ref={demoRef} id="demo-section" className="w-full max-w-[98vw] mx-auto">
          <DemoSection 
            isInViewport={isInViewport} 
            hasScrolledToDemo={hasScrolledToDemo} 
            stages={demoStages}
            currentSection={currentSection}
          />
          
          {/* ROI Section with ID for tracking */}
          <section id="roi-section" className="relative">
            <ROISection />
          </section>
          
          {/* Call to Action with ID for tracking */}
          <section id="cta-section" className="relative">
            <CallToAction />
          </section>
        </main>
      </div>
    </MouseTrackerProvider>
  );
};

export default Index;
