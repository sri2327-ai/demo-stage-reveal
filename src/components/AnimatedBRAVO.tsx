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
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* Main Animation */}
      <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col min-h-[400px] sm:min-h-[520px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#387E89] to-[#143151] p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">BRAVO AI Agent</h3>
                <p className="text-white/80 text-xs sm:text-sm">Front Office Automation</p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white/80 text-xs">Online</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col min-h-[280px] sm:min-h-[320px]">
          <AnimatePresence mode="wait">
            {renderCurrentScreen()}
          </AnimatePresence>
        </div>

        {/* Footer - Fixed positioning */}
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t mt-auto flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">24/7 Available</span>
                <span className="sm:hidden">24/7</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="hidden sm:inline">Auto-Scheduling</span>
                <span className="sm:hidden">Auto</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              Step {currentScreen + 1} of {screens.length}
            </div>
          </div>
        </div>
      </div>

      {/* Side Information Panel */}
      <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-[#143151] mb-4 sm:mb-6">Automates Anything You Need</h3>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Smart Automation</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Handles patient calls, scheduling, reminders, and follow-ups automatically</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Intelligent Scheduling</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Understands context and preferences to book optimal appointments</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg">Patient Communication</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Manages all patient interactions with natural, helpful responses</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <span className="font-bold text-blue-900 text-base sm:text-lg">Complete Feature Set</span>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-semibold text-green-900 text-sm sm:text-base">Multilingual Support</span>
              </div>
              <p className="text-green-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Communicates fluently in 60+ languages including:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">English</span>
                <span className="bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">Spanish</span>
                <span className="bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">Mandarin</span>
                <span className="bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">French</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">+56 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
