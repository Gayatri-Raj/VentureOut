import { Sparkles } from "lucide-react";

export default function PlannerHero() {
  return (
    <section className="mb-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-10 text-white shadow-xl">

      <div className="max-w-3xl">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
          <Sparkles size={16} />
          AI Powered Travel Planning
        </div>

        <h1 className="text-5xl font-bold leading-tight">
          Plan your perfect journey.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-blue-100">
          VentureOut creates personalized itineraries based on your
          destination, budget, interests and preferred mode of travel.
        </p>

      </div>

    </section>
  );
}