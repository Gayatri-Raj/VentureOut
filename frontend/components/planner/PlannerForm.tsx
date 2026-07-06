"use client";

import { useState } from "react";
import {
  MapPin,
  Plane,
  Train,
  Car,
  Wallet,
  Calendar,
  Loader2,
} from "lucide-react";

import AppCard from "@/components/ui/AppCard";
import AppButton from "@/components/ui/AppButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PlannerFormProps {
  itinerary: any;
  setItinerary: (data: any) => void;
}

export default function PlannerForm({
  setItinerary,
}: PlannerFormProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");

  const [travelMode, setTravelMode] =
    useState("Flight");

  const [loading, setLoading] = useState(false);
  const [interests, setInterests] = useState("");

  async function generateTrip() {
    try {
      setLoading(true);

      const response = await fetch("/api/planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin,
          destination,
          days,
          budget,
          travelMode,
          interests,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("Failed to generate itinerary.");
        return;
      }

      const clean = data.result
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(clean);

      setItinerary(parsed);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppCard>

      <h2 className="text-3xl font-bold">
        Plan Your Journey
      </h2>

      <p className="mb-10 mt-2 text-slate-500">
        Fill in your travel details and let AI
        create a personalized itinerary.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Where are you travelling from?
          </label>

          <Input
            placeholder="Lucknow"
            value={origin}
            onChange={(e) =>
              setOrigin(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Destination
          </label>

          <Input
            placeholder="Tokyo"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2">
            <Calendar size={16} />
            Duration (Days)
          </label>

          <Input
            type="number"
            value={days}
            onChange={(e) =>
              setDays(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2">
            <Wallet size={16} />
            Budget
          </label>

          <Input
            placeholder="₹80,000"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
          />
        </div>

      </div>

      <div className="mt-10">

        <h3 className="mb-4 font-semibold">
          Travel Mode
        </h3>

        <div className="flex gap-4 flex-wrap">

          {[
            {
              name: "Flight",
              icon: <Plane size={18} />,
            },
            {
              name: "Train",
              icon: <Train size={18} />,
            },
            {
              name: "Car",
              icon: <Car size={18} />,
            },
          ].map((mode) => (

            <button
              key={mode.name}
              type="button"
              onClick={() =>
                setTravelMode(mode.name)
              }
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3 transition

              ${
                travelMode === mode.name
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white"
              }`}
            >
              {mode.icon}
              {mode.name}
            </button>

          ))}

        </div>

      </div>

      <div className="mt-10">

  <h3 className="mb-4 font-semibold">
    Interests
  </h3>

  <Textarea
    rows={5}
    placeholder="Tell us what you enjoy...

Examples:
• Anime and manga
• Street food
• Hiking
• Photography
• Historical places
• Shopping
• Beaches
• Nightlife"
    value={interests}
    onChange={(e) => setInterests(e.target.value)}
  />

</div>

      <div className="mt-10">

        <AppButton
          fullWidth
          disabled={loading}
          onClick={generateTrip}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Planning Your Trip...
            </>
          ) : (
            "Generate Itinerary"
          )}
        </AppButton>

      </div>

    </AppCard>
  );
}