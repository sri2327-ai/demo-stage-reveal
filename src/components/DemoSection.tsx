
import React from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick } from 'lucide-react';

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
  
  return (
    <div className="px-2 sm:px-4 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-8">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151] mb-2 sm:mb-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            How S10.AI Transforms Your Clinical Workflow
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how S10.AI's CRUSH and BRAVO, powered by AI, streamline key clinical workflows in an interactive demo.
          </motion.p>
          
          {/* Enhanced interactive instruction with clearer call to action */}
          <motion.div
            className="flex items-center justify-center mt-3 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#387E89]/20 border-2 border-[#387E89]/40 rounded-full text-[#143151] shadow-md">
              <MousePointerClick size={isMobile ? 16 : 20} className="text-[#387E89] animate-pulse" />
              <span className="text-sm sm:text-base font-medium">
                {isMobile ? "Tap icons to explore features" : "This demo is fully interactive! Click icons to explore features"}
              </span>
            </div>
          </motion.div>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center w-full">
            <div className="w-full overflow-hidden">
              <DemoStage 
                stages={stages} 
                autoPlay={hasScrolledToDemo} 
                isDemoSection={currentSection === 'demo'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
