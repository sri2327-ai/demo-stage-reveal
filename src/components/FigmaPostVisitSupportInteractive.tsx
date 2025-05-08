
import React, { useState, useEffect } from 'react';
import { FigmaPostVisitSupportIllustration } from './FigmaPostVisitSupportIllustration';
import { MouseTrackerProvider, Pointer, PointerFollower } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

interface FigmaPostVisitSupportInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
}

// Updated descriptions to emphasize integration with existing provider tools
const labelDescriptions: Record<string, string> = {
  "Treatment Adherence": "AI sends personalized medication reminders through your existing patient portal or SMS system",
  "Care Plan Monitoring": "AI tracks ongoing patient progress using your existing care plan management tools",
  "Patient Questions": "AI provides 24/7 responses to common patient questions via your established communication channels with clinical oversight",
  "Recovery Tracking": "AI monitors patient recovery through your existing EHR data for comprehensive outcome reporting"
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
  
  const getActiveAreaClass = (stepIndex: number) => {
    // Replace transparent highlighting with ring styling
    return `absolute cursor-pointer rounded-lg ${stepIndex === subStep ? 'ring-2 ring-[#387E89] ring-opacity-70' : 'opacity-0 hover:opacity-100 hover:ring-2 hover:ring-[#387E89] hover:ring-opacity-40'}`;
  };

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
          
            {/* Interactive overlay areas with improved styling */}
            <div className="absolute inset-0">
              {/* Treatment Adherence area - step 0 */}
              <div 
                className={`${getActiveAreaClass(0)} top-[20%] left-[15%] w-[70%] h-[20%] z-20 transition-all duration-200`}
                onClick={() => onElementClick && onElementClick(0)}
                onMouseEnter={() => setActiveLabel("Treatment Adherence")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Treatment Adherence area"
              />
              
              {/* Care Plan Monitoring area - step 1 */}
              <div 
                className={`${getActiveAreaClass(1)} top-[42%] left-[15%] w-[70%] h-[20%] z-20 transition-all duration-200`}
                onClick={() => onElementClick && onElementClick(1)}
                onMouseEnter={() => setActiveLabel("Care Plan Monitoring")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Care Plan Monitoring area"
              />
              
              {/* Patient Questions area - step 2 */}
              <div 
                className={`${getActiveAreaClass(2)} top-[64%] left-[15%] w-[70%] h-[20%] z-20 transition-all duration-200`}
                onClick={() => onElementClick && onElementClick(2)}
                onMouseEnter={() => setActiveLabel("Patient Questions")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Patient Questions area"
              />
              
              {/* Recovery Tracking area - step 3 */}
              <div 
                className={`${getActiveAreaClass(3)} bottom-[5%] left-[15%] w-[70%] h-[20%] z-20 transition-all duration-200`}
                onClick={() => onElementClick && onElementClick(3)}
                onMouseEnter={() => setActiveLabel("Recovery Tracking")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Recovery Tracking area"
              />
            </div>
            
            {/* Custom cursor with gradient */}
            <Pointer>
              <div className="flex flex-col items-center">
                <MousePointer2 className="stroke-white h-8 w-8" size={32} style={{
                  fill: "url(#cursor-gradient)"
                }} />
                <span className="text-sm font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mt-1">You</span>
              </div>
            </Pointer>
            
            {/* Enhanced consistent label styling */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-xl max-w-[500px] border border-white/20 backdrop-blur-sm">
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
            <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-xl max-w-[500px] border border-white/20 backdrop-blur-sm">
                <div className="font-bold text-xl">{getCurrentLabel().title}</div>
                <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};
