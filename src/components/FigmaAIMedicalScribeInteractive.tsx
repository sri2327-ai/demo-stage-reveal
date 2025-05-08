
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Enhanced clinical descriptions for each step
const labelDescriptions: Record<string, string> = {
  "Authentication": "Secure clinical login with SSO integration and biometric options, compliant with healthcare security standards",
  "Patient Schedule": "Automatically syncs with your EHR, displaying patient demographics, visit reason, and relevant clinical history",
  "Templates": "Specialty-specific templates pre-configured for your clinical workflow with customizable sections",
  "Recording": "Multi-speaker transcription with medical terminology accuracy exceeding 98%, capturing provider-patient conversations naturally",
  "Generate Documentation": "Creates structured clinical notes with proper ICD-10/CPT/E&M codes based on medical decision making, with full EHR integration"
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
  
  const stepAreas = [
    { name: "Authentication", position: "top-[15%] left-[15%] w-[25%] h-[20%]" },
    { name: "Patient Schedule", position: "top-[15%] right-[15%] w-[25%] h-[20%]" },
    { name: "Templates", position: "top-[40%] left-[25%] w-[50%] h-[15%]" },
    { name: "Recording", position: "bottom-[25%] left-[20%] w-[25%] h-[20%]" },
    { name: "Generate Documentation", position: "bottom-[25%] right-[20%] w-[25%] h-[20%]", displayName: "Documentation" }
  ];
  
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
          
            {/* Interactive elements with improved animation */}
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
                      {area.displayName || area.name}
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
            
            {/* Clinical context enhanced label with smooth animation */}
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
          <FigmaAIMedicalScribeIllustration
            subStep={subStep}
            transcriptionActive={transcriptionActive}
            noteGeneration={noteGeneration}
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
