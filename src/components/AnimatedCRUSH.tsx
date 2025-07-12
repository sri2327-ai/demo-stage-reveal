
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
  ChevronRight
} from 'lucide-react';

export const AnimatedCRUSH = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptionText, setTranscriptionText] = useState('');
  const [showNote, setShowNote] = useState(false);

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
        } else {
          // Reset
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">CRUSH AI Scribe</h3>
              <p className="text-white/80 text-sm">Live Documentation</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`} />
            <span className="text-white/80 text-xs">{isRecording ? 'Recording' : 'Ready'}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 h-80">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="waiting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"
              >
                <Mic className="w-8 h-8 text-gray-400" />
              </motion.div>
              <p className="text-gray-600">Ready to listen to patient encounter...</p>
            </motion.div>
          )}

          {(currentStep >= 1 && currentStep <= 4) && (
            <motion.div
              key="transcribing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Mic className="w-4 h-4 text-red-500" />
                  </motion.div>
                </div>
                <span className="text-sm font-medium text-gray-700">Live Transcription</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 min-h-[100px]">
                <motion.p
                  key={transcriptionText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-800"
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Chief Complaint</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Symptoms</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Severity</span>
                </motion.div>
              )}
            </motion.div>
          )}

          {showNote && (
            <motion.div
              key="note"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full overflow-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">Generated Clinical Note</span>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded"
                >
                  <h4 className="font-semibold text-blue-900 text-sm mb-1">Chief Complaint</h4>
                  <p className="text-blue-800 text-sm">{generatedNote.chief_complaint}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-green-50 border-l-4 border-green-400 p-3 rounded"
                >
                  <h4 className="font-semibold text-green-900 text-sm mb-1">HPI</h4>
                  <p className="text-green-800 text-sm">{generatedNote.hpi}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded"
                >
                  <h4 className="font-semibold text-purple-900 text-sm mb-1">Assessment & Plan</h4>
                  <p className="text-purple-800 text-sm">{generatedNote.assessment}</p>
                  <p className="text-purple-800 text-sm mt-1">{generatedNote.plan}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>99.9% Accurate</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs bg-[#387E89] text-white px-3 py-1 rounded-full hover:bg-[#306b75] transition-colors"
          >
            Send to EHR
          </motion.button>
        </div>
      </div>
    </div>
  );
};
