
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { Users, Sparkles, ArrowRight } from 'lucide-react';
import '../pages/scribeai.css';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

const SERIF = "'Instrument Serif', ui-serif, Georgia, serif";

export const WelcomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: '', lastName: '', email: '', phone: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      setIsSubmitting(false);
      toast({ title: "Welcome!", description: "Enjoy your interactive demo experience." });
      navigate('/demo');
    }, 1200);
  };

  return (
    <div className="scribeai-layout min-h-screen bg-gradient-to-b from-[#A8CDD2]/25 via-[#FAF8F2] to-white px-4 sm:px-8 py-12 sm:py-20 relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#A8CDD2] rounded-full blur-3xl opacity-40 -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FBE4E4] rounded-full blur-3xl opacity-50 -z-0" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        {/* LEFT */}
        <div className="lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#387E89]/40 bg-white/40 backdrop-blur-sm"
          >
            <span className="text-[#274868] text-xs font-medium tracking-[0.2em] uppercase">
              Interactive Demo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-[#143151] leading-[1.05] font-light"
            style={{ fontFamily: SERIF, fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Welcome to the S10.AI Interactive Demo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-[#274868] text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Complete this quick form to access our advanced AI Medical Scribe, CRUSH, and AI Agent, BRAVO, demonstration—and discover how we can transform your clinical workflow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-[#143151] text-sm"
          >
            <span className="font-semibold">Includes:</span>{' '}
            <span className="text-[#274868]">live walkthrough of CRUSH + BRAVO.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-xl"
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#A8CDD2]/40 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#143151]" />
              </div>
              <div>
                <p className="text-[#143151] font-semibold text-sm">Trusted by 1,000+</p>
                <p className="text-[#274868] text-sm">Healthcare professionals already use S10.AI daily.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#A8CDD2]/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#143151]" />
              </div>
              <div>
                <p className="text-[#143151] font-semibold text-sm">75% less documentation</p>
                <p className="text-[#274868] text-sm">Reclaim hours each week with AI-assisted notes.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — form card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur rounded-2xl shadow-[0_20px_60px_-20px_rgba(20,49,81,0.25)] border border-[#387E89]/15 p-6 sm:p-9"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#387E89]/40">
              <span className="text-[#274868] text-[10px] font-medium tracking-[0.2em] uppercase">
                Get Started
              </span>
            </div>
            <span className="text-[#274868]/70 text-[11px] tracking-[0.2em] uppercase">~ 30 Seconds</span>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#143151] text-sm">First name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="h-11 border-[#387E89]/25 focus-visible:ring-[#387E89]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#143151] text-sm">Last name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} className="h-11 border-[#387E89]/25 focus-visible:ring-[#387E89]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Work email *</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" type="email" {...field} className="h-11 border-[#387E89]/25 focus-visible:ring-[#387E89]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Phone <span className="text-[#274868]/60">(optional)</span></FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" type="tel" {...field} className="h-11 border-[#387E89]/25 focus-visible:ring-[#387E89]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#1F6A78] text-white text-base mt-2"
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    See Demo Video
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>

          <p className="text-xs text-center text-[#274868]/70 mt-6">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
