import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-1 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}