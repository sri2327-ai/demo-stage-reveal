
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
  autoPlayInterval = 5000,
  isDemoSection = true
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [animateControls, setAnimateControls] = useState(false);
  const [highlightInteractivity, setHighlightInteractivity] = useState(true);
  const isMobile = useIsMobile();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Effect for auto-play functionality with improved timer management
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

  // Auto-hide tooltip after delay based on device
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, isMobile ? 8000 : 12000); // Increased time for better visibility
    
    return () => clearTimeout(tooltipTimer);
  }, [isMobile]);

  // Hide interactivity highlight after some time
  useEffect(() => {
    const highlightTimer = setTimeout(() => {
      setHighlightInteractivity(false);
    }, isMobile ? 15000 : 20000);
    
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
      className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => isMobile && setIsPaused(true)}
      onTouchEnd={() => {
        // Resume autoplay after 15 seconds of inactivity on touch devices
        if (isMobile) {
          setTimeout(() => setIsPaused(false), 15000);
        }
      }}
    >
      {/* Stage name header with enhanced gradient design - improved for mobile */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-2 px-3 sm:py-3 sm:px-4 md:py-5 md:px-6 z-40 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h3 
              className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`title-${currentStage}`}
              transition={{ duration: 0.5 }}
            >
              {getCurrentStageName()}
            </motion.h3>
            <motion.p
              className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 mt-0.5 sm:mt-1 max-w-md line-clamp-2 sm:line-clamp-none"
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
              className="bg-white/20 hover:bg-white/30 rounded-full p-1 sm:p-1.5 md:p-2 transition-all shadow-lg border border-white/20 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPaused ? "Play demo" : "Pause demo"}
            >
              {isPaused ? (
                <Play size={isMobile ? 14 : 18} className="text-white group-hover:text-white/90" />
              ) : (
                <Pause size={isMobile ? 14 : 18} className="text-white group-hover:text-white/90" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage}
          className="absolute inset-0 pt-12 sm:pt-14 md:pt-20 lg:pt-24" /* Adjusted padding for header */
          initial={{ opacity: 0, scale: 0.85 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <DemoScene
            currentStage={currentStage}
            stages={stages}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Responsive positioning for stage indicator */}
      {isDemoSection && (
        <motion.div 
          className="absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-6 left-0 right-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <DemoStageIndicator 
            currentStage={currentStage}
            totalStages={stages.length}
            onStageChange={handleStageChange}
            isDemoSection={isDemoSection}
          />
        </motion.div>
      )}
      
      {/* Enhanced clinical context tooltip - improved for mobile and made more visible */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            className={`absolute ${isMobile ? 'top-16 sm:top-18 md:top-24' : 'top-16 sm:top-20 md:top-24'} ${isMobile ? 'right-2' : 'right-2 sm:right-4 md:right-6'} z-30`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.3 } }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div 
              className={`bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg md:rounded-xl shadow-xl ${isMobile ? 'max-w-[180px]' : 'max-w-[220px] sm:max-w-xs'} flex items-start border border-white/20 backdrop-blur-sm`}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <Info size={isMobile ? 14 : 18} className="mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <p className={`font-medium ${isMobile ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
                  {isMobile ? "Tap anywhere to explore this interactive demo" : "Click anywhere in the demo to explore features and workflows"}
                </p>
                <button 
                  onClick={() => setShowTooltip(false)}
                  className={`${isMobile ? 'text-[10px]' : 'text-xs'} opacity-80 hover:opacity-100 mt-1 underline underline-offset-2`}
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* New prominent interactive indicator */}
      <AnimatePresence>
        {highlightInteractivity && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 1, 0.2], 
              scale: [0.8, 1.1, 0.8],
              y: [0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <div className="bg-[#387E89]/90 backdrop-blur-md text-white px-4 py-3 rounded-full shadow-xl border border-white/30 flex items-center gap-3">
              <MousePointerClick size={isMobile ? 18 : 24} className="text-white" />
              <span className={`font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>
                {isMobile ? "Tap to interact!" : "Click to interact!"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Additional fixed interactivity instruction at the bottom */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 md:bottom-14 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          className="bg-[#143151]/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md border border-white/20 flex items-center gap-2"
          animate={{ 
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1
          }}
        >
          <MousePointerClick size={isMobile ? 12 : 16} className="text-white" />
          <span className="text-white text-xs sm:text-sm font-medium">
            {isMobile ? "Tap to explore" : "Click anywhere to explore"}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
