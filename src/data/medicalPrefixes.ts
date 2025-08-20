export interface MedicalPrefix {
  prefix: string;
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

export const medicalPrefixes: MedicalPrefix[] = [
  {
    prefix: "a-, an-",
    meaning: "without, not, absence of",
    origin: "Greek",
    examples: [
      { word: "anemia", definition: "without blood (deficiency of red blood cells)" },
      { word: "apnea", definition: "without breathing" },
      { word: "asymptomatic", definition: "without symptoms" }
    ],
    specialty: "General",
    relatedTerms: ["ab-", "de-", "dis-"],
    clinicalContext: "Commonly used to describe absence of normal conditions or functions"
  },
  {
    prefix: "ab-",
    meaning: "away from, off",
    origin: "Latin",
    examples: [
      { word: "abnormal", definition: "away from normal" },
      { word: "abduction", definition: "movement away from midline" },
      { word: "abortion", definition: "termination away from full term" }
    ],
    specialty: "General",
    relatedTerms: ["a-", "de-", "ex-"],
    clinicalContext: "Used to indicate deviation or movement away from normal position or state"
  },
  {
    prefix: "ad-",
    meaning: "toward, to, near",
    origin: "Latin",
    examples: [
      { word: "adduction", definition: "movement toward midline" },
      { word: "adhesion", definition: "sticking to" },
      { word: "admission", definition: "allowing to enter" }
    ],
    specialty: "General",
    relatedTerms: ["ac-", "af-", "ap-"],
    clinicalContext: "Indicates movement or position toward something"
  },
  {
    prefix: "ante-",
    meaning: "before, in front of",
    origin: "Latin",
    examples: [
      { word: "antenatal", definition: "before birth" },
      { word: "anterior", definition: "in front of" },
      { word: "antecubital", definition: "in front of the elbow" }
    ],
    specialty: "Obstetrics",
    relatedTerms: ["pre-", "pro-", "fore-"],
    clinicalContext: "Used to describe temporal or spatial relationships"
  },
  {
    prefix: "anti-",
    meaning: "against, opposite",
    origin: "Greek",
    examples: [
      { word: "antibiotic", definition: "against bacterial life" },
      { word: "anticoagulant", definition: "against clotting" },
      { word: "antipyretic", definition: "against fever" }
    ],
    specialty: "Pharmacology",
    relatedTerms: ["contra-", "counter-"],
    clinicalContext: "Commonly used in pharmacology and treatment terminology"
  },
  {
    prefix: "auto-",
    meaning: "self",
    origin: "Greek",
    examples: [
      { word: "autoimmune", definition: "immune system attacking self" },
      { word: "autopsy", definition: "examination of self/own body" },
      { word: "autonomic", definition: "self-governing" }
    ],
    specialty: "Immunology",
    relatedTerms: ["aut-", "self-"],
    clinicalContext: "Used to describe self-directed or automatic processes"
  },
  {
    prefix: "bi-",
    meaning: "two, double",
    origin: "Latin",
    examples: [
      { word: "bilateral", definition: "on both sides" },
      { word: "biceps", definition: "two-headed muscle" },
      { word: "bipolar", definition: "having two poles/extremes" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["di-", "duo-", "twin-"],
    clinicalContext: "Describes anatomical structures or conditions involving two parts"
  },
  {
    prefix: "brady-",
    meaning: "slow",
    origin: "Greek",
    examples: [
      { word: "bradycardia", definition: "slow heart rate" },
      { word: "bradypnea", definition: "slow breathing" },
      { word: "bradykinesia", definition: "slow movement" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["slow-", "hypo-"],
    clinicalContext: "Used to describe abnormally slow physiological processes"
  },
  {
    prefix: "cardio-",
    meaning: "heart",
    origin: "Greek",
    examples: [
      { word: "cardiology", definition: "study of the heart" },
      { word: "cardiomyopathy", definition: "heart muscle disease" },
      { word: "cardiovascular", definition: "relating to heart and blood vessels" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["cardiac-", "cor-"],
    clinicalContext: "Central to all heart-related medical terminology"
  },
  {
    prefix: "contra-",
    meaning: "against, opposite",
    origin: "Latin",
    examples: [
      { word: "contraindication", definition: "condition against use" },
      { word: "contraception", definition: "against conception" },
      { word: "contralateral", definition: "on opposite side" }
    ],
    specialty: "General",
    relatedTerms: ["anti-", "counter-"],
    clinicalContext: "Used to indicate opposition or contraindication in treatment"
  },
  {
    prefix: "de-",
    meaning: "down, away from, removal",
    origin: "Latin",
    examples: [
      { word: "dehydration", definition: "removal of water" },
      { word: "depression", definition: "pressing down" },
      { word: "detoxification", definition: "removal of toxins" }
    ],
    specialty: "General",
    relatedTerms: ["dis-", "un-", "ab-"],
    clinicalContext: "Indicates removal, reduction, or reversal of conditions"
  },
  {
    prefix: "dys-",
    meaning: "difficult, painful, abnormal",
    origin: "Greek",
    examples: [
      { word: "dyspnea", definition: "difficult breathing" },
      { word: "dysphagia", definition: "difficult swallowing" },
      { word: "dysfunction", definition: "abnormal function" }
    ],
    specialty: "General",
    relatedTerms: ["mal-", "mis-"],
    clinicalContext: "Describes abnormal or impaired function of organs or systems"
  },
  {
    prefix: "endo-",
    meaning: "within, inside",
    origin: "Greek",
    examples: [
      { word: "endoscopy", definition: "looking inside" },
      { word: "endocrine", definition: "secreting within" },
      { word: "endotracheal", definition: "within the trachea" }
    ],
    specialty: "General",
    relatedTerms: ["intra-", "inter-"],
    clinicalContext: "Used to describe internal structures or procedures"
  },
  {
    prefix: "epi-",
    meaning: "upon, above, over",
    origin: "Greek",
    examples: [
      { word: "epidermis", definition: "upon the skin" },
      { word: "epidemic", definition: "upon the people" },
      { word: "epigastric", definition: "above the stomach" }
    ],
    specialty: "General",
    relatedTerms: ["supra-", "super-"],
    clinicalContext: "Describes anatomical position or widespread occurrence"
  },
  {
    prefix: "ex-",
    meaning: "out, away from",
    origin: "Latin",
    examples: [
      { word: "excision", definition: "cutting out" },
      { word: "exhale", definition: "breathe out" },
      { word: "exacerbation", definition: "making worse/bringing out" }
    ],
    specialty: "Surgery",
    relatedTerms: ["e-", "ec-", "out-"],
    clinicalContext: "Common in surgical and respiratory terminology"
  },
  {
    prefix: "hemi-",
    meaning: "half",
    origin: "Greek",
    examples: [
      { word: "hemiplegia", definition: "paralysis of half the body" },
      { word: "hemisphere", definition: "half of a sphere" },
      { word: "hemicolectomy", definition: "removal of half the colon" }
    ],
    specialty: "Neurology",
    relatedTerms: ["semi-", "demi-"],
    clinicalContext: "Used to describe conditions affecting half of a structure"
  },
  {
    prefix: "hyper-",
    meaning: "above, excessive, over",
    origin: "Greek",
    examples: [
      { word: "hypertension", definition: "high blood pressure" },
      { word: "hyperglycemia", definition: "high blood sugar" },
      { word: "hyperthermia", definition: "excessive body heat" }
    ],
    specialty: "General",
    relatedTerms: ["super-", "over-"],
    clinicalContext: "Indicates levels above normal range"
  },
  {
    prefix: "hypo-",
    meaning: "below, under, deficient",
    origin: "Greek",
    examples: [
      { word: "hypotension", definition: "low blood pressure" },
      { word: "hypothermia", definition: "low body temperature" },
      { word: "hypoglycemia", definition: "low blood sugar" }
    ],
    specialty: "General",
    relatedTerms: ["sub-", "under-"],
    clinicalContext: "Indicates levels below normal range"
  },
  {
    prefix: "inter-",
    meaning: "between, among",
    origin: "Latin",
    examples: [
      { word: "intercostal", definition: "between the ribs" },
      { word: "intervertebral", definition: "between vertebrae" },
      { word: "intervention", definition: "coming between" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["intra-", "between-"],
    clinicalContext: "Describes anatomical relationships and medical interventions"
  },
  {
    prefix: "intra-",
    meaning: "within, inside",
    origin: "Latin",
    examples: [
      { word: "intravenous", definition: "within a vein" },
      { word: "intramuscular", definition: "within muscle" },
      { word: "intrauterine", definition: "within the uterus" }
    ],
    specialty: "General",
    relatedTerms: ["endo-", "within-"],
    clinicalContext: "Common in describing routes of medication administration"
  },
  {
    prefix: "macro-",
    meaning: "large, long",
    origin: "Greek",
    examples: [
      { word: "macrocephaly", definition: "large head" },
      { word: "macrophage", definition: "large eating cell" },
      { word: "macroscopic", definition: "visible to naked eye" }
    ],
    specialty: "General",
    relatedTerms: ["mega-", "large-"],
    clinicalContext: "Used to describe abnormally large structures or visible phenomena"
  },
  {
    prefix: "mal-",
    meaning: "bad, poor, abnormal",
    origin: "Latin",
    examples: [
      { word: "malnutrition", definition: "poor nutrition" },
      { word: "malformation", definition: "abnormal formation" },
      { word: "malignant", definition: "bad/harmful growth" }
    ],
    specialty: "General",
    relatedTerms: ["dys-", "mis-"],
    clinicalContext: "Indicates abnormal or harmful conditions"
  },
  {
    prefix: "micro-",
    meaning: "small",
    origin: "Greek",
    examples: [
      { word: "microscopic", definition: "too small to see" },
      { word: "microcephaly", definition: "small head" },
      { word: "microorganism", definition: "small organism" }
    ],
    specialty: "General",
    relatedTerms: ["mini-", "small-"],
    clinicalContext: "Used to describe very small structures or organisms"
  },
  {
    prefix: "neo-",
    meaning: "new, recent",
    origin: "Greek",
    examples: [
      { word: "neonate", definition: "newborn" },
      { word: "neoplasm", definition: "new growth/tumor" },
      { word: "neonatal", definition: "relating to newborns" }
    ],
    specialty: "Pediatrics",
    relatedTerms: ["new-", "recent-"],
    clinicalContext: "Common in pediatrics and oncology"
  },
  {
    prefix: "pan-",
    meaning: "all, entire",
    origin: "Greek",
    examples: [
      { word: "pandemic", definition: "affecting all people" },
      { word: "pancreatitis", definition: "inflammation of entire pancreas" },
      { word: "panhysterectomy", definition: "removal of entire uterus" }
    ],
    specialty: "General",
    relatedTerms: ["total-", "complete-"],
    clinicalContext: "Indicates complete or widespread involvement"
  },
  {
    prefix: "para-",
    meaning: "beside, near, abnormal",
    origin: "Greek",
    examples: [
      { word: "paralysis", definition: "beside normal function" },
      { word: "paramedic", definition: "beside medical" },
      { word: "paranormal", definition: "beside normal" }
    ],
    specialty: "General",
    relatedTerms: ["beside-", "near-"],
    clinicalContext: "Used to describe auxiliary roles or abnormal conditions"
  },
  {
    prefix: "peri-",
    meaning: "around, surrounding",
    origin: "Greek",
    examples: [
      { word: "pericardium", definition: "around the heart" },
      { word: "peritoneum", definition: "around the abdomen" },
      { word: "peripheral", definition: "around the edge" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["circum-", "around-"],
    clinicalContext: "Common in anatomical terminology for surrounding structures"
  },
  {
    prefix: "poly-",
    meaning: "many, much",
    origin: "Greek",
    examples: [
      { word: "polydipsia", definition: "excessive thirst" },
      { word: "polyuria", definition: "excessive urination" },
      { word: "polypharmacy", definition: "use of many medications" }
    ],
    specialty: "General",
    relatedTerms: ["multi-", "many-"],
    clinicalContext: "Used to describe excessive amounts or multiple occurrences"
  },
  {
    prefix: "post-",
    meaning: "after, behind",
    origin: "Latin",
    examples: [
      { word: "postoperative", definition: "after surgery" },
      { word: "posterior", definition: "behind" },
      { word: "postpartum", definition: "after childbirth" }
    ],
    specialty: "General",
    relatedTerms: ["after-", "following-"],
    clinicalContext: "Common in describing temporal relationships in treatment"
  },
  {
    prefix: "pre-",
    meaning: "before, in front of",
    origin: "Latin",
    examples: [
      { word: "preoperative", definition: "before surgery" },
      { word: "prenatal", definition: "before birth" },
      { word: "prevention", definition: "coming before" }
    ],
    specialty: "General",
    relatedTerms: ["ante-", "pro-", "before-"],
    clinicalContext: "Essential in describing preventive care and surgical planning"
  },
  {
    prefix: "pseudo-",
    meaning: "false, fake",
    origin: "Greek",
    examples: [
      { word: "pseudocyst", definition: "false cyst" },
      { word: "pseudopregnancy", definition: "false pregnancy" },
      { word: "pseudopod", definition: "false foot" }
    ],
    specialty: "General",
    relatedTerms: ["false-", "fake-"],
    clinicalContext: "Used to describe conditions that mimic true pathology"
  },
  {
    prefix: "retro-",
    meaning: "backward, behind",
    origin: "Latin",
    examples: [
      { word: "retrograde", definition: "moving backward" },
      { word: "retroperitoneal", definition: "behind the peritoneum" },
      { word: "retrospective", definition: "looking backward" }
    ],
    specialty: "General",
    relatedTerms: ["back-", "behind-"],
    clinicalContext: "Used in anatomical positions and research methodology"
  },
  {
    prefix: "semi-",
    meaning: "half, partial",
    origin: "Latin",
    examples: [
      { word: "semiconscious", definition: "partially conscious" },
      { word: "semilunar", definition: "half-moon shaped" },
      { word: "semipermeable", definition: "partially permeable" }
    ],
    specialty: "General",
    relatedTerms: ["hemi-", "partial-"],
    clinicalContext: "Describes incomplete or partial conditions"
  },
  {
    prefix: "sub-",
    meaning: "under, below, beneath",
    origin: "Latin",
    examples: [
      { word: "subcutaneous", definition: "under the skin" },
      { word: "sublingual", definition: "under the tongue" },
      { word: "subacute", definition: "somewhat acute" }
    ],
    specialty: "General",
    relatedTerms: ["hypo-", "under-"],
    clinicalContext: "Common in describing anatomical positions and medication routes"
  },
  {
    prefix: "super-",
    meaning: "above, over, excessive",
    origin: "Latin",
    examples: [
      { word: "superficial", definition: "on the surface" },
      { word: "superior", definition: "above" },
      { word: "supernumerary", definition: "above normal number" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["supra-", "hyper-"],
    clinicalContext: "Used in anatomical orientation and describing excess"
  },
  {
    prefix: "supra-",
    meaning: "above, over",
    origin: "Latin",
    examples: [
      { word: "suprapubic", definition: "above the pubis" },
      { word: "suprarenal", definition: "above the kidney" },
      { word: "supraventricular", definition: "above the ventricles" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["super-", "above-"],
    clinicalContext: "Precise anatomical positioning terminology"
  },
  {
    prefix: "tachy-",
    meaning: "fast, rapid",
    origin: "Greek",
    examples: [
      { word: "tachycardia", definition: "fast heart rate" },
      { word: "tachypnea", definition: "rapid breathing" },
      { word: "tachyphylaxis", definition: "rapid tolerance development" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["rapid-", "fast-"],
    clinicalContext: "Used to describe abnormally fast physiological processes"
  },
  {
    prefix: "trans-",
    meaning: "across, through",
    origin: "Latin",
    examples: [
      { word: "transdermal", definition: "through the skin" },
      { word: "transplant", definition: "plant across" },
      { word: "transfusion", definition: "pouring across" }
    ],
    specialty: "General",
    relatedTerms: ["across-", "through-"],
    clinicalContext: "Common in describing procedures and medication delivery"
  },
  {
    prefix: "tri-",
    meaning: "three",
    origin: "Latin",
    examples: [
      { word: "triceps", definition: "three-headed muscle" },
      { word: "tricuspid", definition: "three-pointed" },
      { word: "trimester", definition: "three-month period" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["three-", "triple-"],
    clinicalContext: "Describes anatomical structures with three parts"
  },
  {
    prefix: "ultra-",
    meaning: "beyond, excessive",
    origin: "Latin",
    examples: [
      { word: "ultrasound", definition: "beyond sound" },
      { word: "ultraviolet", definition: "beyond violet" },
      { word: "ultrafiltration", definition: "excessive filtration" }
    ],
    specialty: "Radiology",
    relatedTerms: ["beyond-", "excessive-"],
    clinicalContext: "Common in imaging and describing extreme conditions"
  },
  {
    prefix: "uni-",
    meaning: "one, single",
    origin: "Latin",
    examples: [
      { word: "unilateral", definition: "one-sided" },
      { word: "unicellular", definition: "single-celled" },
      { word: "uniform", definition: "one form" }
    ],
    specialty: "General",
    relatedTerms: ["mono-", "single-"],
    clinicalContext: "Used to describe singular or one-sided conditions"
  }
];

export const getAllPrefixes = (): MedicalPrefix[] => {
  return medicalPrefixes;
};

export const searchPrefixes = (query: string): MedicalPrefix[] => {
  const lowercaseQuery = query.toLowerCase();
  return medicalPrefixes.filter(
    (prefix) =>
      prefix.prefix.toLowerCase().includes(lowercaseQuery) ||
      prefix.meaning.toLowerCase().includes(lowercaseQuery) ||
      prefix.examples.some(example => 
        example.word.toLowerCase().includes(lowercaseQuery) ||
        example.definition.toLowerCase().includes(lowercaseQuery)
      ) ||
      prefix.specialty.toLowerCase().includes(lowercaseQuery) ||
      prefix.clinicalContext.toLowerCase().includes(lowercaseQuery)
  );
};

export const getPrefixesByLetter = (letter: string): MedicalPrefix[] => {
  return medicalPrefixes.filter(
    (prefix) => prefix.prefix.charAt(0).toUpperCase() === letter.toUpperCase()
  );
};

export const getPrefixByName = (name: string): MedicalPrefix | undefined => {
  return medicalPrefixes.find(
    (prefix) => prefix.prefix.toLowerCase() === name.toLowerCase()
  );
};