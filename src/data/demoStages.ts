
import type { DemoStage } from '../types/demo';

export const demoStages: DemoStage[] = [
  {
    id: 'stage1',
    title: 'Patient Engagement',
    description: "S10.AI's CRUSH virtual assistant integrates with your existing tools to enhance patient engagement through personalized messaging using your unique clinical voice.",
    highlights: [
      'AI preserves your clinical voice across all patient communications',
      'Smart scheduling reduces no-shows by 35%',
      'Intelligent intake connects directly to your EHR',
      'Automated reminders decrease cancellations by 27%',
      'Voice-enabled AI phone calls confirm appointments naturally'
    ]
  },
  {
    id: 'stage2',
    title: 'AI Medical Scribe',
    description: "S10.AI's BRAVO flagship product eliminates documentation burden with real-time transcription and automatic clinical note generation during patient visits.",
    highlights: [
      'HIPAA-compliant voice recognition with 99.2% medical terminology accuracy',
      'Saves 2+ hours daily on clinical documentation',
      'Integrates seamlessly with all major EHR systems',
      'Automatic ICD-10 and CPT coding with 95% accuracy',
      'Field mapping maintains your preferred EHR template structure'
    ]
  },
  {
    id: 'stage3',
    title: 'Admin Tasks',
    description: "S10.AI's CRUSH agent enhances your administrative team's capacity by automating complex back-office tasks while preserving your clinical protocols.",
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
    description: "S10.AI's BRAVO follow-up assistant extends care beyond the clinic by working with your existing patient communication channels to improve outcomes.",
    highlights: [
      'AI agent increases medication adherence by 40%',
      'Remote monitoring prevents 32% of readmissions',
      'Evidence-based responses to routine patient questions',
      'Seamless care plan tracking with threshold alerts',
      'Patient feedback analysis improves practice outcomes'
    ]
  }
];
