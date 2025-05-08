
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStage as DemoStageType } from '../types/demo';
import { Pause, Play, Info } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface DemoStageProps {
  stages: DemoStageType[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const DemoStage: React.FC<DemoStageProps> = ({ 
  stages, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [animateControls, setAnimateControls] = useState(false);
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

  // Auto-hide tooltip after 10 seconds
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    
    return () => clearTimeout(tooltipTimer);
  }, []);

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
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
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
      "Reduce documentation time by 70% with AI-powered medical scribe",
      "Streamline administrative workflows and prevent revenue delays",
      "Improve outcomes with automated follow-up and monitoring"
    ];
    return stageDescriptions[currentStage] || "";
  };

  return (
    <div 
      className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] lg:h-[850px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Stage name header with enhanced gradient design */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-4 sm:py-5 sm:px-6 z-40 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h3 
              className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`title-${currentStage}`}
              transition={{ duration: 0.5 }}
            >
              {getCurrentStageName()}
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/80 mt-1 max-w-md"
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
              className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 md:p-3 transition-all shadow-lg border border-white/20 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPaused ? "Play demo" : "Pause demo"}
            >
              {isPaused ? (
                <Play size={isMobile ? 16 : 22} className="text-white group-hover:text-white/90" />
              ) : (
                <Pause size={isMobile ? 16 : 22} className="text-white group-hover:text-white/90" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage}
          className="absolute inset-0 pt-16 sm:pt-20 md:pt-24" /* Adjusted padding for header */
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
      
      <motion.div 
        className="absolute bottom-2 sm:bottom-6 md:bottom-8 left-0 right-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <DemoStageIndicator 
          currentStage={currentStage}
          totalStages={stages.length}
          onStageChange={handleStageChange}
          isDemoSection={true}
        />
      </motion.div>
      
      {/* Enhanced clinical context tooltip with improved animation */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            className="absolute bottom-24 sm:bottom-28 md:bottom-32 right-2 sm:right-4 md:right-6 z-30"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.3 } }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-2 sm:px-5 sm:py-4 rounded-xl shadow-xl max-w-[200px] sm:max-w-xs flex items-start border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <Info size={isMobile ? 16 : 18} className="mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-xs sm:text-sm">Click anywhere on the animation to explore the workflow</p>
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="text-[10px] sm:text-xs opacity-80 hover:opacity-100 mt-1 sm:mt-2 underline underline-offset-2"
                >
                  Dismiss hint
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
