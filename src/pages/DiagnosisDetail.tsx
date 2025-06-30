
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Code, BookOpen, HelpCircle, FileCheck, ChevronRight, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockDiagnoses, getDiagnosisById } from '@/data/mockDiagnoses';

const DiagnosisDetail = () => {
  const { id } = useParams<{ id: string }>();
  const diagnosis = getDiagnosisById(id || '');

  // Mock data for the new sections - these should come from API
  const relatedCodeRanges = [
    {
      range: "A00-B99",
      title: "Primary Range",
      description: "Certain infectious and parasitic diseases",
      details: "Includes codes for sepsis and specific infections like Acinetobacter baumannii."
    },
    {
      range: "I10-I15",
      title: "Hypertensive diseases",
      description: "Covers hypertension-related conditions and their coding.",
      details: ""
    },
    {
      range: "E08-E13",
      title: "Diabetes mellitus",
      description: "Includes codes for diabetes and related complications.",
      details: ""
    },
    {
      range: "J45",
      title: "Asthma",
      description: "Covers asthma types and severity levels.",
      details: ""
    }
  ];

  const codeComparisons = [
    {
      code: "A41.54",
      description: "Sepsis due to Acinetobacter baumannii",
      whenToUse: "Use when sepsis is confirmed to be due to Acinetobacter baumannii.",
      keyDocumentation: ["Blood culture confirming Acinetobacter", "Documentation of specific organism"]
    },
    {
      code: "I12.9",
      description: "Hypertensive chronic kidney disease",
      whenToUse: "Use when hypertension is documented with CKD.",
      keyDocumentation: ["Diagnosis of hypertension and CKD"]
    }
  ];

  if (!diagnosis) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" data-api-endpoint="/api/diagnoses">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <Link 
            to="/diagnoses" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group text-sm sm:text-base"
          >
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
                  {diagnosis.alsoKnownAs.length > 0 && (
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wide">Also known as</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {diagnosis.alsoKnownAs.map((term, index) => (
                          <Badge key={index} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200">
                            {term}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
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
                  <Button variant="outline" className="w-full sm:w-auto border-white text-black hover:bg-white/10 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base">
                    Browse ICD-10 Codes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related ICD-10 Code Ranges Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Related ICD-10 Code Ranges</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg lg:text-xl text-[#143151]">Complete code families applicable to {diagnosis.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6" data-api-endpoint="/api/diagnoses/code-ranges">
              {relatedCodeRanges.map((range, index) => (
                <div key={index} className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-200/60">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 font-mono text-sm sm:text-base px-2 sm:px-3 py-1 w-fit">
                      {range.range}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#143151] text-base sm:text-lg mb-1 sm:mb-2">{range.title}</h4>
                      <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">{range.description}</p>
                      {range.details && (
                        <p className="text-gray-600 text-xs sm:text-sm italic">{range.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Code Comparison Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Code Comparison: When to Use Each Code</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg lg:text-xl text-[#143151]">Compare key differences between these codes to ensure accurate selection</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="overflow-x-auto" data-api-endpoint="/api/diagnoses/code-comparisons">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-gray-200">
                      <TableHead className="font-bold text-gray-700 text-xs sm:text-sm">Code</TableHead>
                      <TableHead className="font-bold text-gray-700 text-xs sm:text-sm">Description</TableHead>
                      <TableHead className="font-bold text-gray-700 text-xs sm:text-sm">When to Use</TableHead>
                      <TableHead className="font-bold text-gray-700 text-xs sm:text-sm">Key Documentation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {codeComparisons.map((comparison, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                        <TableCell className="font-mono font-bold text-[#387E89] bg-[#387E89]/5 rounded text-xs sm:text-sm">
                          {comparison.code}
                        </TableCell>
                        <TableCell className="font-medium text-[#143151] text-xs sm:text-sm">{comparison.description}</TableCell>
                        <TableCell className="text-xs sm:text-sm text-gray-700">{comparison.whenToUse}</TableCell>
                        <TableCell className="text-xs sm:text-sm text-gray-600">
                          <ul className="space-y-1">
                            {comparison.keyDocumentation.map((doc, docIndex) => (
                              <li key={docIndex} className="flex items-start">
                                <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overview Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#387E89]/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89]" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Clinical Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg lg:text-xl text-[#143151]">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3" />
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <div>
                  <h4 className="font-bold text-[#143151] mb-2 sm:mb-3 text-sm sm:text-base">Primary Code Range</h4>
                  <p className="text-gray-600 bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">{diagnosis.details.codeRange}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#143151] mb-2 sm:mb-3 text-sm sm:text-base">Clinical Criteria</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {diagnosis.details.clinicalCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-xs sm:text-sm lg:text-base">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg lg:text-xl text-[#143151]">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2 sm:mr-3" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                  Always review the patient's clinical documentation thoroughly. When in doubt, 
                  choose the more specific code and ensure documentation supports it.
                </p>
                <div className="bg-gradient-to-r from-[#387E89]/5 to-[#143151]/5 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-[#387E89]/20">
                  <h4 className="font-bold text-[#387E89] mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Best Practice
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                    {diagnosis.details.bestPractice}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Documentation Requirements</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-bold text-[#143151] mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl">Required Elements</h4>
                  <div className="grid gap-2 sm:gap-3">
                    {diagnosis.details.documentationRequirements.map((req, index) => (
                      <div key={index} className="flex items-start bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200/60">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-red-200/60">
                    <h4 className="font-bold text-red-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-base lg:text-lg">
                      <XCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                      Poor Documentation Example
                    </h4>
                    <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-red-200/60">
                      <p className="text-red-700 italic font-medium text-xs sm:text-sm lg:text-base">
                        "{diagnosis.details.examples.poor}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-green-200/60">
                    <h4 className="font-bold text-green-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-base lg:text-lg">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                      Good Documentation Example
                    </h4>
                    <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-green-200/60">
                      <p className="text-green-700 italic font-medium text-xs sm:text-sm lg:text-base">
                        "{diagnosis.details.examples.good}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risks Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Documentation & Coding Risks</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-4 sm:gap-6">
                {diagnosis.details.risks.map((risk, index) => (
                  <div key={index} className="border-l-4 border-amber-500 bg-amber-50 p-3 sm:p-4 lg:p-6 rounded-r-lg">
                    <h4 className="font-bold text-[#143151] mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg flex items-center">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-1.5 sm:mr-2" />
                      {risk.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143151]">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid gap-4 sm:gap-6">
            {diagnosis.details.faq.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-[#143151] flex items-start">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-600 leading-relaxed pl-6 sm:pl-8 text-xs sm:text-sm lg:text-base">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
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
                {diagnosis.details.templates.map((template, index) => (
                  <div key={index} className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-200/60">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                      <h4 className="font-bold text-[#143151] text-sm sm:text-base lg:text-lg">{template.title}</h4>
                      <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit text-xs sm:text-sm">
                        {template.specialty}
                      </Badge>
                    </div>
                    <div className="bg-gray-900 p-3 sm:p-4 lg:p-6 rounded-lg font-mono text-xs sm:text-sm text-green-400 overflow-x-auto border border-gray-700">
                      <pre className="whitespace-pre-wrap">{template.template}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/80 hover:bg-[#387E89] border-gray-200 hover:border-[#387E89] text-gray-700 hover:text-white text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-90" />
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisDetail;
