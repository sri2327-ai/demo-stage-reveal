
import React, { useState, useEffect, useRef } from 'react';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { 
  MessageCircle, Calendar, FileText, BellRing, PhoneCall, 
  CheckCircle, Clock, User, Database, Shield, 
  ClipboardCheck, ArrowRight, Settings, CalendarDays, 
  ClipboardList, Mic, Stethoscope, Server, MousePointer2
} from 'lucide-react';
import { MouseTrackerProvider, Pointer, PointerFollower } from './ui/cursor';
import type { DemoStage } from '../types/demo';

interface DemoSceneProps {
  currentStage: number;
  stages: DemoStage[];
}

// Patient Engagement labels for hover effects
const patientEngagementLabels: Record<number, string> = {
  0: "AI answers patient calls and messages instantly",
  1: "AI checks provider calendar for availability",
  2: "AI automates patient intake, insurance, and medical history updates",
  3: "AI sends real-time confirmations, reminders, and follow-ups to ensure appointment adherence"
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
    }
  }, [currentStage]);
  
  // Auto-show label based on current subStep for Patient Engagement demo
  useEffect(() => {
    if (currentStage === 0 && !isPaused) {
      setActiveLabel(patientEngagementLabels[subStep]);
    }
  }, [subStep, currentStage, isPaused]);

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
    
    // For Patient Engagement demo, set the active label
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[step]);
    }
    
    // Auto-resume after longer inactivity (15 seconds)
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    
    resetTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 15000); // 15 seconds for better interaction time
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
      } else {
        setSubStep((prev) => (prev >= 3 ? 0 : prev + 1));
      }
    }, 7000); // Longer interval for better reading (7 seconds)

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
    } else if (step === null) {
      // Don't clear the label on mouse leave to keep it visible
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
                cursorPosition={{ x: 0, y: 0 }} // This prop is not used anymore with our cursor system
                isProcessingCall={false}
                onElementClick={handleElementClick}
                isInteractive={true}
                onHover={handlePatientEngagementHover}
              />
              
              {/* Custom cursor for stage 0 */}
              <Pointer>
                <MousePointer2 className="fill-blue-500 stroke-white" size={24} />
              </Pointer>
              
              {/* Always show active label with improved visibility */}
              <PointerFollower 
                align="bottom-center" 
                alwaysVisible={true}
                offsetY={30}
                style={{ 
                  zIndex: 100,
                  transform: 'translateX(-50%)' // Center horizontally
                }}
              >
                <div className="bg-blue-900 text-white px-4 py-3 rounded-lg shadow-lg border border-blue-700 max-w-[300px]">
                  <div className="font-medium">{activeLabel || patientEngagementLabels[subStep]}</div>
                </div>
              </PointerFollower>
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
        
      case 2: // Admin Tasks
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-2xl bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Administrative Task Automation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Insurance Verification</h4>
                    <p className="text-sm text-gray-600">Automated eligibility checks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                  <ClipboardCheck className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Prior Authorization</h4>
                    <p className="text-sm text-gray-600">Seamless approval process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <Database className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Claims Processing</h4>
                    <p className="text-sm text-gray-600">Error detection & submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50">
                  <ArrowRight className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Billing Optimization</h4>
                    <p className="text-sm text-gray-600">Revenue cycle enhancement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3: // Post-Visit Support
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-2xl bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Post-Visit Patient Support</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Treatment Adherence</h4>
                    <p className="text-sm text-gray-600">Personalized medication reminders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                  <Clock className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Care Plan Monitoring</h4>
                    <p className="text-sm text-gray-600">Ongoing progress tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <MessageCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Patient Questions</h4>
                    <p className="text-sm text-gray-600">24/7 AI-assisted responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50">
                  <User className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Recovery Tracking</h4>
                    <p className="text-sm text-gray-600">Outcome monitoring & reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Unknown stage</div>;
    }
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {renderStageContent()}
    </div>
  );
};
