
import React, { useState, useEffect } from 'react';
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
          
            {/* Interactive elements using consistent approach */}
            <div className="absolute inset-0">
              {/* Treatment Adherence area - step 0 */}
              <div 
                className={`absolute top-[20%] left-[15%] w-[70%] h-[20%] z-20 flex items-center justify-center ${subStep === 0 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(0)}
                onMouseEnter={() => setActiveLabel("Treatment Adherence")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Treatment Adherence area"
              >
                {subStep !== 0 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Treatment Adherence
                  </div>
                )}
              </div>
              
              {/* Care Plan Monitoring area - step 1 */}
              <div 
                className={`absolute top-[42%] left-[15%] w-[70%] h-[20%] z-20 flex items-center justify-center ${subStep === 1 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(1)}
                onMouseEnter={() => setActiveLabel("Care Plan Monitoring")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Care Plan Monitoring area"
              >
                {subStep !== 1 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Care Plan Monitoring
                  </div>
                )}
              </div>
              
              {/* Patient Questions area - step 2 */}
              <div 
                className={`absolute top-[64%] left-[15%] w-[70%] h-[20%] z-20 flex items-center justify-center ${subStep === 2 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(2)}
                onMouseEnter={() => setActiveLabel("Patient Questions")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Patient Questions area"
              >
                {subStep !== 2 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Patient Questions
                  </div>
                )}
              </div>
              
              {/* Recovery Tracking area - step 3 */}
              <div 
                className={`absolute bottom-[5%] left-[15%] w-[70%] h-[20%] z-20 flex items-center justify-center ${subStep === 3 ? 'ring-2 ring-blue-500 rounded-lg transition-all duration-300' : ''}`}
                onClick={() => onElementClick && onElementClick(3)}
                onMouseEnter={() => setActiveLabel("Recovery Tracking")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Recovery Tracking area"
              >
                {subStep !== 3 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Recovery Tracking
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
            
            {/* Enhanced clinical label styling */}
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
          <FigmaPostVisitSupportIllustration
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
