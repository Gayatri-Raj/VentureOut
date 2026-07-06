import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MapPinned,
  Route,
  Wallet,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl p-10">

        {/* Hero */}

        <section className="rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-12 text-white shadow-xl">

          <div className="max-w-3xl">

            <p className="mb-3 text-blue-100">
              Welcome back 👋
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Where will VentureOut take you next?
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              Your AI travel companion can build personalized itineraries,
              optimize budgets, compare routes and answer all your travel
              questions in one place.
            </p>

            <div className="mt-8">
              <Link
                href="/dashboard/planner"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
              >
                Plan a Trip
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

        </section>

        {/* Quick Actions */}

        <section className="mt-14">

          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <ActionCard
              href="/dashboard/planner"
              icon={<MapPinned size={28} />}
              title="Trip Planner"
              description="Generate AI-powered personalized itineraries."
            />

            <ActionCard
              href="/dashboard/guide"
              icon={<BookOpen size={28} />}
              title="Travel Guide"
              description="Ask VentureOut AI about destinations, visas and more."
            />

            <ActionCard
              href="/dashboard/expenses"
              icon={<Wallet size={28} />}
              title="Expense Tracker"
              description="Track expenses and optimize your travel budget."
            />

            <ActionCard
              href="/dashboard/routes"
              icon={<Route size={28} />}
              title="Route Optimizer"
              description="Compare routes and choose the best way to travel."
            />

          </div>

        </section>

        {/* Get Started */}

        <section className="mt-16 rounded-3xl bg-white p-10 shadow-sm border border-slate-200">

          <h2 className="text-3xl font-bold text-slate-900">
            Ready for your next adventure?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600 leading-8">
            Plan your entire trip with AI—from creating personalized
            itineraries and discovering attractions to managing expenses
            and optimizing travel routes.
          </p>

          <Link
            href="/dashboard/planner"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Start Planning
            <ArrowRight size={18} />
          </Link>

        </section>

      </div>
    </main>
  );
}

function ActionCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-medium text-blue-600">
        Open
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>

    </Link>
  );
}