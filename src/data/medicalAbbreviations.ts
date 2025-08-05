export interface MedicalAbbreviation {
  abbreviation: string;
  fullForm: string;
  description: string;
  specialty: string;
  system: string;
  plainDefinition: string;
  clinicalExample: string;
  relatedTerms: string[];
  icd10Code?: string;
  seoTitle: string;
  seoDescription: string;
}

export const medicalAbbreviations: MedicalAbbreviation[] = [
  {
    abbreviation: "ABG",
    fullForm: "Arterial Blood Gases",
    description: "You may have an ABG test to detect lung diseases.",
    specialty: "Pulmonology",
    system: "Respiratory System",
    plainDefinition: "A blood test that measures oxygen, carbon dioxide, and acid-base levels in arterial blood to assess lung function and breathing.",
    clinicalExample: "Patient's ABG results showed pH 7.35, PaCO2 45 mmHg, and PaO2 80 mmHg, indicating mild respiratory acidosis.",
    relatedTerms: ["Blood Gas Analysis", "Oxygen Saturation", "pH Level", "Respiratory Function"],
    icd10Code: "Z01.811",
    seoTitle: "ABG (Arterial Blood Gases) - Definition & Clinical Use | S10.AI",
    seoDescription: "Learn about ABG (Arterial Blood Gases) test - what it measures, when it's used, and how it helps diagnose lung diseases and breathing problems."
  },
  {
    abbreviation: "ACE",
    fullForm: "Angiotensin Converting Enzyme",
    description: "Drugs called ACE inhibitors are used to treat high blood pressure, heart failure, diabetes and kidney diseases.",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    plainDefinition: "An enzyme that helps regulate blood pressure by converting angiotensin I to angiotensin II, which causes blood vessels to narrow.",
    clinicalExample: "Patient was prescribed ACE inhibitor lisinopril 10mg daily for hypertension management.",
    relatedTerms: ["ACE Inhibitors", "Hypertension", "Heart Failure", "Kidney Disease"],
    icd10Code: "I10",
    seoTitle: "ACE (Angiotensin Converting Enzyme) - Medical Definition | S10.AI",
    seoDescription: "Understand ACE (Angiotensin Converting Enzyme) and ACE inhibitors used to treat high blood pressure, heart failure, and kidney diseases."
  },
  {
    abbreviation: "ACL",
    fullForm: "Anterior Cruciate Ligament",
    description: "Commonly injured part of the knee",
    specialty: "Orthopedics",
    system: "Musculoskeletal System",
    plainDefinition: "A key ligament in the knee that connects the thigh bone to the shin bone and helps stabilize the knee joint during movement.",
    clinicalExample: "MRI revealed complete ACL tear requiring surgical reconstruction with physical therapy rehabilitation.",
    relatedTerms: ["Knee Injury", "Sports Medicine", "Ligament Tear", "Orthopedic Surgery"],
    icd10Code: "S83.511A",
    seoTitle: "ACL (Anterior Cruciate Ligament) - Knee Injury Guide | S10.AI",
    seoDescription: "Learn about ACL (Anterior Cruciate Ligament) injuries, symptoms, treatment options, and recovery process for this common knee injury."
  },
  {
    abbreviation: "ADHD",
    fullForm: "Attention Deficit Hyperactivity Disorder",
    description: "A behavior disorder",
    specialty: "Psychiatry",
    system: "Nervous System",
    plainDefinition: "A neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity that interferes with daily functioning.",
    clinicalExample: "Child diagnosed with ADHD combined type, started on methylphenidate with behavioral therapy recommendations.",
    relatedTerms: ["Attention Disorder", "Hyperactivity", "Neurodevelopmental Disorder", "Behavioral Therapy"],
    icd10Code: "F90.9",
    seoTitle: "ADHD (Attention Deficit Hyperactivity Disorder) - Symptoms & Treatment | S10.AI",
    seoDescription: "Comprehensive guide to ADHD (Attention Deficit Hyperactivity Disorder) - symptoms, diagnosis, treatment options, and management strategies."
  },
  {
    abbreviation: "AFIB",
    fullForm: "Atrial Fibrillation",
    description: "A disturbance of the rhythm of the heart",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    plainDefinition: "An irregular and often rapid heart rhythm that occurs when the heart's upper chambers beat chaotically and out of sync with the lower chambers.",
    clinicalExample: "EKG showed atrial fibrillation with rapid ventricular response at 140 bpm, patient started on anticoagulation.",
    relatedTerms: ["Arrhythmia", "Heart Rhythm", "Anticoagulation", "Stroke Risk"],
    icd10Code: "I48.91",
    seoTitle: "AFIB (Atrial Fibrillation) - Heart Rhythm Disorder Guide | S10.AI",
    seoDescription: "Understanding AFIB (Atrial Fibrillation) - causes, symptoms, treatment options, and stroke prevention strategies for this heart rhythm disorder."
  },
  {
    abbreviation: "AIDS",
    fullForm: "Acquired Immunodeficiency Syndrome",
    description: "Infection caused by human immunodeficiency virus",
    specialty: "Infectious Disease",
    system: "Immune System",
    plainDefinition: "A chronic, life-threatening condition caused by HIV that severely damages the immune system, making the body unable to fight infections.",
    clinicalExample: "Patient with AIDS presenting with opportunistic infections, CD4 count below 200 cells/μL.",
    relatedTerms: ["HIV", "Immunodeficiency", "Opportunistic Infections", "Antiretroviral Therapy"],
    icd10Code: "B20",
    seoTitle: "AIDS (Acquired Immunodeficiency Syndrome) - HIV/AIDS Information | S10.AI",
    seoDescription: "Learn about AIDS (Acquired Immunodeficiency Syndrome) caused by HIV - symptoms, progression, treatment, and prevention methods."
  },
  {
    abbreviation: "HTN",
    fullForm: "Hypertension",
    description: "High blood pressure",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    plainDefinition: "A condition where blood pressure in the arteries is persistently elevated, increasing risk of heart disease, stroke, and kidney problems.",
    clinicalExample: "Patient diagnosed with stage 2 HTN with BP readings consistently above 140/90 mmHg, initiated on antihypertensive therapy.",
    relatedTerms: ["High Blood Pressure", "Cardiovascular Disease", "Antihypertensive", "Heart Disease Risk"],
    icd10Code: "I10",
    seoTitle: "HTN (Hypertension) - High Blood Pressure Guide | S10.AI",
    seoDescription: "Complete guide to HTN (Hypertension) - causes, symptoms, complications, and treatment options for high blood pressure management."
  },
  {
    abbreviation: "MI",
    fullForm: "Myocardial Infarction",
    description: "Heart attack",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    plainDefinition: "Death of heart muscle tissue due to blocked blood flow, commonly known as a heart attack, requiring immediate medical attention.",
    clinicalExample: "Patient presented with acute MI, elevated troponin levels, ST elevation on EKG, emergent cardiac catheterization performed.",
    relatedTerms: ["Heart Attack", "Cardiac Emergency", "Coronary Artery Disease", "Troponin"],
    icd10Code: "I21.9",
    seoTitle: "MI (Myocardial Infarction) - Heart Attack Information | S10.AI",
    seoDescription: "Understanding MI (Myocardial Infarction) or heart attack - symptoms, emergency treatment, causes, and recovery process."
  },
  {
    abbreviation: "DM",
    fullForm: "Diabetes Mellitus",
    description: "A group of metabolic disorders characterized by high blood sugar",
    specialty: "Endocrinology",
    system: "Endocrine System",
    plainDefinition: "A chronic condition where the body cannot properly process blood glucose due to insufficient insulin production or insulin resistance.",
    clinicalExample: "Patient with Type 2 DM, HbA1c 8.5%, started on metformin with dietary counseling and glucose monitoring.",
    relatedTerms: ["Diabetes", "Blood Sugar", "Insulin", "HbA1c", "Glucose Monitoring"],
    icd10Code: "E11.9",
    seoTitle: "DM (Diabetes Mellitus) - Diabetes Information Guide | S10.AI",
    seoDescription: "Comprehensive guide to DM (Diabetes Mellitus) - types, symptoms, management, complications, and treatment options for diabetes."
  },
  {
    abbreviation: "COPD",
    fullForm: "Chronic Obstructive Pulmonary Disease",
    description: "A lung disease that makes it hard to breathe",
    specialty: "Pulmonology",
    system: "Respiratory System",
    plainDefinition: "A progressive lung disease that blocks airflow and makes breathing difficult, usually caused by long-term exposure to irritating gases or particles.",
    clinicalExample: "COPD exacerbation with increased dyspnea and sputum production, spirometry showing FEV1 45% predicted.",
    relatedTerms: ["Emphysema", "Chronic Bronchitis", "Breathing Problems", "Smoking-related Disease"],
    icd10Code: "J44.1",
    seoTitle: "COPD (Chronic Obstructive Pulmonary Disease) - Lung Disease Guide | S10.AI",
    seoDescription: "Learn about COPD (Chronic Obstructive Pulmonary Disease) - causes, symptoms, stages, treatment, and management strategies."
  }
];

export const getAllAbbreviations = () => medicalAbbreviations.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));

export const getAbbreviationByCode = (code: string) => 
  medicalAbbreviations.find(abbr => abbr.abbreviation.toLowerCase() === code.toLowerCase());

export const searchAbbreviations = (query: string) => 
  medicalAbbreviations.filter(abbr => 
    abbr.abbreviation.toLowerCase().includes(query.toLowerCase()) ||
    abbr.fullForm.toLowerCase().includes(query.toLowerCase()) ||
    abbr.plainDefinition.toLowerCase().includes(query.toLowerCase())
  );

export const getAbbreviationsByLetter = (letter: string) =>
  medicalAbbreviations.filter(abbr => abbr.abbreviation.toLowerCase().startsWith(letter.toLowerCase()));