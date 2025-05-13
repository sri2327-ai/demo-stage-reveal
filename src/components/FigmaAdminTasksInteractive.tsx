
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAdminTasksIllustration } from './FigmaAdminTasksIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Info, ChevronRight, ChevronLeft } from 'lucide-react';

interface FigmaAdminTasksInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced descriptions with clinical context, metrics and integration details
const labelDescriptions: Record<string, string> = {
  "Prescriptions & Orders": "Reduces prescription processing by 87% through automated e-prescribing integration with Surescripts and DrFirst. Handles medication refills, lab orders, imaging studies, and referrals while maintaining compliance with state and federal regulations.",
  "Patient Communications": "Automatically generates and sends clinical summaries with custom care instructions through patient portal or SMS. Includes follow-up appointment details, educational resources, and post-care instructions in the patient's preferred format.",
  "Insurance & Billing": "Continuous monitoring of insurance verification, prior authorizations, and claims processing reduces denials by 34% and accelerates payment collection by 12 days. Includes automated CPT/ICD-10 code validation."
};

export const FigmaAdminTasksInteractive: React.FC<FigmaAdminTasksInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Always show label based on current step
  useEffect(() => {
    const stepLabels = ["Prescriptions & Orders", "Patient Communications", "Insurance & Billing"];
    if (subStep >= 0 && subStep < stepLabels.length) {
      setActiveLabel(stepLabels[subStep]);
    }
    
    console.log("AdminTasks - Current subStep:", subStep);
  }, [subStep]);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 3);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 3) % 3);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '3') {
        // Number keys 1-3 for direct navigation
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
  
  // Log whenever onElementClick prop changes
  useEffect(() => {
    console.log("AdminTasks - onElementClick prop available:", !!onElementClick);
  }, [onElementClick]);
  
  // Get the current label for either hover state or active step
  const getCurrentLabel = () => {
    if (activeLabel) {
      return {
        title: activeLabel,
        description: labelDescriptions[activeLabel]
      };
    }
    
    // Fallback to current substep
    const stepLabels = ["Prescriptions & Orders", "Patient Communications", "Insurance & Billing"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Direct navigation to specific step when icon is clicked - enhanced with feedback
  const handleIconClick = (step: number) => {
    console.log("AdminTasks - Icon clicked for step:", step);
    if (isInteractive && onElementClick) {
      // Track interaction time for autoplay management
      setLastInteraction(Date.now());
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area for any part not covered by icons
  const handleIllustrationClick = () => {
    if (isInteractive && onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 3;
      console.log("AdminTasks - Illustration clicked, moving to step:", nextStep);
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
      aria-label="Administrative Tasks Interactive Demo"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
    >
      <div className="relative h-full flex flex-col">
        {isInteractive ? (
          <MouseTrackerProvider disableCursor={false}>
            <div className="relative h-full flex flex-col items-center justify-center pt-8 pb-16"> 
              <motion.div 
                className="relative w-full flex-1 flex items-center justify-center cursor-pointer scale-110" 
                onClick={handleIllustrationClick}
                role="button"
                aria-label="Navigate to next administrative feature"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleIllustrationClick();
                  }
                }}
                {...clinicalAnimations.microInteraction}
                {...accessibilityHelpers.getFocusAnimationProps(isFocused)}
              >
                <FigmaAdminTasksIllustration
                  subStep={subStep}
                  isInteractive={true}
                  hideTitle={true}
                  onElementClick={handleIconClick}
                />
              </motion.div>
              
              {/* Enhanced floating label with improved typography and clinical focus */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={getCurrentLabel().title}
                  className="absolute bottom-8 left-0 right-0 w-full z-30 px-4 sm:px-6"
                  initial={clinicalAnimations.cardAppear.initial}
                  animate={clinicalAnimations.cardAppear.animate}
                  exit={clinicalAnimations.cardAppear.exit}
                  transition={{ duration: accessibilityHelpers.getDuration(0.5) }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl shadow-xl mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                    {...clinicalAnimations.clinicalPulse}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <motion.span 
                        className="inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-400"
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
                      <h3 className="font-bold text-base sm:text-xl md:text-2xl">{getCurrentLabel().title}</h3>
                    </div>
                    
                    <div className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                      {getCurrentLabel().description}
                    </div>
                    
                    <div className="mt-3 sm:mt-4 flex items-center justify-between">
                      <div className="text-xs sm:text-sm text-white/80 flex items-center">
                        <Info size={isMobile ? 14 : 16} className="mr-1.5 text-white/70" />
                        <span>
                          {isMobile 
                            ? "Tap icons to explore features" 
                            : "Click icons to explore features or use arrow keys"}
                        </span>
                      </div>
                      
                      {/* Navigation buttons for clinical workflow */}
                      <div className="flex items-center gap-2">
                        <motion.button 
                          className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onElementClick) onElementClick((subStep - 1 + 3) % 3);
                          }}
                          aria-label="Previous administrative feature"
                        >
                          <ChevronLeft size={isMobile ? 16 : 18} className="text-white" />
                        </motion.button>
                        
                        <motion.button
                          className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onElementClick) onElementClick((subStep + 1) % 3);
                          }}
                          aria-label="Next administrative feature"
                        >
                          <ChevronRight size={isMobile ? 16 : 18} className="text-white" />
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Step indicator */}
                    <div className="mt-3 pt-3 border-t border-white/20 flex justify-center gap-2">
                      {[0, 1, 2].map(step => (
                        <motion.button
                          key={step}
                          className={`w-2.5 h-2.5 rounded-full ${subStep === step ? 'bg-white' : 'bg-white/30'}`}
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onElementClick) onElementClick(step);
                          }}
                          aria-label={`Go to ${["Prescriptions & Orders", "Patient Communications", "Insurance & Billing"][step]}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MouseTrackerProvider>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center pt-8 pb-16"> 
            <div className="relative w-full flex-1 scale-105">
              <FigmaAdminTasksIllustration
                subStep={subStep}
                isInteractive={false}
                hideTitle={true}
              />
            </div>
            
            {/* Label shown on non-interactive mode - improved for clinical context */}
            {!hideTitle && (
              <motion.div 
                className="absolute bottom-5 left-0 right-0 w-full z-30 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: accessibilityHelpers.getDuration(0.5), delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-xl border border-white/20">
                  <div className="font-bold text-base sm:text-xl md:text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{getCurrentLabel().description}</div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
