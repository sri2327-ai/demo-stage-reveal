
/**
 * Utility functions for consistent scaling across components
 */

// Standard scale factors for different screen sizes
export const standardScales = {
  // Base scale for mobile (never below 1)
  base: 1.0,
  // Small screens (most phones in landscape, small tablets)
  sm: 1.05,
  // Medium screens (tablets, small laptops)
  md: 1.1,
  // Large screens (laptops, desktops)
  lg: 1.15,
  // Extra large screens (large desktops)
  xl: 1.2,
};

// Get appropriate scale based on viewport size and content type
export const getResponsiveScale = (
  elementType: 'illustration' | 'card' | 'button' = 'illustration',
  isMobile: boolean = false
) => {
  // Apply element-specific modifiers
  const modifiers = {
    illustration: 1.0, // Base multiplier
    card: 0.95,        // Cards are slightly smaller
    button: 0.9,       // Buttons are more compact
  };
  
  // Base scale factor adjusted for mobile
  const baseScale = isMobile ? standardScales.base : standardScales.sm;
  
  // Return appropriate scale with element-specific modifier
  return baseScale * modifiers[elementType];
};

// Generate Tailwind CSS scale classes for responsive elements
export const getScaleClasses = () => {
  return "scale-100 sm:scale-105 md:scale-110 lg:scale-115";
};

/**
 * Converts scale values to CSS transform classes for consistent animation
 * @param value Scale value (1.0 = 100%)
 */
export const scaleToClass = (value: number) => {
  // Convert scale 1.1 to scale-110
  return `scale-${Math.round(value * 100)}`;
};
