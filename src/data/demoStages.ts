
import type { DemoStage } from '../types/demo';

export const demoStages: DemoStage[] = [
  {
    id: 'stage1',
    title: 'Patient Engagement',
    description: 'S10.AI enhances patient engagement with automated messaging, scheduling, and reminders—all powered by AI.',
    highlights: [
      'Automated scheduling',
      'Smart intake forms',
      'Appointment reminders',
      'Self-service options'
    ]
  },
  {
    id: 'stage2',
    title: 'AI Medical Scribe',
    description: 'Eliminate documentation burden with real-time transcription and automatic note generation during patient visits.',
    highlights: [
      'Voice recognition',
      'Automated documentation',
      'EHR integration',
      'Coding assistance'
    ]
  },
  {
    id: 'stage3',
    title: 'Admin Tasks',
    description: 'Streamline back-office operations with AI-powered administrative task automation.',
    highlights: [
      'Insurance verification',
      'Prior authorizations',
      'Claims processing',
      'Billing optimization'
    ]
  },
  {
    id: 'stage4',
    title: 'Post-Visit Support',
    description: 'Extend care beyond the clinic with AI-driven follow-up and ongoing patient support.',
    highlights: [
      'Treatment adherence',
      'Care plan monitoring',
      'Patient questions',
      'Recovery tracking'
    ]
  }
];
