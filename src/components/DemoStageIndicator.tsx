
import React from 'react';
import { motion } from 'framer-motion';
import type { DemoStageIndicatorProps } from '../types/demo';

export const DemoStageIndicator: React.FC<DemoStageIndicatorProps> = ({ 
  currentStage, 
  totalStages, 
  onStageChange 
}) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 my-6">
      {Array.from({ length: totalStages }).map((_, index) => {
        const isActive = currentStage === index;
        return (
          <motion.button
            key={index}
            onClick={() => onStageChange(index)}
            className={`relative h-3 rounded-full transition-all duration-300 ${
              isActive ? 'w-10 bg-blue-600' : 'w-3 bg-blue-300 hover:bg-blue-400'
            }`}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-label={`Go to stage ${index + 1}`}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500 opacity-50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
