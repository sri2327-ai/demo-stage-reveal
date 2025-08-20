export interface ChartTimeline {
  id: string;
  name: string;
  description: string;
  category: 'scoring' | 'protocols' | 'charts';
  type: string;
  alsoKnownAs: string[];
  details: {
    purpose?: string;
    objective?: string;
    components?: Array<{ component: string; score: string; description: string }>;
    interpretation?: Array<{ range: string; meaning: string }>;
    steps?: Array<{ step: string; timeframe?: string; actions: string[] }>;
    usage?: string[];
    clinicalPearls?: string[];
    faqs: Array<{ question: string; answer: string }>;
  };
}

export const mockChartsTimelines: ChartTimeline[] = [
  // Scoring Systems, Scales, and Classifications
  {
    id: 'glasgow-coma-scale',
    name: 'Glasgow Coma Scale (GCS)',
    description: 'A neurological scale used to assess the level of consciousness after head injury.',
    category: 'scoring',
    type: 'Neurological Assessment',
    alsoKnownAs: ['GCS', 'Coma Scale'],
    details: {
      purpose: 'To evaluate and monitor the level of consciousness in patients with brain injuries',
      components: [
        { component: 'Eye Opening', score: '1-4', description: 'Spontaneous (4), To voice (3), To pain (2), None (1)' },
        { component: 'Verbal Response', score: '1-5', description: 'Oriented (5), Confused (4), Inappropriate words (3), Incomprehensible sounds (2), None (1)' },
        { component: 'Motor Response', score: '1-6', description: 'Obeys commands (6), Localizes pain (5), Withdraws from pain (4), Flexor response (3), Extensor response (2), None (1)' }
      ],
      interpretation: [
        { range: '13-15', meaning: 'Mild traumatic brain injury' },
        { range: '9-12', meaning: 'Moderate traumatic brain injury' },
        { range: '3-8', meaning: 'Severe traumatic brain injury' }
      ],
      clinicalPearls: [
        'Score should be reassessed regularly in critically ill patients',
        'Individual component scores are as important as the total score',
        'Consider intubation for GCS ≤8'
      ],
      faqs: [
        { 
          question: 'How often should GCS be assessed?', 
          answer: 'GCS should be assessed initially and then at regular intervals based on clinical condition, typically every 15-30 minutes in acute settings.' 
        },
        { 
          question: 'Can GCS be used in intubated patients?', 
          answer: 'Yes, but the verbal component cannot be assessed. Document as "GCS-V" and focus on eye opening and motor response.' 
        }
      ]
    }
  },
  {
    id: 'apgar-score',
    name: 'APGAR Score',
    description: 'A quick assessment of newborn health immediately after birth.',
    category: 'scoring',
    type: 'Neonatal Assessment',
    alsoKnownAs: ['Apgar', 'Newborn Assessment Score'],
    details: {
      purpose: 'To quickly evaluate a newborn\'s physical condition and determine if immediate medical care is needed',
      components: [
        { component: 'Appearance (Color)', score: '0-2', description: 'Blue/pale (0), Body pink/extremities blue (1), Completely pink (2)' },
        { component: 'Pulse (Heart Rate)', score: '0-2', description: 'Absent (0), <100 bpm (1), >100 bpm (2)' },
        { component: 'Grimace (Reflex)', score: '0-2', description: 'None (0), Grimace (1), Cough/sneeze/cry (2)' },
        { component: 'Activity (Muscle Tone)', score: '0-2', description: 'Limp (0), Some flexion (1), Active motion (2)' },
        { component: 'Respiratory Effort', score: '0-2', description: 'Absent (0), Weak cry (1), Strong cry (2)' }
      ],
      interpretation: [
        { range: '7-10', meaning: 'Normal - routine care' },
        { range: '4-6', meaning: 'Moderately depressed - may need intervention' },
        { range: '0-3', meaning: 'Severely depressed - immediate resuscitation needed' }
      ],
      clinicalPearls: [
        'Assess at 1 and 5 minutes after birth',
        'If 5-minute score is <7, continue every 5 minutes until score is ≥7',
        'Low scores may be normal in preterm infants'
      ],
      faqs: [
        { 
          question: 'When is APGAR score assessed?', 
          answer: 'APGAR is assessed at 1 minute and 5 minutes after birth. If the 5-minute score is less than 7, continue assessments every 5 minutes.' 
        },
        { 
          question: 'Does a low APGAR score predict long-term outcomes?', 
          answer: 'A single low APGAR score does not predict long-term neurological outcomes. Serial assessments and clinical context are more important.' 
        }
      ]
    }
  },

  // Clinical Protocols, Timelines, and Bundles
  {
    id: 'acls-protocol',
    name: 'ACLS Cardiac Arrest Algorithm',
    description: 'Advanced Cardiovascular Life Support protocol for cardiac arrest management.',
    category: 'protocols',
    type: 'Emergency Protocol',
    alsoKnownAs: ['ACLS', 'Cardiac Arrest Protocol', 'Advanced Life Support'],
    details: {
      objective: 'To provide systematic approach to cardiac arrest resuscitation to maximize chances of survival',
      steps: [
        {
          step: 'Initial Assessment',
          timeframe: 'Immediate',
          actions: [
            'Check responsiveness and breathing',
            'Call for help/activate emergency response',
            'Check pulse (≤10 seconds)',
            'Begin CPR if no pulse'
          ]
        },
        {
          step: 'CPR and Defibrillation',
          timeframe: 'Continuous',
          actions: [
            'High-quality CPR (30:2 ratio)',
            'Attach monitor/defibrillator',
            'Analyze rhythm every 2 minutes',
            'Defibrillate if shockable rhythm (VF/VT)'
          ]
        },
        {
          step: 'Medication Administration',
          timeframe: 'During CPR cycles',
          actions: [
            'Epinephrine 1mg IV/IO every 3-5 minutes',
            'Amiodarone 300mg IV/IO for VF/VT (first dose)',
            'Amiodarone 150mg IV/IO (second dose)',
            'Consider reversible causes (H\'s and T\'s)'
          ]
        },
        {
          step: 'Advanced Interventions',
          timeframe: 'As indicated',
          actions: [
            'Secure airway (endotracheal tube/supraglottic)',
            'Waveform capnography',
            'Vascular access (IV/IO)',
            'Point-of-care ultrasound if available'
          ]
        }
      ],
      clinicalPearls: [
        'High-quality CPR is the foundation of successful resuscitation',
        'Minimize interruptions in chest compressions',
        'Consider extracorporeal CPR (ECPR) in appropriate candidates'
      ],
      faqs: [
        { 
          question: 'How long should resuscitation continue?', 
          answer: 'Duration depends on multiple factors including witnessed arrest, initial rhythm, response to interventions, and reversible causes. Generally 20-30 minutes for non-shockable rhythms.' 
        },
        { 
          question: 'When should epinephrine be given?', 
          answer: 'Give epinephrine 1mg IV/IO every 3-5 minutes during cardiac arrest. First dose should be given as soon as IV/IO access is available.' 
        }
      ]
    }
  },
  {
    id: 'sepsis-bundle',
    name: 'Sepsis 1-Hour Bundle',
    description: 'Evidence-based interventions to be completed within 1 hour of sepsis recognition.',
    category: 'protocols',
    type: 'Clinical Bundle',
    alsoKnownAs: ['Hour-1 Bundle', 'Sepsis Protocol', 'Surviving Sepsis Bundle'],
    details: {
      objective: 'To improve outcomes in sepsis and septic shock through early recognition and intervention',
      steps: [
        {
          step: 'Measure lactate level',
          timeframe: 'Within 1 hour',
          actions: [
            'Obtain serum lactate',
            'If elevated (>2 mmol/L), remeasure within 2-4 hours',
            'Use as marker of tissue hypoperfusion'
          ]
        },
        {
          step: 'Obtain blood cultures',
          timeframe: 'Before antibiotics',
          actions: [
            'Draw at least 2 sets from different sites',
            'Include one from each vascular access device >48 hours old',
            'Consider other culture sources as clinically indicated'
          ]
        },
        {
          step: 'Administer broad-spectrum antibiotics',
          timeframe: 'Within 1 hour',
          actions: [
            'Give first dose of appropriate IV antibiotics',
            'Consider local resistance patterns',
            'Include anti-MRSA coverage if risk factors present',
            'Review and narrow based on culture results'
          ]
        },
        {
          step: 'Begin rapid fluid resuscitation',
          timeframe: 'Within 1 hour',
          actions: [
            'Give 30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L',
            'Use balanced crystalloids when possible',
            'Reassess hemodynamic status frequently',
            'Consider fluid responsiveness assessment'
          ]
        },
        {
          step: 'Apply vasopressors',
          timeframe: 'If hypotensive during/after fluid resuscitation',
          actions: [
            'Target MAP ≥65 mmHg',
            'Norepinephrine is first-line vasopressor',
            'Use central venous access when possible',
            'Monitor for tissue perfusion improvement'
          ]
        }
      ],
      clinicalPearls: [
        'Early recognition and intervention significantly improve outcomes',
        'Bundle compliance is associated with reduced mortality',
        'Reassess patient response and adjust interventions accordingly'
      ],
      faqs: [
        { 
          question: 'What defines the start of the 1-hour window?', 
          answer: 'The 1-hour window begins at the time of sepsis recognition, which could be in triage, emergency department, or any clinical area.' 
        },
        { 
          question: 'Can the bundle elements be completed in any order?', 
          answer: 'Yes, bundle elements should be initiated simultaneously when possible, not sequentially. The key is completing all elements within 1 hour.' 
        }
      ]
    }
  },

  // Charts and Tools
  {
    id: 'pediatric-growth-charts',
    name: 'CDC Pediatric Growth Charts',
    description: 'Standardized growth charts for tracking physical development in children and adolescents.',
    category: 'charts',
    type: 'Growth Assessment Tool',
    alsoKnownAs: ['Growth Charts', 'Pediatric Percentiles', 'CDC Growth Curves'],
    details: {
      purpose: 'To track and assess normal growth patterns in children from birth to 20 years of age',
      usage: [
        'Plot child\'s measurements (height, weight, BMI) on age-appropriate chart',
        'Identify the percentile ranking compared to reference population',
        'Track growth velocity over time',
        'Compare measurements to previous visits',
        'Identify potential growth disorders or nutritional issues'
      ],
      interpretation: [
        { range: '5th-95th percentile', meaning: 'Normal range for most children' },
        { range: '<5th percentile', meaning: 'May indicate failure to thrive or underlying condition' },
        { range: '>95th percentile', meaning: 'May indicate obesity or accelerated growth' },
        { range: 'Crossing percentiles', meaning: 'Significant change in growth pattern - requires evaluation' }
      ],
      clinicalPearls: [
        'Use WHO charts for children 0-2 years, CDC charts for 2-20 years',
        'Plot preterm infants using corrected age until 24 months',
        'Growth velocity is more important than single measurements',
        'Consider parental heights when interpreting child\'s growth pattern'
      ],
      faqs: [
        { 
          question: 'Which growth chart should I use for different ages?', 
          answer: 'Use WHO growth charts for children 0-24 months and CDC growth charts for children 2-20 years. These charts reflect optimal growth patterns.' 
        },
        { 
          question: 'What does it mean if a child is in the 25th percentile?', 
          answer: 'It means 75% of children the same age are taller/heavier, and 25% are shorter/lighter. This is still within normal range if consistent over time.' 
        }
      ]
    }
  },
  {
    id: 'bristol-stool-chart',
    name: 'Bristol Stool Chart',
    description: 'Visual scale for classifying human feces into seven categories based on form and consistency.',
    category: 'charts',
    type: 'Diagnostic Tool',
    alsoKnownAs: ['Bristol Stool Scale', 'Stool Form Scale', 'BSS'],
    details: {
      purpose: 'To provide standardized method for assessing stool consistency and form in clinical practice',
      usage: [
        'Show chart to patient or have them identify stool type',
        'Document stool type number (1-7) in medical record',
        'Use for monitoring bowel habits over time',
        'Assess effectiveness of treatments for constipation or diarrhea',
        'Correlate with other GI symptoms and conditions'
      ],
      interpretation: [
        { range: 'Type 1-2', meaning: 'Constipation - hard, difficult to pass stools' },
        { range: 'Type 3-4', meaning: 'Normal - ideal stool consistency' },
        { range: 'Type 5-7', meaning: 'Diarrhea - loose to watery stools' }
      ],
      clinicalPearls: [
        'Types 3 and 4 are considered normal/ideal',
        'Useful for patient education about normal bowel movements',
        'Can help differentiate functional from organic bowel disorders',
        'Correlates with colonic transit time'
      ],
      faqs: [
        { 
          question: 'How often should patients use the Bristol Stool Chart?', 
          answer: 'Patients can use it daily to monitor bowel habits, especially when tracking treatment response for IBS, constipation, or diarrhea.' 
        },
        { 
          question: 'Is the Bristol Stool Chart validated for clinical use?', 
          answer: 'Yes, it\'s a validated tool widely used in clinical practice and research for assessing stool consistency and bowel function.' 
        }
      ]
    }
  }
];

export const getChartTimelineById = (id: string): ChartTimeline | undefined => {
  return mockChartsTimelines.find(item => item.id === id);
};