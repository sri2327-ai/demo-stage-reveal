
import React, { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Create context for the mouse position
type MousePositionContextType = {
  position: { x: number; y: number };
  setPosition: (pos: { x: number; y: number }) => void;
};

const MousePositionContext = createContext<MousePositionContextType | null>(null);

interface MouseTrackerProviderProps {
  children: ReactNode;
}

export const MouseTrackerProvider: React.FC<MouseTrackerProviderProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <MousePositionContext.Provider value={{ position, setPosition }}>
      <div ref={ref} className="relative w-full h-full overflow-hidden">
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
  const { position } = useMousePosition();

  return (
    <AnimatePresence>
      <motion.div
        className={`pointer-events-none absolute z-50 ${className}`}
        animate={{ 
          x: position.x, 
          y: position.y,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 300
          }
        }}
      >
        {children || (
          <div className="w-5 h-5">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.36 1.33331L18.6667 9.18665L11.7067 10.96L9.18667 18.6666L4.36 1.33331Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Pointer follower that follows the pointer with a delay
interface PointerFollowerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  align?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const PointerFollower: React.FC<PointerFollowerProps> = ({ 
  children, 
  className,
  delay = 0.1,
  align = 'center'
}) => {
  const { position } = useMousePosition();
  
  // Calculate offset based on alignment
  const getOffset = () => {
    switch(align) {
      case 'top-left': return { x: -10, y: -10 };
      case 'top-right': return { x: 10, y: -10 };
      case 'bottom-left': return { x: -10, y: 20 };
      case 'bottom-right': return { x: 10, y: 20 };
      case 'center':
      default: return { x: 0, y: 0 };
    }
  };
  
  const offset = getOffset();

  return (
    <AnimatePresence>
      <motion.div
        className={`pointer-events-none absolute z-40 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: position.x + offset.x, 
          y: position.y + offset.y,
          transition: {
            x: { type: "spring", damping: 15, stiffness: 150, delay },
            y: { type: "spring", damping: 15, stiffness: 150, delay },
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
