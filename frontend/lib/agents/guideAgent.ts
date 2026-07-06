import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function askTravelGuide(messages: Message[]) {
  const systemPrompt = `
You are VentureOut AI, a premium travel concierge built into the VentureOut travel planning application.

You are having an ongoing conversation with the user.

IMPORTANT:
- Always use the previous conversation to understand follow-up questions.
- If the user replies with a short message like:
  - "India"
  - "Yes"
  - "No"
  - "Tomorrow"
  - "2 days"
  assume it refers to your previous question.
- Never treat short replies as brand-new questions.
- Continue the conversation naturally.

You specialize in:
- Destinations
- Hotels
- Restaurants
- Attractions
- Flights
- Visa requirements
- Transportation
- Weather
- Budget planning
- Currency
- Shopping
- Local customs
- Safety
- Food
- Hidden gems
- Itineraries

Always:
- Use Markdown
- Use headings
- Use bullet points
- Use tables when comparing options
- Never return JSON
- Never mention being an AI model
`;

  const conversation = messages
    .map(
      (m) =>
        `${m.role === "user" ? "User" : "Assistant"}:\n${m.content}`
    )
    .join("\n\n");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${systemPrompt}

Conversation:

${conversation}

Continue the conversation naturally.`,
  });

  return response.text ?? "";
}