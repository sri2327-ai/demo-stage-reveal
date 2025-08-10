import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShowcaseTileProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ElementType;
  iconClassName?: string;
  innerClassName?: string;
  ariaLabel?: string;
}

export function ShowcaseTile({
  icon: Icon,
  className,
  iconClassName,
  innerClassName,
  ariaLabel,
  ...props
}: ShowcaseTileProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "aspect-square rounded-3xl p-8 bg-gradient-to-br from-[#143151] to-[#387E89] ring-1 ring-[#387E89]/30 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full bg-white/10 rounded-2xl flex items-center justify-center",
          innerClassName
        )}
      >
        <Icon className={cn("w-24 h-24 text-white/90", iconClassName)} />
      </div>
    </div>
  );
}

export default ShowcaseTile;
