
import React, { useRef, useEffect, useState } from 'react';
import { DemoStage } from '../components/DemoStage';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [hasScrolledToDemo, setHasScrolledToDemo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  // Scroll to demo section
  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track if user has scrolled to the demo section
  useEffect(() => {
    const handleScroll = () => {
      if (demoRef.current) {
        const rect = demoRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.5;
        setIsInViewport(isVisible);
        
        if (isVisible && !hasScrolledToDemo) {
          setHasScrolledToDemo(true);
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
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center pt-16 pb-10 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience the Future of Clinical Automation
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-700 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From patient engagement to real-time documentation and post-visit support—see how S10.AI transforms care delivery, end-to-end.
          </motion.p>
          
          <motion.div
            className="animate-bounce flex flex-col items-center mt-10 text-blue-600 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={scrollToDemo}
          >
            <p className="font-medium mb-2">Scroll to begin the journey</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </div>
      </header>

      {/* Demo Section - Only active after scrolling */}
      <main className="px-4 pb-20 min-h-screen" ref={demoRef}>
        <div className="max-w-5xl mx-auto">
          {isInViewport && (
            <DemoStage 
              stages={demoStages} 
              autoPlay={hasScrolledToDemo} 
            />
          )}
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to get started?</h2>
            <p className="text-gray-700 mb-6 max-w-lg mx-auto">
              Join thousands of healthcare teams already using S10.AI to improve their workflow and patient care.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p>© 2025 S10.AI Clinical Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
