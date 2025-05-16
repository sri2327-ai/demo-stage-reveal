import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileAnimationProps } from '../types/demo';
import { ChevronUp, ChevronDown, Circle, Check } from 'lucide-react';
import { clinicalColorThemes } from '../lib/color-themes';
import { clinicalAnimations } from '../lib/animation-utils';

export const MobileStageAnimation: React.FC<MobileAnimationProps> = ({
  currentStage,
  subStep,
  maxSteps,
  onStepChange,
  onStageChange,
  labels,
  labelTitles
}) => {
  // Get the appropriate color theme based on current stage
  const getColorTheme = () => {
    switch (currentStage) {
      case 0: return clinicalColorThemes.patientEngagement;
      case 1: return clinicalColorThemes.aiMedicalScribe;
      case 2: return clinicalColorThemes.adminTasks;
      case 3: return clinicalColorThemes.postVisitSupport;
      default: return clinicalColorThemes.aiMedicalScribe;
    }
  };

  const colorTheme = getColorTheme();
  const currentTitle = labelTitles[subStep] || `Step ${subStep + 1}`;
  const currentDescription = labels[subStep] || "Description not available";

  // Get stage title
  const getStageTitle = () => {
    switch (currentStage) {
      case 0: return "Patient Engagement";
      case 1: return "AI Medical Scribe";
      case 2: return "Admin Tasks";
      case 3: return "Post-Visit Support";
      default: return "Clinical Workflow";
    }
  };

  // Render the interface content based on stage and step
  const renderInterfaceContent = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        return renderPatientEngagementInterface(subStep);
      case 1: // AI Medical Scribe
        return renderMedicalScribeInterface(subStep);
      case 2: // Admin Tasks
        return renderAdminTasksInterface(subStep);
      case 3: // Post-Visit Support
        return renderPostVisitInterface(subStep);
      default:
        return (
          <div className="text-center text-gray-500">
            <p>Interface not available</p>
          </div>
        );
    }
  };

  // Patient Engagement Interfaces
  const renderPatientEngagementInterface = (step: number) => {
    switch (step) {
      case 0: // Patient Messaging
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="flex items-center justify-between mb-3 border-b pb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <span className="ml-2 font-medium">John Doe</span>
              </div>
              <div className="text-xs text-blue-600 font-medium">Online</div>
            </div>
            
            <div className="space-y-3 mb-3 max-h-[140px] overflow-y-auto">
              <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-xs">I'm experiencing headaches and dizziness since yesterday</p>
                <p className="text-[10px] text-right text-gray-500">10:30 AM</p>
              </div>
              
              <div className="bg-blue-50 p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                <p className="text-xs">Hello John, I understand you're experiencing headaches and dizziness. When did these symptoms begin and have you taken any medication?</p>
                <p className="text-[10px] text-right text-gray-500">10:32 AM</p>
              </div>
              
              <motion.div 
                className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-xs">Since yesterday morning. I took some Tylenol but it didn't help much</p>
                <p className="text-[10px] text-right text-gray-500">10:33 AM</p>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <p className="text-xs">I recommend scheduling an appointment. Based on your history, would you prefer to see Dr. Smith who you saw last time?</p>
                <p className="text-[10px] text-right text-gray-500">10:35 AM</p>
              </motion.div>
            </div>
            
            <div className="flex items-center border-t pt-2">
              <input type="text" className="flex-1 text-xs bg-gray-100 rounded-full px-3 py-1" placeholder="Type a message..." />
              <motion.button 
                className="ml-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>
            </div>
          </div>
        );
        
      case 1: // Appointment Scheduling
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Schedule Appointment</h4>
              <p className="text-xs text-gray-500">Select date and time</p>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-3">
              <div className="text-center text-[10px] text-gray-500">Su</div>
              <div className="text-center text-[10px] text-gray-500">Mo</div>
              <div className="text-center text-[10px] text-gray-500">Tu</div>
              <div className="text-center text-[10px] text-gray-500">We</div>
              <div className="text-center text-[10px] text-gray-500">Th</div>
              <div className="text-center text-[10px] text-gray-500">Fr</div>
              <div className="text-center text-[10px] text-gray-500">Sa</div>
              
              {Array.from({ length: 28 }, (_, i) => (
                <motion.div 
                  key={i}
                  className={`text-center text-[10px] p-1 rounded-full ${i === 14 ? 'bg-blue-500 text-white' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {i + 1}
                </motion.div>
              ))}
            </div>
            
            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Available Times</p>
              <div className="flex flex-wrap gap-1">
                <motion.div 
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  9:00 AM
                </motion.div>
                <motion.div 
                  className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  10:30 AM
                </motion.div>
                <motion.div 
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1:15 PM
                </motion.div>
                <motion.div 
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3:45 PM
                </motion.div>
              </div>
            </div>
            
            <div className="mt-2">
              <motion.button 
                className="w-full bg-blue-500 text-white text-xs py-2 rounded-md"
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 8px rgba(59, 130, 246, 0.5)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Confirm Appointment
              </motion.button>
            </div>
          </div>
        );
        
      case 2: // Smart Intake Forms
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Patient Intake Form</h4>
              <p className="text-xs text-gray-500">Pre-populated from your records</p>
            </div>
            
            <div className="space-y-2 mb-3">
              <div>
                <label className="text-xs text-gray-600">Full Name</label>
                <div className="bg-gray-50 text-xs p-1.5 rounded border border-gray-200">John Doe</div>
              </div>
              
              <div>
                <label className="text-xs text-gray-600">Date of Birth</label>
                <div className="bg-gray-50 text-xs p-1.5 rounded border border-gray-200">05/18/1985</div>
              </div>
              
              <div>
                <label className="text-xs text-gray-600">Primary Insurance</label>
                <div className="bg-gray-50 text-xs p-1.5 rounded border border-gray-200">BlueCross #384920183</div>
              </div>
              
              <div>
                <label className="text-xs text-gray-600">Reason for Visit</label>
                <div className="relative">
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                  <textarea className="w-full text-xs p-1.5 rounded border border-gray-200 min-h-[60px]" placeholder="Please describe your symptoms">Headaches and dizziness since yesterday</textarea>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <p className="text-xs font-medium mb-1">Current Medications</p>
              <div className="flex flex-wrap gap-1">
                <div className="text-xs bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                  Lisinopril 10mg
                </div>
                <div className="text-xs bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                  Vitamin D 2000IU
                </div>
              </div>
            </div>
            
            <motion.div 
              className="w-full bg-blue-500 text-white text-xs py-2 rounded-md text-center"
              whileTap={{ scale: 0.98 }}
            >
              Submit Form
            </motion.div>
          </div>
        );
        
      case 3: // Automated Reminders
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Appointment Confirmation</h4>
              <p className="text-xs text-gray-500">Tomorrow at 10:30 AM with Dr. Smith</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-2 rounded-md mb-3">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 16.36v-1.36a2 2 0 0 0-2-2h-3v5h3a2 2 0 0 0 2-2z"></path>
                    <path d="M6.6 10h2.8a2 2 0 0 0 1.8-2.8l-2.4-5.2A1.9 1.9 0 0 0 7 1.2L3.5 4.7a2 2 0 0 0 0 2.8z"></path>
                    <path d="M3.6 14h2.8a2 2 0 0 1 1.8 2.8l-2.4 5.2A1.9 1.9 0 0 1 4 22.8l-3.5-3.5a2 2 0 0 1 0-2.8z"></path>
                    <path d="M14 5L22 5"></path>
                    <path d="M14 9L22 9"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium">Appointment Reminder</p>
                  <p className="text-xs text-gray-600 mt-1">Please arrive 15 minutes early to complete any necessary paperwork.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span>Pre-visit Checklist:</span>
                <motion.span 
                  className="text-blue-600 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  3/5 Completed
                </motion.span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mr-2">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-gray-800">Confirm appointment</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mr-2">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-gray-800">Complete intake form</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mr-2">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-gray-800">Insurance verification</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 mr-2"></div>
                <span className="text-xs text-gray-500">Upload recent lab results</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 mr-2"></div>
                <span className="text-xs text-gray-500">Prepare list of questions</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3">
              <motion.button 
                className="flex-1 border border-blue-500 text-blue-500 text-xs py-1.5 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Reschedule
              </motion.button>
              <motion.button 
                className="flex-1 bg-blue-500 text-white text-xs py-1.5 rounded"
                whileTap={{ scale: 0.98 }}
              >
                Confirm
              </motion.button>
            </div>
          </div>
        );
        
      case 4: // AI Appointment Calls
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-800">Incoming Call</h4>
                <p className="text-xs text-gray-500">City Medical Center</p>
              </div>
              <motion.div 
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </motion.div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-lg">
                <p className="text-xs">Hello, this is Sarah from City Medical Center. I'm calling to confirm your appointment with Dr. Smith tomorrow at 10:30 AM. Is that still good for you?</p>
                <div className="flex justify-end">
                  <motion.div 
                    className="w-4 h-4 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="bg-gray-100 p-2 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-xs">Yes, that works for me.</p>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 p-2 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-xs">Great! Do you need any assistance with directions to our office or have any questions before your visit?</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-100 p-2 rounded-lg" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <p className="text-xs">No, I know where it is. Thank you.</p>
              </motion.div>
            </div>
            
            <div className="border-t pt-2 flex justify-between">
              <motion.button 
                className="text-xs border border-red-500 text-red-500 rounded-full px-3 py-1.5"
                whileTap={{ scale: 0.95 }}
              >
                End Call
              </motion.button>
              
              <motion.div 
                className="text-xs text-gray-500 flex items-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                <span>01:24</span>
              </motion.div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="text-center text-gray-500">
            <p>Interface not available</p>
          </div>
        );
    }
  };
  
  // Get animation icon based on stage and step
  const getAnimationIcon = () => {
    switch (currentStage) {
      case 0: // Patient Engagement
        switch (subStep) {
          case 0: return <motion.div className="text-blue-500" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></motion.div>;
          case 1: return <motion.div className="text-green-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></motion.div>;
          case 2: return <motion.div className="text-purple-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></motion.div>;
          case 3: return <motion.div className="text-orange-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></motion.div>;
          case 4: return <motion.div className="text-cyan-500" animate={{ rotateY: [0, 180, 360] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 1: // AI Medical Scribe
        switch (subStep) {
          case 0: return <motion.div className="text-indigo-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></motion.div>;
          case 1: return <motion.div className="text-blue-600" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M12 17v-6"/><path d="M9 14h6"/></svg></motion.div>;
          case 2: return <motion.div className="text-green-600" animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 9.5 12 6.5l-3.5 3"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 6.5v8"/></svg></motion.div>;
          case 3: return <motion.div className="text-teal-500" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg></motion.div>;
          case 4: return <motion.div className="text-rose-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M12 12 8.5 8.5"/><path d="M16 16 9 9"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 2: // Admin Tasks
        switch (subStep) {
          case 0: return <motion.div className="text-red-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="m12 8 1 3.5h6"/><path d="m12 8-1 3.5H5"/><path d="m16 16-2-1.5"/><path d="m8 16 2-1.5"/></svg></motion.div>;
          case 1: return <motion.div className="text-amber-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg></motion.div>;
          case 2: return <motion.div className="text-emerald-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M17 14h3"/><path d="M17 10h3"/><rect width="18" height="12" x="3" y="6" rx="2"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      case 3: // Post-Visit Support
        switch (subStep) {
          case 0: return <motion.div className="text-lime-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.9l4.2 4.2L19 2"/><path d="M17 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M12 17v-6"/><path d="M9 14h6"/></svg></motion.div>;
          case 1: return <motion.div className="text-sky-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.26c-.87.62-1.92 1-3.04 1.03-3.86.12-7.01-3.92-7.01-3.92s-3.18-4.41.09-8.29C11.12 1.95 16.21 2 16.21 2"/><path d="M17.3 3.1c.19.07.76.36 1.22.9.46.54.87 1.27.97 2.3.12 1.19-.03 2.85-2.24 4.76-1.23 1.06-2.28 1.47-3.09 1.62a5.33 5.33 0 0 1-2.94-.35c-1.06-.5-1.74-1.27-2.21-2.02a6.59 6.59 0 0 1-.73-1.61c-.25-.85-.2-1.2-.19-1.24l.06-.24"/><path d="M6 20c0-1.66 1.43-3 3.2-3h5.6c1.77 0 3.2 1.34 3.2 3v1H6Z"/></svg></motion.div>;
          case 2: return <motion.div className="text-cyan-600" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg></motion.div>;
          case 3: return <motion.div className="text-violet-500" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg></motion.div>;
          case 4: return <motion.div className="text-rose-500" animate={{ rotate: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M12 12 8.5 8.5"/><path d="M16 16 9 9"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      default:
        return <Circle size={40} />;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-center text-gray-800">{getStageTitle()}</h3>
        <p className="text-sm text-center text-gray-600">{currentTitle}</p>
      </div>
      
      {renderInterfaceContent()}
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">{currentDescription}</p>
      </div>
    </div>
  );
};
