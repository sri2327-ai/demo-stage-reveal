
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaPostVisitSupportInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with specific outcomes and benefits
const labelDescriptions: Record<string, string> = {
  "Treatment Adherence": "AI agent sends personalized medication reminders with dosage instructions via your patient portal or SMS, improving adherence rates by 40%",
  "Care Plan Monitoring": "Digital care plans with patient-reported outcomes tracking, allowing AI agent to identify treatment failures or complications early",
  "Patient Questions": "24/7 AI-powered responses to FAQs with clinician oversight, freeing up your staff from routine inquiries while ensuring clinical accuracy",
  "Recovery Tracking": "Automated remote monitoring with threshold alerts for early intervention, reducing hospital readmissions by identifying complications early",
  "Patient Feedback": "AI agent automatically collects and analyzes patient satisfaction data, helping improve practice operations and clinical outcomes"
};

export const FigmaPostVisitSupportInteractive: React.FC<FigmaPostVisitSupportInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  // Always ensure label is displayed based on current step
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Treatment Adherence");
    else if (subStep === 1) setActiveLabel("Care Plan Monitoring");
    else if (subStep === 2) setActiveLabel("Patient Questions");
    else if (subStep === 3) setActiveLabel("Recovery Tracking");
    else if (subStep === 4) setActiveLabel("Patient Feedback");
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
    const stepLabels = ["Treatment Adherence", "Care Plan Monitoring", "Patient Questions", "Recovery Tracking", "Patient Feedback"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Handle click on specific icons
  const handleIconClick = (step: number) => {
    if (onElementClick) {
      onElementClick(step);
    }
  };
  
  // Handle click on the illustration area - for areas not covered by icons
  const handleIllustrationClick = () => {
    if (onElementClick) {
      // Cycle through steps on click
      const nextStep = (subStep + 1) % 5;
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full">
      <div className="relative h-full flex flex-col">
        {isInteractive ? (
          <MouseTrackerProvider>
            <div className="relative h-full flex flex-col items-center justify-center pt-4 md:pt-0">
              <div 
                className="relative w-full flex-1 flex items-center justify-center cursor-pointer scale-110" 
                onClick={handleIllustrationClick}
              >
                <FigmaPostVisitSupportIllustration
                  subStep={subStep}
                  isInteractive={true}
                  hideTitle={true}
                  onIconClick={handleIconClick} // Added this prop to handle icon clicks directly
                />
                
                {/* Enhanced cursor styling - only for desktop */}
                {!isMobile && (
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
                        Click Icons
                      </motion.span>
                    </div>
                  </Pointer>
                )}
              </div>
              
              {/* Enhanced floating label that's always visible */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={getCurrentLabel().title}
                  className="w-full z-30 mx-auto px-3 sm:px-4 lg:px-6 absolute bottom-0 left-0 right-0"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-t-xl shadow-xl mx-auto max-w-sm sm:max-w-md md:max-w-lg border border-white/20 mb-0"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                  >
                    <div className="font-bold text-base sm:text-lg md:text-xl">{getCurrentLabel().title}</div>
                    <div className="mt-0 sm:mt-1 text-xs sm:text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MouseTrackerProvider>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full flex-1 scale-110">
              <FigmaPostVisitSupportIllustration
                subStep={subStep}
                isInteractive={false}
                hideTitle={true}
              />
            </div>
            
            {/* Label shown on non-interactive mode */}
            {!hideTitle && (
              <motion.div 
                className="w-full z-30 absolute bottom-0 left-0 right-0 px-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-t-xl shadow-xl mx-auto max-w-xs sm:max-w-md md:max-w-xl border border-white/20">
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
