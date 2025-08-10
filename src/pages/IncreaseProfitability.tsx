import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { TrendingUp, DollarSign, Clock, Users, Zap, Building2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const IncreaseProfitability = () => {
  const profitDrivers = [
    {
      title: "Recover hours for care",
      description: "The AI medical scribe shortens documentation cycles, freeing time for additional visits or higher-value care.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Reduce no-shows and leakage",
      description: "AI agents automate reminders and rescheduling, stabilizing schedules and improving throughput.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Capture accurate reimbursement",
      description: "AI-assisted ICD-10, CPT, E/M, and HCC suggestions improve coding completeness and reduce denials risk.",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Lower staffing pressure",
      description: "Digital scribing and front-office automation absorb repetitive tasks without expanding headcount.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Faster onboarding",
      description: "Operate standalone to realize time savings quickly, then integrate with the EHR and PMS when ready.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const profitLevers = [
    {
      title: "Throughput",
      description: "Faster chart closure and fewer reschedules yield more visit capacity per day.",
      metric: "More visits/day"
    },
    {
      title: "Denials/Resubmissions",
      description: "Better documentation and codes reduce revenue leakage.",
      metric: "Less revenue loss"
    },
    {
      title: "Lifetime Value",
      description: "Stronger engagement and continuity increase follow-ups and adherence.",
      metric: "Higher patient retention"
    }
  ];

  const practicalScenarios = [
    {
      title: "Specialty Clinics",
      description: "HCC tracking and longitudinal intelligence support value-based contracts and documentation completeness.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Multi-location Groups",
      description: "Standardized templates raise consistency and oversight while AI agents unify front-office execution.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Telehealth",
      description: "Same automation stack supports virtual care economics with accurate documentation and reliable follow-ups.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "Can ROI be quantified?",
      answer: "Inputs typically include time saved per visit, reduced no-shows, and coding completeness; teams can model per practice."
    },
    {
      question: "Will setup disrupt operations?",
      answer: "Standalone mode minimizes IT lift; integrations are available per plan to align with timelines."
    },
    {
      question: "Is training heavy?",
      answer: "Voice-first, template-based workflows shorten learning curves; agent scripts are configurable."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Increase practice profitability with an AI medical scribe + AI phone/chat agents</title>
        <meta 
          name="description" 
          content="Boost revenue and lower costs by automating documentation, coding, and patient engagement. Reduce no-shows, speed workflows, and capture accurate reimbursement."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-50/70" />
          <div className="absolute inset-0 bg-checker-grid" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-[#143151] text-sm font-semibold">
                <TrendingUp className="w-4 h-4 mr-2" />
                Practice Profitability
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Profitability follows intelligent automation
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Convert more visits, document faster, and capture compliant reimbursement with AI scribe + AI agents.
              </p>
              
              <Button size="lg" className="rounded-full px-8 bg-[#143151] bg-gradient-to-r from-[#143151] to-[#387E89] text-white shadow-lg ring-1 ring-white/10 hover:shadow-2xl hover:translate-y-0.5 transition-all duration-300 group">
                Calculate ROI
                <TrendingUp className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Profit Drivers */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Profit drivers and levers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multiple revenue streams enhanced through intelligent automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profitDrivers.map((driver, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {driver.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{driver.title}</h3>
                      <p className="text-muted-foreground">{driver.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Profit Levers Detail */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  Key profit levers
                </h2>
                
                <div className="space-y-8">
                  {profitLevers.map((lever, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{lever.title}</h3>
                          <Badge variant="secondary" className="text-xs">{lever.metric}</Badge>
                        </div>
                        <p className="text-muted-foreground">{lever.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practical Scenarios */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Practical scenarios</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world applications across different practice types
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {practicalScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-0 h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {scenario.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{scenario.title}</h3>
                      <p className="text-muted-foreground">{scenario.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection 
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about increasing practice profitability with AI"
              faqs={faqs}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#143151] to-[#387E89] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-10" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Calculate ROI—schedule a profitability review and customized deployment plan
              </h2>
              <p className="text-xl text-background/80 mb-8">
                See exactly how AI automation can increase your practice's profitability.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Schedule Profitability Review
                <DollarSign className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IncreaseProfitability;