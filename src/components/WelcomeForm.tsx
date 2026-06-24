
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { Hospital, Users, Sparkles, ArrowRight } from 'lucide-react';
import '../pages/scribeai.css';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const WelcomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Store form data in sessionStorage for potential use later
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      
      setIsSubmitting(false);
      toast({
        title: "Welcome!",
        description: "Enjoy your interactive demo experience.",
      });
      
      // Navigate to main page
      navigate('/demo');
    }, 1500);
  };

  return (
    <div className="scribeai-layout min-h-screen bg-gradient-to-b from-[#A8CDD2]/30 via-[#FAF8F2] to-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/15 backdrop-blur-sm border border-[#387E89]/20 px-3 py-1.5 inline-flex items-center gap-2 rounded-full">
              <Hospital className="w-4 h-4 text-[#143151]" />
              <span className="text-[#143151] text-sm font-medium">Designed for Healthcare Providers</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-5xl font-normal text-[#143151] mb-4"
            style={{ fontFamily: "'Instrument Serif', ui-serif, Georgia, serif", letterSpacing: '-0.01em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to the S10.AI Interactive Demo
          </motion.h1>
          
          <motion.p
            className="text-[#274868] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Complete this quick form to access our advanced AI Medical Scribe, CRUSH, and AI Agent, BRAVO, demonstration—and discover how we can transform your clinical workflow.
          </motion.p>
          
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 rounded-full">
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-[#274868]">Trusted by over 1,000 healthcare professionals</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-2 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-[#274868]">Reduces documentation time by up to 75%</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-[#387E89]/15 p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2
            className="text-2xl font-normal mb-6 text-[#143151]"
            style={{ fontFamily: "'Instrument Serif', ui-serif, Georgia, serif", letterSpacing: '-0.01em' }}
          >
            Get Started
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#274868]">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89]" />
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
                      <FormLabel className="text-[#274868]">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89]" />
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
                    <FormLabel className="text-[#274868]">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" type="email" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89]" />
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
                    <FormLabel className="text-[#274868]">Phone Number (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" type="tel" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#1F6A78] text-white mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "See Demo Video"}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
          
          <p className="text-xs text-center text-[#274868]/70 mt-6">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </motion.div>
      </div>
      
      {/* Animated Gradient Blob Background */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#A8CDD2] rounded-full blur-3xl opacity-50 -z-0"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#FBE4E4] rounded-full blur-3xl opacity-60 -z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#5FC4D0]/40 rounded-full blur-3xl opacity-60 -z-0"></div>
    </div>
  );
};
