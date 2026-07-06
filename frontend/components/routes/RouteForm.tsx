"use client";

import { useState } from "react";
import {
  MapPin,
  Wallet,
  Route,
  Plane,
  Train,
  Car,
  Leaf,
  Loader2,
} from "lucide-react";

import AppCard from "@/components/ui/AppCard";
import AppButton from "@/components/ui/AppButton";
import { Input } from "@/components/ui/input";

interface Props {
  setResult: (data: any) => void;
}

export default function RouteForm({ setResult }: Props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");

  const [preferredMode, setPreferredMode] = useState("Any");
  const [priority, setPriority] = useState("Fastest");

  const [loading, setLoading] = useState(false);

  async function optimizeRoute() {
    try {
      setLoading(true);

      const response = await fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin,
          destination,
          budget,
          preferredMode,
          priority,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("Failed to optimize route.");
        return;
      }

      const clean = data.result
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      setResult(JSON.parse(clean));
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
        Optimize Your Journey
      </h2>

      <p className="mt-2 mb-8 text-slate-500">
        Compare travel modes and discover the smartest way to travel.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Origin
          </label>

          <Input
            placeholder="Lucknow"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Destination
          </label>

          <Input
            placeholder="Delhi"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2">
            <Wallet size={16} />
            Budget
          </label>

          <Input
            placeholder="₹5000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

      </div>

      {/* Preferred Mode */}

      <div className="mt-10">

        <h3 className="mb-4 font-semibold">
          Preferred Travel Mode
        </h3>

        <div className="flex flex-wrap gap-4">

          {[
            {
              name: "Any",
              icon: <Route size={18} />,
            },
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
              onClick={() => setPreferredMode(mode.name)}
              className={`rounded-2xl border px-5 py-3 flex items-center gap-2 transition
              ${
                preferredMode === mode.name
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

      {/* Priority */}

      <div className="mt-10">

        <h3 className="mb-4 font-semibold">
          Optimization Priority
        </h3>

        <div className="flex flex-wrap gap-4">

          {[
            "Fastest",
            "Cheapest",
            "Most Comfortable",
            "Eco Friendly",
          ].map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => setPriority(item)}
              className={`rounded-xl border px-5 py-3 transition

              ${
                priority === item
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white"
              }`}
            >
              {item === "Eco Friendly" && (
                <Leaf
                  size={16}
                  className="mr-2 inline"
                />
              )}

              {item}

            </button>

          ))}

        </div>

      </div>

      <div className="mt-10">

        <AppButton
          fullWidth
          disabled={loading}
          onClick={optimizeRoute}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Optimizing...
            </>
          ) : (
            "Optimize Route"
          )}
        </AppButton>

      </div>

    </AppCard>
  );
}