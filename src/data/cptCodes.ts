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
  },
  // HCPCS Codes
  {
    slug: "j0135-adalimumab-injection",
    cpt_code: "J0135",
    title: "HCPCS J0135 — Adalimumab Injection, Biosimilar",
    seo_intro: "HCPCS J0135 represents adalimumab injection, a biosimilar TNF inhibitor used for autoimmune conditions like rheumatoid arthritis and inflammatory bowel disease.",
    cpt_code_basic_info: "J0135",
    category: "Drug Injection",
    medical_specialty: "Rheumatology, Gastroenterology, Dermatology",
    complexity_level: "Standard",
    average_time_spent: "15-30 minutes",
    common_conditions_icd10: "Rheumatoid arthritis (M06.9), Crohn's disease (K50.90), Ulcerative colitis (K51.90), Psoriatic arthritis (L40.50)",
    definition: "Administration of adalimumab biosimilar injection for treatment of autoimmune and inflammatory conditions.",
    clinical_example_soap: "Patient with rheumatoid arthritis receives subcutaneous adalimumab injection. Pre-injection assessment completed, vital signs stable. Patient tolerated injection well with no immediate adverse reactions. Follow-up scheduled.",
    documentation_requirements: "Document indication for treatment, dosage administered, injection site, patient tolerance, and any adverse reactions. Include pre-injection assessment.",
    usage_context: "Specialty clinics, infusion centers. Used for maintenance therapy of autoimmune conditions requiring TNF inhibition.",
    related_codes: "J0717 (adalimumab original), 96372 (therapeutic injection), administration codes",
    billing_reimbursement_notes: "Average reimbursement varies by payer. Requires prior authorization. Document medical necessity and failure of conventional therapy.",
    seoTitle: "HCPCS J0135 Guide: Adalimumab Biosimilar Injection - Coding & Billing",
    seoDescription: "Complete guide to HCPCS J0135 coding for adalimumab biosimilar injections. Documentation requirements and billing guidelines included.",
    keywords: "HCPCS J0135, adalimumab biosimilar, TNF inhibitor, rheumatoid arthritis, injection coding"
  },
  {
    slug: "g0439-annual-wellness-visit",
    cpt_code: "G0439",
    title: "HCPCS G0439 — Annual Wellness Visit, Subsequent",
    seo_intro: "HCPCS G0439 represents the subsequent annual wellness visit for Medicare beneficiaries, focusing on preventive care and health risk assessment.",
    cpt_code_basic_info: "G0439",
    category: "Preventive Services",
    medical_specialty: "Primary Care, Internal Medicine, Family Medicine, Geriatrics",
    complexity_level: "Moderate",
    average_time_spent: "20-30 minutes",
    common_conditions_icd10: "Health maintenance (Z00.00), Screening encounters (Z12-Z13), Risk factor screening (Z87)",
    definition: "Subsequent annual wellness visit including comprehensive health risk assessment, personalized prevention plan, and health counseling for Medicare beneficiaries.",
    clinical_example_soap: "Medicare patient returns for annual wellness visit. Completed health risk assessment, reviewed medications, updated family history. Discussed preventive screening recommendations and lifestyle modifications. Updated personalized prevention plan.",
    documentation_requirements: "Document health risk assessment completion, review of systems, medication reconciliation, family history updates, and personalized prevention plan development.",
    usage_context: "Primary care practices serving Medicare beneficiaries. Annual preventive care visit focusing on wellness and disease prevention rather than acute care.",
    related_codes: "G0438 (initial AWV), 99395-99397 (preventive visits), G0444-G0446 (depression screening)",
    billing_reimbursement_notes: "Covered by Medicare Part B with no patient cost-sharing. Cannot be billed with other E/M services on same day. Requires 11+ months since last AWV.",
    seoTitle: "HCPCS G0439 Guide: Medicare Annual Wellness Visit - Subsequent",
    seoDescription: "Learn HCPCS G0439 coding for Medicare annual wellness visits. Documentation requirements, billing guidelines, and clinical examples.",
    keywords: "HCPCS G0439, annual wellness visit, Medicare, preventive care, health risk assessment"
  },
  {
    slug: "j7325-hyaluronic-acid-injection",
    cpt_code: "J7325",
    title: "HCPCS J7325 — Hyaluronic Acid Injection for Osteoarthritis",
    seo_intro: "HCPCS J7325 represents hyaluronic acid viscosupplementation injection for treatment of osteoarthritis, particularly knee osteoarthritis.",
    cpt_code_basic_info: "J7325",
    category: "Drug Injection",
    medical_specialty: "Orthopedics, Rheumatology, Sports Medicine",
    complexity_level: "Standard",
    average_time_spent: "20-30 minutes",
    common_conditions_icd10: "Osteoarthritis of knee (M17.9), Osteoarthritis of hip (M16.9), Joint pain (M25.50)",
    definition: "Intra-articular injection of hyaluronic acid for viscosupplementation therapy in patients with osteoarthritis.",
    clinical_example_soap: "Patient with knee osteoarthritis receives intra-articular hyaluronic acid injection. Joint aspirated if effusion present, injection performed using sterile technique. Patient counseled on post-injection precautions and follow-up care.",
    documentation_requirements: "Document indication for viscosupplementation, joint examined, injection technique, product used, patient tolerance, and post-injection instructions.",
    usage_context: "Orthopedic offices, rheumatology practices. Used for patients with moderate osteoarthritis who have failed conservative treatment but want to delay joint replacement.",
    related_codes: "20610 (major joint injection), J7318-J7327 (other hyaluronic acid products), imaging guidance codes",
    billing_reimbursement_notes: "Coverage varies by payer. Medicare covers with specific criteria. Document failed conservative therapy and contraindications to other treatments.",
    seoTitle: "HCPCS J7325 Guide: Hyaluronic Acid Injection - Viscosupplementation Coding",
    seoDescription: "Complete guide to HCPCS J7325 coding for hyaluronic acid injections. Documentation requirements, billing guidelines, and clinical examples.",
    keywords: "HCPCS J7325, hyaluronic acid, viscosupplementation, osteoarthritis, knee injection"
  },
  {
    slug: "a4253-blood-glucose-test-strips",
    cpt_code: "A4253",
    title: "HCPCS A4253 — Blood Glucose Test Strips",
    seo_intro: "HCPCS A4253 represents blood glucose test strips for home glucose monitoring in diabetic patients using blood glucose meters.",
    cpt_code_basic_info: "A4253",
    category: "Medical Supplies",
    medical_specialty: "Endocrinology, Primary Care, Internal Medicine",
    complexity_level: "Standard",
    average_time_spent: "N/A",
    common_conditions_icd10: "Type 1 diabetes (E10.9), Type 2 diabetes (E11.9), Gestational diabetes (O24.4), Prediabetes (R73.03)",
    definition: "Blood glucose test strips for self-monitoring of blood glucose levels in diabetic patients, per 50 strips.",
    clinical_example_soap: "Diabetic patient requires blood glucose test strips for home monitoring. Prescribed 100 strips (2 units) for monthly supply. Patient counseled on proper testing technique and frequency based on diabetes management plan.",
    documentation_requirements: "Document diabetes diagnosis, medical necessity for self-monitoring, frequency of testing recommended, and patient education provided.",
    usage_context: "Outpatient diabetes management, endocrinology practices, primary care offices prescribing diabetic supplies for home monitoring.",
    related_codes: "A4252 (blood glucose monitor), A4259 (lancets), E0607 (home blood glucose monitor)",
    billing_reimbursement_notes: "Covered by most insurance plans with diabetes diagnosis. Quantity limits may apply. Document medical necessity and testing frequency.",
    seoTitle: "HCPCS A4253 Guide: Blood Glucose Test Strips - Medical Supply Coding",
    seoDescription: "Learn HCPCS A4253 coding for blood glucose test strips. Documentation requirements, billing guidelines, and coverage information.",
    keywords: "HCPCS A4253, blood glucose strips, diabetes supplies, glucose monitoring, medical supplies"
  },
  {
    slug: "l3806-knee-ankle-foot-orthosis",
    cpt_code: "L3806",
    title: "HCPCS L3806 — Knee Ankle Foot Orthosis (KAFO)",
    seo_intro: "HCPCS L3806 represents a knee ankle foot orthosis with knee joint, single axis, friction swing and stance phase control for lower limb support.",
    cpt_code_basic_info: "L3806",
    category: "Orthotics",
    medical_specialty: "Physical Medicine, Orthopedics, Podiatry",
    complexity_level: "Standard",
    average_time_spent: "N/A",
    common_conditions_icd10: "Paralysis of lower limb (G83.1), Muscular dystrophy (G71.0), Spinal cord injury (G95.9), Cerebral palsy (G80.9)",
    definition: "Knee ankle foot orthosis with knee joint featuring single axis, friction swing and stance phase control for patients requiring significant lower extremity support.",
    clinical_example_soap: "Patient with lower limb weakness fitted for KAFO with knee joint controls. Device provides knee stability during stance phase while allowing controlled swing phase. Patient and family educated on proper application and maintenance.",
    documentation_requirements: "Document medical condition requiring orthosis, functional deficits, measurement details, fitting notes, and patient/family education provided.",
    usage_context: "Orthotic clinics, rehabilitation facilities, specialty practices treating patients with lower limb weakness or paralysis requiring ambulatory assistance.",
    related_codes: "L3808-L3891 (other KAFO variants), L4205 (repair services), K0108 (wheelchair accessories)",
    billing_reimbursement_notes: "Requires prior authorization with most payers. Document medical necessity, functional improvement expected, and trial of less restrictive devices if applicable.",
    seoTitle: "HCPCS L3806 Guide: Knee Ankle Foot Orthosis - KAFO Coding & Billing",
    seoDescription: "Complete guide to HCPCS L3806 coding for knee ankle foot orthosis. Documentation requirements, fitting guidelines, and billing information.",
    keywords: "HCPCS L3806, KAFO, knee ankle foot orthosis, lower limb orthotic, mobility device"
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