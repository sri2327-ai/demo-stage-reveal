
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick, Play, Info, Stethoscope } from 'lucide-react';
import { clinicalAnimations } from '../lib/animation-utils';

interface DemoSectionProps {
  isInViewport: boolean;
  hasScrolledToDemo: boolean;
  stages: DemoStageType[];
  currentSection: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ 
  isInViewport, 
  hasScrolledToDemo,
  stages,
  currentSection
}) => {
  const isMobile = useIsMobile();
  
  // Debug current section to ensure it's being passed correctly
  useEffect(() => {
    console.log("DemoSection - currentSection:", currentSection);
    console.log("DemoSection - isDemoSection value:", currentSection === 'demo');
  }, [currentSection]);
  
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <motion.div 
            className="flex items-center justify-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-[#143151]/10 px-3 py-1 rounded-full flex items-center gap-2">
              <Stethoscope size={18} className="text-[#143151]" />
              <span className="text-sm font-medium text-[#143151]">Clinical Workflow Solutions</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4 md:mb-5 px-1 sm:px-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            How S10.AI Transforms Your Clinical Workflow
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-semibold text-[#387E89]">S10.AI's CRUSH</span> is our flagship AI medical scribe that integrates with your existing clinical tools, while our <span className="font-medium">AI agents</span> streamline administrative tasks and enhance patient engagement.
          </motion.p>
          
          {/* Enhanced interactive instruction with clearer clinical context */}
          <motion.div
            className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#387E89]/10 border border-[#387E89]/30 rounded-full text-[#143151] shadow-sm"
              {...clinicalAnimations.clinicalPulse}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                delay: 1
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {isMobile ? (
                  <Play size={20} className="text-[#387E89] flex-shrink-0" />
                ) : (
                  <MousePointerClick size={22} className="text-[#387E89] flex-shrink-0" />
                )}
              </motion.div>
              
              <span className="text-xs sm:text-sm md:text-base font-medium truncate max-w-[180px] sm:max-w-[280px]">
                {isMobile 
                  ? "Tap tabs to explore workflows" 
                  : "Click through to explore clinical workflows"}
              </span>
              
              <motion.div 
                className="hidden sm:flex gap-1.5 items-center text-xs md:text-sm text-[#143151]/80 ml-0.5 pl-2 border-l border-[#387E89]/20"
                whileHover={{ scale: 1.05 }}
              >
                <Info size={16} className="text-[#387E89] flex-shrink-0" />
                <span className="whitespace-nowrap">Interactive demo</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center w-full">
            <div className="w-full overflow-hidden rounded-xl border border-[#387E89]/15 shadow-lg">
              <DemoStage 
                stages={stages} 
                autoPlay={hasScrolledToDemo} 
                isDemoSection={currentSection === 'demo'} 
                autoPlayInterval={8000}
              />
            </div>
          </div>
        )}

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInViewport ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xs text-gray-500 italic">
            Note: Only CRUSH AI Medical Scribe is an S10.AI product. Other AI agents integrate with your existing clinical systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
