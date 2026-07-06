"use client";

import { useState } from "react";

import RouteForm from "@/components/routes/RouteForm";
import RouteResult from "@/components/routes/RouteResult";

export default function RoutesPage() {
  const [result, setResult] = useState<any>(null);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Route Optimizer
          </h1>

          <p className="mt-2 text-slate-500">
            Compare travel modes and discover the fastest,
            cheapest and smartest way to reach your destination.
          </p>

        </div>

        <RouteForm
          setResult={setResult}
        />

        {result && (
          <div className="mt-10">
            <RouteResult result={result} />
          </div>
        )}

      </div>
    </main>
  );
}