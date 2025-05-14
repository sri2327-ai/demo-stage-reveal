
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get stage title based on currentStage
export function getStageTitleByIndex(currentStage: number): string {
  switch (currentStage) {
    case 0: return "Patient Engagement";
    case 1: return "AI Medical Scribe";
    case 2: return "Clinical Admin";
    case 3: return "Post-Visit Care";
    default: return "AI Clinical Workflows";
  }
}
