import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Book, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPrefixByName } from '@/data/medicalPrefixes';
import { FAQSection } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';

const MedicalPrefixDetail = () => {
  const { id } = useParams<{ id: string }>();
  const prefix = id ? getPrefixByName(decodeURIComponent(id)) : null;

  if (!prefix) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#143151] mb-4">Prefix Not Found</h1>
          <p className="text-gray-600 mb-6">The requested medical prefix could not be found.</p>
          <Link to="/medical-prefixes">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              Back to Medical Prefixes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqs = [
    { 
      question: `What does the prefix "${prefix.prefix}" mean?`, 
      answer: `The prefix "${prefix.prefix}" means "${prefix.meaning}" and originates from ${prefix.origin}.` 
    },
    { 
      question: "How is this prefix used in medical terminology?", 
      answer: prefix.clinicalContext 
    },
    { 
      question: "What are some common medical terms using this prefix?", 
      answer: `Common terms include: ${prefix.examples.map(ex => ex.word).join(', ')}.` 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{prefix.prefix} - Medical Prefix Meaning & Examples | S10.AI</title>
        <meta 
          name="description" 
          content={`Learn about the medical prefix ${prefix.prefix} meaning "${prefix.meaning}". Includes etymology, clinical examples, and usage in healthcare terminology.`} 
        />
        <meta 
          name="keywords" 
          content={`medical prefix, ${prefix.prefix}, ${prefix.meaning}, medical terminology, healthcare, ${prefix.examples.map(ex => ex.word).join(', ')}`} 
        />
        <link rel="canonical" href={`https://s10.ai/medical-prefixes/${encodeURIComponent(prefix.prefix.toLowerCase())}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalContent",
            "name": `Medical Prefix: ${prefix.prefix}`,
            "description": `${prefix.prefix} is a medical prefix meaning "${prefix.meaning}" from ${prefix.origin} origin.`,
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
            to="/medical-prefixes" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Medical Prefixes
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
                  {prefix.specialty}
                </Badge>
                <Badge variant="secondary">
                  {prefix.origin}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2">
                {prefix.prefix}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Meaning: {prefix.meaning}
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
            <p className="text-gray-700 leading-relaxed">{prefix.clinicalContext}</p>
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
                <p className="mb-2"><strong>Patient Assessment:</strong></p>
                <p>
                  Patient presents with <span className="bg-yellow-200 px-1 rounded font-semibold">{prefix.examples[0]?.word || 'condition'}</span> 
                  {prefix.examples[0] && ` (${prefix.examples[0].definition})`}. 
                  {prefix.prefix === 'hyper-' && 'Vital signs show elevated blood pressure at 160/95 mmHg.'} 
                  {prefix.prefix === 'hypo-' && 'Laboratory results indicate low glucose levels at 65 mg/dL.'}
                  {prefix.prefix === 'anti-' && 'Prescribed antibiotic therapy for bacterial infection.'}
                  {prefix.prefix === 'pre-' && 'Scheduled for preoperative evaluation next week.'}
                  {prefix.prefix === 'post-' && 'Patient recovering well in postoperative period.'}
                  {!['hyper-', 'hypo-', 'anti-', 'pre-', 'post-'].includes(prefix.prefix) && 'Clinical findings support this diagnosis.'}
                </p>
                <p className="mt-2 text-xs text-gray-600">
                  Note: The prefix "<strong>{prefix.prefix}</strong>" meaning "<strong>{prefix.meaning}</strong>" is highlighted above.
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
              {prefix.examples.map((example, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#143151] mb-1">{example.word}</h4>
                  <p className="text-gray-600 text-sm">{example.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle={`Common questions about the prefix "${prefix.prefix}"`}
          faqs={faqs}
        />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default MedicalPrefixDetail;