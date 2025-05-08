
export interface DemoStage {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  image?: string;
}

export interface DemoStageIndicatorProps {
  currentStage: number;
  totalStages: number;
  onStageChange: (stage: number) => void;
}

export interface DemoStageContentProps {
  stage: DemoStage;
  isActive: boolean;
  index: number;
}
