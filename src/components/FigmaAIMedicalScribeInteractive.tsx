import React, { useState, useEffect } from 'react';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider, Pointer, PointerFollower } from './ui/cursor';
import { MousePointer2 } from 'lucide-react';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
}

// Updated labels with detailed descriptions for each step
const labelDescriptions: Record<string, string> = {
  "Authentication": "Log in to Crush securely with SSO or biometrics",
  "Patient Schedule": "Auto-syncs schedule from EHR with patient demographics and visit info",
  "Templates": "Auto-selects templates by visit type for consistent documentation",
  "Recording": "Transcribes multilingual encounters in real-time with 99% accuracy",
  "Generate Documentation": "Generates contextual notes with ICD-10/CPT/E/M codes, referencing prior visits and syncs to preferred EHR"
};

export const FigmaAIMedicalScribeInteractive: React.FC<FigmaAIMedicalScribeInteractiveProps> = ({
  subStep,
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  
  // Auto-show label for current subStep with longer display time
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Authentication");
    else if (subStep === 1) setActiveLabel("Patient Schedule");
    else if (subStep === 2) setActiveLabel("Templates");
    else if (subStep === 3) setActiveLabel("Recording");
    else if (subStep === 4) setActiveLabel("Generate Documentation");
    
    // Always keep label visible in non-interactive mode
  }, [subStep]);
  
  const getActiveAreaClass = (stepIndex: number) => {
    return `absolute cursor-pointer rounded-lg ${stepIndex === subStep ? 'bg-blue-100/40' : 'hover:bg-blue-100/30'}`;
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
    const stepLabels = ["Authentication", "Patient Schedule", "Templates", "Recording", "Generate Documentation"];
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
            <FigmaAIMedicalScribeIllustration
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
            />
          
            {/* Interactive overlay areas */}
            <div className="absolute inset-0 z-10">
              {/* Login area - step 0 */}
              <div 
                className={`${getActiveAreaClass(0)} top-[15%] left-[15%] w-[25%] h-[20%]`}
                onClick={() => onElementClick && onElementClick(0)}
                onMouseEnter={() => setActiveLabel("Authentication")}
                onMouseLeave={() => setActiveLabel(null)}
              />
              
              {/* Schedule area - step 1 */}
              <div 
                className={`${getActiveAreaClass(1)} top-[15%] right-[15%] w-[25%] h-[20%]`}
                onClick={() => onElementClick && onElementClick(1)}
                onMouseEnter={() => setActiveLabel("Patient Schedule")}
                onMouseLeave={() => setActiveLabel(null)}
              />
              
              {/* Templates area - step 2 */}
              <div 
                className={`${getActiveAreaClass(2)} top-[40%] left-[25%] w-[50%] h-[15%]`}
                onClick={() => onElementClick && onElementClick(2)}
                onMouseEnter={() => setActiveLabel("Templates")}
                onMouseLeave={() => setActiveLabel(null)}
              />
              
              {/* Recording area - step 3 */}
              <div 
                className={`${getActiveAreaClass(3)} bottom-[25%] left-[20%] w-[25%] h-[20%]`}
                onClick={() => onElementClick && onElementClick(3)}
                onMouseEnter={() => setActiveLabel("Recording")}
                onMouseLeave={() => setActiveLabel(null)}
              />
              
              {/* Documentation area - step 4 */}
              <div 
                className={`${getActiveAreaClass(4)} bottom-[25%] right-[20%] w-[25%] h-[20%]`}
                onClick={() => onElementClick && onElementClick(4)}
                onMouseEnter={() => setActiveLabel("Generate Documentation")}
                onMouseLeave={() => setActiveLabel(null)}
              />
            </div>
            
            {/* Custom cursor */}
            <Pointer>
              <MousePointer2 className="fill-blue-500 stroke-white" size={24} />
            </Pointer>
            
            {/* Label that follows the cursor - improved visibility & positioning */}
            <PointerFollower 
              align="bottom-center" 
              alwaysVisible={true} 
              offsetY={30}
              style={{ zIndex: 100 }}
            >
              <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-[300px] border border-blue-700">
                <div className="font-medium text-sm">{getCurrentLabel().title}</div>
                <div className="text-xs mt-1 text-blue-100">{getCurrentLabel().description}</div>
              </div>
            </PointerFollower>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative">
          <FigmaAIMedicalScribeIllustration
            subStep={subStep}
            transcriptionActive={transcriptionActive}
            noteGeneration={noteGeneration}
          />
          
          {/* Fixed prominent label display for non-interactive mode - similar to reference */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg max-w-[500px] border-2 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <span className="text-lg font-bold">AI</span>
                </div>
                <div className="font-bold text-xl">{getCurrentLabel().title}</div>
              </div>
              <div className="mt-2 text-sm">{getCurrentLabel().description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
