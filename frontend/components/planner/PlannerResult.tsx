import AppCard from "@/components/ui/AppCard";
import {
  CalendarDays,
  Backpack,
  Wallet,
  Lightbulb,
} from "lucide-react";

interface PlannerResultsProps {
  itinerary: any;
}

export default function PlannerResults({
  itinerary,
}: PlannerResultsProps) {
  if (!itinerary) return null;

  return (
    <div className="mt-10 space-y-6">

      {/* Hero */}

      <AppCard>

        <h2 className="text-4xl font-bold text-slate-900">
          {itinerary.tripTitle}
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          {itinerary.summary}
        </p>

      </AppCard>

      {/* Cost */}

      <AppCard>

        <div className="flex items-center gap-3">

          <Wallet className="text-blue-600" />

          <h3 className="text-xl font-semibold">
            Estimated Cost
          </h3>

        </div>

        <p className="mt-4 text-3xl font-bold">
          {itinerary.estimatedCost}
        </p>

      </AppCard>

      {/* Daily Plan */}

      <AppCard>

        <div className="flex items-center gap-3 mb-6">

          <CalendarDays className="text-blue-600" />

          <h3 className="text-xl font-semibold">
            Daily Itinerary
          </h3>

        </div>

        <div className="space-y-5">

          {itinerary.dailyPlan?.map((day: any) => (

            <div
              key={day.day}
              className="rounded-2xl border border-slate-200 p-5"
            >

              <h4 className="text-lg font-semibold">
                Day {day.day} · {day.title}
              </h4>

              <ul className="mt-4 list-disc space-y-2 pl-5">

                {day.activities?.map(
                  (activity: string, index: number) => (
                    <li key={index}>
                      {activity}
                    </li>
                  )
                )}

              </ul>

            </div>

          ))}

        </div>

      </AppCard>

      {/* Packing */}

      <AppCard>

        <div className="flex items-center gap-3">

          <Backpack className="text-blue-600" />

          <h3 className="text-xl font-semibold">
            Packing Checklist
          </h3>

        </div>

        <ul className="mt-5 space-y-2">

          {itinerary.packingTips?.map(
            (tip: string, index: number) => (
              <li key={index}>
                • {tip}
              </li>
            )
          )}

        </ul>

      </AppCard>

      {/* Tips */}

      <AppCard>

        <div className="flex items-center gap-3">

          <Lightbulb className="text-blue-600" />

          <h3 className="text-xl font-semibold">
            Travel Tips
          </h3>

        </div>

        <ul className="mt-5 space-y-2">

          {itinerary.travelTips?.map(
            (tip: string, index: number) => (
              <li key={index}>
                • {tip}
              </li>
            )
          )}

        </ul>

      </AppCard>

    </div>
  );
}