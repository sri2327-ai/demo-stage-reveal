
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, Users, TrendingDown, CheckCircle, Zap, UserCheck, TrendingUp } from 'lucide-react';

const beforeItems = [
  { icon: Clock, text: "4+ hours daily on documentation", color: "text-red-500" },
  { icon: FileText, text: "Manual chart reviews and coding", color: "text-red-500" },
  { icon: Users, text: "Patients waiting weeks for follow-up", color: "text-red-500" },
  { icon: TrendingDown, text: "Revenue loss from missed opportunities", color: "text-red-500" }
];

const afterItems = [
  { icon: Zap, text: "AI handles 80% of documentation automatically", color: "text-green-500" },
  { icon: CheckCircle, text: "Instant ICD-10 coding with 99.2% accuracy", color: "text-green-500" },
  { icon: UserCheck, text: "Same-day personalized patient engagement", color: "text-green-500" },
  { icon: TrendingUp, text: "23% average increase in patient volume", color: "text-green-500" }
];

export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Before vs After S10.ai
          </h2>
          <p className="text-xl text-blue-100">
            See the transformation that's reshaping healthcare practices nationwide
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <TrendingDown className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Traditional Practice</h3>
              <p className="text-red-200">Drowning in administrative burden</p>
            </div>
            
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20"
                >
                  <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0`} />
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">S10.ai-Powered Practice</h3>
              <p className="text-green-200">Focus on what matters: patient care</p>
            </div>
            
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                >
                  <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0`} />
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/30">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Ready to transform your practice?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
