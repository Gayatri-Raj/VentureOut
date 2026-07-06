import { ReactNode } from "react";
import clsx from "clsx";

interface AppCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function AppCard({
  children,
  className,
  hover = true,
}: AppCardProps) {
  return (
    <div
      className={clsx(
        "rounded-[28px] bg-white/90 backdrop-blur-md",
        "border border-slate-200/80",
        "shadow-sm",
        "transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200",
        "p-8",
        className
      )}
    >
      {children}
    </div>
  );
}