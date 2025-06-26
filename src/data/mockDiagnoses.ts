
// Mock data for diagnoses - replace with API calls in production
export interface Diagnosis {
  id: string;
  name: string;
  description: string;
  alsoKnownAs: string[];
  primaryCode: string;
  codeType: string;
  details: {
    codeRange: string;
    clinicalCriteria: string[];
    bestPractice: string;
    relatedCodes: {
      code: string;
      description: string;
      billable: boolean;
      notes: string;
    }[];
    documentationRequirements: string[];
    examples: {
      poor: string;
      good: string;
    };
    risks: {
      title: string;
      description: string;
    }[];
    faq: {
      question: string;
      answer: string;
    }[];
    templates: {
      title: string;
      specialty: string;
      template: string;
    }[];
  };
}

export const mockDiagnoses: Diagnosis[] = [
  {
    id: "aapc-icd-10-cm-coding",
    name: "AAPC ICD-10-CM Coding",
    description: "Complete ICD-10-CM coding and documentation guide for AAPC ICD-10-CM Coding. Includes clinical validation requirements, documentation requirements, and coding pitfalls.",
    alsoKnownAs: ["AAPC Coding", "ICD-10-CM Documentation"],
    primaryCode: "A41.54",
    codeType: "ICD-10-CM",
    details: {
      codeRange: "A00-B99 - Certain infectious and parasitic diseases",
      clinicalCriteria: [
        "Blood culture positive for Acinetobacter baumannii",
        "Clinical signs of sepsis",
        "Documentation of specific organism"
      ],
      bestPractice: "Use ICD-10 code A41.54 for sepsis due to Acinetobacter baumannii, ensuring the organism is documented in clinical notes.",
      relatedCodes: [
        {
          code: "A41.54",
          description: "Sepsis due to Acinetobacter baumannii",
          billable: true,
          notes: "Primary code when organism is confirmed"
        },
        {
          code: "I12.9",
          description: "Hypertensive chronic kidney disease",
          billable: true,
          notes: "Use when hypertension is documented with CKD"
        }
      ],
      documentationRequirements: [
        "Blood culture confirming Acinetobacter baumannii",
        "Documentation of specific organism in provider notes",
        "Clinical symptoms supporting sepsis diagnosis",
        "Timeline of infection development"
      ],
      examples: {
        poor: "Patient has sepsis.",
        good: "Patient has sepsis due to Acinetobacter baumannii, confirmed by blood cultures."
      },
      risks: [
        {
          title: "Using unspecified codes when specific organism is identified",
          description: "May lead to reduced reimbursement due to lack of specificity."
        },
        {
          title: "Vague documentation of complications",
          description: "May lead to inappropriate treatment plans and coding errors."
        }
      ],
      faq: [
        {
          question: "How do I code sepsis due to Acinetobacter baumannii?",
          answer: "Use ICD-10 code A41.54 when sepsis is confirmed to be due to Acinetobacter baumannii with proper documentation."
        },
        {
          question: "What are the documentation requirements for this diagnosis?",
          answer: "Blood culture confirming the organism, clinical symptoms, and provider documentation of the specific organism are required."
        }
      ],
      templates: [
        {
          title: "Sepsis Documentation",
          specialty: "Infectious Disease",
          template: "Patient presents with sepsis due to Acinetobacter baumannii, confirmed by blood cultures obtained on [DATE]. Clinical symptoms include [SYMPTOMS]. Treatment initiated with [ANTIBIOTICS]."
        }
      ]
    }
  },
  {
    id: "acl-rupture",
    name: "ACL Rupture",
    description: "Complete tear of the anterior cruciate ligament, commonly occurring in sports activities and requiring surgical intervention.",
    alsoKnownAs: ["Anterior Cruciate Ligament Tear", "ACL Tear"],
    primaryCode: "S83.511A",
    codeType: "ICD-10-CM",
    details: {
      codeRange: "S80-S89 - Injuries to the knee and lower leg",
      clinicalCriteria: [
        "Clinical examination findings",
        "MRI confirmation of complete tear",
        "Mechanism of injury documentation"
      ],
      bestPractice: "Document the specific knee affected (right/left) and whether this is initial encounter or subsequent care.",
      relatedCodes: [
        {
          code: "S83.511A",
          description: "Sprain of anterior cruciate ligament of right knee, initial encounter",
          billable: true,
          notes: "Use for right knee, initial encounter"
        },
        {
          code: "S83.512A",
          description: "Sprain of anterior cruciate ligament of left knee, initial encounter",
          billable: true,
          notes: "Use for left knee, initial encounter"
        }
      ],
      documentationRequirements: [
        "Specific knee affected (right or left)",
        "Mechanism of injury",
        "Clinical examination findings",
        "Imaging results (MRI preferred)"
      ],
      examples: {
        poor: "Patient has ACL injury.",
        good: "Patient sustained complete rupture of right anterior cruciate ligament during basketball game, confirmed by MRI."
      },
      risks: [
        {
          title: "Not specifying affected knee",
          description: "Leads to use of unspecified codes and potential claim denials."
        },
        {
          title: "Incorrect encounter type",
          description: "Using wrong encounter type affects reimbursement and care coordination."
        }
      ],
      faq: [
        {
          question: "How do I differentiate between sprain and rupture?",
          answer: "Complete rupture involves full tear of the ligament, while sprain indicates partial tear or stretching."
        }
      ],
      templates: [
        {
          title: "ACL Injury Documentation",
          specialty: "Orthopedics",
          template: "Patient sustained [complete/partial] tear of [right/left] anterior cruciate ligament during [activity]. Clinical examination reveals [findings]. MRI confirms [degree of injury]."
        }
      ]
    }
  },
  {
    id: "bronchial-asthma",
    name: "Bronchial Asthma",
    description: "Chronic inflammatory airway disease characterized by reversible airflow obstruction and bronchial hyperresponsiveness.",
    alsoKnownAs: ["Asthma", "Allergic Asthma", "Exercise-Induced Asthma"],
    primaryCode: "J45.9",
    codeType: "ICD-10-CM",
    details: {
      codeRange: "J40-J47 - Chronic lower respiratory diseases",
      clinicalCriteria: [
        "Reversible airflow obstruction",
        "Bronchial hyperresponsiveness",
        "Inflammatory markers present"
      ],
      bestPractice: "Specify asthma type, severity, and current control status for accurate coding.",
      relatedCodes: [
        {
          code: "J45.9",
          description: "Asthma, unspecified",
          billable: true,
          notes: "Use when specific type not documented"
        },
        {
          code: "J45.0",
          description: "Predominantly allergic asthma",
          billable: true,
          notes: "Use when allergic component is primary"
        }
      ],
      documentationRequirements: [
        "Asthma type (allergic, non-allergic, mixed)",
        "Severity classification",
        "Control status",
        "Trigger identification"
      ],
      examples: {
        poor: "Patient has asthma.",
        good: "Patient has moderate persistent allergic asthma, currently well-controlled with inhaled corticosteroids."
      },
      risks: [
        {
          title: "Not documenting severity",
          description: "Affects treatment planning and medication management."
        }
      ],
      faq: [
        {
          question: "How do I classify asthma severity?",
          answer: "Use NHLBI guidelines: intermittent, mild persistent, moderate persistent, or severe persistent."
        }
      ],
      templates: [
        {
          title: "Asthma Documentation",
          specialty: "Pulmonology",
          template: "Patient has [severity] [type] asthma, currently [control status]. Primary triggers include [triggers]. Current medications: [medications]."
        }
      ]
    }
  }
];

export const getDiagnosisById = (id: string): Diagnosis | undefined => {
  return mockDiagnoses.find(diagnosis => diagnosis.id === id);
};
