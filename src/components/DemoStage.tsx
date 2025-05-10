
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStageProps } from '../types/demo';
import { Pause, Play } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

export const DemoStage: React.FC<DemoStageProps> = ({ 
  stages, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  isDemoSection = true
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  return (
    <div 
      className="relative w-full h-[450px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => isMobile && setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 15000);
      }}
    >
      {/* New positioning for stage indicators at the top */}
      {isDemoSection && (
        <motion.div 
          className="absolute top-0 left-0 right-0 z-40 py-3 sm:py-4 bg-gradient-to-r from-[#143151] to-[#387E89] border-b border-white/10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-between items-center px-3 sm:px-4 md:px-6 mb-2 sm:mb-3">
            <motion.h3 
              className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`title-${currentStage}`}
              transition={{ duration: 0.5 }}
            >
              {getCurrentStageName()}
            </motion.h3>
            
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
          
          <DemoStageIndicator 
            currentStage={currentStage}
            totalStages={stages.length}
            onStageChange={handleStageChange}
            isDemoSection={isDemoSection}
          />
        </motion.div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStage}
          className="absolute inset-0 pt-24 sm:pt-32" /* Increased padding for header + tabs */
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
    </div>
  );
};
