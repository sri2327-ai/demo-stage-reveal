import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  ClipboardList, 
  Mic, 
  FileText, 
  Stethoscope,
  CheckCircle,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';

interface FigmaAIMedicalScribeIllustrationProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
}

export const FigmaAIMedicalScribeIllustration: React.FC<FigmaAIMedicalScribeIllustrationProps> = ({ 
  subStep, 
  transcriptionActive, 
  noteGeneration 
}) => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video bg-white rounded-xl border border-blue-200 overflow-hidden shadow-lg">
        {/* App header */}
        <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="font-bold">S10.AI Medical Scribe</div>
          <div className="flex space-x-3">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Main interface */}
        <div className="flex h-[calc(100%-3rem)]">
          {/* Left sidebar */}
          <div className="w-1/6 bg-blue-50 border-r border-blue-100 flex flex-col items-center py-4 space-y-6">
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-blue-500 text-white' : 'text-blue-700'}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <User size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 1 ? 'bg-blue-500 text-white' : 'text-blue-700'}`}
              animate={{ scale: subStep === 1 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 2 ? 'bg-blue-500 text-white' : 'text-blue-700'}`}
              animate={{ scale: subStep === 2 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <ClipboardList size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 3 ? 'bg-blue-500 text-white' : 'text-blue-700'}`}
              animate={{ scale: subStep === 3 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mic size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 4 ? 'bg-blue-500 text-white' : 'text-blue-700'}`}
              animate={{ scale: subStep === 4 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText size={20} />
            </motion.div>
          </div>
          
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Login/Auth - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Provider Authentication</div>
                <div className="flex-1 border border-blue-100 rounded-lg p-6 flex flex-col items-center justify-center">
                  <motion.div 
                    className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <User className="text-white" size={40} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-lg font-medium text-blue-900 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Dr. Sarah Johnson
                  </motion.div>
                  
                  <motion.div 
                    className="text-sm text-blue-600 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Neurology
                  </motion.div>
                  
                  <motion.div 
                    className="w-full max-w-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex mb-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mr-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8, type: "spring" }}
                        >
                          <CheckCircle className="text-green-600" size={16} />
                        </motion.div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mr-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.9, type: "spring" }}
                        >
                          <CheckCircle className="text-green-600" size={16} />
                        </motion.div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mr-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.0, type: "spring" }}
                        >
                          <CheckCircle className="text-green-600" size={16} />
                        </motion.div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.1, type: "spring" }}
                        >
                          <CheckCircle className="text-green-600" size={16} />
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="bg-blue-100 rounded-lg p-3 text-blue-800 text-sm flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <Shield className="mr-2" size={16} />
                      <span>Multi-factor authentication successful</span>
                    </motion.div>
                    
                    <motion.div 
                      className="h-1 bg-blue-100 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      <motion.div 
                        className="h-full bg-blue-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.4, duration: 1.5 }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-xs text-blue-600 text-center mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Loading clinical environment...
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Patient Schedule - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Today's Schedule</div>
                <div className="flex-1 border border-blue-100 rounded-lg p-3 overflow-y-auto space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="text-center">
                        <div className="text-xs text-blue-600">9:00 AM</div>
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mt-1">
                          <User size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800">Jane Doe</div>
                      <div className="text-sm text-blue-600">Migraine Follow-up</div>
                      <div className="mt-1 flex space-x-2">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Complete</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="text-center">
                        <div className="text-xs text-blue-600">10:30 AM</div>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <User size={16} className="text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800">Michael Smith</div>
                      <div className="text-sm text-blue-600">Initial Consultation</div>
                      <div className="mt-1 flex space-x-2">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">In Progress</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="text-center">
                        <div className="text-xs text-blue-600">1:00 PM</div>
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mt-1">
                          <User size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800">Emma Johnson</div>
                      <div className="text-sm text-blue-600">Headache Assessment</div>
                      <div className="mt-1 flex space-x-2">
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">Upcoming</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="text-center">
                        <div className="text-xs text-blue-600">2:30 PM</div>
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mt-1">
                          <User size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800">Robert Wilson</div>
                      <div className="text-sm text-blue-600">Chronic Pain Follow-up</div>
                      <div className="mt-1 flex space-x-2">
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">Upcoming</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Template Selection - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Documentation Templates</div>
                <div className="flex-1 border border-blue-100 rounded-lg p-3 overflow-y-auto">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-blue-700 mb-2">Patient: Michael Smith</div>
                    <div className="text-sm text-blue-600">Initial Consultation - Neurology</div>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-3 bg-blue-500 text-white rounded-lg border border-blue-600 flex items-center"
                    >
                      <div className="p-2 bg-white/20 rounded mr-3">
                        <ClipboardList size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Neurological Assessment</div>
                        <div className="text-sm text-blue-100">Comprehensive evaluation</div>
                      </div>
                      <div className="bg-white/20 px-2 py-0.5 rounded text-xs">Selected</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-center"
                    >
                      <div className="p-2 bg-blue-100 rounded mr-3">
                        <Stethoscope size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-blue-800">Physical Exam</div>
                        <div className="text-sm text-blue-600">Standard assessment protocol</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-center"
                    >
                      <div className="p-2 bg-blue-100 rounded mr-3">
                        <FileText size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-blue-800">Medical History</div>
                        <div className="text-sm text-blue-600">Comprehensive background</div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg"
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-1 bg-amber-100 rounded mr-2">
                        <Clock size={14} className="text-amber-600" />
                      </div>
                      <div className="text-sm font-medium text-amber-800">AI Template Customization</div>
                    </div>
                    <div className="text-xs text-amber-700">
                      Templates automatically adjusted based on patient's medical history and presenting symptoms.
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Transcription - Step 3 */}
            {subStep === 3 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Live Transcription</div>
                <div className="flex-1 border border-blue-100 rounded-lg p-3 overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <User size={14} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-blue-600">Patient</div>
                        <div className="text-sm font-medium text-blue-800">Michael Smith</div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="flex items-center px-2 py-1 bg-green-500 text-white rounded"
                      animate={{ 
                        backgroundColor: ["#22c55e", "#16a34a", "#22c55e"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                      <span className="text-xs">Recording</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-3 overflow-y-auto font-mono text-sm">
                    <motion.div 
                      className="text-gray-800"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-blue-600 font-semibold">Dr. Johnson:</span> Hello Michael, what brings you in today?
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-gray-600 font-semibold">Patient:</span> I've been having these headaches for about two weeks now. They're mostly on the right side.
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <span className="text-blue-600 font-semibold">Dr. Johnson:</span> Can you describe the pain? Is it sharp, dull, throbbing?
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0 }}
                    >
                      <span className="text-gray-600 font-semibold">Patient:</span> It's definitely throbbing. And sometimes it feels like pressure behind my eye.
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.6 }}
                    >
                      <span className="text-blue-600 font-semibold">Dr. Johnson:</span> Do you notice any triggers? What makes it better or worse?
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3.2 }}
                    >
                      <span className="text-gray-600 font-semibold">Patient:</span> Bright lights definitely make it worse. And they often start when I'm stressed.
                    </motion.div>
                  </div>
                  
                  <div className="mt-3">
                    <motion.div 
                      className="bg-blue-50 rounded-lg p-3 border border-blue-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="p-1 bg-blue-100 rounded mr-2">
                          <ArrowRight size={14} className="text-blue-600" />
                        </div>
                        <div className="text-sm font-medium text-blue-800">AI Assistant Insights</div>
                      </div>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <motion.li 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0 }}
                        >
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-1"></div>
                          <span>Symptoms consistent with migraine (unilateral, throbbing, photophobia)</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 }}
                        >
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-1"></div>
                          <span>Consider asking about: aura symptoms, nausea, family history</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.0 }}
                        >
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-1"></div>
                          <span>Stress identified as potential trigger</span>
                        </motion.li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Note Generation - Step 4 */}
            {subStep === 4 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Documentation Generation</div>
                <div className="flex-1 border border-blue-100 rounded-lg p-3 overflow-hidden flex flex-col">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <motion.div
                      className="p-2 bg-blue-500 text-white rounded-lg text-sm flex items-center justify-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <FileText className="mr-1" size={14} />
                      <span>SOAP Note</span>
                    </motion.div>
                    
                    <motion.div
                      className="p-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-sm flex items-center justify-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <ClipboardList className="mr-1" size={14} />
                      <span>Referral Letter</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg border border-blue-100 p-3 overflow-y-auto text-sm">
                    <motion.div 
                      className="font-semibold text-blue-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      SUBJECTIVE
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Michael Smith is a 34-year-old male presenting with a two-week history of headaches, predominantly affecting the right side of his head. He describes the pain as throbbing in nature with a sensation of pressure behind the right eye. The patient reports that symptoms are exacerbated by exposure to bright lights and commonly triggered during periods of stress. No previous history of similar headaches.
                    </motion.div>
                    
                    <motion.div 
                      className="font-semibold text-blue-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      OBJECTIVE
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="mb-1">Vital Signs:</div>
                      <ul className="list-disc list-inside pl-2 space-y-1">
                        <li>BP: 125/78 mmHg</li>
                        <li>HR: 72 bpm</li>
                        <li>Temp: 98.6°F</li>
                        <li>RR: 16/min</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="font-semibold text-blue-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      ASSESSMENT
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      Patient's symptoms are consistent with migraine headaches. The unilateral presentation, throbbing quality, photophobia, and stress as a trigger are classic features. No red flags for secondary headache disorders identified at this time.
                    </motion.div>
                    
                    <motion.div 
                      className="font-semibold text-blue-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      PLAN
                    </motion.div>
                    
                    <motion.div 
                      className="text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      1. Start Sumatriptan 50mg at onset of headache, may repeat after 2 hours if needed, not to exceed 200mg/day.<br />
                      2. Avoid identified triggers, particularly stress. Discussed stress management techniques.<br />
                      3. Keep headache diary to identify additional triggers.<br />
                      4. Follow up in 4 weeks to assess treatment efficacy.<br />
                      5. Return sooner if symptoms worsen or new symptoms develop.
                    </motion.div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <motion.div 
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0 }}
                    >
                      <button className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        Edit
                      </button>
                      <button className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Export
                      </button>
                    </motion.div>
                    
                    <motion.div
                      className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                      Save to EHR
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
