import * as React from "react";
import { Mic, FileText, List, LayoutGrid, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresenceHeroShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs",
      "bg-background/70 text-foreground/80 border border-foreground/10 backdrop-blur-md shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

export const PresenceHeroShowcase: React.FC<PresenceHeroShowcaseProps> = ({ className, ...props }) => {
  const leftPills = [
    { label: "Context", icon: <List className="w-3.5 h-3.5" />, y: 22 },
    { label: "Transcript", icon: <Mic className="w-3.5 h-3.5" />, y: 42 },
    { label: "Template", icon: <LayoutGrid className="w-3.5 h-3.5" />, y: 62 },
    { label: "Style", icon: <Settings className="w-3.5 h-3.5" />, y: 82 }
  ];

  return (
    <div
      className={cn(
        "relative aspect-square rounded-3xl overflow-hidden ring-1 ring-primary/15 shadow-lg",
        "transition-all hover:-translate-y-0.5 hover:shadow-2xl",
        // Soft Figma-like gradient background using semantic tokens
        "bg-gradient-subtle",
        className
      )}
      {...props}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 120% at 90% 10%, hsl(var(--primary)/0.18) 0%, transparent 55%), radial-gradient(120% 120% at 0% 100%, hsl(var(--secondary)/0.18) 0%, transparent 60%)",
        }}
      />

      {/* Curved connectors (SVG for crisp lines) */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 z-[5] text-primary/40">
        {leftPills.map((p, i) => (
          <path
            key={i}
            d={`M 24 ${p.y} C 40 ${p.y}, 55 50, 72 50`}
            fill="none"
            className="stroke-current"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20">
        {/* Left stack */}
        {leftPills.map((p, i) => (
          <div key={i} className="absolute left-3" style={{ top: `${p.y}%` }}>
            <Pill className="bg-primary/10 text-primary border-primary/20">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary border border-primary/20">
                {p.icon}
              </span>
              <span className="text-[11px] font-medium">{p.label}</span>
            </Pill>
          </div>
        ))}

        {/* Main Note card */}
        <article
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2",
            "w-[52%] h-[70%] rounded-2xl",
            "bg-background/80 border border-primary/20 ring-1 ring-primary/10 backdrop-blur-xl shadow-elegant"
          )}
          aria-label="Generated clinical note preview"
        >
          {/* Header */}
          <header className="flex items-center gap-2 p-4 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary text-primary-foreground shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Note</h3>
          </header>

          {/* Note lines */}
          <div className="p-4 grid gap-2">
            <div className="h-2 rounded bg-primary/15 w-4/5" />
            <div className="h-2 rounded bg-primary/15 w-3/5" />
            <div className="h-2 rounded bg-primary/15 w-5/6" />
            <div className="h-2 rounded bg-primary/15 w-2/3" />
            <div className="h-2 rounded bg-primary/15 w-4/5" />
            <div className="h-2 rounded bg-primary/15 w-3/4" />
            <div className="h-2 rounded bg-primary/15 w-2/3" />
          </div>

          {/* Bottom status bar */}
          <footer className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <Mic className="w-3.5 h-3.5 text-primary" />
                Ambient scribing active
              </div>
              <div className="text-[10px] text-foreground/50">EHR‑ready</div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default PresenceHeroShowcase;
