
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { DemoStageContentProps } from '../types/demo';

export const DemoStageContent: React.FC<DemoStageContentProps> = ({ stage, isActive, index }) => {
  return (
    <motion.div 
      className={`absolute inset-0 flex items-center justify-center p-4 pointer-events-none ${
        index % 2 === 0 ? 'md:items-start md:pt-32' : 'md:items-end md:pb-32'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 max-w-md border border-blue-300 shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          y: isActive ? 0 : 20, 
          scale: isActive ? 1 : 0.95 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"
        />
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-3 text-blue-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stage.title}
        </motion.h2>
        
        <motion.p 
          className="text-gray-800 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stage.description}
        </motion.p>
        
        {stage.highlights && stage.highlights.length > 0 && (
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stage.highlights.map((highlight, i) => (
              <motion.li 
                key={i} 
                className="flex items-center text-sm text-blue-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: isActive ? 1 : 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: 0.5 + (i * 0.1) 
                  }}
                >
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                </motion.div>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </motion.div>
  );
};
