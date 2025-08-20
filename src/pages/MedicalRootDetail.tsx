import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Book, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRootByName } from '@/data/medicalRoots';
import { FAQSection } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';

const MedicalRootDetail = () => {
  const { id } = useParams<{ id: string }>();
  const root = id ? getRootByName(decodeURIComponent(id)) : null;

  if (!root) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#143151] mb-4">Root Word Not Found</h1>
          <p className="text-gray-600 mb-6">The requested medical root word could not be found.</p>
          <Link to="/medical-roots">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              Back to Medical Root Words
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqs = [
    { 
      question: `What does the root word "${root.root}" mean?`, 
      answer: `The root word "${root.root}" means "${root.meaning}" and originates from ${root.origin}.` 
    },
    { 
      question: "How is this root word used in medical terminology?", 
      answer: root.clinicalContext 
    },
    { 
      question: "What are some common medical terms using this root word?", 
      answer: `Common terms include: ${root.examples.map(ex => ex.word).join(', ')}.` 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/medical-roots" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Medical Root Words
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
                  {root.specialty}
                </Badge>
                <Badge variant="secondary">
                  {root.origin}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-2">
                {root.root}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Meaning: {root.meaning}
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
            <p className="text-gray-700 leading-relaxed">{root.clinicalContext}</p>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {root.examples.map((example, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#143151] mb-1">{example.word}</h4>
                  <p className="text-gray-600 text-sm">{example.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Terms */}
        {root.relatedTerms.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#143151]">Related Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {root.relatedTerms.map((term, index) => (
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
          subtitle={`Common questions about the root word "${root.root}"`}
          faqs={faqs}
        />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default MedicalRootDetail;