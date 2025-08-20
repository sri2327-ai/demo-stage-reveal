export interface MedicalRoot {
  root: string;
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

export const medicalRoots: MedicalRoot[] = [
  {
    root: "cardi/o",
    meaning: "heart",
    origin: "Greek",
    examples: [
      { word: "cardiology", definition: "study of the heart" },
      { word: "cardiomyopathy", definition: "heart muscle disease" },
      { word: "cardiovascular", definition: "relating to heart and blood vessels" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["cardiac", "coronary"],
    clinicalContext: "Central root word for all heart-related medical terminology"
  },
  {
    root: "dermat/o",
    meaning: "skin",
    origin: "Greek",
    examples: [
      { word: "dermatology", definition: "study of skin" },
      { word: "dermatitis", definition: "skin inflammation" },
      { word: "dermatophyte", definition: "skin fungus" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["cutaneous", "integumentary"],
    clinicalContext: "Essential for all skin-related medical conditions and treatments"
  },
  {
    root: "gastr/o",
    meaning: "stomach",
    origin: "Greek",
    examples: [
      { word: "gastritis", definition: "stomach inflammation" },
      { word: "gastroenterology", definition: "study of stomach and intestines" },
      { word: "gastropathy", definition: "stomach disease" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["stomach", "gastric"],
    clinicalContext: "Fundamental for digestive system medical terminology"
  },
  {
    root: "hemat/o",
    meaning: "blood",
    origin: "Greek",
    examples: [
      { word: "hematology", definition: "study of blood" },
      { word: "hematoma", definition: "blood collection/bruise" },
      { word: "hematuria", definition: "blood in urine" }
    ],
    specialty: "Hematology",
    relatedTerms: ["blood", "sanguine"],
    clinicalContext: "Critical for blood-related disorders and conditions"
  },
  {
    root: "nephr/o",
    meaning: "kidney",
    origin: "Greek",
    examples: [
      { word: "nephrology", definition: "study of kidneys" },
      { word: "nephritis", definition: "kidney inflammation" },
      { word: "nephropathy", definition: "kidney disease" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["renal", "kidney"],
    clinicalContext: "Essential for kidney and urinary system terminology"
  },
  {
    root: "neur/o",
    meaning: "nerve",
    origin: "Greek",
    examples: [
      { word: "neurology", definition: "study of nerves" },
      { word: "neuritis", definition: "nerve inflammation" },
      { word: "neuropathy", definition: "nerve disease" }
    ],
    specialty: "Neurology",
    relatedTerms: ["neural", "nervous"],
    clinicalContext: "Fundamental for nervous system medical terminology"
  },
  {
    root: "oste/o",
    meaning: "bone",
    origin: "Greek",
    examples: [
      { word: "osteoporosis", definition: "bone thinning condition" },
      { word: "osteomyelitis", definition: "bone marrow inflammation" },
      { word: "osteoarthritis", definition: "bone and joint inflammation" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["skeletal", "osseous"],
    clinicalContext: "Central to bone and skeletal system medical terminology"
  },
  {
    root: "pulmon/o",
    meaning: "lung",
    origin: "Latin",
    examples: [
      { word: "pulmonology", definition: "study of lungs" },
      { word: "pulmonary", definition: "relating to lungs" },
      { word: "pneumonia", definition: "lung infection" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["respiratory", "pneumatic"],
    clinicalContext: "Essential for respiratory system medical terminology"
  },
  {
    root: "rhin/o",
    meaning: "nose",
    origin: "Greek",
    examples: [
      { word: "rhinitis", definition: "nose inflammation" },
      { word: "rhinoplasty", definition: "nose reconstruction" },
      { word: "rhinorrhea", definition: "nasal discharge" }
    ],
    specialty: "ENT",
    relatedTerms: ["nasal", "nose"],
    clinicalContext: "Important for nasal and upper respiratory conditions"
  },
  {
    root: "arthr/o",
    meaning: "joint",
    origin: "Greek",
    examples: [
      { word: "arthritis", definition: "joint inflammation" },
      { word: "arthroscopy", definition: "joint examination" },
      { word: "arthroplasty", definition: "joint reconstruction" }
    ],
    specialty: "Rheumatology",
    relatedTerms: ["joint", "articulation"],
    clinicalContext: "Central to joint-related medical conditions and procedures"
  },
  {
    root: "ophthalm/o",
    meaning: "eye",
    origin: "Greek",
    examples: [
      { word: "ophthalmology", definition: "study of eyes" },
      { word: "ophthalmitis", definition: "eye inflammation" },
      { word: "ophthalmoscope", definition: "eye examination device" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["ocular", "visual"],
    clinicalContext: "Essential for eye-related medical terminology"
  },
  {
    root: "ot/o",
    meaning: "ear",
    origin: "Greek",
    examples: [
      { word: "otology", definition: "study of ears" },
      { word: "otitis", definition: "ear inflammation" },
      { word: "otoscopy", definition: "ear examination" }
    ],
    specialty: "ENT",
    relatedTerms: ["aural", "auditory"],
    clinicalContext: "Important for ear-related medical conditions"
  },
  {
    root: "hepat/o",
    meaning: "liver",
    origin: "Greek",
    examples: [
      { word: "hepatitis", definition: "liver inflammation" },
      { word: "hepatology", definition: "study of liver" },
      { word: "hepatomegaly", definition: "liver enlargement" }
    ],
    specialty: "Hepatology",
    relatedTerms: ["liver", "hepatic"],
    clinicalContext: "Central to liver-related medical terminology"
  },
  {
    root: "my/o",
    meaning: "muscle",
    origin: "Greek",
    examples: [
      { word: "myalgia", definition: "muscle pain" },
      { word: "myopathy", definition: "muscle disease" },
      { word: "myocarditis", definition: "heart muscle inflammation" }
    ],
    specialty: "Neurology",
    relatedTerms: ["muscular", "myosis"],
    clinicalContext: "Essential for muscle-related medical conditions"
  },
  {
    root: "path/o",
    meaning: "disease",
    origin: "Greek",
    examples: [
      { word: "pathology", definition: "study of disease" },
      { word: "pathogen", definition: "disease-causing agent" },
      { word: "psychopath", definition: "mental disease condition" }
    ],
    specialty: "Pathology",
    relatedTerms: ["disease", "illness"],
    clinicalContext: "Fundamental for disease-related medical terminology"
  },
  {
    root: "psych/o",
    meaning: "mind, mental",
    origin: "Greek",
    examples: [
      { word: "psychology", definition: "study of mind" },
      { word: "psychiatry", definition: "treatment of mental disorders" },
      { word: "psychosis", definition: "mental disorder condition" }
    ],
    specialty: "Psychiatry",
    relatedTerms: ["mental", "cognitive"],
    clinicalContext: "Central to mental health and psychological terminology"
  },
  {
    root: "angi/o",
    meaning: "blood vessel",
    origin: "Greek",
    examples: [
      { word: "angiography", definition: "blood vessel imaging" },
      { word: "angioplasty", definition: "blood vessel repair" },
      { word: "angiopathy", definition: "blood vessel disease" }
    ],
    specialty: "Vascular Surgery",
    relatedTerms: ["vascular", "vessel"],
    clinicalContext: "Important for vascular system medical terminology"
  },
  {
    root: "enter/o",
    meaning: "intestine",
    origin: "Greek",
    examples: [
      { word: "enteritis", definition: "intestine inflammation" },
      { word: "gastroenterology", definition: "study of stomach and intestines" },
      { word: "enteropathy", definition: "intestine disease" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["intestinal", "bowel"],
    clinicalContext: "Essential for intestinal and digestive system terminology"
  },
  {
    root: "col/o",
    meaning: "colon",
    origin: "Greek",
    examples: [
      { word: "colitis", definition: "colon inflammation" },
      { word: "colonoscopy", definition: "colon examination" },
      { word: "colostomy", definition: "colon opening" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["colonic", "large intestine"],
    clinicalContext: "Important for large intestine medical terminology"
  },
  {
    root: "cyan/o",
    meaning: "blue",
    origin: "Greek",
    examples: [
      { word: "cyanosis", definition: "blue discoloration" },
      { word: "cyanotic", definition: "having blue color" },
      { word: "acrocyanosis", definition: "blue extremities" }
    ],
    specialty: "General",
    relatedTerms: ["blue", "hypoxic"],
    clinicalContext: "Used to describe blue discoloration in medical conditions"
  },
  {
    root: "erythr/o",
    meaning: "red",
    origin: "Greek",
    examples: [
      { word: "erythrocyte", definition: "red blood cell" },
      { word: "erythema", definition: "redness of skin" },
      { word: "erythropoiesis", definition: "red blood cell formation" }
    ],
    specialty: "Hematology",
    relatedTerms: ["red", "rubor"],
    clinicalContext: "Important for describing red coloration and blood cells"
  },
  {
    root: "leuk/o",
    meaning: "white",
    origin: "Greek",
    examples: [
      { word: "leukocyte", definition: "white blood cell" },
      { word: "leukemia", definition: "white blood cell cancer" },
      { word: "leukoplakia", definition: "white patches" }
    ],
    specialty: "Hematology",
    relatedTerms: ["white", "albino"],
    clinicalContext: "Essential for white blood cell and white coloration terminology"
  },
  {
    root: "melan/o",
    meaning: "black, dark",
    origin: "Greek",
    examples: [
      { word: "melanoma", definition: "dark tumor" },
      { word: "melanin", definition: "dark pigment" },
      { word: "melena", definition: "dark/black stool" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["black", "dark", "pigment"],
    clinicalContext: "Important for pigmentation and dark-colored conditions"
  },
  {
    root: "xanth/o",
    meaning: "yellow",
    origin: "Greek",
    examples: [
      { word: "xanthoma", definition: "yellow tumor" },
      { word: "xanthosis", definition: "yellow discoloration" },
      { word: "xanthelasma", definition: "yellow eyelid deposits" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["yellow", "jaundice"],
    clinicalContext: "Used to describe yellow discoloration in medical conditions"
  },
  {
    root: "therm/o",
    meaning: "heat, temperature",
    origin: "Greek",
    examples: [
      { word: "thermometer", definition: "temperature measuring device" },
      { word: "hypothermia", definition: "low body temperature" },
      { word: "hyperthermia", definition: "high body temperature" }
    ],
    specialty: "General",
    relatedTerms: ["temperature", "fever"],
    clinicalContext: "Essential for temperature-related medical terminology"
  },
  {
    root: "chron/o",
    meaning: "time",
    origin: "Greek",
    examples: [
      { word: "chronic", definition: "lasting a long time" },
      { word: "chronology", definition: "time sequence" },
      { word: "synchronous", definition: "at the same time" }
    ],
    specialty: "General",
    relatedTerms: ["time", "duration"],
    clinicalContext: "Important for describing duration of medical conditions"
  },
  {
    root: "morph/o",
    meaning: "form, shape",
    origin: "Greek",
    examples: [
      { word: "morphology", definition: "study of form" },
      { word: "polymorphic", definition: "many forms" },
      { word: "amorphous", definition: "without form" }
    ],
    specialty: "Pathology",
    relatedTerms: ["form", "shape", "structure"],
    clinicalContext: "Used to describe shape and form in medical contexts"
  },
  {
    root: "phag/o",
    meaning: "eating, swallowing",
    origin: "Greek",
    examples: [
      { word: "macrophage", definition: "large eating cell" },
      { word: "dysphagia", definition: "difficulty swallowing" },
      { word: "phagocytosis", definition: "cell eating process" }
    ],
    specialty: "Immunology",
    relatedTerms: ["eating", "consuming"],
    clinicalContext: "Important for cellular processes and swallowing disorders"
  },
  {
    root: "tox/o",
    meaning: "poison",
    origin: "Greek",
    examples: [
      { word: "toxicology", definition: "study of poisons" },
      { word: "intoxication", definition: "poisoning" },
      { word: "detoxification", definition: "removal of poisons" }
    ],
    specialty: "Toxicology",
    relatedTerms: ["poison", "toxic"],
    clinicalContext: "Essential for poison-related medical terminology"
  },
  {
    root: "gen/o",
    meaning: "origin, production",
    origin: "Greek",
    examples: [
      { word: "genetics", definition: "study of heredity" },
      { word: "pathogen", definition: "disease producer" },
      { word: "carcinogen", definition: "cancer producer" }
    ],
    specialty: "Genetics",
    relatedTerms: ["origin", "production", "birth"],
    clinicalContext: "Important for genetic and origin-related terminology"
  },
  {
    root: "lith/o",
    meaning: "stone",
    origin: "Greek",
    examples: [
      { word: "nephrolithiasis", definition: "kidney stones" },
      { word: "cholelithiasis", definition: "gallstones" },
      { word: "lithotripsy", definition: "stone crushing" }
    ],
    specialty: "Urology",
    relatedTerms: ["stone", "calculus"],
    clinicalContext: "Essential for stone-related medical conditions"
  },
  {
    root: "malac/o",
    meaning: "softening",
    origin: "Greek",
    examples: [
      { word: "osteomalacia", definition: "bone softening" },
      { word: "chondromalacia", definition: "cartilage softening" },
      { word: "malacia", definition: "abnormal softening" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["softening", "soft"],
    clinicalContext: "Used to describe abnormal softening of tissues"
  },
  {
    root: "scler/o",
    meaning: "hardening",
    origin: "Greek",
    examples: [
      { word: "sclerosis", definition: "hardening condition" },
      { word: "arteriosclerosis", definition: "artery hardening" },
      { word: "scleroderma", definition: "skin hardening" }
    ],
    specialty: "General",
    relatedTerms: ["hardening", "hard"],
    clinicalContext: "Important for describing hardening conditions"
  },
  {
    root: "necr/o",
    meaning: "death",
    origin: "Greek",
    examples: [
      { word: "necrosis", definition: "tissue death" },
      { word: "necrotizing", definition: "causing tissue death" },
      { word: "necrotic", definition: "relating to tissue death" }
    ],
    specialty: "Pathology",
    relatedTerms: ["death", "dead tissue"],
    clinicalContext: "Critical for describing tissue death conditions"
  },
  {
    root: "hist/o",
    meaning: "tissue",
    origin: "Greek",
    examples: [
      { word: "histology", definition: "study of tissues" },
      { word: "histopathology", definition: "study of diseased tissues" },
      { word: "histocompatibility", definition: "tissue compatibility" }
    ],
    specialty: "Pathology",
    relatedTerms: ["tissue", "cellular"],
    clinicalContext: "Essential for tissue-related medical terminology"
  },
  {
    root: "cyt/o",
    meaning: "cell",
    origin: "Greek",
    examples: [
      { word: "cytology", definition: "study of cells" },
      { word: "cytoplasm", definition: "cell contents" },
      { word: "cytotoxic", definition: "cell-killing" }
    ],
    specialty: "Pathology",
    relatedTerms: ["cell", "cellular"],
    clinicalContext: "Fundamental for cellular medical terminology"
  },
  {
    root: "blast/o",
    meaning: "embryonic, immature",
    origin: "Greek",
    examples: [
      { word: "blastocyst", definition: "embryonic cell mass" },
      { word: "osteoblast", definition: "bone-forming cell" },
      { word: "lymphoblast", definition: "immature lymphocyte" }
    ],
    specialty: "Hematology",
    relatedTerms: ["immature", "embryonic"],
    clinicalContext: "Important for describing immature cells"
  },
  {
    root: "plasm/o",
    meaning: "formation, plasma",
    origin: "Greek",
    examples: [
      { word: "plasma", definition: "blood liquid portion" },
      { word: "neoplasm", definition: "new formation/tumor" },
      { word: "protoplasm", definition: "cell substance" }
    ],
    specialty: "Hematology",
    relatedTerms: ["formation", "plasma"],
    clinicalContext: "Essential for blood and formation terminology"
  },
  {
    root: "soma/t/o",
    meaning: "body",
    origin: "Greek",
    examples: [
      { word: "somatic", definition: "relating to body" },
      { word: "psychosomatic", definition: "mind-body interaction" },
      { word: "chromosome", definition: "colored body" }
    ],
    specialty: "General",
    relatedTerms: ["body", "physical"],
    clinicalContext: "Important for body-related medical terminology"
  },
  {
    root: "trophy/o",
    meaning: "nourishment, growth",
    origin: "Greek",
    examples: [
      { word: "atrophy", definition: "lack of growth" },
      { word: "hypertrophy", definition: "excessive growth" },
      { word: "dystrophy", definition: "abnormal growth" }
    ],
    specialty: "General",
    relatedTerms: ["nourishment", "growth"],
    clinicalContext: "Essential for growth and nutrition terminology"
  },
  {
    root: "kerat/o",
    meaning: "cornea, horny tissue",
    origin: "Greek",
    examples: [
      { word: "keratitis", definition: "cornea inflammation" },
      { word: "keratosis", definition: "horny tissue condition" },
      { word: "keratin", definition: "horny protein" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["cornea", "horny"],
    clinicalContext: "Important for eye and skin conditions"
  }
];

export const getAllRoots = (): MedicalRoot[] => {
  return medicalRoots;
};

export const searchRoots = (query: string): MedicalRoot[] => {
  const lowercaseQuery = query.toLowerCase();
  return medicalRoots.filter(
    (root) =>
      root.root.toLowerCase().includes(lowercaseQuery) ||
      root.meaning.toLowerCase().includes(lowercaseQuery) ||
      root.examples.some(example => 
        example.word.toLowerCase().includes(lowercaseQuery) ||
        example.definition.toLowerCase().includes(lowercaseQuery)
      ) ||
      root.specialty.toLowerCase().includes(lowercaseQuery) ||
      root.clinicalContext.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRootsByLetter = (letter: string): MedicalRoot[] => {
  return medicalRoots.filter(
    (root) => root.root.charAt(0).toUpperCase() === letter.toUpperCase()
  );
};

export const getRootByName = (name: string): MedicalRoot | undefined => {
  return medicalRoots.find(
    (root) => root.root.toLowerCase() === name.toLowerCase()
  );
};