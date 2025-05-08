
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

  // Simplified step areas to remove redundancy
  const stepAreas = [
    { name: "Treatment Adherence", position: "top-[20%] left-[15%] w-[70%] h-[20%]" },
    { name: "Care Plan Monitoring", position: "top-[42%] left-[15%] w-[70%] h-[20%]" },
    { name: "Patient Questions", position: "top-[64%] left-[15%] w-[70%] h-[20%]" },
    { name: "Recovery Tracking", position: "bottom-[5%] left-[15%] w-[70%] h-[20%]" }
  ];

  // Handle mouse enter for interactivity
  const handleAreaMouseEnter = (name: string) => {
    setActiveLabel(name);
    setInteractionActive(true);
  };

  // Handle mouse leave for interactivity
  const handleAreaMouseLeave = () => {
    // Only clear if we're not on a forced state from subStep
    const stepLabels = ["Treatment Adherence", "Care Plan Monitoring", "Patient Questions", "Recovery Tracking"];
    setActiveLabel(stepLabels[subStep]);
    setInteractionActive(false);
  };
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative">
            <FigmaPostVisitSupportIllustration
              subStep={subStep}
              onElementClick={onElementClick}
              isInteractive={true}
              onHover={(step) => {
                if (step === 0) setActiveLabel("Treatment Adherence");
                else if (step === 1) setActiveLabel("Care Plan Monitoring");
                else if (step === 2) setActiveLabel("Patient Questions");
                else if (step === 3) setActiveLabel("Recovery Tracking");
                else setActiveLabel(null);
              }}
            />
          
            {/* Interactive elements without outlines */}
            <div className="absolute inset-0 pointer-events-auto">
              {stepAreas.map((area, index) => (
                <motion.div 
                  key={area.name}
                  className={`absolute ${area.position} z-20 flex items-center justify-center cursor-pointer`}
                  onClick={() => onElementClick && onElementClick(index)}
                  onMouseEnter={() => handleAreaMouseEnter(area.name)}
                  onMouseLeave={handleAreaMouseLeave}
                  aria-label={`${area.name} area`}
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: "rgba(56, 126, 137, 0.05)"
                  }}
                  animate={subStep === index ? {
                    scale: 1.05,
                    backgroundColor: "rgba(56, 126, 137, 0.05)"
                  } : {
                    scale: 1,
                    backgroundColor: "rgba(56, 126, 137, 0)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
              ))}
            </div>
            
            {/* Improved cursor styling */}
            <Pointer>
              <div className="flex flex-col items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" className="filter drop-shadow-md">
                  <defs>
                    <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#143151" />
                      <stop offset="100%" stopColor="#387E89" />
                    </linearGradient>
                  </defs>
                  <MousePointer2 size={32} className="stroke-white" style={{
                    fill: "url(#cursor-gradient)"
                  }} />
                </svg>
                <span className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white px-2 py-0.5 rounded-md shadow-sm">
                  You
                </span>
              </div>
            </Pointer>
            
            {/* Enhanced tooltip with bigger animation */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: interactionActive ? 1.1 : 1.05,
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-4 rounded-lg shadow-xl max-w-[500px] mt-6">
                  <div className="font-bold text-xl">{getCurrentLabel().title}</div>
                  <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative">
          <FigmaPostVisitSupportIllustration
            subStep={subStep}
            isInteractive={false}
          />
          
          {/* Only show title tooltip if not hidden */}
          {!hideTitle && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-4 rounded-lg shadow-xl max-w-[500px] mt-6">
                <div className="font-bold text-xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
