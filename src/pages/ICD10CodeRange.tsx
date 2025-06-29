
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data for code ranges
const codeRangeData: { [key: string]: any } = {
  'a00-a09': {
    range: 'A00-A09',
    title: 'Intestinal infectious diseases',
    chapter: 'Chapter 1: Certain infectious and parasitic diseases',
    description: 'This category includes codes for various intestinal infectious diseases caused by bacteria, viruses, and parasites. These conditions affect the gastrointestinal tract and can cause symptoms such as diarrhea, vomiting, abdominal pain, and dehydration.',
    totalCodes: 94,
    billableCodes: 79,
    nonBillableCodes: 15,
    aboutRange: {
      overview: 'The A00-A09 range encompasses intestinal infectious diseases that are commonly encountered in clinical practice. These codes are essential for accurate documentation of gastrointestinal infections and their associated complications.',
      clinicalUse: 'Used when documenting patients with confirmed or suspected intestinal infections, including cholera, typhoid fever, salmonella infections, and other bacterial gastroenteritis.',
      documentation: 'Requires clinical documentation of symptoms, laboratory findings, and specific organism identification when available.'
    },
    faqs: [
      {
        question: 'When should I use codes from the A00-A09 range?',
        answer: 'Use these codes when documenting intestinal infectious diseases caused by specific organisms or when the clinical presentation suggests an infectious gastroenteritis.'
      },
      {
        question: 'Do I need laboratory confirmation to use these codes?',
        answer: 'While laboratory confirmation is preferred, clinical diagnosis based on symptoms and epidemiological factors may be sufficient for code assignment.'
      },
      {
        question: 'How do I choose between different codes in this range?',
        answer: 'Selection depends on the specific organism identified or the clinical presentation. Use the most specific code available based on documentation.'
      }
    ]
  }
};

const ICD10CodeRange = () => {
  const { range } = useParams<{ range: string }>();
  const data = range ? codeRangeData[range] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-[#143151] mb-4">Code Range Not Found</h1>
            <p className="text-gray-600 mb-6">The requested ICD-10 code range could not be found.</p>
            <Link to="/icd10-codes">
              <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
                Back to ICD-10 Codes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/icd10-codes"
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to ICD-10 Codes
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-sm font-medium mb-6 border border-blue-200/40">
            <BookOpen className="w-4 h-4 mr-2" />
            {data.chapter}
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="outline" className="text-lg font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 px-4 py-2">
              {data.range}
            </Badge>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-sm bg-green-100 text-green-700">
                {data.billableCodes} billable
              </Badge>
              <Badge variant="secondary" className="text-sm bg-gray-100 text-gray-600">
                {data.totalCodes} total codes
              </Badge>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {data.description}
          </p>
        </div>

        {/* About This Range */}
        <div className="mb-12" data-api-section="about-range">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-[#143151]">
                <Info className="w-6 h-6 mr-3 text-[#387E89]" />
                About This Range
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#143151] mb-2">Overview</h3>
                <p className="text-gray-600 leading-relaxed">{data.aboutRange.overview}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#143151] mb-2">Clinical Use</h3>
                <p className="text-gray-600 leading-relaxed">{data.aboutRange.clinicalUse}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#143151] mb-2">Documentation Requirements</h3>
                <p className="text-gray-600 leading-relaxed">{data.aboutRange.documentation}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Codes in This Range */}
        <div className="mb-12" data-api-section="codes-in-range">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#143151]">
                Codes in this Range ({data.totalCodes}+)
              </CardTitle>
              <p className="text-gray-600">
                This page shows all ICD-10-CM codes in the range {data.range}
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#143151] mb-2">
                      {data.chapter}
                    </h3>
                    <p className="text-[#387E89] font-medium">Range: {data.range}</p>
                  </div>
                  <Badge variant="outline" className="bg-white text-[#143151] border-[#387E89]/30">
                    {data.totalCodes} codes
                  </Badge>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200/50">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Total codes:</strong> {data.totalCodes}+
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Billable codes:</strong> {data.billableCodes}+
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Non-billable codes:</strong> {data.nonBillableCodes}+
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Start Coding with S10.AI
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let S10.AI help you select the most accurate ICD-10 codes for your documentation. 
                Our AI-powered assistant ensures compliance and reduces coding errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button className="bg-white text-[#143151] hover:bg-gray-50 font-semibold px-8 py-3 shadow-lg">
                    Try S10.AI Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/diagnoses">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
                  >
                    Browse Medical Diagnoses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div data-api-section="faqs">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-[#143151]">
                <HelpCircle className="w-6 h-6 mr-3 text-[#387E89]" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {data.faqs.map((faq: any, index: number) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-semibold text-[#143151] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ICD10CodeRange;
