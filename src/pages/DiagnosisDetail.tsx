
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

  if (!diagnosis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#2A3441] flex items-center justify-center px-4">
        <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Diagnosis Not Found</h1>
            <p className="text-gray-300 mb-8">The requested diagnosis could not be found in our database.</p>
            <Link to="/diagnoses">
              <Button className="bg-[#387E89] hover:bg-[#143151] text-white">
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#2A3441]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/diagnoses" 
            className="inline-flex items-center text-[#387E89] hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Diagnoses
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-base sm:text-lg px-3 sm:px-4 py-2 font-mono bg-[#387E89]/20 text-[#387E89] border-[#387E89]/50 w-fit">
                      {diagnosis.primaryCode}
                    </Badge>
                    <Badge variant="secondary" className="text-sm bg-white/10 text-gray-300 border border-white/20 w-fit">
                      {diagnosis.codeType}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {diagnosis.name}
                  </CardTitle>
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                    {diagnosis.description}
                  </p>
                  {diagnosis.alsoKnownAs.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Also known as</p>
                      <div className="flex flex-wrap gap-2">
                        {diagnosis.alsoKnownAs.map((term, index) => (
                          <Badge key={index} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20">
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

        {/* Overview Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#387E89]/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#387E89]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Clinical Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Primary Code Range</h4>
                  <p className="text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10">{diagnosis.details.codeRange}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Clinical Criteria</h4>
                  <ul className="space-y-2">
                    {diagnosis.details.clinicalCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                  <AlertTriangle className="h-5 w-5 text-amber-400 mr-3" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Always review the patient's clinical documentation thoroughly. When in doubt, 
                  choose the more specific code and ensure documentation supports it.
                </p>
                <div className="bg-gradient-to-r from-[#387E89]/10 to-[#143151]/10 p-4 sm:p-6 rounded-xl border border-[#387E89]/20">
                  <h4 className="font-bold text-[#387E89] mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Best Practice
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {diagnosis.details.bestPractice}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ICD-10 Codes Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">ICD-10 Codes</h2>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-white">Primary ICD-10-CM Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-white/20">
                      <TableHead className="font-bold text-gray-300">Code</TableHead>
                      <TableHead className="font-bold text-gray-300">Description</TableHead>
                      <TableHead className="font-bold text-gray-300">Status</TableHead>
                      <TableHead className="font-bold text-gray-300">Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {diagnosis.details.relatedCodes.map((code, index) => (
                      <TableRow key={index} className="hover:bg-white/5 border-b border-white/10">
                        <TableCell className="font-mono font-bold text-[#387E89] bg-[#387E89]/10 rounded">
                          {code.code}
                        </TableCell>
                        <TableCell className="font-medium text-white">{code.description}</TableCell>
                        <TableCell>
                          <Badge variant={code.billable ? "default" : "secondary"} className={code.billable ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-gray-500/20 text-gray-400 border-gray-500/50"}>
                            {code.billable ? "Billable" : "Non-billable"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-300">{code.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Documentation Requirements</h2>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-white mb-4 text-lg sm:text-xl">Required Elements</h4>
                  <div className="grid gap-3">
                    {diagnosis.details.documentationRequirements.map((req, index) => (
                      <div key={index} className="flex items-start bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 p-4 sm:p-6 rounded-xl border border-red-500/20">
                    <h4 className="font-bold text-red-400 mb-4 flex items-center text-base sm:text-lg">
                      <XCircle className="h-5 w-5 mr-2" />
                      Poor Documentation Example
                    </h4>
                    <div className="bg-white/5 p-4 rounded-lg border border-red-500/20">
                      <p className="text-red-300 italic font-medium text-sm sm:text-base">
                        "{diagnosis.details.examples.poor}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 sm:p-6 rounded-xl border border-green-500/20">
                    <h4 className="font-bold text-green-400 mb-4 flex items-center text-base sm:text-lg">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Good Documentation Example
                    </h4>
                    <div className="bg-white/5 p-4 rounded-lg border border-green-500/20">
                      <p className="text-green-300 italic font-medium text-sm sm:text-base">
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
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Documentation & Coding Risks</h2>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6">
                {diagnosis.details.risks.map((risk, index) => (
                  <div key={index} className="border-l-4 border-amber-400 bg-amber-500/10 p-4 sm:p-6 rounded-r-lg">
                    <h4 className="font-bold text-white mb-2 text-base sm:text-lg flex items-center">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mr-2" />
                      {risk.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid gap-6">
            {diagnosis.details.faq.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-white flex items-start">
                    <HelpCircle className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed pl-8 text-sm sm:text-base">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-teal-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Documentation Templates</h2>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                {diagnosis.details.templates.map((template, index) => (
                  <div key={index} className="border rounded-xl p-4 sm:p-6 bg-gradient-to-r from-white/5 to-[#387E89]/5 border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h4 className="font-bold text-white text-base sm:text-lg">{template.title}</h4>
                      <Badge variant="outline" className="bg-[#387E89]/20 text-[#387E89] border-[#387E89]/50 w-fit">
                        {template.specialty}
                      </Badge>
                    </div>
                    <div className="bg-[#0A0F1C] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm text-green-400 overflow-x-auto border border-white/10">
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
            className="bg-white/10 hover:bg-[#387E89] border-white/20 hover:border-[#387E89] text-white hover:text-white"
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
