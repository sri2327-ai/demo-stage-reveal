
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { MouseTrackerProvider } from './ui/cursor';
import { useIsMobile } from '../hooks/use-mobile';
import { AspectRatio } from './ui/aspect-ratio';
import { clinicalColorThemes } from '../lib/color-themes';

interface FigmaPatientEngagementInteractiveProps {
  subStep: number;
  onElementClick?: (step: number) => void;
  isInteractive?: boolean;
  hideTitle?: boolean;
}

export const FigmaPatientEngagementInteractive: React.FC<FigmaPatientEngagementInteractiveProps> = ({
  subStep,
  onElementClick,
  isInteractive = false,
  hideTitle = false
}) => {
  const [lastInteraction, setLastInteraction] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only hide title on mobile, or if explicitly needed for a specific layout
  const shouldHideTitle = isMobile ? hideTitle : false;
  
  // Set up cursor position for hover effects
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isProcessingCall, setIsProcessingCall] = useState(false);
  
  // Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInteractive || !onElementClick) return;
      
      // Update last interaction time to pause autoplay
      setLastInteraction(Date.now());
      
      // Arrow key navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        onElementClick((subStep + 1) % 5);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        onElementClick((subStep - 1 + 5) % 5);
        e.preventDefault();
      } else if (e.key >= '1' && e.key <= '5') {
        // Number keys 1-5 for direct navigation
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

  // Handle hover on specific elements
  const handleHover = (step: number | null) => {
    // We can handle hover states here if needed
    console.log("PatientEngagement - Hover on step:", step);
  };

  // Handle click on specific UI elements (icons) with improved validation
  const handleIconClick = (step: number, e?: React.MouseEvent) => {
    // Ensure we have an event object and stop propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log("PatientEngagement - Icon clicked for step:", step);
    if (onElementClick && step >= 0 && step < 5) {
      // Track interaction time and navigate
      setLastInteraction(Date.now());
      onElementClick(step);
      
      // Provide haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(40);
      }
    }
  };
  
  // Handle click on the illustration area
  const handleIllustrationClick = (e: React.MouseEvent) => {
    // Don't handle if the click was on a child element that should handle its own clicks
    if ((e.target as HTMLElement).closest('[data-clickable="true"]')) {
      return;
    }
    
    // Check if the click target is a menu icon or related element
    const iconElement = (e.target as HTMLElement).closest('.icon-menu-item');
    if (iconElement && iconElement.dataset.step !== undefined) {
      // If clicking on a menu icon, use that step
      const step = parseInt(iconElement.dataset.step);
      handleIconClick(step, e);
      return;
    }
    
    if (onElementClick) {
      // Move to next step
      const nextStep = (subStep + 1) % 5;
      console.log("PatientEngagement - Illustration area clicked, moving to step:", nextStep);
      setLastInteraction(Date.now());
      onElementClick(nextStep);
      
      // Provide minimal haptic feedback on mobile if available
      if (navigator.vibrate && isMobile) {
        navigator.vibrate(20);
      }
    }
  };

  // Get theme colors for patient engagement
  const colorTheme = clinicalColorThemes.patientEngagement;
  
  return (
    <div 
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center ${colorTheme.background} rounded-xl ${colorTheme.border} ${colorTheme.shadow} p-2`}
      role="region" 
      aria-label="Patient Engagement Interactive Demo"
      tabIndex={-1}
    >
      {isInteractive ? (
        <MouseTrackerProvider disableCursor={false}>
          <div className="w-full h-full flex items-center justify-center"> 
            <div 
              className={`w-full max-w-3xl mx-auto rounded-xl overflow-hidden ${colorTheme.border} ${colorTheme.shadow}`}
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
              <AspectRatio ratio={16/9} className={`${colorTheme.accent} backdrop-blur-sm rounded-lg overflow-hidden border ${colorTheme.border} shadow-sm`}>
                <FigmaPatientEngagementIllustration
                  subStep={subStep}
                  cursorPosition={cursorPosition}
                  isProcessingCall={isProcessingCall}
                  onElementClick={handleIconClick}
                  isInteractive={true}
                  onHover={handleHover}
                  hideTitle={shouldHideTitle}
                />
              </AspectRatio>
            </div>
          </div>
        </MouseTrackerProvider>
      ) : (
        <div className="w-full h-full flex items-center justify-center"> 
          <div className={`w-full max-w-3xl mx-auto rounded-xl overflow-hidden ${colorTheme.border} ${colorTheme.shadow}`}>
            <AspectRatio ratio={16/9} className={`${colorTheme.accent} backdrop-blur-sm rounded-lg overflow-hidden border ${colorTheme.border} shadow-sm`}>
              <FigmaPatientEngagementIllustration
                subStep={subStep}
                cursorPosition={cursorPosition}
                isProcessingCall={isProcessingCall}
                hideTitle={shouldHideTitle}
              />
            </AspectRatio>
          </div>
        </div>
      )}
    </div>
  );
};
