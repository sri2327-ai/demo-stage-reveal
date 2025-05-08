
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

interface FigmaPostVisitSupportInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

// Enhanced clinical descriptions with specific outcomes and benefits
const labelDescriptions: Record<string, string> = {
  "Treatment Adherence": "Personalized medication reminders with dosage instructions sent via your patient portal or SMS, improving adherence rates by 40%",
  "Care Plan Monitoring": "Digital care plans with patient-reported outcomes tracking, allowing for early identification of treatment failures or complications",
  "Patient Questions": "24/7 AI-powered responses to FAQs with clinician oversight, freeing up your staff from routine inquiries while ensuring clinical accuracy",
  "Recovery Tracking": "Automated remote monitoring with threshold alerts for early intervention, reducing hospital readmissions by identifying complications early"
};

export const FigmaPostVisitSupportInteractive: React.FC<FigmaPostVisitSupportInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [interactionActive, setInteractionActive] = useState(false);
  
  // Auto-show label for current subStep
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Treatment Adherence");
    else if (subStep === 1) setActiveLabel("Care Plan Monitoring");
    else if (subStep === 2) setActiveLabel("Patient Questions");
    else if (subStep === 3) setActiveLabel("Recovery Tracking");
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
    const stepLabels = ["Treatment Adherence", "Care Plan Monitoring", "Patient Questions", "Recovery Tracking"];
    const currentStepLabel = stepLabels[subStep];
    return {
      title: currentStepLabel,
      description: labelDescriptions[currentStepLabel]
    };
  };

  // Handle click on the illustration area
  const handleIllustrationClick = (step: number) => {
    if (onElementClick) {
      onElementClick(step);
    }
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto h-full">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-full scale-100 md:scale-110 lg:scale-125">
              <div 
                className="w-full h-full cursor-pointer"
                onClick={() => handleIllustrationClick(subStep)}
              >
                <FigmaPostVisitSupportIllustration
                  subStep={subStep}
                  onElementClick={onElementClick}
                  isInteractive={true}
                />
              </div>
              
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
            
            {/* Better positioned label that won't overlap */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute top-2 left-0 right-0 z-30 w-full"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm mx-auto max-w-xl border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-base">{getCurrentLabel().description}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full scale-100 md:scale-110 lg:scale-125">
            <FigmaPostVisitSupportIllustration
              subStep={subStep}
              isInteractive={false}
            />
          </div>
          
          {/* Only show title tooltip if not hidden */}
          {!hideTitle && (
            <motion.div 
              className="absolute top-2 left-0 right-0 z-30 w-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm mx-auto max-w-xl border border-white/10">
                <div className="font-bold text-2xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-base">{getCurrentLabel().description}</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
