
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
  
  // Auto-show label for current subStep
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

  // Handle click on the illustration area with specific step handling
  const handleIllustrationClick = (step?: number) => {
    if (onElementClick) {
      if (step !== undefined) {
        // Go to specific step if provided
        onElementClick(step);
        return;
      }
      
      // Otherwise cycle through steps on click
      const nextStep = (subStep + 1) % 5;
      onElementClick(nextStep);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative h-full flex flex-col items-center justify-center">
            <div 
              className="relative w-full flex-1 flex items-center justify-center cursor-pointer" 
              onClick={() => handleIllustrationClick()}
            >
              <FigmaPostVisitSupportIllustration
                subStep={subStep}
                isInteractive={true}
                hideTitle={hideTitle}
                onElementClick={(step) => handleIllustrationClick(step)}
              />
              
              {/* Enhanced cursor styling - only shown on desktop */}
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
                      You
                    </motion.span>
                  </div>
                </Pointer>
              )}
            </div>
            
            {/* Redesigned floating label with enhanced design - positioned appropriately for both desktop and mobile */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="w-full z-30 mt-4 px-4"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20"
                  whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -2 }}
                >
                  <div className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full flex-1">
            <FigmaPostVisitSupportIllustration
              subStep={subStep}
              isInteractive={false}
              hideTitle={hideTitle}
            />
          </div>
          
          {/* Only show title tooltip if not hidden */}
          {!hideTitle && (
            <motion.div 
              className="w-full z-30 mt-4 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-xl mx-auto max-w-xl border border-white/20">
                <div className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
