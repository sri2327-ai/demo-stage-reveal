
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockDiagnoses, getDiagnosisById } from '@/data/mockDiagnoses';

const DiagnosisDetail = () => {
  const { id } = useParams<{ id: string }>();
  const diagnosis = getDiagnosisById(id || '');

  if (!diagnosis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Diagnosis Not Found</h1>
            <p className="text-gray-600 mb-6">The requested diagnosis could not be found.</p>
            <Link to="/diagnoses">
              <Button>Back to Diagnoses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to="/diagnoses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Diagnoses
          </Link>
        </div>

        {/* Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  {diagnosis.name}
                </CardTitle>
                <p className="text-lg text-gray-600 mb-4">
                  {diagnosis.description}
                </p>
                {diagnosis.alsoKnownAs.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Also known as:</p>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.alsoKnownAs.map((term, index) => (
                        <Badge key={index} variant="secondary">
                          {term}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:text-right">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  {diagnosis.primaryCode}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">{diagnosis.codeType}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="codes">ICD-10 Codes</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="risks">Risks</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Key Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Primary Code Range</h4>
                      <p className="text-gray-600">{diagnosis.details.codeRange}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clinical Criteria</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {diagnosis.details.clinicalCriteria.map((criteria, index) => (
                          <li key={index}>{criteria}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                    Clinical Decision Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Always review the patient's clinical documentation thoroughly. When in doubt, 
                    choose the more specific code and ensure documentation supports it.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Best Practice</h4>
                    <p className="text-blue-800 text-sm">
                      {diagnosis.details.bestPractice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="codes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary ICD-10-CM Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {diagnosis.details.relatedCodes.map((code, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono font-semibold">{code.code}</TableCell>
                        <TableCell>{code.description}</TableCell>
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentation Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Required Elements</h4>
                    <ul className="space-y-2">
                      {diagnosis.details.documentationRequirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                        <XCircle className="h-4 w-4 mr-2" />
                        Poor Documentation Example
                      </h4>
                      <p className="text-red-800 text-sm italic mb-2">
                        "{diagnosis.details.examples.poor}"
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Good Documentation Example
                      </h4>
                      <p className="text-green-800 text-sm italic mb-2">
                        "{diagnosis.details.examples.good}"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                  Documentation & Coding Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diagnosis.details.risks.map((risk, index) => (
                    <div key={index} className="border-l-4 border-amber-400 pl-4 py-2">
                      <h4 className="font-semibold text-gray-900 mb-1">{risk.title}</h4>
                      <p className="text-gray-600 text-sm">{risk.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="space-y-4">
              {diagnosis.details.faq.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentation Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {diagnosis.details.templates.map((template, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{template.title}</h4>
                        <Badge variant="outline">{template.specialty}</Badge>
                      </div>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        {template.template}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DiagnosisDetail;
