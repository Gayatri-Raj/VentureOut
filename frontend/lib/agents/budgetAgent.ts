import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function optimizeBudget(
  budget: number,
  expenses: any[]
) {
  const prompt = `
You are VentureOut's AI Budget Advisor.

The user has a travel budget and expense history.

Budget:

₹${budget}

Expenses:

${JSON.stringify(expenses, null, 2)}

Your response MUST be markdown.

Use these headings:

# Budget Health

# Spending Analysis

# Biggest Expenses

# Saving Opportunities

# Forecast

# Practical Tips

Mention approximate savings whenever possible.

Be encouraging and actionable.

Do not return JSON.
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

  return response.text;
}