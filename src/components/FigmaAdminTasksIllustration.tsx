import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Mail, 
  ArrowRight, 
  DollarSign, 
  Receipt, 
  Calendar, 
  CheckCircle 
} from 'lucide-react';

interface FigmaAdminTasksIllustrationProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  onHover?: (step: number | null) => void;
  hideTitle?: boolean; // Add the hideTitle property to the interface
}

export const FigmaAdminTasksIllustration: React.FC<FigmaAdminTasksIllustrationProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  onHover,
  hideTitle = false // Set a default value of false
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
        {!hideTitle && (
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-3 flex items-center justify-between">
            <div className="font-bold">S10.AI Administrative Tools</div>
            <div className="flex space-x-3">
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
              <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        )}
        
        {/* Main interface */}
        <div className="flex h-[calc(100%-3rem)]">
          {/* Left sidebar - Interactive elements */}
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
              <FileText size={20} />
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
              <Mail size={20} />
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
              <DollarSign size={20} />
            </motion.div>
          </div>
          
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Prescription Refills Interface - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Prescription & Orders Management</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto space-y-3 
                    ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(0)}
                  onMouseEnter={() => isInteractive && onHover && onHover(0)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Prescription Refills</div>
                      <span className="text-xs bg-[#387E89]/10 text-[#143151] px-2 py-0.5 rounded-full">5 Pending</span>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2 flex items-center justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center">
                        <FileText size={16} className="text-[#387E89] mr-2" />
                        <div>
                          <div className="text-sm font-medium">Metformin 500mg</div>
                          <div className="text-xs text-gray-500">Patient: John Smith</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-[#143151] text-white text-xs rounded hover:bg-opacity-90">Approve</button>
                        <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">Review</button>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2 flex items-center justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center">
                        <FileText size={16} className="text-[#387E89] mr-2" />
                        <div>
                          <div className="text-sm font-medium">Lisinopril 10mg</div>
                          <div className="text-xs text-gray-500">Patient: Sarah Johnson</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-[#143151] text-white text-xs rounded hover:bg-opacity-90">Approve</button>
                        <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">Review</button>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Referral Letters</div>
                      <span className="text-xs bg-[#387E89]/10 text-[#143151] px-2 py-0.5 rounded-full">3 Pending</span>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2 flex items-center justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-center">
                        <ArrowRight size={16} className="text-[#387E89] mr-2" />
                        <div>
                          <div className="text-sm font-medium">Cardiology Consult</div>
                          <div className="text-xs text-gray-500">Patient: Maria Garcia</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-[#143151] text-white text-xs rounded hover:bg-opacity-90">Generate</button>
                        <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">Edit</button>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Lab Orders</div>
                      <span className="text-xs bg-[#387E89]/10 text-[#143151] px-2 py-0.5 rounded-full">7 Pending</span>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2 flex items-center justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex items-center">
                        <Calendar size={16} className="text-[#387E89] mr-2" />
                        <div>
                          <div className="text-sm font-medium">Comprehensive Metabolic Panel</div>
                          <div className="text-xs text-gray-500">Patient: Robert Williams</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-[#143151] text-white text-xs rounded hover:bg-opacity-90">Submit</button>
                        <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">Review</button>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Email Interface - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Patient Communications</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(1)}
                  onMouseEnter={() => isInteractive && onHover && onHover(1)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    className="flex justify-between items-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm font-medium text-[#143151]">Visit Summaries</div>
                    <button className="px-3 py-1 bg-[#143151] text-white text-xs rounded hover:bg-opacity-90 flex items-center">
                      <Mail size={12} className="mr-1" /> Send All
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Today's Visit Summaries</div>
                      <span className="text-xs bg-[#387E89]/10 text-[#143151] px-2 py-0.5 rounded-full">4 Ready</span>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FileText size={16} className="text-[#387E89] mr-2" />
                          <div>
                            <div className="text-sm font-medium">Annual Physical</div>
                            <div className="text-xs text-gray-500">Patient: Emily Davis</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs mr-2">Portal</span>
                          <div className="flex gap-2">
                            <button className="p-1 bg-[#143151] text-white rounded hover:bg-opacity-90">
                              <Mail size={14} />
                            </button>
                            <button className="p-1 border border-[#387E89]/50 text-[#143151] rounded">
                              <CheckCircle size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FileText size={16} className="text-[#387E89] mr-2" />
                          <div>
                            <div className="text-sm font-medium">Follow-up Appointment</div>
                            <div className="text-xs text-gray-500">Patient: Michael Brown</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs mr-2">Email</span>
                          <div className="flex gap-2">
                            <button className="p-1 bg-[#143151] text-white rounded hover:bg-opacity-90">
                              <Mail size={14} />
                            </button>
                            <button className="p-1 border border-[#387E89]/50 text-[#143151] rounded">
                              <CheckCircle size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Communication History</div>
                      <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">View All</button>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Mail size={16} className="text-green-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">Visit Summary Sent</div>
                            <div className="text-xs text-gray-500">Patient: James Wilson - 2 days ago</div>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Delivered</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Mail size={16} className="text-green-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">Lab Results Shared</div>
                            <div className="text-xs text-gray-500">Patient: Linda Martinez - 3 days ago</div>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Viewed</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Insurance & Billing Interface - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-[#143151] mb-2">Insurance & Billing</div>
                <div 
                  className={`flex-1 border border-[#387E89]/20 rounded-lg p-3 overflow-y-auto ${isInteractive ? 'cursor-pointer' : ''}`}
                  onClick={() => isInteractive && onElementClick && onElementClick(2)}
                  onMouseEnter={() => isInteractive && onHover && onHover(2)}
                  onMouseLeave={() => isInteractive && onHover && onHover(null)}
                >
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Insurance Verification</div>
                      <span className="text-xs bg-[#387E89]/10 text-[#143151] px-2 py-0.5 rounded-full">8 Pending</span>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-[#387E89] mr-2" />
                          <div>
                            <div className="text-sm font-medium">David Thompson</div>
                            <div className="text-xs text-gray-500">BlueCross #82738193</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">In Progress</span>
                          <button className="p-1 border border-[#387E89]/50 text-[#143151] rounded text-xs">View</button>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">Sandra Miller</div>
                            <div className="text-xs text-gray-500">Aetna #19283746</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Verified</span>
                          <button className="p-1 border border-[#387E89]/50 text-[#143151] rounded text-xs">View</button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Claims Processing</div>
                      <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">Generate Report</button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-2 text-xs text-center font-medium text-[#143151]">
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xl font-bold text-[#143151]">24</div>
                        Submitted
                      </div>
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xl font-bold text-amber-600">12</div>
                        In Process
                      </div>
                      <div className="p-2 bg-white rounded border border-[#387E89]/20">
                        <div className="text-xl font-bold text-green-600">42</div>
                        Paid
                      </div>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <Receipt size={16} className="text-[#387E89] mr-2" />
                          <div>
                            <div className="text-sm font-medium">Claim #39485</div>
                            <div className="text-xs text-gray-500">$245.00 - Jennifer Lee</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mr-2">Pending</span>
                          <button className="p-1 border border-[#387E89]/50 text-[#143151] rounded text-xs">Details</button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#143151]/5 p-3 rounded-lg border border-[#387E89]/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-[#143151]">Payment Tracking</div>
                      <button className="px-2 py-1 border border-[#387E89]/50 text-[#143151] text-xs rounded">View All</button>
                    </div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <DollarSign size={16} className="text-green-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">Insurance Payment</div>
                            <div className="text-xs text-gray-500">BlueCross - $1,245.00</div>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Received</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-2 rounded border border-[#387E89]/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <DollarSign size={16} className="text-amber-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">Patient Payment</div>
                            <div className="text-xs text-gray-500">Co-pay - $40.00</div>
                          </div>
                        </div>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Due</span>
                      </div>
                    </motion.div>
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
