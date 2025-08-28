import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, FileText, Clock, DollarSign, BookOpen, ClipboardList, Users, AlertTriangle, ChevronRight, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCPTCodeBySlug } from "@/data/cptCodes";
import { FAQSection } from "@/components/FAQSection";
import { CallToAction } from "@/components/CallToAction";

const CPTCodeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cptCode = slug ? getCPTCodeBySlug(slug) : null;
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Clinical example has been copied successfully.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!cptCode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">CPT Code Not Found</h1>
          <p className="text-gray-600 mb-6">The requested CPT code could not be found.</p>
          <Link to="/cpt-codes">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to CPT Codes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqs = [
    {
      question: `What is CPT ${cptCode.cpt_code} used for?`,
      answer: `CPT ${cptCode.cpt_code} is used for ${cptCode.definition.toLowerCase()}. This code is primarily utilized in ${cptCode.usage_context.toLowerCase()}.`
    },
    {
      question: "What documentation is required for this CPT code?",
      answer: `${cptCode.documentation_requirements} Proper documentation is essential for compliance and reimbursement.`
    },
    {
      question: "How much time should I spend on this service?",
      answer: `The average time spent for CPT ${cptCode.cpt_code} is ${cptCode.average_time_spent}. This represents the typical face-to-face time with the patient and should be documented when time is a factor in code selection.`
    },
    {
      question: "What are the reimbursement considerations?",
      answer: `${cptCode.billing_reimbursement_notes} Always verify with individual payers as reimbursement rates may vary.`
    },
    {
      question: "Are there related codes I should be aware of?",
      answer: `Related codes include: ${cptCode.related_codes}. These codes represent similar or complementary services that may be appropriate depending on the clinical situation and complexity level.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{cptCode.seoTitle}</title>
        <meta name="description" content={cptCode.seoDescription} />
        <meta 
          name="keywords" 
          content={cptCode.keywords} 
        />
        <link rel="canonical" href={`https://s10.ai/cpt-codes/${cptCode.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCode",
            "name": cptCode.title,
            "code": cptCode.cpt_code,
            "description": cptCode.definition,
            "codeSystem": "CPT",
            "category": cptCode.category,
            "specialty": cptCode.medical_specialty
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Back Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/cpt-codes" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to CPT Codes
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 border border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10 bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center shadow-lg mx-auto sm:mx-0">
              <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#387E89] font-mono mb-2 sm:mb-3">
                {cptCode.cpt_code}
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight px-2 sm:px-0">
                {cptCode.title.replace(`CPT ${cptCode.cpt_code} — `, '')}
              </h1>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {cptCode.seo_intro}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
            <Badge className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 text-sm px-3 py-1">
              {cptCode.category}
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {cptCode.complexity_level}
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {cptCode.average_time_spent}
            </Badge>
          </div>
        </div>

        {/* Basic Information Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Definition */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#143151]">
                <BookOpen className="h-5 w-5 text-[#387E89]" />
                Definition
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{cptCode.definition}</p>
            </CardContent>
          </Card>

          {/* Time & Complexity */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#143151]">
                <Clock className="h-5 w-5 text-[#387E89]" />
                Time & Complexity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Average Time:</span>
                <div className="text-gray-600 text-sm sm:text-base">{cptCode.average_time_spent}</div>
              </div>
              <div>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Complexity Level:</span>
                <div className="text-gray-600 text-sm sm:text-base">{cptCode.complexity_level}</div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#143151]">
                <DollarSign className="h-5 w-5 text-[#387E89]" />
                Billing Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">{cptCode.billing_reimbursement_notes}</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 mb-8">
          {/* Clinical Example */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#143151]">
                <Users className="h-5 w-5 text-[#387E89]" />
                Clinical Example (SOAP)
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Real-world example of when this CPT code would be appropriate
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative">
                <div className="bg-white border rounded-lg p-4 sm:p-6 text-gray-800 leading-relaxed text-xs sm:text-sm min-h-[400px] max-h-[600px] overflow-y-auto whitespace-pre-wrap">
                  {cptCode.clinical_example_soap}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(cptCode.clinical_example_soap)}
                  className="absolute top-2 right-2 bg-white hover:bg-gray-50 border-gray-300 hover:border-[#387E89] text-gray-700 hover:text-[#387E89] shadow-sm transition-colors duration-200 focus:bg-white active:bg-gray-100"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Documentation Requirements */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#143151]">
                <ClipboardList className="h-5 w-5 text-[#387E89]" />
                Documentation Requirements
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Essential elements that must be documented for proper billing
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 leading-relaxed text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>{cptCode.documentation_requirements}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 mb-8">
          {/* Common Conditions */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-bold text-[#143151]">Common ICD-10 Conditions</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm mb-4">{cptCode.common_conditions_icd10}</p>
              <Link 
                to="/icd-10-codes" 
                className="inline-flex items-center text-[#387E89] hover:text-[#143151] font-medium text-sm transition-colors"
              >
                Browse ICD-10 Codes
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Usage Context & Related Codes */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-bold text-[#143151]">Usage Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div>
                <p className="text-gray-700 leading-relaxed text-sm">{cptCode.usage_context}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2 text-sm">Related Codes:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cptCode.related_codes}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specialty Information */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/60">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#143151]">Medical Specialties</CardTitle>
            <CardDescription>
              Primary specialties that commonly use this CPT code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {cptCode.medical_specialty.split(',').map((specialty, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-blue-100/50 text-blue-800 border-blue-300"
                >
                  {specialty.trim()}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection 
            title="Frequently Asked Questions"
            subtitle={`Common questions about CPT ${cptCode.cpt_code}`}
            faqs={faqs}
          />
        </div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default CPTCodeDetail;