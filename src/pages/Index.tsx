
import React, { useRef, useEffect, useState } from 'react';
import { DemoStage } from '../components/DemoStage';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';
import { Pointer, MouseTrackerProvider, PointerFollower } from '../components/ui/cursor';
import { ArrowDown, Sparkles, Brain, Zap, Clock, Hospital, Users, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ROISection } from '../components/ROISection';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [hasScrolledToDemo, setHasScrolledToDemo] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const isMobile = useIsMobile();

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
      {/* Hero Section with Clinical Focus */}
      <MouseTrackerProvider>
        <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 inline-flex items-center gap-2 mb-6">
                <Hospital className="w-4 h-4 text-[#143151]" />
                <span className="text-[#143151] text-sm font-medium">Designed for Healthcare Providers</span>
              </Card>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enhance Your Clinical Practice With <br />
              <span className="bg-gradient-to-r from-[#143151] to-[#387E89] text-transparent bg-clip-text">
                Intelligent Healthcare AI
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-blue-700/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              See how S10.AI works alongside your clinical workflow to reduce documentation burden,
              streamline patient interactions, and improve care continuity.
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
                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                Explore Clinical Workflows
                <ArrowDown className="ml-1 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto"
              >
                Schedule a Personalized Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center items-center gap-4 md:gap-8 mt-10 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <p className="font-medium text-sm md:text-base text-[#143151]">Save 2+ hours daily</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <p className="font-medium text-sm md:text-base text-[#143151]">Higher satisfaction</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 md:p-3 rounded-full">
                  <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <p className="font-medium text-sm md:text-base text-[#143151]">Seamless EHR integration</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#143151] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.2, 
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 1.5 } 
            }}
            onClick={scrollToDemo}
          >
            <p className="font-medium mb-2 text-center">See S10.AI in action</p>
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6" />
            </div>
          </motion.div>
          
          <Pointer>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4.36 1.33331L18.6667 9.18665L11.7067 10.96L9.18667 18.6666L4.36 1.33331Z" 
                    fill="url(#cursor-gradient)" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="cursor-gradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#143151" />
                      <stop offset="100%" stopColor="#387E89" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-xs font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mt-1">You</span>
            </div>
          </Pointer>
        </header>
      </MouseTrackerProvider>

      {/* Demo Section with Enhanced Clinical Context */}
      <main ref={demoRef}>
        <div className="px-4 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold text-[#143151] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
                transition={{ duration: 0.6 }}
              >
                How S10.AI Transforms Your Clinical Workflow
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Interactive demonstration showing key clinical workflows enhanced by S10.AI
              </motion.p>
            </div>
            
            {isInViewport && (
              <div className="flex justify-center">
                <DemoStage 
                  stages={demoStages} 
                  autoPlay={hasScrolledToDemo} 
                />
              </div>
            )}
          </div>
        </div>
        
        {/* ROI Section */}
        <ROISection />
        
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-4">Ready to transform your practice?</h2>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">
              Join thousands of clinicians already using S10.AI to reduce administrative burden and improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size={isMobile ? "default" : "lg"}
                className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Start 30-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"}
                className="border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 w-full sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
