import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export default function AppButton({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: AppButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center",
        "rounded-2xl",
        "px-6 py-3.5",
        "text-[15px] font-semibold",
        "transition-all duration-300",
        "active:scale-[0.98]",
        "disabled:cursor-not-allowed disabled:opacity-60",

        fullWidth && "w-full",

        variant === "primary" &&
          "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5",

        variant === "secondary" &&
          "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",

        className
      )}
    >
      {children}
    </button>
  );
}