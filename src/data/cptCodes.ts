export interface CPTCode {
  slug: string;
  cpt_code: string;
  title: string;
  seo_intro: string;
  cpt_code_basic_info: string;
  category: string;
  medical_specialty: string;
  complexity_level: string;
  average_time_spent: string;
  common_conditions_icd10: string;
  definition: string;
  clinical_example_soap: string;
  documentation_requirements: string;
  usage_context: string;
  related_codes: string;
  billing_reimbursement_notes: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

export const cptCodes: CPTCode[] = [
  {
    slug: "99214-office-visit-established-patient",
    cpt_code: "99214",
    title: "CPT 99214 — Office or Other Outpatient Visit for an Established Patient",
    seo_intro: "CPT 99214 represents a moderate complexity E/M service for established patients requiring detailed assessment and management of multiple conditions.",
    cpt_code_basic_info: "99214",
    category: "Evaluation & Management",
    medical_specialty: "Primary Care, Internal Medicine, Family Medicine, Specialty Care",
    complexity_level: "Moderate",
    average_time_spent: "30-39 minutes",
    common_conditions_icd10: "Multiple chronic conditions, Diabetes with complications (E11.22), Hypertension with complications (I12.9), Depression with anxiety (F32.9, F41.9)",
    definition: "Office visit for established patient with moderate complexity medical decision making requiring detailed history, examination, and management of multiple conditions.",
    clinical_example_soap: "Established patient with diabetes and hypertension presents for routine management. Reviews lab results, adjusts medications, discusses diet modifications. Multiple stable conditions require moderate complexity decision-making.",
    documentation_requirements: "Detailed history (4+ HPI elements), detailed examination (12+ bullet points), moderate complexity MDM. Document multiple diagnoses, treatment options, and data review.",
    usage_context: "Primary care, specialty clinics. Used when managing multiple conditions or new problems with moderate complexity requiring coordination of care.",
    related_codes: "99213 (lower complexity), 99215 (high complexity), G2211 (visit complexity add-on)",
    billing_reimbursement_notes: "Average reimbursement $126-148. Higher payment reflects increased complexity and time requirements. Document medical necessity thoroughly.",
    seoTitle: "CPT 99214 Guide: Office Visit Established Patient - Coding & Documentation",
    seoDescription: "Complete guide to CPT 99214 coding for established patient office visits. Learn documentation requirements, reimbursement rates, and clinical examples.",
    keywords: "CPT 99214, office visit coding, established patient, E/M coding, medical billing, documentation requirements"
  },
  {
    slug: "99213-office-visit-established-patient-low-complexity",
    cpt_code: "99213",
    title: "CPT 99213 — Office or Other Outpatient Visit for an Established Patient",
    seo_intro: "CPT 99213 represents a low to moderate complexity E/M service for established patients with straightforward medical decision making.",
    cpt_code_basic_info: "99213",
    category: "Evaluation & Management",
    medical_specialty: "Primary Care, Internal Medicine, Family Medicine",
    complexity_level: "Low to Moderate",
    average_time_spent: "20-29 minutes",
    common_conditions_icd10: "Stable chronic conditions, Routine follow-ups, Hypertension (I10), Diabetes Type 2 (E11.9), Annual physicals",
    definition: "Office visit for established patient with low to moderate complexity medical decision making for stable conditions or routine follow-up care.",
    clinical_example_soap: "Established patient returns for routine diabetes follow-up. Blood sugar well-controlled, no complications. Medication refills provided, diet counseling reinforced. Straightforward management of stable condition.",
    documentation_requirements: "Expanded problem-focused history, expanded problem-focused examination, low complexity MDM. Document stable conditions and routine management.",
    usage_context: "Primary care settings for routine follow-ups, stable chronic disease management, and uncomplicated acute conditions.",
    related_codes: "99212 (lower complexity), 99214 (higher complexity), 99395-99397 (preventive visits)",
    billing_reimbursement_notes: "Average reimbursement $93-110. Most commonly billed E/M code. Ensure documentation supports complexity level.",
    seoTitle: "CPT 99213 Guide: Low Complexity Office Visit - Coding Requirements",
    seoDescription: "Learn CPT 99213 coding for established patient office visits. Documentation guidelines, reimbursement info, and clinical examples included.",
    keywords: "CPT 99213, office visit, established patient, low complexity, E/M coding, primary care billing"
  },
  {
    slug: "99215-office-visit-established-patient-high-complexity",
    cpt_code: "99215",
    title: "CPT 99215 — Office or Other Outpatient Visit for an Established Patient",
    seo_intro: "CPT 99215 represents a high complexity E/M service for established patients requiring comprehensive assessment and complex medical decision making.",
    cpt_code_basic_info: "99215",
    category: "Evaluation & Management",
    medical_specialty: "Primary Care, Internal Medicine, Specialty Care, Cardiology",
    complexity_level: "High",
    average_time_spent: "40-54 minutes",
    common_conditions_icd10: "Multiple complex conditions, Heart failure (I50.9), COPD exacerbation (J44.1), Cancer management (C80.1), Psychiatric conditions (F32.9)",
    definition: "Office visit for established patient with high complexity medical decision making involving multiple diagnoses, extensive data review, or high risk management decisions.",
    clinical_example_soap: "Established patient with heart failure, diabetes, and CKD presents with worsening symptoms. Reviews multiple test results, adjusts complex medication regimen, coordinates specialist care. High-risk management decisions required.",
    documentation_requirements: "Comprehensive history, comprehensive examination, high complexity MDM. Document extensive data review, multiple diagnoses, and complex decision-making process.",
    usage_context: "Complex medical conditions, multiple comorbidities, specialist consultations, pre/post-operative care requiring extensive management.",
    related_codes: "99214 (moderate complexity), 99291-99292 (critical care), specialty consultation codes",
    billing_reimbursement_notes: "Average reimbursement $183-211. Highest level office visit. Requires thorough documentation of complexity and medical necessity.",
    seoTitle: "CPT 99215 Guide: High Complexity Office Visit - Documentation & Billing",
    seoDescription: "Master CPT 99215 coding for complex established patient visits. Complete documentation requirements, examples, and reimbursement guidelines.",
    keywords: "CPT 99215, high complexity visit, established patient, complex medical decision making, E/M coding"
  },
  {
    slug: "99204-office-visit-new-patient-moderate-complexity",
    cpt_code: "99204",
    title: "CPT 99204 — Office or Other Outpatient Visit for a New Patient",
    seo_intro: "CPT 99204 represents a moderate to high complexity E/M service for new patients requiring comprehensive evaluation and moderate complexity medical decision making.",
    cpt_code_basic_info: "99204",
    category: "Evaluation & Management",
    medical_specialty: "Primary Care, Internal Medicine, Specialty Care",
    complexity_level: "Moderate to High",
    average_time_spent: "45-59 minutes",
    common_conditions_icd10: "New diagnoses, Complex medical history, Multiple symptoms requiring evaluation, Diabetes (E11.9), Hypertension (I10)",
    definition: "Comprehensive office visit for new patient requiring detailed history, comprehensive examination, and moderate complexity medical decision making.",
    clinical_example_soap: "New patient presents with multiple complaints including chest pain, shortness of breath, and fatigue. Comprehensive history and physical performed. Multiple diagnostic tests ordered. Moderate complexity decision-making for differential diagnosis.",
    documentation_requirements: "Comprehensive history, comprehensive examination, moderate complexity MDM. Document chief complaint, comprehensive ROS, complete PFSH, and decision-making process.",
    usage_context: "New patient evaluations, initial consultations, comprehensive assessments requiring detailed evaluation of multiple systems.",
    related_codes: "99203 (lower complexity), 99205 (higher complexity), consultation codes (99241-99245)",
    billing_reimbursement_notes: "Average reimbursement $183-211. Higher reimbursement reflects comprehensive nature of new patient evaluation. Document time and complexity appropriately.",
    seoTitle: "CPT 99204 Guide: New Patient Office Visit - Comprehensive Evaluation",
    seoDescription: "Complete guide to CPT 99204 coding for new patient office visits. Documentation requirements, clinical examples, and billing guidelines.",
    keywords: "CPT 99204, new patient visit, comprehensive evaluation, E/M coding, medical billing"
  },
  {
    slug: "99232-subsequent-hospital-care",
    cpt_code: "99232",
    title: "CPT 99232 — Subsequent Hospital Care",
    seo_intro: "CPT 99232 represents moderate complexity subsequent hospital care for patients requiring expanded interval history and moderate complexity medical decision making.",
    cpt_code_basic_info: "99232",
    category: "Hospital Inpatient Services",
    medical_specialty: "Hospital Medicine, Internal Medicine, Family Medicine",
    complexity_level: "Moderate",
    average_time_spent: "35 minutes",
    common_conditions_icd10: "Pneumonia (J18.9), Heart failure (I50.9), COPD exacerbation (J44.1), Cellulitis (L03.90)",
    definition: "Subsequent hospital care for patients who are stable or improving, requiring expanded problem-focused interval history and moderate complexity medical decision making.",
    clinical_example_soap: "Patient with community-acquired pneumonia, day 3 of hospitalization. Symptoms improving, vitals stable. Reviewed chest x-ray, continued antibiotics. Moderate complexity decision-making for ongoing treatment plan.",
    documentation_requirements: "Expanded problem-focused interval history, expanded problem-focused examination, moderate complexity MDM. Document interval changes, response to treatment, and plan modifications.",
    usage_context: "Daily hospital rounds, inpatient management of stable conditions, monitoring response to treatment in hospitalized patients.",
    related_codes: "99231 (lower complexity), 99233 (higher complexity), 99221-99223 (initial hospital care)",
    billing_reimbursement_notes: "Average reimbursement $126-148. Most common subsequent hospital care code. Document interval history and medical decision making complexity.",
    seoTitle: "CPT 99232 Guide: Subsequent Hospital Care - Inpatient Coding",
    seoDescription: "Learn CPT 99232 coding for subsequent hospital care visits. Documentation guidelines, clinical examples, and reimbursement information.",
    keywords: "CPT 99232, subsequent hospital care, inpatient coding, hospital medicine, medical billing"
  }
];

// Utility functions
export const getAllCPTCodes = (): CPTCode[] => {
  return [...cptCodes].sort((a, b) => a.cpt_code.localeCompare(b.cpt_code));
};

export const getCPTCodeBySlug = (slug: string): CPTCode | undefined => {
  return cptCodes.find(code => code.slug === slug);
};

export const searchCPTCodes = (query: string): CPTCode[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return getAllCPTCodes();
  
  return cptCodes.filter(code =>
    code.cpt_code.toLowerCase().includes(searchTerm) ||
    code.title.toLowerCase().includes(searchTerm) ||
    code.category.toLowerCase().includes(searchTerm) ||
    code.medical_specialty.toLowerCase().includes(searchTerm) ||
    code.definition.toLowerCase().includes(searchTerm)
  );
};

export const getCPTCodesBySpecialty = (specialty: string): CPTCode[] => {
  return cptCodes.filter(code => 
    code.medical_specialty.toLowerCase().includes(specialty.toLowerCase())
  );
};

export const getAllSpecialties = (): string[] => {
  const specialties = new Set<string>();
  cptCodes.forEach(code => {
    code.medical_specialty.split(',').forEach(specialty => {
      specialties.add(specialty.trim());
    });
  });
  return Array.from(specialties).sort();
};

export const getAllCategories = (): string[] => {
  const categories = new Set(cptCodes.map(code => code.category));
  return Array.from(categories).sort();
};