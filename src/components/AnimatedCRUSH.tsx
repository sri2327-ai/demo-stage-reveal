
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';

export const AnimatedCRUSH = () => {
  return (
    <div className="relative w-24 h-24 mx-auto">
      {/* Main document icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl flex items-center justify-center shadow-lg"
      >
        <FileText className="w-12 h-12 text-white" />
      </motion.div>

      {/* Animated writing lines */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-4 left-4 h-0.5 bg-white/40 rounded"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '80%' }}
        transition={{ delay: 0.7, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-6 left-4 h-0.5 bg-white/40 rounded"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '45%' }}
        transition={{ delay: 0.9, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-8 left-4 h-0.5 bg-white/40 rounded"
      />

      {/* Floating sparkles */}
      <motion.div
        animate={{ 
          y: [-5, -15, -5],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl"
      />
    </div>
  );
};
