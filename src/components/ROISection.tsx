
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';

export const ROISection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * custom, duration: 0.6 }
    }),
    viewport: { once: true, margin: "-100px" }
  };

  const stats = [
    {
      icon: <Clock className="w-10 h-10 text-[#143151]" />,
      title: "2+ Hours Saved Daily",
      description: "Clinicians report saving over 2 hours per day on documentation, allowing more face time with patients",
      value: "120+ min",
      metric: "saved daily"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#143151]" />,
      title: "Revenue Increase",
      description: "Streamlined billing workflows and reduced claim rejections lead to significant revenue improvements",
      value: "40%",
      metric: "more revenue"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#143151]" />,
      title: "Patient Satisfaction",
      description: "Improved communication and follow-up leads to higher patient satisfaction scores",
      value: "95%",
      metric: "satisfaction"
    }
  ];

  return (
    <section id="roi-section" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#143151] mb-4">
            Measurable ROI for Clinicians
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            S10.AI delivers quantifiable returns for healthcare providers without disrupting existing workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              custom={index + 1}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow h-full p-6 flex flex-col">
                <div className="bg-blue-50 p-4 rounded-full w-max mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#143151] mb-2">{stat.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{stat.description}</p>
                <div className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#143151]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#387E89] font-medium">
                    {stat.metric}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Calculate Your Practice's ROI</h3>
              <p className="text-white/80">
                See how much time and money your practice could save with S10.AI
              </p>
            </div>
            <motion.button
              className="bg-white text-[#143151] py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Use ROI Calculator
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
