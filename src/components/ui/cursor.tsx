
import React, { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Create context for the mouse position
type MousePositionContextType = {
  position: { x: number; y: number };
  setPosition: (pos: { x: number; y: number }) => void;
  isActive: boolean;
};

const MousePositionContext = createContext<MousePositionContextType | null>(null);

interface MouseTrackerProviderProps {
  children: ReactNode;
  disableCursor?: boolean;
}

export const MouseTrackerProvider: React.FC<MouseTrackerProviderProps> = ({ 
  children, 
  disableCursor = false 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Track mouse movement with improved responsiveness
  useEffect(() => {
    if (disableCursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Calculate position relative to the container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Update position immediately without batching
        setPosition({ x, y });
        setIsActive(true);
      }
    };
    
    const handleMouseLeave = () => {
      setIsActive(false);
    };
    
    const handleMouseEnter = () => {
      setIsActive(true);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove, { passive: true });
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mouseenter', handleMouseEnter);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, [disableCursor]);

  return (
    <MousePositionContext.Provider value={{ position, setPosition, isActive }}>
      <div 
        ref={ref} 
        style={{ cursor: disableCursor ? 'default' : 'none' }} 
        className="relative w-full h-full overflow-hidden"
      >
        {children}
      </div>
    </MousePositionContext.Provider>
  );
};

// Hook to use the mouse position context
export const useMousePosition = () => {
  const context = useContext(MousePositionContext);
  if (!context) {
    throw new Error('useMousePosition must be used within a MouseTrackerProvider');
  }
  return context;
};

// Pointer component that follows the mouse
interface PointerProps {
  children?: ReactNode;
  className?: string;
}

export const Pointer: React.FC<PointerProps> = ({ children, className }) => {
  const { position, isActive } = useMousePosition();

  return (
    <AnimatePresence>
      <motion.div
        className={`pointer-events-none absolute z-50 ${className || ''}`}
        initial={{ opacity: 0 }}
        animate={{ 
          x: position.x, 
          y: position.y,
          opacity: isActive ? 1 : 0,
        }}
        style={{ 
          translateX: '-50%',
          translateY: '-50%',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.1,
          opacity: { duration: 0.15 }
        }}
      >
        {children || (
          <div className="w-8 h-8">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.36 1.33331L18.6667 9.18665L11.7067 10.96L9.18667 18.6666L4.36 1.33331Z" 
                fill="url(#cursor-gradient)" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="cursor-gradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="#143151" />
                  <stop offset="100%" stopColor="#387E89" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Pointer follower that follows the pointer with a delay - IMPROVED VERSION
interface PointerFollowerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  align?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center';
  alwaysVisible?: boolean;
  offsetY?: number; 
  offsetX?: number;
  style?: React.CSSProperties;
}

export const PointerFollower: React.FC<PointerFollowerProps> = ({ 
  children, 
  className,
  delay = 0.1,
  align = 'bottom-center',
  alwaysVisible = false,
  offsetY = 30, // Increased default offset for better visibility
  offsetX = 0,
  style = {}
}) => {
  const { position, isActive } = useMousePosition();
  
  // Calculate offset based on alignment
  const getOffset = () => {
    switch(align) {
      case 'top-left': return { x: -40 + offsetX, y: -60 + offsetY };
      case 'top-right': return { x: 20 + offsetX, y: -60 + offsetY };
      case 'bottom-left': return { x: -40 + offsetX, y: 60 + offsetY };
      case 'bottom-right': return { x: 20 + offsetX, y: 60 + offsetY };
      case 'bottom-center': return { x: 0 + offsetX, y: 60 + offsetY };
      case 'center':
      default: return { x: 0 + offsetX, y: 0 + offsetY };
    }
  };
  
  const offset = getOffset();

  return (
    <AnimatePresence>
      <motion.div
        className={`pointer-events-none fixed z-[100] ${className || ''}`} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: alwaysVisible || isActive ? 1 : 0,
          scale: alwaysVisible || isActive ? 1 : 0.8,
          x: position.x + offset.x, 
          y: position.y + offset.y,
          transition: {
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
            x: { type: "spring", damping: 25, stiffness: 200, delay },
            y: { type: "spring", damping: 25, stiffness: 200, delay },
          }
        }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
        style={{
          translateX: '-50%', // Center the tooltip
          ...style
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
