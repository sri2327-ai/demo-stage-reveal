
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
  const roiRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [hasScrolledToDemo, setHasScrolledToDemo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const isMobile = useIsMobile();

  // Enhanced scroll tracking with IntersectionObserver for more accurate section detection
  useEffect(() => {
    // Create observers for each major section
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // 40% of the section must be visible to trigger
    };

    const demoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Demo section is visible");
          setIsInViewport(true);
          setCurrentSection('demo');
          setHasScrolledToDemo(true);
        } else if (currentSection === 'demo') {
          // Only update if demo was the current section
          setIsInViewport(false);
        }
      });
    }, observerOptions);
    
    const roiObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("ROI section is visible");
          setCurrentSection('roi');
        }
      });
    }, observerOptions);
    
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("CTA section is visible");
          setCurrentSection('cta');
        }
      });
    }, observerOptions);

    // Track hero section by default
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Hero section is visible");
          setCurrentSection('hero');
        }
      });
    }, {...observerOptions, threshold: 0.6}); // Higher threshold for hero

    // Observe sections
    if (demoRef.current) demoObserver.observe(demoRef.current);
    if (roiRef.current) roiObserver.observe(roiRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    
    const heroSection = document.querySelector('#hero-section');
    if (heroSection) heroObserver.observe(heroSection);
    
    // Log initial section
    console.log("Initial section set to:", currentSection);
    
    return () => {
      if (demoRef.current) demoObserver.unobserve(demoRef.current);
      if (roiRef.current) roiObserver.unobserve(roiRef.current);
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
      if (heroSection) heroObserver.unobserve(heroSection);
    };
  }, [currentSection]);

  return (
    <MouseTrackerProvider disableCursor={false}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section with ID for tracking */}
        <section id="hero-section" className="relative w-full">
          <Hero currentSection={currentSection} />
        </section>

        {/* Demo Section - Now with ref for tracking */}
        <main ref={demoRef} id="demo-section" className="w-full max-w-[98vw] mx-auto">
          <DemoSection 
            isInViewport={isInViewport} 
            hasScrolledToDemo={hasScrolledToDemo} 
            stages={demoStages}
            currentSection={currentSection}
          />
          
          {/* ROI Section with ref for tracking */}
          <section ref={roiRef} id="roi-section" className="relative">
            <ROISection />
          </section>
          
          {/* Call to Action with ref for tracking */}
          <section ref={ctaRef} id="cta-section" className="relative">
            <CallToAction />
          </section>
        </main>
        
        {/* Debug indicator for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-0 right-0 bg-black/70 text-white text-xs p-1 z-50">
            Section: {currentSection}
          </div>
        )}
      </div>
    </MouseTrackerProvider>
  );
};

export default Index;
