import {
  Trophy,
  Clock3,
  Wallet,
  Leaf,
  Lightbulb,
} from "lucide-react";

interface Props {
  result: any;
}

export default function RouteResult({
  result,
}: Props) {
  return (
    <div className="space-y-8">

      {/* Recommendation */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

        <div className="flex items-center gap-3">

          <Trophy className="h-8 w-8" />

          <h2 className="text-3xl font-bold">
            Recommended Route
          </h2>

        </div>

        <h3 className="mt-6 text-4xl font-bold">
          {result.recommended}
        </h3>

        <p className="mt-4 max-w-3xl text-blue-100 leading-8">
          {result.reason}
        </p>

      </div>

      {/* Comparison */}

      <div className="rounded-3xl border bg-white p-8">

        <h2 className="mb-6 text-2xl font-bold">
          Compare Travel Modes
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="py-3 text-left">
                  Mode
                </th>

                <th className="text-left">
                  Time
                </th>

                <th className="text-left">
                  Cost
                </th>

                <th className="text-left">
                  Comfort
                </th>

              </tr>

            </thead>

            <tbody>

              {result.comparison.map(
                (item: any, index: number) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="py-5 font-semibold">
                      {item.mode}
                    </td>

                    <td>{item.time}</td>

                    <td>{item.cost}</td>

                    <td>{item.comfort}</td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Pros & Cons */}

      <div className="grid gap-6 lg:grid-cols-2">

        {result.comparison.map(
          (item: any, index: number) => (

            <div
              key={index}
              className="rounded-3xl border bg-white p-6"
            >

              <h3 className="mb-5 text-xl font-bold">
                {item.mode}
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <h4 className="font-semibold text-green-600">
                    Pros
                  </h4>

                  <ul className="mt-3 list-disc pl-5">

                    {item.pros.map(
                      (
                        pro: string,
                        i: number
                      ) => (

                        <li key={i}>
                          {pro}
                        </li>

                      )
                    )}

                  </ul>

                </div>

                <div>

                  <h4 className="font-semibold text-red-600">
                    Cons
                  </h4>

                  <ul className="mt-3 list-disc pl-5">

                    {item.cons.map(
                      (
                        con: string,
                        i: number
                      ) => (

                        <li key={i}>
                          {con}
                        </li>

                      )
                    )}

                  </ul>

                </div>

              </div>

            </div>

          )
        )}

      </div>

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border bg-white p-6">

          <Clock3 className="mb-4 text-blue-600" />

          <h3 className="font-semibold">
            Best Departure Time
          </h3>

          <p className="mt-3 text-slate-600">
            {result.bestDepartureTime}
          </p>

        </div>

        <div className="rounded-3xl border bg-white p-6">

          <Leaf className="mb-4 text-green-600" />

          <h3 className="font-semibold">
            Environmental Impact
          </h3>

          <p className="mt-3 text-slate-600">
            {result.environmentalImpact}
          </p>

        </div>

        <div className="rounded-3xl border bg-white p-6">

          <Wallet className="mb-4 text-purple-600" />

          <h3 className="font-semibold">
            Estimated Total Cost
          </h3>

          <p className="mt-3 text-slate-600">
            {result.estimatedCost}
          </p>

        </div>

      </div>

      {/* Travel Tips */}

      <div className="rounded-3xl border bg-white p-8">

        <div className="mb-5 flex items-center gap-3">

          <Lightbulb className="text-yellow-500" />

          <h2 className="text-2xl font-bold">
            AI Travel Tips
          </h2>

        </div>

        <ul className="space-y-3 list-disc pl-6">

          {result.travelTips.map(
            (
              tip: string,
              index: number
            ) => (

              <li key={index}>
                {tip}
              </li>

            )
          )}

        </ul>

      </div>

    </div>
  );
}