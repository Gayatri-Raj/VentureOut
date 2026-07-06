import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

interface RouteInput {
  origin: string;
  destination: string;
  budget: string;
  preferredMode: string;
  priority: string;
}

export async function optimizeRoute(data: RouteInput) {
  const prompt = `
You are VentureOut's Route Optimization AI.

Compare ALL feasible travel modes.

Always include:
- Flight (if available)
- Train (if available)
- Car
- Bus (if practical)

If a mode is unavailable, explain why.

The comparison array should contain every feasible option.

Origin:
${data.origin}

Destination:
${data.destination}

Budget:
${data.budget}

Preferred Mode:
${data.preferredMode}

Priority:
${data.priority}

Return ONLY valid JSON.

Structure:

{
  "recommended":"Flight",

  "reason":"Why this is the best option.",

  "estimatedCost":"₹4500",

  "bestDepartureTime":"Early Morning",

  "environmentalImpact":"Medium",

  "comparison":[
    {
      "mode":"Flight",
      "time":"1 hr 20 min",
      "cost":"₹4500",
      "comfort":"★★★★★",
      "pros":[
        "...",
        "..."
      ],
      "cons":[
        "...",
        "..."
      ]
    },

    {
      "mode":"Train",
      "time":"8 hrs",
      "cost":"₹1200",
      "comfort":"★★★★☆",
      "pros":[
        "...",
        "..."
      ],
      "cons":[
        "...",
        "..."
      ]
    },

    {
      "mode":"Car",
      "time":"9 hrs",
      "cost":"₹6000",
      "comfort":"★★★☆☆",
      "pros":[
        "...",
        "..."
      ],
      "cons":[
        "...",
        "..."
      ]
    }
  ],

  "travelTips":[
    "...",
    "...",
    "..."
  ]
}

Never wrap JSON inside markdown.
Never explain anything outside JSON.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}