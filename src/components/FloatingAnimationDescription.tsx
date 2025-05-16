
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
  
  // Get color scheme based on current stage - updated with very subtle pink tones
  const getStageColorScheme = () => {
    switch(currentStage) {
      case 0: // Patient Engagement
        return {
          gradient: 'from-pink-200/70 to-pink-100/70',
          highlight: 'bg-pink-100',
          shadow: 'shadow-[0_0_6px_rgba(252,231,243,0.4)]',
          iconBg: 'bg-pink-200/20',
          activeDot: 'bg-pink-50 shadow-[0_0_8px_rgba(252,231,243,0.5)]'
        };
      case 1: // AI Medical Scribe
        return {
          gradient: 'from-pink-300/60 to-pink-100/60',
          highlight: 'bg-pink-200',
          shadow: 'shadow-[0_0_6px_rgba(249,168,212,0.3)]',
          iconBg: 'bg-pink-200/15',
          activeDot: 'bg-pink-50 shadow-[0_0_8px_rgba(252,231,243,0.5)]'
        };
      case 2: // Admin Tasks
        return {
          gradient: 'from-pink-200/70 to-rose-50/70',
          highlight: 'bg-pink-100',
          shadow: 'shadow-[0_0_6px_rgba(254,205,211,0.4)]',
          iconBg: 'bg-pink-200/20',
          activeDot: 'bg-pink-50 shadow-[0_0_8px_rgba(252,231,243,0.5)]'
        };
      case 3: // Post-Visit Support
        return {
          gradient: 'from-rose-200/60 to-pink-100/60',
          highlight: 'bg-pink-100',
          shadow: 'shadow-[0_0_6px_rgba(254,205,211,0.3)]',
          iconBg: 'bg-pink-200/15',
          activeDot: 'bg-pink-50 shadow-[0_0_8px_rgba(252,231,243,0.5)]'
        };
      default:
        return {
          gradient: 'from-slate-200/70 to-slate-100/70',
          highlight: 'bg-slate-200',
          shadow: 'shadow-[0_0_6px_rgba(241,245,249,0.5)]',
          iconBg: 'bg-slate-200/20',
          activeDot: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]'
        };
    }
  };

  const colors = getStageColorScheme();
  
  // Get themed icon based on stage and subStep
  const getThemedIcon = () => {
    // Select icon based on stage and subStep
    switch(currentStage) {
      case 0: // Patient Engagement
        return <MessageSquare size={isMobile ? 16 : 18} className="text-pink-800/70" />;
      case 1: // AI Medical Scribe
        return <Clock size={isMobile ? 16 : 18} className="text-pink-700/70" />;
      case 2: // Admin Tasks
        return <ShieldCheck size={isMobile ? 16 : 18} className="text-pink-800/70" />;
      case 3: // Post-Visit Support
        return <Shield size={isMobile ? 16 : 18} className="text-pink-700/70" />;
      default:
        return <Info size={isMobile ? 16 : 18} className="text-slate-700" />;
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
            className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm text-slate-800 
                      px-4 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 rounded-xl border border-pink-200/10 
                      shadow-lg flex flex-col justify-between ${isCollapsed ? 'rounded-b-none' : ''}`}
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
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 drop-shadow-sm">
                  {labelTitles[subStep]}
                </h3>
              </div>
              
              <CollapsibleTrigger asChild>
                <button 
                  className="rounded-full p-2 hover:bg-pink-200/20 transition-colors" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Expand description" : "Collapse description"}
                >
                  {isCollapsed ? (
                    <ChevronDown size={20} className="text-slate-700" />
                  ) : (
                    <ChevronUp size={20} className="text-slate-700" />
                  )}
                </button>
              </CollapsibleTrigger>
            </div>
            
            {/* Content */}
            <CollapsibleContent className="overflow-hidden">
              {/* Description text */}
              <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mt-2 mb-4 font-medium">
                {labels[subStep]}
              </div>
              
              {/* Step indicator dots with improved spacing and size */}
              <div className="mt-5 flex items-center gap-4 justify-center">
                {Array.from({ length: maxSteps }).map((_, step) => (
                  <motion.button
                    key={step}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 flex items-center justify-center ${
                      subStep === step 
                        ? `${colors.activeDot}` 
                        : 'bg-slate-400/30 hover:bg-slate-400/40'
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
                        className={`w-1.5 h-1.5 rounded-full ${colors.highlight} ${colors.shadow}`}
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
