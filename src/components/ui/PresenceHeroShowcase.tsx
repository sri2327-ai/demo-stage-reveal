import * as React from "react";
import { Mic, CheckCircle2, FileText, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresenceHeroShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-3 py-1 text-xs shadow-sm">
    <CheckCircle2 className="w-3.5 h-3.5" /> {children}
  </span>
);

export const PresenceHeroShowcase: React.FC<PresenceHeroShowcaseProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "relative aspect-square rounded-3xl overflow-hidden ring-1 ring-[#387E89]/30 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all bg-gradient-to-br from-[#143151] to-[#387E89]",
        className
      )}
      {...props}
    >
      {/* subtle grid overlay for visual richness */}
      <div className="absolute inset-0 bg-checker-grid opacity-20" aria-hidden="true" />

      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        {/* Top pill */}
        <div className="self-start inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-3 py-1 text-xs shadow">
          <Mic className="w-3.5 h-3.5" /> Ambient AI Scribe
        </div>

        {/* Middle chips */}
        <div className="space-y-3">
          <Chip>Hands‑free, voice‑first</Chip>
          <Chip>Maintain eye contact</Chip>
          <Chip>EHR‑ready notes in minutes</Chip>
        </div>

        {/* Bottom mini-flow */}
        <div className="mt-4">
          <div className="flex items-center gap-3 text-white/90">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 border border-white/20"><Mic className="w-4 h-4" /></div>
            <div className="flex-1 h-px bg-white/30" />
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 border border-white/20"><FileText className="w-4 h-4" /></div>
            <div className="flex-1 h-px bg-white/30" />
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 border border-white/20"><Eye className="w-4 h-4" /></div>
          </div>
          <div className="flex justify-between text-[10px] text-white/80 mt-1">
            <span>Capture</span>
            <span>Structure</span>
            <span>Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceHeroShowcase;
