"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Loader2, Sparkles } from "lucide-react";

import { Expense } from "@/types/expense";

interface Props {
  budget: number;
  expenses: Expense[];
}

export default function BudgetOptimizer({
  budget,
  expenses,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  async function optimize() {
    setLoading(true);

    try {
      const res = await fetch(
        "/api/expenses/optimize",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            budget,
            expenses,
          }),
        }
      );

      const data = await res.json();

      setResult(data.answer);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Sparkles className="text-blue-600" />

        <h2 className="text-2xl font-semibold">
          AI Budget Optimizer
        </h2>

      </div>

      <button
        onClick={optimize}
        disabled={
          loading || expenses.length === 0 || budget <= 0
        }
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          "Optimize Budget"
        )}
      </button>

      {result && (
        <div className="prose mt-8 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {result}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}