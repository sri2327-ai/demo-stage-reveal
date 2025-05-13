
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Info } from 'lucide-react';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with detailed information optimized for clinicians
const labelDescriptions: Record<string, string> = {
  "Authentication": "Secure HIPAA-compliant login with biometric options and SSO integration that saves 45 seconds per session. Compatible with hospital credential systems and 2FA.",
  "Patient Schedule": "Direct EHR integration displays patient demographics, visit context, and flags high-priority clinical information. Color-coded urgency indicators help prioritize care.",
  "Templates": "Specialty-specific templates with CPT/ICD-10 coding support and personalized sections aligned with your clinical workflow. Includes departmental protocols and billing requirements.",
  "Recording": "Multi-speaker clinical transcription with 98.7% accuracy that captures medical terminology, preserves context, and distinguishes between provider and patient voices.",
  "Generate Documentation": "Creates complete SOAP notes with automatically suggested billing codes based on medical decision-making complexity, saving 8-12 minutes per patient encounter.",
  "EHR Integration": "Bi-directional synchronization with major EHR systems including Epic, Cerner, and Athena with field mapping preservation and custom template support."
};

export const FigmaAIMedicalScribeInteractive: React.FC<FigmaAIMedicalScribeInteractiveProps> = ({
  subStep,
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-show label for current subStep
  useEffect(() => {
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation", "EHR Integration"];
    if (subStep >= 0 && subStep < stepLabels.length) {
      setActiveLabel(stepLabels[subStep]);
    }
    
    console.log("MedicalScribe - Current step changed to:", subStep);
  }, [subStep]);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 6);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 6) % 6);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '6') {
        // Number keys 1-6 for direct navigation
        onElementClick(parseInt(e.key) - 1);
        e.preventDefault();
      }
    };
    
    if (isInteractive) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInteractive, onElementClick, subStep]);
  
  // Get the current label for either hover state or active step
  const getCurrentLabel = () => {
    if (activeLabel) {
      return {
        title: activeLabel,
        description: labelDescriptions[activeLabel]
      };
    }
    
    // Fallback to current substep
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation", "EHR Integration"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Handle click on specific UI elements (icons) with better event tracking
  const handleIconClick = (step: number) => {
    console.log("MedicalScribe - Icon clicked for step:", step);
    if (onElementClick) {
      // Track interaction time for autoplay management
      setLastInteraction(Date.now());
      // Directly navigate to clicked step
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area with better feedback
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 6;
      console.log("MedicalScribe - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto h-full" 
      role="region" 
      aria-label="AI Medical Scribe Interactive Demo"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="relative h-full flex flex-col items-center justify-center py-6"> 
            <motion.div 
              className="relative w-full h-full flex-1 flex items-center justify-center cursor-pointer" 
              onClick={handleIllustrationClick}
              role="button"
              aria-label="Navigate to next feature"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIllustrationClick();
                }
              }}
              // Removed hover scaling animation that caused inconsistency
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full flex items-center justify-center scale-110 sm:scale-120 md:scale-130 lg:scale-140">
                <FigmaAIMedicalScribeIllustration
                  subStep={subStep}
                  transcriptionActive={transcriptionActive}
                  noteGeneration={noteGeneration}
                  hideTitle={true}
                  onElementClick={handleIconClick}
                  isInteractive={true}
                />
              </div>
            </motion.div>
            
            {/* Redesigned floating label with improved clinical focus and accessibility */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute bottom-6 left-0 right-0 w-full z-30 px-4 sm:px-6 lg:px-8" 
                initial={clinicalAnimations.cardAppear.initial}
                animate={clinicalAnimations.cardAppear.animate}
                exit={clinicalAnimations.cardAppear.exit}
                transition={{ duration: accessibilityHelpers.getDuration(0.5) }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <motion.span 
                      className="inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-400"
                      animate={{ 
                        opacity: [1, 0.5, 1],
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    />
                    <h3 className="font-bold text-sm sm:text-base md:text-lg truncate">{getCurrentLabel().title}</h3>
                  </div>
                  <div className="mt-1 text-xs sm:text-sm md:text-base text-white/95 line-clamp-3 sm:line-clamp-2">
                    {getCurrentLabel().description}
                  </div>
                  
                  <div className="mt-2 text-xs text-white/80 flex items-center">
                    <Info size={isMobile ? 12 : 14} className="mr-1.5 text-white/70" />
                    <span className="line-clamp-1">
                      {isMobile ? "Tap icons to explore features" : "Click icons to explore each feature or use arrow keys"}
                    </span>
                  </div>
                  
                  {/* Step indicator dots */}
                  <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2, 3, 4, 5].map(step => (
                        <motion.button
                          key={step}
                          className={`w-2 h-2 rounded-full ${subStep === step ? 'bg-white' : 'bg-white/40'}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onElementClick) onElementClick(step);
                          }}
                          aria-label={`Go to ${["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation", "EHR Integration"][step]}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center py-6"> 
          <div className="relative w-full h-full flex-1 flex items-center justify-center">
            <div className="scale-110 sm:scale-120 md:scale-130 lg:scale-140">
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={true}
              />
            </div>
          </div>
          
          {/* Only show title tooltip if not hidden - enhanced design for clinicians */}
          {!hideTitle && (
            <motion.div 
              className="absolute bottom-6 left-0 right-0 w-full z-30 px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: accessibilityHelpers.getDuration(0.5), delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20">
                <div className="font-bold text-sm sm:text-base md:text-lg truncate">{getCurrentLabel().title}</div>
                <div className="mt-1 text-xs sm:text-sm md:text-base text-white/90 line-clamp-3 sm:line-clamp-2">
                  {getCurrentLabel().description}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
