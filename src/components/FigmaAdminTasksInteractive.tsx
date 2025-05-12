
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

// Enhanced descriptions with clinical context and integration details
const labelDescriptions: Record<string, string> = {
  "Prescriptions & Orders": "AI agent securely triggers prescription refills, referral letters, and lab orders through your existing e-prescribing system, reducing phone tag and paperwork",
  "Patient Communications": "Clinical summaries and test results automatically sent to patients via your secure patient portal with customizable templates that match your practice's communication style",
  "Insurance & Billing": "Continuous monitoring of insurance verification, prior authorizations, and claims processing to prevent revenue delays and reduce denied claims"
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
  }, [subStep]);
  
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

  // FIXED: Direct navigation to specific step when icon is clicked
  const handleIconClick = (step: number) => {
    if (onElementClick) {
      onElementClick(step);
    }
  };
  
  // Handle click on the illustration area for any part not covered by icons
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 3;
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full">
      <div className="relative h-full flex flex-col">
        {isInteractive ? (
          <MouseTrackerProvider disableCursor={false}>
            <div className="relative h-full flex flex-col items-center justify-center pt-12 pb-16"> 
              <div 
                className="relative w-full flex-1 flex items-center justify-center cursor-pointer scale-110" 
                onClick={handleIllustrationClick}
              >
                <FigmaAdminTasksIllustration
                  subStep={subStep}
                  isInteractive={true}
                  hideTitle={true}
                  onElementClick={handleIconClick}
                />
              </div>
              
              {/* Enhanced floating label that's always visible - positioned better */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={getCurrentLabel().title}
                  className="absolute bottom-8 left-0 right-0 w-full z-30 px-3 sm:px-4 lg:px-6"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl shadow-xl mx-auto max-w-sm sm:max-w-md md:max-w-lg border border-white/20"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                  >
                    <div className="font-bold text-base sm:text-lg md:text-xl">{getCurrentLabel().title}</div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
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
                className="absolute bottom-2 left-0 right-0 w-full z-30 px-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-xl border border-white/20">
                  <div className="font-bold text-base sm:text-lg md:text-xl">{getCurrentLabel().title}</div>
                  <div className="mt-1 text-xs sm:text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
