import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Info, HelpCircle, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Updated data structure to match the new format
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
    aboutRange: {},
    codes: {
      'A00': {
        'd': 'Cholera',
        'b': false,
        'c': {
          'A00.0': 'Cholera due to Vibrio cholerae 01, biovar cholerae',
          'A00.1': 'Cholera due to Vibrio cholerae 01, biovar eltor',
          'A00.9': 'Cholera, unspecified'
        }
      },
      'A01': {
        'd': 'Typhoid and paratyphoid fevers',
        'b': false,
        'c': {
          'A01.0': {
            'd': 'Typhoid fever',
            'b': false,
            'c': {
              'A01.00': 'Typhoid fever, unspecified',
              'A01.01': 'Typhoid meningitis',
              'A01.02': {
                'd': 'Typhoid fever with heart involvement',
                'b': true
              }
            }
          },
          'A01.1': 'Paratyphoid fever A',
          'A01.2': 'Paratyphoid fever B',
          'A01.3': 'Paratyphoid fever C',
          'A01.4': {
            'd': 'Paratyphoid fever, unspecified',
            'b': true
          }
        }
      },
      'A02': {
        'd': 'Other salmonella infections',
        'b': false,
        'c': {
          'A02.0': 'Salmonella enteritidis',
          'A02.1': 'Salmonella sepsis',
          'A02.2': {
            'd': 'Localized salmonella infections',
            'b': false,
            'c': {
              'A02.20': 'Localized salmonella infection, unspecified',
              'A02.21': 'Salmonella meningitis',
              'A02.22': 'Salmonella pneumonia'
            }
          }
        }
      },
      'A09': 'Infectious gastroenteritis and colitis, unspecified'
    },
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

// Recursive component to render nested codes
const CodeRenderer = ({ code, codeData, level = 0 }: { code: string; codeData: any; level?: number }) => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (codeText: string) => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopiedCode(codeText);
      toast({
        title: "Code copied!",
        description: `${codeText} has been copied to your clipboard.`
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

  // Handle string format (leaf nodes)
  if (typeof codeData === 'string') {
    return (
      <div 
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white rounded border border-gray-100`}
        style={{ marginLeft: `${level * 20}px` }}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <Badge variant="outline" className="font-mono text-xs bg-gray-50 text-gray-700 border-gray-200 flex-shrink-0">
            {code}
          </Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => copyToClipboard(code)} 
            className="h-6 w-6 p-0 hover:bg-gray-100 flex-shrink-0"
          >
            {copiedCode === code ? 
              <Check className="h-3 w-3 text-green-600" /> : 
              <Copy className="h-3 w-3 text-gray-500" />
            }
          </Button>
          <span className="text-xs sm:text-sm text-gray-700 truncate">
            {codeData}
          </span>
        </div>
        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 flex-shrink-0">
          Billable
        </Badge>
      </div>
    );
  }

  // Handle object format
  const description = codeData.d || '';
  const isBillable = codeData.b;
  const children = codeData.c;

  return (
    <div className="space-y-2">
      <div 
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 ${level === 0 ? 'bg-gray-50' : 'bg-white'} rounded border border-gray-100`}
        style={{ marginLeft: `${level * 20}px` }}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <Badge variant="outline" className={`font-mono text-xs ${level === 0 ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-50 text-gray-700 border-gray-200'} flex-shrink-0`}>
            {code}
          </Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => copyToClipboard(code)} 
            className="h-6 w-6 p-0 hover:bg-gray-100 flex-shrink-0"
          >
            {copiedCode === code ? 
              <Check className="h-3 w-3 text-green-600" /> : 
              <Copy className="h-3 w-3 text-gray-500" />
            }
          </Button>
          <span className="text-xs sm:text-sm text-gray-700 truncate">
            {description}
          </span>
        </div>
        {isBillable && (
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 flex-shrink-0">
            Billable
          </Badge>
        )}
      </div>
      
      {/* Render children recursively */}
      {children && (
        <div className="space-y-2">
          {Object.entries(children).map(([childCode, childData]) => (
            <CodeRenderer 
              key={childCode} 
              code={childCode} 
              codeData={childData} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ICD10CodeRange = () => {
  const { range } = useParams<{ range: string }>();
  const data = range ? codeRangeData[range] : null;
  const { toast } = useToast();
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
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
            <BookOpen className="w-3 h-3 mr-1.5 sm:mr-2" />
            {data.chapter}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Badge variant="outline" className="text-base sm:text-lg font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 px-3 py-1.5 sm:px-4 sm:py-2 w-fit">
              {data.range}
            </Badge>
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
                {Object.entries(data.codes).map(([code, codeData]) => (
                  <div key={code} className="border border-gray-200 rounded-lg overflow-hidden p-4">
                    <CodeRenderer code={code} codeData={codeData} level={0} />
                  </div>
                ))}
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
                {data.faqs.map((faq: any, index: number) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 sm:pb-6 last:pb-0">
                    <h3 className="text-base sm:text-lg font-semibold text-[#143151] mb-2 sm:mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
