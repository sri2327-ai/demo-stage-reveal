
import React, { useState } from 'react';
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

const labelDescriptions: Record<string, string> = {
  "Authentication": "Provider logs in securely to the AI Medical Scribe system",
  "Patient Schedule": "AI displays today's appointments and patient information",
  "Templates": "Select from customizable note templates for different visit types",
  "Recording": "AI transcribes patient-provider conversation in real-time",
  "Generate Documentation": "AI creates structured clinical notes ready for review"
};

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
        <MouseTrackerProvider>
          {/* Interactive overlay areas */}
          <div className="absolute inset-0 z-10">
            {/* Login area - step 0 */}
            <div 
              className="absolute top-[15%] left-[15%] w-[25%] h-[20%] cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(0)}
              onMouseEnter={() => setActiveLabel("Authentication")}
              onMouseLeave={() => setActiveLabel(null)}
            />
            
            {/* Schedule area - step 1 */}
            <div 
              className="absolute top-[15%] right-[15%] w-[25%] h-[20%] cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(1)}
              onMouseEnter={() => setActiveLabel("Patient Schedule")}
              onMouseLeave={() => setActiveLabel(null)}
            />
            
            {/* Templates area - step 2 */}
            <div 
              className="absolute top-[40%] left-[25%] w-[50%] h-[15%] cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(2)}
              onMouseEnter={() => setActiveLabel("Templates")}
              onMouseLeave={() => setActiveLabel(null)}
            />
            
            {/* Recording area - step 3 */}
            <div 
              className="absolute bottom-[25%] left-[20%] w-[25%] h-[20%] cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(3)}
              onMouseEnter={() => setActiveLabel("Recording")}
              onMouseLeave={() => setActiveLabel(null)}
            />
            
            {/* Documentation area - step 4 */}
            <div 
              className="absolute bottom-[25%] right-[20%] w-[25%] h-[20%] cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(4)}
              onMouseEnter={() => setActiveLabel("Generate Documentation")}
              onMouseLeave={() => setActiveLabel(null)}
            />
          </div>
          
          {/* Custom cursor */}
          <Pointer>
            <MousePointer2 className="fill-blue-500 stroke-white" size={24} />
          </Pointer>
          
          {/* Label that follows the cursor */}
          {activeLabel && (
            <PointerFollower align="bottom-right">
              <div className="bg-blue-900 text-white px-3 py-2 rounded shadow-md max-w-[200px]">
                <div className="font-medium text-sm">{activeLabel}</div>
                <div className="text-xs mt-1 text-blue-100">{labelDescriptions[activeLabel]}</div>
              </div>
            </PointerFollower>
          )}
        </MouseTrackerProvider>
      )}
    </div>
  );
};
