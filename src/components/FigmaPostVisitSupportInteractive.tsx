
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

interface FigmaPostVisitSupportInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
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
  isInteractive = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  
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

  const stepAreas = [
    { name: "Treatment Adherence", position: "top-[20%] left-[15%] w-[70%] h-[20%]" },
    { name: "Care Plan Monitoring", position: "top-[42%] left-[15%] w-[70%] h-[20%]" },
    { name: "Patient Questions", position: "top-[64%] left-[15%] w-[70%] h-[20%]" },
    { name: "Recovery Tracking", position: "bottom-[5%] left-[15%] w-[70%] h-[20%]" }
  ];
  
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
          
            {/* Interactive elements with consistent animation */}
            <div className="absolute inset-0">
              {stepAreas.map((area, index) => (
                <motion.div 
                  key={area.name}
                  className={`absolute ${area.position} z-20 flex items-center justify-center cursor-pointer ${subStep === index ? 'ring-2 ring-[#387E89] rounded-lg' : ''}`}
                  onClick={() => onElementClick && onElementClick(index)}
                  onMouseEnter={() => setActiveLabel(area.name)}
                  onMouseLeave={() => setActiveLabel(null)}
                  aria-label={`${area.name} area`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {subStep !== index && (
                    <motion.div 
                      className="p-2 rounded-lg text-[#143151] hover:bg-[#387E89]/10 transition-all"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {area.name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Custom cursor with consistent gradient */}
            <Pointer>
              <div className="flex flex-col items-center">
                <MousePointer2 className="stroke-white h-8 w-8" size={32} style={{
                  fill: "url(#cursor-gradient)"
                }} />
                <span className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white px-2 py-0.5 rounded-md shadow-sm">
                  You
                </span>
              </div>
            </Pointer>
            
            {/* Enhanced clinical label styling with smooth animation */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={getCurrentLabel().title}
                className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-xl max-w-[500px] backdrop-blur-sm">
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
          
          {/* Fixed label display for non-interactive mode with consistent styling */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-xl max-w-[500px] backdrop-blur-sm">
              <div className="font-bold text-xl">{getCurrentLabel().title}</div>
              <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
