import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  User, 
  Clock, 
  CheckCircle,
  Bell,
  Mail,
  ArrowRight,
  Users,
  Zap,
  Globe,
  Languages
} from 'lucide-react';

export const AnimatedBRAVO = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [reminderSent, setReminderSent] = useState(false);

  const screens = [
    'incoming-call',
    'patient-request',
    'scheduling',
    'confirmation',
    'reminder'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => {
        const next = (prev + 1) % screens.length;
        
        // Reset states when cycling
        if (next === 0) {
          setAppointmentBooked(false);
          setReminderSent(false);
        }
        
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const PatientCallScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="h-full flex flex-col"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
        >
          <Phone className="w-10 h-10 text-green-600" />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Incoming Patient Call</h3>
        <p className="text-gray-600 text-center text-sm">Sarah Johnson calling about appointment</p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-2 rounded-full text-sm hover:bg-green-600 transition-colors"
          >
            Accept Call
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );

  const PatientRequestScreen = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full"
    >
      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
            <p className="text-sm text-gray-600">Patient ID: #12345</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded p-3"
        >
          <p className="text-sm text-gray-700 italic">
            "Hi, I'd like to schedule a follow-up appointment for next week. I'm flexible with timing."
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-green-50 border border-green-200 rounded-lg p-3"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">AI Understanding</span>
        </div>
        <ul className="text-xs text-green-700 space-y-1">
          <li>• Appointment type: Follow-up</li>
          <li>• Timeframe: Next week</li>
          <li>• Flexibility: High</li>
        </ul>
      </motion.div>
    </motion.div>
  );

  const SchedulingScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full"
    >
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h4 className="font-semibold text-gray-800">Available Appointments</h4>
      </div>

      <div className="space-y-3">
        {[
          { date: "Mon, Dec 16", time: "10:30 AM", available: true },
          { date: "Tue, Dec 17", time: "2:15 PM", available: true, selected: true },
          { date: "Wed, Dec 18", time: "9:00 AM", available: false }
        ].map((slot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg border ${
              slot.selected 
                ? 'bg-blue-100 border-blue-300' 
                : slot.available 
                  ? 'bg-white border-gray-200 hover:border-gray-300' 
                  : 'bg-gray-50 border-gray-200 opacity-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{slot.date}</p>
                <p className="text-sm text-gray-600">{slot.time}</p>
              </div>
              {slot.selected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
              )}
              {!slot.available && (
                <span className="text-xs text-gray-500">Booked</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setAppointmentBooked(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
        >
          Confirm Appointment
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const ConfirmationScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="h-full flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
      >
        <CheckCircle className="w-8 h-8 text-green-600" />
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Appointment Confirmed!</h3>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-600 mb-1">Tuesday, December 17</p>
        <p className="font-medium text-gray-800">2:15 PM - Follow-up</p>
        <p className="text-sm text-gray-600 mt-1">Dr. Smith • Room 204</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 text-xs text-gray-500"
      >
        <Mail className="w-3 h-3" />
        <span>Confirmation sent via SMS & Email</span>
      </motion.div>
    </motion.div>
  );

  const ReminderScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-orange-600" />
        <h4 className="font-semibold text-gray-800">Automated Reminders</h4>
      </div>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-orange-50 border border-orange-200 rounded-lg p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-orange-800">24hr Reminder</span>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-xs text-orange-700">SMS sent to Sarah Johnson</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800">2hr Reminder</span>
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-xs text-blue-700">Scheduled for 12:15 PM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-green-50 border border-green-200 rounded-lg p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800">Check-in Ready</span>
            <ArrowRight className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-xs text-green-700">Digital forms pre-filled</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border"
      >
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">Impact</span>
        </div>
        <p className="text-xs text-gray-600">35% reduction in no-shows</p>
      </motion.div>
    </motion.div>
  );

  const renderCurrentScreen = () => {
    switch (screens[currentScreen]) {
      case 'incoming-call':
        return <PatientCallScreen />;
      case 'patient-request':
        return <PatientRequestScreen />;
      case 'scheduling':
        return <SchedulingScreen />;
      case 'confirmation':
        return <ConfirmationScreen />;
      case 'reminder':
        return <ReminderScreen />;
      default:
        return <PatientCallScreen />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4">
      {/* Main Animation */}
      <div className="w-full lg:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col min-h-[500px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#387E89] to-[#143151] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">BRAVO AI Agent</h3>
                <p className="text-white/80 text-sm">Front Office Automation</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white/80 text-xs">Online</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col min-h-[320px]">
          <AnimatePresence mode="wait">
            {renderCurrentScreen()}
          </AnimatePresence>
        </div>

        {/* Footer - Fixed positioning */}
        <div className="bg-gray-50 px-6 py-2 border-t mt-auto flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Auto-Scheduling</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              Step {currentScreen + 1} of {screens.length}
            </div>
          </div>
        </div>
      </div>

      {/* Side Information Panel */}
      <div className="w-full lg:w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-[#143151] mb-4">Automates Anything You Need</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Smart Automation</h4>
              <p className="text-sm text-gray-600">Handles patient calls, scheduling, reminders, and follow-ups automatically</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Calendar className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Intelligent Scheduling</h4>
              <p className="text-sm text-gray-600">Understands context and preferences to book optimal appointments</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MessageSquare className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Patient Communication</h4>
              <p className="text-sm text-gray-600">Manages all patient interactions with natural, helpful responses</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-900 text-sm">Complete Feature Set</span>
            </div>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• 24/7 AI-Powered Patient Interaction</li>
              <li>• AI Chat & Phone Agents automate multilingual patient interactions with 24/7 availability</li>
              <li>• Seamless Scheduling</li>
              <li>• AI-driven booking, rescheduling & reminders that never miss an inquiry</li>
              <li>• Help Reduce No-Shows & Boost Revenue</li>
              <li>• Smart reminders, follow-ups, and automated workflows minimize cancellations</li>
              <li>• Revenue Protection</li>
              <li>• Aims to reduce denials through improved data capture and RCM support</li>
              <li>• Overcome Staffing Shortages</li>
              <li>• AI task assignment with smart delegation to the right person or system</li>
              <li>• Seamless Integration</li>
              <li>• Connects with many common EHR, CRM, and PMS systems</li>
              <li>• Smarter Referrals</li>
              <li>• Automates aspects of triage & care coordination under clinical guidance</li>
              <li className="font-medium text-green-800">• Multilingual Support (60+ Languages)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
