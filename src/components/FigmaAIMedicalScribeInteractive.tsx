
import React, { useState } from 'react';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
}

export const FigmaAIMedicalScribeInteractive: React.FC<FigmaAIMedicalScribeInteractiveProps> = ({
  subStep,
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false
}) => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <FigmaAIMedicalScribeIllustration
        subStep={subStep}
        transcriptionActive={transcriptionActive}
        noteGeneration={noteGeneration}
      />
      
      {isInteractive && (
        <>
          {/* Interactive overlay areas */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Login area - step 0 */}
            <div 
              className="absolute top-[15%] left-[15%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(0)}
              onMouseEnter={() => setActiveLabel("Authentication")}
              onMouseLeave={() => setActiveLabel(null)}
            >
              {activeLabel === "Authentication" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                  Authentication
                </div>
              )}
            </div>
            
            {/* Schedule area - step 1 */}
            <div 
              className="absolute top-[15%] right-[15%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(1)}
              onMouseEnter={() => setActiveLabel("Patient Schedule")}
              onMouseLeave={() => setActiveLabel(null)}
            >
              {activeLabel === "Patient Schedule" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                  Patient Schedule
                </div>
              )}
            </div>
            
            {/* Templates area - step 2 */}
            <div 
              className="absolute top-[40%] left-[25%] w-[50%] h-[15%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(2)}
              onMouseEnter={() => setActiveLabel("Templates")}
              onMouseLeave={() => setActiveLabel(null)}
            >
              {activeLabel === "Templates" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                  Templates
                </div>
              )}
            </div>
            
            {/* Recording area - step 3 */}
            <div 
              className="absolute bottom-[25%] left-[20%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(3)}
              onMouseEnter={() => setActiveLabel("Recording")}
              onMouseLeave={() => setActiveLabel(null)}
            >
              {activeLabel === "Recording" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                  Recording
                </div>
              )}
            </div>
            
            {/* Documentation area - step 4 */}
            <div 
              className="absolute bottom-[25%] right-[20%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(4)}
              onMouseEnter={() => setActiveLabel("Generate Documentation")}
              onMouseLeave={() => setActiveLabel(null)}
            >
              {activeLabel === "Generate Documentation" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-blue-900 text-white px-2 py-1 rounded text-xs">
                  Generate Documentation
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
