
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
  autoPlayInterval = 15000, // Increased interval to 15 seconds for better exploration
  isDemoSection = true
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animateControls, setAnimateControls] = useState(false);
  const [highlightInteractivity, setHighlightInteractivity] = useState(true);
  const isMobile = useIsMobile();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Effect for auto-play functionality with improved timer management - now properly cycles through all stages
  useEffect(() => {
    // Clear any existing timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    
    // Only set a new timer if autoPlay is true and not paused
    if (autoPlay && !isPaused) {
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

  // Show animation controls briefly when stage changes
  useEffect(() => {
    setAnimateControls(true);
    const controlsTimer = setTimeout(() => {
      setAnimateControls(false);
    }, 2000);
    
    return () => clearTimeout(controlsTimer);
  }, [currentStage]);

  const handleStageChange = (index: number) => {
    setCurrentStage(index);
    // Always pause on manual stage change to give user time to explore
    setIsPaused(true);
    
    // Set a longer timeout before auto-resuming
    setTimeout(() => {
      setIsPaused(false);
    }, 30000); // 30 seconds pause after manual stage change
  };
  
  // Pause autoplay when user interacts with navigation
  const handleMouseEnter = () => !isMobile && setIsPaused(true);
  const handleMouseLeave = () => !isMobile && setIsPaused(false);
  
  // Toggle pause/play manually
  const togglePause = () => setIsPaused(prev => !prev);

  // Get current stage name
  const getCurrentStageName = () => {
    const stageNames = [
      "Patient Engagement",
      "AI Medical Scribe",
      "Administrative Tasks",
      "Post-Visit Support"
    ];
    return stageNames[currentStage] || "";
  };

  // Get current stage description
  const getCurrentStageDescription = () => {
    const stageDescriptions = [
      "Automate patient communications while preserving your clinical voice",
      "Reduce documentation time by 75% with AI-powered medical scribe",
      "Streamline administrative workflows and prevent revenue delays",
      "Improve outcomes with automated follow-up and monitoring"
    ];
    return stageDescriptions[currentStage] || "";
  };

  return (
    <div 
      className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => isMobile && setIsPaused(true)}
      onTouchEnd={() => {
        // Resume autoplay after 30 seconds of inactivity on touch devices
        if (isMobile) {
          setTimeout(() => setIsPaused(false), 30000);
        }
      }}
    >
      {/* Enhanced header with stronger gradient and better visibility */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-3 sm:py-4 sm:px-4 md:py-4 md:px-6 z-40 border-b border-white/10 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h3 
              className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`title-${currentStage}`}
              transition={{ duration: 0.5 }}
            >
              {getCurrentStageName()}
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/90 mt-0.5 sm:mt-1 max-w-md line-clamp-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={`desc-${currentStage}`}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {getCurrentStageDescription()}
            </motion.p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button 
              onClick={togglePause}
              className="bg-white/30 hover:bg-white/40 rounded-full p-1.5 sm:p-2 md:p-2.5 transition-all shadow-lg border border-white/30 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPaused ? "Play demo" : "Pause demo"}
            >
              {isPaused ? (
                <Play size={isMobile ? 16 : 20} className="text-white group-hover:text-white/90" />
              ) : (
                <Pause size={isMobile ? 16 : 20} className="text-white group-hover:text-white/90" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage}
          className="absolute inset-0 pt-16 sm:pt-20"
          initial={{ opacity: 0, scale: 0.85 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ height: "calc(100% - 64px)" }}
        >
          <DemoScene
            currentStage={currentStage}
            stages={stages}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Optimized stage indicator positioning */}
      <DemoStageIndicator 
        currentStage={currentStage}
        totalStages={stages.length}
        onStageChange={handleStageChange}
        isDemoSection={isDemoSection}
      />
      
      {/* Enhanced interactive indicator - more prominent */}
      <AnimatePresence>
        {highlightInteractivity && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.5, 1, 0.5], 
              scale: [0.8, 1.1, 0.8],
              y: [0, -10, 0]
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              repeat: 3,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <div className="bg-[#143151]/95 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-xl border-2 border-[#387E89] flex items-center gap-3">
              <MousePointerClick size={isMobile ? 18 : 24} className="text-[#387E89]" />
              <span className={`font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>
                {isMobile ? "Tap icons to interact!" : "Click icons to interact!"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
