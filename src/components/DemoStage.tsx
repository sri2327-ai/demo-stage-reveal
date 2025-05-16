
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import { DemoHeader } from './DemoHeader';
import type { DemoStageProps } from '../types/demo';
import { MousePointerClick, Info } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

export const DemoStage: React.FC<DemoStageProps> = ({
  stages,
  autoPlay = true,
  autoPlayInterval = 10000,
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
  
  return (
    <div 
      ref={demoContainerRef} 
      className="relative w-full h-[760px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10" 
      role="region" 
      aria-label="Interactive clinical workflow demonstration" 
      tabIndex={0}
    >
      {/* Fixed header with improved visibility */}
      <div className="absolute top-0 left-0 right-0 z-50 shadow-md">
        <DemoHeader 
          currentStage={currentStage}
          isPaused={isPaused}
          togglePause={togglePause}
          handleStageChange={handleStageChange}
        />
      </div>
      
      {/* Content container with increased top padding to prevent header cutoff */}
      <div className="absolute inset-0 pt-[180px] pb-[100px] px-2 sm:px-4 md:px-6 overflow-y-auto">
        <div className="h-full flex flex-col">
          <div className="flex-grow relative">
            <DemoScene currentStage={currentStage} stages={stages} />
          </div>
        </div>
      </div>
      
      {/* Bottom indicator - positioned with more space */}
      <div className="absolute bottom-4 left-0 right-0 z-40">
        <DemoStageIndicator 
          currentStage={currentStage} 
          totalStages={stages.length} 
          onStageChange={handleStageChange} 
          isDemoSection={isDemoSection} 
        />
      </div>
      
      {/* Enhanced interactive indicator */}
      <AnimatePresence>
        {highlightInteractivity && (
          <motion.div 
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <div className="bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-xl border-2 border-white/20 flex items-center gap-3 max-w-[90%] w-auto mx-auto">
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              >
                <MousePointerClick size={isMobile ? 20 : 24} className="text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-semibold ${isMobile ? 'text-sm' : 'text-base'} whitespace-normal`}>
                  {isMobile ? "Tap icons to interact!" : "Click on highlighted sections to explore features"}
                </span>
                <span className="text-xs text-white/80">
                  {isMobile ? "Explore each clinical workflow" : "Interactive demonstration of clinical workflows"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility helper - screen reader only */}
      <div className="sr-only">
        <p>Clinical workflow demonstration. Use tab to navigate through interactive elements.</p>
        <p>Current stage: {stages[currentStage]?.title || `Stage ${currentStage + 1}`}</p>
        <p>Press Space or Enter to interact with selected elements.</p>
      </div>
    </div>
  );
};
