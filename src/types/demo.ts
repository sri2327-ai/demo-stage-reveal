
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
  subStep?: number;
  onSubStepChange?: (step: number) => void;
}

export interface DemoStageProps {
  stages: DemoStage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  isDemoSection?: boolean;
}

export interface MobileAnimationProps {
  currentStage: number;
  subStep: number;
  maxSteps: number;
  onStepChange: (step: number) => void;
  onStageChange: (stage: number) => void;
  labels: Record<number, string>;
  labelTitles: Record<number, string>;
}
