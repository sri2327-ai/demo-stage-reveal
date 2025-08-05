import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Book, Stethoscope, FileText, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getAbbreviationByCode } from "@/data/medicalAbbreviations";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MedicalAbbreviationDetail = () => {
  const { code } = useParams<{ code: string }>();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const abbreviation = code ? getAbbreviationByCode(code) : null;

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      toast({
        title: "Copied to clipboard",
        description: `${fieldName} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  if (!abbreviation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <Book className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Abbreviation Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The medical abbreviation "{code?.toUpperCase()}" was not found in our database.
            </p>
            <Link to="/medical-abbreviations">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Abbreviations
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": abbreviation.abbreviation,
    "description": abbreviation.plainDefinition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Medical Abbreviations Glossary",
      "url": `${window.location.origin}/medical-abbreviations`
    },
    "termCode": abbreviation.abbreviation,
    "alternateName": abbreviation.fullForm,
    "url": window.location.href
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/medical-abbreviations">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Medical Abbreviations
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header Card */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent shadow-lg" data-api-source="abbreviation-header">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-4xl font-bold text-primary mb-2">
                    {abbreviation.abbreviation}
                  </CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">
                    {abbreviation.fullForm}
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="text-sm">
                    {abbreviation.specialty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {abbreviation.system}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                {abbreviation.plainDefinition}
              </p>
            </CardContent>
          </Card>

          {/* Clinical Information */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Clinical Example */}
            <Card className="shadow-lg border-0 bg-card/60 backdrop-blur-sm" data-api-source="clinical-example">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Clinical Example
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(abbreviation.clinicalExample, "Clinical Example")}
                    className="ml-auto"
                  >
                    {copiedField === "Clinical Example" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-mono text-sm bg-muted/30 p-4 rounded-lg">
                  "{abbreviation.clinicalExample}"
                </p>
              </CardContent>
            </Card>

            {/* Medical Context */}
            <Card className="shadow-lg border-0 bg-card/60 backdrop-blur-sm" data-api-source="medical-context">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  Medical Context
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Medical Specialty</h4>
                  <Badge variant="secondary">{abbreviation.specialty}</Badge>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Body System</h4>
                  <Badge variant="outline">{abbreviation.system}</Badge>
                </div>
                {abbreviation.icd10Code && (
                  <div>
                    <h4 className="font-semibold mb-2">ICD-10 Code</h4>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                        {abbreviation.icd10Code}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(abbreviation.icd10Code!, "ICD-10 Code")}
                      >
                        {copiedField === "ICD-10 Code" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Related Terms */}
          <Card className="shadow-lg border-0 bg-card/60 backdrop-blur-sm" data-api-source="related-terms">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Related Terms & Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {abbreviation.relatedTerms.map((term, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {term}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-lg border-0 bg-card/60 backdrop-blur-sm" data-api-source="additional-info">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Usage Context</h4>
                <p className="text-muted-foreground">
                  {abbreviation.description}
                </p>
              </div>
              
              <Separator />
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Medical Accuracy:</strong> This information is provided for educational purposes 
                  and should not replace professional medical advice.
                </p>
                <p>
                  <strong>Last Updated:</strong> Information is current as of our latest medical review.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Link to="/medical-abbreviations">
              <Button variant="outline" size="lg">
                <Book className="h-4 w-4 mr-2" />
                Browse More Abbreviations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAbbreviationDetail;