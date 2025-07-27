import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Code, BookOpen, HelpCircle, FileCheck, ChevronRight, Stethoscope, Copy, Download, Users, Shield, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockDiagnoses, getDiagnosisById } from '@/data/mockDiagnoses';
const DiagnosisDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const diagnosis = getDiagnosisById(id || '');
  const [showMoreFaqs, setShowMoreFaqs] = useState(false);
  const [expandedTree, setExpandedTree] = useState<Record<string, boolean>>({});

  // Mock data for the new sections - these should come from API
  const relatedCodeRanges = [{
    range: "A00-B99",
    title: "Primary Range",
    description: "Certain infectious and parasitic diseases",
    details: "Includes codes for sepsis and specific infections like Acinetobacter baumannii."
  }, {
    range: "I10-I15",
    title: "Hypertensive diseases",
    description: "Covers hypertension-related conditions and their coding.",
    details: ""
  }, {
    range: "E08-E13",
    title: "Diabetes mellitus",
    description: "Includes codes for diabetes and related complications.",
    details: ""
  }, {
    range: "J45",
    title: "Asthma",
    description: "Covers asthma types and severity levels.",
    details: ""
  }];
  const codeComparisons = [{
    code: "A41.54",
    description: "Sepsis due to Acinetobacter baumannii",
    whenToUse: "Use when sepsis is confirmed to be due to Acinetobacter baumannii.",
    keyDocumentation: ["Blood culture confirming Acinetobacter", "Documentation of specific organism"]
  }, {
    code: "I12.9",
    description: "Hypertensive chronic kidney disease",
    whenToUse: "Use when hypertension is documented with CKD.",
    keyDocumentation: ["Diagnosis of hypertension and CKD"]
  }];

  // Enhanced documentation and coding risks data
  const documentationRisks = [{
    category: "Documentation Errors",
    items: [{
      title: "Incomplete organism identification",
      description: "Not specifying the exact organism when culture results are available",
      impact: "Leads to use of unspecified codes, reducing reimbursement accuracy and clinical specificity",
      mitigation: "Always document specific organism from culture results and include antibiotic sensitivity when available"
    }, {
      title: "Missing severity indicators",
      description: "Failing to document severity of sepsis or complications",
      impact: "Undercoding of condition severity affects risk stratification and quality metrics",
      mitigation: "Include SOFA scores, organ dysfunction indicators, and hemodynamic status in documentation"
    }]
  }, {
    category: "Coding Pitfalls",
    items: [{
      title: "Using unspecified codes when specific codes exist",
      description: "Defaulting to general sepsis codes when organism-specific codes are available",
      impact: "Reduced reimbursement, poor data quality, and missed opportunities for targeted quality improvement",
      mitigation: "Review culture results and laboratory data before code assignment, use coding resources to identify specific codes"
    }, {
      title: "Incorrect sequencing of codes",
      description: "Not following proper sequencing rules for sepsis and underlying conditions",
      impact: "Claim denials, audit flags, and incorrect DRG assignment affecting reimbursement",
      mitigation: "Follow ICD-10-CM coding guidelines for sepsis sequencing, code sepsis first when it's the reason for admission"
    }]
  }, {
    category: "Audit Risk Areas",
    items: [{
      title: "Inconsistent documentation across providers",
      description: "Different providers documenting conflicting information about the same condition",
      impact: "Audit scrutiny, potential compliance issues, and delayed reimbursement",
      mitigation: "Implement standardized documentation templates and regular provider education on coding requirements"
    }, {
      title: "Lack of supporting clinical evidence",
      description: "Coded diagnoses not supported by clinical indicators or test results",
      impact: "High risk for audit takebacks, compliance violations, and potential fraud allegations",
      mitigation: "Ensure all coded diagnoses have supporting clinical documentation, laboratory results, or imaging studies"
    }]
  }];

  // Decision tree data
  const decisionTree = {
    id: "root",
    question: "Is the patient diagnosed with sepsis?",
    answerOptions: [{
      answer: "Yes",
      next: {
        id: "sepsis_yes",
        question: "Does a blood test confirm Acinetobacter baumannii?",
        answerOptions: [{
          answer: "Yes",
          next: {
            id: "culture_yes",
            question: "Does the provider's note clearly state 'sepsis due to Acinetobacter baumannii'?",
            answerOptions: [{
              answer: "Yes",
              result: "Use code A41.54 for sepsis due to Acinetobacter baumannii.",
              next: null
            }, {
              answer: "No",
              result: "Ask the provider to clarify and confirm the bacteria in their note.",
              next: null
            }]
          }
        }, {
          answer: "No",
          result: "Use code A41.9 for sepsis with unspecified bacteria.",
          next: null
        }]
      }
    }, {
      answer: "No",
      result: "Do not use A41.54. Consider other diagnoses.",
      next: null
    }]
  };

  // FAQ data
  const faqs = [{
    question: "Can I use A41.54 without a blood test?",
    answer: "No, you need a blood test confirming Acinetobacter baumannii."
  }, {
    question: "How do I code severe sepsis?",
    answer: "Add R65.20 for severe sepsis or R65.21 for septic shock if documented."
  }, {
    question: "What if the provider note doesn't specify the bacteria?",
    answer: "Ask the provider to confirm the bacteria before coding."
  }];

  // Diagnosis snapshot data
  const diagnosisSnapshot = {
    keyFacts: [{
      label: "Definition",
      value: "A serious infection caused by Acinetobacter baumannii bacteria, confirmed by blood tests, leading to sepsis."
    }, {
      label: "Clinical Signs",
      value: "High fever, low blood pressure, organ failure (SOFA score ≥2)."
    }, {
      label: "Common Settings",
      value: "Often occurs in hospitals, especially in ICU or immunocompromised patients."
    }, {
      label: "Primary Code",
      value: "A41.54 (Billable)."
    }]
  };

  // Documentation checklist
  const documentationChecklist = ["Blood test confirming Acinetobacter baumannii.", "Provider note clearly stating 'sepsis due to Acinetobacter baumannii.'", "Clinical symptoms like fever, low blood pressure, or organ failure.", "Details of antibiotic treatment and infection timeline."];

  // Coding risks
  const codingRisks = [{
    title: "Unspecified Coding",
    description: "Using A41.9 when Acinetobacter is confirmed can lower reimbursement."
  }, {
    title: "Missing Severity Details",
    description: "Not noting organ failure or SOFA score impacts quality metrics."
  }, {
    title: "Wrong Code Order",
    description: "Listing other conditions before A41.54 may cause claim denials."
  }];

  // Mitigation tips
  const mitigationTips = ["Always check blood test results before coding A41.54.", "Include SOFA score to support severe sepsis codes (e.g., R65.20).", "List A41.54 first if sepsis is the main reason for admission.", "Use consistent documentation templates across providers."];

  // Clinical decision support checklist
  const clinicalChecklist = ["Verify blood test results for Acinetobacter baumannii.", "Ensure provider note specifies the bacteria causing sepsis.", "Check for severe symptoms like organ failure or septic shock."];

  // Reimbursement impact
  const reimbursementImpact = [{
    label: "Reimbursement",
    value: "Using A41.54 ensures proper payment compared to A41.9 (unspecified)."
  }, {
    label: "Quality Metrics",
    value: "Specific coding improves tracking of sepsis outcomes."
  }, {
    label: "Hospital Reporting",
    value: "Helps monitor hospital-acquired infections accurately."
  }];

  // Quick tips
  const quickTips = ["Ask for bacteria confirmation if the note is unclear.", "Note antibiotic resistance for better documentation.", "Refer to ICD-10-CM guidelines for accuracy."];
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if needed
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  const toggleTreeNode = (nodeId: string) => {
    setExpandedTree(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };
  const renderDecisionTree = (node: any, depth: number = 0) => {
    const isExpanded = expandedTree[node.id];
    return <div key={node.id} className={`ml-${depth * 4} p-3 border-l-4 border-[#387E89] bg-white rounded-r-lg mb-2`}>
        <div className="flex items-start justify-between">
          <p className="font-semibold text-[#143151] flex-1">{node.question}</p>
          {node.answerOptions && <button onClick={() => toggleTreeNode(node.id)} className="ml-2 text-[#387E89] hover:text-[#143151] transition-colors">
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>}
        </div>
        
        {node.answerOptions && (isExpanded || depth === 0) && <ul className="mt-2 space-y-2">
            {node.answerOptions.map((option: any, index: number) => <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">→</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-700">{option.answer}</p>
                  {option.result && <p className="text-sm text-gray-600 mt-1">{option.result}</p>}
                  {option.next && renderDecisionTree(option.next, depth + 1)}
                </div>
              </li>)}
          </ul>}
      </div>;
  };
  if (!diagnosis) {
    return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-xl">
          <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            </div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-3 sm:mb-4">Diagnosis Not Found</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">The requested diagnosis could not be found in our database.</p>
            <Link to="/diagnoses">
              <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Diagnoses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" data-api-endpoint="/api/diagnoses">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <Link to="/diagnoses" className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group text-sm sm:text-base">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Diagnoses
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Badge variant="outline" className="text-sm sm:text-base lg:text-lg px-2 sm:px-3 lg:px-4 py-1 sm:py-2 font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit">
                      {diagnosis.primaryCode}
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-600 border border-gray-200 w-fit">
                      {diagnosis.codeType}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#143151] mb-3 sm:mb-4 leading-tight">
                    {diagnosis.name}
                  </CardTitle>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {diagnosis.description}
                  </p>
                  {diagnosis.alsoKnownAs.length > 0 && <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wide">Also known as</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {diagnosis.alsoKnownAs.map((term, index) => <Badge key={index} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200">
                            {term}
                          </Badge>)}
                      </div>
                    </div>}
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Diagnosis Snapshot Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#387E89]/10 rounded-full flex items-center justify-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89]" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Diagnosis Snapshot</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg lg:text-xl text-[#143151]">Key Facts</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-3 sm:space-y-4">
                {diagnosisSnapshot.keyFacts.map((fact, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#143151]">{fact.label}</strong>: {fact.value}
                    </div>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Code-Specific Guidance Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Code-Specific Guidance</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Decision Tree */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Decision Tree for A41.54</CardTitle>
                <p className="text-sm text-gray-600">Follow this step-by-step guide to choose the correct ICD-10 code for sepsis due to Acinetobacter baumannii.</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="bg-gray-50 p-4 rounded border border-gray-300">
                  {renderDecisionTree(decisionTree)}
                </div>
              </CardContent>
            </Card>

            {/* Related Codes Table */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Code Comparison: When to Use Each Code</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-blue-100">
                        <TableHead className="font-bold text-[#143151]">Code</TableHead>
                        <TableHead className="font-bold text-[#143151]">Description</TableHead>
                        <TableHead className="font-bold text-[#143151]">When to Use</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono font-bold text-[#387E89]">A41.54</TableCell>
                        <TableCell>Sepsis due to Acinetobacter baumannii</TableCell>
                        <TableCell className="text-sm">When blood tests confirm Acinetobacter baumannii and provider notes specify it.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono font-bold text-[#387E89]">A41.9</TableCell>
                        <TableCell>Sepsis, unspecified organism</TableCell>
                        <TableCell className="text-sm">When no specific bacteria is identified.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono font-bold text-[#387E89]">R65.20</TableCell>
                        <TableCell>Severe sepsis without septic shock</TableCell>
                        <TableCell className="text-sm">Add if organ failure is documented.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation Best Practices Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Documentation Best Practices</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Checklist */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Checklist</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2">
                  {documentationChecklist.map((item, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            {/* Downloadable Template */}
            
          </div>
        </div>

        {/* Coding and Audit Risks Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Coding and Audit Risks</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Common Risks */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Common Risks</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-3">
                  {codingRisks.map((risk, index) => <li key={index} className="border-l-4 border-red-500 pl-3">
                      <strong className="text-red-700 text-sm">{risk.title}</strong>
                      <p className="text-xs text-gray-600 mt-1">{risk.description}</p>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            {/* Mitigation Tips */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Mitigation Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2">
                  {mitigationTips.map((tip, index) => <li key={index} className="flex items-start">
                      <Shield className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Clinical Decision Support Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Clinical Decision Support</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg text-[#143151]">Checklist</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-2">
                {clinicalChecklist.map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reimbursement and Quality Metrics Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Reimbursement and Quality Metrics</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg text-[#143151]">Impact Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ul className="space-y-3">
                {reimbursementImpact.map((impact, index) => <li key={index} className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#143151] text-sm">{impact.label}</strong>: <span className="text-sm text-gray-700">{impact.value}</span>
                    </div>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section - Added for clinicians */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Streamline Your Medical Coding
              </h2>
              <p className="text-blue-100 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Let S10.AI help you select the most accurate ICD-10 codes for {diagnosis.name}. 
                Our AI-powered assistant ensures compliance and reduces coding errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
                <Link to="/demo">
                  <Button className="w-full sm:w-auto bg-white text-[#143151] hover:bg-gray-50 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 shadow-lg text-sm sm:text-base">
                    Try S10.AI Now
                    <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                  </Button>
                </Link>
                <Link to="/icd10-codes">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base">
                    Browse ICD-10 Codes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related ICD-10 Code Ranges Section */}
        

        {/* Code Comparison Section */}
        

        {/* Overview Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          
          
          
        </div>

        {/* Documentation Section */}
        

        {/* Enhanced Risks Section */}
        

        {/* FAQs and Quick Tips Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">FAQs and Quick Tips</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Frequently Asked Questions */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-4">
                  {faqs.slice(0, showMoreFaqs ? faqs.length : 2).map((faq, index) => <div key={index}>
                      <p className="font-semibold text-[#143151] text-sm">{faq.question}</p>
                      <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
                    </div>)}
                  <button onClick={() => setShowMoreFaqs(!showMoreFaqs)} className="text-[#387E89] hover:text-[#143151] text-sm underline transition-colors">
                    {showMoreFaqs ? 'Hide FAQs' : 'Show More FAQs'}
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg text-[#143151]">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2">
                  {quickTips.map((tip, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Documentation Templates</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-6 sm:space-y-8">
                {diagnosis.details.templates.map((template, index) => <div key={index} className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-200/60">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                      <h4 className="font-bold text-[#143151] text-sm sm:text-base lg:text-lg">{template.title}</h4>
                      <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit text-xs sm:text-sm">
                        {template.specialty}
                      </Badge>
                    </div>
                    <div className="relative">
                      <div className="bg-gray-900 p-3 sm:p-4 lg:p-6 rounded-lg font-mono text-xs sm:text-sm text-green-400 overflow-x-auto border border-gray-700">
                        <pre className="whitespace-pre-wrap">{template.template}</pre>
                      </div>
                      <Button onClick={() => copyToClipboard(template.template)} variant="outline" size="sm" className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 border-gray-600 text-gray-300 hover:text-white">
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <Button variant="outline" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })} className="bg-white/80 hover:bg-[#387E89] border-gray-200 hover:border-[#387E89] text-gray-700 hover:text-white text-sm sm:text-base">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-90" />
            Back to Top
          </Button>
        </div>
      </div>
    </div>;
};
export default DiagnosisDetail;