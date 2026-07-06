"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Expense } from "@/types/expense";
import { expenseCategories } from "@/lib/expenseCategories";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({
  onAddExpense,
}: Props) {
  const [category, setCategory] = useState("Hotels");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  function handleSubmit() {
    if (!amount) return;

    onAddExpense({
      id: crypto.randomUUID(),
      category,
      amount: Number(amount),
      description,
      date,
    });

    setAmount("");
    setDescription("");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Add Expense
      </h2>

      {/* Categories */}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">

        {expenseCategories.map((item) => {

          const Icon = item.icon;

          const active = category === item.name;

          return (

            <button
              key={item.name}
              type="button"
              onClick={() => setCategory(item.name)}
              className={`rounded-2xl border p-4 transition

              ${
                active
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-400"
              }`}
            >
              <Icon
                className={`mx-auto mb-2 ${
                  active
                    ? "text-blue-600"
                    : "text-slate-500"
                }`}
              />

              <p className="text-sm font-medium">
                {item.name}
              </p>

            </button>

          );

        })}

      </div>

      {/* Inputs */}

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <input
          type="number"
          placeholder="Amount"
          className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <input
          placeholder="Description"
          className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="date"
          className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-700"
      >
        <Plus size={18} />
        Add Expense
      </button>

    </div>
  );
}