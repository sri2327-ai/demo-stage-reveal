
import React from 'react';
import { Hero } from '@/components/Hero';
import { DemoSection } from '@/components/DemoSection';
import { ROISection } from '@/components/ROISection';
import { CallToAction } from '@/components/CallToAction';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';
import { demoStages } from '@/data/demoStages';

export default function Presentation() {
  return (
    <div className="min-h-screen bg-background">
      <Hero currentSection="presentation" />
      <DemoSection 
        isInViewport={true}
        hasScrolledToDemo={true}
        stages={demoStages}
        currentSection="demo"
      />
      <BeforeAfterSection />
      <WhatYouGetSection />
      <ROISection />
      <CallToAction />
    </div>
  );
}
