"use client";

import { useState } from "react";

import BudgetSummary from "@/components/expenses/BudgetSummary";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import ExpenseHistory from "@/components/expenses/ExpenseHistory";
import BudgetCharts from "@/components/expenses/BudgetCharts";
import BudgetOptimizer from "@/components/expenses/BudgetOptimizer";

import { Expense } from "@/types/expense";

export default function ExpensesPage() {
  const [budget, setBudget] = useState<number>(0);

  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-8 py-10">

        <div>
          <h1 className="text-4xl font-bold">
            Smart Expense Tracker
          </h1>

          <p className="mt-2 text-slate-500">
            Track your travel expenses, visualize spending, and receive AI-powered budget recommendations.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="mb-5 text-2xl font-semibold">
    Trip Budget
  </h2>

  <div className="flex flex-col gap-4 md:flex-row">

    <input
      type="number"
      placeholder="Enter your total budget"
      value={budget || ""}
      onChange={(e) =>
        setBudget(Number(e.target.value))
      }
      className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
    />

  </div>

</div>

        <BudgetSummary
          budget={budget}
          expenses={expenses}
        />

        <ExpenseForm
          onAddExpense={(expense) =>
            setExpenses((prev) => [expense, ...prev])
          }
        />

        <ExpenseHistory
          expenses={expenses}
        />

        <BudgetCharts
          expenses={expenses}
        />

        <BudgetOptimizer
          budget={budget}
          expenses={expenses}
        />

      </div>
    </main>
  );
}