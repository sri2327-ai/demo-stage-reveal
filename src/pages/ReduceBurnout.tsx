import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { Heart, Shield, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroBadge } from "@/components/ui/HeroBadge";
const ReduceBurnout = () => {
  const burnoutSolutions = [{
    title: "Offload clerical load",
    description: "The scribe automates note-taking, structuring, and coding, cutting clicks and cognitive switching.",
    icon: <Shield className="w-6 h-6" />
  }, {
    title: "Fewer after-hours",
    description: "Rapid draft creation and post-visit letters shrink \"pajama time\" charting windows.",
    icon: <Clock className="w-6 h-6" />
  }, {
    title: "Team relief",
    description: "Phone/chat agents manage calls, reminders, refills routing, and common questions 24/7, reducing overload on staff.",
    icon: <Users className="w-6 h-6" />
  }, {
    title: "Human connection preserved",
    description: "Presence in the room improves trust and therapeutic alliance while AI handles the busywork.",
    icon: <Heart className="w-6 h-6" />
  }, {
    title: "Flexible deployment",
    description: "Run standalone to avoid long IT queues; integrate when ready.",
    icon: <CheckCircle className="w-6 h-6" />
  }];
  const workflowChanges = [{
    phase: "During visit",
    description: "Ambient capture and live structuring into specialty templates; hands-free controls.",
    icon: <MessageSquare className="w-6 h-6" />
  }, {
    phase: "After visit",
    description: "Draft letters, instructions, coding suggestions, and clinical summaries ready for quick sign-off.",
    icon: <Shield className="w-6 h-6" />
  }, {
    phase: "Between visits",
    description: "Agents automate scheduling, verification, reminders, and education to stabilize demand and reduce rescheduling churn.",
    icon: <Clock className="w-6 h-6" />
  }];
  const faqs = [{
    question: "Does the clinician retain control?",
    answer: "Yes—clinicians review/edit and approve notes; agents follow configured protocols and escalation rules."
  }, {
    question: "What about privacy and compliance?",
    answer: "S10.AI emphasizes HIPAA-grade protections and secure workflows."
  }, {
    question: "Can it adapt to specialty nuance?",
    answer: "Specialty-specific templates and customization are supported."
  }];
  return <>
      <Helmet>
        <title>Reduce clinician burnout with an AI medical scribe, AI phone agent, and AI chat agent</title>
        <meta name="description" content="Offload documentation and repetitive admin. The AI medical scribe handles notes and codes; AI phone/chat agents automate scheduling, intake, and follow-ups to restore balance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-50/70" />
          <div className="absolute inset-0 bg-checker-grid" />
          <div className="container relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto text-center">
              <HeroBadge>
                <Heart className="w-4 h-4 mr-2" />
                Clinician Wellbeing
              </HeroBadge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
                Fight burnout by removing the admin burden
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Reclaim time, focus, and energy with ambient documentation plus automated patient communications.
              </p>
              
              <Button size="lg" className="rounded-full px-8 premium-button ring-1 ring-white/10 hover:translate-y-0.5 transition-all duration-300 group">
                Start Reducing Burnout
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Burnout Solutions */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/20">
          <div className="container">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive burnout solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Address the root causes of clinician burnout with intelligent automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {burnoutSolutions.map((solution, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                  <Card className="bg-card border h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        {solution.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-primary">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* What Changes Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What changes with AI scribe + AI agents</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform every stage of patient interaction
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflowChanges.map((change, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                  <Card className="glassmorphism border-0 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {change.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-primary">{change.phase}</h3>
                      <p className="text-muted-foreground">{change.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className="py-16 lg:py-24">
          <div className="container max-w-none px-0">
            <div className="grid gap-12 lg:gap-16 items-center max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Evidence from the field
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Improved focus on patient care</h3>
                      <p className="text-muted-foreground">Practices adopting ambient AI scribes report enhanced clinician-patient interactions and reduced documentation burden.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Supporting clinician well-being</h3>
                      <p className="text-muted-foreground">Real-world implementations show measurable improvements in work-life balance and job satisfaction.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <FAQSection title="Frequently Asked Questions" subtitle="Everything you need to know about reducing clinician burnout with AI" faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-10" />
          <div className="container relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Start reducing burnout—get a tailored automation plan and pilot timeline
              </h2>
              <p className="text-xl text-background/80 mb-8">
                Take the first step toward better work-life balance with intelligent automation.
              </p>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group">
                Get Automation Plan
                <Shield className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default ReduceBurnout;