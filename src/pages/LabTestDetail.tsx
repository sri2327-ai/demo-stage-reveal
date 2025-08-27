import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, FlaskConical, Users, ClipboardList, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLabTestBySlug } from "@/data/labTests";
import { FAQSection } from "@/components/FAQSection";
import { CallToAction } from "@/components/CallToAction";

const LabTestDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const test = slug ? getLabTestBySlug(slug) : null;

  if (!test) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lab Test Not Found</h1>
          <p className="text-gray-600 mb-6">The requested lab test could not be found.</p>
          <Link to="/lab-tests">
            <Button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lab Tests
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqs = [
    {
      question: `What does the ${test.test_name} measure?`,
      answer: `The ${test.test_name} measures specific biomarkers that help assess ${test.system.toLowerCase()} function. ${test.clinical_relevance}`
    },
    {
      question: "Are there different normal ranges for men and women?",
      answer: `Yes, normal ranges can differ between genders. For males: ${test.normal_range_male}. For females: ${test.normal_range_female}. These differences are due to physiological variations between men and women.`
    },
    {
      question: "How should I prepare for this test?",
      answer: "Preparation requirements vary by test type. Generally, fasting may be required for certain tests like glucose or lipid panels. Always follow your healthcare provider's specific instructions regarding medications, food, and drink restrictions before the test."
    },
    {
      question: "What do abnormal results mean?",
      answer: "Abnormal results can indicate various conditions depending on whether values are high or low. Your healthcare provider will interpret results in the context of your symptoms, medical history, and other test results to determine the appropriate next steps."
    },
    {
      question: "How often should this test be repeated?",
      answer: "The frequency of testing depends on your individual health status, risk factors, and your healthcare provider's recommendations. Some tests are done annually as part of routine screening, while others may be monitored more frequently if you have specific conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{test.seoTitle}</title>
        <meta name="description" content={test.seoDescription} />
        <meta 
          name="keywords" 
          content={test.keywords} 
        />
        <link rel="canonical" href={`https://s10.ai/lab-tests/${test.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTest",
            "name": test.test_name,
            "description": test.clinical_relevance,
            "medicineSystem": test.system,
            "usedToDiagnose": test.specialty,
            "normalRange": {
              "male": test.normal_range_male,
              "female": test.normal_range_female
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Back Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/lab-tests" 
            className="inline-flex items-center text-[#387E89] hover:text-[#143151] font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lab Tests
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center">
              <FlaskConical className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
              {test.test_name}
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge className="bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30 text-sm">
              {test.specialty}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {test.system}
            </Badge>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Clinical Relevance */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#143151]">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
                Clinical Relevance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{test.clinical_relevance}</p>
            </CardContent>
          </Card>

          {/* Normal Ranges */}
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#143151]">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
                Normal Reference Ranges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Male Reference Range:</h3>
                <p className="text-gray-700 font-mono text-sm bg-blue-50 p-3 rounded-lg">
                  {test.normal_range_male}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-pink-700 mb-2">Female Reference Range:</h3>
                <p className="text-gray-700 font-mono text-sm bg-pink-50 p-3 rounded-lg">
                  {test.normal_range_female}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Example */}
        <Card className="mt-8 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#143151]">
              <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 text-[#387E89]" />
              Clinical Documentation Example
            </CardTitle>
            <CardDescription>
              Sample documentation showing how this test result might appear in clinical notes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white border rounded p-4 font-mono text-sm text-gray-800 leading-relaxed">
              {test.documentation_example}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-12">
          <FAQSection 
            title="Frequently Asked Questions"
            subtitle={`Common questions about ${test.test_name} testing`}
            faqs={faqs}
          />
        </div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default LabTestDetail;