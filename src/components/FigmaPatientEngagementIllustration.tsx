
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, FileText, BellRing, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface FigmaPatientEngagementIllustrationProps {
  subStep: number;
  cursorPosition: { x: number; y: number };
  isProcessingCall: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  onHover?: (step: number | null) => void;
  hideTitle?: boolean;
}

export const FigmaPatientEngagementIllustration: React.FC<FigmaPatientEngagementIllustrationProps> = ({ 
  subStep, 
  cursorPosition,
  isProcessingCall,
  onElementClick,
  isInteractive = false,
  onHover,
  hideTitle = false
}) => {
  const isMobile = useIsMobile();
  
  // Handle click on each icon - directly set to the corresponding step instead of cycling
  const handleAreaClick = (step: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isInteractive && onElementClick) {
      onElementClick(step);
    }
  };

  // Handle click on the entire illustration area
  const handleIllustrationClick = () => {
    if (isInteractive && onElementClick) {
      // Cycle through steps on general area click
      const nextStep = (subStep + 1) % 5;
      onElementClick(nextStep);
    }
  };

  // Only hide title on mobile, or if explicitly needed for a specific layout
  const shouldHideTitle = isMobile ? hideTitle : false;

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleIllustrationClick}
    >
      <div className="relative aspect-video bg-white rounded-xl border border-[#387E89]/20 overflow-hidden shadow-lg">
        {/* App header - now shows on desktop even when hideTitle is true */}
        {!shouldHideTitle && (
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-3 flex items-center justify-between">
            <div className="font-bold">Patient Engagement</div>
            <div className="flex space-x-3">
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        )}
        
        {/* Main interface */}
        <div className={`flex ${shouldHideTitle ? 'h-full' : 'h-[calc(100%-3rem)]'}`}>
          {/* Left sidebar - Interactive elements */}
          <div className="w-1/6 bg-gradient-to-b from-[#143151]/5 to-[#387E89]/10 border-r border-[#387E89]/10 flex flex-col items-center py-4 space-y-6">
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'} 
                ${isInteractive ? 'cursor-pointer hover:bg-[#387E89]/20' : ''}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => handleAreaClick(0, e)}
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
              onClick={(e) => handleAreaClick(1, e)}
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
              onClick={(e) => handleAreaClick(2, e)}
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
              onClick={(e) => handleAreaClick(3, e)}
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
              onClick={(e) => handleAreaClick(4, e)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(4)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <Phone size={20} />
            </motion.div>
          </div>
          
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Messaging Interface - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Patient Messaging</div>
                <div className="flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#387E89]/10 text-[#143151] rounded-lg p-2 max-w-[70%] text-sm">
                      I've been experiencing migraines and would like to schedule an appointment.
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex"
                  >
                    <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg p-2 max-w-[70%] text-sm">
                      I'm sorry to hear about your migraines. I'd be happy to help schedule an appointment. When would you prefer to come in?
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#387E89]/10 text-[#143151] rounded-lg p-2 max-w-[70%] text-sm">
                      Something this week would be great, preferably in the afternoon.
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex"
                  >
                    <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg p-2 max-w-[70%] text-sm">
                      I see that Dr. Smith has availability this Thursday at 2:00 PM and Friday at 3:30 PM. Would either of those work for you?
                    </div>
                  </motion.div>
                </div>
                <div className="mt-2 flex">
                  <input type="text" className="flex-1 border border-[#387E89]/20 rounded-lg px-3 py-2 text-sm" placeholder="Type your message..." />
                  <button className="ml-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-2 rounded-lg text-sm hover:opacity-90">
                    Send
                  </button>
                </div>
              </div>
            )}
            
            {/* Calendar Interface - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Appointment Scheduling</div>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="text-center text-xs font-medium text-[#143151] py-1">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}
                    </div>
                  ))}
                  
                  {Array.from({ length: 35 }).map((_, i) => {
                    const isToday = i === 16;
                    const isSelected = i === 18;
                    const hasAppointment = [19, 22, 25, 28].includes(i);
                    
                    return (
                      <motion.div 
                        key={i} 
                        className={`
                          rounded-md py-1 text-center text-xs border
                          ${isToday ? 'border-[#387E89]/30 bg-[#387E89]/5' : 'border-gray-100'} 
                          ${isSelected ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : ''} 
                          ${hasAppointment ? 'bg-[#387E89]/10' : ''}
                        `}
                        animate={{ 
                          scale: isSelected ? [1, 1.05, 1] : 1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {i + 1}
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto">
                  <div className="font-medium text-[#143151] mb-2">Available Times on Thursday</div>
                  
                  <motion.div 
                    className="grid grid-cols-3 gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {['9:00 AM', '10:30 AM', '1:00 PM', '2:00 PM', '3:30 PM', '4:45 PM'].map((time, i) => (
                      <motion.div
                        key={i}
                        className={`p-2 border rounded-lg text-center text-sm ${
                          i === 3 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white border-[#387E89]' : 'border-[#387E89]/20 hover:bg-[#387E89]/10'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        animate={{ 
                          scale: i === 3 ? [1, 1.05, 1] : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {time}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#387E89]/5 p-3 rounded-lg border border-[#387E89]/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="font-medium text-[#143151]">Appointment Details</div>
                    <div className="text-sm text-[#143151] mt-1">Thursday, Jul 18 at 2:00 PM</div>
                    <div className="text-sm text-[#143151]">Dr. Smith - Neurology</div>
                    <div className="text-xs text-[#387E89] mt-2">Patient will receive automated reminders</div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Intake Form Interface - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Patient Intake</div>
                <div className="flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto">
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-1">Patient Information</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-[#387E89]/5 rounded border border-[#387E89]/20 text-sm">
                        <div className="text-xs text-[#387E89]">Name</div>
                        <div>Jane Doe</div>
                      </div>
                      <div className="p-2 bg-[#387E89]/5 rounded border border-[#387E89]/20 text-sm">
                        <div className="text-xs text-[#387E89]">DOB</div>
                        <div>05/12/1985</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-1">Reason for Visit</div>
                    <div className="p-2 bg-[#387E89]/5 rounded border border-[#387E89]/20 text-sm">
                      Migraine headaches that have been increasing in frequency over the past month.
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-1">Current Medications</div>
                    <div className="space-y-1">
                      <div className="p-2 bg-[#387E89]/5 rounded border border-[#387E89]/20 text-sm flex items-center">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mr-2"></div>
                        <div>Imitrex 50mg as needed</div>
                      </div>
                      <div className="p-2 bg-[#387E89]/5 rounded border border-[#387E89]/20 text-sm flex items-center">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mr-2"></div>
                        <div>Vitamin B2 400mg daily</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-1">Completed Forms</div>
                    <div className="space-y-1">
                      <div className="p-2 bg-green-50 rounded border border-green-100 text-sm flex items-center">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>Medical History</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded border border-green-100 text-sm flex items-center">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>Insurance Information</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded border border-green-100 text-sm flex items-center">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>HIPAA Consent</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Reminders Interface - Step 3 */}
            {subStep === 3 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Patient Reminders</div>
                <div className="flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto">
                  <motion.div 
                    className="mb-4 p-3 bg-[#143151]/10 rounded-lg border border-[#143151]/20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm font-medium text-[#143151]">Upcoming Appointment</div>
                    <div className="text-sm text-[#143151] mt-1">Thursday, Jul 18 at 2:00 PM</div>
                    <div className="text-sm text-[#143151]">Dr. Smith - Neurology</div>
                    <div className="mt-2 flex space-x-2">
                      <button className="px-2 py-1 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-xs rounded">Confirm</button>
                      <button className="px-2 py-1 bg-white border border-[#387E89]/30 text-[#143151] text-xs rounded">Reschedule</button>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-sm font-medium text-amber-800">Preparation Instructions</div>
                    <div className="text-sm text-amber-700 mt-1">Please bring a list of all medications and supplements you are currently taking.</div>
                    <div className="text-sm text-amber-700">Arrive 15 minutes early to complete any remaining paperwork.</div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-sm font-medium text-indigo-800">Headache Diary Reminder</div>
                    <div className="text-sm text-indigo-700 mt-1">Please continue recording your headache symptoms in the mobile app.</div>
                    <div className="text-sm text-indigo-700">This information will help Dr. Smith provide better care.</div>
                    <div className="mt-2">
                      <button className="px-2 py-1 bg-indigo-500 text-white text-xs rounded">Open Headache Diary</button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-3 bg-green-50 rounded-lg border border-green-100"
                  >
                    <div className="text-sm font-medium text-green-800">Insurance Verification Complete</div>
                    <div className="text-sm text-green-700 mt-1">Your insurance has been verified for this visit.</div>
                    <div className="text-sm text-green-700">Estimated co-pay: $25</div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* AI Calling - Step 4 (New step) */}
            {subStep === 4 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">AI Call Confirmation</div>
                <div className="flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto">
                  <motion.div 
                    className="mb-4 flex flex-col items-center py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full flex items-center justify-center mb-2">
                      <Phone size={30} className="text-white" />
                    </div>
                    <div className="text-lg font-medium text-[#143151]">AI Agent Calling</div>
                    <div className="text-sm text-gray-500">Confirming appointment with patient</div>
                    
                    <motion.div 
                      className="mt-3 flex space-x-3"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89]"></div>
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-[#387E89]/5 rounded-lg border border-[#387E89]/20 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-sm font-medium text-[#143151] mb-2">Call Transcript</div>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium text-[#143151]">AI Assistant:</div>
                      <div className="text-gray-700 pl-4">
                        "Hello, this is the AI assistant from Metropolitan Neurology. I'm calling to confirm your appointment with Dr. Smith this Thursday at 2:00 PM. Is this still a good time for you?"
                      </div>
                      <div className="font-medium text-[#143151] mt-2">Patient:</div>
                      <div className="text-gray-700 pl-4">
                        "Yes, that works for me. I'll be there."
                      </div>
                      <div className="font-medium text-[#143151] mt-2">AI Assistant:</div>
                      <div className="text-gray-700 pl-4">
                        "Great! Remember to bring your medication list and arrive 15 minutes early. Would you like me to send a text reminder the day before?"
                      </div>
                      <div className="font-medium text-[#143151] mt-2">Patient:</div>
                      <div className="text-gray-700 pl-4">
                        "Yes, please. That would be helpful."
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="p-4 bg-green-50 rounded-lg border border-green-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-green-800">Call Completed</div>
                      <div className="text-xs text-green-600">2m 14s</div>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-green-700">
                        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Appointment confirmed
                      </div>
                      <div className="flex items-center text-sm text-green-700">
                        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Text reminder scheduled
                      </div>
                      <div className="flex items-center text-sm text-green-700">
                        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        EHR updated
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
