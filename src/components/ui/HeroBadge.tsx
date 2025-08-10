import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function HeroBadge({ children, className, ...props }: HeroBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-[#143151] text-sm font-semibold shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default HeroBadge;
