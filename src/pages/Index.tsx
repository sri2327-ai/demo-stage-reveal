
import React from 'react';
import { DemoStage } from '../components/DemoStage';
import { demoStages } from '../data/demoStages';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="pt-10 pb-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Interactive Demo Stages</h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Explore our product features with beautifully animated stage transitions.
          </p>
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
