export type FAQ = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  content: string;
  faqs: FAQ[];
};

export type Specialty = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  posts: BlogPost[];
};

export const specialties: Specialty[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    description: "AI scribing and agents for heart care—accurate notes, codes, and patient follow-ups.",
    tags: [],
    posts: [
      {
        slug: "optimize-cath-lab-workflows",
        title: "Optimizing Cath Lab Workflows with an AI Scribe",
        excerpt: "Reduce turnaround, improve documentation quality, and capture complete coding in interventional cardiology.",
        date: "2025-08-01",
        readingTime: "6 min",
        image: "/lovable-uploads/6ae429b1-f16f-4432-865d-4602f85e5701.png",
        imageAlt: "Cardiology cath lab AI scribe",
        content:
          "AI scribing streamlines pre-, intra-, and post-procedure documentation. Ambient capture preserves the precise sequence of events while assisting ICD-10/CPT selection and post‑procedure notes. Teams report faster chart closure and fewer denials.\n\n![Cath lab workflow dashboard](/lovable-uploads/6ae429b1-f16f-4432-865d-4602f85e5701.png)",
        faqs: [
          { question: "Does it handle procedure variants?", answer: "Yes—templates support stents, atherectomy, and other variants with customizable fields." },
          { question: "Can it work without EHR integration?", answer: "Yes, standalone mode is available with export options and later integration when ready." }
        ],
      },
      {
        slug: "preventive-cardiology-followups",
        title: "Preventive Cardiology: Automating Follow‑Ups",
        excerpt: "How AI agents reduce leakage with reminders and education across statins, BP logs, and lifestyle programs.",
        date: "2025-07-20",
        readingTime: "5 min",
        image: "/lovable-uploads/df7934ec-611f-45ea-a427-7d8c306fb983.png",
        imageAlt: "Preventive cardiology automation",
        content:
          "AI phone/chat agents automate evidence‑based check‑ins, labs reminders, and education. Clinicians retain full control while agents reduce no‑shows and improve adherence.\n\n![Follow-up automation](/lovable-uploads/df7934ec-611f-45ea-a427-7d8c306fb983.png)",
        faqs: [
          { question: "How customizable are scripts?", answer: "Scripts and escalation rules are configurable per specialty and clinic." },
          { question: "What about language support?", answer: "60+ languages with clinician‑approved templates and translations." }
        ],
      },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    description: "Document faster with visual cues, accurate lesion mapping, and patient education automation.",
    tags: [],
    posts: [
      {
        slug: "derm-visit-efficiency",
        title: "Dermatology Visits: Efficiency without Losing Rapport",
        excerpt: "Ambient scribing captures morphology and distribution language while you stay focused on the exam.",
        date: "2025-07-28",
        readingTime: "4 min",
        image: "/lovable-uploads/b9b4bd49-9bf0-41d3-9eae-51ed07de5c66.png",
        imageAlt: "Dermatology visit efficiency",
        content:
          "For high‑throughput clinics, AI scribe captures morphology, distribution, and modifiers consistently. Post‑visit instructions and follow‑ups are generated in a click.\n\n![Dermatology mapping](/lovable-uploads/b9b4bd49-9bf0-41d3-9eae-51ed07de5c66.png)",
        faqs: [
          { question: "Does it support image references?", answer: "Yes—image links can be referenced in notes; storage depends on your setup." },
        ],
      },
    ],
  },
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    description: "Maintain presence in sensitive conversations with accurate DAP/SOAP notes and coding.",
    tags: [],
    posts: [
      {
        slug: "phq9-gad7-integrations",
        title: "Integrating PHQ‑9 and GAD‑7 Seamlessly",
        excerpt: "Capture validated assessments and clinical nuance without breaking eye contact.",
        date: "2025-07-15",
        readingTime: "7 min",
        image: "/lovable-uploads/081c19bb-5cba-42ca-9e09-703a44940a01.png",
        imageAlt: "Behavioral health assessments integration",
        content:
          "The scribe records scores, context, and safety checks while clinicians remain fully present. Letters and care plans are ready to sign at the end of the session.\n\n![Assessments integration](/lovable-uploads/081c19bb-5cba-42ca-9e09-703a44940a01.png)",
        faqs: [
          { question: "Is safety language handled carefully?", answer: "Yes—templates emphasize risk assessment and escalation pathways." },
        ],
      },
    ],
  },
];
