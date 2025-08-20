export interface MedicalSuffix {
  suffix: string;
  meaning: string;
  origin: string;
  examples: Array<{
    word: string;
    definition: string;
  }>;
  specialty: string;
  relatedTerms: string[];
  clinicalContext: string;
}

export const medicalSuffixes: MedicalSuffix[] = [
  {
    suffix: "-algia",
    meaning: "pain",
    origin: "Greek",
    examples: [
      { word: "neuralgia", definition: "nerve pain" },
      { word: "myalgia", definition: "muscle pain" },
      { word: "arthralgia", definition: "joint pain" }
    ],
    specialty: "Pain Management",
    relatedTerms: ["-odynia", "-pain"],
    clinicalContext: "Essential suffix for describing various types of pain conditions"
  },
  {
    suffix: "-emia",
    meaning: "blood condition",
    origin: "Greek",
    examples: [
      { word: "anemia", definition: "lack of blood/red blood cells" },
      { word: "leukemia", definition: "white blood cell cancer" },
      { word: "hyperglycemia", definition: "high blood sugar" }
    ],
    specialty: "Hematology",
    relatedTerms: ["-emia", "blood-"],
    clinicalContext: "Used to describe various blood disorders and conditions"
  },
  {
    suffix: "-ectomy",
    meaning: "surgical removal",
    origin: "Greek",
    examples: [
      { word: "appendectomy", definition: "removal of appendix" },
      { word: "hysterectomy", definition: "removal of uterus" },
      { word: "mastectomy", definition: "removal of breast" }
    ],
    specialty: "Surgery",
    relatedTerms: ["-excision", "removal"],
    clinicalContext: "Standard suffix for surgical removal procedures"
  },
  {
    suffix: "-itis",
    meaning: "inflammation",
    origin: "Greek",
    examples: [
      { word: "appendicitis", definition: "inflammation of appendix" },
      { word: "arthritis", definition: "inflammation of joints" },
      { word: "bronchitis", definition: "inflammation of bronchi" }
    ],
    specialty: "General",
    relatedTerms: ["inflammation", "swelling"],
    clinicalContext: "Most commonly used suffix to indicate inflammatory conditions"
  },
  {
    suffix: "-osis",
    meaning: "condition, disease, process",
    origin: "Greek",
    examples: [
      { word: "cirrhosis", definition: "liver scarring condition" },
      { word: "osteoporosis", definition: "bone thinning condition" },
      { word: "thrombosis", definition: "blood clot formation" }
    ],
    specialty: "General",
    relatedTerms: ["-condition", "-disease"],
    clinicalContext: "Used to describe chronic conditions and disease processes"
  },
  {
    suffix: "-pathy",
    meaning: "disease, disorder",
    origin: "Greek",
    examples: [
      { word: "cardiomyopathy", definition: "heart muscle disease" },
      { word: "neuropathy", definition: "nerve disease" },
      { word: "nephropathy", definition: "kidney disease" }
    ],
    specialty: "General",
    relatedTerms: ["-disease", "-disorder"],
    clinicalContext: "Indicates pathological conditions affecting organs or systems"
  },
  {
    suffix: "-ology",
    meaning: "study of",
    origin: "Greek",
    examples: [
      { word: "cardiology", definition: "study of the heart" },
      { word: "dermatology", definition: "study of the skin" },
      { word: "oncology", definition: "study of cancer" }
    ],
    specialty: "Medical Specialties",
    relatedTerms: ["-study", "science"],
    clinicalContext: "Used to name medical specialties and fields of study"
  },
  {
    suffix: "-oma",
    meaning: "tumor, mass",
    origin: "Greek",
    examples: [
      { word: "carcinoma", definition: "cancerous tumor" },
      { word: "hematoma", definition: "blood mass/bruise" },
      { word: "lipoma", definition: "fatty tumor" }
    ],
    specialty: "Oncology",
    relatedTerms: ["tumor", "mass", "growth"],
    clinicalContext: "Critical in oncology for describing various types of growths"
  },
  {
    suffix: "-emia",
    meaning: "blood condition",
    origin: "Greek",
    examples: [
      { word: "bacteremia", definition: "bacteria in blood" },
      { word: "septicemia", definition: "infection in blood" },
      { word: "hypoxemia", definition: "low oxygen in blood" }
    ],
    specialty: "Hematology",
    relatedTerms: ["blood condition"],
    clinicalContext: "Essential for describing blood-related pathological conditions"
  },
  {
    suffix: "-phobia",
    meaning: "fear of",
    origin: "Greek",
    examples: [
      { word: "agoraphobia", definition: "fear of open spaces" },
      { word: "claustrophobia", definition: "fear of confined spaces" },
      { word: "hemophobia", definition: "fear of blood" }
    ],
    specialty: "Psychiatry",
    relatedTerms: ["fear", "anxiety"],
    clinicalContext: "Used in psychiatric diagnosis of phobic disorders"
  },
  {
    suffix: "-philia",
    meaning: "attraction to, love of",
    origin: "Greek",
    examples: [
      { word: "hemophilia", definition: "love of bleeding (bleeding disorder)" },
      { word: "necrophilia", definition: "attraction to death" },
      { word: "pedophilia", definition: "attraction to children" }
    ],
    specialty: "Psychiatry",
    relatedTerms: ["attraction", "affinity"],
    clinicalContext: "Used in psychiatric and medical terminology for attractions or affinities"
  },
  {
    suffix: "-plasia",
    meaning: "formation, development",
    origin: "Greek",
    examples: [
      { word: "hyperplasia", definition: "excessive cell formation" },
      { word: "dysplasia", definition: "abnormal cell development" },
      { word: "aplasia", definition: "lack of cell development" }
    ],
    specialty: "Pathology",
    relatedTerms: ["formation", "development"],
    clinicalContext: "Important in describing cellular development abnormalities"
  },
  {
    suffix: "-pnea",
    meaning: "breathing",
    origin: "Greek",
    examples: [
      { word: "dyspnea", definition: "difficult breathing" },
      { word: "apnea", definition: "absence of breathing" },
      { word: "tachypnea", definition: "rapid breathing" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["breathing", "respiration"],
    clinicalContext: "Essential for respiratory condition terminology"
  },
  {
    suffix: "-scopy",
    meaning: "examination, viewing",
    origin: "Greek",
    examples: [
      { word: "endoscopy", definition: "internal examination" },
      { word: "colonoscopy", definition: "colon examination" },
      { word: "arthroscopy", definition: "joint examination" }
    ],
    specialty: "Diagnostics",
    relatedTerms: ["examination", "viewing"],
    clinicalContext: "Used for diagnostic and therapeutic procedures"
  },
  {
    suffix: "-stomy",
    meaning: "surgical opening",
    origin: "Greek",
    examples: [
      { word: "tracheostomy", definition: "opening in trachea" },
      { word: "colostomy", definition: "opening in colon" },
      { word: "gastrostomy", definition: "opening in stomach" }
    ],
    specialty: "Surgery",
    relatedTerms: ["opening", "stoma"],
    clinicalContext: "Used for surgical procedures creating openings"
  },
  {
    suffix: "-tomy",
    meaning: "cutting, incision",
    origin: "Greek",
    examples: [
      { word: "laparotomy", definition: "abdominal incision" },
      { word: "craniotomy", definition: "skull incision" },
      { word: "thoracotomy", definition: "chest incision" }
    ],
    specialty: "Surgery",
    relatedTerms: ["incision", "cutting"],
    clinicalContext: "Standard surgical suffix for incision procedures"
  },
  {
    suffix: "-trophy",
    meaning: "growth, nourishment",
    origin: "Greek",
    examples: [
      { word: "atrophy", definition: "lack of growth/wasting" },
      { word: "hypertrophy", definition: "excessive growth" },
      { word: "dystrophy", definition: "abnormal growth" }
    ],
    specialty: "General",
    relatedTerms: ["growth", "nutrition"],
    clinicalContext: "Describes growth patterns in tissues and organs"
  },
  {
    suffix: "-uria",
    meaning: "urine condition",
    origin: "Greek",
    examples: [
      { word: "polyuria", definition: "excessive urination" },
      { word: "hematuria", definition: "blood in urine" },
      { word: "proteinuria", definition: "protein in urine" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["urine", "urination"],
    clinicalContext: "Essential for describing urinary system disorders"
  },
  {
    suffix: "-oid",
    meaning: "resembling, like",
    origin: "Greek",
    examples: [
      { word: "thyroid", definition: "shield-like gland" },
      { word: "steroid", definition: "solid-like compound" },
      { word: "android", definition: "man-like" }
    ],
    specialty: "General",
    relatedTerms: ["like", "resembling"],
    clinicalContext: "Used to describe structures or substances that resemble something"
  },
  {
    suffix: "-genesis",
    meaning: "origin, formation",
    origin: "Greek",
    examples: [
      { word: "pathogenesis", definition: "disease formation" },
      { word: "carcinogenesis", definition: "cancer formation" },
      { word: "osteogenesis", definition: "bone formation" }
    ],
    specialty: "Pathology",
    relatedTerms: ["formation", "origin"],
    clinicalContext: "Describes the process of disease or structure formation"
  },
  {
    suffix: "-lysis",
    meaning: "breakdown, destruction",
    origin: "Greek",
    examples: [
      { word: "hemolysis", definition: "breakdown of red blood cells" },
      { word: "dialysis", definition: "separation through breakdown" },
      { word: "paralysis", definition: "breakdown of movement" }
    ],
    specialty: "General",
    relatedTerms: ["breakdown", "destruction"],
    clinicalContext: "Indicates destructive or separating processes"
  },
  {
    suffix: "-megaly",
    meaning: "enlargement",
    origin: "Greek",
    examples: [
      { word: "cardiomegaly", definition: "heart enlargement" },
      { word: "hepatomegaly", definition: "liver enlargement" },
      { word: "splenomegaly", definition: "spleen enlargement" }
    ],
    specialty: "General",
    relatedTerms: ["enlargement", "big"],
    clinicalContext: "Used to describe abnormal organ enlargement"
  },
  {
    suffix: "-rrhea",
    meaning: "flow, discharge",
    origin: "Greek",
    examples: [
      { word: "diarrhea", definition: "through flow (loose stools)" },
      { word: "amenorrhea", definition: "absence of menstrual flow" },
      { word: "rhinorrhea", definition: "nasal discharge" }
    ],
    specialty: "General",
    relatedTerms: ["flow", "discharge"],
    clinicalContext: "Describes abnormal flows or discharges from body"
  },
  {
    suffix: "-rrhage",
    meaning: "bleeding, burst forth",
    origin: "Greek",
    examples: [
      { word: "hemorrhage", definition: "blood bursting forth" },
      { word: "menorrhagia", definition: "excessive menstrual bleeding" },
      { word: "epistaxis", definition: "nosebleed" }
    ],
    specialty: "General",
    relatedTerms: ["bleeding", "burst"],
    clinicalContext: "Critical for describing bleeding conditions"
  },
  {
    suffix: "-therapy",
    meaning: "treatment",
    origin: "Greek",
    examples: [
      { word: "chemotherapy", definition: "chemical treatment" },
      { word: "radiotherapy", definition: "radiation treatment" },
      { word: "physiotherapy", definition: "physical treatment" }
    ],
    specialty: "Treatment",
    relatedTerms: ["treatment", "cure"],
    clinicalContext: "Used for various treatment modalities"
  },
  {
    suffix: "-plasty",
    meaning: "surgical repair, reconstruction",
    origin: "Greek",
    examples: [
      { word: "rhinoplasty", definition: "nose reconstruction" },
      { word: "arthroplasty", definition: "joint reconstruction" },
      { word: "angioplasty", definition: "blood vessel repair" }
    ],
    specialty: "Plastic Surgery",
    relatedTerms: ["repair", "reconstruction"],
    clinicalContext: "Standard suffix for reconstructive surgical procedures"
  },
  {
    suffix: "-graphy",
    meaning: "recording, writing",
    origin: "Greek",
    examples: [
      { word: "radiography", definition: "X-ray recording" },
      { word: "electrocardiography", definition: "heart electrical recording" },
      { word: "mammography", definition: "breast X-ray recording" }
    ],
    specialty: "Radiology",
    relatedTerms: ["recording", "imaging"],
    clinicalContext: "Used for diagnostic imaging procedures"
  },
  {
    suffix: "-gram",
    meaning: "record, image",
    origin: "Greek",
    examples: [
      { word: "electrocardiogram", definition: "heart electrical record" },
      { word: "mammogram", definition: "breast X-ray image" },
      { word: "angiogram", definition: "blood vessel image" }
    ],
    specialty: "Radiology",
    relatedTerms: ["record", "image"],
    clinicalContext: "Refers to the actual image or record produced"
  },
  {
    suffix: "-phage",
    meaning: "eating, consuming",
    origin: "Greek",
    examples: [
      { word: "macrophage", definition: "large eating cell" },
      { word: "bacteriophage", definition: "bacteria-eating virus" },
      { word: "phagocyte", definition: "eating cell" }
    ],
    specialty: "Immunology",
    relatedTerms: ["eating", "consuming"],
    clinicalContext: "Important in immunology and cellular biology"
  },
  {
    suffix: "-philia",
    meaning: "attraction, affinity",
    origin: "Greek",
    examples: [
      { word: "eosinophilia", definition: "increased eosinophils" },
      { word: "neutrophilia", definition: "increased neutrophils" },
      { word: "basophilia", definition: "increased basophils" }
    ],
    specialty: "Hematology",
    relatedTerms: ["increase", "affinity"],
    clinicalContext: "Used to describe increased levels of blood cells"
  },
  {
    suffix: "-penia",
    meaning: "deficiency, lack",
    origin: "Greek",
    examples: [
      { word: "leukopenia", definition: "lack of white blood cells" },
      { word: "thrombocytopenia", definition: "lack of platelets" },
      { word: "neutropenia", definition: "lack of neutrophils" }
    ],
    specialty: "Hematology",
    relatedTerms: ["deficiency", "lack"],
    clinicalContext: "Critical for describing blood cell deficiencies"
  },
  {
    suffix: "-kinesis",
    meaning: "movement, motion",
    origin: "Greek",
    examples: [
      { word: "bradykinesia", definition: "slow movement" },
      { word: "dyskinesia", definition: "abnormal movement" },
      { word: "akinesia", definition: "absence of movement" }
    ],
    specialty: "Neurology",
    relatedTerms: ["movement", "motion"],
    clinicalContext: "Important in neurological movement disorders"
  },
  {
    suffix: "-lexia",
    meaning: "reading, words",
    origin: "Greek",
    examples: [
      { word: "dyslexia", definition: "difficulty reading" },
      { word: "alexia", definition: "inability to read" },
      { word: "hyperlexia", definition: "advanced reading ability" }
    ],
    specialty: "Neurology",
    relatedTerms: ["reading", "language"],
    clinicalContext: "Used in learning and language disorders"
  },
  {
    suffix: "-meter",
    meaning: "measuring device",
    origin: "Greek",
    examples: [
      { word: "thermometer", definition: "temperature measuring device" },
      { word: "sphygmomanometer", definition: "blood pressure measuring device" },
      { word: "spirometer", definition: "lung function measuring device" }
    ],
    specialty: "Medical Devices",
    relatedTerms: ["measurement", "device"],
    clinicalContext: "Used for medical measuring instruments"
  },
  {
    suffix: "-metry",
    meaning: "measurement process",
    origin: "Greek",
    examples: [
      { word: "spirometry", definition: "lung function measurement" },
      { word: "optometry", definition: "vision measurement" },
      { word: "audiometry", definition: "hearing measurement" }
    ],
    specialty: "Diagnostics",
    relatedTerms: ["measurement", "testing"],
    clinicalContext: "Refers to the process of measuring biological functions"
  },
  {
    suffix: "-centesis",
    meaning: "puncture, tap",
    origin: "Greek",
    examples: [
      { word: "paracentesis", definition: "abdominal puncture" },
      { word: "thoracentesis", definition: "chest puncture" },
      { word: "amniocentesis", definition: "amniotic fluid puncture" }
    ],
    specialty: "Procedures",
    relatedTerms: ["puncture", "tap"],
    clinicalContext: "Used for diagnostic and therapeutic puncture procedures"
  },
  {
    suffix: "-pexy",
    meaning: "surgical fixation",
    origin: "Greek",
    examples: [
      { word: "nephropexy", definition: "kidney fixation" },
      { word: "hysteropexy", definition: "uterus fixation" },
      { word: "orchiopexy", definition: "testicle fixation" }
    ],
    specialty: "Surgery",
    relatedTerms: ["fixation", "anchoring"],
    clinicalContext: "Used for surgical procedures that fix organs in position"
  }
];

export const getAllSuffixes = (): MedicalSuffix[] => {
  return medicalSuffixes;
};

export const searchSuffixes = (query: string): MedicalSuffix[] => {
  const lowercaseQuery = query.toLowerCase();
  return medicalSuffixes.filter(
    (suffix) =>
      suffix.suffix.toLowerCase().includes(lowercaseQuery) ||
      suffix.meaning.toLowerCase().includes(lowercaseQuery) ||
      suffix.examples.some(example => 
        example.word.toLowerCase().includes(lowercaseQuery) ||
        example.definition.toLowerCase().includes(lowercaseQuery)
      ) ||
      suffix.specialty.toLowerCase().includes(lowercaseQuery) ||
      suffix.clinicalContext.toLowerCase().includes(lowercaseQuery)
  );
};

export const getSuffixesByLetter = (letter: string): MedicalSuffix[] => {
  return medicalSuffixes.filter(
    (suffix) => suffix.suffix.charAt(1).toUpperCase() === letter.toUpperCase()
  );
};

export const getSuffixByName = (name: string): MedicalSuffix | undefined => {
  return medicalSuffixes.find(
    (suffix) => suffix.suffix.toLowerCase() === name.toLowerCase()
  );
};