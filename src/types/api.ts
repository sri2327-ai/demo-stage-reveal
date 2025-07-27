// API Type Definitions for Diagnosis Detail Page
// This file defines the structure for JSON API responses

export interface DiagnosisApiResponse {
  diagnosis: DiagnosisInfo;
  relatedCodeRanges: CodeRange[];
  diagnosisSnapshot: DiagnosisSnapshot;
  codeGuidance: CodeGuidance;
  documentation: Documentation;
  clinical: Clinical;
  faqs: FAQ[];
  quickTips: string[];
}

export interface DiagnosisInfo {
  id: string;
  name: string;
  primaryCode: string;
  description: string;
  codeType: string;
  alsoKnownAs: string[];
}

export interface CodeRange {
  range: string;
  title: string;
  description: string;
  details: string;
}

export interface DiagnosisSnapshot {
  keyFacts: KeyFact[];
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface CodeGuidance {
  decisionTree: DecisionTreeNode;
  codeComparisons: CodeComparison[];
}

export interface DecisionTreeNode {
  id: string;
  question: string;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  answer: string;
  result?: string;
  next?: DecisionTreeNode;
}

export interface CodeComparison {
  code: string;
  description: string;
  whenToUse: string;
  keyDocumentation: string[];
}

export interface Documentation {
  checklist: string[];
  risks: RiskCategory[];
  mitigationTips: string[];
}

export interface RiskCategory {
  category: string;
  items: RiskItem[];
}

export interface RiskItem {
  title: string;
  description: string;
  impact: string;
  mitigation: string;
}

export interface Clinical {
  checklist: string[];
  reimbursementImpact: ImpactItem[];
}

export interface ImpactItem {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// AI Prompts for content generation
export const AI_PROMPTS = {
  diagnosisSnapshot: `Generate a diagnosis snapshot for ICD-10 code {code}. Include definition, clinical signs, common settings, and primary code information. Format as JSON with keyFacts array containing label-value pairs.`,
  
  relatedCodeRanges: `Generate related ICD-10 code ranges for diagnosis {diagnosisName} with code {primaryCode}. Include primary range and 3-4 related ranges with their descriptions. Format as JSON array with range, title, description, and details fields.`,
  
  decisionTree: `Create a clinical decision tree for proper coding of ICD-10 code {code} - {diagnosisName}. Include step-by-step questions leading to correct code selection. Format as nested JSON with id, question, answerOptions, and results.`,
  
  codeComparisons: `Generate a comparison table for ICD-10 code {code} showing when to use this code vs related codes. Include code, description, when to use, and key documentation requirements. Format as JSON array.`,
  
  documentationChecklist: `Create a documentation checklist for ICD-10 code {code} - {diagnosisName}. Include specific requirements for proper documentation to support this code. Format as JSON array of strings.`,
  
  codingRisks: `Identify common coding and audit risks for ICD-10 code {code}. Include risk categories, specific items with titles, descriptions, impacts, and mitigation strategies. Format as JSON with categories and items arrays.`,
  
  clinicalDecisionSupport: `Generate clinical decision support checklist for ICD-10 code {code} - {diagnosisName}. Include verification steps for proper code assignment. Format as JSON array.`,
  
  reimbursementImpact: `Analyze reimbursement and quality metrics impact for ICD-10 code {code}. Include impact on payment, quality metrics, and reporting. Format as JSON array with label-value pairs.`,
  
  faqs: `Generate frequently asked questions and answers for ICD-10 code {code} - {diagnosisName}. Include practical coding scenarios and clarifications. Format as JSON array with question-answer pairs.`,
  
  quickTips: `Create quick coding tips for ICD-10 code {code} - {diagnosisName}. Include practical advice for accurate coding. Format as JSON array of strings.`
};

// Example API endpoints
export const API_ENDPOINTS = {
  getDiagnosis: '/api/diagnoses/{id}',
  generateContent: '/api/ai/generate-content',
  downloadTemplate: '/api/templates/download/{templateId}'
};