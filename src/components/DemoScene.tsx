import React, { useState, useEffect, useRef } from 'react';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { FigmaAdminTasksInteractive } from './FigmaAdminTasksInteractive';
import { FigmaPostVisitSupportInteractive } from './FigmaPostVisitSupportInteractive';
import { 
  MousePointer2,
  Heart,
  CalendarCheck,
  MessageSquare, 
  Activity
} from 'lucide-react';
import { MouseTrackerProvider, Pointer, PointerFollower } from './ui/cursor';
import type { DemoStage } from '../types/demo';

// Updated patient engagement labels with shorter, clearer descriptions
const patientEngagementLabels: Record<number, string> = {
  0: "AI answers patient calls and messages instantly",
  1: "AI checks provider calendar for availability",
  2: "AI automates patient intake, insurance, and medical history updates",
  3: "AI sends real-time confirmations, reminders, and follow-ups to ensure appointment adherence"
};

// Updated medical scribe labels with concise, informative descriptions
const medicalScribeLabels: Record<number, string> = {
  0: "Log in to Crush",
  1: "Auto-syncs schedule from EHR",
  2: "Auto-selects templates by visit type",
  3: "Transcribes multilingual encounters",
  4: "Generates notes with codes, syncs to EHR"
};

// Admin tasks labels with clear descriptions
const adminTasksLabels: Record<number, string> = {
  0: "Triggers prescription refills, referral letters, and lab orders",
  1: "Emails visit summaries to patients via secure email or the patient portal",
  2: "Monitors insurance verification, claims processing, and payment tracking"
};

// Post-Visit support labels
const postVisitLabels: Record<number, string> = {
  0: "Personalized medication reminders for treatment adherence",
  1: "Ongoing progress tracking through the care plan monitoring system",
  2: "24/7 AI-assisted responses to patient questions with clinical oversight",
  3: "Comprehensive monitoring and reporting of recovery outcomes"
};

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const [subStep, setSubStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const [activeLabel, setActiveLabel] = useState('');
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset states when stage changes
  useEffect(() => {
    console.info('DemoScene effect running with currentStage:', currentStage);
    setSubStep(0);
    setTranscriptionActive(false);
    setNoteGeneration(false);
    
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
    console.info('Interactive element clicked, step:', step);
    // Pause auto-advance for longer duration
    setIsPaused(true);
    setSubStep(step);
    
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
      
      // Pause auto-advance during hover
      setIsPaused(true);
      
      // Clear any existing timer
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
      
      // Auto-resume after inactivity
      resetTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 15000); // 15 seconds pause during hover
    }
  };

  // Helper function to determine what to render based on stage
  const renderStageContent = () => {
    console.info('Current stage in DemoScene:', currentStage);
    
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
              
              {/* Custom cursor for stage 0 with larger size and gradient */}
              <Pointer>
                <div className="flex flex-col items-center">
                  <MousePointer2 className="stroke-white h-8 w-8" size={32} style={{
                    fill: "url(#cursor-gradient)"
                  }} />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent mt-1">You</span>
                </div>
              </Pointer>
              
              {/* Improved label display */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-lg border border-white/20 max-w-[500px]">
                  <div className="font-medium text-xl">
                    {activeLabel || patientEngagementLabels[subStep]}
                  </div>
                </div>
              </div>
            </div>
          </MouseTrackerProvider>
        );
        
      case 1: // AI Medical Scribe
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaAIMedicalScribeInteractive
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
              onElementClick={handleElementClick}
              isInteractive={true}
            />
          </div>
        );
        
      case 2: // Admin Tasks - Using our new interactive illustration
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaAdminTasksInteractive
              subStep={subStep}
              onElementClick={handleElementClick}
              isInteractive={true}
            />
          </div>
        );
        
      case 3: // Post-Visit Support - Now using our new interactive illustration
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            <FigmaPostVisitSupportInteractive
              subStep={subStep}
              onElementClick={handleElementClick}
              isInteractive={true}
            />
          </div>
        );

      default:
        return <div>Unknown stage</div>;
    }
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* SVG gradient definition for cursor */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#143151" />
            <stop offset="100%" stopColor="#387E89" />
          </linearGradient>
        </defs>
      </svg>
      
      {renderStageContent()}
    </div>
  );
};
