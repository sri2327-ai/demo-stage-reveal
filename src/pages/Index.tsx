
import React from 'react';
import { DemoStage } from '../components/DemoStage';
import { demoStages } from '../data/demoStages';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="pt-16 pb-10 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience the Future of Clinical Automation
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-700 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From patient engagement to real-time documentation and post-visit support—see how S10.AI transforms care delivery, end-to-end.
          </motion.p>
          
          <motion.div
            className="animate-bounce flex flex-col items-center mt-10 text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-medium mb-2">Scroll to begin the journey</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </div>
      </header>

      <main className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <DemoStage stages={demoStages} />
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to get started?</h2>
            <p className="text-gray-700 mb-6 max-w-lg mx-auto">
              Join thousands of teams already using our platform to improve their workflow.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p>© 2025 Demo Stage Reveal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
