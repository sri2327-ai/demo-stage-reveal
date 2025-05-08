
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAdminTasksIllustration } from './FigmaAdminTasksIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

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
  
  // Auto-show label for current subStep
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

  // Handle click on the illustration area - now the entire area is clickable
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Cycle through steps on click
      const nextStep = (subStep + 1) % 3;
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative h-full flex items-center justify-center w-full">
            <div 
              className="relative w-full h-full flex items-center justify-center cursor-pointer" 
              onClick={handleIllustrationClick}
            >
              <FigmaAdminTasksIllustration
                subStep={subStep}
                isInteractive={true}
              />
              
              {/* Enhanced cursor styling */}
              <Pointer>
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" className="filter drop-shadow-lg">
                      <defs>
                        <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#143151" />
                          <stop offset="100%" stopColor="#387E89" />
                        </linearGradient>
                      </defs>
                      <MousePointer2 size={40} className="stroke-white stroke-[1.5]" style={{
                        fill: "url(#cursor-gradient)"
                      }} />
                    </svg>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm"
                  >
                    Click to Explore
                  </motion.span>
                </div>
              </Pointer>
            </div>
            
            {/* Redesigned floating label with enhanced design */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute bottom-4 md:bottom-8 left-0 right-0 z-30 w-full pointer-events-none"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-base text-white/90">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <FigmaAdminTasksIllustration
              subStep={subStep}
              isInteractive={false}
            />
          </div>
          
          {/* Only show title tooltip if not hidden */}
          {!hideTitle && (
            <motion.div 
              className="absolute bottom-4 md:bottom-8 left-0 right-0 z-30 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20">
                <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-base text-white/90">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
