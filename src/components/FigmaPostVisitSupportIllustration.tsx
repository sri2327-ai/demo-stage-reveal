
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Heart, Activity, Star } from 'lucide-react';

interface FigmaPostVisitSupportIllustrationProps {
  subStep: number;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

export const FigmaPostVisitSupportIllustration: React.FC<FigmaPostVisitSupportIllustrationProps> = ({
  subStep,
  isInteractive = false,
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
            <div className="font-bold">S10.AI Post-Visit Support</div>
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
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 1 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}`}
              animate={{ scale: subStep === 1 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Heart size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 2 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}`}
              animate={{ scale: subStep === 2 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Activity size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 3 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}`}
              animate={{ scale: subStep === 3 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 4 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151]'}`}
              animate={{ scale: subStep === 4 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Star size={20} />
            </motion.div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Treatment Adherence View */}
            {subStep === 0 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Treatment Adherence</div>
                <div className="flex-1 bg-[#143151]/5 rounded-lg p-4 border border-[#387E89]/10">
                  {/* Content for treatment adherence here */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-[#143151] mb-2">Patient Medication Schedule</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20 mb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-[#143151]">Lisinopril 10mg</div>
                          <div className="text-xs text-gray-500">Once daily, morning</div>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Adherent</div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-[#143151]">Atorvastatin 20mg</div>
                          <div className="text-xs text-gray-500">Once daily, evening</div>
                        </div>
                        <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Missed 1 dose</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-[#143151] mb-2">AI Agent Actions</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white p-2 rounded-full">
                          <MessageCircle size={16} />
                        </div>
                        <div>
                          <div className="text-xs text-[#387E89]">Yesterday, 7:00 PM</div>
                          <div className="font-medium text-sm text-[#143151]">Medication Reminder Sent</div>
                          <div className="text-xs text-gray-500 mt-1">
                            "Don't forget to take your evening dose of Atorvastatin 20mg with food. This medication helps manage your cholesterol levels."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Care Plan Monitoring View */}
            {subStep === 1 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Care Plan Monitoring</div>
                <div className="flex-1 bg-[#143151]/5 rounded-lg p-4 border border-[#387E89]/10">
                  {/* Content for care plan monitoring */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-[#143151] mb-2">Blood Pressure Tracking</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="h-36 w-full bg-[#143151]/5 rounded-lg flex items-center justify-center">
                        <div className="text-sm text-gray-500">Blood Pressure Chart</div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                        <div className="text-[#143151]">
                          <div className="text-xs">Last Reading</div>
                          <div className="font-medium">136/82</div>
                        </div>
                        <div className="text-[#143151]">
                          <div className="text-xs">7-day Avg</div>
                          <div className="font-medium">138/85</div>
                        </div>
                        <div className="text-[#143151]">
                          <div className="text-xs">30-day Avg</div>
                          <div className="font-medium">142/88</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Patient Questions View */}
            {subStep === 2 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Patient Questions</div>
                <div className="flex-1 bg-[#143151]/5 rounded-lg p-4 border border-[#387E89]/10">
                  {/* Content for patient questions */}
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#143151]/10 text-[#143151] p-2 rounded-full">
                          <MessageCircle size={16} />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <div className="font-medium text-sm text-[#143151]">Patient Question</div>
                            <div className="text-xs text-[#387E89]">Today, 9:15 AM</div>
                          </div>
                          <div className="text-xs text-gray-700 mt-1">
                            "How long should I expect to experience side effects from the new medication?"
                          </div>
                          
                          <div className="mt-3 border-t border-dashed border-[#387E89]/20 pt-2">
                            <div className="flex items-start gap-2">
                              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white p-1 rounded-full">
                                <MessageCircle size={12} />
                              </div>
                              <div className="text-xs text-gray-700">
                                <span className="font-medium">AI Response:</span> "Most patients adjust to Lisinopril within 1-2 weeks. If side effects persist beyond this period or worsen, please contact your healthcare provider immediately."
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Recovery Tracking View */}
            {subStep === 3 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Recovery Tracking</div>
                <div className="flex-1 bg-[#143151]/5 rounded-lg p-4 border border-[#387E89]/10">
                  {/* Content for recovery tracking */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="text-xs text-[#387E89] mb-1">Symptom Reporting</div>
                      <div className="text-sm font-medium text-[#143151]">Headache Frequency</div>
                      <div className="mt-2 h-24 w-full bg-[#143151]/5 rounded-lg"></div>
                      <div className="mt-2 text-xs text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Decreased by 60% in 2 weeks
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20">
                      <div className="text-xs text-[#387E89] mb-1">Daily Monitoring</div>
                      <div className="text-sm font-medium text-[#143151]">Dizziness Score</div>
                      <div className="mt-2 h-24 w-full bg-[#143151]/5 rounded-lg"></div>
                      <div className="mt-2 text-xs text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Improved by 45% since treatment
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Patient Feedback View with enhanced animation */}
            {subStep === 4 && (
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-lg font-medium text-[#143151] mb-3">Patient Feedback</div>
                <div className="flex-1 bg-[#143151]/5 rounded-lg p-4 border border-[#387E89]/10">
                  {/* New animated patient feedback content */}
                  <div className="relative h-full">
                    {/* Background elements */}
                    <motion.div
                      className="absolute top-2 right-2 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-5 left-5 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-20"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                    
                    {/* Patient satisfaction graphic */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className="relative w-48 h-48"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {/* Background circle */}
                        <div className="absolute inset-0 rounded-full border-8 border-[#143151]/10"></div>
                        
                        {/* Progress circle */}
                        <svg className="absolute inset-0" viewBox="0 0 100 100">
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#feedback-gradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            initial={{ strokeDashoffset: 283 }}
                            animate={{ strokeDashoffset: 28 }} // 90% of 283
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                          />
                          <defs>
                            <linearGradient id="feedback-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#143151" />
                              <stop offset="100%" stopColor="#387E89" />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Center content */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <motion.div 
                            className="text-4xl font-bold text-[#143151]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            90%
                          </motion.div>
                          <motion.div 
                            className="text-sm text-[#387E89]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                          >
                            Satisfaction
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Feedback cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div 
                              key={star}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1 + star * 0.1 }}
                            >
                              <Star 
                                className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                fill={star <= 5 ? 'currentColor' : 'none'} 
                              />
                            </motion.div>
                          ))}
                        </div>
                        <div className="text-sm font-medium text-[#143151]">Dr. Smith was very thorough</div>
                        <motion.div 
                          className="text-xs text-gray-500 mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8 }}
                        >
                          "The AI agent followed up with all the information I needed. Very satisfied with my care experience."
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white p-3 rounded-lg shadow-sm border border-[#387E89]/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="flex mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div 
                              key={star}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.2 + star * 0.1 }}
                            >
                              <Star 
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                fill={star <= 4 ? 'currentColor' : 'none'} 
                              />
                            </motion.div>
                          ))}
                        </div>
                        <div className="text-sm font-medium text-[#143151]">Seamless communication</div>
                        <motion.div 
                          className="text-xs text-gray-500 mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                        >
                          "The AI agent reminds me about medications and answers my questions promptly."
                        </motion.div>
                      </motion.div>
                      
                      {/* Animated feedback metrics */}
                      <motion.div 
                        className="col-span-2 mt-3 bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 p-3 rounded-lg shadow-sm text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="text-sm font-medium mb-2">Feedback Metrics</div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                          >
                            <div className="text-lg font-bold">95%</div>
                            <div className="text-xs text-white/80">Would Recommend</div>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4 }}
                          >
                            <div className="text-lg font-bold">82%</div>
                            <div className="text-xs text-white/80">Response Rate</div>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.6 }}
                          >
                            <div className="text-lg font-bold">4.8</div>
                            <div className="text-xs text-white/80">Average Rating</div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
