
import React from 'react';
import { motion } from 'framer-motion';
import type { DemoStageIndicatorProps } from '../types/demo';
import { CheckCircle, MousePointerClick } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export const DemoStageIndicator: React.FC<DemoStageIndicatorProps> = ({ 
  currentStage, 
  totalStages, 
  onStageChange,
  isDemoSection = false
}) => {
  const isMobile = useIsMobile();
  
  // CRITICAL: Return null immediately if not in demo section
  if (!isDemoSection) {
    console.log("DemoStageIndicator not shown - not in demo section");
    return null;
  }
  
  console.log("DemoStageIndicator shown - IS in demo section");
  
  // Define stage labels for accessibility and tooltips
  const stageLabels = [
    "Patient Engagement",
    "AI Medical Scribe",
    "Admin Tasks",
    "Post-Visit Support"
  ];
  
  return (
    <div className={`
      ${isMobile ? 
        'fixed bottom-10 left-0 right-0 flex justify-center z-50' : 
        'fixed right-6 md:right-12 top-1/2 transform -translate-y-1/2 flex flex-col z-50'}
      gap-4 pointer-events-auto
    `}>
      <div className={`
        ${isMobile ? 
          'flex gap-3 bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/30' : 
          'bg-gradient-to-r from-[#143151]/95 to-[#387E89]/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/30 flex flex-col gap-4'}
      `}>
        {/* Interactive pulse animation to draw attention */}
        <motion.div
          className={`absolute ${isMobile ? '-top-10 left-1/2 -translate-x-1/2' : '-left-32 top-1/2 -translate-y-1/2'} 
            bg-white/90 text-[#143151] px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.7, 1, 0.7], 
            scale: [0.95, 1.05, 0.95],
            y: isMobile ? [0, -5, 0] : [0, 0, 0],
            x: isMobile ? [0, 0, 0] : [-5, 0, -5]
          }}
          transition={{ 
            repeat: 3, 
            duration: 2,
            delay: 1
          }}
        >
          <MousePointerClick size={isMobile ? 16 : 18} className="text-[#387E89]" />
          <span className="font-medium text-xs sm:text-sm">Click to navigate!</span>
        </motion.div>
        
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
                    onClick={() => {
                      console.log(`DemoStageIndicator - Stage clicked: ${index}`);
                      onStageChange(index);
                    }}
                    className="relative group"
                    aria-label={`Go to ${stageLabels[index]}`}
                  >
                    {/* Enhanced visual state for current/completed stages */}
                    <motion.div
                      className={`
                        h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center cursor-pointer
                        ${index === currentStage 
                          ? 'bg-white ring-4 ring-white/40 ring-offset-4 ring-offset-[#143151]/30' 
                          : index < currentStage 
                            ? 'bg-white/90' 
                            : 'bg-gray-300/80'}
                      `}
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: index === currentStage ? [1, 1.1, 1] : 1,
                        boxShadow: index === currentStage ? ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 10px rgba(255,255,255,0.2)", "0 0 0 0 rgba(255,255,255,0)"] : "none"
                      }}
                      transition={{ 
                        scale: {
                          duration: 2, 
                          repeat: index === currentStage ? Infinity : 0,
                          repeatType: "reverse"
                        },
                        boxShadow: {
                          duration: 2,
                          repeat: index === currentStage ? Infinity : 0,
                          repeatType: "reverse"
                        }
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {index < currentStage ? (
                        <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#143151]" />
                      ) : (
                        <div className="relative">
                          <span className={`font-bold text-base md:text-lg ${index === currentStage ? 'text-[#143151]' : 'text-[#143151]/70'}`}>
                            {index + 1}
                          </span>
                          {index === currentStage && (
                            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 bg-[#387E89] rounded-full animate-pulse border border-white"></span>
                          )}
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Large ring showing activity for current stage */}
                    {index === currentStage && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#387E89]/50"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                    )}
                    
                    {/* Show stage names directly next to indicators on mobile */}
                    {isMobile && (
                      <motion.div
                        className={`absolute top-10 whitespace-nowrap transform -translate-x-1/2 left-1/2 mt-1 ${
                          index === currentStage ? 'opacity-100' : 'opacity-0'
                        }`}
                        animate={{ opacity: index === currentStage ? 1 : 0 }}
                      >
                        <span className="text-xs font-medium text-white">{stageLabels[index]}</span>
                      </motion.div>
                    )}
                  </motion.button>
                </TooltipTrigger>
                
                {/* Enhanced tooltips that are always visible on desktop */}
                <TooltipContent 
                  side={isMobile ? "top" : "left"} 
                  className={`
                    ${!isMobile ? 'opacity-100 translate-x-0' : ''}
                    bg-white text-[#143151] border border-[#387E89]/40 shadow-lg px-3 py-2
                  `}
                  sideOffset={10}
                >
                  <span className="font-medium">{stageLabels[index]}</span>
                </TooltipContent>
              </Tooltip>
              
              {/* Persistent stage labels on desktop */}
              {!isMobile && (
                <motion.div 
                  className={`absolute -left-[180px] top-1/2 -translate-y-1/2 pointer-events-none ${
                    index === currentStage ? 'opacity-100' : 'opacity-0'
                  }`}
                  animate={{ 
                    opacity: index === currentStage ? 1 : 0,
                    x: index === currentStage ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white px-3 py-2 rounded-lg text-sm text-[#143151] whitespace-nowrap border border-[#387E89]/20 shadow-lg font-medium">
                    {stageLabels[index]}
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
