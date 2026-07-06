"use client";

import {
  Wallet,
  IndianRupee,
  PiggyBank,
  Receipt,
} from "lucide-react";

import { Expense } from "@/types/expense";

interface Props {
  budget: number;
  expenses: Expense[];
}

export default function BudgetSummary({
  budget,
  expenses,
}: Props) {
  const spent = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const remaining = budget - spent;

  const cards = [
    {
      title: "Trip Budget",
      value: `₹${budget.toLocaleString()}`,
      icon: Wallet,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Spent",
      value: `₹${spent.toLocaleString()}`,
      icon: IndianRupee,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Remaining",
      value: `₹${remaining.toLocaleString()}`,
      icon: PiggyBank,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Expenses",
      value: expenses.length,
      icon: Receipt,
      color: "bg-purple-100 text-purple-700",
    },
  ];
  if (budget <= 0) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <h2 className="text-2xl font-semibold">
        Set Your Trip Budget
      </h2>

      <p className="mt-2 text-slate-500">
        Enter your total travel budget to begin tracking expenses.
      </p>
    </div>
  );
}

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
            >
              <Icon size={26} />
            </div>

            <p className="text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}