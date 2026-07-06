import { NextRequest, NextResponse } from "next/server";
import { optimizeBudget } from "@/lib/agents/budgetAgent";

export async function POST(req: NextRequest) {
  try {
    const { budget, expenses } = await req.json();

    const answer = await optimizeBudget(
      budget,
      expenses
    );

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}