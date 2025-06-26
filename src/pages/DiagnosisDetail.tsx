
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Code, BookOpen, HelpCircle, FileCheck, ExternalLink } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Diagnosis Not Found</h1>
            <p className="text-gray-600 mb-8">The requested diagnosis could not be found in our database.</p>
            <Link to="/diagnoses">
              <Button className="bg-blue-600 hover:bg-blue-700">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/diagnoses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Diagnoses
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-4 py-2 font-mono bg-blue-50 text-blue-700 border-blue-200">
                      {diagnosis.primaryCode}
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      {diagnosis.codeType}
                    </Badge>
                  </div>
                  <CardTitle className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {diagnosis.name}
                  </CardTitle>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {diagnosis.description}
                  </p>
                  {diagnosis.alsoKnownAs.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Also known as</p>
                      <div className="flex flex-wrap gap-2">
                        {diagnosis.alsoKnownAs.map((term, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Clinical Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Primary Code Range</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{diagnosis.details.codeRange}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Clinical Criteria</h4>
                  <ul className="space-y-2">
                    {diagnosis.details.clinicalCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Always review the patient's clinical documentation thoroughly. When in doubt, 
                  choose the more specific code and ensure documentation supports it.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Best Practice
                  </h4>
                  <p className="text-blue-800 leading-relaxed">
                    {diagnosis.details.bestPractice}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ICD-10 Codes Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">ICD-10 Codes</h2>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Primary ICD-10-CM Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2">
                      <TableHead className="font-bold">Code</TableHead>
                      <TableHead className="font-bold">Description</TableHead>
                      <TableHead className="font-bold">Status</TableHead>
                      <TableHead className="font-bold">Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {diagnosis.details.relatedCodes.map((code, index) => (
                      <TableRow key={index} className="hover:bg-blue-50/50">
                        <TableCell className="font-mono font-bold text-blue-700 bg-blue-50/30">
                          {code.code}
                        </TableCell>
                        <TableCell className="font-medium">{code.description}</TableCell>
                        <TableCell>
                          <Badge variant={code.billable ? "default" : "secondary"}>
                            {code.billable ? "Billable" : "Non-billable"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">{code.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Documentation Requirements</h2>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl">Required Elements</h4>
                  <div className="grid gap-3">
                    {diagnosis.details.documentationRequirements.map((req, index) => (
                      <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                    <h4 className="font-bold text-red-900 mb-4 flex items-center text-lg">
                      <XCircle className="h-5 w-5 mr-2" />
                      Poor Documentation Example
                    </h4>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <p className="text-red-800 italic font-medium">
                        "{diagnosis.details.examples.poor}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-900 mb-4 flex items-center text-lg">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Good Documentation Example
                    </h4>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <p className="text-green-800 italic font-medium">
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Documentation & Coding Risks</h2>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {diagnosis.details.risks.map((risk, index) => (
                  <div key={index} className="border-l-4 border-amber-400 bg-amber-50 p-6 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg flex items-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                      {risk.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid gap-6">
            {diagnosis.details.faq.map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-start">
                    <HelpCircle className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed pl-8">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Documentation Templates</h2>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                {diagnosis.details.templates.map((template, index) => (
                  <div key={index} className="border rounded-xl p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">{template.title}</h4>
                      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                        {template.specialty}
                      </Badge>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm text-green-400 overflow-x-auto">
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
            className="bg-white/80 hover:bg-white border-2 border-blue-200 hover:border-blue-300"
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
