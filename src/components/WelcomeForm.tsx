import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Clock, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Mail, Phone } from 'lucide-react';
import { specialties } from '@/data/specialties';
import '../pages/scribeai.css';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name required." }),
  lastName: z.string().min(2, { message: "Last name required." }),
  email: z.string().email({ message: "Valid email required." }),
  phone: z.string().min(7, { message: "Valid phone required." }),
  organization: z.string().min(2, { message: "Practice name required." }),
  specialty: z.string().min(1, { message: "Please select a specialty." }),
  interest: z.string().min(1, { message: "Please select an interest." }),
  datetime: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

const SERIF = { fontFamily: "'Instrument Serif', ui-serif, Georgia, serif", letterSpacing: '-0.01em' } as const;

const interests = [
  'AI Medical Scribe (CRUSH)',
  'AI Agent (BRAVO)',
  'EHR Integration',
  'Reducing burnout',
  'Specialty templates',
  'Pricing & plans',
];

function nextDefaultSlot() {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  d.setHours(13, 0, 0, 0);
  return d;
}

function formatSlot(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

export const WelcomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slot, setSlot] = useState<Date>(nextDefaultSlot());
  const [editingSlot, setEditingSlot] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const slotInputValue = useMemo(() => {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${slot.getFullYear()}-${pad(slot.getMonth() + 1)}-${pad(slot.getDate())}T${pad(slot.getHours())}:${pad(slot.getMinutes())}`;
  }, [slot]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '', lastName: '', email: '', phone: '',
      organization: '', specialty: '', interest: '',
      datetime: slot.toISOString(),
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      sessionStorage.setItem('userInfo', JSON.stringify({ ...data, datetime: slot.toISOString() }));
      setIsSubmitting(false);
      toast({ title: "Demo scheduled", description: `Confirmed for ${formatSlot(slot)}.` });
      navigate('/demo');
    }, 1200);
  };

  const bullets = [
    { icon: Clock, title: '15-minute live demo', body: 'No slides — a real clinician walks you through the product.' },
    { icon: Sparkles, title: 'Built for your specialty', body: 'Tailored to your EHR, specialty and team size.' },
    { icon: CheckCircle2, title: 'No setup fees, no contracts', body: 'Live in under 7 days with a free 14-day trial.' },
    { icon: ShieldCheck, title: 'HIPAA, SOC 2, GDPR', body: 'Compliance-first from day one.' },
  ];

  return (
    <div className="scribeai-layout min-h-screen bg-[#FAF8F2] px-4 sm:px-8 py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#A8CDD2]/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#FBE4E4]/40 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#387E89]/30 bg-[#A8CDD2]/20 text-[#1F6A78] text-xs tracking-[0.2em] font-medium mb-6">
            BOOK A DEMO
          </motion.div>

          <motion.h1 style={SERIF} className="text-5xl sm:text-6xl text-[#143151] mb-6 leading-[1.05]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Schedule your free demo.
          </motion.h1>

          <p className="text-[#274868] text-lg leading-relaxed mb-5">
            Join <span className="font-semibold text-[#143151]">1,000+ providers</span> saving hours every week with S10.AI. Book a 15-minute demo to see how our AI streamlines your workflow and integrates with your preferred EHR.
          </p>

          <p className="text-[#274868] mb-8"><span className="font-semibold text-[#143151]">Includes:</span> live walkthrough + Q&amp;A.</p>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {bullets.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#A8CDD2]/30 border border-[#387E89]/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#387E89]" />
                </div>
                <div>
                  <div className="text-[#143151] font-semibold text-sm mb-1">{title}</div>
                  <div className="text-[#274868] text-sm leading-snug">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#387E89]/20 bg-white/60 backdrop-blur-sm p-5">
            <div className="text-[#143151] font-semibold mb-3">Questions?</div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href="mailto:support@s10.ai" className="flex items-center gap-2 text-[#1F6A78] hover:text-[#143151] underline underline-offset-4">
                <Mail className="w-4 h-4" /> support@s10.ai
              </a>
              <a href="tel:+16314886383" className="flex items-center gap-2 text-[#1F6A78] hover:text-[#143151] underline underline-offset-4">
                <Phone className="w-4 h-4" /> +1 631-488-6383
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-[#387E89]/15 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#387E89]/30 bg-[#A8CDD2]/15 text-[#1F6A78] text-[10px] tracking-[0.25em] font-medium">
              REQUEST A DEMO
            </span>
            <span className="text-[#274868] text-[10px] tracking-[0.25em] font-medium">~ 60 SECONDS</span>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">First name *</FormLabel>
                    <FormControl><Input placeholder="John" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89] h-11" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Last name *</FormLabel>
                    <FormControl><Input placeholder="Doe" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89] h-11" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Work email *</FormLabel>
                    <FormControl><Input placeholder="you@example.com" type="email" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89] h-11" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Phone *</FormLabel>
                    <FormControl><Input placeholder="(123) 456-7890" type="tel" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89] h-11" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="organization" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#143151] text-sm">Practice / organization *</FormLabel>
                  <FormControl><Input placeholder="Your practice name" {...field} className="border-[#387E89]/25 focus-visible:ring-[#387E89] h-11" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="specialty" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">Specialty *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#387E89]/25 focus:ring-[#387E89] h-11">
                          <SelectValue placeholder="Select your specialty" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {specialties.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
                        ))}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="interest" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#143151] text-sm">What interests you most? *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#387E89]/25 focus:ring-[#387E89] h-11">
                          <SelectValue placeholder="What interests you most?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {interests.map((i) => (
                          <SelectItem key={i} value={i}>{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div>
                <div className="text-[#143151] text-sm font-medium mb-2">Select date &amp; time *</div>
                {!editingSlot ? (
                  <div className="flex items-center justify-between gap-3 rounded-xl border-2 border-[#387E89] bg-[#A8CDD2]/10 px-4 py-3">
                    <div className="flex items-center gap-2 text-[#143151] font-medium">
                      <Clock className="w-4 h-4 text-[#387E89]" />
                      {formatSlot(slot)}
                    </div>
                    <button type="button" onClick={() => setEditingSlot(true)} className="text-[#1F6A78] text-sm font-medium hover:text-[#143151] underline underline-offset-4">
                      Change
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Input
                      type="datetime-local"
                      value={slotInputValue}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v) {
                          const d = new Date(v);
                          setSlot(d);
                          form.setValue('datetime', d.toISOString());
                        }
                      }}
                      className="border-[#387E89]/40 focus-visible:ring-[#387E89] h-11"
                    />
                    <Button type="button" variant="outline" onClick={() => setEditingSlot(false)} className="h-11">Done</Button>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-base bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#1F6A78] text-white rounded-2xl mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Scheduling…' : 'Schedule Demo'}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <p className="text-[11px] text-center text-[#274868]/70 pt-2">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};
