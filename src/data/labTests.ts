export interface LabTest {
  test_name: string;
  normal_range_male: string;
  normal_range_female: string;
  clinical_relevance: string;
  documentation_example: string;
  specialty: string;
  system: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

export const labTests: LabTest[] = [
  {
    test_name: "Complete Blood Count (CBC)",
    normal_range_male: "WBC: 4,500-11,000/μL, RBC: 4.7-6.1 million/μL, Hgb: 14-18 g/dL, Hct: 42-52%",
    normal_range_female: "WBC: 4,500-11,000/μL, RBC: 4.2-5.4 million/μL, Hgb: 12-16 g/dL, Hct: 37-47%",
    clinical_relevance: "Screens for anemia, infections, bleeding disorders, and blood cancers. Essential for monitoring overall health and detecting various blood-related conditions.",
    documentation_example: "CBC revealed mild anemia with Hgb 10.2 g/dL and Hct 31%. WBC count normal at 6,800/μL. Follow-up iron studies recommended.",
    specialty: "Hematology",
    system: "Hematologic System",
    slug: "complete-blood-count-cbc",
    seoTitle: "Complete Blood Count (CBC) Test - Normal Values & Clinical Use | S10.AI",
    seoDescription: "Learn about CBC blood test - normal ranges for men and women, clinical significance, and when this essential blood work is ordered.",
    keywords: "complete blood count, CBC test, blood work, hemoglobin, hematocrit, white blood cells, red blood cells, anemia screening, blood disorders"
  },
  {
    test_name: "Basic Metabolic Panel (BMP)",
    normal_range_male: "Glucose: 70-100 mg/dL, BUN: 8-24 mg/dL, Creatinine: 0.7-1.2 mg/dL, Na: 136-145 mEq/L, K: 3.5-5.0 mEq/L",
    normal_range_female: "Glucose: 70-100 mg/dL, BUN: 6-20 mg/dL, Creatinine: 0.6-1.1 mg/dL, Na: 136-145 mEq/L, K: 3.5-5.0 mEq/L",
    clinical_relevance: "Assesses kidney function, blood sugar levels, and electrolyte balance. Critical for monitoring diabetes, kidney disease, and fluid balance.",
    documentation_example: "BMP shows elevated glucose at 165 mg/dL and creatinine 1.8 mg/dL, suggesting diabetes with mild kidney dysfunction. Electrolytes within normal limits.",
    specialty: "Internal Medicine",
    system: "Metabolic System",
    slug: "basic-metabolic-panel-bmp",
    seoTitle: "Basic Metabolic Panel (BMP) - Blood Chemistry Test Guide | S10.AI",
    seoDescription: "Understanding BMP blood test - what it measures, normal values, and how it helps diagnose diabetes, kidney problems, and electrolyte imbalances.",
    keywords: "basic metabolic panel, BMP test, blood chemistry, glucose levels, kidney function, creatinine, electrolytes, diabetes screening"
  },
  {
    test_name: "Lipid Panel",
    normal_range_male: "Total Cholesterol: <200 mg/dL, LDL: <100 mg/dL, HDL: >40 mg/dL, Triglycerides: <150 mg/dL",
    normal_range_female: "Total Cholesterol: <200 mg/dL, LDL: <100 mg/dL, HDL: >50 mg/dL, Triglycerides: <150 mg/dL",
    clinical_relevance: "Evaluates cardiovascular risk by measuring cholesterol and triglyceride levels. Essential for heart disease prevention and management.",
    documentation_example: "Lipid panel reveals elevated LDL at 145 mg/dL and low HDL at 35 mg/dL, indicating increased cardiovascular risk. Statin therapy initiated.",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    slug: "lipid-panel",
    seoTitle: "Lipid Panel Blood Test - Cholesterol & Heart Health | S10.AI",
    seoDescription: "Complete guide to lipid panel testing - cholesterol levels, triglycerides, normal ranges, and cardiovascular risk assessment.",
    keywords: "lipid panel, cholesterol test, LDL cholesterol, HDL cholesterol, triglycerides, heart disease risk, cardiovascular screening"
  },
  {
    test_name: "Thyroid Stimulating Hormone (TSH)",
    normal_range_male: "0.4-4.0 mIU/L",
    normal_range_female: "0.4-4.5 mIU/L",
    clinical_relevance: "Primary screening test for thyroid disorders. Elevated levels suggest hypothyroidism, while low levels indicate hyperthyroidism.",
    documentation_example: "TSH elevated at 8.2 mIU/L, consistent with primary hypothyroidism. Free T4 pending. Levothyroxine therapy recommended.",
    specialty: "Endocrinology",
    system: "Endocrine System",
    slug: "thyroid-stimulating-hormone-tsh",
    seoTitle: "TSH (Thyroid Stimulating Hormone) Test - Thyroid Function | S10.AI",
    seoDescription: "Learn about TSH blood test for thyroid function - normal ranges, what high and low levels mean, and thyroid disorder diagnosis.",
    keywords: "TSH test, thyroid stimulating hormone, thyroid function, hypothyroidism, hyperthyroidism, thyroid disorders, endocrine testing"
  },
  {
    test_name: "Hemoglobin A1C (HbA1c)",
    normal_range_male: "Normal: <5.7%, Prediabetes: 5.7-6.4%, Diabetes: ≥6.5%",
    normal_range_female: "Normal: <5.7%, Prediabetes: 5.7-6.4%, Diabetes: ≥6.5%",
    clinical_relevance: "Measures average blood sugar levels over 2-3 months. Gold standard for diabetes diagnosis and monitoring glycemic control.",
    documentation_example: "HbA1c of 7.8% indicates suboptimal diabetes control. Medication adjustment and dietary counseling recommended to achieve target <7%.",
    specialty: "Endocrinology",
    system: "Endocrine System",
    slug: "hemoglobin-a1c-hba1c",
    seoTitle: "HbA1c Test - Diabetes Blood Sugar Control Monitoring | S10.AI",
    seoDescription: "Understanding HbA1c test for diabetes - what it measures, target levels, and how it helps monitor long-term blood sugar control.",
    keywords: "HbA1c test, hemoglobin A1c, diabetes control, blood sugar monitoring, glycemic control, diabetes diagnosis, A1c levels"
  },
  {
    test_name: "Prostate Specific Antigen (PSA)",
    normal_range_male: "Age 40-49: <2.5 ng/mL, Age 50-59: <3.5 ng/mL, Age 60-69: <4.5 ng/mL, Age 70+: <6.5 ng/mL",
    normal_range_female: "Not applicable (prostate-specific test)",
    clinical_relevance: "Screening test for prostate cancer and monitoring prostate health. Elevated levels may indicate cancer, infection, or benign enlargement.",
    documentation_example: "PSA elevated at 8.2 ng/mL in 65-year-old male. Digital rectal exam notable for firm nodule. Urology referral for biopsy consideration.",
    specialty: "Urology",
    system: "Genitourinary System",
    slug: "prostate-specific-antigen-psa",
    seoTitle: "PSA Test - Prostate Cancer Screening & Monitoring | S10.AI",
    seoDescription: "Learn about PSA blood test for prostate health - normal levels by age, when to screen, and what elevated PSA means.",
    keywords: "PSA test, prostate specific antigen, prostate cancer screening, prostate health, male health screening, urology testing"
  },
  {
    test_name: "Liver Function Tests (LFTs)",
    normal_range_male: "ALT: 7-40 U/L, AST: 8-40 U/L, ALP: 44-147 U/L, Bilirubin: 0.3-1.2 mg/dL, Albumin: 3.5-5.0 g/dL",
    normal_range_female: "ALT: 7-35 U/L, AST: 8-35 U/L, ALP: 38-126 U/L, Bilirubin: 0.3-1.2 mg/dL, Albumin: 3.5-5.0 g/dL",
    clinical_relevance: "Evaluates liver function and detects liver damage or disease. Important for monitoring medication effects and diagnosing hepatitis.",
    documentation_example: "LFTs show elevated ALT 85 U/L and AST 72 U/L, suggesting hepatocellular injury. Alcohol cessation counseling provided.",
    specialty: "Gastroenterology",
    system: "Hepatic System",
    slug: "liver-function-tests-lfts",
    seoTitle: "Liver Function Tests (LFTs) - Hepatic Panel Guide | S10.AI",
    seoDescription: "Complete guide to liver function tests - ALT, AST, bilirubin levels, normal ranges, and liver disease diagnosis.",
    keywords: "liver function tests, LFTs, ALT, AST, liver enzymes, hepatic panel, liver disease, hepatitis screening, liver health"
  },
  {
    test_name: "C-Reactive Protein (CRP)",
    normal_range_male: "<3.0 mg/L (normal), 3.0-10.0 mg/L (moderate risk), >10.0 mg/L (high risk)",
    normal_range_female: "<3.0 mg/L (normal), 3.0-10.0 mg/L (moderate risk), >10.0 mg/L (high risk)",
    clinical_relevance: "Measures inflammation in the body. High-sensitivity CRP predicts cardiovascular risk, while regular CRP detects acute inflammation.",
    documentation_example: "Elevated CRP at 15.2 mg/L suggests acute inflammatory process. Clinical correlation with symptoms and further workup indicated.",
    specialty: "Internal Medicine",
    system: "Inflammatory Markers",
    slug: "c-reactive-protein-crp",
    seoTitle: "CRP (C-Reactive Protein) Test - Inflammation Marker | S10.AI",
    seoDescription: "Understanding CRP blood test for inflammation - normal levels, cardiovascular risk assessment, and inflammatory condition diagnosis.",
    keywords: "CRP test, C-reactive protein, inflammation marker, inflammatory conditions, cardiovascular risk, acute phase reactant"
  },
  {
    test_name: "Vitamin D (25-OH)",
    normal_range_male: "Deficient: <20 ng/mL, Insufficient: 20-29 ng/mL, Sufficient: 30-100 ng/mL",
    normal_range_female: "Deficient: <20 ng/mL, Insufficient: 20-29 ng/mL, Sufficient: 30-100 ng/mL",
    clinical_relevance: "Assesses vitamin D status for bone health, immune function, and overall wellness. Deficiency linked to osteoporosis and various health issues.",
    documentation_example: "Vitamin D level of 18 ng/mL indicates deficiency. Vitamin D3 supplementation 2000 IU daily recommended with follow-up in 3 months.",
    specialty: "Endocrinology",
    system: "Endocrine System",
    slug: "vitamin-d-25-oh",
    seoTitle: "Vitamin D Test - Bone Health & Deficiency Screening | S10.AI",
    seoDescription: "Learn about vitamin D blood test - normal levels, deficiency symptoms, supplementation guidelines, and bone health importance.",
    keywords: "vitamin D test, vitamin D deficiency, bone health, osteoporosis prevention, vitamin D levels, 25-hydroxyvitamin D"
  },
  {
    test_name: "Cardiac Troponin",
    normal_range_male: "<14 ng/L (normal), 14-30 ng/L (borderline), >30 ng/L (elevated)",
    normal_range_female: "<10 ng/L (normal), 10-15 ng/L (borderline), >15 ng/L (elevated)",
    clinical_relevance: "Highly specific marker for heart muscle damage. Essential for diagnosing heart attacks and monitoring cardiac injury.",
    documentation_example: "Elevated troponin I at 45 ng/L confirms acute myocardial infarction. Serial troponins ordered with cardiology consultation.",
    specialty: "Cardiology",
    system: "Cardiovascular System",
    slug: "cardiac-troponin",
    seoTitle: "Cardiac Troponin Test - Heart Attack Diagnosis | S10.AI",
    seoDescription: "Understanding cardiac troponin blood test for heart attack diagnosis - normal levels, what elevation means, and cardiac care.",
    keywords: "cardiac troponin, heart attack diagnosis, myocardial infarction, cardiac markers, chest pain evaluation, heart muscle damage"
  }
];

export const getAllLabTests = () => labTests.sort((a, b) => a.test_name.localeCompare(b.test_name));

export const getLabTestBySlug = (slug: string) => 
  labTests.find(test => test.slug === slug);

export const searchLabTests = (query: string) => 
  labTests.filter(test => 
    test.test_name.toLowerCase().includes(query.toLowerCase()) ||
    test.clinical_relevance.toLowerCase().includes(query.toLowerCase()) ||
    test.specialty.toLowerCase().includes(query.toLowerCase()) ||
    test.system.toLowerCase().includes(query.toLowerCase())
  );

export const getLabTestsBySpecialty = (specialty: string) =>
  labTests.filter(test => test.specialty.toLowerCase() === specialty.toLowerCase());

export const getAllSpecialties = () => {
  const specialties = [...new Set(labTests.map(test => test.specialty))];
  return specialties.sort();
};