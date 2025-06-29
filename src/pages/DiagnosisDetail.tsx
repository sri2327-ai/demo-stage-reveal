
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Code, BookOpen, HelpCircle, FileCheck } from 'lucide-react';
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
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#143151] mb-4">Diagnosis Not Found</h1>
            <p className="text-gray-600 mb-8">The requested diagnosis could not be found in our database.</p>
            <Link to="/diagnoses">
              <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/diagnoses" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Diagnoses
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-base sm:text-lg px-3 sm:px-4 py-2 font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit">
                      {diagnosis.primaryCode}
                    </Badge>
                    <Badge variant="secondary" className="text-sm bg-gray-100 text-gray-600 border border-gray-200 w-fit">
                      {diagnosis.codeType}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-4 leading-tight">
                    {diagnosis.name}
                  </CardTitle>
                  <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                    {diagnosis.description}
                  </p>
                  {diagnosis.alsoKnownAs.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Also known as</p>
                      <div className="flex flex-wrap gap-2">
                        {diagnosis.alsoKnownAs.map((term, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200">
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

        {/* Related ICD-10 Code Ranges Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Related ICD-10 Code Ranges</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-[#143151]">Complete code families applicable to {diagnosis.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6" data-api-endpoint="/api/diagnoses/code-ranges">
              {relatedCodeRanges.map((range, index) => (
                <div key={index} className="border rounded-xl p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-200/60">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 font-mono text-base px-3 py-1 w-fit">
                      {range.range}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#143151] text-lg mb-2">{range.title}</h4>
                      <p className="text-gray-700 mb-2">{range.description}</p>
                      {range.details && (
                        <p className="text-gray-600 text-sm italic">{range.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Code Comparison Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Code Comparison: When to Use Each Code</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-[#143151]">Compare key differences between these codes to ensure accurate selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto" data-api-endpoint="/api/diagnoses/code-comparisons">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-gray-200">
                      <TableHead className="font-bold text-gray-700">Code</TableHead>
                      <TableHead className="font-bold text-gray-700">Description</TableHead>
                      <TableHead className="font-bold text-gray-700">When to Use</TableHead>
                      <TableHead className="font-bold text-gray-700">Key Documentation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {codeComparisons.map((comparison, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100">
                        <TableCell className="font-mono font-bold text-[#387E89] bg-[#387E89]/5 rounded">
                          {comparison.code}
                        </TableCell>
                        <TableCell className="font-medium text-[#143151]">{comparison.description}</TableCell>
                        <TableCell className="text-sm text-gray-700">{comparison.whenToUse}</TableCell>
                        <TableCell className="text-sm text-gray-600">
                          <ul className="space-y-1">
                            {comparison.keyDocumentation.map((doc, docIndex) => (
                              <li key={docIndex} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                <span>{doc}</span>
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
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#387E89]/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#387E89]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Clinical Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl text-[#143151]">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#143151] mb-3">Primary Code Range</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">{diagnosis.details.codeRange}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#143151] mb-3">Clinical Criteria</h4>
                  <ul className="space-y-2">
                    {diagnosis.details.clinicalCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl text-[#143151]">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Always review the patient's clinical documentation thoroughly. When in doubt, 
                  choose the more specific code and ensure documentation supports it.
                </p>
                <div className="bg-gradient-to-r from-[#387E89]/5 to-[#143151]/5 p-4 sm:p-6 rounded-xl border border-[#387E89]/20">
                  <h4 className="font-bold text-[#387E89] mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Best Practice
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {diagnosis.details.bestPractice}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Documentation Requirements</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#143151] mb-4 text-lg sm:text-xl">Required Elements</h4>
                  <div className="grid gap-3">
                    {diagnosis.details.documentationRequirements.map((req, index) => (
                      <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg border border-green-200/60">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-4 sm:p-6 rounded-xl border border-red-200/60">
                    <h4 className="font-bold text-red-600 mb-4 flex items-center text-base sm:text-lg">
                      <XCircle className="h-5 w-5 mr-2" />
                      Poor Documentation Example
                    </h4>
                    <div className="bg-white/80 p-4 rounded-lg border border-red-200/60">
                      <p className="text-red-700 italic font-medium text-sm sm:text-base">
                        "{diagnosis.details.examples.poor}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 sm:p-6 rounded-xl border border-green-200/60">
                    <h4 className="font-bold text-green-600 mb-4 flex items-center text-base sm:text-lg">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Good Documentation Example
                    </h4>
                    <div className="bg-white/80 p-4 rounded-lg border border-green-200/60">
                      <p className="text-green-700 italic font-medium text-sm sm:text-base">
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
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Documentation & Coding Risks</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6">
                {diagnosis.details.risks.map((risk, index) => (
                  <div key={index} className="border-l-4 border-amber-500 bg-amber-50 p-4 sm:p-6 rounded-r-lg">
                    <h4 className="font-bold text-[#143151] mb-2 text-base sm:text-lg flex items-center">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                      {risk.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid gap-6">
            {diagnosis.details.faq.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-[#143151] flex items-start">
                    <HelpCircle className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed pl-8 text-sm sm:text-base">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143151]">Documentation Templates</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                {diagnosis.details.templates.map((template, index) => (
                  <div key={index} className="border rounded-xl p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-200/60">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h4 className="font-bold text-[#143151] text-base sm:text-lg">{template.title}</h4>
                      <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 w-fit">
                        {template.specialty}
                      </Badge>
                    </div>
                    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm text-green-400 overflow-x-auto border border-gray-700">
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
            className="bg-white/80 hover:bg-[#387E89] border-gray-200 hover:border-[#387E89] text-gray-700 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2 rotate-90" />
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisDetail;
