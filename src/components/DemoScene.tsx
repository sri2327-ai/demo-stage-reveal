
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeInteractive } from './FigmaAIMedicalScribeInteractive';
import { 
  MessageCircle, 
  Calendar, 
  FileText, 
  BellRing, 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  User, 
  Database, 
  Shield, 
  ClipboardCheck, 
  ArrowRight,
  Settings, 
  CalendarDays, 
  ClipboardList, 
  Mic, 
  Stethoscope, 
  Server
} from 'lucide-react';
import type { DemoStage } from '../types/demo';

interface DemoSceneProps {
  currentStage: number;
  stages: DemoStage[];
}

export const DemoScene: React.FC<DemoSceneProps> = ({ currentStage, stages }) => {
  const isMobile = useIsMobile();
  const [subStep, setSubStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transcriptionActive, setTranscriptionActive] = useState(false);
  const [noteGeneration, setNoteGeneration] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.info('DemoScene effect running with currentStage:', currentStage);
    setSubStep(0);

    // Reset states when stage changes
    setTranscriptionActive(false);
    setNoteGeneration(false);
  }, [currentStage]);

  // Handle user click on interactive elements
  const handleElementClick = (step: number) => {
    console.info('Interactive element clicked, step:', step);
    // Pause auto-advance
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
    
    // Auto-resume after inactivity (5 seconds)
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    
    resetTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStage, isPaused]);

  // Handle cursor movement for interactive areas
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPosition({ x, y });
    setIsVisible(true);
  };

  // Helper function to determine what to render based on stage
  const renderStageContent = () => {
    console.info('Current stage in DemoScene:', currentStage);
    
    switch (currentStage) {
      case 0: // Patient Engagement
        return (
          <div 
            className="w-full h-full flex items-center justify-center relative"
            onMouseMove={handleMouseMove}
          >
            <FigmaPatientEngagementIllustration
              subStep={subStep}
              cursorPosition={cursorPosition}
              isProcessingCall={false}
              onElementClick={handleElementClick}
              isInteractive={true}
            />
            
            {/* Custom cursor */}
            {isVisible && (
              <motion.div 
                className="pointer-events-none fixed z-50 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: cursorPosition.x,
                  y: cursorPosition.y
                }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-100/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                {cursorLabel && (
                  <div className="bg-blue-900 text-white px-2 py-1 rounded text-xs mt-1">
                    {cursorLabel}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        );
        
      case 1: // AI Medical Scribe
        return (
          <div 
            className="w-full h-full flex items-center justify-center relative"
            onMouseMove={handleMouseMove}
          >
            <FigmaAIMedicalScribeInteractive
              subStep={subStep}
              transcriptionActive={transcriptionActive}
              noteGeneration={noteGeneration}
              onElementClick={handleElementClick}
              isInteractive={true}
            />
            
            {/* Custom cursor */}
            {isVisible && (
              <motion.div 
                className="pointer-events-none fixed z-50 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: cursorPosition.x,
                  y: cursorPosition.y
                }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-100/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                {cursorLabel && (
                  <div className="bg-blue-900 text-white px-2 py-1 rounded text-xs mt-1">
                    {cursorLabel}
                  </div>
                )}
              </motion.div>
            )}
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
