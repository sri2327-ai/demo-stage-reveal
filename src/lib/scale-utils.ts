
/**
 * Utility functions for consistent scaling across components
 */

// Standard scale factors for different screen sizes - FIXED VALUES
export const standardScales = {
  // Base scale for mobile (fixed at 1)
  base: 1.0,
  // Small screens (fixed at 1)
  sm: 1.0,
  // Medium screens (minimal scale)
  md: 1.02,
  // Large screens (subtle scale)
  lg: 1.05,
  // Extra large screens (moderate scale)
  xl: 1.08,
};

// Get appropriate scale based on viewport size and content type
export const getResponsiveScale = (
  elementType: 'illustration' | 'card' | 'button' = 'illustration',
  isMobile: boolean = false
) => {
  // Apply element-specific modifiers
  const modifiers = {
    illustration: 1.0, // Base multiplier
    card: 0.98,        // Cards are slightly smaller
    button: 0.96,      // Buttons are more compact
  };
  
  // Base scale factor adjusted for mobile - NEVER SCALE ON MOBILE
  const baseScale = isMobile ? 1.0 : standardScales.sm;
  
  // Return appropriate scale with element-specific modifier
  return baseScale * modifiers[elementType];
};

// Generate Tailwind CSS scale classes that don't distort the layout
export const getScaleClasses = () => {
  return "scale-100"; // Fixed scale with no dynamic changes
};

/**
 * Converts scale values to CSS transform classes for consistent animation
 * @param value Scale value (1.0 = 100%)
 */
export const scaleToClass = (value: number) => {
  // Convert scale 1.1 to scale-110
  return `scale-${Math.round(value * 100)}`;
};
