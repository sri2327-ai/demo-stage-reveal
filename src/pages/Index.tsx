
import React, { useRef, useEffect, useState } from 'react';
import { DemoStage } from '../components/DemoStage';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';
import { Pointer, MouseTrackerProvider, PointerFollower } from '../components/ui/cursor';
import { ArrowDown, Sparkles, Brain, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

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
      {/* Modern Hero Section */}
      <MouseTrackerProvider>
        <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 text-sm font-medium">AI-Powered Healthcare</span>
              </Card>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Care with <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Smarter Healthcare AI
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-700/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore how S10.AI enhances patient interactions, automates documentation, 
              and supports post-visit care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button 
                onClick={scrollToDemo}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all group"
              >
                See It in Action
                <ArrowDown className="ml-1 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                Book a Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center gap-8 mt-10 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-blue-700" />
                </div>
                <p className="font-medium text-blue-800">AI-Powered</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <p className="font-medium text-blue-800">Time-Saving</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-blue-700" />
                </div>
                <p className="font-medium text-blue-800">EHR Integrated</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-600 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.2, 
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 1.5 } 
            }}
            onClick={scrollToDemo}
          >
            <p className="font-medium mb-2 text-center">Scroll to explore</p>
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6" />
            </div>
          </motion.div>
          
          <Pointer />
        </header>
      </MouseTrackerProvider>

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
