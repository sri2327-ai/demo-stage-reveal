
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Info, HelpCircle, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock data for code ranges with detailed code information
const codeRangeData: {
  [key: string]: any;
} = {
  'a00-a09': {
    range: 'A00-A09',
    title: 'Intestinal infectious diseases',
    chapter: 'Chapter 1: Certain infectious and parasitic diseases',
    chapterRange: 'A00-B99',
    description: 'This category includes codes for various intestinal infectious diseases caused by bacteria, viruses, and parasites. These conditions affect the gastrointestinal tract and can cause symptoms such as diarrhea, vomiting, abdominal pain, and dehydration.',
    totalCodes: 94,
    billableCodes: 79,
    nonBillableCodes: 15,
    chaptersCount: 1,
    aboutRange: {
      clinicalUse: 'Used when documenting patients with confirmed or suspected intestinal infections, including cholera, typhoid fever, salmonella infections, and other bacterial gastroenteritis.',
      documentation: 'Requires clinical documentation of symptoms, laboratory findings, and specific organism identification when available.'
    },
    codes: [{
      code: 'A00',
      title: 'Cholera',
      codeCount: 3,
      subcodes: [{
        code: 'A00.0',
        title: 'Cholera due to Vibrio cholerae 01, biovar cholerae',
        billable: true
      }, {
        code: 'A00.1',
        title: 'Cholera due to Vibrio cholerae 01, biovar eltor',
        billable: true
      }, {
        code: 'A00.9',
        title: 'Cholera, unspecified',
        billable: true
      }]
    }, {
      code: 'A01',
      title: 'Typhoid and paratyphoid fevers',
      codeCount: 5,
      subcodes: []
    }, {
      code: 'A02',
      title: 'Other salmonella infections',
      codeCount: 5,
      subcodes: []
    }, {
      code: 'A03',
      title: 'Shigellosis',
      codeCount: 6,
      subcodes: []
    }, {
      code: 'A04',
      title: 'Other bacterial intestinal infections',
      codeCount: 10,
      subcodes: []
    }, {
      code: 'A05',
      title: 'Other bacterial foodborne intoxications, not elsewhere classified',
      codeCount: 8,
      subcodes: []
    }, {
      code: 'A06',
      title: 'Amebiasis',
      codeCount: 10,
      subcodes: []
    }, {
      code: 'A07',
      title: 'Other protozoal intestinal diseases',
      codeCount: 7,
      subcodes: []
    }, {
      code: 'A08',
      title: 'Viral and other specified intestinal infections',
      codeCount: 6,
      subcodes: []
    }, {
      code: 'A09',
      title: 'Infectious gastroenteritis and colitis, unspecified',
      codeCount: 1,
      billable: true,
      subcodes: []
    }],
    faqs: [{
      question: 'When should I use codes from the A00-A09 range?',
      answer: 'Use these codes when documenting intestinal infectious diseases caused by specific organisms or when the clinical presentation suggests an infectious gastroenteritis.'
    }, {
      question: 'Do I need laboratory confirmation to use these codes?',
      answer: 'While laboratory confirmation is preferred, clinical diagnosis based on symptoms and epidemiological factors may be sufficient for code assignment.'
    }, {
      question: 'How do I choose between different codes in this range?',
      answer: 'Selection depends on the specific organism identified or the clinical presentation. Use the most specific code available based on documentation.'
    }]
  }
};

const ICD10CodeRange = () => {
  const {
    range
  } = useParams<{
    range: string;
  }>();
  const data = range ? codeRangeData[range] : null;
  const {
    toast
  } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast({
        title: "Code copied!",
        description: `${code} has been copied to your clipboard.`
      });
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy code to clipboard.",
        variant: "destructive"
      });
    }
  };
  if (!data) {
    return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 sm:p-8 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#143151] mb-4">Code Range Not Found</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">The requested ICD-10 code range could not be found.</p>
            <Link to="/icd10-codes">
              <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white text-sm sm:text-base">
                Back to ICD-10 Codes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link to="/icd10-codes" className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to ICD-10 Codes
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200/40">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            {data.chapter}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Badge variant="outline" className="text-base sm:text-lg font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 px-3 py-1.5 sm:px-4 sm:py-2 w-fit">
              {data.range}
            </Badge>
            <div className="flex flex-wrap gap-2">
              
              
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#143151] mb-3 sm:mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
            {data.description}
          </p>
        </div>

        {/* About This Range */}
        <div className="mb-8 sm:mb-12" data-api-section="about-range">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl font-bold text-[#143151]">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#387E89]" />
                About This Range
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/30">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#143151]">{data.totalCodes}+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Total codes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">{data.billableCodes}+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Billable codes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-600">{data.nonBillableCodes}+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Non-billable codes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#387E89]">{data.chaptersCount}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Chapters</div>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#143151] mb-2">Clinical Use</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{data.aboutRange.clinicalUse}</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#143151] mb-2">Documentation Requirements</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{data.aboutRange.documentation}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Codes in This Range */}
        <div className="mb-8 sm:mb-12" data-api-section="codes-in-range">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-[#143151]">
                Codes in this Range ({data.totalCodes}+)
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base text-gray-600">
                <span>{data.chapter}</span>
                <span className="hidden sm:inline">•</span>
                <span>Range: {data.chapterRange}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                {data.codes.map((codeGroup: any, index: number) => <div key={codeGroup.code} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-3 sm:p-4 border-b border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono bg-blue-50 text-blue-700 border-blue-200 text-sm">
                            {codeGroup.code}
                          </Badge>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(codeGroup.code)} className="h-6 w-6 p-0 hover:bg-blue-100">
                            {copiedCode === codeGroup.code ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-gray-500" />}
                          </Button>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-500 w-fit">
                          {codeGroup.codeCount} codes
                        </Badge>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#143151] mt-2">
                        {codeGroup.title}
                      </h3>
                      {codeGroup.billable && <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 mt-2">
                          Billable
                        </Badge>}
                    </div>
                    
                    {codeGroup.subcodes && codeGroup.subcodes.length > 0 && <div className="p-3 sm:p-4">
                        <div className="space-y-3">
                          {codeGroup.subcodes.map((subcode: any) => <div key={subcode.code} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white rounded border border-gray-100">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <Badge variant="outline" className="font-mono text-xs bg-gray-50 text-gray-700 border-gray-200 flex-shrink-0">
                                  {subcode.code}
                                </Badge>
                                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(subcode.code)} className="h-6 w-6 p-0 hover:bg-gray-100 flex-shrink-0">
                                  {copiedCode === subcode.code ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-gray-500" />}
                                </Button>
                                <span className="text-xs sm:text-sm text-gray-700 truncate">
                                  {subcode.title}
                                </span>
                              </div>
                              {subcode.billable && <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 flex-shrink-0">
                                  Billable
                                </Badge>}
                            </div>)}
                        </div>
                      </div>}
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Start Coding with S10.AI
              </h2>
              <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Let S10.AI help you select the most accurate ICD-10 codes for your documentation. 
                Our AI-powered assistant ensures compliance and reduces coding errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/demo">
                  <Button className="bg-white text-[#143151] hover:bg-gray-50 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg text-sm sm:text-base">
                    Try S10.AI Now
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/diagnoses">
                  <Button variant="outline" className="border-white text-black hover:bg-white/10 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
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
              <CardTitle className="flex items-center text-xl sm:text-2xl font-bold text-[#143151]">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#387E89]" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                {data.faqs.map((faq: any, index: number) => <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 sm:pb-6 last:pb-0">
                    <h3 className="text-base sm:text-lg font-semibold text-[#143151] mb-2 sm:mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default ICD10CodeRange;
