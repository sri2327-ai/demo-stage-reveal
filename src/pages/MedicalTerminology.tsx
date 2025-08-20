import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Book, Search, Stethoscope, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/FAQSection";
import { CallToAction } from "@/components/CallToAction";

const MedicalTerminology = () => {
  const terminologyTypes = [
    {
      title: "Medical Prefixes",
      description: "Word parts that appear at the beginning of medical terms to modify their meaning",
      path: "/medical-prefixes",
      examples: ["hyper- (above)", "anti- (against)", "pre- (before)"],
      count: "40+",
      color: "from-blue-500 to-cyan-500",
      icon: "📝"
    },
    {
      title: "Medical Suffixes", 
      description: "Word parts that appear at the end of medical terms to indicate conditions or procedures",
      path: "/medical-suffixes",
      examples: ["-itis (inflammation)", "-ectomy (removal)", "-ology (study of)"],
      count: "50+",
      color: "from-green-500 to-emerald-500",
      icon: "🔬"
    },
    {
      title: "Medical Root Words",
      description: "Foundation words that provide the core meaning to medical terminology",
      path: "/medical-roots", 
      examples: ["cardi/o (heart)", "neur/o (nerve)", "dermat/o (skin)"],
      count: "60+",
      color: "from-purple-500 to-violet-500",
      icon: "🫀"
    }
  ];

  const faqs = [
    {
      question: "What is medical terminology and why is it important?",
      answer: "Medical terminology is the standardized language used in healthcare to describe anatomy, conditions, procedures, and treatments. It's crucial for accurate communication between healthcare professionals, proper documentation, and patient safety."
    },
    {
      question: "How do prefixes, suffixes, and root words work together?",
      answer: "Medical terms are built by combining these elements. For example, 'cardiology' combines the root 'cardi/o' (heart) with the suffix '-ology' (study of) to mean 'study of the heart.' Understanding each component helps decode complex medical terms."
    },
    {
      question: "Do I need to memorize all medical terminology?",
      answer: "While memorization helps, understanding the patterns and common word parts is more effective. Learning frequently used prefixes, suffixes, and roots allows you to understand new terms by breaking them down into familiar components."
    },
    {
      question: "How can S10.AI help with medical terminology?",
      answer: "S10.AI's intelligent documentation system recognizes and suggests appropriate medical terminology, helps with accurate coding, and ensures consistent use of medical language in clinical documentation."
    },
    {
      question: "Are these terms standardized globally?",
      answer: "Most medical terminology derives from Latin and Greek roots and is widely standardized internationally. However, some variations may exist between countries or healthcare systems."
    },
    {
      question: "How often should I review medical terminology?",
      answer: "Regular review is beneficial, especially for healthcare students and professionals. Daily exposure through clinical practice, combined with periodic study of new terms, helps maintain and expand your medical vocabulary."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Medical Terminology Guide - Prefixes, Suffixes & Root Words | S10.AI</title>
        <meta 
          name="description" 
          content="Master medical terminology with our comprehensive guide to prefixes, suffixes, and root words. Essential resource for healthcare professionals and medical students with 115+ terms, examples, and clinical applications." 
        />
        <meta 
          name="keywords" 
          content="medical terminology, medical prefixes, medical suffixes, medical root words, healthcare terminology, medical language, clinical documentation, medical education" 
        />
        <link rel="canonical" href="https://s10.ai/medical-terminology" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalContent",
            "name": "Medical Terminology Guide",
            "description": "Comprehensive guide to medical terminology including prefixes, suffixes, and root words for healthcare professionals.",
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
              "name": "S10.AI",
              "url": "https://s10.ai"
            },
            "hasPart": [
              {
                "@type": "Course",
                "name": "Medical Prefixes",
                "url": "https://s10.ai/medical-prefixes"
              },
              {
                "@type": "Course", 
                "name": "Medical Suffixes",
                "url": "https://s10.ai/medical-suffixes"
              },
              {
                "@type": "Course",
                "name": "Medical Root Words", 
                "url": "https://s10.ai/medical-roots"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl flex items-center justify-center mx-auto sm:mx-0">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">
                Medical Terminology Guide
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master medical terminology with our comprehensive guide to prefixes, suffixes, and root words. 
              Essential resource for healthcare professionals, medical students, and clinical documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-gray-500">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-[#387E89]" />
                <span>200+ Medical Terms</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span>Etymology & Examples</span>
              <span className="hidden sm:block">•</span>
              <span>Clinical Context</span>
              <span className="hidden sm:block">•</span>
              <span>Searchable Database</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#143151]/5 to-[#387E89]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-4">
            Quick Search All Medical Terms
          </h2>
          <p className="text-gray-600 mb-6">
            Search across all prefixes, suffixes, and root words instantly
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medical terms (e.g., cardio, -itis, hyper-...)"
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200"
              onFocus={(e) => {
                // This is a demo - would implement actual search functionality
                e.target.placeholder = "Feature coming soon - browse sections below!";
              }}
            />
          </div>
        </div>
      </section>

      {/* Terminology Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-4">
              Explore Medical Terminology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a category to start learning. Each section includes detailed explanations, 
              examples, and clinical applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {terminologyTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/60 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-[#143151] group-hover:text-[#387E89] transition-colors mb-2">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <Badge className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white mb-4">
                      {type.count} Terms
                    </Badge>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Examples:</p>
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-md">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={type.path}>
                    <Button className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white group">
                      Explore {type.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151] mb-4">
              Why Learn Medical Terminology?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Improved Communication",
                description: "Communicate more effectively with healthcare teams using precise medical language",
                icon: "💬"
              },
              {
                title: "Better Documentation", 
                description: "Create accurate, professional medical records and clinical notes",
                icon: "📋"
              },
              {
                title: "Enhanced Learning",
                description: "Understand medical concepts faster by recognizing word patterns",
                icon: "🧠"
              },
              {
                title: "Career Advancement",
                description: "Build credibility and expertise in healthcare professional settings",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border border-gray-200/60 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-[#143151] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about medical terminology"
        faqs={faqs}
      />

      {/* SEO Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#143151] mb-6 text-center">
                Master Medical Terminology for Better Healthcare Communication
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Medical terminology forms the foundation of healthcare communication, enabling precise 
                  and standardized language across all medical disciplines. Our comprehensive guide breaks 
                  down complex medical terms into their component parts: prefixes, suffixes, and root words, 
                  making it easier to understand and remember medical vocabulary.
                </p>
                <p>
                  Whether you're a medical student beginning your healthcare journey, a practicing 
                  healthcare professional looking to enhance your clinical documentation skills, or 
                  someone seeking to better understand medical information, mastering these fundamental 
                  building blocks will significantly improve your medical literacy and professional confidence.
                </p>
                <p>
                  Each section of our guide includes etymology, clinical context, real-world examples, 
                  and practical applications to help you not just memorize terms, but truly understand 
                  their meaning and usage in healthcare settings. Start with any section and build 
                  your medical vocabulary systematically.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default MedicalTerminology;