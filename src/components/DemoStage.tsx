
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStageProps } from '../types/demo';
import { Pause, Play, Info, MousePointerClick } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
        setCurrentStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
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

  // Get current stage name with more descriptive clinical terms
  const getCurrentStageName = () => {
    const stageNames = [
      "Patient Engagement System",
      "AI Medical Scribe",
      "Clinical Administration",
      "Post-Visit Care Management"
    ];
    return stageNames[currentStage] || "";
  };

  // Get current stage description with more clinician-focused benefits
  const getCurrentStageDescription = () => {
    const stageDescriptions = [
      "Streamline patient communications while maintaining your clinical voice and reducing administrative burden",
      "Reduce documentation time by 75% with AI-powered medical scribe that integrates with your EHR",
      "Automate administrative workflows to prevent revenue delays and reduce staff workload",
      "Improve outcomes with automated follow-up and continuous patient monitoring between visits"
    ];
    return stageDescriptions[currentStage] || "";
  };

  // Determine ARIA label for play/pause button
  const getPlayPauseAriaLabel = () => {
    return isPaused ? "Play demo slideshow" : "Pause demo slideshow";
  };

  return (
    <div 
      ref={demoContainerRef}
      className="relative w-full h-[540px] sm:h-[620px] md:h-[720px] lg:h-[780px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10"
      role="region"
      aria-label="Interactive clinical workflow demonstration"
      tabIndex={0}
    >
      {/* Enhanced header with better typography and contrast */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-4 px-4 sm:py-5 sm:px-6 z-40 border-b border-white/10 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h3 
              className="font-bold text-xl sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`title-${currentStage}`}
              transition={{ duration: 0.5 }}
            >
              {getCurrentStageName()}
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/90 mt-1 sm:mt-2 max-w-xl line-clamp-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={`desc-${currentStage}`}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {getCurrentStageDescription()}
            </motion.p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={togglePause}
              className="bg-white/30 hover:bg-white/40 rounded-full p-2 sm:p-2.5 md:p-3 transition-all shadow-lg border border-white/30 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={getPlayPauseAriaLabel()}
            >
              {isPaused ? (
                <Play size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" />
              ) : (
                <Pause size={isMobile ? 18 : 22} className="text-white group-hover:text-white/90" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage}
          className="absolute inset-0 pt-[80px] sm:pt-[88px] md:pt-[96px]"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ height: "calc(100% - 80px)" }}
        >
          <DemoScene
            currentStage={currentStage}
            stages={stages}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Pass the isDemoSection prop to DemoStageIndicator with console logs for debugging */}
      <DemoStageIndicator 
        currentStage={currentStage}
        totalStages={stages.length}
        onStageChange={handleStageChange}
        isDemoSection={isDemoSection}
      />
      
      {/* Enhanced interactive indicator - more prominent and accessible */}
      <AnimatePresence>
        {highlightInteractivity && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.7, 1, 0.7], 
              scale: [0.9, 1.05, 0.9],
              y: [0, -10, 0]
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              repeat: 3,
              duration: 2,
              ease: "easeInOut"
            }}
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
