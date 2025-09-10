
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  FileText, 
  Check, 
  Clock, 
  User, 
  Calendar,
  Heart,
  Pill,
  Activity,
  ChevronRight,
  Upload,
  Database,
  Globe
} from 'lucide-react';

export const AnimatedCRUSH = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptionText, setTranscriptionText] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [showEHRPush, setShowEHRPush] = useState(false);

  const transcriptionSteps = [
    "Patient reports chest pain...",
    "Patient reports chest pain for 2 hours...",
    "Patient reports chest pain for 2 hours, radiating to left arm...",
    "Patient reports chest pain for 2 hours, radiating to left arm, 7/10 severity..."
  ];

  const generatedNote = {
    chief_complaint: "Chest pain x 2 hours",
    hpi: "52-year-old male presents with acute onset chest pain, 7/10 severity, radiating to left arm",
    assessment: "Chest pain, rule out acute coronary syndrome",
    plan: "ECG, troponins, chest X-ray"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 0) {
          setIsRecording(true);
          setTranscriptionText('');
          setShowNote(false);
          setShowEHRPush(false);
          return 1;
        } else if (prev >= 1 && prev < 5) {
          // Transcription phase
          if (prev < 4) {
            setTranscriptionText(transcriptionSteps[prev - 1]);
          } else {
            setIsRecording(false);
            setShowNote(true);
          }
          return prev + 1;
        } else if (prev === 5) {
          // Show EHR push after note generation
          setShowEHRPush(true);
          return prev + 1;
        } else {
          // Reset
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden h-[280px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">CRUSH AI Scribe</h3>
              <p className="text-white/80 text-xs">Live Documentation</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isRecording ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`} />
            <span className="text-white/80 text-xs">{isRecording ? 'Recording' : 'Ready'}</span>
          </div>
        </div>
      </div>

      {/* Content Area - Compact */}
      <div className="p-4 flex-1 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="waiting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2"
              >
                <Mic className="w-5 h-5 text-gray-400" />
              </motion.div>
              <p className="text-gray-600 text-sm">Ready to listen...</p>
            </motion.div>
          )}

          {(currentStep >= 1 && currentStep <= 4) && (
            <motion.div
              key="transcribing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Mic className="w-3 h-3 text-red-500" />
                  </motion.div>
                </div>
                <span className="text-xs font-medium text-gray-700">Live Transcription</span>
              </div>
              
              <div className="bg-gray-50 rounded-md p-3 min-h-[80px] flex-1">
                <motion.p
                  key={transcriptionText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-800 text-sm"
                >
                  {transcriptionText}
                  {isRecording && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </motion.p>
              </div>

              {currentStep > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 flex flex-wrap gap-1"
                >
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">Chief Complaint</span>
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Symptoms</span>
                </motion.div>
              )}
            </motion.div>
          )}

          {showNote && !showEHRPush && (
            <motion.div
              key="note"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full overflow-auto"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-xs font-medium text-gray-700">Generated Clinical Note</span>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-blue-50 border-l-2 border-blue-400 p-2 rounded"
                >
                  <h4 className="font-medium text-blue-900 text-xs mb-1">Chief Complaint</h4>
                  <p className="text-blue-800 text-xs">{generatedNote.chief_complaint}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-green-50 border-l-2 border-green-400 p-2 rounded"
                >
                  <h4 className="font-medium text-green-900 text-xs mb-1">Assessment & Plan</h4>
                  <p className="text-green-800 text-xs">{generatedNote.assessment}</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {showEHRPush && (
            <motion.div
              key="ehr-push"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3"
              >
                <Upload className="w-6 h-6 text-blue-600" />
              </motion.div>
              
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Pushing to EHR</h3>
              <div className="bg-gray-50 rounded-md p-3 mb-2 w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-3 h-3 text-blue-600" />
                    <span className="font-medium text-gray-800 text-xs">Epic MyChart</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-blue-600 border-t-transparent rounded-full"
                  />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    className="bg-blue-600 h-1.5 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-1 text-xs text-gray-500"
              >
                <Check className="w-3 h-3 text-green-500" />
                <span>Complete in 60s</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Compact Footer */}
      <div className="bg-gray-50 px-4 py-2 border-t flex-shrink-0">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>99.9% Accurate</span>
            </div>
          </div>
          <span>AI Documentation</span>
        </div>
      </div>
    </div>
  );
};
