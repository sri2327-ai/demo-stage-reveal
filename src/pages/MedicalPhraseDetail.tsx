import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Stethoscope, ExternalLink, Copy, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getMedicalPhraseById } from '@/data/mockMedicalPhrases';
import { useToast } from '@/hooks/use-toast';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/medical-phrases">
            <Button 
              variant="outline" 
              className="mb-6 bg-transparent border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Medical Phrases
            </Button>
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                  {phrase.specialty}
                </Badge>
                <Badge variant="outline" className="border-[#143151]/30 text-[#143151]">
                  {phrase.sectionOfNote}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-4 leading-tight">
                {phrase.phrase}
              </h1>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(phrase.phrase, 'Phrase')}
                  className="text-[#387E89] border-[#387E89]/30 hover:bg-[#387E89]/10"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy Phrase
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Meaning */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#143151] flex items-center gap-2">
                  <Quote className="w-5 h-5 text-[#387E89]" />
                  Meaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {phrase.meaning}
                </p>
              </CardContent>
            </Card>

            {/* Clinical Context */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#143151] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#387E89]" />
                  Clinical Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {phrase.clinicalContext}
                </p>
              </CardContent>
            </Card>

            {/* Example Usage */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#143151] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#387E89]" />
                  Example Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#387E89]/5 border border-[#387E89]/20 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{phrase.exampleUsage}"
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(phrase.exampleUsage, 'Example usage')}
                    className="mt-3 text-[#387E89] border-[#387E89]/30 hover:bg-[#387E89]/10"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Example
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage Context */}
            <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#143151]">
                  Usage Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {phrase.usageContext}
                </p>
              </CardContent>
            </Card>

            {/* Related Phrases */}
            {phrase.relatedPhrases.length > 0 && (
              <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#143151]">
                    Related Phrases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {phrase.relatedPhrases.map((related, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-[#387E89] border-[#387E89]/30 bg-[#387E89]/5 hover:bg-[#387E89]/10 cursor-pointer"
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
              <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#143151] flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-[#387E89]" />
                    Related ICD-10 Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between bg-[#143151]/5 border border-[#143151]/20 rounded-lg p-4">
                    <span className="text-gray-700 font-medium">
                      {phrase.icd10Link}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(phrase.icd10Link!, 'ICD-10 code')}
                      className="text-[#143151] border-[#143151]/30 hover:bg-[#143151]/10"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              Need to find more phrases? Browse our complete collection.
            </p>
            <Link to="/medical-phrases">
              <Button className="bg-[#387E89] hover:bg-[#143151] text-white">
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