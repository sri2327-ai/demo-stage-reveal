
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoStageIndicator } from './DemoStageIndicator';
import { DemoScene } from './DemoScene';
import { DemoHeader } from './DemoHeader';
import { FloatingAnimationDescription } from './FloatingAnimationDescription';
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
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [highlightInteractivity, setHighlightInteractivity] = useState(true);
  const isMobile = useIsMobile();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const demoContainerRef = useRef<HTMLDivElement>(null);
  const subStepTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Get labels and titles for the current stage
  const getLabelsForStage = (stageIndex: number) => {
    switch (stageIndex) {
      case 0: // Patient Engagement
        return {
          0: "AI agent seamlessly handles patient calls and messages while preserving your clinical tone and practice branding",
          1: "AI agent integrates directly with your existing scheduling system to reduce no-shows by 35%",
          2: "Smart intake forms adjust based on visit type, pre-populating from your EHR to save patient time",
          3: "Customized confirmations match your clinic's communication style and reduce cancellations by 27%",
          4: "AI agent makes personalized confirmation calls with natural conversation flow and automatic EHR updates"
        };
      case 1: // AI Medical Scribe
        return {
          0: "Secure authentication that meets healthcare compliance standards including HIPAA and HITRUST",
          1: "Saves 10+ minutes per patient by automatically importing schedule data from any popular EHR",
          2: "Specialty-specific templates include proper medical terminology and coding guidelines",
          3: "99.2% accurate multilingual transcription trained on 500,000+ hours of medical conversations",
          4: "Generates complete clinical notes with EHR-ready formatting and proper medical coding",
          5: "One-click synchronization with your preferred EHR system, preserving all custom field mappings"
        };
      case 2: // Admin Tasks
        return {
          0: "Reduces prescription processing time by 87% while maintaining complete regulatory compliance",
          1: "Ensures patients receive standardized clinical summaries with personalized care instructions",
          2: "Reduces insurance-related delays by 65% through continuous automated verification processes"
        };
      case 3: // Post-Visit Support
        return {
          0: "AI agent increases medication adherence by 40% through personalized reminder scheduling",
          1: "Enables early intervention by AI agent monitoring patient-reported outcomes between visits",
          2: "AI-powered responses to routine questions, verified by clinical research and best practices",
          3: "Reduces readmissions by 32% through automated AI monitoring and threshold alerts",
          4: "AI agent collects and analyzes patient feedback to help improve practice operations and clinical outcomes"
        };
      default:
        return {};
    }
  };

  const getTitlesForStage = (stageIndex: number) => {
    switch (stageIndex) {
      case 0: // Patient Engagement
        return {
          0: "Patient Messaging",
          1: "Appointment Scheduling",
          2: "Smart Intake Forms",
          3: "Automated Reminders",
          4: "AI Appointment Calls"
        };
      case 1: // AI Medical Scribe
        return {
          0: "Secure Authentication",
          1: "EHR Integration",
          2: "Specialty Templates",
          3: "Medical Transcription",
          4: "Note Generation",
          5: "EHR Synchronization"
        };
      case 2: // Admin Tasks
        return {
          0: "Prescription Management",
          1: "Clinical Summaries",
          2: "Insurance Verification"
        };
      case 3: // Post-Visit Support
        return {
          0: "Medication Management",
          1: "Patient Monitoring",
          2: "AI Support",
          3: "Readmission Prevention",
          4: "Feedback Analysis"
        };
      default:
        return {};
    }
  };

  const getMaxStepsForStage = (stageIndex: number) => {
    switch (stageIndex) {
      case 0: return 5; // Patient Engagement
      case 1: return 6; // AI Medical Scribe
      case 2: return 3; // Admin Tasks - Fixed: now correctly shows 3
      case 3: return 5; // Post-Visit Support
      default: return 5;
    }
  };

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

  // Effect for auto-play functionality to handle both stage changes and substep changes
  useEffect(() => {
    // Clear any existing timers
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    if (subStepTimerRef.current) {
      clearTimeout(subStepTimerRef.current);
      subStepTimerRef.current = null;
    }

    // Only set auto-advance if autoPlay is true and not paused
    if (autoPlay && !isPaused) {
      console.log("DemoStage - Starting autoplay");
      
      // Set timer for substep navigation
      const subStepInterval = Math.min(autoPlayInterval / 2, 5000); // Half the main interval or 5 seconds max
      
      // Auto-cycle through substeps
      subStepTimerRef.current = setInterval(() => {
        // Get max steps for current stage
        const maxSteps = getMaxStepsForStage(currentStage);
        
        // Check if we need to move to the next substep or next stage
        if (currentSubStep < maxSteps - 1) {
          // Move to next substep
          setCurrentSubStep(prev => prev + 1);
        } else {
          // We're at the last substep, prepare to move to next stage
          setCurrentSubStep(0);
          setCurrentStage(prev => prev === stages.length - 1 ? 0 : prev + 1);
        }
      }, subStepInterval);
    }

    // Cleanup timer on unmount
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      if (subStepTimerRef.current) {
        clearInterval(subStepTimerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, stages.length, isPaused, currentStage, currentSubStep]);

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
    setCurrentSubStep(0);

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

  // Handle substep changes from DemoScene
  const handleSubStepChange = (step: number) => {
    setCurrentSubStep(step);
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
      
      {/* Animation content container with maximum space for animation */}
      <div className="absolute inset-0 pt-[180px] pb-[230px] px-2 sm:px-4 md:px-6 overflow-y-auto">
        <div className="h-full flex flex-col">
          <div className="flex-grow relative">
            <DemoScene 
              currentStage={currentStage} 
              stages={stages} 
              subStep={currentSubStep}
              onSubStepChange={handleSubStepChange}
            />
          </div>
        </div>
      </div>
      
      {/* Floating description positioned lower to avoid overlap with animations */}
      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 w-full max-w-[94%] sm:max-w-[90%] md:max-w-[85%] pointer-events-auto">
        <FloatingAnimationDescription
          currentStage={currentStage}
          subStep={currentSubStep}
          labels={getLabelsForStage(currentStage)}
          labelTitles={getTitlesForStage(currentStage)}
          maxSteps={getMaxStepsForStage(currentStage)}
          onElementClick={handleSubStepChange}
        />
      </div>
      
      {/* Bottom indicator - positioned with more space and lower z-index than floating description */}
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
