
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { FigmaAdminTasksInteractive } from './FigmaAdminTasksInteractive';
import { FigmaPostVisitSupportInteractive } from './FigmaPostVisitSupportInteractive';
import { MousePointer2 } from 'lucide-react';
import { MouseTrackerProvider, Pointer } from './ui/cursor';
import type { DemoStage, DemoSceneProps } from '../types/demo';

// Updated patient engagement labels to show integration with existing provider tools
const patientEngagementLabels: Record<number, string> = {
  0: "AI assistant answers patient calls and messages through your existing communication channels",
  1: "AI checks your provider calendar systems for real-time availability",
  2: "AI works with your intake forms to automate patient data collection",
  3: "AI sends confirmations through your existing patient notification systems"
};

// Medical scribe labels remain focused on the S10.AI product
const medicalScribeLabels: Record<number, string> = {
  0: "Log in to S10.AI Medical Scribe",
  1: "Auto-syncs schedule from your EHR",
  2: "Auto-selects templates by visit type",
  3: "Transcribes multilingual encounters",
  4: "Generates notes with codes, syncs to your EHR"
};

// Admin tasks labels updated to show integration with existing systems
const adminTasksLabels: Record<number, string> = {
  0: "Triggers prescription refills through your e-prescribing system",
  1: "Emails visit summaries using your existing patient portal",
  2: "Monitors your insurance systems for verification and claims tracking"
};

// Post-Visit support labels updated to show integration
const postVisitLabels: Record<number, string> = {
  0: "Sends medication reminders through your patient portal",
  1: "Tracks progress using your existing care plan monitoring tools",
  2: "Provides 24/7 AI-assisted responses through your messaging system",
  3: "Monitors recovery outcomes with your existing tracking tools"
};

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const [subStep, setSubStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const [activeLabel, setActiveLabel] = useState('');
  const [interactionActive, setInteractionActive] = useState(false);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset states when stage changes
  useEffect(() => {
    setSubStep(0);
    setTranscriptionActive(false);
    setNoteGeneration(false);
    setInteractionActive(false);
    
    // Auto-show first label after stage change
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[0]);
    } else if (currentStage === 1) {
      setActiveLabel(medicalScribeLabels[0]);
    } else if (currentStage === 2) {
      setActiveLabel(adminTasksLabels[0]);
    } else if (currentStage === 3) {
      setActiveLabel(postVisitLabels[0]);
    }
  }, [currentStage]);
  
  // Auto-show label based on current subStep
  useEffect(() => {
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[subStep]);
    } else if (currentStage === 1) {
      setActiveLabel(medicalScribeLabels[subStep]);
    } else if (currentStage === 2) {
      setActiveLabel(adminTasksLabels[subStep]);
    } else if (currentStage === 3) {
      setActiveLabel(postVisitLabels[subStep]);
    }
  }, [subStep, currentStage]);

  // Handle user click on interactive elements
  const handleElementClick = (step: number) => {
    // Pause auto-advance for longer duration
    setIsPaused(true);
    setSubStep(step);
    setInteractionActive(true);
    
    // For AI Medical Scribe demo, handle special states
    if (currentStage === 1) {
      // Step 3 is recording/transcription
      if (step === 3) {
        setTranscriptionActive(true);
      }
      // Step 4 is note generation
      else if (step === 4) {
        setNoteGeneration(true);
      } else {
        // Reset these states for other steps
        setTranscriptionActive(false);
        setNoteGeneration(false);
      }
    }
    
    // Set the active label based on current stage
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[step]);
    } else if (currentStage === 1) {
      setActiveLabel(medicalScribeLabels[step]);
    } else if (currentStage === 2) {
      setActiveLabel(adminTasksLabels[step]);
    } else if (currentStage === 3) {
      setActiveLabel(postVisitLabels[step]);
    }
    
    // Auto-resume after longer inactivity (20 seconds)
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    
    resetTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      setInteractionActive(false);
    }, 20000); // 20 seconds for better interaction time
  };

  // Auto-advance substeps unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (currentStage === 1) { // For AI Medical Scribe
        setSubStep((prev) => {
          const nextStep = prev >= 4 ? 0 : prev + 1;
          
          // Update transcription and note generation states based on step
          if (nextStep === 3) {
            setTranscriptionActive(true);
          } else if (nextStep === 4) {
            setNoteGeneration(true);
          } else {
            setTranscriptionActive(false);
            setNoteGeneration(false);
          }
          
          return nextStep;
        });
      } else if (currentStage === 2) { // For Admin Tasks
        setSubStep((prev) => (prev >= 2 ? 0 : prev + 1));
      } else if (currentStage === 3) { // For Post-Visit Support
        setSubStep((prev) => (prev >= 3 ? 0 : prev + 1));
      } else {
        setSubStep((prev) => (prev >= 3 ? 0 : prev + 1));
      }
    }, 10000); // Longer interval for better reading (10 seconds)

    return () => clearInterval(interval);
  }, [currentStage, isPaused]);

  // Helper function to handle hovering over patient engagement steps
  const handlePatientEngagementHover = (step: number | null) => {
    if (step !== null && patientEngagementLabels[step]) {
      setActiveLabel(patientEngagementLabels[step]);
      setInteractionActive(true);
      
      // Pause auto-advance during hover
      setIsPaused(true);
      
      // Clear any existing timer
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
      
      // Auto-resume after inactivity
      resetTimerRef.current = setTimeout(() => {
        setIsPaused(false);
        setInteractionActive(false);
      }, 15000); // 15 seconds pause during hover
    } else {
      setInteractionActive(false);
    }
  };

  // Helper function to determine what to render based on stage
  const renderStageContent = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        return (
          <MouseTrackerProvider>
            <div className="w-full h-full flex items-center justify-center relative">
              <FigmaPatientEngagementIllustration
                subStep={subStep}
                cursorPosition={{ x: 0, y: 0 }}
                isProcessingCall={false}
                onElementClick={handleElementClick}
                isInteractive={true}
                onHover={handlePatientEngagementHover}
              />
          
              {/* Consistent cursor styling with SVG gradient */}
              <Pointer>
                <div className="flex flex-col items-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="filter drop-shadow-md">
                    <defs>
                      <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#143151" />
                        <stop offset="100%" stopColor="#387E89" />
                      </linearGradient>
                    </defs>
                    <MousePointer2 size={32} className="stroke-white" style={{
                      fill: "url(#cursor-gradient)"
                    }} />
                  </svg>
                  <span className="text-sm font-medium text-[#387E89] mt-1 whitespace-nowrap bg-white px-2 py-0.5 rounded-md shadow-sm">You</span>
                </div>
              </Pointer>
              
              {/* Enhanced tooltip with bigger animation */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={subStep}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: interactionActive ? 1.1 : 1.05
                  }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-6 py-4 rounded-lg shadow-xl max-w-[500px] mt-6">
                    <div className="font-bold text-xl">
                      {currentStage === 0 && subStep === 0 ? "Patient Messages" : 
                       currentStage === 0 && subStep === 1 ? "Appointment Scheduling" :
                       currentStage === 0 && subStep === 2 ? "Patient Intake" :
                       "Appointment Confirmations"}
                    </div>
                    <div className="mt-2 text-sm">
                      {activeLabel || patientEngagementLabels[subStep]}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MouseTrackerProvider>
        );
        
      case 1: // AI Medical Scribe - Our flagship product
        return (
          <AnimatePresence mode="wait">
            <motion.div 
              key="medical-scribe"
              className="w-full h-full flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <FigmaAIMedicalScribeInteractive
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                onElementClick={handleElementClick}
                isInteractive={true}
              />
            </motion.div>
          </AnimatePresence>
        );
        
      case 2: // Admin Tasks
        return (
          <AnimatePresence mode="wait">
            <motion.div 
              key="admin-tasks"
              className="w-full h-full flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <FigmaAdminTasksInteractive
                subStep={subStep}
                onElementClick={handleElementClick}
                isInteractive={true}
                hideTitle={true}
              />
            </motion.div>
          </AnimatePresence>
        );
        
      case 3: // Post-Visit Support
        return (
          <AnimatePresence mode="wait">
            <motion.div 
              key="post-visit"
              className="w-full h-full flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <FigmaPostVisitSupportInteractive
                subStep={subStep}
                onElementClick={handleElementClick}
                isInteractive={true}
                hideTitle={true}
              />
            </motion.div>
          </AnimatePresence>
        );

      default:
        return <div>Unknown stage</div>;
    }
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* SVG gradient definition for cursor - consistent with clinical theme */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#143151" />
            <stop offset="100%" stopColor="#387E89" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Enhanced transitions between stages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {renderStageContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
