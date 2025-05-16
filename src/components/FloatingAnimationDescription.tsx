
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronDown, ChevronUp, Shield, ShieldCheck, MessageSquare, Clock } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface FloatingAnimationDescriptionProps {
  currentStage: number;
  subStep: number;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
  maxSteps: number;
  onElementClick: (step: number) => void;
}

export const FloatingAnimationDescription: React.FC<FloatingAnimationDescriptionProps> = ({
  currentStage,
  subStep,
  labels,
  labelTitles,
  maxSteps,
  onElementClick
}) => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Get color scheme based on current stage
  const getStageColorScheme = () => {
    switch(currentStage) {
      case 0: // Patient Engagement
        return {
          gradient: 'from-blue-800/90 to-sky-600/90',
          highlight: 'bg-blue-400',
          shadow: 'shadow-[0_0_8px_rgba(96,165,250,0.7)]',
          iconBg: 'bg-blue-500/30',
          activeDot: 'bg-sky-200 shadow-[0_0_10px_rgba(186,230,253,0.8)]'
        };
      case 1: // AI Medical Scribe
        return {
          gradient: 'from-purple-800/90 to-indigo-600/90',
          highlight: 'bg-purple-400',
          shadow: 'shadow-[0_0_8px_rgba(168,85,247,0.7)]',
          iconBg: 'bg-purple-500/30',
          activeDot: 'bg-indigo-100 shadow-[0_0_10px_rgba(199,210,254,0.8)]'
        };
      case 2: // Admin Tasks
        return {
          gradient: 'from-emerald-800/90 to-teal-600/90',
          highlight: 'bg-emerald-400',
          shadow: 'shadow-[0_0_8px_rgba(52,211,153,0.7)]',
          iconBg: 'bg-emerald-500/30',
          activeDot: 'bg-teal-100 shadow-[0_0_10px_rgba(204,251,241,0.8)]'
        };
      case 3: // Post-Visit Support
        return {
          gradient: 'from-rose-800/90 to-orange-600/90',
          highlight: 'bg-rose-400',
          shadow: 'shadow-[0_0_8px_rgba(251,113,133,0.7)]',
          iconBg: 'bg-rose-500/30',
          activeDot: 'bg-orange-100 shadow-[0_0_10px_rgba(255,237,213,0.8)]'
        };
      default:
        return {
          gradient: 'from-gray-800/90 to-slate-600/90',
          highlight: 'bg-gray-400',
          shadow: 'shadow-[0_0_8px_rgba(156,163,175,0.7)]',
          iconBg: 'bg-gray-500/30',
          activeDot: 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
        };
    }
  };

  const colors = getStageColorScheme();
  
  // Get themed icon based on stage and subStep
  const getThemedIcon = () => {
    // Select icon based on stage and subStep
    switch(currentStage) {
      case 0: // Patient Engagement
        return <MessageSquare size={isMobile ? 16 : 18} className="text-blue-100" />;
      case 1: // AI Medical Scribe
        return <Clock size={isMobile ? 16 : 18} className="text-indigo-100" />;
      case 2: // Admin Tasks
        return <ShieldCheck size={isMobile ? 16 : 18} className="text-emerald-100" />;
      case 3: // Post-Visit Support
        return <Shield size={isMobile ? 16 : 18} className="text-orange-100" />;
      default:
        return <Info size={isMobile ? 16 : 18} className="text-white" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`floating-description-${currentStage}-${subStep}`}
        className="w-full rounded-xl overflow-hidden"
        initial={clinicalAnimations.cardAppear.initial}
        animate={clinicalAnimations.cardAppear.animate}
        exit={clinicalAnimations.cardAppear.exit}
        transition={{ duration: accessibilityHelpers.getDuration(0.3) }}
      >
        <Collapsible
          open={!isCollapsed}
          onOpenChange={() => setIsCollapsed(!isCollapsed)}
          className="w-full"
        >
          <motion.div 
            className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-xl text-white 
                      px-4 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl border border-white/25 
                      shadow-2xl flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
          >
            {/* Collapse toggle and title row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${colors.iconBg}`}
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  <motion.div className="flex items-center justify-center">
                    {getThemedIcon()}
                  </motion.div>
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-white drop-shadow-sm">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-2 hover:bg-white/30 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={20} className="text-white" />
                  ) : (
                    <ChevronUp size={20} className="text-white" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent className="overflow-hidden">
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-white leading-relaxed mt-2 mb-4 font-medium">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-5 flex items-center gap-4 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-4 h-4 rounded-full transition-colors duration-300 flex items-center justify-center ${
                      subStep === step 
                        ? `${colors.activeDot}` 
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onElementClick(step);
                    }}
                    aria-label={`Go to ${labelTitles[step]} step (${step + 1} of ${maxSteps})`}
                    title={labelTitles[step]}
                  >
                    {subStep === step && (
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${colors.highlight} ${colors.shadow}`}
                        animate={{ 
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </CollapsibleContent>
          </motion.div>
        </Collapsible>
      </motion.div>
    </AnimatePresence>
  );
};
