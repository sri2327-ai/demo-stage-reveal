
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const benefitCards = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Average 23% increase in patient volume",
    metric: "23%",
    color: "text-emerald-600"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "2.5 hours saved per physician daily",
    metric: "2.5hrs",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Patient Satisfaction",
    description: "Higher engagement and follow-through",
    metric: "94%",
    color: "text-purple-600"
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "HIPAA & SOC2 certified infrastructure",
    metric: "100%",
    color: "text-orange-600"
  }
];

const stressMetrics = [
  { label: "Documentation Burden", before: 85, after: 25 },
  { label: "Administrative Tasks", before: 78, after: 30 },
  { label: "Patient Wait Times", before: 82, after: 35 },
  { label: "Revenue Cycle Delays", before: 75, after: 20 }
];

export function WhatYouGetSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            What You Actually Get
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Real results from healthcare providers who transformed their practice with our AI solutions
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benefitCards.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-2">
                <benefit.icon className={`w-4 h-4 ${benefit.color} mr-2`} />
                <span className={`text-lg font-bold ${benefit.color}`}>
                  {benefit.metric}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stress Level Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 mb-8"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            Practice Stress Reduction
          </h3>
          <div className="space-y-4">
            {stressMetrics.map((metric, index) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">
                    {metric.label}
                  </span>
                  <div className="flex items-center space-x-4 text-xs">
                    <span className="text-red-600">Before: {metric.before}%</span>
                    <span className="text-green-600">After: {metric.after}%</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Progress value={metric.before} className="h-2 bg-red-100" />
                  </div>
                  <div className="flex-1">
                    <Progress value={metric.after} className="h-2 bg-green-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-6 mb-8"
        >
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-slate-700">HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-slate-700">SOC2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium text-slate-700">Enterprise Ready</span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6"
            >
              Calculate Your ROI
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6"
            >
              Schedule Custom Setup
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Ready in 48 hours • No long-term contracts • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
