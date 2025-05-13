
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import type { DemoStageProps } from '../types/demo';
import { Pause, Play, Info, MousePointerClick } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
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
      className="relative w-full h-[680px] bg-white rounded-2xl shadow-xl overflow-hidden border border-[#387E89]/10" 
      role="region" 
      aria-label="Interactive clinical workflow demonstration" 
      tabIndex={0}
    >
      {/* Header with tabbed navigation */}
      <div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-3 px-4 sm:py-4 sm:px-6 z-40 border-b border-white/10 shadow-lg"
      >
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <h3 
              className="font-bold text-xl sm:text-2xl md:text-3xl" 
            >
              AI Clinical Workflows Demo
            </h3>
            
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
          
          {/* Tabs for feature selection - Improved with numbers and better styling */}
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
                  className={`flex-1 flex items-center justify-center gap-2 ${
                    currentStage === index 
                      ? 'bg-white/20 text-white shadow-lg' 
                      : 'text-white/80 hover:bg-white/15 hover:text-white'
                    } 
                    data-[state=active]:bg-white/25 data-[state=active]:text-white
                    transition-all duration-200 py-2 px-3 font-medium`}
                >
                  <span className={`inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full 
                    ${currentStage === index 
                      ? 'bg-[#9b87f5] text-white' 
                      : 'bg-white/20 text-white'
                    } text-sm sm:text-base font-bold`}>
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">{stage.title}</span>
                  <span className="sm:hidden">{index === 0 ? "Patient" : index === 1 ? "Scribe" : index === 2 ? "Admin" : "Post-Visit"}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Active feature description */}
          <p 
            className="text-sm sm:text-base text-white/90 max-w-xl line-clamp-2 mb-0.5" 
          >
            {stageDescriptions[currentStage].description}
          </p>
        </div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 pt-[120px] pb-[60px]">
        <DemoScene currentStage={currentStage} stages={stages} />
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-5 left-0 right-0">
        <DemoStageIndicator 
          currentStage={currentStage} 
          totalStages={stages.length} 
          onStageChange={handleStageChange} 
          isDemoSection={isDemoSection} 
        />
      </div>
      
      {/* Interactive indicator */}
      <AnimatePresence>
        {highlightInteractivity && (
          <div 
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none" 
            aria-hidden="true"
          >
            <div className="bg-[#143151]/95 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-xl border-2 border-[#387E89] flex items-center gap-3">
              <MousePointerClick size={isMobile ? 20 : 24} className="text-[#387E89]" />
              <span className={`font-semibold ${isMobile ? 'text-sm' : 'text-base'} whitespace-nowrap`}>
                {isMobile ? "Tap icons to interact!" : "Click icons to explore features!"}
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
