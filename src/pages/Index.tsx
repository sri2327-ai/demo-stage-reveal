
import React, { useRef, useEffect, useState } from 'react';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { DemoSection } from '../components/DemoSection';
import { ROISection } from '../components/ROISection';
import { CallToAction } from '../components/CallToAction';
import { MouseTrackerProvider, Pointer, PointerFollower } from '../components/ui/cursor';
import { MousePointer2 } from 'lucide-react';
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
        {/* Global cursor for the entire page - desktop only */}
        {!isMobile && (
          <Pointer>
            <div className="flex flex-col items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" className="filter drop-shadow-md">
                <defs>
                  <linearGradient id="cursor-gradient-global" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#143151" />
                    <stop offset="100%" stopColor="#387E89" />
                  </linearGradient>
                </defs>
                <MousePointer2 size={32} className="stroke-white" style={{
                  fill: "url(#cursor-gradient-global)"
                }} />
              </svg>
              <span className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm">
                You
              </span>
            </div>
          </Pointer>
        )}
        
        {/* Hero Section with Clinical Focus */}
        <Hero currentSection={currentSection} />

        {/* Demo Section with Enhanced Clinical Context */}
        <main ref={demoRef} id="demo-section" className="w-full max-w-[95vw] mx-auto">
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
