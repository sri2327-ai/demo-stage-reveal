export interface MedicalPhrase {
  id: string;
  phrase: string;
  meaning: string;
  sectionOfNote: string;
  specialty: string;
  clinicalContext: string;
  exampleUsage: string;
  relatedPhrases: string[];
  icd10Link?: string;
  usageContext: string;
}

export const mockMedicalPhrases: MedicalPhrase[] = [
  {
    id: 'patient-denies-chest-pain',
    phrase: 'Patient denies chest pain',
    meaning: 'Patient reports no experience of chest discomfort or pain.',
    sectionOfNote: 'Review of Systems (ROS)',
    specialty: 'Cardiology',
    clinicalContext: 'Commonly used in documenting cardiovascular review.',
    exampleUsage: 'SOAP note style: "ROS: Patient denies chest pain, palpitations, shortness of breath."',
    relatedPhrases: ['No chest pain', 'Denies angina', 'No cardiac symptoms'],
    icd10Link: 'R07.9 – Chest pain, unspecified',
    usageContext: 'Used to document negative symptoms, important for differential diagnosis.'
  },
  {
    id: 'endoscopic-findings-erosive-esophagitis',
    phrase: 'Endoscopic findings show severe erosive esophagitis',
    meaning: 'Upper endoscopy reveals inflammation and erosion of the esophageal lining.',
    sectionOfNote: 'Assessment',
    specialty: 'Gastroenterology',
    clinicalContext: 'Documentation of endoscopic findings in GERD evaluation.',
    exampleUsage: 'Assessment: "Endoscopic findings show severe erosive esophagitis, Grade C per Los Angeles classification."',
    relatedPhrases: ['Erosive GERD', 'LA Grade C esophagitis', 'Severe reflux esophagitis'],
    icd10Link: 'K20.9 – Esophagitis, unspecified',
    usageContext: 'Used to document severity of gastroesophageal reflux disease based on endoscopic appearance.'
  },
  {
    id: 'ercp-bile-duct-obstruction',
    phrase: 'Endoscopic retrograde cholangiopancreatography shows bile duct obstruction',
    meaning: 'ERCP procedure reveals blockage in the bile duct system.',
    sectionOfNote: 'Assessment',
    specialty: 'Gastroenterology',
    clinicalContext: 'Documentation of ERCP findings in biliary obstruction evaluation.',
    exampleUsage: 'Assessment: "ERCP shows bile duct obstruction at the level of the ampulla with upstream dilation."',
    relatedPhrases: ['Biliary obstruction', 'Choledocholithiasis', 'Common bile duct stenosis'],
    icd10Link: 'K83.1 – Obstruction of bile duct',
    usageContext: 'Used to document therapeutic and diagnostic ERCP findings in biliary disease.'
  },
  {
    id: 'stool-occult-blood-positive',
    phrase: 'Stool is positive for occult blood suggesting possible gastrointestinal bleeding',
    meaning: 'Fecal occult blood test indicates presence of blood in stool, suggesting GI bleeding.',
    sectionOfNote: 'Assessment',
    specialty: 'Gastroenterology',
    clinicalContext: 'Documentation of positive FOBT results in GI bleeding evaluation.',
    exampleUsage: 'Assessment: "Stool is positive for occult blood suggesting possible gastrointestinal bleeding, further evaluation with colonoscopy indicated."',
    relatedPhrases: ['FOBT positive', 'Guaiac positive stool', 'GI bleeding suspected'],
    icd10Link: 'K92.2 – Gastrointestinal hemorrhage, unspecified',
    usageContext: 'Used to document screening results that may indicate lower GI pathology requiring further investigation.'
  },
  {
    id: 'upper-endoscopy-bleeding-varices',
    phrase: 'Upper endoscopy reveals bleeding esophageal varices requiring band ligation',
    meaning: 'EGD shows actively bleeding esophageal varices treated with endoscopic banding.',
    sectionOfNote: 'Assessment',
    specialty: 'Gastroenterology',
    clinicalContext: 'Documentation of therapeutic endoscopy in variceal bleeding.',
    exampleUsage: 'Assessment: "Upper endoscopy reveals bleeding esophageal varices requiring band ligation, successfully treated with 4 bands placed."',
    relatedPhrases: ['Variceal bleeding', 'Esophageal banding', 'Portal hypertension bleeding'],
    icd10Link: 'I85.01 – Esophageal varices with bleeding',
    usageContext: 'Used to document emergency endoscopic intervention for variceal hemorrhage in portal hypertension.'
  },
  {
    id: 'comprehensive-history-physical',
    phrase: 'Comprehensive history and physical examination completed on admission',
    meaning: 'Complete medical history and physical examination performed upon patient admission.',
    sectionOfNote: 'Assessment',
    specialty: 'General',
    clinicalContext: 'Documentation of initial patient evaluation comprehensiveness.',
    exampleUsage: 'Assessment: "Comprehensive history and physical examination completed on admission, revealing pertinent findings consistent with acute exacerbation."',
    relatedPhrases: ['Complete H&P', 'Admission assessment', 'Initial evaluation'],
    usageContext: 'Used to document thorough initial patient assessment for billing and quality metrics.'
  },
  {
    id: 'medical-decision-making-evidence-based',
    phrase: 'Medical decision-making based on evidence-based clinical guidelines',
    meaning: 'Clinical decisions follow established evidence-based medical practice guidelines.',
    sectionOfNote: 'Assessment',
    specialty: 'General',
    clinicalContext: 'Documentation of evidence-based medical practice.',
    exampleUsage: 'Assessment: "Medical decision-making based on evidence-based clinical guidelines, following AHA/ACC recommendations for acute MI management."',
    relatedPhrases: ['Guideline-based care', 'Evidence-based practice', 'Standard of care'],
    usageContext: 'Used to document adherence to professional guidelines and quality care standards.'
  },
  {
    id: 'patient-records-reviewed',
    phrase: "Patient's medical records reviewed from previous hospitalizations",
    meaning: 'Prior hospitalization records have been examined and considered in current care.',
    sectionOfNote: 'Assessment',
    specialty: 'General',
    clinicalContext: 'Documentation of comprehensive record review for continuity of care.',
    exampleUsage: 'Assessment: "Patient\'s medical records reviewed from previous hospitalizations, noting similar presentations in 2019 and 2021."',
    relatedPhrases: ['Prior records reviewed', 'Historical data reviewed', 'Previous admissions noted'],
    usageContext: 'Used to demonstrate thorough evaluation and continuity of care across healthcare encounters.'
  },
  {
    id: 'symptoms-consistent-viral-syndrome',
    phrase: "Patient's symptoms and examination findings consistent with viral syndrome",
    meaning: 'Clinical presentation suggests viral illness based on symptoms and physical findings.',
    sectionOfNote: 'Assessment',
    specialty: 'General',
    clinicalContext: 'Documentation of likely viral etiology for symptom complex.',
    exampleUsage: 'Assessment: "Patient\'s symptoms and examination findings consistent with viral syndrome, supportive care recommended."',
    relatedPhrases: ['Viral illness', 'Viral upper respiratory infection', 'Viral gastroenteritis'],
    icd10Link: 'B34.9 – Viral infection, unspecified',
    usageContext: 'Used to document clinical impression when viral etiology is most likely explanation for symptoms.'
  },
  {
    id: 'pathognomonic-acute-cholecystitis',
    phrase: 'Clinical findings are pathognomonic for acute cholecystitis',
    meaning: 'Physical examination and clinical signs are characteristic and diagnostic of acute cholecystitis.',
    sectionOfNote: 'Assessment',
    specialty: 'General Surgery',
    clinicalContext: 'Documentation of classic clinical presentation for surgical condition.',
    exampleUsage: 'Assessment: "Clinical findings are pathognomonic for acute cholecystitis with positive Murphy\'s sign and RUQ tenderness."',
    relatedPhrases: ['Classic cholecystitis', 'Murphy\'s sign positive', 'Acute gallbladder inflammation'],
    icd10Link: 'K80.00 – Calculus of gallbladder with acute cholecystitis',
    usageContext: 'Used to document clear-cut diagnosis when clinical presentation is unequivocally diagnostic.'
  },
  {
    id: 'findings-consistent-acute-appendicitis',
    phrase: 'Findings are most consistent with acute appendicitis requiring surgical evaluation',
    meaning: 'Clinical and imaging findings strongly suggest acute appendicitis needing surgical consultation.',
    sectionOfNote: 'Assessment',
    specialty: 'General Surgery',
    clinicalContext: 'Documentation of likely appendicitis diagnosis requiring surgery.',
    exampleUsage: 'Assessment: "Findings are most consistent with acute appendicitis requiring surgical evaluation, surgery consulted for urgent appendectomy."',
    relatedPhrases: ['Acute appendicitis', 'Surgical abdomen', 'Appendectomy indicated'],
    icd10Link: 'K35.9 – Acute appendicitis, unspecified',
    usageContext: 'Used to document surgical emergency requiring immediate intervention and specialist consultation.'
  },
  {
    id: 'physical-exam-acute-appendicitis',
    phrase: 'Physical examination findings suggest acute appendicitis',
    meaning: 'Clinical examination reveals signs and symptoms indicative of acute appendicitis.',
    sectionOfNote: 'Assessment',
    specialty: 'General Surgery',
    clinicalContext: 'Documentation of clinical findings supporting appendicitis diagnosis.',
    exampleUsage: 'Assessment: "Physical examination findings suggest acute appendicitis with McBurney\'s point tenderness and positive Rovsing\'s sign."',
    relatedPhrases: ['McBurney\'s point tenderness', 'Rovsing\'s sign', 'RLQ tenderness'],
    icd10Link: 'K35.9 – Acute appendicitis, unspecified',
    usageContext: 'Used to document physical examination findings that support the diagnosis of acute appendicitis.'
  },
  {
    id: 'cognitive-screening-mild-impairment',
    phrase: 'Cognitive screening shows mild cognitive impairment',
    meaning: 'Standardized cognitive assessment reveals mild decline in cognitive function.',
    sectionOfNote: 'Assessment',
    specialty: 'Geriatrics',
    clinicalContext: 'Documentation of cognitive assessment results in elderly patients.',
    exampleUsage: 'Assessment: "Cognitive screening shows mild cognitive impairment with MMSE score of 24/30, referral to neurology for further evaluation."',
    relatedPhrases: ['MCI', 'Cognitive decline', 'Memory impairment'],
    icd10Link: 'G31.84 – Mild cognitive impairment',
    usageContext: 'Used to document early cognitive changes that may precede dementia and require monitoring.'
  },
  {
    id: 'comprehensive-geriatric-assessment',
    phrase: 'Comprehensive geriatric assessment reveals multiple comorbidities',
    meaning: 'Systematic evaluation of elderly patient shows multiple coexisting medical conditions.',
    sectionOfNote: 'Assessment',
    specialty: 'Geriatrics',
    clinicalContext: 'Documentation of multidomain assessment in geriatric care.',
    exampleUsage: 'Assessment: "Comprehensive geriatric assessment reveals multiple comorbidities including diabetes, hypertension, and mild cognitive impairment."',
    relatedPhrases: ['CGA findings', 'Multiple comorbidities', 'Geriatric syndromes'],
    usageContext: 'Used to document holistic assessment of older adults addressing medical, functional, and psychosocial domains.'
  },
  {
    id: 'fall-risk-assessment-high-risk',
    phrase: 'Fall risk assessment indicates high risk for future falls',
    meaning: 'Standardized fall risk evaluation shows increased likelihood of future falls.',
    sectionOfNote: 'Assessment',
    specialty: 'Geriatrics',
    clinicalContext: 'Documentation of fall risk stratification in elderly patients.',
    exampleUsage: 'Assessment: "Fall risk assessment indicates high risk for future falls with Morse Fall Scale score of 65, fall precautions initiated."',
    relatedPhrases: ['High fall risk', 'Fall precautions', 'Morse Fall Scale'],
    usageContext: 'Used to document fall risk and justify implementation of fall prevention strategies.'
  },
  {
    id: 'bone-marrow-biopsy-acute-leukemia',
    phrase: 'Bone marrow biopsy results consistent with acute leukemia',
    meaning: 'Bone marrow examination findings support diagnosis of acute leukemia.',
    sectionOfNote: 'Assessment',
    specialty: 'Hematology',
    clinicalContext: 'Documentation of definitive diagnostic test for hematologic malignancy.',
    exampleUsage: 'Assessment: "Bone marrow biopsy results consistent with acute leukemia, 85% blasts present, flow cytometry pending for subtyping."',
    relatedPhrases: ['Acute lymphoblastic leukemia', 'Acute myeloid leukemia', 'Blast crisis'],
    icd10Link: 'C95.00 – Acute leukemia of unspecified cell type',
    usageContext: 'Used to document definitive pathologic diagnosis of acute leukemia requiring immediate treatment planning.'
  },
  {
    id: 'cbc-microcytic-anemia',
    phrase: 'Complete blood count shows hemoglobin of 7.2 g/dL with microcytic anemia',
    meaning: 'Laboratory results reveal low hemoglobin with small red blood cell size.',
    sectionOfNote: 'Assessment',
    specialty: 'Hematology',
    clinicalContext: 'Documentation of specific anemia type requiring further evaluation.',
    exampleUsage: 'Assessment: "Complete blood count shows hemoglobin of 7.2 g/dL with microcytic anemia, MCV 68 fL, suggestive of iron deficiency."',
    relatedPhrases: ['Iron deficiency anemia', 'Microcytic anemia', 'Low hemoglobin'],
    icd10Link: 'D50.9 – Iron deficiency anemia, unspecified',
    usageContext: 'Used to document specific laboratory findings that guide further diagnostic workup for anemia.'
  },
  {
    id: 'iron-deficiency-anemia-investigation',
    phrase: 'Iron deficiency anemia requiring investigation for source of bleeding',
    meaning: 'Iron deficiency anemia present, necessitating evaluation for underlying blood loss.',
    sectionOfNote: 'Assessment',
    specialty: 'Hematology',
    clinicalContext: 'Documentation of anemia requiring further investigation for etiology.',
    exampleUsage: 'Assessment: "Iron deficiency anemia requiring investigation for source of bleeding, GI evaluation and gynecologic assessment indicated."',
    relatedPhrases: ['IDA workup', 'Occult bleeding', 'Anemia investigation'],
    icd10Link: 'D50.9 – Iron deficiency anemia, unspecified',
    usageContext: 'Used to document need for comprehensive evaluation to identify underlying cause of iron deficiency.'
  }
];

export const getMedicalPhraseById = (id: string): MedicalPhrase | undefined => {
  return mockMedicalPhrases.find(phrase => phrase.id === id);
};

export const getUniqueSpecialties = (): string[] => {
  const specialties = [...new Set(mockMedicalPhrases.map(phrase => phrase.specialty))];
  return specialties.sort();
};

export const getUniqueSections = (): string[] => {
  const sections = [...new Set(mockMedicalPhrases.map(phrase => phrase.sectionOfNote))];
  return sections.sort();
};