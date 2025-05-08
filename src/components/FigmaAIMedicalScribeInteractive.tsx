import React, { useState, useEffect } from 'react';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
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
  
  // Auto-show label for current subStep
  useEffect(() => {
    if (subStep === 0) setActiveLabel("Authentication");
    else if (subStep === 1) setActiveLabel("Patient Schedule");
    else if (subStep === 2) setActiveLabel("Templates");
    else if (subStep === 3) setActiveLabel("Recording");
    else if (subStep === 4) setActiveLabel("Generate Documentation");
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
          
            {/* Interactive elements using the same approach as patient engagement */}
            <div className="absolute inset-0">
              {/* Login area - step 0 */}
              <div 
                className={`absolute top-[15%] left-[15%] w-[25%] h-[20%] z-20 flex items-center justify-center ${subStep === 0 ? 'bg-blue-500/10 ring-2 ring-blue-500' : ''}`}
                onClick={() => onElementClick && onElementClick(0)}
                onMouseEnter={() => setActiveLabel("Authentication")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Authentication area"
              >
                {subStep !== 0 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Authentication
                  </div>
                )}
              </div>
              
              {/* Schedule area - step 1 */}
              <div 
                className={`absolute top-[15%] right-[15%] w-[25%] h-[20%] z-20 flex items-center justify-center ${subStep === 1 ? 'bg-blue-500/10 ring-2 ring-blue-500' : ''}`}
                onClick={() => onElementClick && onElementClick(1)}
                onMouseEnter={() => setActiveLabel("Patient Schedule")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Patient Schedule area"
              >
                {subStep !== 1 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Patient Schedule
                  </div>
                )}
              </div>
              
              {/* Templates area - step 2 */}
              <div 
                className={`absolute top-[40%] left-[25%] w-[50%] h-[15%] z-20 flex items-center justify-center ${subStep === 2 ? 'bg-blue-500/10 ring-2 ring-blue-500' : ''}`}
                onClick={() => onElementClick && onElementClick(2)}
                onMouseEnter={() => setActiveLabel("Templates")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Templates area"
              >
                {subStep !== 2 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Templates
                  </div>
                )}
              </div>
              
              {/* Recording area - step 3 */}
              <div 
                className={`absolute bottom-[25%] left-[20%] w-[25%] h-[20%] z-20 flex items-center justify-center ${subStep === 3 ? 'bg-blue-500/10 ring-2 ring-blue-500' : ''}`}
                onClick={() => onElementClick && onElementClick(3)}
                onMouseEnter={() => setActiveLabel("Recording")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Recording area"
              >
                {subStep !== 3 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Recording
                  </div>
                )}
              </div>
              
              {/* Documentation area - step 4 */}
              <div 
                className={`absolute bottom-[25%] right-[20%] w-[25%] h-[20%] z-20 flex items-center justify-center ${subStep === 4 ? 'bg-blue-500/10 ring-2 ring-blue-500' : ''}`}
                onClick={() => onElementClick && onElementClick(4)}
                onMouseEnter={() => setActiveLabel("Generate Documentation")}
                onMouseLeave={() => setActiveLabel(null)}
                aria-label="Documentation area"
              >
                {subStep !== 4 && (
                  <div className="p-2 rounded-lg text-blue-700 hover:bg-blue-200 transition-all cursor-pointer">
                    Documentation
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
                <span className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white px-2 py-0.5 rounded-md shadow-sm">You</span>
              </div>
            </Pointer>
            
            {/* Fixed label at the top */}
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
          <FigmaAIMedicalScribeIllustration
            subStep={subStep}
            transcriptionActive={transcriptionActive}
            noteGeneration={noteGeneration}
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
