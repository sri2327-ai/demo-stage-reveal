
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, MessageCircle, Phone } from 'lucide-react';

export const AnimatedBRAVO = () => {
  return (
    <div className="relative w-24 h-24 mx-auto">
      {/* Main users icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-2xl flex items-center justify-center shadow-lg"
      >
        <Users className="w-12 h-12 text-white" />
      </motion.div>

      {/* Floating communication icons */}
      <motion.div
        animate={{ 
          x: [-10, 10, -10],
          y: [-5, 5, -5],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md"
      >
        <MessageCircle className="w-3 h-3 text-white" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [10, -10, 10],
          y: [5, -5, 5],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md"
      >
        <Phone className="w-3 h-3 text-white" />
      </motion.div>

      {/* Brain icon with pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
      >
        <Brain className="w-4 h-4 text-white" />
      </motion.div>

      {/* Connection lines animation */}
      <motion.div
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full" viewBox="0 0 96 96">
          <motion.path
            d="M20 40 Q48 20 76 40"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, 8] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#387E89] to-[#143151] rounded-2xl"
      />
    </div>
  );
};
