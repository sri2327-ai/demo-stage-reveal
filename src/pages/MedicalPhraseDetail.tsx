import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Stethoscope, ExternalLink, Copy, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getMedicalPhraseById } from '@/data/mockMedicalPhrases';
import { useToast } from '@/hooks/use-toast';
import { FAQSection } from '@/components/FAQSection';

const MedicalPhraseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const phrase = id ? getMedicalPhraseById(id) : undefined;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: `${label} has been copied to your clipboard.`,
      });
    });
  };

  if (!phrase) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#143151] mb-2">Phrase Not Found</h2>
            <p className="text-gray-600 mb-6">The medical phrase you're looking for doesn't exist or has been moved.</p>
            <Link to="/medical-phrases">
              <Button className="bg-[#387E89] hover:bg-[#143151] text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Phrases
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl animate-fade-in">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <Link to="/medical-phrases" className="inline-block mb-8">
            <Button 
              variant="outline" 
              className="bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Medical Phrases
            </Button>
          </Link>

          <div className="flex items-start gap-6 mb-8 p-6 bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0 hover-scale">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 px-3 py-1 text-sm font-medium hover:bg-[#387E89]/20 transition-colors">
                  {phrase.specialty}
                </Badge>
                <Badge variant="outline" className="border-[#143151]/30 text-[#143151] px-3 py-1 text-sm font-medium hover:bg-[#143151]/5 transition-colors">
                  {phrase.sectionOfNote}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] leading-tight">
                {phrase.phrase}
              </h1>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(phrase.phrase, 'Phrase')}
                  className="text-[#387E89] border-[#387E89]/30 hover:bg-[#387E89]/10 hover:border-[#387E89] transition-all duration-200 hover:shadow-sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Phrase
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:gap-10">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Meaning */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#387E89]/10">
                    <Quote className="w-5 h-5 text-[#387E89]" />
                  </div>
                  Meaning
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {phrase.meaning}
                </p>
              </CardContent>
            </Card>

            {/* Clinical Context */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#387E89]/10">
                    <Stethoscope className="w-5 h-5 text-[#387E89]" />
                  </div>
                  Clinical Context
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {phrase.clinicalContext}
                </p>
              </CardContent>
            </Card>

            {/* Example Usage */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#387E89]/10">
                    <FileText className="w-5 h-5 text-[#387E89]" />
                  </div>
                  Example Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-gradient-to-br from-[#387E89]/5 to-[#387E89]/10 border border-[#387E89]/20 rounded-xl p-6 hover:bg-gradient-to-br hover:from-[#387E89]/10 hover:to-[#387E89]/15 transition-all duration-200">
                  <p className="text-gray-700 leading-relaxed italic text-base lg:text-lg mb-4">
                    "{phrase.exampleUsage}"
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(phrase.exampleUsage, 'Example usage')}
                    className="text-[#387E89] border-[#387E89]/30 hover:bg-[#387E89]/10 hover:border-[#387E89] transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Example
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage Context */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151]">
                  Usage Context
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {phrase.usageContext}
                </p>
              </CardContent>
            </Card>

            {/* Related Phrases */}
            {phrase.relatedPhrases.length > 0 && (
              <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151]">
                    Related Phrases
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-3">
                    {phrase.relatedPhrases.map((related, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-[#387E89] border-[#387E89]/30 bg-[#387E89]/5 hover:bg-[#387E89]/15 hover:border-[#387E89] cursor-pointer transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 px-3 py-1 text-sm"
                        onClick={() => copyToClipboard(related, 'Related phrase')}
                      >
                        {related}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ICD-10 Link */}
            {phrase.icd10Link && (
              <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-[#143151] flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#143151]/10">
                      <ExternalLink className="w-5 h-5 text-[#143151]" />
                    </div>
                    Related ICD-10 Code
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between bg-gradient-to-br from-[#143151]/5 to-[#143151]/10 border border-[#143151]/20 rounded-xl p-6 hover:bg-gradient-to-br hover:from-[#143151]/10 hover:to-[#143151]/15 transition-all duration-200">
                    <span className="text-gray-700 font-medium text-base lg:text-lg">
                      {phrase.icd10Link}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(phrase.icd10Link!, 'ICD-10 code')}
                      className="text-[#143151] border-[#143151]/30 hover:bg-[#143151]/10 hover:border-[#143151] transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQ Section */}
            <FAQSection
              title="Frequently Asked Questions"
              subtitle="Common questions about using medical phrases in clinical documentation"
              faqs={[
                {
                  question: "How should I properly document this phrase in my notes?",
                  answer: `When documenting "${phrase.phrase}" in your clinical notes, ensure it's placed in the appropriate section (${phrase.sectionOfNote}) and provides clear, accurate information about the patient's condition. Always follow your institution's documentation guidelines and ensure the phrase accurately reflects the patient's clinical status.`
                },
                {
                  question: "What is the clinical significance of this phrase?",
                  answer: `This phrase is clinically significant because ${phrase.clinicalContext.toLowerCase()} It helps healthcare providers understand the patient's condition and make informed decisions about diagnosis and treatment planning.`
                },
                {
                  question: "Can this phrase be used in different medical specialties?",
                  answer: `While this phrase is commonly used in ${phrase.specialty}, similar documentation may be applicable across multiple specialties when the clinical context is appropriate. Always ensure the phrase accurately describes the patient's condition regardless of the specialty context.`
                },
                {
                  question: "How does this phrase relate to coding and billing?",
                  answer: `${phrase.icd10Link ? `This phrase is associated with ICD-10 code ${phrase.icd10Link}, which helps with accurate coding and billing. ` : ''}Proper documentation using standardized phrases like this supports accurate diagnosis coding, which is essential for billing, quality metrics, and population health management.`
                },
                {
                  question: "What should I do if the phrase doesn't exactly match my patient's condition?",
                  answer: "Never use a standardized phrase if it doesn't accurately represent your patient's clinical status. Modify the documentation to reflect the actual clinical findings, or use alternative phrases that better describe the patient's condition. Accurate documentation is always more important than using standardized templates."
                }
              ]}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-gray-200/60">
          <div className="text-center bg-gradient-to-br from-white/60 to-gray-50/30 backdrop-blur-sm border border-gray-200/40 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Need to find more phrases? Browse our complete collection.
            </p>
            <Link to="/medical-phrases">
              <Button className="bg-[#387E89] hover:bg-[#143151] text-white px-8 py-3 text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Browse All Medical Phrases
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPhraseDetail;