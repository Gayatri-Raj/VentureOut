import { NextResponse } from "next/server";
import { generateItinerary } from "@/lib/agents/plannerAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await generateItinerary(body);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate itinerary.",
      },
      { status: 500 }
    );
  }
}