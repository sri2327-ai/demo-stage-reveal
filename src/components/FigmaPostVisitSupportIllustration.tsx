
import React from 'react';
import { motion } from 'framer-motion';
import { 
  PillIcon, 
  Stethoscope, 
  MessageSquare, 
  LineChart,
  CheckCircle,
  Clock,
  Calendar,
  Bell
} from 'lucide-react';

interface FigmaPostVisitSupportIllustrationProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  onHover?: (step: number | null) => void;
  hideTitle?: boolean;
}

export const FigmaPostVisitSupportIllustration: React.FC<FigmaPostVisitSupportIllustrationProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  onHover,
  hideTitle = false
}) => {
  // Icon components for each section
  const icons = [
    <PillIcon size={24} className="text-blue-500" />,
    <Stethoscope size={24} className="text-green-500" />,
    <MessageSquare size={24} className="text-amber-500" />,
    <LineChart size={24} className="text-purple-500" />
  ];
  
  // Step titles
  const stepTitles = [
    "Treatment Adherence",
    "Care Plan Monitoring", 
    "Patient Questions",
    "Recovery Tracking"
  ];

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video bg-white rounded-xl border border-[#387E89]/20 overflow-hidden shadow-lg">
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
        
        {/* Main interface */}
        <div className={`flex ${hideTitle ? 'h-full' : 'h-[calc(100%-3rem)]'}`}>
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Treatment Adherence - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <PillIcon size={20} className="text-blue-500" />
                  <div className="font-medium text-[#143151]">Treatment Adherence</div>
                </div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(0)}
                  onMouseEnter={() => isInteractive && onHover && onHover(0)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <div className="bg-[#143151]/5 p-3">
                    <div className="font-medium text-[#143151] mb-2">Michael Brown - Medication Schedule</div>
                    <div className="text-sm text-[#387E89]">Updated today</div>
                  </div>
                  
                  <div className="p-4">
                    <motion.div 
                      className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 flex items-start justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <PillIcon size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-[#143151]">Lisinopril 10mg</div>
                          <div className="text-sm text-gray-500">Take 1 tablet by mouth daily</div>
                          <div className="flex items-center mt-1">
                            <Clock size={14} className="text-[#387E89] mr-1" />
                            <span className="text-xs text-[#387E89]">Morning (8:00 AM)</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center">
                        <CheckCircle size={12} className="mr-1" /> Taken
                      </span>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3 flex items-start justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                          <PillIcon size={18} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-[#143151]">Vitamin D 2000 IU</div>
                          <div className="text-sm text-gray-500">Take 1 tablet by mouth daily</div>
                          <div className="flex items-center mt-1">
                            <Clock size={14} className="text-[#387E89] mr-1" />
                            <span className="text-xs text-[#387E89]">Morning (8:00 AM)</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full flex items-center">
                        <Bell size={12} className="mr-1" /> Due Today
                      </span>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-[#143151]">Monthly Adherence</div>
                        <div className="text-xs text-[#387E89]">May 2025</div>
                      </div>
                      
                      <div className="flex items-end justify-between mx-6 mb-2">
                        {[0.9, 1, 0.8, 1, 0.9, 0.95, 1].map((height, i) => (
                          <motion.div 
                            key={i}
                            className="w-4 bg-[#387E89]/80 rounded-t"
                            style={{ height: `${height * 60}px` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${height * 60}px` }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mx-6">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                          <div key={i} className="text-xs text-[#143151]">{day}</div>
                        ))}
                      </div>
                      
                      <div className="text-center mt-2 text-sm text-[#387E89]">
                        <span className="font-medium">92%</span> adherence this week
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <button className="px-4 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm rounded hover:opacity-90 transition-opacity">
                        View All Medications
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Care Plan Monitoring - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Stethoscope size={20} className="text-green-500" />
                  <div className="font-medium text-[#143151]">Care Plan Monitoring</div>
                </div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(1)}
                  onMouseEnter={() => isInteractive && onHover && onHover(1)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <div className="bg-[#143151]/5 p-3">
                    <div className="font-medium text-[#143151] mb-2">Michael Brown - Hypertension Management</div>
                    <div className="text-sm text-[#387E89]">Care plan created 3 days ago</div>
                  </div>
                  
                  <div className="p-4">
                    <motion.div 
                      className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="font-medium text-[#143151]">Blood Pressure Readings</div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Improving
                        </span>
                      </div>
                      
                      <div className="h-[120px] relative mb-2">
                        {/* Simplified line chart for blood pressure */}
                        <div className="absolute inset-0 flex items-end justify-between px-2">
                          {[142, 140, 138, 136, 134, 130, 128].map((bp, i) => (
                            <motion.div 
                              key={i}
                              className="relative flex flex-col items-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              <div className="text-xs text-[#143151]">{bp}/{Math.round(bp * 0.65)}</div>
                              <div className={`w-2 h-2 rounded-full ${i === 6 ? 'bg-green-500' : 'bg-[#387E89]'} mt-1`} />
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="absolute bottom-6 left-3 right-3 h-0.5 bg-gray-100"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.5, duration: 0.7 }}
                        />
                        
                        <motion.svg 
                          className="absolute bottom-6 left-3 right-3 h-20"
                          viewBox="0 0 100 50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <motion.path
                            d="M0,40 L17,35 L33,30 L50,25 L67,20 L83,15 L100,10"
                            fill="none"
                            stroke="#387E89"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.9, duration: 1 }}
                          />
                        </motion.svg>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500 px-2">
                        <div>May 2</div>
                        <div>May 8</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="font-medium text-[#143151] mb-2">Daily Care Tasks</div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-100">
                          <div className="flex items-center">
                            <CheckCircle size={16} className="text-green-500 mr-2" />
                            <div className="text-sm">Morning BP measurement</div>
                          </div>
                          <div className="text-xs text-green-600">Completed</div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 bg-amber-50 rounded border border-amber-100">
                          <div className="flex items-center">
                            <Clock size={16} className="text-amber-500 mr-2" />
                            <div className="text-sm">Evening BP measurement</div>
                          </div>
                          <div className="text-xs text-amber-600">Due at 7:00 PM</div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-100">
                          <div className="flex items-center">
                            <CheckCircle size={16} className="text-green-500 mr-2" />
                            <div className="text-sm">Daily medication</div>
                          </div>
                          <div className="text-xs text-green-600">Completed</div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                          <div className="flex items-center">
                            <Calendar size={16} className="text-gray-500 mr-2" />
                            <div className="text-sm">30-minute walk</div>
                          </div>
                          <div className="text-xs text-gray-600">Scheduled for later</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Patient Questions - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare size={20} className="text-amber-500" />
                  <div className="font-medium text-[#143151]">Patient Questions</div>
                </div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(2)}
                  onMouseEnter={() => isInteractive && onHover && onHover(2)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <div className="flex h-full">
                    <div className="w-1/3 bg-[#143151]/5 border-r border-[#387E89]/10 p-3 flex flex-col">
                      <div className="mb-3">
                        <input 
                          type="text" 
                          placeholder="Search conversations..." 
                          className="w-full px-3 py-2 text-sm border border-[#387E89]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#387E89]/30" 
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2 overflow-y-auto">
                        <motion.div
                          className="p-2 bg-[#387E89]/20 rounded-lg cursor-pointer border-l-4 border-[#387E89]"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="font-medium text-sm text-[#143151]">Michael Brown</div>
                          <div className="text-xs text-gray-500 truncate">Question about side effects</div>
                          <div className="text-xs text-[#387E89] mt-1">2 hours ago</div>
                        </motion.div>
                        
                        <motion.div
                          className="p-2 bg-white hover:bg-[#143151]/5 rounded-lg cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="font-medium text-sm text-[#143151]">Sarah Johnson</div>
                          <div className="text-xs text-gray-500 truncate">Follow-up appointment</div>
                          <div className="text-xs text-[#387E89] mt-1">Yesterday</div>
                        </motion.div>
                        
                        <motion.div
                          className="p-2 bg-white hover:bg-[#143151]/5 rounded-lg cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="font-medium text-sm text-[#143151]">James Wilson</div>
                          <div className="text-xs text-gray-500 truncate">Question about diet</div>
                          <div className="text-xs text-[#387E89] mt-1">2 days ago</div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="w-2/3 flex flex-col p-3">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-[#143151]">Michael Brown</div>
                          <div className="text-xs text-gray-500">Question about side effects</div>
                        </div>
                        <button className="px-2 py-1 text-xs border border-[#387E89]/20 rounded text-[#143151] hover:bg-[#387E89]/10">
                          Refer to Provider
                        </button>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto bg-[#143151]/5 rounded-lg p-3 mb-3">
                        <motion.div
                          className="flex justify-end mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="bg-[#143151]/10 text-[#143151] p-2 rounded-lg max-w-[80%] text-sm">
                            Since starting lisinopril, I've been experiencing a dry cough, especially at night. Is this normal? Should I be concerned?
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="flex mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="bg-[#387E89]/20 text-[#143151] p-2 rounded-lg max-w-[80%] text-sm">
                            Yes, a persistent dry cough is a common side effect of lisinopril, which is an ACE inhibitor. This happens in about 5-20% of patients and is usually not dangerous, but can be bothersome.
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="flex mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                        >
                          <div className="bg-[#387E89]/20 text-[#143151] p-2 rounded-lg max-w-[80%] text-sm">
                            If the cough is interfering with your sleep or daily activities, we should notify Dr. Smith. There are alternative medications (ARBs) that have similar benefits without this side effect.
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="flex justify-end mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <div className="bg-[#143151]/10 text-[#143151] p-2 rounded-lg max-w-[80%] text-sm">
                            Thank you. It has been affecting my sleep. Should I continue taking it until I speak with Dr. Smith?
                          </div>
                        </motion.div>
                        
                        <motion.div
                          className="flex"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 }}
                        >
                          <div className="bg-[#387E89]/20 text-[#143151] p-2 rounded-lg max-w-[80%] text-sm">
                            Yes, please continue taking your medication as prescribed. I've sent a notification to Dr. Smith about your side effect. You should hear back within 24 hours about potential medication adjustments.
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Type your response..." 
                          className="flex-1 px-3 py-2 text-sm border border-[#387E89]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#387E89]/30" 
                        />
                        <button className="px-3 py-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm rounded hover:opacity-90">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Recovery Tracking - Step 3 */}
            {subStep === 3 && (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <LineChart size={20} className="text-purple-500" />
                  <div className="font-medium text-[#143151]">Recovery Tracking</div>
                </div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(3)}
                  onMouseEnter={() => isInteractive && onHover && onHover(3)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <div className="bg-[#143151]/5 p-3">
                    <div className="font-medium text-[#143151] mb-2">Michael Brown - Recovery Progress</div>
                    <div className="text-sm text-[#387E89]">Week 1 of hypertension management plan</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <motion.div 
                        className="bg-white p-3 rounded-lg border border-[#387E89]/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium text-[#143151]">Blood Pressure</div>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Improving
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-[#143151]">128/84</div>
                        <div className="text-xs text-[#387E89] mt-1">Target: &lt; 130/80 mmHg</div>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#143151] to-[#387E89]"
                            style={{ width: '90%' }}
                            initial={{ width: 0 }}
                            animate={{ width: '90%' }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white p-3 rounded-lg border border-[#387E89]/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium text-[#143151]">Medication Adherence</div>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Excellent
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-[#143151]">92%</div>
                        <div className="text-xs text-[#387E89] mt-1">Target: &gt; 80%</div>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#143151] to-[#387E89]"
                            style={{ width: '92%' }}
                            initial={{ width: 0 }}
                            animate={{ width: '92%' }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-3 rounded-lg border border-[#387E89]/20 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="font-medium text-[#143151] mb-3">Symptoms Over Time</div>
                      
                      <div className="h-[120px] relative mb-2">
                        {/* Simplified symptom tracker chart */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                          <div>Severe</div>
                          <div>Moderate</div>
                          <div>Mild</div>
                          <div>None</div>
                        </div>
                        
                        <div className="absolute left-[50px] right-0 top-0 bottom-0">
                          <motion.svg 
                            className="w-full h-full"
                            viewBox="0 0 300 100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <rect x="0" y="0" width="300" height="100" fill="#f5f5f5" rx="4" />
                            
                            {/* Gridlines */}
                            <line x1="0" y1="25" x2="300" y2="25" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="0" y1="50" x2="300" y2="50" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="0" y1="75" x2="300" y2="75" stroke="#e5e5e5" strokeWidth="1" />
                            
                            {/* Symptom lines */}
                            <motion.path
                              d="M30,80 L70,60 L110,50 L150,30 L190,20 L230,20 L270,10"
                              fill="none"
                              stroke="#387E89"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.8, duration: 1.2 }}
                            />
                            <motion.path
                              d="M30,70 L70,65 L110,70 L150,60 L190,50 L230,40 L270,30"
                              fill="none"
                              stroke="#143151"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1, duration: 1.2 }}
                            />
                            
                            {/* Data points */}
                            {[80, 60, 50, 30, 20, 20, 10].map((y, i) => (
                              <motion.circle
                                key={`headache-${i}`}
                                cx={30 + i * 40}
                                cy={y}
                                r="4"
                                fill="#387E89"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                              />
                            ))}
                            
                            {[70, 65, 70, 60, 50, 40, 30].map((y, i) => (
                              <motion.circle
                                key={`dizziness-${i}`}
                                cx={30 + i * 40}
                                cy={y}
                                r="4"
                                fill="#143151"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + i * 0.1 }}
                              />
                            ))}
                          </motion.svg>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 px-[50px]">
                        <div className="flex items-center text-xs">
                          <div className="h-2 w-4 bg-[#387E89] mr-1 rounded" />
                          <span className="text-[#143151]">Headaches</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="h-2 w-4 border-b-2 border-dashed border-[#143151] mr-1" />
                          <span className="text-[#143151]">Dizziness</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-[#143151]">AI Insights</div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          New
                        </span>
                      </div>
                      
                      <div className="text-sm text-[#143151]">
                        <p className="mb-2">Based on your recovery data, your symptoms are improving significantly. Blood pressure readings have stabilized in the normal range, suggesting good response to treatment.</p>
                        <p>Continue your current medication and lifestyle changes. Your follow-up appointment is scheduled for May 16th.</p>
                      </div>
                      
                      <div className="mt-3 flex justify-end">
                        <button className="px-3 py-1 text-xs bg-gradient-to-r from-[#143151] to-[#387E89] text-white rounded hover:opacity-90">
                          Share with Provider
                        </button>
                      </div>
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
