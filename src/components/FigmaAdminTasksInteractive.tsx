
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
            <div className="relative h-full flex flex-col items-center justify-center py-8"> 
              <div 
                className="relative w-full h-full flex-1 flex items-center justify-center cursor-pointer" 
                onClick={handleIllustrationClick}
                role="button"
                aria-label="Navigate to next administrative feature"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleIllustrationClick();
                  }
                }}
              >
                <div className="w-full h-full flex items-center justify-center scale-100 sm:scale-105 md:scale-110 lg:scale-115">
                  <FigmaAdminTasksIllustration
                    subStep={subStep}
                    isInteractive={true}
                    hideTitle={true}
                    onElementClick={handleIconClick}
                  />
                </div>
              </div>
              
              {/* Remove the floating label since it's handled by AnimationDescription in DemoScene */}
            </div>
          </MouseTrackerProvider>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center py-8"> 
            <div className="relative w-full h-full flex-1 flex items-center justify-center">
              <div className="scale-100 sm:scale-105 md:scale-110 lg:scale-115">
                <FigmaAdminTasksIllustration
                  subStep={subStep}
                  isInteractive={false}
                  hideTitle={true}
                />
              </div>
            </div>
            
            {/* Only show label if hideTitle is false and we're not in the DemoScene component */}
            {!hideTitle && (
              <motion.div 
                className="absolute bottom-10 left-0 right-0 w-full z-30 px-4 sm:px-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: accessibilityHelpers.getDuration(0.5), delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-lg border border-white/20">
                  <div className="font-bold text-sm sm:text-base md:text-lg truncate">{getCurrentLabel().title}</div>
                  <div className="mt-1 text-xs sm:text-sm md:text-base text-white/90 line-clamp-2">{getCurrentLabel().description}</div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
