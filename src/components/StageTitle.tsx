
import React from 'react';
import { motion } from 'framer-motion';
import { getStageTitleByIndex } from '../lib/utils';

interface StageTitleProps {
  currentStage: number;
  stageDescription?: string;
}

export const StageTitle: React.FC<StageTitleProps> = ({ 
  currentStage,
  stageDescription
}) => {
  // Get the title based on the stage index
  const title = getStageTitleByIndex(currentStage);
  
  // Descriptions for each stage
  const descriptions = [
    "Enhance patient experience with AI-powered communication and scheduling",
    "Reduce documentation time by 75% with AI-powered medical scribe that integrates with your EHR",
    "Streamline admin workflows and reduce errors with automated clinical tasks",
    "Improve patient outcomes with intelligent post-visit care coordination"
  ];
  
  // Use provided description or get from our predefined list
  const description = stageDescription || descriptions[currentStage];

  return (
    <motion.div 
      className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-3 sm:px-6 sm:py-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-1">
        AI Clinical Workflows Demo
      </h2>
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-1 mt-1">
          {["Patient Engagement", "AI Medical Scribe", "Clinical Admin", "Post-Visit Care"].map((stage, idx) => (
            <div 
              key={idx} 
              className={`flex items-center ${currentStage === idx ? "opacity-100" : "opacity-50"}`}
            >
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm 
                ${currentStage === idx ? "bg-white text-[#143151]" : "bg-white/30 text-white"}`}
              >
                {idx + 1}
              </div>
              <span className={`ml-1 text-sm sm:text-base whitespace-nowrap ${currentStage === idx ? "font-medium" : ""}`}>
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-sm sm:text-base text-white/90 max-w-3xl">
        {description}
      </p>
    </motion.div>
  );
};
