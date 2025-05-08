
import React from 'react';
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
  // Define interactive areas that will overlay on top of the illustration
  // These will trigger the appropriate step changes when clicked
  
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
              title="Authentication"
            />
            
            {/* Schedule area - step 1 */}
            <div 
              className="absolute top-[15%] right-[15%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(1)}
              title="Patient Schedule"
            />
            
            {/* Templates area - step 2 */}
            <div 
              className="absolute top-[40%] left-[25%] w-[50%] h-[15%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(2)}
              title="Templates"
            />
            
            {/* Recording area - step 3 */}
            <div 
              className="absolute bottom-[25%] left-[20%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(3)}
              title="Recording"
            />
            
            {/* Documentation area - step 4 */}
            <div 
              className="absolute bottom-[25%] right-[20%] w-[25%] h-[20%] pointer-events-auto cursor-pointer rounded-lg hover:bg-blue-100/30"
              onClick={() => onElementClick && onElementClick(4)}
              title="Generate Documentation"
            />
          </div>
        </>
      )}
    </div>
  );
};
