
import React from 'react';
import { motion } from 'framer-motion';
import type { DemoStageIndicatorProps } from '../types/demo';
import { CheckCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export const DemoStageIndicator: React.FC<DemoStageIndicatorProps> = ({ 
  currentStage, 
  totalStages, 
  onStageChange,
  isDemoSection = false
}) => {
  const isMobile = useIsMobile();
  
  // Don't render if not in demo section and isDemoSection is specified
  if (isDemoSection === false) {
    return null;
  }
  
  return (
    <div className={`${isMobile ? 'fixed bottom-16 left-0 right-0 flex justify-center' : 'fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col'} gap-4 z-40`}>
      <div className={`${isMobile ? 'flex gap-3 bg-gradient-to-r from-[#143151]/80 to-[#387E89]/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-[#387E89]/20' : 'bg-gradient-to-r from-[#143151]/90 to-[#387E89]/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20 flex flex-col gap-4'}`}>
        <TooltipProvider>
          {Array.from({ length: totalStages }).map((_, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0.5, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={() => onStageChange(index)}
                    className="relative"
                    aria-label={`Go to stage ${index + 1}`}
                  >
                    <motion.div
                      className={`h-6 w-6 md:h-8 md:w-8 rounded-full ${
                        index === currentStage 
                          ? 'bg-white ring-2 ring-white/30 ring-offset-2 ring-offset-[#143151]/50' 
                          : index < currentStage 
                            ? 'bg-white/80' 
                            : 'bg-gray-300'
                      } flex items-center justify-center cursor-pointer`}
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: index === currentStage ? [1, 1.2, 1] : 1
                      }}
                      transition={{ 
                        scale: {
                          duration: 1.5, 
                          repeat: index === currentStage ? Infinity : 0,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      {index < currentStage ? (
                        <CheckCircle className="h-4 w-4 text-[#143151]" />
                      ) : (
                        <span className={`font-bold text-xs md:text-sm ${index === currentStage ? 'text-[#143151]' : 'text-[#143151]/70'}`}>
                          {index + 1}
                        </span>
                      )}
                    </motion.div>
                    
                    {index === currentStage && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/50"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.8, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      />
                    )}
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side={isMobile ? "top" : "left"} className="bg-white text-[#143151] border border-[#387E89]/20">
                  {index === 0 && "Patient Engagement"}
                  {index === 1 && "AI Medical Scribe"}
                  {index === 2 && "Admin Tasks"}
                  {index === 3 && "Post-Visit Support"}
                </TooltipContent>
              </Tooltip>
              
              {!isMobile && (
                <motion.div 
                  className="absolute -left-[220px] top-1/2 -translate-y-1/2 pointer-events-none"
                  animate={{ 
                    opacity: index === currentStage ? 1 : 0,
                    x: index === currentStage ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white px-4 py-2 rounded-lg text-sm text-[#143151] whitespace-nowrap border border-[#387E89]/20 shadow-lg font-medium">
                    {index === 0 && "Patient Engagement"}
                    {index === 1 && "AI Medical Scribe"}
                    {index === 2 && "Admin Tasks"}
                    {index === 3 && "Post-Visit Support"}
                  </div>
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-white border-r border-t border-[#387E89]/20"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};
