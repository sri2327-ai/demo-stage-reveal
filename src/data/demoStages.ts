
import type { DemoStage } from '../types/demo';

export const demoStages: DemoStage[] = [
  {
    id: 'stage1',
    title: 'Patient Engagement',
    description: "S10.AI's virtual assistant integrates with your existing tools to enhance patient engagement through automated messaging, scheduling, and reminders.",
    highlights: [
      'AI agent uses your clinical voice for personalized messaging',
      'Smart scheduling reduces no-shows by 35%',
      'Intelligent intake connects directly to your EHR',
      'Automated reminders decrease cancellations by 27%',
      'AI phone calls confirm appointments with natural conversation'
    ]
  },
  {
    id: 'stage2',
    title: 'AI Medical Scribe',
    description: "S10.AI's flagship product eliminates documentation burden with real-time transcription and automatic note generation during patient visits.",
    highlights: [
      'HIPAA-compliant voice recognition with medical terminology accuracy',
      'Saves 2+ hours daily on clinical documentation',
      'Integrates with all major EHR systems',
      'Automatic ICD-10 and CPT coding with 95% accuracy',
      'Seamless field mapping into your preferred EHR template'
    ]
  },
  {
    id: 'stage3',
    title: 'Admin Tasks',
    description: "S10.AI's agent works alongside your administrative tools to streamline back-office operations through intelligent task automation.",
    highlights: [
      'Reduces prior authorization time by 87%',
      'Standardizes clinical summaries with personalized instructions',
      'Accelerates insurance verification by 65%',
      'Streamlines prescription management workflows',
      'Enhances billing accuracy with your existing software'
    ]
  },
  {
    id: 'stage4',
    title: 'Post-Visit Support',
    description: "S10.AI's follow-up assistant extends care beyond the clinic by working with your existing patient communication channels.",
    highlights: [
      'AI agent increases medication adherence by 40%',
      'Remote monitoring prevents 32% of readmissions',
      'Evidence-based responses to routine patient questions',
      'Seamless care plan tracking with threshold alerts',
      'Patient feedback analysis improves practice outcomes'
    ]
  }
];
