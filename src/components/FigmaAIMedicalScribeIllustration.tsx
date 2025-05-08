import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, FileText, BellRing } from 'lucide-react';

interface FigmaAIMedicalScribeIllustrationProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  onHover?: (step: number | null) => void;
  hideTitle?: boolean;
}

export const FigmaAIMedicalScribeIllustration: React.FC<FigmaAIMedicalScribeIllustrationProps> = ({ 
  subStep, 
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false,
  onHover,
  hideTitle = false
}) => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video bg-white rounded-xl border border-blue-200 overflow-hidden shadow-lg">
        {/* App header - only shown when hideTitle is false */}
        {!hideTitle && (
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-3 flex items-center justify-between">
            <div className="font-bold">S10.AI Medical Scribe</div>
            <div className="flex space-x-3">
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        )}
        
        {/* Main interface - adjust height based on whether title is shown */}
        <div className={`flex ${hideTitle ? 'h-full' : 'h-[calc(100%-3rem)]'}`}>
          {/* Left sidebar */}
          <div className="w-1/6 bg-[#143151]/5 border-r border-[#387E89]/10 flex flex-col items-center py-4 space-y-6">
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(0)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(0)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <MessageCircle size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 1 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 1 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(1)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(1)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <Calendar size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 2 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 2 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(2)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(2)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <FileText size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 3 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 3 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(3)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(3)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <BellRing size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 4 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 4 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(4)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(4)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <FileText size={20} />
            </motion.div>
            
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 5 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 5 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(5)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(5)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <FileText size={20} />
            </motion.div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1 p-4 overflow-hidden">
            {subStep === 0 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Authentication</div>
                <div className="flex-1 grid place-items-center">
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg border border-[#387E89]/20 max-w-sm w-full"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="text-center mb-4">
                      <div className="text-xl font-bold text-[#143151]">Welcome to S10.AI</div>
                      <div className="text-sm text-gray-500">Medical Scribe Assistant</div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-[#143151] mb-1">Username</label>
                      <input type="text" className="w-full px-3 py-2 border border-[#387E89]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#387E89]" value="dr.smith@clinic.org" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-[#143151] mb-1">Password</label>
                      <input type="password" className="w-full px-3 py-2 border border-[#387E89]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#387E89]" value="••••••••••" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white py-2 rounded-md hover:opacity-90 transition-opacity">
                      Sign In
                    </button>
                    <div className="mt-4 text-xs text-center text-[#387E89]">
                      <a href="#" className="hover:underline">Forgot Password?</a>
                      <span className="mx-2">•</span>
                      <a href="#" className="hover:underline">Help</a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {subStep === 1 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Today's Schedule</div>
                <div className="flex-1 overflow-y-auto">
                  <div className="mb-3 flex justify-between items-center">
                    <div className="text-sm text-[#143151]">Thursday, May 8, 2025</div>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 text-xs bg-[#143151] text-white rounded">Day</button>
                      <button className="px-2 py-1 text-xs border border-[#387E89]/30 text-[#143151] rounded">Week</button>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 cursor-pointer hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium text-[#143151]">Sarah Johnson</div>
                        <div className="text-sm text-gray-500">9:00 AM - Follow-up</div>
                        <div className="text-xs mt-1 text-[#387E89]">Migraine management</div>
                      </div>
                      <div className="flex items-start">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Checked In</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#387E89]/10 p-3 rounded-lg border border-[#387E89]/30 mb-3 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium text-[#143151]">Michael Brown</div>
                        <div className="text-sm text-gray-500">10:30 AM - New Patient</div>
                        <div className="text-xs mt-1 text-[#387E89]">Hypertension evaluation</div>
                      </div>
                      <div className="flex items-start">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Current</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 cursor-pointer hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium text-[#143151]">Emily Davis</div>
                        <div className="text-sm text-gray-500">1:00 PM - Annual Physical</div>
                        <div className="text-xs mt-1 text-[#387E89]">Routine check-up</div>
                      </div>
                      <div className="flex items-start">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Scheduled</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 cursor-pointer hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium text-[#143151]">James Wilson</div>
                        <div className="text-sm text-gray-500">2:30 PM - Follow-up</div>
                        <div className="text-xs mt-1 text-[#387E89]">Diabetes management</div>
                      </div>
                      <div className="flex items-start">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Scheduled</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {subStep === 2 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Templates</div>
                <div className="flex-1 overflow-y-auto">
                  <div className="mb-3">
                    <div className="text-sm text-[#143151] mb-2">Patient: Michael Brown - Hypertension Evaluation</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.button 
                        className="px-3 py-1 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm rounded-full"
                        whileHover={{ scale: 1.05 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        Hypertension
                      </motion.button>
                      <motion.button 
                        className="px-3 py-1 border border-[#387E89]/30 text-[#143151] text-sm rounded-full hover:bg-[#387E89]/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        New Patient
                      </motion.button>
                      <motion.button 
                        className="px-3 py-1 border border-[#387E89]/30 text-[#143151] text-sm rounded-full hover:bg-[#387E89]/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        Cardiovascular
                      </motion.button>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-white p-4 rounded-lg border border-[#387E89]/20 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="font-medium text-[#143151] mb-2">Template Sections</div>
                    <div className="space-y-2">
                      <div className="p-2 bg-[#143151]/5 rounded border border-[#387E89]/10">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-[#143151]">Chief Complaint</div>
                          <div className="text-xs text-[#387E89]">Required</div>
                        </div>
                      </div>
                      <div className="p-2 bg-[#143151]/5 rounded border border-[#387E89]/10">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-[#143151]">History of Present Illness</div>
                          <div className="text-xs text-[#387E89]">Required</div>
                        </div>
                      </div>
                      <div className="p-2 bg-[#143151]/5 rounded border border-[#387E89]/10">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-[#143151]">Past Medical History</div>
                          <div className="text-xs text-[#387E89]">Required</div>
                        </div>
                      </div>
                      <div className="p-2 bg-[#143151]/5 rounded border border-[#387E89]/10">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-[#143151]">Medications</div>
                          <div className="text-xs text-[#387E89]">Required</div>
                        </div>
                      </div>
                      <div className="p-2 bg-[#143151]/5 rounded border border-[#387E89]/10">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm text-[#143151]">Vital Signs</div>
                          <div className="text-xs text-[#387E89]">Required</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <button className="px-4 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm rounded hover:opacity-90 transition-opacity">
                        Start Encounter
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {subStep === 3 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Recording</div>
                <div className="flex-1 overflow-y-auto">
                  <div className="mb-3 flex justify-between items-center">
                    <div className="text-sm text-[#143151]">Patient: Michael Brown - Hypertension Evaluation</div>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="h-2 w-2 rounded-full bg-red-500"
                        animate={{
                          scale: transcriptionActive ? [1, 1.5, 1] : 1,
                          opacity: transcriptionActive ? [1, 0.7, 1] : 1
                        }}
                        transition={{
                          repeat: transcriptionActive ? Infinity : 0,
                          duration: 1.5
                        }}
                      />
                      <span className="text-xs font-medium text-[#143151]">
                        {transcriptionActive ? "Recording" : "Ready to Record"}
                      </span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 relative overflow-hidden"
                    initial={{ height: 60 }}
                    animate={{ 
                      height: transcriptionActive ? 300 : 60
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="font-medium text-[#143151]">Real-time Transcription</div>
                      <div>
                        <button 
                          className={`px-3 py-1 text-xs rounded-full ${
                            transcriptionActive 
                              ? "bg-red-500 text-white" 
                              : "bg-[#143151] text-white"
                          }`}
                        >
                          {transcriptionActive ? "Stop" : "Start"}
                        </button>
                      </div>
                    </div>
                    
                    {transcriptionActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="overflow-y-auto h-[calc(100%-2rem)]"
                      >
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <div className="font-medium text-[#143151] text-sm min-w-[80px]">Dr. Smith:</div>
                            <div className="text-sm">Good morning, Mr. Brown. How are you feeling today?</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="font-medium text-[#387E89] text-sm min-w-[80px]">Patient:</div>
                            <div className="text-sm">I've been having these headaches and feeling dizzy sometimes, especially in the morning.</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="font-medium text-[#143151] text-sm min-w-[80px]">Dr. Smith:</div>
                            <div className="text-sm">I see. And how long have you been experiencing these symptoms?</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="font-medium text-[#387E89] text-sm min-w-[80px]">Patient:</div>
                            <div className="text-sm">For about three weeks now. My wife insisted I come in because she noticed I was also having trouble sleeping.</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="font-medium text-[#143151] text-sm min-w-[80px]">Dr. Smith:</div>
                            <motion.div 
                              className="text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              Have you checked your blood pressure at home or made any changes to your diet recently?
                            </motion.div>
                          </div>
                          <div className="flex gap-2">
                            <div className="font-medium text-[#387E89] text-sm min-w-[80px]">Patient:</div>
                            <motion.div 
                              className="text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.6 }}
                            >
                              I haven't checked my blood pressure. But I did start a new job last month with longer hours. Been eating more takeout too.
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {!transcriptionActive && (
                      <div className="text-sm text-gray-500">
                        Press Start to begin recording the patient encounter
                      </div>
                    )}
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                    initial={{ opacity: transcriptionActive ? 1 : 0 }}
                    animate={{ opacity: transcriptionActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-2">Vitals</div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xs text-[#387E89]">Blood Pressure</div>
                        <div className="font-medium">142/94 mmHg</div>
                      </div>
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xs text-[#387E89]">Heart Rate</div>
                        <div className="font-medium">78 bpm</div>
                      </div>
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xs text-[#387E89]">Temperature</div>
                        <div className="font-medium">98.6°F</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {subStep === 4 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Generate Documentation</div>
                <div className="flex-1 overflow-y-auto">
                  <motion.div
                    className="mb-3 p-3 bg-[#143151]/5 rounded-lg border border-[#387E89]/10 flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-sm text-[#143151]">Patient: Michael Brown - Hypertension Evaluation</div>
                    <div>
                      <button 
                        className={`px-3 py-1 text-xs rounded-full ${
                          noteGeneration
                            ? "bg-[#387E89]/20 text-[#143151] border border-[#387E89]/30"
                            : "bg-gradient-to-r from-[#143151] to-[#387E89] text-white"
                        }`}
                      >
                        {noteGeneration ? "Generating..." : "Generate Note"}
                      </button>
                    </div>
                  </motion.div>
                  
                  {!noteGeneration ? (
                    <>
                      <motion.div
                        className="bg-white p-4 rounded-lg border border-[#387E89]/20 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="font-medium text-[#143151]">Previous Visit Summary</div>
                          <div className="text-xs text-[#387E89]">March 12, 2025</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <div className="font-medium mb-1">Chief Complaint:</div>
                            <div className="text-gray-700">Occasional headaches, fatigue</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Assessment:</div>
                            <div className="text-gray-700">
                              1. Tension headache (G44.209)<br />
                              2. Fatigue (R53.83)<br />
                              3. Family history of hypertension
                            </div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Plan:</div>
                            <div className="text-gray-700">
                              1. OTC pain management for headaches<br />
                              2. Sleep hygiene counseling<br />
                              3. Follow up in 2 months or as needed<br />
                              4. Monitor BP at home
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="bg-white p-4 rounded-lg border border-[#387E89]/20 text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="text-lg font-medium text-[#143151] mb-2">Ready to Generate Clinical Note</div>
                        <div className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                          The AI assistant will create a structured clinical note based on the recorded conversation, patient data, and previous visit information.
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded hover:opacity-90 transition-opacity">
                          Start Generation
                        </button>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="bg-white p-4 rounded-lg border border-[#387E89]/20 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="font-medium text-[#143151] mb-3">Clinical Note</div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium mb-1">Chief Complaint:</div>
                            <div>Headaches and dizziness, especially in the morning, for approximately three weeks. Patient also reports difficulty sleeping.</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">History of Present Illness:</div>
                            <div>Mr. Brown presents with a 3-week history of morning headaches and intermittent dizziness. Symptoms began shortly after starting a new job with increased stress and longer working hours. Patient reports increased consumption of restaurant/takeout food. No previous diagnosis of hypertension. No family history of stroke reported.</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Vital Signs:</div>
                            <div>BP: 142/94 mmHg, HR: 78 bpm, Temp: 98.6°F, RR: 16, SpO2: 98% on room air</div>
                          </div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            <div className="font-medium mb-1">Assessment:</div>
                            <div>
                              <motion.span 
                                className="bg-yellow-100 px-1 py-0.5 rounded-sm inline-block mr-1"
                                animate={{ backgroundColor: ["#fef9c3", "#fde68a", "#fef9c3"] }}
                                transition={{ repeat: 2, duration: 1.5 }}
                              >
                                1. Essential hypertension (I10)
                              </motion.span>, new diagnosis<br />
                              <motion.span 
                                className="bg-yellow-100 px-1 py-0.5 rounded-sm inline-block mr-1"
                                animate={{ backgroundColor: ["#fef9c3", "#fde68a", "#fef9c3"] }}
                                transition={{ repeat: 2, duration: 1.5, delay
