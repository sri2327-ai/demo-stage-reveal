
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStageProps } from '../types/demo';
import { Pause, Play, Info, MousePointerClick } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export const DemoStage: React.FC<DemoStageProps> = ({
  stages,
  autoPlay = true,
  autoPlayInterval = 10000, // 10 seconds interval for meaningful exploration
  isDemoSection = true
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [highlightInteractivity, setHighlightInteractivity] = useState(true);
  const isMobile = useIsMobile();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const demoContainerRef = useRef<HTMLDivElement>(null);

  // Log isDemoSection prop to check if it's passed correctly
  useEffect(() => {
    console.log("DemoStage - isDemoSection prop:", isDemoSection);
  }, [isDemoSection]);

  // Track user interactions on the container
  useEffect(() => {
    const container = demoContainerRef.current;
    if (!container) return;
    const handleInteraction = () => {
      if (!userInteracted) {
        console.log("DemoStage - User interaction detected, pausing autoplay");
        setUserInteracted(true);
        setIsPaused(true);

        // Clear any previous inactivity timer
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }

        // Set inactivity timer to resume autoplay after 10 seconds
        inactivityTimerRef.current = setTimeout(() => {
          console.log("DemoStage - User inactivity detected, resuming autoplay");
          setUserInteracted(false);
          setIsPaused(false);
        }, 10000);
      }
    };

    // Add all relevant event listeners for comprehensive interaction detection
    container.addEventListener('click', handleInteraction);
    container.addEventListener('touchstart', handleInteraction);
    container.addEventListener('mousemove', handleInteraction);
    container.addEventListener('keydown', handleInteraction);
    container.addEventListener('wheel', handleInteraction);
    return () => {
      // Clean up all event listeners
      container.removeEventListener('click', handleInteraction);
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('mousemove', handleInteraction);
      container.removeEventListener('keydown', handleInteraction);
      container.removeEventListener('wheel', handleInteraction);

      // Clear timers
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [userInteracted]);

  // Effect for auto-play functionality with improved timer management
  useEffect(() => {
    // Clear any existing timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    // Only set auto-advance if autoPlay is true and not paused
    if (autoPlay && !isPaused) {
      console.log("DemoStage - Starting autoplay");
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentStage(prev => prev === stages.length - 1 ? 0 : prev + 1);
      }, autoPlayInterval);
    }

    // Cleanup timer on unmount
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, stages.length, isPaused]);

  // Hide interactivity highlight after some time
  useEffect(() => {
    const highlightTimer = setTimeout(() => {
      setHighlightInteractivity(false);
    }, isMobile ? 15000 : 8000);
    return () => clearTimeout(highlightTimer);
  }, [isMobile]);

  const handleStageChange = (index: number) => {
    console.log("DemoStage - Stage changed to:", index);
    setCurrentStage(index);

    // Pause on manual stage change to give user time to explore
    setUserInteracted(true);
    setIsPaused(true);

    // Clear any existing inactivity timer
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Set new inactivity timer
    inactivityTimerRef.current = setTimeout(() => {
      console.log("DemoStage - User inactivity after stage change, resuming autoplay");
      setUserInteracted(false);
      setIsPaused(false);
    }, 30000); // 30 seconds pause after manual stage change
  };

  // Toggle pause/play manually with enhanced feedback
  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering container interaction
    setIsPaused(prev => !prev);

    // Provide haptic feedback for mobile if available
    if (navigator.vibrate && isMobile) {
      navigator.vibrate(50);
    }
  };

  // Get stage descriptions for tabs
  const getStageDescriptions = () => {
    return [{
      title: "Patient Engagement",
      description: "AI patient communication hub that preserves your clinical voice and reduces administrative burden"
    }, {
      title: "AI Medical Scribe",
      description: "Reduce documentation time by 75% with AI-powered medical scribe that integrates with your EHR"
    }, {
      title: "Clinical Admin",
      description: "Automate administrative workflows to prevent revenue delays and reduce staff workload"
    }, {
      title: "Post-Visit Care",
      description: "Improve outcomes with automated follow-up and continuous monitoring between visits"
    }];
  };

  // Determine ARIA label for play/pause button
  const getPlayPauseAriaLabel = () => {
    return isPaused ? "Play demo slideshow" : "Pause demo slideshow";
  };
  
  const stageDescriptions = getStageDescriptions();
  
  return (
    <div 
      ref={demoContainerRef} 
      className="relative w-full h-[650px] sm:h-[720px] md:h-[820px] lg:h-[880px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10" 
      role="region" 
      aria-label="Interactive clinical workflow demonstration" 
      tabIndex={0}
    >
      {/* Header with tabbed navigation - adjusted height and padding */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-4 sm:py-4 sm:px-6 z-40 border-b border-white/10 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <motion.h3 
              className="font-bold text-xl sm:text-2xl md:text-3xl" 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI Clinical Workflows Demo
            </motion.h3>
            
            <button 
              onClick={togglePause} 
              className="bg-white/30 hover:bg-white/40 rounded-full p-2 sm:p-2.5 md:p-3 transition-all shadow-lg border border-white/30 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50" 
              aria-label={getPlayPauseAriaLabel()}
            >
              {isPaused ? 
                <Play size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" /> : 
                <Pause size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" />
              }
            </button>
          </div>
          
          {/* Tabs for feature selection - adjusted spacing */}
          <Tabs 
            value={currentStage.toString()} 
            onValueChange={value => handleStageChange(parseInt(value))} 
            className="w-full"
          >
            <TabsList className="w-full bg-white/10 p-1 rounded-md border border-white/20">
              {stageDescriptions.map((stage, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()} 
                  className={`flex-1 ${currentStage === index ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'} 
                    data-[state=active]:bg-white/25 data-[state=active]:text-white`}
                >
                  <span className="hidden sm:inline">{stage.title}</span>
                  <span className="sm:hidden">{index === 0 ? "Patient" : index === 1 ? "Scribe" : index === 2 ? "Admin" : "Post-Visit"}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Active feature description - made more compact */}
          <motion.p 
            className="text-sm sm:text-base text-white/90 max-w-xl line-clamp-2 mb-0.5" 
            key={`desc-${currentStage}`} 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stageDescriptions[currentStage].description}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Content container with adjusted padding */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage} 
          className="absolute inset-0 pt-[120px] pb-[60px]" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <DemoScene currentStage={currentStage} stages={stages} />
        </motion.div>
      </AnimatePresence>
      
      {/* Bottom indicator with better positioning */}
      <div className="absolute bottom-4 left-0 right-0">
        <DemoStageIndicator 
          currentStage={currentStage} 
          totalStages={stages.length} 
          onStageChange={handleStageChange} 
          isDemoSection={isDemoSection} 
        />
      </div>
      
      {/* Interactive indicator with better positioning */}
      <AnimatePresence>
        {highlightInteractivity && (
          <motion.div 
            className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.7, 1, 0.7], 
              scale: [0.9, 1.05, 0.9],
              y: [0, -10, 0]
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ repeat: 3, duration: 2, ease: "easeInOut" }}
            aria-hidden="true" // Hide from screen readers as this is just a visual cue
          >
            <div className="bg-[#143151]/95 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-xl border-2 border-[#387E89] flex items-center gap-3">
              <MousePointerClick size={isMobile ? 20 : 24} className="text-[#387E89]" />
              <span className={`font-semibold ${isMobile ? 'text-sm' : 'text-base'} whitespace-nowrap`}>
                {isMobile ? "Tap icons to interact!" : "Click icons to explore features!"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
