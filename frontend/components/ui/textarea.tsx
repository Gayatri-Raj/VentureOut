import * as React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}