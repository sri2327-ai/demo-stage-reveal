import * as React from "react";
import { Clock, FileText, Code, MessageSquare, Zap, Plug, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EfficiencyHeroShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Pill: React.FC<{ icon: React.ReactNode; label: string; className?: string }> = ({ icon, label, className }) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs",
      "bg-white/70 text-foreground/80 border border-white/30 backdrop-blur-md shadow-sm",
      className
    )}
  >
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary border border-primary/20">
      {icon}
    </span>
    <span className="text-[11px] font-medium">{label}</span>
  </div>
);

export const EfficiencyHeroShowcase: React.FC<EfficiencyHeroShowcaseProps> = ({ className, ...props }) => {
  const items = [
    { label: "Save hours daily", icon: <Clock className="w-3.5 h-3.5" />, y: 20 },
    { label: "Ready‑to‑sign drafts", icon: <FileText className="w-3.5 h-3.5" />, y: 36 },
    { label: "Code confidently", icon: <Code className="w-3.5 h-3.5" />, y: 52 },
    { label: "Offload the inbox", icon: <MessageSquare className="w-3.5 h-3.5" />, y: 68 },
    { label: "Launch faster", icon: <Zap className="w-3.5 h-3.5" />, y: 84 },
    { label: "Integrate later", icon: <Plug className="w-3.5 h-3.5" />, y: 92 },
  ];

  return (
    <div
      className={cn(
        "relative aspect-square rounded-3xl overflow-hidden ring-1 ring-primary/15 shadow-lg",
        "transition-all hover:-translate-y-0.5 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {/* Brand gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 90% 10%, hsl(var(--primary)/0.18) 0%, transparent 55%), radial-gradient(120% 120% at 0% 100%, hsl(var(--secondary)/0.18) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Connectors */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 z-[5] text-white/60">
        {items.map((p, i) => (
          <path
            key={i}
            d={`M 24 ${p.y} C 42 ${p.y}, 55 50, 72 50`}
            fill="none"
            className="stroke-current"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full w-full p-6">
        {/* Left pills */}
        {items.map((p, i) => (
          <div key={i} className="absolute left-3" style={{ top: `${p.y}%` }}>
            <Pill icon={p.icon} label={p.label} />
          </div>
        ))}

        {/* Main workflow card */}
        <article
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2",
            "w-[54%] h-[72%] rounded-2xl",
            "bg-white/80 border border-white/30 backdrop-blur-xl shadow-elegant"
          )}
          aria-label="Workflow preview"
        >
          <header className="flex items-center justify-between p-4 border-b border-white/30 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary text-primary-foreground">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Draft Note</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] bg-white/70 border border-white/30 text-foreground/80"><Clock className="w-3.5 h-3.5 text-primary" /> 2h saved today</span>
              <span className="inline-flex items-center gap-1 text-xs text-primary"><CheckCircle2 className="w-3.5 h-3.5" /> Ready to sign</span>
            </div>
          </header>

          <div className="p-4 grid gap-2">
            <div className="h-2 rounded bg-primary/15 w-5/6" />
            <div className="h-2 rounded bg-primary/15 w-3/5" />
            <div className="h-2 rounded bg-primary/15 w-4/5" />
            <div className="h-2 rounded bg-primary/15 w-2/3" />
            <div className="h-2 rounded bg-primary/15 w-5/6" />
            <div className="h-2 rounded bg-primary/15 w-3/4" />
          </div>

          <footer className="absolute bottom-3 left-3 right-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <Code className="w-3.5 h-3.5 text-primary" /> Codes suggested
                </div>
                <span className="text-[10px] text-foreground/60">ICD‑10 / CPT • 3 codes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-secondary/10 border border-secondary/20">
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <MessageSquare className="w-3.5 h-3.5 text-secondary" /> Inbox offloaded
                </div>
                <span className="text-[10px] text-foreground/60">Calls & chats • 12 deflected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-white/60 border border-white/30">
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <Zap className="w-3.5 h-3.5 text-primary" /> Launch faster
                </div>
                <span className="text-[10px] text-foreground/60">No IT delay</span>
              </div>
              <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-white/60 border border-white/30">
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <Plug className="w-3.5 h-3.5 text-primary" /> Integrate later
                </div>
                <span className="text-[10px] text-foreground/60">EHR ready</span>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default EfficiencyHeroShowcase;
