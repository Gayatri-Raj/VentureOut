"use client";

import { Expense } from "@/types/expense";
import { expenseCategories } from "@/lib/expenseCategories";

interface Props {
  expenses: Expense[];
}

export default function ExpenseHistory({
  expenses,
}: Props) {
  function getIcon(category: string) {
    return (
      expenseCategories.find((c) => c.name === category)
        ?.icon || expenseCategories[expenseCategories.length - 1].icon
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Expense History
      </h2>

      {expenses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-12 text-center">

          <p className="text-lg font-medium text-slate-700">
            No expenses yet
          </p>

          <p className="mt-2 text-slate-500">
            Add your first expense above.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {expenses.map((expense) => {

            const Icon = getIcon(expense.category);

            return (
              <div
                key={expense.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-400 hover:shadow-md"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {expense.category}
                    </h3>

                    <p className="text-slate-500">
                      {expense.description || "No description"}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {expense.date}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold text-slate-900">
                    ₹{expense.amount.toLocaleString()}
                  </p>

                </div>

              </div>
            );

          })}

        </div>
      )}

    </div>
  );
}