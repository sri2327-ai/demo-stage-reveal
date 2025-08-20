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
  // Condition and disease suffixes
  {
    suffix: "-algia",
    meaning: "pain",
    origin: "Greek",
    examples: [
      { word: "neuralgia", definition: "nerve pain" },
      { word: "myalgia", definition: "muscle pain" },
      { word: "arthralgia", definition: "joint pain" },
      { word: "cephalgia", definition: "head pain" },
      { word: "gastralgia", definition: "stomach pain" }
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
      { word: "hyperglycemia", definition: "high blood sugar" },
      { word: "bacteremia", definition: "bacteria in blood" },
      { word: "septicemia", definition: "infection in blood" }
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
      { word: "mastectomy", definition: "removal of breast" },
      { word: "nephrectomy", definition: "removal of kidney" },
      { word: "gastrectomy", definition: "removal of stomach" }
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
      { word: "bronchitis", definition: "inflammation of bronchi" },
      { word: "dermatitis", definition: "inflammation of skin" },
      { word: "gastritis", definition: "inflammation of stomach" }
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
      { word: "thrombosis", definition: "blood clot formation" },
      { word: "psychosis", definition: "mental disorder condition" },
      { word: "fibrosis", definition: "fibrous tissue formation" }
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
      { word: "nephropathy", definition: "kidney disease" },
      { word: "retinopathy", definition: "retina disease" },
      { word: "arthropathy", definition: "joint disease" }
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
      { word: "oncology", definition: "study of cancer" },
      { word: "neurology", definition: "study of nerves" },
      { word: "radiology", definition: "study of radiation/imaging" }
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
      { word: "lipoma", definition: "fatty tumor" },
      { word: "melanoma", definition: "dark skin tumor" },
      { word: "sarcoma", definition: "connective tissue tumor" }
    ],
    specialty: "Oncology",
    relatedTerms: ["tumor", "mass", "growth"],
    clinicalContext: "Critical in oncology for describing various types of growths"
  },
  {
    suffix: "-phobia",
    meaning: "fear of",
    origin: "Greek",
    examples: [
      { word: "agoraphobia", definition: "fear of open spaces" },
      { word: "claustrophobia", definition: "fear of confined spaces" },
      { word: "hemophobia", definition: "fear of blood" },
      { word: "acrophobia", definition: "fear of heights" },
      { word: "arachnophobia", definition: "fear of spiders" }
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
      { word: "eosinophilia", definition: "increased eosinophils" },
      { word: "neutrophilia", definition: "increased neutrophils" },
      { word: "basophilia", definition: "increased basophils" },
      { word: "lymphophilia", definition: "increased lymphocytes" }
    ],
    specialty: "Hematology",
    relatedTerms: ["increase", "affinity"],
    clinicalContext: "Used to describe increased levels of blood cells or attractions"
  },
  {
    suffix: "-plasia",
    meaning: "formation, development",
    origin: "Greek",
    examples: [
      { word: "hyperplasia", definition: "excessive cell formation" },
      { word: "dysplasia", definition: "abnormal cell development" },
      { word: "aplasia", definition: "lack of cell development" },
      { word: "neoplasia", definition: "new tissue formation" },
      { word: "hypoplasia", definition: "underdevelopment" }
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
      { word: "tachypnea", definition: "rapid breathing" },
      { word: "bradypnea", definition: "slow breathing" },
      { word: "orthopnea", definition: "breathing difficulty when lying down" }
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
      { word: "arthroscopy", definition: "joint examination" },
      { word: "bronchoscopy", definition: "airway examination" },
      { word: "cystoscopy", definition: "bladder examination" }
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
      { word: "gastrostomy", definition: "opening in stomach" },
      { word: "ileostomy", definition: "opening in ileum" },
      { word: "jejunostomy", definition: "opening in jejunum" }
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
      { word: "thoracotomy", definition: "chest incision" },
      { word: "episiotomy", definition: "perineal incision" },
      { word: "fasciotomy", definition: "fascia incision" }
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
      { word: "dystrophy", definition: "abnormal growth" },
      { word: "hypotrophy", definition: "undergrowth" },
      { word: "eutrophy", definition: "normal growth" }
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
      { word: "proteinuria", definition: "protein in urine" },
      { word: "oliguria", definition: "scanty urination" },
      { word: "anuria", definition: "absence of urination" }
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
      { word: "hemorrhoid", definition: "flowing-like (varicose vein)" },
      { word: "mucoid", definition: "mucus-like" },
      { word: "fibroid", definition: "fiber-like tumor" }
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
      { word: "osteogenesis", definition: "bone formation" },
      { word: "angiogenesis", definition: "blood vessel formation" },
      { word: "embryogenesis", definition: "embryo formation" }
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
      { word: "paralysis", definition: "breakdown of movement" },
      { word: "thrombolysis", definition: "clot breakdown" },
      { word: "glycolysis", definition: "glucose breakdown" }
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
      { word: "splenomegaly", definition: "spleen enlargement" },
      { word: "nephromegaly", definition: "kidney enlargement" },
      { word: "acromegaly", definition: "extremity enlargement" }
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
      { word: "rhinorrhea", definition: "nasal discharge" },
      { word: "galactorrhea", definition: "milk discharge" },
      { word: "seborrhea", definition: "sebum discharge" }
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
      { word: "metrorrhagia", definition: "uterine bleeding" },
      { word: "epistaxis", definition: "nosebleed" },
      { word: "petechiae", definition: "small hemorrhages" }
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
      { word: "physiotherapy", definition: "physical treatment" },
      { word: "psychotherapy", definition: "mental treatment" },
      { word: "hydrotherapy", definition: "water treatment" }
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
      { word: "angioplasty", definition: "blood vessel repair" },
      { word: "mammoplasty", definition: "breast reconstruction" },
      { word: "abdominoplasty", definition: "abdominal reconstruction" }
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
      { word: "mammography", definition: "breast X-ray recording" },
      { word: "angiography", definition: "blood vessel recording" },
      { word: "tomography", definition: "slice recording" }
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
      { word: "angiogram", definition: "blood vessel image" },
      { word: "hologram", definition: "whole image" },
      { word: "histogram", definition: "tissue image" }
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
      { word: "phagocyte", definition: "eating cell" },
      { word: "neutrophage", definition: "neutrophil eating cell" },
      { word: "lymphophage", definition: "lymphocyte eating cell" }
    ],
    specialty: "Immunology",
    relatedTerms: ["eating", "consuming"],
    clinicalContext: "Important in immunology and cellular biology"
  },
  {
    suffix: "-penia",
    meaning: "deficiency, lack",
    origin: "Greek",
    examples: [
      { word: "leukopenia", definition: "lack of white blood cells" },
      { word: "thrombocytopenia", definition: "lack of platelets" },
      { word: "neutropenia", definition: "lack of neutrophils" },
      { word: "lymphopenia", definition: "lack of lymphocytes" },
      { word: "pancytopenia", definition: "lack of all blood cells" }
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
      { word: "akinesia", definition: "absence of movement" },
      { word: "hyperkinesia", definition: "excessive movement" },
      { word: "telekinesis", definition: "distant movement" }
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
      { word: "hyperlexia", definition: "advanced reading ability" },
      { word: "paralexia", definition: "misreading words" }
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
      { word: "spirometer", definition: "lung function measuring device" },
      { word: "glucometer", definition: "glucose measuring device" },
      { word: "oximeter", definition: "oxygen measuring device" }
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
      { word: "audiometry", definition: "hearing measurement" },
      { word: "biometry", definition: "biological measurement" },
      { word: "dosimetry", definition: "radiation dose measurement" }
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
      { word: "amniocentesis", definition: "amniotic fluid puncture" },
      { word: "pericardiocentesis", definition: "pericardial puncture" },
      { word: "arthrocentesis", definition: "joint puncture" }
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
      { word: "orchiopexy", definition: "testicle fixation" },
      { word: "mastopexy", definition: "breast fixation" },
      { word: "gastropexy", definition: "stomach fixation" }
    ],
    specialty: "Surgery",
    relatedTerms: ["fixation", "anchoring"],
    clinicalContext: "Used for surgical procedures that fix organs in position"
  },
  {
    suffix: "-ptosis",
    meaning: "drooping, falling",
    origin: "Greek",
    examples: [
      { word: "blepharoptosis", definition: "eyelid drooping" },
      { word: "nephriptosis", definition: "kidney drooping" },
      { word: "gastroptosis", definition: "stomach drooping" },
      { word: "hepatoptosis", definition: "liver drooping" },
      { word: "proctoptosis", definition: "rectal prolapse" }
    ],
    specialty: "General",
    relatedTerms: ["drooping", "prolapse"],
    clinicalContext: "Describes organs or structures that have fallen or drooped"
  },
  {
    suffix: "-scope",
    meaning: "instrument for viewing",
    origin: "Greek",
    examples: [
      { word: "stethoscope", definition: "chest listening instrument" },
      { word: "endoscope", definition: "internal viewing instrument" },
      { word: "microscope", definition: "small viewing instrument" },
      { word: "arthroscope", definition: "joint viewing instrument" },
      { word: "bronchoscope", definition: "airway viewing instrument" }
    ],
    specialty: "Medical Devices",
    relatedTerms: ["viewing", "instrument"],
    clinicalContext: "Refers to instruments used for examination"
  },
  {
    suffix: "-spasm",
    meaning: "involuntary contraction",
    origin: "Greek",
    examples: [
      { word: "bronchospasm", definition: "airway muscle contraction" },
      { word: "laryngospasm", definition: "voice box spasm" },
      { word: "blepharospasm", definition: "eyelid spasm" },
      { word: "vasospasm", definition: "blood vessel spasm" },
      { word: "myospasm", definition: "muscle spasm" }
    ],
    specialty: "Neurology",
    relatedTerms: ["spasm", "contraction"],
    clinicalContext: "Describes involuntary muscle contractions"
  },
  {
    suffix: "-stenosis",
    meaning: "narrowing, stricture",
    origin: "Greek",
    examples: [
      { word: "aortic stenosis", definition: "aortic valve narrowing" },
      { word: "pyloric stenosis", definition: "stomach outlet narrowing" },
      { word: "spinal stenosis", definition: "spinal canal narrowing" },
      { word: "mitral stenosis", definition: "mitral valve narrowing" },
      { word: "tracheal stenosis", definition: "airway narrowing" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["narrowing", "stricture"],
    clinicalContext: "Describes pathological narrowing of body passages"
  },
  {
    suffix: "-toxic",
    meaning: "poisonous",
    origin: "Greek",
    examples: [
      { word: "hepatotoxic", definition: "liver poisonous" },
      { word: "nephrotoxic", definition: "kidney poisonous" },
      { word: "neurotoxic", definition: "nerve poisonous" },
      { word: "cytotoxic", definition: "cell poisonous" },
      { word: "cardiotoxic", definition: "heart poisonous" }
    ],
    specialty: "Toxicology",
    relatedTerms: ["poisonous", "harmful"],
    clinicalContext: "Describes substances harmful to specific organs or tissues"
  },
  {
    suffix: "-tropic",
    meaning: "turning toward, affecting",
    origin: "Greek",
    examples: [
      { word: "neurotropic", definition: "affecting nerves" },
      { word: "hepatotropic", definition: "affecting liver" },
      { word: "cardiotropic", definition: "affecting heart" },
      { word: "psychotropic", definition: "affecting mind" },
      { word: "gonadotropic", definition: "affecting gonads" }
    ],
    specialty: "Pharmacology",
    relatedTerms: ["affecting", "targeting"],
    clinicalContext: "Describes substances that target specific organs or systems"
  },
  {
    suffix: "-ectasis",
    meaning: "expansion, dilation",
    origin: "Greek",
    examples: [
      { word: "bronchiectasis", definition: "airway expansion" },
      { word: "atelectasis", definition: "lung collapse (incomplete expansion)" },
      { word: "telangiectasia", definition: "small vessel dilation" },
      { word: "lymphangiectasis", definition: "lymph vessel dilation" },
      { word: "pyelectasis", definition: "renal pelvis dilation" }
    ],
    specialty: "Radiology",
    relatedTerms: ["expansion", "dilation"],
    clinicalContext: "Describes abnormal expansion or dilation of structures"
  },
  {
    suffix: "-poiesis",
    meaning: "formation, production",
    origin: "Greek",
    examples: [
      { word: "hematopoiesis", definition: "blood cell formation" },
      { word: "erythropoiesis", definition: "red blood cell formation" },
      { word: "leukopoiesis", definition: "white blood cell formation" },
      { word: "thrombopoiesis", definition: "platelet formation" },
      { word: "lymphopoiesis", definition: "lymphocyte formation" }
    ],
    specialty: "Hematology",
    relatedTerms: ["formation", "production"],
    clinicalContext: "Describes the formation of blood cells and other substances"
  },
  {
    suffix: "-rrhaphy",
    meaning: "suturing, repair",
    origin: "Greek",
    examples: [
      { word: "herniorrhaphy", definition: "hernia repair" },
      { word: "colporrhaphy", definition: "vaginal wall repair" },
      { word: "myorrhaphy", definition: "muscle repair" },
      { word: "neurorrhaphy", definition: "nerve repair" },
      { word: "tenorrhaphy", definition: "tendon repair" }
    ],
    specialty: "Surgery",
    relatedTerms: ["suturing", "repair"],
    clinicalContext: "Surgical procedures involving suturing or repair"
  },
  {
    suffix: "-malacia",
    meaning: "softening",
    origin: "Greek",
    examples: [
      { word: "osteomalacia", definition: "bone softening" },
      { word: "chondromalacia", definition: "cartilage softening" },
      { word: "tracheomalacia", definition: "tracheal softening" },
      { word: "bronchomalacia", definition: "bronchial softening" },
      { word: "keratomalacia", definition: "corneal softening" }
    ],
    specialty: "Pathology",
    relatedTerms: ["softening", "degeneration"],
    clinicalContext: "Describes pathological softening of tissues"
  },
  {
    suffix: "-sclerosis",
    meaning: "hardening",
    origin: "Greek",
    examples: [
      { word: "arteriosclerosis", definition: "artery hardening" },
      { word: "multiple sclerosis", definition: "nerve hardening disease" },
      { word: "nephrosclerosis", definition: "kidney hardening" },
      { word: "hepatosclerosis", definition: "liver hardening" },
      { word: "pneumosclerosis", definition: "lung hardening" }
    ],
    specialty: "Pathology",
    relatedTerms: ["hardening", "scarring"],
    clinicalContext: "Describes pathological hardening of tissues"
  },
  {
    suffix: "-iasis",
    meaning: "condition, presence of",
    origin: "Greek",
    examples: [
      { word: "cholelithiasis", definition: "gallstone condition" },
      { word: "nephrolithiasis", definition: "kidney stone condition" },
      { word: "psoriasis", definition: "skin scaling condition" },
      { word: "elephantiasis", definition: "massive swelling condition" },
      { word: "helminthiasis", definition: "worm infection condition" }
    ],
    specialty: "General",
    relatedTerms: ["condition", "disease state"],
    clinicalContext: "Describes various pathological conditions or presence of substances"
  },
  {
    suffix: "-cele",
    meaning: "hernia, swelling",
    origin: "Greek",
    examples: [
      { word: "hydrocele", definition: "fluid-filled swelling" },
      { word: "varicocele", definition: "varicose vein swelling" },
      { word: "rectocele", definition: "rectal hernia" },
      { word: "cystocele", definition: "bladder hernia" },
      { word: "meningocele", definition: "meningeal hernia" }
    ],
    specialty: "Surgery",
    relatedTerms: ["hernia", "swelling"],
    clinicalContext: "Describes hernias or abnormal swellings"
  },
  {
    suffix: "-phylaxis",
    meaning: "protection, prevention",
    origin: "Greek",
    examples: [
      { word: "prophylaxis", definition: "preventive treatment" },
      { word: "anaphylaxis", definition: "severe allergic reaction" },
      { word: "tachyphylaxis", definition: "rapid drug tolerance" },
      { word: "immunoprophylaxis", definition: "immune prevention" }
    ],
    specialty: "Immunology",
    relatedTerms: ["protection", "prevention"],
    clinicalContext: "Related to protective or preventive measures"
  },
  {
    suffix: "-lepsy",
    meaning: "seizure, attack",
    origin: "Greek",
    examples: [
      { word: "epilepsy", definition: "seizure disorder" },
      { word: "narcolepsy", definition: "sleep attack disorder" },
      { word: "catalepsy", definition: "muscle rigidity attack" }
    ],
    specialty: "Neurology",
    relatedTerms: ["seizure", "attack"],
    clinicalContext: "Describes seizure disorders or sudden attacks"
  },
  {
    suffix: "-dynia",
    meaning: "pain",
    origin: "Greek",
    examples: [
      { word: "coccydynia", definition: "tailbone pain" },
      { word: "glossodynia", definition: "tongue pain" },
      { word: "proctalgia", definition: "rectal pain" },
      { word: "mastalgia", definition: "breast pain" }
    ],
    specialty: "Pain Management",
    relatedTerms: ["-algia", "pain"],
    clinicalContext: "Alternative suffix for describing pain conditions"
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