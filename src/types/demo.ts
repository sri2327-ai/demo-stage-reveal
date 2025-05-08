
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
  isDemoSection?: boolean;
}

export interface DemoStageContentProps {
  stage: DemoStage;
  isActive: boolean;
  index: number;
}

export interface DemoSceneProps {
  currentStage: number;
  stages: DemoStage[];
}
