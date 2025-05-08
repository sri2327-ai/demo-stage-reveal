
import type { DemoStage } from '../types/demo';

export const demoStages: DemoStage[] = [
  {
    id: 'stage1',
    title: 'Patient Engagement',
    description: "S10.AI's virtual assistant integrates with your existing tools to enhance patient engagement through automated messaging, scheduling, and reminders.",
    highlights: [
      'AI messaging with your clinical voice',
      'Smart scheduling with your calendar',
      'Intelligent intake forms for your EHR',
      'Automated reminders via your systems',
      'AI phone calls for appointment confirmations'
    ]
  },
  {
    id: 'stage2',
    title: 'AI Medical Scribe',
    description: "S10.AI's flagship product eliminates documentation burden with real-time transcription and automatic note generation during patient visits.",
    highlights: [
      'Voice recognition',
      'Automated documentation',
      'EHR integration',
      'Coding assistance',
      'Custom field mapping'
    ]
  },
  {
    id: 'stage3',
    title: 'Admin Tasks',
    description: "S10.AI's agent works alongside your administrative tools to streamline back-office operations through intelligent task automation.",
    highlights: [
      'Insurance verification with your billing system',
      'Prior authorizations via existing workflows',
      'Claims processing enhancement',
      'Prescription management',
      'Billing optimization with your software'
    ]
  },
  {
    id: 'stage4',
    title: 'Post-Visit Support',
    description: "S10.AI's follow-up assistant extends care beyond the clinic by working with your existing patient communication channels.",
    highlights: [
      'Treatment adherence through your patient portal',
      'Care plan monitoring with your existing tools',
      'Patient questions via your communication systems',
      'Recovery tracking integrated with your EHR',
      'Patient feedback and satisfaction analysis'
    ]
  }
];
