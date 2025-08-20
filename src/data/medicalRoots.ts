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