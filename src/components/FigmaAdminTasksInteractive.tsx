
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
  hideTitle = false /* Default to false for backward compatibility */
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [interactionActive, setInteractionActive] = useState(false);
  
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

  // Handle mouse enter for interactivity
  const handleAreaMouseEnter = (name: string) => {
    setActiveLabel(name);
    setInteractionActive(true);
  };

  // Handle mouse leave for interactivity
  const handleAreaMouseLeave = () => {
    // Only clear if we're not on a forced state from subStep
    const stepLabels = ["Prescriptions & Orders", "Patient Communications", "Insurance & Billing"];
    setActiveLabel(stepLabels[subStep]);
    setInteractionActive(false);
  };

  // Simplified step areas - removed redundant elements
  const stepAreas = [
    { name: "Prescriptions & Orders", position: "top-[20%] left-[15%] w-[70%] h-[25%]" },
    { name: "Patient Communications", position: "top-[50%] left-[15%] w-[70%] h-[20%]" },
    { name: "Insurance & Billing", position: "bottom-[10%] left-[15%] w-[70%] h-[25%]" }
  ];
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative">
            {/* Note: We can't add hideTitle to FigmaAdminTasksIllustration since it's read-only */}
            {/* So we'll handle it differently in DemoScene.tsx */}
            <FigmaAdminTasksIllustration
              subStep={subStep}
              onElementClick={onElementClick}
              isInteractive={true}
              onHover={(step) => {
                if (step === 0) setActiveLabel("Prescriptions & Orders");
                else if (step === 1) setActiveLabel("Patient Communications");
                else if (step === 2) setActiveLabel("Insurance & Billing");
                else setActiveLabel(null);
              }}
            />
          
            {/* Improved interactive elements without outlines */}
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
            
            {/* Improved cursor styling with SVG gradient */}
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
                  scale: interactionActive ? 1.1 : 1.05
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
          <FigmaAdminTasksIllustration
            subStep={subStep}
            isInteractive={false}
          />
          
          {/* Non-interactive label with consistent styling */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-4 rounded-lg shadow-xl max-w-[500px] mt-6">
              <div className="font-bold text-xl">{getCurrentLabel().title}</div>
              <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
