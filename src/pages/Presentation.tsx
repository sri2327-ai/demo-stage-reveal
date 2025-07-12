import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Clock, 
  Users, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Calendar,
  DollarSign,
  Target,
  Award,
  Play
} from 'lucide-react';
import { clinicalAnimations } from '@/lib/animation-utils';

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      let animationId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, end, duration, hasStarted]);

  return <span ref={ref}>{count}</span>;
};

const AnimatedStat = ({ icon: Icon, value, label, suffix = "" }: { 
  icon: any; 
  value: number; 
  label: string; 
  suffix?: string; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center p-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
        className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-[#387E89] to-[#143151] rounded-full flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-3xl sm:text-4xl font-bold text-[#143151] mb-2">
        <CountUp end={value} />{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, quote, delay = 0 }: {
  name: string;
  role: string;
  quote: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <div>
        <div className="font-semibold text-[#143151]">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </motion.div>
  );
};

export default function Presentation() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#143151] via-[#387E89] to-[#143151]">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The AI That Charts & Staffs —{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              So You Don't Have To
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white"
          >
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold">75% faster charting</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-lg font-semibold">Seamless EHR & 7,000+ app integrations</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">HIPAA, GDPR, ISO 27001 compliant</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-[#143151] hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a 15-Minute Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Burnout is Real */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
                The Burnout is Real
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                While you're saving lives, administrative burden is draining yours.
              </p>

              <div className="space-y-6">
                <AnimatedStat
                  icon={Clock}
                  value={4}
                  suffix="+ hrs/day"
                  label="spent on EHR documentation"
                />
                <AnimatedStat
                  icon={Users}
                  value={50}
                  suffix="%"
                  label="of doctors experiencing burnout"
                />
                <AnimatedStat
                  icon={TrendingUp}
                  value={30}
                  suffix="%"
                  label="patient no-show rate"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Run Your Burnout Score
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                    <Clock className="w-16 h-16 text-red-600" />
                  </div>
                  <p className="text-gray-600 italic text-lg">
                    "It's 10 PM and I'm still finishing charts from this morning..."
                  </p>
                  <div className="mt-4 text-sm text-gray-500">- Dr. Sarah M., Family Medicine</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Your AI Teammates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              Meet Your AI Teammates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CRUSH and BRAVO work 24/7 so you can focus on what matters most - your patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-[#387E89] bg-gradient-to-br from-blue-50 to-teal-50">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#387E89] to-[#143151] rounded-full flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143151] mb-4">CRUSH</h3>
                  <p className="text-gray-600 mb-4">Your AI Medical Scribe</p>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Real-time documentation</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> SOAP note generation</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> ICD-10 coding assistance</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-[#143151] bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143151] mb-4">BRAVO</h3>
                  <p className="text-gray-600 mb-4">Your AI Staffing Agent</p>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Patient scheduling</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Appointment confirmations</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Follow-up coordination</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#387E89] to-[#143151] hover:from-[#143151] hover:to-[#387E89] text-white"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Calculate Your ROI
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
          >
            Before vs After S10.AI
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">BEFORE</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>4+ hours daily on documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Constant interruptions for scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Weekend chart catch-up</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>High staff turnover</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Burnout and exhaustion</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">AFTER</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>75% faster documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Automated scheduling & follow-ups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Work-life balance restored</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Happy, efficient staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Focus on patient care</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-white text-[#143151] hover:bg-gray-100"
            >
              <Play className="w-5 h-5 mr-2" />
              See It In Action
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proof & Templates */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              Proven Templates & Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of clinicians using our battle-tested documentation templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Family Medicine", count: "1,250+ templates", color: "from-blue-500 to-blue-600" },
              { title: "Emergency Medicine", count: "890+ templates", color: "from-red-500 to-red-600" },
              { title: "Internal Medicine", count: "2,100+ templates", color: "from-green-500 to-green-600" }
            ].map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${specialty.color} rounded-lg flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#143151] text-center mb-2">{specialty.title}</h3>
                <p className="text-gray-600 text-center">{specialty.count}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Templates
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ROI & Impact */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              Real ROI, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable difference S10.AI makes for practices like yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedStat
              icon={Zap}
              value={75}
              suffix="%"
              label="faster charting"
            />
            <AnimatedStat
              icon={DollarSign}
              value={150}
              suffix="K"
              label="average annual savings"
            />
            <AnimatedStat
              icon={Clock}
              value={15}
              suffix=" hrs"
              label="weekly time savings"
            />
            <AnimatedStat
              icon={TrendingUp}
              value={40}
              suffix="%"
              label="productivity increase"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#387E89] to-[#143151] hover:from-[#143151] hover:to-[#387E89] text-white"
            >
              <Target className="w-5 h-5 mr-2" />
              Try ROI Calculator
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143151] mb-6">
              What Clinicians Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real doctors using S10.AI every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Dr. Willem Chen"
              role="Emergency Medicine Physician"
              quote="S10.AI cut my documentation time by 70%. I actually get to go home on time now."
              delay={0.2}
            />
            <TestimonialCard
              name="Dr. Smriti Patel"
              role="Family Medicine"
              quote="The AI templates are incredibly accurate. It's like having a brilliant scribe who never gets tired."
              delay={0.4}
            />
            <TestimonialCard
              name="Dr. Lisbeth Rodriguez"
              role="Internal Medicine"
              quote="My staff loves BRAVO. Patient scheduling runs itself now, and our no-show rate dropped 40%."
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-[#387E89] text-[#387E89] hover:bg-[#387E89] hover:text-white"
            >
              <Star className="w-5 h-5 mr-2" />
              See More Success Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#143151] via-[#387E89] to-[#143151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Next Step Is Easy
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the thousands of clinicians who've already transformed their practice with S10.AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-white">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free demo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Custom plan</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No setup fees</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-[#143151] hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-semibold shadow-xl"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Your Demo Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}