
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAdminTasksIllustration } from './FigmaAdminTasksIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaAdminTasksInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced descriptions with clinical context, efficiency metrics and integration details
const labelDescriptions: Record<string, string> = {
  "Prescriptions & Orders": "Reduces prescription processing time by 87% through automated e-prescribing integration. Handles medication refills, lab orders, and referrals while maintaining complete regulatory compliance.",
  "Patient Communications": "Automatically generates and sends clinical summaries with custom care instructions through your patient portal. Includes follow-up appointment details and educational resources in the patient's preferred format.",
  "Insurance & Billing": "Continuous monitoring of insurance verification, prior authorizations, and claims processing reduces denials by 34% and accelerates payment collection by an average of 12 days."
};

export const FigmaAdminTasksInteractive: React.FC<FigmaAdminTasksInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  // Always show label based on current step
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Prescriptions & Orders");
    else if (subStep === 1) setActiveLabel("Patient Communications");
    else if (subStep === 2) setActiveLabel("Insurance & Billing");
    
    console.log("AdminTasks - Current subStep:", subStep);
  }, [subStep]);
  
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

  // Direct navigation to specific step when icon is clicked
  const handleIconClick = (step: number) => {
    console.log("AdminTasks - Icon clicked for step:", step);
    if (isInteractive && onElementClick) {
      onElementClick(step);
    }
  };
  
  // Handle click on the illustration area for any part not covered by icons
  const handleIllustrationClick = () => {
    if (isInteractive && onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 3;
      console.log("AdminTasks - Illustration clicked, moving to step:", nextStep);
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full" 
         role="region" 
         aria-label="Administrative Tasks Interactive Demo">
      <div className="relative h-full flex flex-col">
        {isInteractive ? (
          <MouseTrackerProvider disableCursor={false}>
            <div className="relative h-full flex flex-col items-center justify-center pt-12 pb-16"> 
              <div 
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
              >
                <FigmaAdminTasksIllustration
                  subStep={subStep}
                  isInteractive={true}
                  hideTitle={true}
                  onElementClick={handleIconClick}
                />
              </div>
              
              {/* Enhanced floating label with improved typography and positioning */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={getCurrentLabel().title}
                  className="absolute bottom-8 left-0 right-0 w-full z-30 px-4 sm:px-6"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl shadow-xl mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                  >
                    <div className="font-bold text-base sm:text-xl md:text-2xl">{getCurrentLabel().title}</div>
                    <div className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{getCurrentLabel().description}</div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MouseTrackerProvider>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center pt-12 pb-16"> 
            <div className="relative w-full flex-1 scale-105">
              <FigmaAdminTasksIllustration
                subStep={subStep}
                isInteractive={false}
                hideTitle={true}
              />
            </div>
            
            {/* Label shown on non-interactive mode */}
            {!hideTitle && (
              <motion.div 
                className="absolute bottom-4 left-0 right-0 w-full z-30 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
