
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { clinicalAnimations, accessibilityHelpers } from '../lib/animation-utils';
import { clinicalColorThemes } from '../lib/color-themes';

interface FigmaAIMedicalScribeInteractiveProps {
  subStep: number;
  transcriptionActive: boolean;
  noteGeneration: boolean;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

export const FigmaAIMedicalScribeInteractive: React.FC<FigmaAIMedicalScribeInteractiveProps> = ({
  subStep,
  transcriptionActive,
  noteGeneration,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only hide title on mobile, or if explicitly needed for a specific layout
  const shouldHideTitle = isMobile ? hideTitle : false;
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 6);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 6) % 6);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '6') {
        // Number keys 1-6 for direct navigation
        onElementClick(parseInt(e.key) - 1);
        e.preventDefault();
      }
    };
    
    if (isInteractive) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInteractive, onElementClick, subStep]);

  // Handle click on specific UI elements (icons) with improved validation
  const handleIconClick = (step: number, e?: React.MouseEvent) => {
    // Ensure we have an event object and stop propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log("MedicalScribe - Icon clicked for step:", step);
    if (onElementClick && step >= 0 && step < 6) { // Ensure step is valid
      // Track interaction time and navigate
      setLastInteraction(Date.now());
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area with better feedback
  const handleIllustrationClick = (e: React.MouseEvent) => {
    // Don't handle if the click was on a child element that should handle its own clicks
    if ((e.target as HTMLElement).closest('[data-clickable="true"]')) {
      return;
    }
    
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 6;
      console.log("MedicalScribe - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };
  
  // Get theme colors for AI Medical Scribe
  const colorTheme = clinicalColorThemes.aiMedicalScribe;
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full max-w-6xl mx-auto h-full ${colorTheme.background} rounded-xl ${colorTheme.border} ${colorTheme.shadow} p-3`}
      role="region" 
      aria-label="AI Medical Scribe Interactive Demo"
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="relative h-full flex flex-col items-center justify-center py-4"> 
            <div 
              className={`relative w-full h-full flex-1 flex items-center justify-center cursor-pointer ${colorTheme.highlight} rounded-lg`}
              onClick={handleIllustrationClick}
              role="button"
              aria-label="Navigate to next feature"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIllustrationClick(e as unknown as React.MouseEvent);
                }
              }}
            >
              <div className="w-full h-full flex items-center justify-center scale-100 sm:scale-105 md:scale-110 lg:scale-115">
                <FigmaAIMedicalScribeIllustration
                  subStep={subStep}
                  transcriptionActive={transcriptionActive}
                  noteGeneration={noteGeneration}
                  hideTitle={shouldHideTitle}
                  onElementClick={handleIconClick}
                  isInteractive={true}
                  onHover={(step) => console.log("Hover on step:", step)}
                />
              </div>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center py-4"> 
          <div className={`relative w-full h-full flex-1 flex items-center justify-center ${colorTheme.highlight} rounded-lg`}>
            <div className="scale-100 sm:scale-105 md:scale-110 lg:scale-115">
              <FigmaAIMedicalScribeIllustration
                subStep={subStep}
                transcriptionActive={transcriptionActive}
                noteGeneration={noteGeneration}
                hideTitle={shouldHideTitle}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
