
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
  
  // Medical Scribe Interfaces - Simplified versions
  const renderMedicalScribeInterface = (step: number) => {
    switch (step) {
      case 0: // Secure Authentication
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="text-center mb-3">
              <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center mb-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 className="text-sm font-medium">Secure Login</h4>
            </div>
            
            <div className="space-y-3 mb-4">
              <motion.div 
                className="space-y-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-xs text-gray-600">Username</label>
                <input type="text" className="w-full text-xs border border-gray-300 rounded p-1.5" value="dr.smith@clinic.med" />
              </motion.div>
              
              <motion.div 
                className="space-y-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="text-xs text-gray-600">Password</label>
                <input type="password" className="w-full text-xs border border-gray-300 rounded p-1.5" value="••••••••••" />
              </motion.div>
              
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="w-3 h-3" checked />
                  <label htmlFor="remember" className="text-xs text-gray-600 ml-1">Remember me</label>
                </div>
                <a href="#" className="text-xs text-indigo-600">Forgot?</a>
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <motion.button 
                className="w-full bg-indigo-600 text-white text-xs py-2 rounded"
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: ["0px 0px 0px rgba(79, 70, 229, 0)", "0px 0px 8px rgba(79, 70, 229, 0.5)", "0px 0px 0px rgba(79, 70, 229, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Login
              </motion.button>
              
              <motion.div 
                className="flex items-center justify-center space-x-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center text-xs text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  HIPAA Compliant
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  2FA Enabled
                </div>
              </motion.div>
            </div>
          </div>
        );
        
      case 1: // EHR Integration
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">EHR Integration</h4>
              <p className="text-xs text-gray-500">Today's Schedule</p>
            </div>
            
            <div className="space-y-2 max-h-[180px] overflow-y-auto">
              <motion.div 
                className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-medium">John Doe</span>
                  <span className="text-xs text-blue-600">09:30 AM</span>
                </div>
                <p className="text-xs text-gray-500">Annual Physical</p>
              </motion.div>
              
              <motion.div 
                className="border-l-4 border-green-500 bg-green-50 p-2 rounded"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-medium">Sarah Johnson</span>
                  <span className="text-xs text-green-600">10:15 AM</span>
                </div>
                <p className="text-xs text-gray-500">Diabetes Follow-up</p>
              </motion.div>
              
              <motion.div 
                className="border-l-4 border-purple-500 bg-purple-50 p-2 rounded"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-medium">James Wilson</span>
                  <span className="text-xs text-purple-600">11:00 AM</span>
                </div>
                <p className="text-xs text-gray-500">Cardiology Consult</p>
              </motion.div>
              
              <motion.div 
                className="border-l-4 border-amber-500 bg-amber-50 p-2 rounded"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-medium">Maria Garcia</span>
                  <span className="text-xs text-amber-600">01:30 PM</span>
                </div>
                <p className="text-xs text-gray-500">Prenatal Check</p>
              </motion.div>
            </div>
            
            <div className="mt-3 pt-2 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Import Status</span>
                <motion.span 
                  className="text-xs text-green-600 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Synced (2m ago)
                </motion.span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="h-1.5 bg-blue-500 rounded-l"
                  style={{ width: "70%" }}
                  animate={{ width: ["70%", "100%", "70%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="h-1.5 bg-gray-200 rounded-r"
                  style={{ width: "30%" }}
                  animate={{ width: ["30%", "0%", "30%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        );
          
      case 2: // Specialty Templates
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Specialty Templates</h4>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500 mr-2">Select Specialty:</span>
                <select className="text-xs border p-1 rounded bg-white">
                  <option>Cardiology</option>
                  <option>Dermatology</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2 max-h-[180px] overflow-y-auto mb-3">
              <motion.div 
                className="bg-white border border-gray-200 rounded p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Cardiac Consult</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 border border-green-200 rounded p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Echocardiogram Follow-up</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white border border-gray-200 rounded p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Heart Failure Management</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white border border-gray-200 rounded p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Hypertension Follow-up</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-2 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium">Template Sections</span>
                <span className="text-xs text-blue-600">Edit</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  History
                </div>
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  Examination
                </div>
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  Labs
                </div>
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  Imaging
                </div>
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  Assessment
                </div>
                <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  Plan
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3: // Medical Transcription
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-800">Live Transcription</h4>
                <p className="text-xs text-gray-500">Recording in progress...</p>
              </div>
              <motion.div 
                className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </motion.div>
            </div>
            
            <div className="space-y-3 mb-3 max-h-[180px] overflow-y-auto">
              <div className="text-xs">
                <span className="font-semibold text-blue-700">Dr. Smith:</span> 
                <span className="text-gray-800"> So, how have you been feeling since our last visit?</span>
              </div>
              
              <div className="text-xs">
                <span className="font-semibold text-green-700">Patient:</span> 
                <span className="text-gray-800"> The medication you prescribed has helped with the chest pain, but I still feel short of breath when I walk up stairs.</span>
              </div>
              
              <div className="text-xs">
                <span className="font-semibold text-blue-700">Dr. Smith:</span> 
                <span className="text-gray-800"> I see. Has there been any change in your diet or exercise routine?</span>
              </div>
              
              <div className="text-xs">
                <span className="font-semibold text-green-700">Patient:</span> 
                <span className="text-gray-800"> I've been trying to walk 20 minutes each day as you recommended.</span>
              </div>
              
              <motion.div 
                className="text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="font-semibold text-blue-700">Dr. Smith:</span> 
                <motion.span 
                  className="text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                > That's excellent. Let's check your vital signs and discuss if we need to adjust your medication.</motion.span>
              </motion.div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-xs text-gray-600">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-red-500 mr-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ></motion.div>
                  <span>08:23</span>
                </div>
                <div className="text-xs">
                  <span className="text-green-600 font-medium">99.2% accuracy</span>
                </div>
              </div>
              <div className="flex gap-2">
                <motion.button 
                  className="flex-1 text-xs border border-gray-300 py-1.5 rounded"
                  whileTap={{ scale: 0.95 }}
                >
                  Pause
                </motion.button>
                <motion.button 
                  className="flex-1 text-xs bg-blue-600 text-white py-1.5 rounded"
                  whileTap={{ scale: 0.95 }}
                >
                  Generate Note
                </motion.button>
              </div>
            </div>
          </div>
        );
        
      case 4: // Note Generation
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">AI Note Generation</h4>
              <p className="text-xs text-gray-500">Creating comprehensive note...</p>
            </div>
            
            <div className="border border-gray-200 rounded-md p-2 mb-3 max-h-[180px] overflow-y-auto">
              <h5 className="text-xs font-bold mb-1">SOAP NOTE - CARDIOLOGY</h5>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h6 className="text-xs font-semibold">SUBJECTIVE:</h6>
                <p className="text-xs mb-1">Patient reports improvement in chest pain with prescribed medication but continues to experience shortness of breath when climbing stairs. Patient has been adhering to recommended 20-minute daily walks.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h6 className="text-xs font-semibold">OBJECTIVE:</h6>
                <p className="text-xs mb-1">Vital signs: BP 138/82, HR 76, RR 18, T 98.6°F, O2 Sat 97%
                Physical Exam: Heart - Regular rate and rhythm, no murmurs
                Lungs - Clear to auscultation bilaterally</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h6 className="text-xs font-semibold">ASSESSMENT:</h6>
                <p className="text-xs mb-1">1. Stable angina, improved with current medication
                2. Mild exertional dyspnea
                3. Hypertension, well-controlled</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <h6 className="text-xs font-semibold">PLAN:</h6>
                <p className="text-xs mb-1">1. Continue current medication regimen
                2. Add as-needed bronchodilator for dyspnea
                3. Follow-up in 3 months
                4. Complete echocardiogram before next visit</p>
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>CPT Code:</span>
                <span className="font-medium">99214</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>ICD-10:</span>
                <span className="font-medium">I20.9, R06.0, I10</span>
              </div>
              
              <div className="flex gap-2 mt-3">
                <motion.button 
                  className="flex-1 text-xs border border-gray-300 py-1.5 rounded flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit
                </motion.button>
                <motion.button 
                  className="flex-1 text-xs bg-blue-600 text-white py-1.5 rounded flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Save to EHR
                </motion.button>
              </div>
            </div>
          </div>
        );
        
      case 5: // EHR Synchronization
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">EHR Synchronization</h4>
              <p className="text-xs text-gray-500">Syncing to Epic System</p>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="text-xs mb-2">Document ready to sync:</div>
              
              <div className="bg-gray-50 border border-gray-200 rounded p-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium">Cardiology Visit Note</div>
                    <div className="text-[10px] text-gray-500">John Doe - 05/16/2025</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
              </div>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-xs">EHR Field Mapping:</label>
                <div className="flex items-center space-x-2 text-xs mb-1">
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded">Subject</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">ChiefComplaint</span>
                </div>
                
                <div className="flex items-center space-x-2 text-xs mb-1">
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded">Assessment</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">Assessment</span>
                </div>
                
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded">Plan</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">TreatmentPlan</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="border-t pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs">Sync Progress:</span>
                <span className="text-xs text-green-600">75% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-green-600 h-2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
              
              <motion.div 
                className="flex items-center mt-3 text-xs text-green-600"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
                Syncing to Epic...
              </motion.div>
            </motion.div>
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
  
  // Admin Tasks Interfaces
  const renderAdminTasksInterface = (step: number) => {
    switch (step) {
      case 0: // Prescription Management
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Rx Management</h4>
              <p className="text-xs text-gray-500">Prior Authorization</p>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="bg-yellow-50 border border-yellow-200 p-2 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-800">Eliquis 5mg</h5>
                    <p className="text-[10px] text-gray-600">Requires PA - In Progress</p>
                  </div>
                  <div className="text-amber-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <motion.div 
                      className="h-1.5 bg-amber-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-[10px] mt-0.5">
                    <span>Form submitted</span>
                    <span>60%</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="bg-green-50 border border-green-200 p-2 rounded-md"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-800">Ozempic 1mg/0.75ml</h5>
                    <p className="text-[10px] text-gray-600">PA Approved</p>
                  </div>
                  <div className="text-green-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <div className="h-1.5 bg-green-500 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] mt-0.5">
                    <span>Coverage confirmed</span>
                    <span>100%</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-red-50 border border-red-200 p-2 rounded-md"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-800">Humira 40mg/0.4ml</h5>
                    <p className="text-[10px] text-gray-600">PA Denied - Appeal Filed</p>
                  </div>
                  <div className="text-red-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <motion.div 
                      className="h-1.5 bg-red-500 rounded-full w-1/3"
                      animate={{ width: ["33%", "80%", "33%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-[10px] mt-0.5">
                    <span>Appeal in progress</span>
                    <span>33%</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Processing Stats</span>
                <span className="text-xs text-blue-600">Today</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <div className="text-green-600 font-medium">32</div>
                  <div className="text-gray-500">Approved</div>
                </div>
                <div>
                  <div className="text-amber-600 font-medium">14</div>
                  <div className="text-gray-500">In Progress</div>
                </div>
                <div>
                  <div className="text-red-600 font-medium">3</div>
                  <div className="text-gray-500">Denied</div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 1: // Clinical Summaries
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Clinical Summary</h4>
              <p className="text-xs text-gray-500">Patient Visit: 05/16/2025</p>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="space-y-1">
                <h5 className="text-xs font-semibold text-gray-800">Visit Summary</h5>
                <p className="text-xs text-gray-600">You had an appointment with Dr. Smith for your hypertension follow-up.</p>
              </div>
              
              <motion.div 
                className="space-y-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h5 className="text-xs font-semibold text-gray-800">Key Points</h5>
                <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Blood pressure is improved at 138/82</li>
                  <li>Continue current medication</li>
                  <li>Added inhaler for shortness of breath</li>
                  <li>Schedule echocardiogram</li>
                  <li>Follow up in 3 months</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="space-y-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h5 className="text-xs font-semibold text-gray-800">Medication Updates</h5>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 mr-2"></div>
                    <span className="text-xs">Continue Lisinopril 10mg daily</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mr-2"></div>
                    <span className="text-xs">New: Albuterol inhaler as needed</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex gap-2">
                <motion.div 
                  className="flex-1 text-xs border border-gray-300 py-1.5 rounded-md flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </motion.div>
                <motion.div 
                  className="flex-1 text-xs border border-gray-300 py-1.5 rounded-md flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email
                </motion.div>
              </div>
              <div className="mt-2 text-center">
                <div className="inline-flex items-center text-xs text-gray-500">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Call office if symptoms worsen
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2: // Insurance Verification
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Insurance Verification</h4>
              <p className="text-xs text-gray-500">Patient: John Doe</p>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Coverage Status</span>
                <motion.span 
                  className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                  animate={{ backgroundColor: ["#dcfce7", "#bbf7d0", "#dcfce7"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Active
                </motion.span>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-md p-2">
                <div className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-medium">BlueCross PPO</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">ID</span>
                    <span className="font-medium">XYZ123456789</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Group</span>
                    <span className="font-medium">10234-A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective</span>
                    <span className="font-medium">01/01/2025 - 12/31/2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="space-y-2 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Network Status</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">In Network</span>
              </div>
              
              <div className="text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">PCP Copay</span>
                  <span className="font-medium">$25</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Specialist Copay</span>
                  <span className="font-medium">$40</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Deductible Met</span>
                  <span className="font-medium">$750 / $1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Out-of-Pocket Max</span>
                  <span className="font-medium">$1,200 / $5,000</span>
                </div>
              </div>
              
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <motion.div 
                  className="h-1.5 bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>Deductible Met: 50%</span>
                <span>$750 / $1,500</span>
              </div>
            </motion.div>
            
            <div className="border-t pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs">
                  <span className="font-medium">Verified:</span>
                  <span className="text-gray-600 ml-1">05/16/2025 08:45 AM</span>
                </div>
                <div className="text-xs text-green-600 font-medium flex items-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Auto-verified
                </div>
              </div>
              
              <motion.button 
                className="w-full text-xs bg-blue-600 text-white py-1.5 rounded-md flex items-center justify-center"
                whileTap={{ scale: 0.98 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Get Cost Estimate
              </motion.button>
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
  
  // Post-Visit Support Interfaces
  const renderPostVisitInterface = (step: number) => {
    switch (step) {
      case 0: // Medication Management
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Medication Management</h4>
              <p className="text-xs text-gray-500">Daily Schedule & Reminders</p>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Today's Schedule</span>
                <span className="text-xs text-blue-600">May 16</span>
              </div>
              
              <div className="space-y-2">
                <motion.div 
                  className="bg-green-50 border border-green-200 p-2 rounded-md"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-xs font-semibold">Lisinopril 10mg</h5>
                      <p className="text-[10px] text-gray-500">1 tablet with breakfast</p>
                    </div>
                    <div className="text-green-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-500 mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    8:00 AM - Taken
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-blue-50 border border-blue-200 p-2 rounded-md"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-xs font-semibold">Atorvastatin 20mg</h5>
                      <p className="text-[10px] text-gray-500">1 tablet at bedtime</p>
                    </div>
                    <motion.div 
                      className="text-blue-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="flex items-center text-[10px] text-blue-600 mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    9:00 PM - Upcoming
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 border border-gray-200 p-2 rounded-md"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-xs font-semibold">Albuterol Inhaler</h5>
                      <p className="text-[10px] text-gray-500">2 puffs as needed</p>
                    </div>
                    <div className="text-gray-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-500 mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    As needed - 0 doses today
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="border-t pt-2">
              <motion.div 
                className="bg-blue-600 text-white text-center py-1.5 rounded-md text-xs mb-2"
                whileTap={{ scale: 0.95 }}
              >
                Mark Medication as Taken
              </motion.div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <div className="font-medium text-green-600">92%</div>
                  <div className="text-gray-500">Adherence</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">3</div>
                  <div className="text-gray-500">Refills Left</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-amber-600">5</div>
                  <div className="text-gray-500">Days Left</div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 1: // Patient Monitoring
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Health Monitoring</h4>
              <p className="text-xs text-gray-500">Blood Pressure Tracker</p>
            </div>
            
            <div className="space-y-3 mb-3">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-14 h-14 rounded-full border-4 border-blue-500 flex items-center justify-center"
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 8px rgba(59, 130, 246, 0.5)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-blue-600">138</div>
                    <div className="text-[10px] text-gray-500">SYS</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="w-14 h-14 rounded-full border-4 border-green-500 flex items-center justify-center"
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(34, 197, 94, 0)", "0px 0px 8px rgba(34, 197, 94, 0.5)", "0px 0px 0px rgba(34, 197, 94, 0)"]
                  }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-green-600">82</div>
                    <div className="text-[10px] text-gray-500">DIA</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="w-14 h-14 rounded-full border-4 border-purple-500 flex items-center justify-center"
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(168, 85, 247, 0)", "0px 0px 8px rgba(168, 85, 247, 0.5)", "0px 0px 0px rgba(168, 85, 247, 0)"]
                  }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-purple-600">76</div>
                    <div className="text-[10px] text-gray-500">HR</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">7-Day Trend</span>
                  <span className="text-xs text-green-600">Improving</span>
                </div>
                <div className="h-12 flex items-end justify-between space-x-0.5">
                  {[150, 145, 142, 140, 139, 138, 138].map((value, i) => (
                    <motion.div
                      key={i}
                      className={`w-full rounded-t ${i === 6 ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ height: `${(value - 80) / 100 * 100}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${(value - 80) / 100 * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-1 text-[9px] text-gray-500">
                  <span>May 10</span>
                  <span>May 11</span>
                  <span>May 12</span>
                  <span>May 13</span>
                  <span>May 14</span>
                  <span>May 15</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Last Recorded:</span>
                <span className="text-xs text-gray-600">Today, 8:30 AM</span>
              </div>
              
              <div className="flex gap-2">
                <motion.button 
                  className="flex-1 text-xs border border-gray-300 py-1.5 rounded flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Add Reading
                </motion.button>
                <motion.button 
                  className="flex-1 text-xs bg-blue-600 text-white py-1.5 rounded flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Share Report
                </motion.button>
              </div>
            </div>
          </div>
        );
        
      case 2: // AI Support
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">AI Health Assistant</h4>
              <p className="text-xs text-gray-500">Ask questions about your care</p>
            </div>
            
            <div className="space-y-2 mb-3 max-h-[180px] overflow-y-auto">
              <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-xs">What are the side effects of Lisinopril that I should watch for?</p>
                <p className="text-[10px] text-right text-gray-500">10:15 AM</p>
              </div>
              
              <div className="bg-blue-50 p-2 rounded-lg rounded-tr-none max-w-[85%] ml-auto">
                <p className="text-xs">Common side effects of Lisinopril may include dizziness, headache, dry cough, and fatigue. Serious side effects that need immediate medical attention include swelling of face/lips/tongue, difficulty breathing, or severe dizziness. Always report any concerning symptoms to your doctor.</p>
                <p className="text-[10px] text-right text-gray-500">10:16 AM</p>
              </div>
              
              <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-xs">What should my target blood pressure be?</p>
                <p className="text-[10px] text-right text-gray-500">10:30 AM</p>
              </div>
              
              <motion.div 
                className="bg-blue-50 p-2 rounded-lg rounded-tr-none max-w-[85%] ml-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs">Based on your medical history, Dr. Smith has set your target blood pressure at less than 140/90 mmHg. Your most recent reading of 138/82 meets this target. Keep up the good work with your medication and lifestyle changes!</p>
                <div className="flex justify-start mt-1">
                  <span className="text-[9px] text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded-full">Verified from EHR</span>
                </div>
                <p className="text-[10px] text-right text-gray-500">10:31 AM</p>
              </motion.div>
            </div>
            
            <div className="flex items-center border-t pt-2">
              <input type="text" className="flex-1 text-xs bg-gray-100 rounded-full px-3 py-1.5" placeholder="Type a question..." />
              <motion.button 
                className="ml-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>
            </div>
          </div>
        );
        
      case 3: // Readmission Prevention
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Recovery Monitoring</h4>
              <p className="text-xs text-gray-500">Post-Surgical Recovery</p>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Recovery Progress</span>
                <span className="text-xs text-green-600">Day 8 of 14</span>
              </div>
              
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div 
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: "57%" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "57%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>Surgery</span>
                <span>Recovery</span>
                <span>Follow-up</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-3">
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-md p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mr-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Pain Level: 2/10</span>
                    <p className="text-[10px] text-gray-500">Decreasing trend - normal recovery</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-md p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mr-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Mobility: Good</span>
                    <p className="text-[10px] text-gray-500">Able to walk 500+ steps daily</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 border border-amber-200 rounded-md p-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center mr-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium">Incision Site: Monitor</span>
                    <p className="text-[10px] text-gray-500">Mild redness noted - within normal limits</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Risk Assessment</span>
                <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">Low Risk</span>
              </div>
              
              <motion.button 
                className="w-full text-xs bg-blue-600 text-white py-1.5 rounded flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Complete Daily Check-in
              </motion.button>
            </div>
          </div>
        );
        
      case 4: // Feedback Analysis
        return (
          <div className="bg-white rounded-lg shadow-md p-3 max-w-[280px] mx-auto">
            <div className="border-b pb-2 mb-3">
              <h4 className="text-sm font-medium text-gray-800">Care Feedback</h4>
              <p className="text-xs text-gray-500">Help us improve your experience</p>
            </div>
            
            <div className="space-y-4 mb-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Quality of Care</span>
                  <span className="text-xs text-green-600">4.8/5</span>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg 
                      key={star}
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill={star <= 5 ? "#FBBF24" : "none"} 
                      stroke={star <= 5 ? "#FBBF24" : "#9CA3AF"} 
                      strokeWidth="2" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * star }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </motion.svg>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="text-xs font-medium">Your Comments</label>
                <textarea className="w-full text-xs border border-gray-300 rounded-md p-2 min-h-[70px]" placeholder="Share your thoughts about your care...">Dr. Smith was very thorough and explained my condition clearly. The staff was friendly and efficient. Wait time was only 5 minutes.</textarea>
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-xs font-medium">Areas for Improvement</span>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="parking" className="h-3.5 w-3.5 text-blue-600" />
                    <label htmlFor="parking" className="ml-2 text-xs text-gray-700">Parking availability</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="wait" className="h-3.5 w-3.5 text-blue-600" />
                    <label htmlFor="wait" className="ml-2 text-xs text-gray-700">Wait times</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="billing" className="h-3.5 w-3.5 text-blue-600" checked />
                    <label htmlFor="billing" className="ml-2 text-xs text-gray-700">Billing clarity</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="appointments" className="h-3.5 w-3.5 text-blue-600" />
                    <label htmlFor="appointments" className="ml-2 text-xs text-gray-700">Appointment availability</label>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="border-t pt-2">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600">Feedback Analytics:</span>
                <span className="text-xs text-blue-600">View Past Feedback</span>
              </div>
              
              <motion.button 
                className="w-full text-xs bg-blue-600 text-white py-1.5 rounded"
                whileTap={{ scale: 0.95 }}
              >
                Submit Feedback
              </motion.button>
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
          case 1: return <motion.div className="text-green-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg></motion.div>;
          case 2: return <motion.div className="text-purple-500" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg></motion.div>;
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
          case 4: return <motion.div className="text-purple-600" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M10 2v20"/><path d="m17 12-5-4v8l5-4Z"/></svg></motion.div>;
          case 5: return <motion.div className="text-rose-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M12 12 8.5 8.5"/><path d="M16 16 9 9"/></svg></motion.div>;
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
          case 0: return <motion.div className="text-lime-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.9l4.2 4.2L19 2"/><path d="M17 17H5"/><path d="M17 12H5"/></svg></motion.div>;
          case 1: return <motion.div className="text-sky-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.26c-.87.62-1.92 1-3.04 1.03-3.86.12-7.01-3.92-7.01-3.92s-3.18-4.41.09-8.29C11.12 1.95 16.21 2 16.21 2"/><path d="M17.3 3.1c.19.07.76.36 1.22.9.46.54.87 1.27.97 2.3.12 1.19-.03 2.85-2.24 4.76-1.23 1.06-2.28 1.47-3.09 1.62a5.33 5.33 0 0 1-2.94-.35c-1.06-.5-1.74-1.27-2.21-2.02a6.59 6.59 0 0 1-.73-1.61c-.25-.85-.2-1.2-.19-1.24l.06-.24"/><path d="M6 20c0-1.66 1.43-3 3.2-3h5.6c1.77 0 3.2 1.34 3.2 3v1H6Z"/></svg></motion.div>;
          case 2: return <motion.div className="text-cyan-600" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v4l4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><circle cx="12" cy="11" r="1"/><circle cx="17" cy="11" r="1"/><circle cx="7" cy="11" r="1"/></svg></motion.div>;
          case 3: return <motion.div className="text-indigo-600" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg></motion.div>;
          case 4: return <motion.div className="text-violet-500" animate={{ rotate: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></motion.div>;
          default: return <Circle size={40} />;
        }
      default:
        return <Circle size={40} />;
    }
  };

  // Log component rendering and props for debugging
  console.log("MobileStageAnimation rendering:", { currentStage, subStep, maxSteps, labels, labelTitles });

  return (
    <div className="w-full h-full flex flex-col">
      {/* Stage Title */}
      <motion.div 
        className={`w-full px-4 py-3 ${colorTheme.background} rounded-t-xl border-b ${colorTheme.border} shadow-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-center text-[#143151]">
          {getStageTitle()}
        </h3>
      </motion.div>

      {/* Main Animation Container */}
      <div className={`flex-1 w-full overflow-hidden ${colorTheme.accent} flex flex-col items-center justify-center p-4`}>
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStage}-${subStep}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {/* Step Icon and Number */}
            <div className="mb-6 relative">
              <motion.div 
                className={`w-16 h-16 rounded-full flex items-center justify-center ${colorTheme.highlight} shadow-md border ${colorTheme.border}`}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ["0px 0px 0px rgba(20, 49, 81, 0.1)", "0px 0px 15px rgba(20, 49, 81, 0.3)", "0px 0px 0px rgba(20, 49, 81, 0.1)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {getAnimationIcon()}
              </motion.div>
              
              {/* Step Navigation Buttons */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <motion.button
                  className={`p-2 rounded-full bg-white shadow-md text-[#143151] border ${colorTheme.border}`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onStepChange((subStep - 1 + maxSteps) % maxSteps)}
                  aria-label="Previous step"
                >
                  <ChevronUp size={20} />
                </motion.button>
              </div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                <motion.button
                  className={`p-2 rounded-full bg-white shadow-md text-[#143151] border ${colorTheme.border}`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onStepChange((subStep + 1) % maxSteps)}
                  aria-label="Next step"
                >
                  <ChevronDown size={20} />
                </motion.button>
              </div>
            </div>

            {/* Step Title with animation */}
            <motion.h4 
              className="text-xl font-semibold text-[#143151] mb-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {currentTitle}
            </motion.h4>

            {/* Step Description with animation */}
            <motion.p 
              className="text-sm text-center text-gray-700 max-w-xs px-2 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {currentDescription}
            </motion.p>

            {/* Interface Visualization */}
            <motion.div
              className="w-full mt-2 mb-4 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {renderInterfaceContent()}
            </motion.div>

            {/* Step Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-auto">
              {Array.from({ length: maxSteps }, (_, i) => (
                <motion.button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${subStep === i ? colorTheme.background : 'bg-gray-300'}`}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => onStepChange(i)}
                  aria-label={`Go to step ${i + 1}`}
                  animate={subStep === i ? { scale: [1, 1.2, 1] } : {}}
                  transition={subStep === i ? { duration: 1.5, repeat: Infinity } : {}}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stage Navigation */}
      <div className={`w-full px-4 py-3 ${colorTheme.background} rounded-b-xl border-t ${colorTheme.border} shadow-sm`}>
        <div className="flex items-center justify-between">
          <motion.button
            className="px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-[#143151] border border-gray-200"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onStageChange((currentStage - 1 + 4) % 4);
              onStepChange(0);
            }}
            aria-label="Previous workflow"
          >
            Previous
          </motion.button>
          
          <div className="flex gap-1.5">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.button
                key={i}
                className={`w-2 h-2 rounded-full ${currentStage === i ? colorTheme.background : 'bg-gray-300'}`}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  onStageChange(i);
                  onStepChange(0);
                }}
                aria-label={`Go to workflow ${i + 1}`}
              />
            ))}
          </div>
          
          <motion.button
            className="px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-[#143151] border border-gray-200"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onStageChange((currentStage + 1) % 4);
              onStepChange(0);
            }}
            aria-label="Next workflow"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

