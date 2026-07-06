"use client";

import { Expense } from "@/types/expense";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

interface Props {
  expenses: Expense[];
}

const COLORS = [
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#818cf8",
  "#6366f1",
  "#0ea5e9",
  "#06b6d4",
];

export default function ExpenseCharts({
  expenses,
}: Props) {
  if (expenses.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">
          Analytics
        </h2>

        <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-500">
          Add some expenses to see analytics.
        </div>
      </div>
    );
  }

  const categoryTotals = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(categoryTotals).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const lineData = [...expenses]
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    )
    .map((expense) => ({
      date: expense.date,
      amount: expense.amount,
    }));

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Pie */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold">
          Spending by Category
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Bar */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold">
          Category Comparison
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={pieData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Line */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">

        <h2 className="mb-5 text-xl font-semibold">
          Spending Timeline
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={lineData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}