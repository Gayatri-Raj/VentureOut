import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateItinerary(data: {
  origin: string;
  destination: string;
  travelMode: string;
  days: string;
  budget: string;
  interests: string;
}) {
  const prompt = `
You are VentureOut's Trip Planning Agent.

Create a travel itinerary based on:

Origin: ${data.origin}
Destination: ${data.destination}
Preferred Travel Mode: ${data.travelMode}
Duration: ${data.days} days
Budget: ${data.budget}
Interests: ${data.interests}

If the preferred travel mode is "Suggest Best", choose the most practical mode of transport based on distance, travel time, convenience, and budget.

Include the recommended travel option, approximate travel duration, and estimated transportation cost in the response.

Return ONLY valid JSON in exactly this format.

Rules:
- estimatedCost should ONLY contain the price range (example: "₹45,000–48,000")
- Put any explanations about pricing into costNotes.
- Keep summary under 60 words.

{
  "tripTitle": "",
  "summary": "",
  "estimatedCost": "",
  "transport": {
     "mode":"",
     "duration":"",
     "estimatedFare":""
    },
  "costNotes": "",
  "dailyPlan": [
    {
      "day": 1,
      "title": "",
      "activities": []
    }
  ],
  "packingTips": [],
  "travelTips": []
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}