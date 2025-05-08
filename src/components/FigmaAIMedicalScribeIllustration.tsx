
import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, ClipboardList, Mic, Stethoscope, FileText } from 'lucide-react';
import { Progress } from './ui/progress';

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
        <div className="bg-blue-800 text-white px-4 py-3 flex items-center justify-between">
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
          <div className="w-1/6 bg-blue-900 border-r border-blue-800 flex flex-col items-center py-4 space-y-6">
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 0 ? 'bg-blue-500 text-white' : 'text-blue-200'}`}
              animate={{ scale: subStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <User size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 1 ? 'bg-blue-500 text-white' : 'text-blue-200'}`}
              animate={{ scale: subStep === 1 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 2 ? 'bg-blue-500 text-white' : 'text-blue-200'}`}
              animate={{ scale: subStep === 2 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <ClipboardList size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 3 ? 'bg-blue-500 text-white' : 'text-blue-200'}`}
              animate={{ scale: subStep === 3 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mic size={20} />
            </motion.div>
            <motion.div 
              className={`p-2 rounded-lg ${subStep === 4 ? 'bg-blue-500 text-white' : 'text-blue-200'}`}
              animate={{ scale: subStep === 4 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText size={20} />
            </motion.div>
          </div>
          
          {/* Main content area - changes based on subStep */}
          <div className="flex-1 p-4 overflow-hidden bg-gradient-to-br from-white to-blue-50">
            {/* Login Interface - Step 0 */}
            {subStep === 0 && (
              <div className="h-full flex flex-col items-center justify-center">
                <motion.div 
                  className="bg-white p-6 rounded-xl border border-blue-200 shadow-lg w-3/4 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-6">
                    <div className="font-bold text-blue-800 text-xl mb-1">S10.AI Medical Scribe</div>
                    <div className="text-blue-600 text-sm">Secure Clinical Documentation</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Username</label>
                      <motion.input 
                        type="text" 
                        className="w-full border border-blue-200 rounded-lg px-3 py-2" 
                        value="dr.smith@hospital.org"
                        animate={{ borderColor: ['#bfdbfe', '#3b82f6', '#bfdbfe'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Password</label>
                      <input type="password" className="w-full border border-blue-200 rounded-lg px-3 py-2" value="••••••••" readOnly />
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-500" checked readOnly />
                      <label className="text-sm text-blue-700 ml-2">Remember this device</label>
                    </div>
                    
                    <motion.button 
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
                      animate={{ 
                        backgroundColor: ['#2563eb', '#1d4ed8', '#2563eb'] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Sign In
                    </motion.button>
                    
                    <div className="mt-4 text-center text-sm text-blue-600">
                      <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            
            {/* Patient Schedule - Step 1 */}
            {subStep === 1 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Today's Patient Schedule</div>
                <div className="flex-1 overflow-y-auto space-y-3">
                  <motion.div 
                    className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium text-blue-800">8:30 AM - Jane Doe</div>
                      <div className="text-green-600 text-sm">Completed</div>
                    </div>
                    <div className="text-sm text-blue-600">Follow-up: Hypertension</div>
                    <div className="mt-1 text-xs text-blue-500">Note Status: Signed</div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium text-blue-800">9:45 AM - John Smith</div>
                      <div className="text-green-600 text-sm">Completed</div>
                    </div>
                    <div className="text-sm text-blue-600">Annual Physical</div>
                    <div className="mt-1 text-xs text-blue-500">Note Status: Signed</div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 bg-white rounded-lg border-2 border-blue-500 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
                    transition={{ delay: 0.3, scale: { repeat: Infinity, duration: 2 } }}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium text-blue-800">11:00 AM - Emily Johnson</div>
                      <div className="text-blue-600 text-sm font-medium">Current</div>
                    </div>
                    <div className="text-sm text-blue-600">Complaint: Headache x 3 days</div>
                    <div className="mt-2 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md">Start Encounter</button>
                      <button className="px-3 py-1 bg-white border border-blue-300 text-blue-700 text-xs rounded-md">View History</button>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium text-blue-800">1:30 PM - Robert Johnson</div>
                      <div className="text-blue-400 text-sm">Upcoming</div>
                    </div>
                    <div className="text-sm text-blue-600">Follow-up: Diabetes</div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium text-blue-800">2:45 PM - Sarah Miller</div>
                      <div className="text-blue-400 text-sm">Upcoming</div>
                    </div>
                    <div className="text-sm text-blue-600">New Patient: Anxiety</div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Templates Interface - Step 2 */}
            {subStep === 2 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Documentation Templates</div>
                <div className="flex-1 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <motion.div 
                      className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm hover:border-blue-500 cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
                    >
                      <div className="flex items-center mb-2">
                        <Stethoscope size={18} className="text-blue-600 mr-2" />
                        <div className="font-medium text-blue-800">Headache Assessment</div>
                      </div>
                      <div className="text-xs text-blue-600">
                        Comprehensive template for headache evaluation including pain scale, characteristics, triggers, and neurological exam.
                      </div>
                      <div className="mt-2 text-xs text-blue-500">Last used: 3 days ago</div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-3 bg-blue-50 rounded-lg border-2 border-blue-500 shadow-md cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
                      transition={{ delay: 0.2, scale: { repeat: Infinity, duration: 2 } }}
                    >
                      <div className="flex items-center mb-2">
                        <ClipboardList size={18} className="text-blue-600 mr-2" />
                        <div className="font-medium text-blue-800">General Exam (Custom)</div>
                      </div>
                      <div className="text-xs text-blue-600">
                        Your personalized general exam template with preferred ROS and exam components.
                      </div>
                      <div className="mt-2 text-xs text-blue-500">Default template</div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm hover:border-blue-500 cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
                    >
                      <div className="flex items-center mb-2">
                        <FileText size={18} className="text-blue-600 mr-2" />
                        <div className="font-medium text-blue-800">Follow-up Visit</div>
                      </div>
                      <div className="text-xs text-blue-600">
                        Standard follow-up template with condition progress, medication review, and plan updates.
                      </div>
                      <div className="mt-2 text-xs text-blue-500">Last used: 1 day ago</div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-3 bg-white rounded-lg border border-blue-200 shadow-sm hover:border-blue-500 cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
                    >
                      <div className="flex items-center mb-2">
                        <FileText size={18} className="text-blue-600 mr-2" />
                        <div className="font-medium text-blue-800">Annual Physical</div>
                      </div>
                      <div className="text-xs text-blue-600">
                        Comprehensive preventive care template with health maintenance, screenings, and age-appropriate assessments.
                      </div>
                      <div className="mt-2 text-xs text-blue-500">Last used: 2 hours ago</div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="font-medium text-blue-800 mb-1">Start with Selected Template</div>
                    <div className="text-sm text-blue-700">
                      The AI assistant will use your preferred template and build on it during the encounter to create a comprehensive note.
                    </div>
                    <div className="mt-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">Continue to Encounter</button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {/* Transcription Interface - Step 3 */}
            {subStep === 3 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Live Encounter - Emily Johnson</div>
                <div className="flex-1 overflow-y-auto flex gap-3">
                  <div className="w-1/2 flex flex-col">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-blue-800">Voice Recognition Active</div>
                        <motion.div 
                          className="flex items-center text-green-600 text-sm"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
                          Recording
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-3 bg-white rounded-lg border border-blue-200 overflow-y-auto">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="mb-3">
                          <div className="text-sm font-medium text-blue-700 mb-1">Dr. Smith:</div>
                          <div className="text-sm text-gray-700">Hello Emily, I understand you've been experiencing headaches. Can you tell me more about them?</div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="text-sm font-medium text-blue-700 mb-1">Patient:</div>
                          <div className="text-sm text-gray-700">Yes, I've had this headache for about three days now. It's mostly on the right side of my head and it's pretty constant.</div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="text-sm font-medium text-blue-700 mb-1">Dr. Smith:</div>
                          <div className="text-sm text-gray-700">On a scale of 1 to 10, how would you rate the pain?</div>
                        </div>
                        
                        <motion.div 
                          className="mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.0 }}
                        >
                          <div className="text-sm font-medium text-blue-700 mb-1">Patient:</div>
                          <div className="text-sm text-gray-700">I'd say it's about a 7 when it's at its worst, especially in the evenings. In the morning it's maybe a 4 or 5.</div>
                        </div>
                        
                        <motion.div 
                          className="mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                        >
                          <div className="text-sm font-medium text-blue-700 mb-1">Dr. Smith:</div>
                          <div className="text-sm text-gray-700">Have you experienced any sensitivity to light or sound with these headaches?</div>
                        </div>
                        
                        <motion.div 
                          className="mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.0 }}
                        >
                          <div className="text-sm font-medium text-blue-700 mb-1">Patient:</div>
                          <motion.div 
                            className="text-sm text-gray-700"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          >
                            Yes, light definitely makes it worse. I've been keeping the blinds closed at home.
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="w-1/2">
                    <motion.div 
                      className="h-full p-3 bg-white rounded-lg border border-blue-200 overflow-y-auto"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="font-medium text-blue-800 mb-2">Real-time Documentation</div>
                      
                      <div className="bg-blue-50 p-2 rounded text-xs text-blue-600 mb-3">
                        AI is generating documentation based on the conversation
                      </div>
                      
                      <div className="text-sm font-medium text-blue-700 mb-1">SUBJECTIVE:</div>
                      <motion.div 
                        className="text-sm text-gray-700 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Patient is a 34-year-old female presenting with complaints of headache for the past three days. She describes the pain as being located primarily on the right side of her head and constant in nature. On a pain scale of 1-10, she rates it as 7/10 at its worst in the evenings, and 4-5/10 in the mornings. Patient reports photophobia, stating that light worsens the headache, causing her to keep blinds closed at home.
                      </motion.div>
                      
                      <div className="text-sm font-medium text-blue-700 mb-1">ASSESSMENT:</div>
                      <motion.div 
                        className="text-sm text-gray-700 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: transcriptionActive ? 1 : 0 }}
                        transition={{ delay: transcriptionActive ? 1.0 : 0 }}
                      >
                        Patient presenting with symptoms consistent with migraine headache, characterized by:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Unilateral head pain</li>
                          <li>Moderate to severe intensity</li>
                          <li>Photophobia</li>
                          <li>Diurnal variation with evening worsening</li>
                        </ul>
                      </motion.div>
                      
                      <div className="text-sm font-medium text-blue-700 mb-1">PLAN:</div>
                      <motion.div 
                        className="text-sm text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: transcriptionActive ? 1 : 0 }}
                        transition={{ delay: transcriptionActive ? 1.5 : 0 }}
                      >
                        <div className="mb-1">1. Medication:</div>
                        <div className="pl-3 mb-2">- Consider sumatriptan 50mg for acute relief</div>
                        <div className="mb-1">2. Lifestyle modifications:</div>
                        <div className="pl-3 mb-2">- Maintain regular sleep schedule</div>
                        <div className="pl-3 mb-2">- Identify and avoid potential triggers</div>
                        <div className="mb-1">3. Follow-up in 2 weeks if symptoms persist</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Documentation Generation - Step 4 */}
            {subStep === 4 && (
              <div className="h-full flex flex-col">
                <div className="font-semibold text-blue-800 mb-2">Final Documentation</div>
                <div className="flex-1 overflow-y-auto flex gap-3">
                  <div className="w-2/3">
                    <motion.div 
                      className="h-full p-4 bg-white rounded-lg border border-blue-200 overflow-y-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="font-medium text-lg text-blue-800 mb-3">SOAP Note - Emily Johnson</div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium text-blue-700 mb-1 uppercase">Subjective:</div>
                        <div className="text-sm text-gray-700">
                          Emily Johnson is a 34-year-old female presenting with complaints of headache for the past three days. She describes the pain as being located primarily on the right side of her head and constant in nature. On a pain scale of 1-10, she rates it as 7/10 at its worst in the evenings, and 4-5/10 in the mornings. Patient reports photophobia, stating that light worsens the headache, causing her to keep blinds closed at home.
                          
                          <br /><br />
                          Patient denies nausea, vomiting, or aura. No previous history of migraines, though she reports having "tension headaches" occasionally during periods of stress. No recent trauma or injury. No changes in vision or neurological symptoms. No fever.
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium text-blue-700 mb-1 uppercase">Objective:</div>
                        <div className="text-sm text-gray-700">
                          <div className="mb-2">Vital Signs:</div>
                          <ul className="list-disc pl-5 mb-2">
                            <li>BP: 124/78 mmHg</li>
                            <li>HR: 72 bpm</li>
                            <li>Temp: 98.6°F</li>
                            <li>RR: 16</li>
                            <li>O2 Sat: 99% RA</li>
                          </ul>
                          
                          <div className="mb-2">Physical Examination:</div>
                          <ul className="list-disc pl-5">
                            <li>General: Patient is alert and oriented x3, in mild distress due to headache</li>
                            <li>HEENT: PERRL, EOMI, no papilledema, no sinus tenderness</li>
                            <li>Neck: Supple, no meningeal signs</li>
                            <li>Neurological: CN II-XII intact, no focal deficits, normal gait</li>
                          </ul>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: noteGeneration ? 1 : 0 }}
                        transition={{ delay: noteGeneration ? 0.5 : 0 }}
                      >
                        <div className="text-sm font-medium text-blue-700 mb-1 uppercase">Assessment:</div>
                        <div className="text-sm text-gray-700">
                          <ol className="list-decimal pl-5">
                            <li>Migraine headache without aura (G43.009)</li>
                            <li>Rule out tension-type headache</li>
                          </ol>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: noteGeneration ? 1 : 0 }}
                        transition={{ delay: noteGeneration ? 0.8 : 0 }}
                      >
                        <div className="text-sm font-medium text-blue-700 mb-1 uppercase">Plan:</div>
                        <div className="text-sm text-gray-700">
                          <ol className="list-decimal pl-5">
                            <li>
                              <span className="font-medium">Medications:</span>
                              <ul className="list-disc pl-5 mt-1 mb-2">
                                <li>Sumatriptan 50mg PO at onset of headache, may repeat after 2 hours if no relief, not to exceed 200mg in 24 hours</li>
                                <li>Naproxen sodium 550mg PO BID PRN for pain</li>
                              </ul>
                            </li>
                            
                            <li>
                              <span className="font-medium">Lifestyle modifications:</span>
                              <ul className="list-disc pl-5 mt-1 mb-2">
                                <li>Maintain regular sleep schedule</li>
                                <li>Keep headache diary to identify triggers</li>
                                <li>Stay hydrated and avoid known triggers (discussed)</li>
                              </ul>
                            </li>
                            
                            <li>
                              <span className="font-medium">Diagnostics:</span>
                              <ul className="list-disc pl-5 mt-1 mb-2">
                                <li>CBC, CMP</li>
                                <li>TSH</li>
                              </ul>
                            </li>
                            
                            <li>
                              <span className="font-medium">Follow-up:</span>
                              <ul className="list-disc pl-5 mt-1 mb-2">
                                <li>Return in 2 weeks to evaluate response to treatment</li>
                                <li>Call or use patient portal if symptoms worsen or change</li>
                                <li>Consider referral to neurology if no improvement with initial treatment</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="w-1/3">
                    <motion.div 
                      className="p-4 bg-white rounded-lg border border-blue-200 mb-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="font-medium text-blue-800 mb-2">Documentation Complete</div>
                      <div className="text-sm text-blue-700 mb-3">
                        AI-assisted note is ready for your review. The system identified all required elements for a Level 4 E/M code.
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-1.5 rounded text-sm font-medium">
                          Sign & Submit Note
                        </button>
                        <button className="w-full bg-white border border-blue-300 text-blue-700 py-1.5 rounded text-sm font-medium">
                          Edit Note
                        </button>
                        <button className="w-full bg-white border border-blue-300 text-blue-700 py-1.5 rounded text-sm font-medium">
                          Add Addendum
                        </button>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="font-medium text-blue-800 mb-2">E/M Documentation Analysis</div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm text-blue-700 mb-1">
                            <span>History</span>
                            <span>Comprehensive</span>
                          </div>
                          <Progress value={100} className="h-2 bg-blue-100" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-blue-700 mb-1">
                            <span>Examination</span>
                            <span>Detailed</span>
                          </div>
                          <Progress value={75} className="h-2 bg-blue-100" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-blue-700 mb-1">
                            <span>MDM</span>
                            <span>Moderate</span>
                          </div>
                          <Progress value={75} className="h-2 bg-blue-100" />
                        </div>
                        
                        <div className="pt-2 border-t border-blue-200 mt-2">
                          <div className="font-medium text-blue-800">Suggested E/M Code:</div>
                          <div className="text-blue-700">99214 - Office Visit, Established Patient</div>
                          <div className="text-xs text-blue-600 mt-1">All required elements documented</div>
                        </div>
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
