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
  },
  {
    root: "abdomin/o",
    meaning: "abdomen",
    origin: "Latin",
    examples: [
      { word: "abdominal", definition: "relating to abdomen" },
      { word: "abdominoplasty", definition: "abdomen plastic surgery" },
      { word: "abdominocentesis", definition: "abdomen puncture" }
    ],
    specialty: "General Surgery",
    relatedTerms: ["belly", "stomach area"],
    clinicalContext: "Essential for abdominal procedures and anatomy"
  },
  {
    root: "acr/o",
    meaning: "extremity, top",
    origin: "Greek",
    examples: [
      { word: "acromegaly", definition: "enlarged extremities" },
      { word: "acrophobia", definition: "fear of heights" },
      { word: "acromion", definition: "shoulder blade tip" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["extremity", "tip"],
    clinicalContext: "Important for extremity conditions and anatomical landmarks"
  },
  {
    root: "aden/o",
    meaning: "gland",
    origin: "Greek",
    examples: [
      { word: "adenoma", definition: "gland tumor" },
      { word: "adenitis", definition: "gland inflammation" },
      { word: "adenectomy", definition: "gland removal" },
      { word: "lymphadenopathy", definition: "lymph gland disease" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["gland", "glandular"],
    clinicalContext: "Essential for glandular disorders and tumors"
  },
  {
    root: "aer/o",
    meaning: "air, gas",
    origin: "Greek",
    examples: [
      { word: "aerobic", definition: "requiring air/oxygen" },
      { word: "anaerobic", definition: "without air/oxygen" },
      { word: "pneumothorax", definition: "air in chest" },
      { word: "aerosol", definition: "air suspension" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["air", "oxygen"],
    clinicalContext: "Important for respiratory conditions and microbiology"
  },
  {
    root: "alb/o",
    meaning: "white",
    origin: "Latin",
    examples: [
      { word: "albino", definition: "lacking pigment" },
      { word: "albumin", definition: "white protein" },
      { word: "albinism", definition: "white condition" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["white", "pale"],
    clinicalContext: "Used for pigmentation disorders and protein names"
  },
  {
    root: "alge/o",
    meaning: "pain",
    origin: "Greek",
    examples: [
      { word: "analgesic", definition: "pain reliever" },
      { word: "neuralgia", definition: "nerve pain" },
      { word: "myalgia", definition: "muscle pain" },
      { word: "cephalgia", definition: "head pain" }
    ],
    specialty: "Pain Management",
    relatedTerms: ["pain", "ache"],
    clinicalContext: "Fundamental for pain conditions and treatment"
  },
  {
    root: "andr/o",
    meaning: "male, masculine",
    origin: "Greek",
    examples: [
      { word: "androgen", definition: "male hormone" },
      { word: "android", definition: "man-like" },
      { word: "andrology", definition: "study of male health" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["male", "masculine"],
    clinicalContext: "Important for male reproductive health and hormones"
  },
  {
    root: "angi/o",
    meaning: "vessel, blood vessel",
    origin: "Greek",
    examples: [
      { word: "angiogram", definition: "vessel x-ray" },
      { word: "angioplasty", definition: "vessel repair" },
      { word: "angiology", definition: "study of vessels" },
      { word: "angiogenesis", definition: "vessel formation" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["vessel", "vascular"],
    clinicalContext: "Critical for cardiovascular procedures and imaging"
  },
  {
    root: "aort/o",
    meaning: "aorta",
    origin: "Greek",
    examples: [
      { word: "aortic", definition: "relating to aorta" },
      { word: "aortitis", definition: "aorta inflammation" },
      { word: "aortography", definition: "aorta imaging" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["main artery", "great vessel"],
    clinicalContext: "Essential for major cardiac procedures and conditions"
  },
  {
    root: "append/o",
    meaning: "appendix",
    origin: "Latin",
    examples: [
      { word: "appendicitis", definition: "appendix inflammation" },
      { word: "appendectomy", definition: "appendix removal" },
      { word: "appendicular", definition: "relating to appendix" }
    ],
    specialty: "General Surgery",
    relatedTerms: ["appendix", "vermiform"],
    clinicalContext: "Important for common surgical conditions"
  },
  {
    root: "arthr/o",
    meaning: "joint",
    origin: "Greek",
    examples: [
      { word: "arthritis", definition: "joint inflammation" },
      { word: "arthroscopy", definition: "joint examination" },
      { word: "arthrodesis", definition: "joint fusion" },
      { word: "arthroplasty", definition: "joint replacement" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["joint", "articulation"],
    clinicalContext: "Fundamental for joint diseases and surgery"
  },
  {
    root: "ather/o",
    meaning: "fatty plaque, porridge",
    origin: "Greek",
    examples: [
      { word: "atherosclerosis", definition: "fatty plaque hardening" },
      { word: "atheroma", definition: "fatty tumor" },
      { word: "atherogenesis", definition: "plaque formation" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["plaque", "fatty"],
    clinicalContext: "Critical for cardiovascular disease understanding"
  },
  {
    root: "audi/o",
    meaning: "hearing, sound",
    origin: "Latin",
    examples: [
      { word: "audiology", definition: "study of hearing" },
      { word: "audiogram", definition: "hearing test record" },
      { word: "auditory", definition: "relating to hearing" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["hearing", "sound"],
    clinicalContext: "Essential for hearing disorders and testing"
  },
  {
    root: "bronch/o",
    meaning: "bronchus, airway",
    origin: "Greek",
    examples: [
      { word: "bronchitis", definition: "airway inflammation" },
      { word: "bronchoscopy", definition: "airway examination" },
      { word: "bronchodilator", definition: "airway widener" },
      { word: "bronchopneumonia", definition: "airway and lung infection" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["airway", "breathing tube"],
    clinicalContext: "Important for respiratory conditions and procedures"
  },
  {
    root: "bucc/o",
    meaning: "cheek",
    origin: "Latin",
    examples: [
      { word: "buccal", definition: "relating to cheek" },
      { word: "buccinator", definition: "cheek muscle" },
      { word: "buccolingual", definition: "cheek to tongue" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["cheek", "mouth side"],
    clinicalContext: "Important for dental and oral procedures"
  },
  {
    root: "calc/o",
    meaning: "calcium, lime",
    origin: "Latin",
    examples: [
      { word: "calcification", definition: "calcium deposit formation" },
      { word: "hypercalcemia", definition: "high blood calcium" },
      { word: "calculus", definition: "stone formation" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["calcium", "stone"],
    clinicalContext: "Important for bone health and stone formation"
  },
  {
    root: "carcin/o",
    meaning: "cancer, malignant",
    origin: "Greek",
    examples: [
      { word: "carcinoma", definition: "malignant tumor" },
      { word: "carcinogen", definition: "cancer-causing agent" },
      { word: "carcinogenesis", definition: "cancer development" }
    ],
    specialty: "Oncology",
    relatedTerms: ["cancer", "malignant"],
    clinicalContext: "Fundamental for cancer diagnosis and treatment"
  },
  {
    root: "cardi/o",
    meaning: "heart",
    origin: "Greek",
    examples: [
      { word: "cardiology", definition: "study of heart" },
      { word: "cardiomyopathy", definition: "heart muscle disease" },
      { word: "electrocardiogram", definition: "heart electrical recording" },
      { word: "tachycardia", definition: "fast heart rate" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["heart", "cardiac"],
    clinicalContext: "Essential for all cardiac conditions and procedures"
  },
  {
    root: "cephal/o",
    meaning: "head",
    origin: "Greek",
    examples: [
      { word: "cephalgia", definition: "headache" },
      { word: "hydrocephalus", definition: "water on brain" },
      { word: "cephalic", definition: "relating to head" }
    ],
    specialty: "Neurology",
    relatedTerms: ["head", "cranial"],
    clinicalContext: "Important for head and brain conditions"
  },
  {
    root: "cerebr/o",
    meaning: "brain, cerebrum",
    origin: "Latin",
    examples: [
      { word: "cerebral", definition: "relating to brain" },
      { word: "cerebrovascular", definition: "brain blood vessels" },
      { word: "cerebrospinal", definition: "brain and spinal" }
    ],
    specialty: "Neurology",
    relatedTerms: ["brain", "cerebral"],
    clinicalContext: "Critical for brain disorders and neurology"
  },
  {
    root: "cervic/o",
    meaning: "neck, cervix",
    origin: "Latin",
    examples: [
      { word: "cervical", definition: "relating to neck" },
      { word: "cervicitis", definition: "cervix inflammation" },
      { word: "cervicalgia", definition: "neck pain" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["neck", "cervix"],
    clinicalContext: "Important for neck and reproductive health"
  },
  {
    root: "chol/e",
    meaning: "bile, gall",
    origin: "Greek",
    examples: [
      { word: "cholesterol", definition: "bile sterol" },
      { word: "cholecystitis", definition: "gallbladder inflammation" },
      { word: "cholelithiasis", definition: "gallstone condition" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["bile", "gall"],
    clinicalContext: "Essential for gallbladder and liver conditions"
  },
  {
    root: "chondr/o",
    meaning: "cartilage",
    origin: "Greek",
    examples: [
      { word: "chondritis", definition: "cartilage inflammation" },
      { word: "chondroma", definition: "cartilage tumor" },
      { word: "achondroplasia", definition: "cartilage formation disorder" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["cartilage", "gristle"],
    clinicalContext: "Important for joint and skeletal conditions"
  },
  {
    root: "col/o",
    meaning: "colon, large intestine",
    origin: "Greek",
    examples: [
      { word: "colitis", definition: "colon inflammation" },
      { word: "colonoscopy", definition: "colon examination" },
      { word: "colostomy", definition: "colon opening" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["colon", "large bowel"],
    clinicalContext: "Essential for colorectal conditions and procedures"
  },
  {
    root: "conjunctiv/o",
    meaning: "conjunctiva",
    origin: "Latin",
    examples: [
      { word: "conjunctivitis", definition: "conjunctiva inflammation" },
      { word: "conjunctival", definition: "relating to conjunctiva" },
      { word: "conjunctivoplasty", definition: "conjunctiva repair" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["eye lining", "conjunctiva"],
    clinicalContext: "Important for eye surface conditions"
  },
  {
    root: "cost/o",
    meaning: "rib",
    origin: "Latin",
    examples: [
      { word: "costal", definition: "relating to ribs" },
      { word: "intercostal", definition: "between ribs" },
      { word: "costochondritis", definition: "rib cartilage inflammation" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["rib", "costal"],
    clinicalContext: "Important for chest wall conditions and anatomy"
  },
  {
    root: "crani/o",
    meaning: "skull, cranium",
    origin: "Greek",
    examples: [
      { word: "cranial", definition: "relating to skull" },
      { word: "craniotomy", definition: "skull opening" },
      { word: "craniosynostosis", definition: "premature skull fusion" }
    ],
    specialty: "Neurosurgery",
    relatedTerms: ["skull", "head bone"],
    clinicalContext: "Critical for neurosurgical procedures and head trauma"
  },
  {
    root: "cutane/o",
    meaning: "skin",
    origin: "Latin",
    examples: [
      { word: "cutaneous", definition: "relating to skin" },
      { word: "subcutaneous", definition: "under the skin" },
      { word: "percutaneous", definition: "through the skin" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["skin", "dermal"],
    clinicalContext: "Essential for skin conditions and procedures"
  },
  {
    root: "dacry/o",
    meaning: "tear, lacrimal",
    origin: "Greek",
    examples: [
      { word: "dacryocystitis", definition: "tear sac inflammation" },
      { word: "dacryorrhea", definition: "excessive tearing" },
      { word: "dacryoadenitis", definition: "tear gland inflammation" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["tear", "lacrimal"],
    clinicalContext: "Important for tear duct and eye drainage conditions"
  },
  {
    root: "dent/o",
    meaning: "tooth, teeth",
    origin: "Latin",
    examples: [
      { word: "dental", definition: "relating to teeth" },
      { word: "dentist", definition: "tooth doctor" },
      { word: "edentulous", definition: "without teeth" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["tooth", "dental"],
    clinicalContext: "Fundamental for dental conditions and procedures"
  },
  {
    root: "derm/o",
    meaning: "skin",
    origin: "Greek",
    examples: [
      { word: "dermatitis", definition: "skin inflammation" },
      { word: "dermatology", definition: "study of skin" },
      { word: "epidermis", definition: "outer skin layer" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["skin", "cutaneous"],
    clinicalContext: "Essential for all skin conditions and treatments"
  },
  {
    root: "duoden/o",
    meaning: "duodenum",
    origin: "Latin",
    examples: [
      { word: "duodenal", definition: "relating to duodenum" },
      { word: "duodenitis", definition: "duodenum inflammation" },
      { word: "duodenostomy", definition: "duodenum opening" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["first intestine", "duodenum"],
    clinicalContext: "Important for upper GI conditions and ulcers"
  },
  {
    root: "encephal/o",
    meaning: "brain",
    origin: "Greek",
    examples: [
      { word: "encephalitis", definition: "brain inflammation" },
      { word: "encephalogram", definition: "brain recording" },
      { word: "encephalopathy", definition: "brain disease" }
    ],
    specialty: "Neurology",
    relatedTerms: ["brain", "cerebral"],
    clinicalContext: "Critical for brain disorders and infections"
  },
  {
    root: "enter/o",
    meaning: "intestine, small bowel",
    origin: "Greek",
    examples: [
      { word: "enteritis", definition: "intestine inflammation" },
      { word: "gastroenterology", definition: "stomach-intestine study" },
      { word: "enteroscopy", definition: "intestine examination" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["intestine", "bowel"],
    clinicalContext: "Essential for intestinal conditions and procedures"
  },
  {
    root: "erythr/o",
    meaning: "red",
    origin: "Greek",
    examples: [
      { word: "erythrocyte", definition: "red blood cell" },
      { word: "erythema", definition: "skin redness" },
      { word: "erythropoietin", definition: "red cell stimulating hormone" }
    ],
    specialty: "Hematology",
    relatedTerms: ["red", "redness"],
    clinicalContext: "Important for blood disorders and skin conditions"
  },
  {
    root: "esophag/o",
    meaning: "esophagus",
    origin: "Greek",
    examples: [
      { word: "esophagitis", definition: "esophagus inflammation" },
      { word: "esophagoscopy", definition: "esophagus examination" },
      { word: "esophagectomy", definition: "esophagus removal" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["food tube", "gullet"],
    clinicalContext: "Important for swallowing disorders and reflux"
  },
  {
    root: "gastr/o",
    meaning: "stomach",
    origin: "Greek",
    examples: [
      { word: "gastritis", definition: "stomach inflammation" },
      { word: "gastroscopy", definition: "stomach examination" },
      { word: "gastrectomy", definition: "stomach removal" },
      { word: "gastroenterology", definition: "stomach-intestine study" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["stomach", "gastric"],
    clinicalContext: "Fundamental for digestive system conditions"
  },
  {
    root: "gloss/o",
    meaning: "tongue",
    origin: "Greek",
    examples: [
      { word: "glossitis", definition: "tongue inflammation" },
      { word: "glossectomy", definition: "tongue removal" },
      { word: "hypoglossal", definition: "under the tongue" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["tongue", "lingual"],
    clinicalContext: "Important for oral and speech disorders"
  },
  {
    root: "gynec/o",
    meaning: "woman, female",
    origin: "Greek",
    examples: [
      { word: "gynecology", definition: "study of women's health" },
      { word: "gynecologist", definition: "women's doctor" },
      { word: "gynecomastia", definition: "female-like breast enlargement" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["woman", "female"],
    clinicalContext: "Essential for women's reproductive health"
  },
  {
    root: "hem/o",
    meaning: "blood",
    origin: "Greek",
    examples: [
      { word: "hematology", definition: "study of blood" },
      { word: "hemorrhage", definition: "blood loss" },
      { word: "hemoglobin", definition: "blood protein" },
      { word: "hematoma", definition: "blood clot" }
    ],
    specialty: "Hematology",
    relatedTerms: ["blood", "sanguine"],
    clinicalContext: "Fundamental for all blood-related conditions"
  },
  {
    root: "hepat/o",
    meaning: "liver",
    origin: "Greek",
    examples: [
      { word: "hepatitis", definition: "liver inflammation" },
      { word: "hepatology", definition: "study of liver" },
      { word: "hepatomegaly", definition: "enlarged liver" },
      { word: "hepatectomy", definition: "liver removal" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["liver", "hepatic"],
    clinicalContext: "Critical for liver diseases and transplantation"
  },
  {
    root: "hydr/o",
    meaning: "water, fluid",
    origin: "Greek",
    examples: [
      { word: "hydrocephalus", definition: "water on brain" },
      { word: "dehydration", definition: "water loss" },
      { word: "hydronephrosis", definition: "kidney water accumulation" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["water", "fluid"],
    clinicalContext: "Important for fluid balance and neurological conditions"
  },
  {
    root: "hyster/o",
    meaning: "uterus, womb",
    origin: "Greek",
    examples: [
      { word: "hysterectomy", definition: "uterus removal" },
      { word: "hysteroscopy", definition: "uterus examination" },
      { word: "hysteria", definition: "historical uterus disorder" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["uterus", "womb"],
    clinicalContext: "Essential for gynecological procedures and conditions"
  },
  {
    root: "ili/o",
    meaning: "ilium, hip bone",
    origin: "Latin",
    examples: [
      { word: "iliac", definition: "relating to ilium" },
      { word: "iliosacral", definition: "ilium to sacrum" },
      { word: "iliofemoral", definition: "ilium to femur" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["hip bone", "pelvis"],
    clinicalContext: "Important for hip and pelvic conditions"
  },
  {
    root: "laryng/o",
    meaning: "larynx, voice box",
    origin: "Greek",
    examples: [
      { word: "laryngitis", definition: "voice box inflammation" },
      { word: "laryngoscopy", definition: "voice box examination" },
      { word: "laryngectomy", definition: "voice box removal" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["voice box", "larynx"],
    clinicalContext: "Important for voice and airway disorders"
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
    relatedTerms: ["white", "pale"],
    clinicalContext: "Critical for blood disorders and infections"
  },
  {
    root: "lingu/o",
    meaning: "tongue",
    origin: "Latin",
    examples: [
      { word: "lingual", definition: "relating to tongue" },
      { word: "sublingual", definition: "under the tongue" },
      { word: "bilingual", definition: "two tongues/languages" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["tongue", "language"],
    clinicalContext: "Important for oral procedures and speech"
  },
  {
    root: "mamm/o",
    meaning: "breast",
    origin: "Latin",
    examples: [
      { word: "mammogram", definition: "breast x-ray" },
      { word: "mammoplasty", definition: "breast surgery" },
      { word: "mammography", definition: "breast imaging" }
    ],
    specialty: "Radiology",
    relatedTerms: ["breast", "mammary"],
    clinicalContext: "Essential for breast cancer screening and procedures"
  },
  {
    root: "mast/o",
    meaning: "breast",
    origin: "Greek",
    examples: [
      { word: "mastectomy", definition: "breast removal" },
      { word: "mastitis", definition: "breast inflammation" },
      { word: "gynecomastia", definition: "male breast enlargement" }
    ],
    specialty: "Surgery",
    relatedTerms: ["breast", "mammary"],
    clinicalContext: "Important for breast diseases and surgery"
  },
  {
    root: "melan/o",
    meaning: "black, dark",
    origin: "Greek",
    examples: [
      { word: "melanoma", definition: "dark tumor" },
      { word: "melanin", definition: "dark pigment" },
      { word: "melena", definition: "dark stool" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["black", "dark"],
    clinicalContext: "Critical for skin cancer and pigmentation disorders"
  },
  {
    root: "mening/o",
    meaning: "meninges, brain covering",
    origin: "Greek",
    examples: [
      { word: "meningitis", definition: "brain covering inflammation" },
      { word: "meningioma", definition: "meninges tumor" },
      { word: "meningocele", definition: "meninges protrusion" }
    ],
    specialty: "Neurology",
    relatedTerms: ["brain covering", "meninges"],
    clinicalContext: "Critical for brain infections and neurosurgery"
  },
  {
    root: "muc/o",
    meaning: "mucus, slime",
    origin: "Latin",
    examples: [
      { word: "mucus", definition: "slimy secretion" },
      { word: "mucosa", definition: "mucus membrane" },
      { word: "mucolytic", definition: "mucus dissolving" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["mucus", "slime"],
    clinicalContext: "Important for respiratory and digestive conditions"
  },
  {
    root: "nas/o",
    meaning: "nose",
    origin: "Latin",
    examples: [
      { word: "nasal", definition: "relating to nose" },
      { word: "nasogastric", definition: "nose to stomach" },
      { word: "nasopharynx", definition: "nose-throat area" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["nose", "nasal"],
    clinicalContext: "Important for nasal and sinus procedures"
  },
  {
    root: "ocul/o",
    meaning: "eye",
    origin: "Latin",
    examples: [
      { word: "ocular", definition: "relating to eye" },
      { word: "oculomotor", definition: "eye movement" },
      { word: "binocular", definition: "two eyes" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["eye", "visual"],
    clinicalContext: "Essential for eye conditions and procedures"
  },
  {
    root: "or/o",
    meaning: "mouth",
    origin: "Latin",
    examples: [
      { word: "oral", definition: "relating to mouth" },
      { word: "oropharynx", definition: "mouth-throat area" },
      { word: "peroral", definition: "through the mouth" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["mouth", "oral"],
    clinicalContext: "Important for oral health and procedures"
  },
  {
    root: "orth/o",
    meaning: "straight, correct",
    origin: "Greek",
    examples: [
      { word: "orthopedics", definition: "straight child care" },
      { word: "orthodontics", definition: "straight teeth" },
      { word: "orthopnea", definition: "straight breathing" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["straight", "correct"],
    clinicalContext: "Fundamental for bone and alignment disorders"
  },
  {
    root: "ot/o",
    meaning: "ear",
    origin: "Greek",
    examples: [
      { word: "otitis", definition: "ear inflammation" },
      { word: "otology", definition: "study of ear" },
      { word: "otoscope", definition: "ear examiner" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["ear", "auditory"],
    clinicalContext: "Essential for ear disorders and hearing problems"
  },
  {
    root: "pharyng/o",
    meaning: "pharynx, throat",
    origin: "Greek",
    examples: [
      { word: "pharyngitis", definition: "throat inflammation" },
      { word: "pharyngoscopy", definition: "throat examination" },
      { word: "pharyngeal", definition: "relating to throat" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["throat", "pharynx"],
    clinicalContext: "Important for throat and swallowing disorders"
  },
  {
    root: "phleb/o",
    meaning: "vein",
    origin: "Greek",
    examples: [
      { word: "phlebitis", definition: "vein inflammation" },
      { word: "phlebotomy", definition: "vein cutting/blood draw" },
      { word: "phlebogram", definition: "vein x-ray" }
    ],
    specialty: "Vascular Surgery",
    relatedTerms: ["vein", "venous"],
    clinicalContext: "Important for venous disorders and blood drawing"
  },
  {
    root: "pneumon/o",
    meaning: "lung",
    origin: "Greek",
    examples: [
      { word: "pneumonia", definition: "lung inflammation" },
      { word: "pneumonitis", definition: "lung tissue inflammation" },
      { word: "pneumonectomy", definition: "lung removal" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["lung", "pulmonary"],
    clinicalContext: "Critical for respiratory diseases and procedures"
  },
  {
    root: "proct/o",
    meaning: "rectum, anus",
    origin: "Greek",
    examples: [
      { word: "proctology", definition: "study of rectum" },
      { word: "proctoscopy", definition: "rectum examination" },
      { word: "proctitis", definition: "rectum inflammation" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["rectum", "anus"],
    clinicalContext: "Important for colorectal conditions and procedures"
  },
  {
    root: "psych/o",
    meaning: "mind, mental",
    origin: "Greek",
    examples: [
      { word: "psychology", definition: "study of mind" },
      { word: "psychiatry", definition: "mind treatment" },
      { word: "psychosis", definition: "mind condition" }
    ],
    specialty: "Psychiatry",
    relatedTerms: ["mind", "mental"],
    clinicalContext: "Fundamental for mental health and psychiatric conditions"
  },
  {
    root: "pulmon/o",
    meaning: "lung",
    origin: "Latin",
    examples: [
      { word: "pulmonary", definition: "relating to lungs" },
      { word: "pulmonology", definition: "study of lungs" },
      { word: "cardiopulmonary", definition: "heart and lung" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["lung", "respiratory"],
    clinicalContext: "Essential for lung diseases and respiratory medicine"
  },
  {
    root: "ren/o",
    meaning: "kidney",
    origin: "Latin",
    examples: [
      { word: "renal", definition: "relating to kidney" },
      { word: "renogram", definition: "kidney scan" },
      { word: "suprarenal", definition: "above kidney" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["kidney", "renal"],
    clinicalContext: "Critical for kidney diseases and procedures"
  },
  {
    root: "rhin/o",
    meaning: "nose",
    origin: "Greek",
    examples: [
      { word: "rhinitis", definition: "nose inflammation" },
      { word: "rhinoplasty", definition: "nose surgery" },
      { word: "rhinorrhea", definition: "runny nose" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["nose", "nasal"],
    clinicalContext: "Important for nasal and sinus conditions"
  },
  {
    root: "salping/o",
    meaning: "fallopian tube",
    origin: "Greek",
    examples: [
      { word: "salpingitis", definition: "tube inflammation" },
      { word: "salpingectomy", definition: "tube removal" },
      { word: "salpingogram", definition: "tube x-ray" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["fallopian tube", "oviduct"],
    clinicalContext: "Important for reproductive health and fertility"
  },
  {
    root: "splen/o",
    meaning: "spleen",
    origin: "Greek",
    examples: [
      { word: "splenomegaly", definition: "enlarged spleen" },
      { word: "splenectomy", definition: "spleen removal" },
      { word: "splenitis", definition: "spleen inflammation" }
    ],
    specialty: "Hematology",
    relatedTerms: ["spleen", "splenic"],
    clinicalContext: "Important for blood disorders and immune conditions"
  },
  {
    root: "stern/o",
    meaning: "sternum, breastbone",
    origin: "Greek",
    examples: [
      { word: "sternal", definition: "relating to sternum" },
      { word: "sternotomy", definition: "sternum cutting" },
      { word: "substernal", definition: "below sternum" }
    ],
    specialty: "Cardiothoracic Surgery",
    relatedTerms: ["sternum", "breastbone"],
    clinicalContext: "Important for chest surgery and cardiac procedures"
  },
  {
    root: "stomat/o",
    meaning: "mouth",
    origin: "Greek",
    examples: [
      { word: "stomatitis", definition: "mouth inflammation" },
      { word: "stomatology", definition: "study of mouth" },
      { word: "xerostomia", definition: "dry mouth" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["mouth", "oral"],
    clinicalContext: "Important for oral diseases and dental procedures"
  },
  {
    root: "thorac/o",
    meaning: "chest, thorax",
    origin: "Greek",
    examples: [
      { word: "thoracic", definition: "relating to chest" },
      { word: "thoracotomy", definition: "chest opening" },
      { word: "pneumothorax", definition: "air in chest" }
    ],
    specialty: "Cardiothoracic Surgery",
    relatedTerms: ["chest", "thorax"],
    clinicalContext: "Critical for chest surgery and respiratory procedures"
  },
  {
    root: "thromb/o",
    meaning: "blood clot",
    origin: "Greek",
    examples: [
      { word: "thrombosis", definition: "clot formation" },
      { word: "thrombus", definition: "blood clot" },
      { word: "thrombocyte", definition: "clotting cell" }
    ],
    specialty: "Hematology",
    relatedTerms: ["clot", "coagulation"],
    clinicalContext: "Critical for clotting disorders and cardiovascular disease"
  },
  {
    root: "tonsill/o",
    meaning: "tonsil",
    origin: "Latin",
    examples: [
      { word: "tonsillitis", definition: "tonsil inflammation" },
      { word: "tonsillectomy", definition: "tonsil removal" },
      { word: "tonsillar", definition: "relating to tonsils" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["tonsil", "throat glands"],
    clinicalContext: "Important for throat infections and pediatric procedures"
  },
  {
    root: "trache/o",
    meaning: "trachea, windpipe",
    origin: "Greek",
    examples: [
      { word: "tracheostomy", definition: "windpipe opening" },
      { word: "tracheitis", definition: "windpipe inflammation" },
      { word: "tracheal", definition: "relating to windpipe" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["windpipe", "airway"],
    clinicalContext: "Critical for airway management and respiratory procedures"
  },
  {
    root: "ur/o",
    meaning: "urine, urinary",
    origin: "Greek",
    examples: [
      { word: "urology", definition: "study of urine/urinary system" },
      { word: "uremia", definition: "urine in blood" },
      { word: "urinalysis", definition: "urine analysis" }
    ],
    specialty: "Urology",
    relatedTerms: ["urine", "urinary"],
    clinicalContext: "Fundamental for urinary system disorders"
  },
  {
    root: "urethr/o",
    meaning: "urethra",
    origin: "Greek",
    examples: [
      { word: "urethritis", definition: "urethra inflammation" },
      { word: "urethral", definition: "relating to urethra" },
      { word: "urethroplasty", definition: "urethra repair" }
    ],
    specialty: "Urology",
    relatedTerms: ["urethra", "urinary tube"],
    clinicalContext: "Important for urinary tract infections and procedures"
  },
  {
    root: "uter/o",
    meaning: "uterus",
    origin: "Latin",
    examples: [
      { word: "uterine", definition: "relating to uterus" },
      { word: "intrauterine", definition: "within uterus" },
      { word: "uterovesical", definition: "uterus to bladder" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["uterus", "womb"],
    clinicalContext: "Essential for reproductive health and pregnancy"
  },
  {
    root: "vesic/o",
    meaning: "bladder, vesicle",
    origin: "Latin",
    examples: [
      { word: "vesical", definition: "relating to bladder" },
      { word: "vesicle", definition: "small bladder/sac" },
      { word: "vesicostomy", definition: "bladder opening" }
    ],
    specialty: "Urology",
    relatedTerms: ["bladder", "sac"],
    clinicalContext: "Important for urinary bladder conditions and procedures"
  },
  {
    root: "vitr/o",
    meaning: "glass, vitreous",
    origin: "Latin",
    examples: [
      { word: "vitreous", definition: "glass-like eye gel" },
      { word: "vitritis", definition: "vitreous inflammation" },
      { word: "vitrectomy", definition: "vitreous removal" },
      { word: "vitreal", definition: "relating to vitreous" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["vitreous humor", "glass-like"],
    clinicalContext: "Critical for retinal surgery and eye procedures"
  },
  {
    root: "vulv/o",
    meaning: "vulva",
    origin: "Latin",
    examples: [
      { word: "vulvar", definition: "relating to vulva" },
      { word: "vulvitis", definition: "vulva inflammation" },
      { word: "vulvectomy", definition: "vulva removal" },
      { word: "vulvovaginitis", definition: "vulva-vagina inflammation" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["vulva", "external genitalia"],
    clinicalContext: "Important for gynecological conditions and infections"
  },
  {
    root: "xanth/o",
    meaning: "yellow",
    origin: "Greek",
    examples: [
      { word: "xanthoma", definition: "yellow fatty deposit" },
      { word: "xanthelasma", definition: "yellow eyelid patches" },
      { word: "xanthosis", definition: "yellow discoloration" },
      { word: "xanthine", definition: "yellow compound" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["yellow", "pigmentation"],
    clinicalContext: "Important for lipid disorders and skin conditions"
  },
  {
    root: "xer/o",
    meaning: "dry",
    origin: "Greek",
    examples: [
      { word: "xerosis", definition: "abnormal dryness" },
      { word: "xerostomia", definition: "dry mouth" },
      { word: "xerophthalmia", definition: "dry eyes" },
      { word: "xeroderma", definition: "dry skin condition" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["dry", "dehydration"],
    clinicalContext: "Critical for autoimmune conditions and medication side effects"
  },
  {
    root: "zo/o",
    meaning: "animal, life",
    origin: "Greek",
    examples: [
      { word: "zoonosis", definition: "animal-transmitted disease" },
      { word: "zoology", definition: "study of animals" },
      { word: "protozoa", definition: "single-celled animals" },
      { word: "zoonotic", definition: "animal-related infection" }
    ],
    specialty: "Infectious Disease",
    relatedTerms: ["animal", "organism"],
    clinicalContext: "Critical for infectious disease and epidemiology"
  },
  {
    root: "zyg/o",
    meaning: "yoke, pair, junction",
    origin: "Greek",
    examples: [
      { word: "zygote", definition: "fertilized egg" },
      { word: "zygoma", definition: "cheekbone" },
      { word: "zygomatic", definition: "relating to cheekbone" },
      { word: "zygosity", definition: "genetic pairing" }
    ],
    specialty: "Embryology",
    relatedTerms: ["pair", "junction"],
    clinicalContext: "Essential for reproduction and facial anatomy"
  },
  {
    root: "abdomin/o",
    meaning: "abdomen",
    origin: "Latin",
    examples: [
      { word: "abdominal", definition: "relating to abdomen" },
      { word: "abdominoplasty", definition: "abdomen surgery" },
      { word: "abdominocentesis", definition: "abdomen puncture" },
      { word: "abdominoscopy", definition: "abdomen examination" }
    ],
    specialty: "General Surgery",
    relatedTerms: ["belly", "stomach area"],
    clinicalContext: "Critical for abdominal surgery and examination"
  },
  {
    root: "acetabul/o",
    meaning: "hip socket",
    origin: "Latin",
    examples: [
      { word: "acetabulum", definition: "hip socket" },
      { word: "acetabular", definition: "relating to hip socket" },
      { word: "acetabuloplasty", definition: "hip socket repair" },
      { word: "acetabulectomy", definition: "hip socket removal" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["hip socket", "pelvis"],
    clinicalContext: "Important for hip replacement and fracture repair"
  },
  {
    root: "acr/o",
    meaning: "extremity, highest point",
    origin: "Greek",
    examples: [
      { word: "acromion", definition: "shoulder blade tip" },
      { word: "acral", definition: "relating to extremities" },
      { word: "acrodermatitis", definition: "extremity skin inflammation" },
      { word: "acrocyanosis", definition: "blue extremities" }
    ],
    specialty: "Rheumatology",
    relatedTerms: ["extremity", "tip"],
    clinicalContext: "Important for circulation disorders and joint disease"
  },
  {
    root: "aden/o",
    meaning: "gland",
    origin: "Greek",
    examples: [
      { word: "adenoma", definition: "gland tumor" },
      { word: "adenitis", definition: "gland inflammation" },
      { word: "adenectomy", definition: "gland removal" },
      { word: "adenopathy", definition: "gland disease" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["gland", "secretion"],
    clinicalContext: "Critical for hormone disorders and cancer screening"
  },
  {
    root: "adip/o",
    meaning: "fat",
    origin: "Latin",
    examples: [
      { word: "adipose", definition: "fatty tissue" },
      { word: "adipocyte", definition: "fat cell" },
      { word: "adiposity", definition: "fatness" },
      { word: "adipectomy", definition: "fat removal" }
    ],
    specialty: "Plastic Surgery",
    relatedTerms: ["fat", "fatty tissue"],
    clinicalContext: "Important for obesity treatment and body contouring"
  },
  {
    root: "albin/o",
    meaning: "white",
    origin: "Latin",
    examples: [
      { word: "album", definition: "white protein" },
      { word: "albino", definition: "lacking pigment" },
      { word: "albinism", definition: "absence of pigment" },
      { word: "albumin", definition: "white blood protein" }
    ],
    specialty: "Genetics",
    relatedTerms: ["white", "colorless"],
    clinicalContext: "Important for genetic disorders and protein studies"
  },
  {
    root: "alveol/o",
    meaning: "small sac, alveolus",
    origin: "Latin",
    examples: [
      { word: "alveolus", definition: "air sac in lung" },
      { word: "alveolar", definition: "relating to alveoli" },
      { word: "alveolitis", definition: "alveoli inflammation" },
      { word: "alveolectomy", definition: "alveolus removal" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["air sac", "lung unit"],
    clinicalContext: "Critical for respiratory disease and gas exchange"
  },
  {
    root: "amni/o",
    meaning: "amnion, amniotic sac",
    origin: "Greek",
    examples: [
      { word: "amnion", definition: "fetal membrane" },
      { word: "amniotic", definition: "relating to amniotic fluid" },
      { word: "amniocentesis", definition: "amniotic fluid sampling" },
      { word: "oligohydramnios", definition: "decreased amniotic fluid" }
    ],
    specialty: "Obstetrics",
    relatedTerms: ["amniotic fluid", "fetal sac"],
    clinicalContext: "Essential for prenatal testing and fetal monitoring"
  },
  {
    root: "angi/o",
    meaning: "vessel, blood vessel",
    origin: "Greek",
    examples: [
      { word: "angiography", definition: "vessel imaging" },
      { word: "angioplasty", definition: "vessel repair" },
      { word: "angioma", definition: "vessel tumor" },
      { word: "angiopathy", definition: "vessel disease" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["blood vessel", "vascular"],
    clinicalContext: "Critical for cardiovascular procedures and imaging"
  },
  {
    root: "ankyl/o",
    meaning: "stiff, bent, fused",
    origin: "Greek",
    examples: [
      { word: "ankylosis", definition: "joint stiffness" },
      { word: "ankylosing", definition: "causing stiffness" },
      { word: "ankylotic", definition: "relating to fusion" },
      { word: "ankylodactyly", definition: "finger stiffness" }
    ],
    specialty: "Rheumatology",
    relatedTerms: ["stiff", "fused"],
    clinicalContext: "Important for arthritis and joint mobility disorders"
  },
  {
    root: "aort/o",
    meaning: "aorta",
    origin: "Greek",
    examples: [
      { word: "aortic", definition: "relating to aorta" },
      { word: "aortitis", definition: "aorta inflammation" },
      { word: "aortography", definition: "aorta X-ray" },
      { word: "aortostenosis", definition: "aorta narrowing" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["main artery", "aorta"],
    clinicalContext: "Critical for heart surgery and vascular disease"
  },
  {
    root: "append/o",
    meaning: "appendix",
    origin: "Latin",
    examples: [
      { word: "appendix", definition: "small intestinal pouch" },
      { word: "appendicitis", definition: "appendix inflammation" },
      { word: "appendectomy", definition: "appendix removal" },
      { word: "appendicular", definition: "relating to appendix" }
    ],
    specialty: "General Surgery",
    relatedTerms: ["appendix", "vermiform"],
    clinicalContext: "Critical for appendicitis diagnosis and emergency surgery"
  },
  {
    root: "arteri/o",
    meaning: "artery",
    origin: "Greek",
    examples: [
      { word: "arterial", definition: "relating to arteries" },
      { word: "arteriosclerosis", definition: "artery hardening" },
      { word: "arteriotomy", definition: "artery incision" },
      { word: "arteriopathy", definition: "artery disease" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["artery", "arterial"],
    clinicalContext: "Essential for vascular surgery and circulation disorders"
  },
  {
    root: "arthr/o",
    meaning: "joint",
    origin: "Greek",
    examples: [
      { word: "arthritis", definition: "joint inflammation" },
      { word: "arthroscopy", definition: "joint examination" },
      { word: "arthroplasty", definition: "joint replacement" },
      { word: "arthralgia", definition: "joint pain" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["joint", "articulation"],
    clinicalContext: "Critical for joint disorders and orthopedic surgery"
  },
  {
    root: "atel/o",
    meaning: "incomplete, imperfect",
    origin: "Greek",
    examples: [
      { word: "atelectasis", definition: "lung collapse" },
      { word: "atelencephaly", definition: "incomplete brain" },
      { word: "atelocardia", definition: "incomplete heart" },
      { word: "atelomyelia", definition: "incomplete spinal cord" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["incomplete", "collapsed"],
    clinicalContext: "Important for lung disease and developmental disorders"
  },
  {
    root: "ather/o",
    meaning: "fatty plaque, porridge",
    origin: "Greek",
    examples: [
      { word: "atherosclerosis", definition: "fatty plaque buildup" },
      { word: "atheroma", definition: "fatty deposit" },
      { word: "atherectomy", definition: "plaque removal" },
      { word: "atherogenic", definition: "plaque-forming" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["plaque", "cholesterol"],
    clinicalContext: "Critical for heart disease prevention and treatment"
  },
  {
    root: "atri/o",
    meaning: "atrium, chamber",
    origin: "Latin",
    examples: [
      { word: "atrial", definition: "relating to atrium" },
      { word: "atrioventricular", definition: "atrium-ventricle" },
      { word: "atriotomy", definition: "atrium incision" },
      { word: "atrioseptal", definition: "atrial septum" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["atrium", "heart chamber"],
    clinicalContext: "Essential for cardiac rhythm disorders and surgery"
  },
  {
    root: "audi/o",
    meaning: "hearing, sound",
    origin: "Latin",
    examples: [
      { word: "audiology", definition: "study of hearing" },
      { word: "audiometer", definition: "hearing test device" },
      { word: "audiogram", definition: "hearing test chart" },
      { word: "auditory", definition: "relating to hearing" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["hearing", "sound"],
    clinicalContext: "Critical for hearing loss evaluation and treatment"
  },
  {
    root: "aur/o",
    meaning: "ear",
    origin: "Latin",
    examples: [
      { word: "aural", definition: "relating to ear" },
      { word: "auricle", definition: "external ear" },
      { word: "auricular", definition: "relating to ear" },
      { word: "binaural", definition: "relating to both ears" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["ear", "hearing"],
    clinicalContext: "Important for ear disorders and hearing problems"
  },
  {
    root: "axill/o",
    meaning: "armpit, axilla",
    origin: "Latin",
    examples: [
      { word: "axilla", definition: "armpit" },
      { word: "axillary", definition: "relating to armpit" },
      { word: "axillectomy", definition: "armpit tissue removal" },
      { word: "subaxillary", definition: "below armpit" }
    ],
    specialty: "General Surgery",
    relatedTerms: ["armpit", "underarm"],
    clinicalContext: "Important for lymph node evaluation and breast surgery"
  },
  {
    root: "azot/o",
    meaning: "nitrogen, urea",
    origin: "Greek",
    examples: [
      { word: "azotemia", definition: "nitrogen in blood" },
      { word: "azoturia", definition: "nitrogen in urine" },
      { word: "azoospermia", definition: "no sperm in semen" },
      { word: "azote", definition: "nitrogen" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["nitrogen", "urea"],
    clinicalContext: "Critical for kidney function assessment and toxicology"
  },
  {
    root: "balan/o",
    meaning: "glans penis",
    origin: "Greek",
    examples: [
      { word: "balanitis", definition: "glans inflammation" },
      { word: "balanoposthitis", definition: "glans-foreskin inflammation" },
      { word: "balanoplasty", definition: "glans repair" },
      { word: "balanorrhagia", definition: "glans bleeding" }
    ],
    specialty: "Urology",
    relatedTerms: ["glans", "penis tip"],
    clinicalContext: "Important for male genital infections and conditions"
  },
  {
    root: "bar/o",
    meaning: "weight, pressure",
    origin: "Greek",
    examples: [
      { word: "barometric", definition: "relating to pressure" },
      { word: "barotrauma", definition: "pressure injury" },
      { word: "baroreceptor", definition: "pressure sensor" },
      { word: "baroreflex", definition: "pressure response" }
    ],
    specialty: "Emergency Medicine",
    relatedTerms: ["pressure", "weight"],
    clinicalContext: "Important for diving medicine and pressure injuries"
  },
  {
    root: "bas/o",
    meaning: "base, alkaline",
    origin: "Greek",
    examples: [
      { word: "base", definition: "alkaline substance" },
      { word: "basic", definition: "alkaline" },
      { word: "basophil", definition: "base-loving cell" },
      { word: "basophilia", definition: "increased basophils" }
    ],
    specialty: "Hematology",
    relatedTerms: ["base", "alkaline"],
    clinicalContext: "Important for acid-base balance and blood disorders"
  },
  {
    root: "bil/i",
    meaning: "bile",
    origin: "Latin",
    examples: [
      { word: "bile", definition: "liver digestive fluid" },
      { word: "biliary", definition: "relating to bile" },
      { word: "bilirubin", definition: "bile pigment" },
      { word: "cholangiogram", definition: "bile duct X-ray" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["bile", "gallbladder"],
    clinicalContext: "Critical for liver disease and digestive disorders"
  },
  {
    root: "blast/o",
    meaning: "germ, bud, embryonic",
    origin: "Greek",
    examples: [
      { word: "blastocyst", definition: "early embryo stage" },
      { word: "osteoblast", definition: "bone-forming cell" },
      { word: "blastoma", definition: "embryonic tumor" },
      { word: "neuroblast", definition: "nerve precursor cell" }
    ],
    specialty: "Oncology",
    relatedTerms: ["embryonic", "immature cell"],
    clinicalContext: "Critical for cancer diagnosis and developmental biology"
  },
  {
    root: "blephar/o",
    meaning: "eyelid",
    origin: "Greek",
    examples: [
      { word: "blepharitis", definition: "eyelid inflammation" },
      { word: "blepharoplasty", definition: "eyelid surgery" },
      { word: "blepharospasm", definition: "eyelid spasm" },
      { word: "blepharostasis", definition: "eyelid drooping" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["eyelid", "palpebra"],
    clinicalContext: "Important for eyelid disorders and cosmetic surgery"
  },
  {
    root: "brachi/o",
    meaning: "arm",
    origin: "Greek",
    examples: [
      { word: "brachial", definition: "relating to arm" },
      { word: "brachiocephalic", definition: "arm-head vessel" },
      { word: "brachioradialis", definition: "arm-radius muscle" },
      { word: "brachioplasty", definition: "arm surgery" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["arm", "upper limb"],
    clinicalContext: "Important for arm fractures and vascular procedures"
  },
  {
    root: "brachy/o",
    meaning: "short",
    origin: "Greek",
    examples: [
      { word: "brachycephaly", definition: "short head" },
      { word: "brachydactyly", definition: "short fingers" },
      { word: "brachytherapy", definition: "short-distance radiation" },
      { word: "brachycardia", definition: "slow heart rate" }
    ],
    specialty: "Genetics",
    relatedTerms: ["short", "abbreviated"],
    clinicalContext: "Important for genetic conditions and radiation therapy"
  },
  {
    root: "bronch/o",
    meaning: "bronchus, airway",
    origin: "Greek",
    examples: [
      { word: "bronchitis", definition: "bronchus inflammation" },
      { word: "bronchoscopy", definition: "bronchus examination" },
      { word: "bronchodilator", definition: "airway opener" },
      { word: "bronchiectasis", definition: "bronchus dilation" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["bronchus", "airway"],
    clinicalContext: "Critical for respiratory disease and lung procedures"
  },
  {
    root: "bucc/o",
    meaning: "cheek",
    origin: "Latin",
    examples: [
      { word: "buccal", definition: "relating to cheek" },
      { word: "buccolingual", definition: "cheek-tongue" },
      { word: "buccinator", definition: "cheek muscle" },
      { word: "bucconasal", definition: "cheek-nose" }
    ],
    specialty: "Dentistry",
    relatedTerms: ["cheek", "mouth side"],
    clinicalContext: "Important for dental procedures and oral examination"
  },
  {
    root: "burs/o",
    meaning: "bursa, fluid sac",
    origin: "Greek",
    examples: [
      { word: "bursa", definition: "fluid-filled sac" },
      { word: "bursitis", definition: "bursa inflammation" },
      { word: "bursectomy", definition: "bursa removal" },
      { word: "subacromial", definition: "below shoulder bursa" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["bursa", "joint sac"],
    clinicalContext: "Important for joint pain and sports medicine"
  },
  {
    root: "calc/o",
    meaning: "calcium, lime",
    origin: "Latin",
    examples: [
      { word: "calcium", definition: "mineral element" },
      { word: "calcification", definition: "calcium deposit" },
      { word: "hypercalcemia", definition: "high calcium" },
      { word: "calculus", definition: "stone formation" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["calcium", "mineral"],
    clinicalContext: "Critical for bone health and metabolic disorders"
  },
  {
    root: "calcane/o",
    meaning: "heel bone, calcaneus",
    origin: "Latin",
    examples: [
      { word: "calcaneus", definition: "heel bone" },
      { word: "calcaneal", definition: "relating to heel" },
      { word: "calcaneofibular", definition: "heel-fibula ligament" },
      { word: "subcalcaneal", definition: "below heel bone" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["heel bone", "foot"],
    clinicalContext: "Important for foot injuries and ankle problems"
  },
  {
    root: "cali/o",
    meaning: "calyx, cup",
    origin: "Greek",
    examples: [
      { word: "calyx", definition: "kidney cup" },
      { word: "caliceal", definition: "relating to calyx" },
      { word: "caliectasis", definition: "calyx dilation" },
      { word: "pyelocaliceal", definition: "pelvis-calyx system" }
    ],
    specialty: "Urology",
    relatedTerms: ["kidney cup", "collecting system"],
    clinicalContext: "Important for kidney stones and urological procedures"
  },
  {
    root: "capill/o",
    meaning: "capillary, hair-like vessel",
    origin: "Latin",
    examples: [
      { word: "capillary", definition: "smallest blood vessel" },
      { word: "capillaritis", definition: "capillary inflammation" },
      { word: "capilloscopy", definition: "capillary examination" },
      { word: "pericapillary", definition: "around capillaries" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["capillary", "microvascular"],
    clinicalContext: "Important for circulation and vascular disease"
  },
  {
    root: "capit/o",
    meaning: "head",
    origin: "Latin",
    examples: [
      { word: "capital", definition: "relating to head" },
      { word: "capitate", definition: "head-shaped bone" },
      { word: "capitellum", definition: "small head" },
      { word: "decapitation", definition: "head removal" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["head", "chief"],
    clinicalContext: "Important for anatomical descriptions and surgery"
  },
  {
    root: "capsul/o",
    meaning: "capsule, small container",
    origin: "Latin",
    examples: [
      { word: "capsule", definition: "enclosing structure" },
      { word: "capsulitis", definition: "capsule inflammation" },
      { word: "capsulotomy", definition: "capsule incision" },
      { word: "encapsulated", definition: "enclosed in capsule" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["capsule", "covering"],
    clinicalContext: "Critical for joint surgery and organ pathology"
  },
  {
    root: "carcin/o",
    meaning: "cancer, crab",
    origin: "Greek",
    examples: [
      { word: "carcinoma", definition: "malignant tumor" },
      { word: "carcinogenic", definition: "cancer-causing" },
      { word: "carcinogenesis", definition: "cancer development" },
      { word: "carcinoid", definition: "cancer-like tumor" }
    ],
    specialty: "Oncology",
    relatedTerms: ["cancer", "malignant"],
    clinicalContext: "Critical for cancer diagnosis and treatment"
  },
  {
    root: "cardi/o",
    meaning: "heart",
    origin: "Greek",
    examples: [
      { word: "cardiac", definition: "relating to heart" },
      { word: "cardiology", definition: "study of heart" },
      { word: "cardiomyopathy", definition: "heart muscle disease" },
      { word: "cardiovascular", definition: "heart-vessel system" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["heart", "cardiac"],
    clinicalContext: "Critical for heart disease diagnosis and treatment"
  },
  {
    root: "carp/o",
    meaning: "wrist",
    origin: "Greek",
    examples: [
      { word: "carpal", definition: "relating to wrist" },
      { word: "carpus", definition: "wrist bones" },
      { word: "metacarpal", definition: "beyond wrist" },
      { word: "carpectomy", definition: "wrist bone removal" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["wrist", "carpal bones"],
    clinicalContext: "Important for wrist injuries and hand surgery"
  },
  {
    root: "caud/o",
    meaning: "tail, toward feet",
    origin: "Latin",
    examples: [
      { word: "caudal", definition: "toward tail/feet" },
      { word: "caudad", definition: "in tail direction" },
      { word: "caudate", definition: "having tail" },
      { word: "caudolateral", definition: "tail-side direction" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["tail", "inferior"],
    clinicalContext: "Important for anatomical positioning and surgery"
  },
  {
    root: "cec/o",
    meaning: "cecum, blind pouch",
    origin: "Latin",
    examples: [
      { word: "cecum", definition: "first part of colon" },
      { word: "cecal", definition: "relating to cecum" },
      { word: "cecopexy", definition: "cecum fixation" },
      { word: "ileocecal", definition: "ileum-cecum valve" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["cecum", "large intestine"],
    clinicalContext: "Important for appendicitis and colon surgery"
  },
  {
    root: "cellul/o",
    meaning: "small cell, cellular",
    origin: "Latin",
    examples: [
      { word: "cellular", definition: "relating to cells" },
      { word: "cellulitis", definition: "tissue inflammation" },
      { word: "subcellular", definition: "below cell level" },
      { word: "multicellular", definition: "many cells" }
    ],
    specialty: "Pathology",
    relatedTerms: ["cell", "tissue"],
    clinicalContext: "Important for infections and cellular biology"
  },
  {
    root: "cephal/o",
    meaning: "head",
    origin: "Greek",
    examples: [
      { word: "cephalic", definition: "toward head" },
      { word: "cephalalgia", definition: "headache" },
      { word: "hydrocephalus", definition: "water on brain" },
      { word: "cephalometry", definition: "head measurement" }
    ],
    specialty: "Neurology",
    relatedTerms: ["head", "cranial"],
    clinicalContext: "Critical for brain disorders and obstetrics"
  },
  {
    root: "cerebell/o",
    meaning: "cerebellum, little brain",
    origin: "Latin",
    examples: [
      { word: "cerebellar", definition: "relating to cerebellum" },
      { word: "cerebellitis", definition: "cerebellum inflammation" },
      { word: "cerebellopontine", definition: "cerebellum-pons angle" },
      { word: "cerebellar", definition: "balance coordination" }
    ],
    specialty: "Neurology",
    relatedTerms: ["cerebellum", "balance"],
    clinicalContext: "Important for movement disorders and balance"
  },
  {
    root: "cerebr/o",
    meaning: "brain, cerebrum",
    origin: "Latin",
    examples: [
      { word: "cerebral", definition: "relating to brain" },
      { word: "cerebrospinal", definition: "brain-spinal" },
      { word: "cerebrovascular", definition: "brain vessels" },
      { word: "cerebritis", definition: "brain inflammation" }
    ],
    specialty: "Neurology",
    relatedTerms: ["brain", "cerebrum"],
    clinicalContext: "Critical for brain diseases and neurological disorders"
  },
  {
    root: "cervic/o",
    meaning: "neck, cervix",
    origin: "Latin",
    examples: [
      { word: "cervical", definition: "relating to neck/cervix" },
      { word: "cervicitis", definition: "cervix inflammation" },
      { word: "cervicalgia", definition: "neck pain" },
      { word: "cervicotomy", definition: "neck incision" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["neck", "cervix"],
    clinicalContext: "Important for spine surgery and gynecology"
  },
  {
    root: "cheil/o",
    meaning: "lip",
    origin: "Greek",
    examples: [
      { word: "cheilitis", definition: "lip inflammation" },
      { word: "cheiloplasty", definition: "lip surgery" },
      { word: "cheiloschisis", definition: "cleft lip" },
      { word: "cheilosis", definition: "lip condition" }
    ],
    specialty: "Plastic Surgery",
    relatedTerms: ["lip", "mouth"],
    clinicalContext: "Important for cleft lip repair and oral surgery"
  },
  {
    root: "chir/o",
    meaning: "hand",
    origin: "Greek",
    examples: [
      { word: "chiropractor", definition: "hand treatment" },
      { word: "chirality", definition: "handedness" },
      { word: "chirospasm", definition: "hand spasm" },
      { word: "chiropractic", definition: "hand manipulation" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["hand", "manual"],
    clinicalContext: "Important for hand surgery and manual therapy"
  },
  {
    root: "chol/e",
    meaning: "bile, gall",
    origin: "Greek",
    examples: [
      { word: "cholesterol", definition: "bile solid" },
      { word: "cholecystitis", definition: "gallbladder inflammation" },
      { word: "cholelithiasis", definition: "gallstones" },
      { word: "cholangitis", definition: "bile duct inflammation" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["bile", "gallbladder"],
    clinicalContext: "Critical for gallbladder disease and liver disorders"
  },
  {
    root: "chondr/o",
    meaning: "cartilage",
    origin: "Greek",
    examples: [
      { word: "chondroma", definition: "cartilage tumor" },
      { word: "chondritis", definition: "cartilage inflammation" },
      { word: "chondroplasty", definition: "cartilage repair" },
      { word: "osteochondritis", definition: "bone-cartilage inflammation" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["cartilage", "gristle"],
    clinicalContext: "Critical for joint disorders and sports injuries"
  },
  {
    root: "chori/o",
    meaning: "chorion, fetal membrane",
    origin: "Greek",
    examples: [
      { word: "chorion", definition: "outer fetal membrane" },
      { word: "chorionic", definition: "relating to chorion" },
      { word: "chorioamnionitis", definition: "membrane infection" },
      { word: "choriocarcinoma", definition: "chorion cancer" }
    ],
    specialty: "Obstetrics",
    relatedTerms: ["chorion", "placenta"],
    clinicalContext: "Critical for pregnancy complications and cancer"
  },
  {
    root: "choroid/o",
    meaning: "choroid, vascular layer",
    origin: "Greek",
    examples: [
      { word: "choroid", definition: "eye vascular layer" },
      { word: "choroidal", definition: "relating to choroid" },
      { word: "choroiditis", definition: "choroid inflammation" },
      { word: "choroideremia", definition: "choroid degeneration" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["choroid", "eye layer"],
    clinicalContext: "Important for retinal diseases and eye inflammation"
  },
  {
    root: "chyl/o",
    meaning: "chyle, milky fluid",
    origin: "Greek",
    examples: [
      { word: "chyle", definition: "milky lymph" },
      { word: "chylous", definition: "containing chyle" },
      { word: "chylothorax", definition: "chyle in chest" },
      { word: "chylomicron", definition: "fat particle" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["chyle", "lymphatic fluid"],
    clinicalContext: "Important for lymphatic disorders and nutrition"
  },
  {
    root: "cili/o",
    meaning: "eyelash, cilium",
    origin: "Latin",
    examples: [
      { word: "cilium", definition: "eyelash or cell projection" },
      { word: "ciliary", definition: "relating to cilia" },
      { word: "ciliogenesis", definition: "cilia formation" },
      { word: "superciliary", definition: "above eyebrow" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["eyelash", "cilia"],
    clinicalContext: "Important for eye anatomy and genetic diseases"
  },
  {
    root: "clavicul/o",
    meaning: "clavicle, collarbone",
    origin: "Latin",
    examples: [
      { word: "clavicular", definition: "relating to clavicle" },
      { word: "clavicle", definition: "collarbone" },
      { word: "subclavicular", definition: "below clavicle" },
      { word: "sternoclavicular", definition: "breastbone-clavicle" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["clavicle", "collarbone"],
    clinicalContext: "Important for shoulder injuries and chest surgery"
  },
  {
    root: "cleid/o",
    meaning: "clavicle, key",
    origin: "Greek",
    examples: [
      { word: "cleidocranial", definition: "clavicle-skull condition" },
      { word: "cleidal", definition: "relating to clavicle" },
      { word: "cleidotomy", definition: "clavicle cutting" },
      { word: "acromioclavicular", definition: "shoulder-clavicle joint" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["clavicle", "key bone"],
    clinicalContext: "Important for genetic conditions and shoulder problems"
  },
  {
    root: "cochle/o",
    meaning: "cochlea, snail",
    origin: "Greek",
    examples: [
      { word: "cochlea", definition: "inner ear spiral" },
      { word: "cochlear", definition: "relating to cochlea" },
      { word: "cochleitis", definition: "cochlea inflammation" },
      { word: "cochleostomy", definition: "cochlea opening" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["cochlea", "inner ear"],
    clinicalContext: "Critical for hearing loss and cochlear implants"
  },
  {
    root: "col/o",
    meaning: "colon, large intestine",
    origin: "Greek",
    examples: [
      { word: "colon", definition: "large intestine" },
      { word: "colonic", definition: "relating to colon" },
      { word: "colostomy", definition: "colon opening" },
      { word: "colectomy", definition: "colon removal" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["colon", "large bowel"],
    clinicalContext: "Critical for colon cancer and bowel surgery"
  },
  {
    root: "colp/o",
    meaning: "vagina",
    origin: "Greek",
    examples: [
      { word: "colposcopy", definition: "vagina examination" },
      { word: "colpitis", definition: "vagina inflammation" },
      { word: "colporrhaphy", definition: "vagina repair" },
      { word: "colpotomy", definition: "vagina incision" }
    ],
    specialty: "Gynecology",
    relatedTerms: ["vagina", "birth canal"],
    clinicalContext: "Important for gynecological procedures and infections"
  },
  {
    root: "conjunctiv/o",
    meaning: "conjunctiva, eye membrane",
    origin: "Latin",
    examples: [
      { word: "conjunctiva", definition: "eye surface membrane" },
      { word: "conjunctival", definition: "relating to conjunctiva" },
      { word: "conjunctivitis", definition: "conjunctiva inflammation" },
      { word: "subconjunctival", definition: "below conjunctiva" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["conjunctiva", "eye lining"],
    clinicalContext: "Important for eye infections and allergies"
  },
  {
    root: "core/o",
    meaning: "pupil",
    origin: "Greek",
    examples: [
      { word: "coremorphosis", definition: "pupil deformity" },
      { word: "corectopia", definition: "displaced pupil" },
      { word: "coreoplasty", definition: "pupil repair" },
      { word: "anisocoria", definition: "unequal pupils" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["pupil", "iris opening"],
    clinicalContext: "Important for pupil disorders and neurological signs"
  },
  {
    root: "corne/o",
    meaning: "cornea",
    origin: "Latin",
    examples: [
      { word: "cornea", definition: "clear eye front" },
      { word: "corneal", definition: "relating to cornea" },
      { word: "corneoplasty", definition: "cornea repair" },
      { word: "keratoconus", definition: "cone-shaped cornea" }
    ],
    specialty: "Ophthalmology",
    relatedTerms: ["cornea", "eye window"],
    clinicalContext: "Critical for corneal transplants and eye surgery"
  },
  {
    root: "coron/o",
    meaning: "crown, coronary",
    origin: "Latin",
    examples: [
      { word: "coronary", definition: "crown-like vessels" },
      { word: "coronal", definition: "crown plane" },
      { word: "coronoid", definition: "crown-shaped" },
      { word: "coronoplasty", definition: "coronary repair" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["crown", "coronary artery"],
    clinicalContext: "Critical for heart disease and cardiac procedures"
  },
  {
    root: "corpor/o",
    meaning: "body",
    origin: "Latin",
    examples: [
      { word: "corporate", definition: "body-related" },
      { word: "corporal", definition: "bodily" },
      { word: "corpus", definition: "body structure" },
      { word: "incorporate", definition: "take into body" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["body", "physical"],
    clinicalContext: "Important for anatomical descriptions and pathology"
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