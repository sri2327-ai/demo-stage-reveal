
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
        
        // Determine current section with more precise thresholds
        const roiElement = document.querySelector('#roi-section');
        const ctaElement = document.querySelector('#cta-section');
        
        if (demoRect.top <= window.innerHeight * 0.3 && 
            demoRect.bottom >= window.innerHeight * 0.3) {
          setCurrentSection('demo');
        } else if (roiElement && 
                  roiElement.getBoundingClientRect().top <= window.innerHeight * 0.5 && 
                  roiElement.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
          setCurrentSection('roi');
        } else if (ctaElement && 
                  ctaElement.getBoundingClientRect().top <= window.innerHeight * 0.5 && 
                  ctaElement.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
          setCurrentSection('cta');
        } else if (demoRect.top > window.innerHeight * 0.3) {
          setCurrentSection('hero');
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
          <section id="roi-section">
            <ROISection />
          </section>
          
          {/* Call to Action with ID for tracking */}
          <section id="cta-section">
            <CallToAction />
          </section>
        </main>
      </div>
    </MouseTrackerProvider>
  );
};

export default Index;
