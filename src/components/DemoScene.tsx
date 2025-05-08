
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
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[subStep]);
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
    
    // For Patient Engagement demo, set the active label
    if (currentStage === 0) {
      setActiveLabel(patientEngagementLabels[step]);
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
              
              {/* Custom cursor for stage 0 */}
              <Pointer>
                <div className="flex flex-col items-center">
                  <MousePointer2 className="fill-[#143151] stroke-white" size={24} />
                  <span className="text-xs font-medium text-[#143151] mt-1">You</span>
                </div>
              </Pointer>
              
              {/* Prominent label display similar to reference screenshot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-8 py-4 rounded-lg shadow-lg border-2 border-[#143151]/20 max-w-[500px]">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#143151] rounded-full p-2">
                      <span className="text-lg font-bold">AI</span>
                    </div>
                    <div className="font-bold text-xl">
                      {activeLabel ? "AI Patient Engagement" : "Patient Engagement"}
                    </div>
                  </div>
                  <div className="mt-2 text-sm">{activeLabel || patientEngagementLabels[subStep]}</div>
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
        
      case 2: // Admin Tasks
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-2xl bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#143151]">Administrative Task Automation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#143151]/10">
                  <Shield className="text-[#387E89] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Insurance Verification</h4>
                    <p className="text-sm text-gray-600">Automated eligibility checks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#387E89]/10">
                  <ClipboardCheck className="text-[#143151] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Prior Authorization</h4>
                    <p className="text-sm text-gray-600">Seamless approval process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#143151]/10">
                  <Database className="text-[#387E89] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Claims Processing</h4>
                    <p className="text-sm text-gray-600">Error detection & submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#387E89]/10">
                  <ArrowRight className="text-[#143151] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Billing Optimization</h4>
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
              <h3 className="text-xl font-bold mb-4 text-[#143151]">Post-Visit Patient Support</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#143151]/10">
                  <CheckCircle className="text-[#387E89] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Treatment Adherence</h4>
                    <p className="text-sm text-gray-600">Personalized medication reminders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#387E89]/10">
                  <Clock className="text-[#143151] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Care Plan Monitoring</h4>
                    <p className="text-sm text-gray-600">Ongoing progress tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#143151]/10">
                  <MessageCircle className="text-[#387E89] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Patient Questions</h4>
                    <p className="text-sm text-gray-600">24/7 AI-assisted responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#387E89]/10">
                  <User className="text-[#143151] mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-[#143151]">Recovery Tracking</h4>
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
