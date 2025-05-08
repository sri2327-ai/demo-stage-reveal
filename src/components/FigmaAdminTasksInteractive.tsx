
import React, { useState, useEffect } from 'react';
import { FigmaAdminTasksIllustration } from './FigmaAdminTasksIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

interface FigmaAdminTasksInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
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
  isInteractive = false
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
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {isInteractive ? (
        <MouseTrackerProvider>
          <div className="relative">
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
          
            {/* Interactive elements using the clean approach */}
            <div className="absolute inset-0">
              {/* Prescriptions & Orders area - step 0 */}
              <div 
                className={`absolute top-[20%] left-[15%] w-[70%] h-[25%] z-20 flex items-center justify-center ${subStep === 0 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(0)}
                onMouseEnter={() => setActiveLabel("Prescriptions & Orders")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Prescriptions & Orders area"
              >
                {subStep !== 0 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Prescriptions & Orders
                  </div>
                )}
              </div>
              
              {/* Patient Communications area - step 1 */}
              <div 
                className={`absolute top-[50%] left-[15%] w-[70%] h-[20%] z-20 flex items-center justify-center ${subStep === 1 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(1)}
                onMouseEnter={() => setActiveLabel("Patient Communications")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Patient Communications area"
              >
                {subStep !== 1 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Patient Communications
                  </div>
                )}
              </div>
              
              {/* Insurance & Billing area - step 2 */}
              <div 
                className={`absolute bottom-[10%] left-[15%] w-[70%] h-[25%] z-20 flex items-center justify-center ${subStep === 2 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(2)}
                onMouseEnter={() => setActiveLabel("Insurance & Billing")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Insurance & Billing area"
              >
                {subStep !== 2 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Insurance & Billing
                  </div>
                )}
              </div>
            </div>
            
            {/* Custom cursor without border */}
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
            
            {/* Improved clinical label styling */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-xl max-w-[500px] backdrop-blur-sm animate-scale-in">
                <div className="font-bold text-xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
              </div>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative">
          <FigmaAdminTasksIllustration
            subStep={subStep}
            isInteractive={false}
          />
          
          {/* Fixed label display for non-interactive mode */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
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
