import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Book, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSuffixByName } from '@/data/medicalSuffixes';
import { FAQSection } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';

const MedicalSuffixDetail = () => {
  const { id } = useParams<{ id: string }>();
  const suffix = id ? getSuffixByName(decodeURIComponent(id)) : null;

  if (!suffix) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#143151] mb-4">Suffix Not Found</h1>
          <p className="text-gray-600 mb-6">The requested medical suffix could not be found.</p>
          <Link to="/medical-suffixes">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              Back to Medical Suffixes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqs = [
    { 
      question: `What does the suffix "${suffix.suffix}" mean?`, 
      answer: `The suffix "${suffix.suffix}" means "${suffix.meaning}" and originates from ${suffix.origin}.` 
    },
    { 
      question: "How is this suffix used in medical terminology?", 
      answer: suffix.clinicalContext 
    },
    { 
      question: "What are some common medical terms using this suffix?", 
      answer: `Common terms include: ${suffix.examples.map(ex => ex.word).join(', ')}.` 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{suffix.suffix} - Medical Suffix Meaning & Examples | S10.AI</title>
        <meta 
          name="description" 
          content={`Learn about the medical suffix ${suffix.suffix} meaning "${suffix.meaning}". Includes etymology, clinical examples, and usage in healthcare terminology.`} 
        />
        <meta 
          name="keywords" 
          content={`medical suffix ${suffix.suffix}, ${suffix.suffix} meaning, ${suffix.meaning}, medical terminology ${suffix.suffix}, healthcare suffix, ${suffix.specialty} terminology, ${suffix.origin} suffix, medical word parts, clinical terminology, ${suffix.examples.map(ex => ex.word).join(', ')}, ${suffix.relatedTerms.join(', ')}, medical education, healthcare professionals, medical dictionary, suffix definition, etymology medical terms, medical vocabulary, clinical documentation, healthcare training`} 
        />
        <link rel="canonical" href={`https://s10.ai/medical-suffixes/${encodeURIComponent(suffix.suffix.toLowerCase())}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalContent",
            "name": `Medical Suffix: ${suffix.suffix}`,
            "description": `${suffix.suffix} is a medical suffix meaning "${suffix.meaning}" from ${suffix.origin} origin.`,
            "educationalLevel": "Professional",
            "audience": {
              "@type": "Audience",
              "audienceType": "Healthcare Professionals"
            },
            "about": {
              "@type": "Thing",
              "name": "Medical Terminology"
            },
            "provider": {
              "@type": "Organization",
              "name": "S10.AI"
            }
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/medical-suffixes" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Medical Suffixes
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-start space-x-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#143151] to-[#387E89]">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                  {suffix.specialty}
                </Badge>
                <Badge variant="secondary">
                  {suffix.origin}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2">
                {suffix.suffix}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Meaning: {suffix.meaning}
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Context */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Clinical Context</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{suffix.clinicalContext}</p>
          </CardContent>
        </Card>

        {/* Example Clinical Note */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Example Clinical Note</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 font-medium mb-2">Sample Documentation:</p>
              <div className="bg-white border rounded p-4 font-mono text-sm">
                <p className="mb-2"><strong>Clinical Assessment:</strong></p>
                <p>
                  Patient diagnosed with <span className="bg-yellow-200 px-1 rounded font-semibold">{suffix.examples[0]?.word || 'condition'}</span>
                  {suffix.examples[0] && ` (${suffix.examples[0].definition})`}.
                  {suffix.suffix === '-itis' && ' Inflammation markers elevated, prescribed anti-inflammatory medication.'}
                  {suffix.suffix === '-ectomy' && ' Surgical removal completed successfully, patient stable post-procedure.'}
                  {suffix.suffix === '-ology' && ' Referred to specialist for comprehensive evaluation and management.'}
                  {suffix.suffix === '-oma' && ' Imaging reveals mass requiring further evaluation and possible biopsy.'}
                  {suffix.suffix === '-pathy' && ' Progressive disease pattern noted, treatment plan adjusted accordingly.'}
                  {!['-itis', '-ectomy', '-ology', '-oma', '-pathy'].includes(suffix.suffix) && ' Treatment plan initiated based on clinical findings.'}
                </p>
                <p className="mt-2 text-xs text-gray-600">
                  Note: The suffix "<strong>{suffix.suffix}</strong>" meaning "<strong>{suffix.meaning}</strong>" is highlighted above.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {suffix.examples.map((example, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#143151] mb-1">{example.word}</h4>
                  <p className="text-gray-600 text-sm">{example.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Terms */}
        {suffix.relatedTerms.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#143151]">Related Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {suffix.relatedTerms.map((term, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                    {term}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle={`Common questions about the suffix "${suffix.suffix}"`}
          faqs={faqs}
        />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default MedicalSuffixDetail;