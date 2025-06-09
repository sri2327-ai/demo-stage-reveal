
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoStage } from './DemoStage';
import type { DemoStage as DemoStageType } from '../types/demo';
import { useIsMobile } from '../hooks/use-mobile';
import { MousePointerClick, Play, Info } from 'lucide-react';
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
  
  useEffect(() => {
    console.log("DemoSection - currentSection:", currentSection);
    console.log("DemoSection - isDemoSection value:", currentSection === 'demo');
  }, [currentSection]);
  
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            How S10.AI Transforms Your Clinical Workflow
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-3 sm:px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how S10.AI's CRUSH and BRAVO streamline your clinical workflow, reduce documentation time by 75%, and improve patient engagement.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#387E89]/10 border border-[#387E89]/30 rounded-full text-[#143151] shadow-sm"
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
                  <Play size={16} className="text-[#387E89] flex-shrink-0" />
                ) : (
                  <MousePointerClick size={18} className="text-[#387E89] flex-shrink-0" />
                )}
              </motion.div>
              
              <span className="text-xs sm:text-sm font-medium max-w-[140px] sm:max-w-[200px] truncate">
                {isMobile 
                  ? "Tap to explore" 
                  : "Click tabs to navigate"}
              </span>
              
              <motion.div 
                className="hidden sm:flex gap-1 items-center text-xs text-[#143151]/80 ml-1 pl-2 border-l border-[#387E89]/20"
                whileHover={{ scale: 1.05 }}
              >
                <Info size={12} className="text-[#387E89] flex-shrink-0" />
                <span className="whitespace-nowrap text-xs">Interactive demo</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {isInViewport && (
          <div className="flex justify-center w-full">
            <div className="w-full overflow-hidden">
              <DemoStage 
                stages={stages} 
                autoPlay={hasScrolledToDemo} 
                isDemoSection={true}
                autoPlayInterval={8000}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
