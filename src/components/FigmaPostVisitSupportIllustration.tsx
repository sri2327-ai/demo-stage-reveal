
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CalendarCheck, MessageSquare, Activity } from 'lucide-react';

interface FigmaPostVisitSupportIllustrationProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  onHover?: (step: number | null) => void;
}

export const FigmaPostVisitSupportIllustration: React.FC<FigmaPostVisitSupportIllustrationProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  onHover
}) => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video bg-white rounded-xl border border-[#387E89]/20 overflow-hidden shadow-lg">
        {/* App header */}
        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-3 flex items-center justify-between">
          <div className="font-bold">S10.AI Post-Visit Support</div>
          <div className="flex space-x-3">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Main interface */}
        <div className="flex h-[calc(100%-3rem)]">
          {/* Left sidebar - Interactive elements */}
          <div className="w-1/6 bg-[#143151]/10 border-r border-[#387E89]/20 flex flex-col items-center py-4 space-y-6">
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151] hover:bg-[#387E89]/20'} 
                ${isInteractive ? 'cursor-pointer' : ''}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(0)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(0)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <Heart size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 1 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151] hover:bg-[#387E89]/20'}
                ${isInteractive ? 'cursor-pointer' : ''}`}
              animate={{ scale: subStep === 1 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(1)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(1)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <CalendarCheck size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 2 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151] hover:bg-[#387E89]/20'}
                ${isInteractive ? 'cursor-pointer' : ''}`}
              animate={{ scale: subStep === 2 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(2)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(2)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <MessageSquare size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 3 ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white' : 'text-[#143151] hover:bg-[#387E89]/20'}
                ${isInteractive ? 'cursor-pointer' : ''}`}
              animate={{ scale: subStep === 3 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => isInteractive && onElementClick && onElementClick(3)}
              whileHover={isInteractive ? { scale: 1.1 } : undefined}
              onMouseEnter={() => isInteractive && onHover && onHover(3)}
              onMouseLeave={() => isInteractive && onHover && onHover(null)}
            >
              <Activity size={20} />
            </motion.div>
          </div>
          
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Treatment Adherence - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Treatment Adherence</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto space-y-3 
                    ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(0)}
                  onMouseEnter={() => isInteractive && onHover && onHover(0)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-[#143151]">Today's Medication Schedule</div>
                      <div className="text-xs text-[#387E89] font-medium px-2 py-1 bg-[#387E89]/10 rounded-full">3/5 Completed</div>
                    </div>

                    <div className="space-y-3">
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#387E89]/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-full">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-medium">Amoxicillin 500mg</div>
                            <div className="text-xs text-gray-500">8:00 AM - with food</div>
                          </div>
                        </div>
                        <div className="text-green-500">✓ Taken</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#387E89]/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-full">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-medium">Ibuprofen 400mg</div>
                            <div className="text-xs text-gray-500">12:00 PM - with food</div>
                          </div>
                        </div>
                        <div className="text-green-500">✓ Taken</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#387E89]/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-full">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-medium">Vitamin D 2000 IU</div>
                            <div className="text-xs text-gray-500">2:00 PM</div>
                          </div>
                        </div>
                        <div className="text-green-500">✓ Taken</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-amber-100 rounded-full">
                            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-medium">Amoxicillin 500mg</div>
                            <div className="text-xs text-gray-500">4:00 PM - with food</div>
                          </div>
                        </div>
                        <div className="text-amber-600">Due in 22 min</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#387E89]/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 rounded-full">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-medium">Ibuprofen 400mg</div>
                            <div className="text-xs text-gray-500">8:00 PM - with food</div>
                          </div>
                        </div>
                        <div className="text-gray-400">Upcoming</div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20"
                  >
                    <div className="font-medium text-[#143151] mb-2">Personalized Reminders</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-[#387E89]/10 text-[#143151] rounded-full text-sm">SMS</div>
                      <div className="px-3 py-1 bg-[#387E89]/10 text-[#143151] rounded-full text-sm">Email</div>
                      <div className="px-3 py-1 bg-[#387E89]/10 text-[#143151] rounded-full text-sm">Mobile App</div>
                      <div className="px-3 py-1 bg-[#387E89]/10 text-[#143151] rounded-full text-sm">Smart Watch</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Care Plan Monitoring - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Care Plan Monitoring</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto space-y-3 
                    ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(1)}
                  onMouseEnter={() => isInteractive && onHover && onHover(1)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20"
                  >
                    <div className="font-medium text-[#143151] mb-3">Recovery Progress</div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pain Level</span>
                          <span className="text-[#387E89]">Good Progress</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                          ></motion.div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>High</span>
                          <span>Low</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Medication Adherence</span>
                          <span className="text-[#387E89]">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                          ></motion.div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Low</span>
                          <span>High</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Activity Level</span>
                          <span className="text-amber-500">Needs Attention</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-[#143151] to-[#387E89] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "40%" }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                          ></motion.div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Low</span>
                          <span>High</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20"
                  >
                    <div className="font-medium text-[#143151] mb-3">Weekly Check-in</div>
                    
                    <div className="bg-white p-3 rounded-lg border border-[#387E89]/10">
                      <div className="font-medium text-sm mb-2">How are you feeling compared to last week?</div>
                      <div className="flex justify-between gap-2 mb-4">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 py-2 border border-[#143151]/20 rounded text-sm"
                        >
                          Worse
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 py-2 border border-[#143151]/20 rounded text-sm"
                        >
                          Same
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 py-2 bg-[#387E89] text-white rounded text-sm"
                        >
                          Better
                        </motion.button>
                      </div>
                      
                      <div className="font-medium text-sm mb-2">Have you experienced any side effects?</div>
                      <motion.textarea 
                        whileFocus={{ borderColor: "#387E89" }}
                        className="w-full p-2 border border-[#143151]/20 rounded text-sm h-20 mb-3"
                        placeholder="Please describe any side effects..."
                      />
                      
                      <div className="text-right">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded text-sm"
                        >
                          Submit
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Patient Questions - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Patient Questions</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto 
                    ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(2)}
                  onMouseEnter={() => isInteractive && onHover && onHover(2)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-1 overflow-y-auto mb-3 space-y-3">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                      >
                        <div className="bg-[#143151]/10 rounded-lg p-3 max-w-[70%] text-sm">
                          Is it normal to still have some swelling in my ankle 5 days after surgery?
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex"
                      >
                        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg p-3 max-w-[70%] text-sm">
                          Yes, some swelling is normal 5 days post ankle surgery. If you're following your post-op instructions, elevating your ankle, and applying ice as directed, this is expected. However, if the swelling is severe, increasing, or accompanied by redness, warmth, or fever, you should contact your doctor immediately.
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-end"
                      >
                        <div className="bg-[#143151]/10 rounded-lg p-3 max-w-[70%] text-sm">
                          When can I start putting weight on it?
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex"
                      >
                        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg p-3 max-w-[70%] text-sm">
                          Based on your surgical records, Dr. Johnson recommended no weight-bearing for 2 weeks, followed by partial weight-bearing with crutches for 2-4 weeks. Your next follow-up appointment is in 9 days, where your progress will be assessed. Every recovery is unique, so your doctor may adjust this timeline based on your healing progress.
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex justify-end"
                      >
                        <div className="bg-[#143151]/10 rounded-lg p-3 max-w-[70%] text-sm">
                          Should I continue taking all three pain medications?
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex"
                      >
                        <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded-lg p-3 max-w-[70%] text-sm">
                          Your current prescription includes one primary pain medication and two supplementary ones. If your pain level has decreased significantly, you can consider reducing the supplementary medications first. I've notified Dr. Johnson about your question, and she suggests discussing your pain management during your upcoming telemedicine appointment tomorrow at 2:00 PM.
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.input 
                        whileFocus={{ borderColor: "#387E89" }}
                        type="text" 
                        className="flex-1 border border-[#387E89]/20 rounded-lg px-3 py-2 text-sm" 
                        placeholder="Ask a question..."
                      />
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Send
                      </motion.button>
                    </div>
                    
                    <div className="text-xs text-[#387E89] mt-2 text-center">
                      24/7 AI-assisted responses, monitored by clinical staff
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Recovery Tracking - Step 3 */}
            {subStep === 3 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Recovery Tracking</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto 
                    ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(3)}
                  onMouseEnter={() => isInteractive && onHover && onHover(3)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-3 mb-3"
                  >
                    <div className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20">
                      <div className="font-medium text-[#143151] mb-2">Recovery Timeline</div>
                      <div className="flex items-center">
                        <div className="w-1/3">
                          <div className="text-center mb-1">
                            <div className="text-xs text-gray-500">Week 1</div>
                          </div>
                          <div className="h-2 bg-green-500 rounded"></div>
                          <div className="text-center mt-1">
                            <div className="text-xs text-green-600">Complete</div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="text-center mb-1">
                            <div className="text-xs text-gray-500">Week 2</div>
                          </div>
                          <motion.div 
                            className="h-2 bg-[#387E89] rounded"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                          <div className="text-center mt-1">
                            <div className="text-xs text-[#387E89]">Current</div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="text-center mb-1">
                            <div className="text-xs text-gray-500">Week 3</div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="text-center mt-1">
                            <div className="text-xs text-gray-400">Upcoming</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20">
                      <div className="font-medium text-[#143151] mb-2">Next Follow-up</div>
                      <div className="flex items-center gap-2">
                        <CalendarCheck size={20} className="text-[#387E89]" />
                        <div>
                          <div className="text-sm font-medium">May 15, 2025</div>
                          <div className="text-xs text-gray-500">Dr. Johnson (Virtual)</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <motion.button 
                          whileHover={{ scale: 1.03 }}
                          className="w-full py-1 text-xs bg-[#387E89]/10 text-[#143151] rounded"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20 mb-3"
                  >
                    <div className="font-medium text-[#143151] mb-3">Daily Symptom Log</div>
                    <div className="space-y-2">
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white p-3 rounded border border-[#387E89]/10"
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">Pain Level</div>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((val) => (
                              <div 
                                key={val}
                                className={`w-6 h-6 flex items-center justify-center text-xs rounded-full mx-0.5 
                                  ${val <= 3 ? 'bg-[#387E89] text-white' : 'border border-gray-300 text-gray-400'}`}
                              >
                                {val}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="bg-white p-3 rounded border border-[#387E89]/10"
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">Swelling</div>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((val) => (
                              <div 
                                key={val}
                                className={`w-6 h-6 flex items-center justify-center text-xs rounded-full mx-0.5 
                                  ${val <= 4 ? 'bg-[#387E89] text-white' : 'border border-gray-300 text-gray-400'}`}
                              >
                                {val}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                        className="bg-white p-3 rounded border border-[#387E89]/10"
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">Mobility</div>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((val) => (
                              <div 
                                key={val}
                                className={`w-6 h-6 flex items-center justify-center text-xs rounded-full mx-0.5 
                                  ${val <= 2 ? 'bg-[#387E89] text-white' : 'border border-gray-300 text-gray-400'}`}
                              >
                                {val}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mt-3 text-right">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded text-sm"
                      >
                        Update Today's Log
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="bg-[#143151]/5 p-4 rounded-lg border border-[#387E89]/20"
                  >
                    <div className="font-medium text-[#143151] mb-2">Provider Insights</div>
                    <div className="p-3 bg-white rounded border border-[#387E89]/10">
                      <div className="text-sm italic text-gray-600">
                        "Your recovery is progressing well. Swelling remains an issue, but pain management has improved significantly. Continue with elevating your leg and ice therapy. We'll discuss physical therapy options at your next appointment."
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        — Dr. Johnson, updated 2 days ago
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
