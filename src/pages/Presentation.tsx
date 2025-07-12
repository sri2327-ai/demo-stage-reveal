
import React from 'react';
import { Hero } from '@/components/Hero';
import { DemoSection } from '@/components/DemoSection';
import { ROISection } from '@/components/ROISection';
import { CallToAction } from '@/components/CallToAction';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';

export default function Presentation() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DemoSection />
      <BeforeAfterSection />
      <WhatYouGetSection />
      <ROISection />
      <CallToAction />
    </div>
  );
}
