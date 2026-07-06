import { NextRequest, NextResponse } from "next/server";
import { optimizeRoute } from "@/lib/agents/routeAgent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      origin,
      destination,
      budget,
      preferredMode,
      priority,
    } = body;

    const result = await optimizeRoute({
      origin,
      destination,
      budget,
      preferredMode,
      priority,
    });

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to optimize route.",
      },
      {
        status: 500,
      }
    );
  }
}