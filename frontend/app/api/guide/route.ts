import { NextRequest, NextResponse } from "next/server";
import { askTravelGuide } from "@/lib/agents/guideAgent";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

if (!messages || !Array.isArray(messages) || messages.length === 0) {
  return NextResponse.json(
    {
      success: false,
      error: "Conversation is required.",
    },
    { status: 400 }
  );
}

    const answer = await askTravelGuide(messages);

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("Guide API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate response.",
      },
      { status: 500 }
    );
  }
}