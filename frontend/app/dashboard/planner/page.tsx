"use client";

import { useState } from "react";

import PlannerHero from "@/components/planner/PlannerHero";
import PlannerForm from "@/components/planner/PlannerForm";
import PlannerResult from "@/components/planner/PlannerResult";

export default function PlannerPage() {
  const [itinerary, setItinerary] = useState<any>(null);

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-8 py-10">

        <PlannerHero />

        <PlannerForm
          itinerary={itinerary}
          setItinerary={setItinerary}
        />

        <PlannerResult itinerary={itinerary} />

      </div>

    </main>
  );
}