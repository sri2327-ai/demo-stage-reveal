
// Utility function to generate consistent random metrics for templates
export const generateTemplateMetrics = (templateId: number) => {
  // Use template ID as seed for consistent randomization
  const seed = templateId * 12345;
  
  // Simple seeded random number generator
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  // Generate rating between 4.0 and 5.0
  const rating = Math.round((4.0 + seededRandom(seed) * 1.0) * 10) / 10;
  
  // Generate user count between 1000 and 5000
  const uses = Math.floor(1000 + seededRandom(seed + 1) * 4000);
  
  // Generate estimated time
  const timeOptions = [
    "5-10 minutes",
    "10-15 minutes", 
    "15-20 minutes",
    "20-25 minutes",
    "25-30 minutes",
    "30-45 minutes"
  ];
  const timeIndex = Math.floor(seededRandom(seed + 2) * timeOptions.length);
  const estimatedTime = timeOptions[timeIndex];
  
  return {
    rating,
    uses,
    estimatedTime
  };
};
