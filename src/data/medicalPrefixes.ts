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
  // Basic directional and positional prefixes
  {
    prefix: "a-, an-",
    meaning: "without, not, absence of",
    origin: "Greek",
    examples: [
      { word: "anemia", definition: "without blood (deficiency of red blood cells)" },
      { word: "apnea", definition: "without breathing" },
      { word: "asymptomatic", definition: "without symptoms" },
      { word: "aphasia", definition: "without speech" },
      { word: "atrophy", definition: "without growth" }
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
      { word: "abortion", definition: "termination away from full term" },
      { word: "aboral", definition: "away from the mouth" },
      { word: "abaxial", definition: "away from the axis" }
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
      { word: "admission", definition: "allowing to enter" },
      { word: "adrenal", definition: "toward the kidney" },
      { word: "adjacent", definition: "lying near to" }
    ],
    specialty: "General",
    relatedTerms: ["ac-", "af-", "ap-"],
    clinicalContext: "Indicates movement or position toward something"
  },
  {
    prefix: "ambi-",
    meaning: "both, on both sides",
    origin: "Latin",
    examples: [
      { word: "ambidextrous", definition: "using both hands equally" },
      { word: "ambilateral", definition: "on both sides" },
      { word: "ambivalent", definition: "having both positive and negative feelings" }
    ],
    specialty: "Neurology",
    relatedTerms: ["bi-", "amphi-"],
    clinicalContext: "Describes bilateral conditions or abilities"
  },
  {
    prefix: "amphi-",
    meaning: "around, on both sides",
    origin: "Greek",
    examples: [
      { word: "amphiarthrosis", definition: "joint allowing slight movement" },
      { word: "amphicoelous", definition: "concave on both sides" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["ambi-", "peri-"],
    clinicalContext: "Used in anatomical descriptions of structures"
  },
  {
    prefix: "ana-",
    meaning: "up, back, again",
    origin: "Greek",
    examples: [
      { word: "anabolism", definition: "building up of tissues" },
      { word: "analysis", definition: "breaking back into parts" },
      { word: "anastomosis", definition: "connection between vessels" }
    ],
    specialty: "Physiology",
    relatedTerms: ["re-", "retro-"],
    clinicalContext: "Indicates reversal or upward movement in metabolic processes"
  },
  {
    prefix: "ante-",
    meaning: "before, in front of",
    origin: "Latin",
    examples: [
      { word: "antenatal", definition: "before birth" },
      { word: "anterior", definition: "in front of" },
      { word: "antecubital", definition: "in front of the elbow" },
      { word: "antemortem", definition: "before death" },
      { word: "antepartum", definition: "before delivery" }
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
      { word: "antipyretic", definition: "against fever" },
      { word: "antisocial", definition: "against social norms" },
      { word: "antidote", definition: "given against poison" }
    ],
    specialty: "Pharmacology",
    relatedTerms: ["contra-", "counter-"],
    clinicalContext: "Commonly used in pharmacology and treatment terminology"
  },
  {
    prefix: "apo-",
    meaning: "away from, separation",
    origin: "Greek",
    examples: [
      { word: "apoptosis", definition: "programmed cell death" },
      { word: "apoplexy", definition: "stroke, sudden loss of function" },
      { word: "aponeurosis", definition: "flat tendon" }
    ],
    specialty: "Pathology",
    relatedTerms: ["ab-", "de-"],
    clinicalContext: "Describes separation or removal processes"
  },
  {
    prefix: "auto-",
    meaning: "self",
    origin: "Greek",
    examples: [
      { word: "autoimmune", definition: "immune system attacking self" },
      { word: "autopsy", definition: "examination of self/own body" },
      { word: "autonomic", definition: "self-governing" },
      { word: "autoclave", definition: "self-locking sterilizer" },
      { word: "autograft", definition: "transplant from same individual" }
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
      { word: "bipolar", definition: "having two poles/extremes" },
      { word: "bicuspid", definition: "having two points" },
      { word: "binocular", definition: "using both eyes" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["di-", "duo-", "twin-"],
    clinicalContext: "Describes anatomical structures or conditions involving two parts"
  },
  {
    prefix: "bio-",
    meaning: "life",
    origin: "Greek",
    examples: [
      { word: "biology", definition: "study of life" },
      { word: "biopsy", definition: "examination of living tissue" },
      { word: "biochemistry", definition: "chemistry of living things" },
      { word: "biomarker", definition: "biological indicator" },
      { word: "biomechanics", definition: "mechanics of living organisms" }
    ],
    specialty: "General",
    relatedTerms: ["vital-", "living-"],
    clinicalContext: "Fundamental prefix for life sciences and medical procedures"
  },
  {
    prefix: "brady-",
    meaning: "slow",
    origin: "Greek",
    examples: [
      { word: "bradycardia", definition: "slow heart rate" },
      { word: "bradypnea", definition: "slow breathing" },
      { word: "bradykinesia", definition: "slow movement" },
      { word: "bradylalia", definition: "slow speech" },
      { word: "bradyuria", definition: "slow urination" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["slow-", "hypo-"],
    clinicalContext: "Used to describe abnormally slow physiological processes"
  },
  {
    prefix: "cata-",
    meaning: "down, under, lower",
    origin: "Greek",
    examples: [
      { word: "catabolism", definition: "breaking down of tissues" },
      { word: "cataract", definition: "waterfall, clouding of lens" },
      { word: "catalysis", definition: "breaking down reaction" },
      { word: "catatonia", definition: "decreased muscle tone" }
    ],
    specialty: "Physiology",
    relatedTerms: ["de-", "hypo-"],
    clinicalContext: "Indicates downward movement or destructive processes"
  },
  {
    prefix: "circum-",
    meaning: "around, surrounding",
    origin: "Latin",
    examples: [
      { word: "circumcision", definition: "cutting around" },
      { word: "circumoral", definition: "around the mouth" },
      { word: "circumscribed", definition: "limited around borders" },
      { word: "circumduction", definition: "movement in circle" }
    ],
    specialty: "Surgery",
    relatedTerms: ["peri-", "around"],
    clinicalContext: "Describes procedures or conditions involving surrounding areas"
  },
  {
    prefix: "co-, con-",
    meaning: "with, together",
    origin: "Latin",
    examples: [
      { word: "congenital", definition: "born with" },
      { word: "comorbidity", definition: "disease occurring with another" },
      { word: "contraception", definition: "prevention together" },
      { word: "concurrent", definition: "occurring together" },
      { word: "coagulation", definition: "clotting together" }
    ],
    specialty: "General",
    relatedTerms: ["syn-", "together"],
    clinicalContext: "Indicates association or occurrence together"
  },
  {
    prefix: "contra-",
    meaning: "against, opposite",
    origin: "Latin",
    examples: [
      { word: "contraindication", definition: "condition against use" },
      { word: "contraception", definition: "against conception" },
      { word: "contralateral", definition: "on opposite side" },
      { word: "contraversion", definition: "turning against" },
      { word: "contracture", definition: "drawing against normal position" }
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
      { word: "detoxification", definition: "removal of toxins" },
      { word: "degeneration", definition: "breakdown of structure" },
      { word: "decubitus", definition: "lying down" }
    ],
    specialty: "General",
    relatedTerms: ["dis-", "un-", "ab-"],
    clinicalContext: "Indicates removal, reduction, or reversal of conditions"
  },
  {
    prefix: "dia-",
    meaning: "through, across, complete",
    origin: "Greek",
    examples: [
      { word: "diagnosis", definition: "knowing through examination" },
      { word: "dialysis", definition: "separation through membrane" },
      { word: "diaphoresis", definition: "sweating through skin" },
      { word: "diarrhea", definition: "flowing through" },
      { word: "diaphragm", definition: "partition across" }
    ],
    specialty: "General",
    relatedTerms: ["trans-", "through"],
    clinicalContext: "Indicates complete or thorough processes"
  },
  {
    prefix: "dis-",
    meaning: "apart, away, not",
    origin: "Latin",
    examples: [
      { word: "dislocation", definition: "displacement from normal position" },
      { word: "dissection", definition: "cutting apart" },
      { word: "dysfunction", definition: "not functioning normally" },
      { word: "disability", definition: "not able" },
      { word: "discontinue", definition: "not continue" }
    ],
    specialty: "General",
    relatedTerms: ["de-", "un-", "non-"],
    clinicalContext: "Indicates separation, negation, or reversal"
  },
  {
    prefix: "dys-",
    meaning: "difficult, painful, abnormal",
    origin: "Greek",
    examples: [
      { word: "dyspnea", definition: "difficult breathing" },
      { word: "dysphagia", definition: "difficult swallowing" },
      { word: "dysfunction", definition: "abnormal function" },
      { word: "dysuria", definition: "painful urination" },
      { word: "dysplasia", definition: "abnormal development" }
    ],
    specialty: "General",
    relatedTerms: ["mal-", "mis-"],
    clinicalContext: "Describes abnormal or impaired function of organs or systems"
  },
  {
    prefix: "ec-, ex-",
    meaning: "out, outside, away from",
    origin: "Greek/Latin",
    examples: [
      { word: "ectopic", definition: "out of place" },
      { word: "excision", definition: "cutting out" },
      { word: "exocrine", definition: "secreting outward" },
      { word: "exhale", definition: "breathe out" },
      { word: "eczema", definition: "breaking out" }
    ],
    specialty: "General",
    relatedTerms: ["extra-", "out-"],
    clinicalContext: "Indicates outward movement or external position"
  },
  {
    prefix: "endo-",
    meaning: "within, inside",
    origin: "Greek",
    examples: [
      { word: "endoscopy", definition: "looking inside" },
      { word: "endocrine", definition: "secreting within" },
      { word: "endotracheal", definition: "within the trachea" },
      { word: "endometrium", definition: "inner lining of uterus" },
      { word: "endogenous", definition: "produced within" }
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
      { word: "epigastric", definition: "above the stomach" },
      { word: "episiotomy", definition: "incision above perineum" },
      { word: "epithelium", definition: "tissue upon surfaces" }
    ],
    specialty: "General",
    relatedTerms: ["supra-", "super-"],
    clinicalContext: "Describes anatomical position or widespread occurrence"
  },
  {
    prefix: "eu-",
    meaning: "good, well, normal",
    origin: "Greek",
    examples: [
      { word: "eupnea", definition: "normal breathing" },
      { word: "euthyroid", definition: "normal thyroid function" },
      { word: "euphoria", definition: "feeling of well-being" },
      { word: "euthanasia", definition: "good death" },
      { word: "euploid", definition: "normal chromosome number" }
    ],
    specialty: "General",
    relatedTerms: ["normal-", "good-"],
    clinicalContext: "Indicates normal or optimal function"
  },
  {
    prefix: "extra-",
    meaning: "outside, beyond",
    origin: "Latin",
    examples: [
      { word: "extracellular", definition: "outside the cell" },
      { word: "extraordinary", definition: "beyond ordinary" },
      { word: "extrauterine", definition: "outside the uterus" },
      { word: "extrasystole", definition: "heartbeat outside normal rhythm" },
      { word: "extravasation", definition: "leaking outside vessels" }
    ],
    specialty: "General",
    relatedTerms: ["ex-", "outside"],
    clinicalContext: "Describes location or occurrence outside normal boundaries"
  },
  {
    prefix: "hemi-",
    meaning: "half",
    origin: "Greek",
    examples: [
      { word: "hemiplegia", definition: "paralysis of half the body" },
      { word: "hemisphere", definition: "half of a sphere" },
      { word: "hemicolectomy", definition: "removal of half the colon" },
      { word: "hemifacial", definition: "affecting half the face" },
      { word: "hemiparesis", definition: "weakness of half the body" }
    ],
    specialty: "Neurology",
    relatedTerms: ["semi-", "demi-"],
    clinicalContext: "Used to describe conditions affecting half of a structure"
  },
  {
    prefix: "hetero-",
    meaning: "different, other",
    origin: "Greek",
    examples: [
      { word: "heterogeneous", definition: "of different kinds" },
      { word: "heterozygous", definition: "having different genes" },
      { word: "heterosexual", definition: "attracted to different sex" },
      { word: "heterograft", definition: "graft from different species" },
      { word: "heterophoria", definition: "tendency for eyes to deviate" }
    ],
    specialty: "Genetics",
    relatedTerms: ["allo-", "different"],
    clinicalContext: "Indicates difference or variation from normal"
  },
  {
    prefix: "homo-",
    meaning: "same, similar",
    origin: "Greek",
    examples: [
      { word: "homogeneous", definition: "of the same kind" },
      { word: "homozygous", definition: "having identical genes" },
      { word: "homosexual", definition: "attracted to same sex" },
      { word: "homograft", definition: "graft from same species" },
      { word: "homeostasis", definition: "maintaining same state" }
    ],
    specialty: "Genetics",
    relatedTerms: ["iso-", "same"],
    clinicalContext: "Indicates similarity or sameness"
  },
  {
    prefix: "hyper-",
    meaning: "above, excessive, over",
    origin: "Greek",
    examples: [
      { word: "hypertension", definition: "high blood pressure" },
      { word: "hyperglycemia", definition: "high blood sugar" },
      { word: "hyperthermia", definition: "excessive body heat" },
      { word: "hyperplasia", definition: "excessive cell growth" },
      { word: "hyperventilation", definition: "excessive breathing" }
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
      { word: "hypoglycemia", definition: "low blood sugar" },
      { word: "hypodermic", definition: "under the skin" },
      { word: "hypothyroidism", definition: "underactive thyroid" }
    ],
    specialty: "General",
    relatedTerms: ["sub-", "under-"],
    clinicalContext: "Indicates levels below normal range"
  },
  {
    prefix: "idio-",
    meaning: "individual, distinct, unknown",
    origin: "Greek",
    examples: [
      { word: "idiopathic", definition: "disease of unknown cause" },
      { word: "idiosyncrasy", definition: "individual peculiarity" },
      { word: "idiogram", definition: "individual chromosome pattern" }
    ],
    specialty: "General",
    relatedTerms: ["individual-", "unique-"],
    clinicalContext: "Describes conditions of unknown or individual origin"
  },
  {
    prefix: "in-, im-",
    meaning: "in, into, not",
    origin: "Latin",
    examples: [
      { word: "injection", definition: "throwing into" },
      { word: "incision", definition: "cutting into" },
      { word: "inflammation", definition: "setting on fire within" },
      { word: "immobile", definition: "not movable" },
      { word: "impalpable", definition: "not able to be felt" }
    ],
    specialty: "General",
    relatedTerms: ["into-", "within-"],
    clinicalContext: "Indicates entry, inclusion, or negation"
  },
  {
    prefix: "infra-",
    meaning: "below, beneath",
    origin: "Latin",
    examples: [
      { word: "infraclavicular", definition: "below the collarbone" },
      { word: "infraorbital", definition: "below the eye socket" },
      { word: "infrared", definition: "below red light spectrum" },
      { word: "infrapatellar", definition: "below the kneecap" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["sub-", "below"],
    clinicalContext: "Describes anatomical positions below reference points"
  },
  {
    prefix: "inter-",
    meaning: "between, among",
    origin: "Latin",
    examples: [
      { word: "intercostal", definition: "between the ribs" },
      { word: "intervertebral", definition: "between vertebrae" },
      { word: "intervention", definition: "coming between" },
      { word: "intermittent", definition: "stopping between" },
      { word: "intercellular", definition: "between cells" }
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
      { word: "intrauterine", definition: "within the uterus" },
      { word: "intracranial", definition: "within the skull" },
      { word: "intraocular", definition: "within the eye" }
    ],
    specialty: "General",
    relatedTerms: ["endo-", "within-"],
    clinicalContext: "Common in describing routes of medication administration"
  },
  {
    prefix: "iso-",
    meaning: "equal, same",
    origin: "Greek",
    examples: [
      { word: "isotonic", definition: "same tension/concentration" },
      { word: "isometric", definition: "same measure" },
      { word: "isolation", definition: "making alone/same" },
      { word: "isotherm", definition: "same temperature" },
      { word: "isotope", definition: "same place in periodic table" }
    ],
    specialty: "General",
    relatedTerms: ["homo-", "equal"],
    clinicalContext: "Indicates equality or sameness in medical measurements"
  },
  {
    prefix: "macro-",
    meaning: "large, long",
    origin: "Greek",
    examples: [
      { word: "macrocephaly", definition: "large head" },
      { word: "macrophage", definition: "large eating cell" },
      { word: "macroscopic", definition: "visible to naked eye" },
      { word: "macrosomia", definition: "large body size" },
      { word: "macroglossia", definition: "enlarged tongue" }
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
      { word: "malignant", definition: "bad/harmful growth" },
      { word: "malpractice", definition: "bad practice" },
      { word: "malabsorption", definition: "poor absorption" }
    ],
    specialty: "General",
    relatedTerms: ["dys-", "mis-"],
    clinicalContext: "Indicates abnormal or harmful conditions"
  },
  {
    prefix: "mega-, megalo-",
    meaning: "large, great",
    origin: "Greek",
    examples: [
      { word: "megacolon", definition: "enlarged colon" },
      { word: "megaloblast", definition: "large immature red blood cell" },
      { word: "megakaryocyte", definition: "large cell that produces platelets" },
      { word: "megalgia", definition: "severe pain" }
    ],
    specialty: "General",
    relatedTerms: ["macro-", "large"],
    clinicalContext: "Describes abnormally large organs or cells"
  },
  {
    prefix: "meta-",
    meaning: "beyond, change, after",
    origin: "Greek",
    examples: [
      { word: "metabolism", definition: "change in living processes" },
      { word: "metastasis", definition: "change of place" },
      { word: "metamorphosis", definition: "change of form" },
      { word: "metacarpal", definition: "beyond the wrist" },
      { word: "metaphase", definition: "change phase in cell division" }
    ],
    specialty: "General",
    relatedTerms: ["trans-", "beyond"],
    clinicalContext: "Indicates transformation or progression beyond normal"
  },
  {
    prefix: "micro-",
    meaning: "small",
    origin: "Greek",
    examples: [
      { word: "microscopic", definition: "too small to see" },
      { word: "microcephaly", definition: "small head" },
      { word: "microorganism", definition: "small organism" },
      { word: "microcytic", definition: "small cell" },
      { word: "micturition", definition: "urination (small amounts)" }
    ],
    specialty: "General",
    relatedTerms: ["mini-", "small-"],
    clinicalContext: "Used to describe very small structures or organisms"
  },
  {
    prefix: "mono-",
    meaning: "one, single",
    origin: "Greek",
    examples: [
      { word: "monocyte", definition: "single-nucleus white blood cell" },
      { word: "mononucleosis", definition: "condition of single-nucleus cells" },
      { word: "monoplegia", definition: "paralysis of one limb" },
      { word: "monotherapy", definition: "treatment with single drug" },
      { word: "monocular", definition: "using one eye" }
    ],
    specialty: "General",
    relatedTerms: ["uni-", "single"],
    clinicalContext: "Describes single or individual occurrences"
  },
  {
    prefix: "multi-",
    meaning: "many, much",
    origin: "Latin",
    examples: [
      { word: "multiparous", definition: "having borne many children" },
      { word: "multifocal", definition: "having many centers" },
      { word: "multicellular", definition: "having many cells" },
      { word: "multisystem", definition: "involving many systems" },
      { word: "multimedia", definition: "using many media" }
    ],
    specialty: "General",
    relatedTerms: ["poly-", "many"],
    clinicalContext: "Indicates multiple occurrences or involvement"
  },
  {
    prefix: "neo-",
    meaning: "new, recent",
    origin: "Greek",
    examples: [
      { word: "neonate", definition: "newborn" },
      { word: "neoplasm", definition: "new growth/tumor" },
      { word: "neonatal", definition: "relating to newborns" },
      { word: "necrosis", definition: "new death of tissue" },
      { word: "neointima", definition: "new inner layer" }
    ],
    specialty: "Pediatrics",
    relatedTerms: ["new-", "recent-"],
    clinicalContext: "Common in pediatrics and oncology"
  },
  {
    prefix: "non-",
    meaning: "not, without",
    origin: "Latin",
    examples: [
      { word: "nonspecific", definition: "not specific" },
      { word: "nontoxic", definition: "not poisonous" },
      { word: "noninvasive", definition: "not invasive" },
      { word: "nonpalpable", definition: "cannot be felt" },
      { word: "nonviable", definition: "not able to live" }
    ],
    specialty: "General",
    relatedTerms: ["a-", "un-"],
    clinicalContext: "Negates or excludes characteristics"
  },
  {
    prefix: "oligo-",
    meaning: "few, little, scanty",
    origin: "Greek",
    examples: [
      { word: "oliguria", definition: "scanty urination" },
      { word: "oligospermia", definition: "few sperm" },
      { word: "oligomenorrhea", definition: "infrequent menstruation" },
      { word: "oligohydramnios", definition: "too little amniotic fluid" }
    ],
    specialty: "General",
    relatedTerms: ["few-", "scanty"],
    clinicalContext: "Describes deficient amounts or frequency"
  },
  {
    prefix: "ortho-",
    meaning: "straight, correct, normal",
    origin: "Greek",
    examples: [
      { word: "orthopedics", definition: "correction of children (bones)" },
      { word: "orthodontics", definition: "straight teeth" },
      { word: "orthopnea", definition: "breathing only when upright" },
      { word: "orthostatic", definition: "relating to standing upright" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["straight", "correct"],
    clinicalContext: "Indicates correction or normal positioning"
  },
  {
    prefix: "pan-",
    meaning: "all, entire",
    origin: "Greek",
    examples: [
      { word: "pandemic", definition: "affecting all people" },
      { word: "pancreatitis", definition: "inflammation of entire pancreas" },
      { word: "panhysterectomy", definition: "removal of entire uterus" },
      { word: "pancytopenia", definition: "deficiency of all blood cells" },
      { word: "panacea", definition: "cure-all" }
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
      { word: "paranormal", definition: "beside normal" },
      { word: "paracentesis", definition: "puncture beside/near" },
      { word: "parathyroid", definition: "beside the thyroid" }
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
      { word: "peripheral", definition: "around the edge" },
      { word: "perinatal", definition: "around birth" },
      { word: "periodontal", definition: "around the teeth" }
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
      { word: "polypharmacy", definition: "use of many medications" },
      { word: "polycystic", definition: "having many cysts" },
      { word: "polymorphic", definition: "having many forms" }
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
      { word: "postpartum", definition: "after childbirth" },
      { word: "postmortem", definition: "after death" },
      { word: "postprandial", definition: "after eating" }
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
      { word: "prevention", definition: "coming before" },
      { word: "precancerous", definition: "before cancer" },
      { word: "premature", definition: "before maturity" }
    ],
    specialty: "General",
    relatedTerms: ["ante-", "pro-", "before-"],
    clinicalContext: "Essential in describing preventive care and surgical planning"
  },
  {
    prefix: "pro-",
    meaning: "before, forward, favoring",
    origin: "Greek/Latin",
    examples: [
      { word: "prognosis", definition: "knowing beforehand" },
      { word: "prophylaxis", definition: "guarding before" },
      { word: "prolapse", definition: "falling forward" },
      { word: "proactive", definition: "acting before" },
      { word: "procaine", definition: "before cocaine (anesthetic)" }
    ],
    specialty: "General",
    relatedTerms: ["pre-", "forward"],
    clinicalContext: "Indicates forward movement or preventive action"
  },
  {
    prefix: "pseudo-",
    meaning: "false, fake",
    origin: "Greek",
    examples: [
      { word: "pseudocyst", definition: "false cyst" },
      { word: "pseudopregnancy", definition: "false pregnancy" },
      { word: "pseudopod", definition: "false foot" },
      { word: "pseudohypertrophy", definition: "false enlargement" },
      { word: "pseudomonas", definition: "false unit (bacteria)" }
    ],
    specialty: "General",
    relatedTerms: ["false-", "fake-"],
    clinicalContext: "Used to describe conditions that mimic true pathology"
  },
  {
    prefix: "quadri-",
    meaning: "four",
    origin: "Latin",
    examples: [
      { word: "quadriplegia", definition: "paralysis of four limbs" },
      { word: "quadriceps", definition: "four-headed muscle" },
      { word: "quadrant", definition: "one-fourth section" },
      { word: "quadruplet", definition: "one of four offspring" }
    ],
    specialty: "Neurology",
    relatedTerms: ["tetra-", "four"],
    clinicalContext: "Describes conditions involving four parts or limbs"
  },
  {
    prefix: "re-",
    meaning: "back, again",
    origin: "Latin",
    examples: [
      { word: "recurrence", definition: "occurring again" },
      { word: "regeneration", definition: "growing again" },
      { word: "resection", definition: "cutting back/out" },
      { word: "rehabilitation", definition: "restoring again" },
      { word: "remission", definition: "sending back" }
    ],
    specialty: "General",
    relatedTerms: ["again", "return"],
    clinicalContext: "Indicates repetition or return to previous state"
  },
  {
    prefix: "retro-",
    meaning: "backward, behind",
    origin: "Latin",
    examples: [
      { word: "retrograde", definition: "moving backward" },
      { word: "retroperitoneal", definition: "behind the peritoneum" },
      { word: "retrospective", definition: "looking backward" },
      { word: "retrovirus", definition: "backward virus (RNA to DNA)" },
      { word: "retroversion", definition: "turning backward" }
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
      { word: "semipermeable", definition: "partially permeable" },
      { word: "semifowler", definition: "half-sitting position" }
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
      { word: "subacute", definition: "somewhat acute" },
      { word: "subdural", definition: "under the dura" },
      { word: "subluxation", definition: "partial dislocation" }
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
      { word: "supernumerary", definition: "above normal number" },
      { word: "superinfection", definition: "infection on top of another" },
      { word: "supersensitive", definition: "excessively sensitive" }
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
      { word: "supraventricular", definition: "above the ventricles" },
      { word: "suprasternal", definition: "above the breastbone" },
      { word: "supraclavicular", definition: "above the collarbone" }
    ],
    specialty: "Anatomy",
    relatedTerms: ["super-", "above-"],
    clinicalContext: "Precise anatomical positioning terminology"
  },
  {
    prefix: "syn-, sym-",
    meaning: "together, with",
    origin: "Greek",
    examples: [
      { word: "syndrome", definition: "running together (symptoms)" },
      { word: "synthesis", definition: "putting together" },
      { word: "sympathy", definition: "feeling with" },
      { word: "synchronous", definition: "at the same time" },
      { word: "synapse", definition: "joining together" }
    ],
    specialty: "General",
    relatedTerms: ["con-", "together"],
    clinicalContext: "Indicates union or occurrence together"
  },
  {
    prefix: "tachy-",
    meaning: "fast, rapid",
    origin: "Greek",
    examples: [
      { word: "tachycardia", definition: "fast heart rate" },
      { word: "tachypnea", definition: "rapid breathing" },
      { word: "tachyphylaxis", definition: "rapid tolerance development" },
      { word: "tachyarrhythmia", definition: "fast irregular heartbeat" },
      { word: "tachyphemia", definition: "rapid speech" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["rapid-", "fast-"],
    clinicalContext: "Used to describe abnormally fast physiological processes"
  },
  {
    prefix: "tetra-",
    meaning: "four",
    origin: "Greek",
    examples: [
      { word: "tetralogy", definition: "group of four" },
      { word: "tetracycline", definition: "antibiotic with four rings" },
      { word: "tetraplegia", definition: "paralysis of four limbs" },
      { word: "tetrapod", definition: "four-footed" }
    ],
    specialty: "General",
    relatedTerms: ["quadri-", "four"],
    clinicalContext: "Describes structures or conditions involving four components"
  },
  {
    prefix: "trans-",
    meaning: "across, through",
    origin: "Latin",
    examples: [
      { word: "transdermal", definition: "through the skin" },
      { word: "transplant", definition: "plant across" },
      { word: "transfusion", definition: "pouring across" },
      { word: "transection", definition: "cutting across" },
      { word: "transient", definition: "going across/temporary" }
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
      { word: "trimester", definition: "three-month period" },
      { word: "triad", definition: "group of three" },
      { word: "trigeminal", definition: "three twins (nerve)" }
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
      { word: "ultrafiltration", definition: "excessive filtration" },
      { word: "ultrastructure", definition: "structure beyond light microscopy" }
    ],
    specialty: "Radiology",
    relatedTerms: ["beyond-", "excessive-"],
    clinicalContext: "Common in imaging and describing extreme conditions"
  },
  {
    prefix: "un-",
    meaning: "not, reverse",
    origin: "English",
    examples: [
      { word: "unconscious", definition: "not conscious" },
      { word: "unilateral", definition: "not bilateral, one-sided" },
      { word: "unstable", definition: "not stable" },
      { word: "unresponsive", definition: "not responding" },
      { word: "unremarkable", definition: "not remarkable, normal" }
    ],
    specialty: "General",
    relatedTerms: ["non-", "in-"],
    clinicalContext: "Negates or reverses the meaning of medical terms"
  },
  {
    prefix: "uni-",
    meaning: "one, single",
    origin: "Latin",
    examples: [
      { word: "unilateral", definition: "one-sided" },
      { word: "unicellular", definition: "single-celled" },
      { word: "uniform", definition: "one form" },
      { word: "unipolar", definition: "having one pole" },
      { word: "uniocular", definition: "having one eye" }
    ],
    specialty: "General",
    relatedTerms: ["mono-", "single-"],
    clinicalContext: "Used to describe singular or one-sided conditions"
  },
  {
    prefix: "vas/o-",
    meaning: "vessel, duct",
    origin: "Latin",
    examples: [
      { word: "vasodilation", definition: "vessel widening" },
      { word: "vasoconstriction", definition: "vessel narrowing" },
      { word: "vascular", definition: "relating to vessels" },
      { word: "vasectomy", definition: "vessel cutting procedure" },
      { word: "vasculitis", definition: "vessel inflammation" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["vessel", "vascular"],
    clinicalContext: "Essential for cardiovascular and circulatory terminology"
  },
  {
    prefix: "xen/o-",
    meaning: "foreign, strange",
    origin: "Greek",
    examples: [
      { word: "xenograft", definition: "foreign tissue graft" },
      { word: "xenophobia", definition: "fear of foreigners" },
      { word: "xenobiotic", definition: "foreign chemical compound" },
      { word: "xenogenesis", definition: "reproduction involving foreign species" }
    ],
    specialty: "Transplant Surgery",
    relatedTerms: ["foreign", "alien"],
    clinicalContext: "Used in transplantation and immunology"
  },
  {
    prefix: "xer/o-",
    meaning: "dry",
    origin: "Greek",
    examples: [
      { word: "xerostomia", definition: "dry mouth" },
      { word: "xerophthalmia", definition: "dry eyes" },
      { word: "xerosis", definition: "abnormal dryness" },
      { word: "xeroderma", definition: "dry skin condition" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["dry", "arid"],
    clinicalContext: "Describes conditions involving dryness"
  },
  {
    prefix: "zyg/o-",
    meaning: "joined, paired",
    origin: "Greek",
    examples: [
      { word: "zygote", definition: "joined gametes" },
      { word: "zygoma", definition: "cheek bone" },
      { word: "syzygy", definition: "joined alignment" },
      { word: "azygos", definition: "unpaired vein" }
    ],
    specialty: "Embryology",
    relatedTerms: ["joined", "union"],
    clinicalContext: "Important in development and anatomy"
  },
  {
    prefix: "auto-",
    meaning: "self",
    origin: "Greek",
    examples: [
      { word: "autoimmune", definition: "self-immune response" },
      { word: "autopsy", definition: "self-examination" },
      { word: "autonomic", definition: "self-governing" },
      { word: "autograft", definition: "self-tissue graft" },
      { word: "autism", definition: "self-focused condition" }
    ],
    specialty: "Immunology",
    relatedTerms: ["self", "own"],
    clinicalContext: "Critical for autoimmune and self-referential conditions"
  },
  {
    prefix: "blast/o-",
    meaning: "embryonic cell, germ",
    origin: "Greek",
    examples: [
      { word: "blastocyst", definition: "embryonic cell mass" },
      { word: "osteoblast", definition: "bone-forming cell" },
      { word: "lymphoblast", definition: "immature lymphocyte" },
      { word: "erythroblast", definition: "red blood cell precursor" },
      { word: "neuroblast", definition: "nerve cell precursor" }
    ],
    specialty: "Hematology",
    relatedTerms: ["cell", "precursor"],
    clinicalContext: "Essential for cellular development and oncology"
  },
  {
    prefix: "carcin/o-",
    meaning: "cancer, malignant",
    origin: "Greek",
    examples: [
      { word: "carcinoma", definition: "malignant tumor" },
      { word: "carcinogen", definition: "cancer-causing agent" },
      { word: "carcinogenesis", definition: "cancer development" },
      { word: "carcinoid", definition: "cancer-like tumor" }
    ],
    specialty: "Oncology",
    relatedTerms: ["cancer", "malignant"],
    clinicalContext: "Fundamental for cancer terminology"
  },
  {
    prefix: "chondr/o-",
    meaning: "cartilage",
    origin: "Greek",
    examples: [
      { word: "chondritis", definition: "cartilage inflammation" },
      { word: "chondroma", definition: "cartilage tumor" },
      { word: "chondrocyte", definition: "cartilage cell" },
      { word: "achondroplasia", definition: "cartilage formation disorder" },
      { word: "perichondrium", definition: "around cartilage" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["cartilage", "gristle"],
    clinicalContext: "Important for joint and skeletal disorders"
  },
  {
    prefix: "cyst/o-",
    meaning: "bladder, sac",
    origin: "Greek",
    examples: [
      { word: "cystitis", definition: "bladder inflammation" },
      { word: "cystoscopy", definition: "bladder examination" },
      { word: "cystectomy", definition: "bladder removal" },
      { word: "polycystic", definition: "many cysts" },
      { word: "cholecyst", definition: "gallbladder" }
    ],
    specialty: "Urology",
    relatedTerms: ["bladder", "sac"],
    clinicalContext: "Essential for urological and cystic conditions"
  },
  {
    prefix: "derm/o-",
    meaning: "skin",
    origin: "Greek",
    examples: [
      { word: "dermatitis", definition: "skin inflammation" },
      { word: "dermatology", definition: "study of skin" },
      { word: "epidermis", definition: "outer skin layer" },
      { word: "hypodermic", definition: "under the skin" },
      { word: "dermatome", definition: "skin segment" }
    ],
    specialty: "Dermatology",
    relatedTerms: ["skin", "cutaneous"],
    clinicalContext: "Fundamental for skin conditions and procedures"
  },
  {
    prefix: "electr/o-",
    meaning: "electricity, electric",
    origin: "Greek",
    examples: [
      { word: "electrocardiogram", definition: "heart electrical recording" },
      { word: "electroencephalogram", definition: "brain electrical recording" },
      { word: "electrolyte", definition: "electrically conducting solution" },
      { word: "electrocautery", definition: "electrical burning" },
      { word: "electromyogram", definition: "muscle electrical recording" }
    ],
    specialty: "Cardiology",
    relatedTerms: ["electrical", "current"],
    clinicalContext: "Critical for diagnostic and therapeutic procedures"
  },
  {
    prefix: "fibr/o-",
    meaning: "fiber, fibrous tissue",
    origin: "Latin",
    examples: [
      { word: "fibrosis", definition: "fibrous tissue formation" },
      { word: "fibroma", definition: "fibrous tumor" },
      { word: "fibroblast", definition: "fiber-forming cell" },
      { word: "fibromyalgia", definition: "fibrous muscle pain" },
      { word: "fibrillation", definition: "fiber-like contractions" }
    ],
    specialty: "Pathology",
    relatedTerms: ["fiber", "fibrous"],
    clinicalContext: "Important for connective tissue disorders"
  },
  {
    prefix: "gluc/o-",
    meaning: "glucose, sugar",
    origin: "Greek",
    examples: [
      { word: "glucose", definition: "blood sugar" },
      { word: "glucagon", definition: "glucose-raising hormone" },
      { word: "gluconeogenesis", definition: "glucose formation" },
      { word: "hypoglycemia", definition: "low blood sugar" },
      { word: "glucometer", definition: "glucose measuring device" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["sugar", "sweet"],
    clinicalContext: "Essential for diabetes and metabolism"
  },
  {
    prefix: "hem/o-",
    meaning: "blood",
    origin: "Greek",
    examples: [
      { word: "hemoglobin", definition: "blood protein" },
      { word: "hemorrhage", definition: "blood loss" },
      { word: "hematoma", definition: "blood clot" },
      { word: "hemophilia", definition: "blood clotting disorder" },
      { word: "hemolysis", definition: "blood cell destruction" }
    ],
    specialty: "Hematology",
    relatedTerms: ["blood", "sanguine"],
    clinicalContext: "Fundamental for blood-related conditions"
  },
  {
    prefix: "hepat/o-",
    meaning: "liver",
    origin: "Greek",
    examples: [
      { word: "hepatitis", definition: "liver inflammation" },
      { word: "hepatoma", definition: "liver tumor" },
      { word: "hepatectomy", definition: "liver removal" },
      { word: "hepatomegaly", definition: "enlarged liver" },
      { word: "hepatotoxic", definition: "toxic to liver" }
    ],
    specialty: "Gastroenterology",
    relatedTerms: ["liver", "hepatic"],
    clinicalContext: "Essential for liver diseases and procedures"
  },
  {
    prefix: "kine/o-",
    meaning: "movement, motion",
    origin: "Greek",
    examples: [
      { word: "kinetic", definition: "relating to motion" },
      { word: "kinesiology", definition: "study of movement" },
      { word: "dyskinesia", definition: "abnormal movement" },
      { word: "akinesia", definition: "absence of movement" },
      { word: "hyperkinesia", definition: "excessive movement" }
    ],
    specialty: "Neurology",
    relatedTerms: ["movement", "motion"],
    clinicalContext: "Important for movement disorders and rehabilitation"
  },
  {
    prefix: "lip/o-",
    meaning: "fat, lipid",
    origin: "Greek",
    examples: [
      { word: "lipoma", definition: "fatty tumor" },
      { word: "liposuction", definition: "fat removal" },
      { word: "lipid", definition: "fat molecule" },
      { word: "hyperlipidemia", definition: "high blood fats" },
      { word: "lipolysis", definition: "fat breakdown" }
    ],
    specialty: "Endocrinology",
    relatedTerms: ["fat", "adipose"],
    clinicalContext: "Important for metabolic and cosmetic procedures"
  },
  {
    prefix: "lymph/o-",
    meaning: "lymph, lymphatic system",
    origin: "Latin",
    examples: [
      { word: "lymphoma", definition: "lymphatic tumor" },
      { word: "lymphocyte", definition: "lymph cell" },
      { word: "lymphadenitis", definition: "lymph node inflammation" },
      { word: "lymphedema", definition: "lymphatic swelling" },
      { word: "lymphangiogram", definition: "lymph vessel x-ray" }
    ],
    specialty: "Hematology",
    relatedTerms: ["lymphatic", "immune"],
    clinicalContext: "Critical for immune system and cancer staging"
  },
  {
    prefix: "my/o-",
    meaning: "muscle",
    origin: "Greek",
    examples: [
      { word: "myocardial", definition: "heart muscle" },
      { word: "myalgia", definition: "muscle pain" },
      { word: "myositis", definition: "muscle inflammation" },
      { word: "myopathy", definition: "muscle disease" },
      { word: "myoblast", definition: "muscle cell precursor" }
    ],
    specialty: "Neurology",
    relatedTerms: ["muscle", "muscular"],
    clinicalContext: "Fundamental for muscle disorders and cardiac conditions"
  },
  {
    prefix: "necr/o-",
    meaning: "death, dead tissue",
    origin: "Greek",
    examples: [
      { word: "necrosis", definition: "tissue death" },
      { word: "necrotizing", definition: "causing tissue death" },
      { word: "necropsy", definition: "examination of dead" },
      { word: "necrotic", definition: "relating to dead tissue" }
    ],
    specialty: "Pathology",
    relatedTerms: ["death", "dead"],
    clinicalContext: "Important for tissue death and wound healing"
  },
  {
    prefix: "nephr/o-",
    meaning: "kidney",
    origin: "Greek",
    examples: [
      { word: "nephritis", definition: "kidney inflammation" },
      { word: "nephrology", definition: "study of kidneys" },
      { word: "nephrectomy", definition: "kidney removal" },
      { word: "nephron", definition: "kidney functional unit" },
      { word: "nephrotoxic", definition: "toxic to kidneys" }
    ],
    specialty: "Nephrology",
    relatedTerms: ["kidney", "renal"],
    clinicalContext: "Essential for kidney diseases and procedures"
  },
  {
    prefix: "neur/o-",
    meaning: "nerve, nervous system",
    origin: "Greek",
    examples: [
      { word: "neurology", definition: "study of nerves" },
      { word: "neuron", definition: "nerve cell" },
      { word: "neuropathy", definition: "nerve disease" },
      { word: "neuralgia", definition: "nerve pain" },
      { word: "neurosurgery", definition: "nerve surgery" }
    ],
    specialty: "Neurology",
    relatedTerms: ["nerve", "neural"],
    clinicalContext: "Fundamental for nervous system disorders"
  },
  {
    prefix: "oste/o-",
    meaning: "bone",
    origin: "Greek",
    examples: [
      { word: "osteoporosis", definition: "bone thinning" },
      { word: "osteomyelitis", definition: "bone infection" },
      { word: "osteoblast", definition: "bone-forming cell" },
      { word: "osteoarthritis", definition: "bone joint inflammation" },
      { word: "osteotomy", definition: "bone cutting" }
    ],
    specialty: "Orthopedics",
    relatedTerms: ["bone", "skeletal"],
    clinicalContext: "Essential for bone diseases and fractures"
  },
  {
    prefix: "path/o-",
    meaning: "disease, suffering",
    origin: "Greek",
    examples: [
      { word: "pathology", definition: "study of disease" },
      { word: "pathogen", definition: "disease-causing agent" },
      { word: "neuropathy", definition: "nerve disease" },
      { word: "psychopath", definition: "mental disease" },
      { word: "pathophysiology", definition: "disease function study" }
    ],
    specialty: "Pathology",
    relatedTerms: ["disease", "illness"],
    clinicalContext: "Fundamental for disease processes and diagnosis"
  },
  {
    prefix: "phag/o-",
    meaning: "eating, swallowing",
    origin: "Greek",
    examples: [
      { word: "phagocyte", definition: "eating cell" },
      { word: "dysphagia", definition: "difficulty swallowing" },
      { word: "phagocytosis", definition: "cell eating process" },
      { word: "macrophage", definition: "large eating cell" },
      { word: "aphasia", definition: "inability to speak/swallow" }
    ],
    specialty: "Immunology",
    relatedTerms: ["eating", "consuming"],
    clinicalContext: "Important for immune function and swallowing disorders"
  },
  {
    prefix: "pneum/o-",
    meaning: "lung, air",
    origin: "Greek",
    examples: [
      { word: "pneumonia", definition: "lung inflammation" },
      { word: "pneumothorax", definition: "air in chest cavity" },
      { word: "pneumonectomy", definition: "lung removal" },
      { word: "pneumatic", definition: "relating to air" },
      { word: "pneumococcus", definition: "lung infection bacteria" }
    ],
    specialty: "Pulmonology",
    relatedTerms: ["lung", "air"],
    clinicalContext: "Essential for respiratory conditions"
  },
  {
    prefix: "rhin/o-",
    meaning: "nose",
    origin: "Greek",
    examples: [
      { word: "rhinitis", definition: "nose inflammation" },
      { word: "rhinoplasty", definition: "nose surgery" },
      { word: "rhinorrhea", definition: "runny nose" },
      { word: "rhinoscopy", definition: "nose examination" },
      { word: "rhinovirus", definition: "nose virus" }
    ],
    specialty: "Otolaryngology",
    relatedTerms: ["nose", "nasal"],
    clinicalContext: "Important for nasal and sinus conditions"
  },
  {
    prefix: "scler/o-",
    meaning: "hard, hardening",
    origin: "Greek",
    examples: [
      { word: "sclerosis", definition: "hardening condition" },
      { word: "sclera", definition: "hard eye layer" },
      { word: "atherosclerosis", definition: "artery hardening" },
      { word: "scleritis", definition: "sclera inflammation" },
      { word: "sclerotherapy", definition: "hardening treatment" }
    ],
    specialty: "Rheumatology",
    relatedTerms: ["hard", "hardening"],
    clinicalContext: "Important for autoimmune and vascular conditions"
  },
  {
    prefix: "therm/o-",
    meaning: "heat, temperature",
    origin: "Greek",
    examples: [
      { word: "thermometer", definition: "temperature measuring device" },
      { word: "hypothermia", definition: "low body temperature" },
      { word: "hyperthermia", definition: "high body temperature" },
      { word: "thermotherapy", definition: "heat treatment" },
      { word: "thermoregulation", definition: "temperature control" }
    ],
    specialty: "Emergency Medicine",
    relatedTerms: ["heat", "temperature"],
    clinicalContext: "Important for temperature-related conditions"
  },
  {
    prefix: "thromb/o-",
    meaning: "blood clot",
    origin: "Greek",
    examples: [
      { word: "thrombosis", definition: "blood clot formation" },
      { word: "thrombus", definition: "blood clot" },
      { word: "thrombocyte", definition: "clotting cell (platelet)" },
      { word: "thromboembolism", definition: "clot traveling in blood" },
      { word: "thrombolysis", definition: "clot dissolution" }
    ],
    specialty: "Hematology",
    relatedTerms: ["clot", "coagulation"],
    clinicalContext: "Critical for cardiovascular and clotting disorders"
  },
  {
    prefix: "toxic/o-",
    meaning: "poison, poisonous",
    origin: "Greek",
    examples: [
      { word: "toxic", definition: "poisonous" },
      { word: "toxicology", definition: "study of poisons" },
      { word: "detoxification", definition: "poison removal" },
      { word: "hepatotoxic", definition: "poisonous to liver" },
      { word: "neurotoxic", definition: "poisonous to nerves" }
    ],
    specialty: "Toxicology",
    relatedTerms: ["poison", "harmful"],
    clinicalContext: "Important for poisoning and drug safety"
  },
  {
    prefix: "troph/o-",
    meaning: "nourishment, development",
    origin: "Greek",
    examples: [
      { word: "atrophy", definition: "lack of nourishment" },
      { word: "hypertrophy", definition: "excessive growth" },
      { word: "dystrophy", definition: "abnormal development" },
      { word: "trophoblast", definition: "nourishing cell layer" },
      { word: "neurotrophic", definition: "nerve nourishing" }
    ],
    specialty: "Pathology",
    relatedTerms: ["nourishment", "growth"],
    clinicalContext: "Essential for growth disorders and muscle conditions"
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