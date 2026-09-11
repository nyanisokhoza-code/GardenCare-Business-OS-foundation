import { NextResponse } from "next/server";
import { getAIAdapter } from "@/lib/ai";
import type { AIProvider } from "@/lib/ai/provider-types";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { provider?: AIProvider; prompt?: string };
    const provider = body.provider ?? "openai";

    if (!body.prompt?.trim()) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    const adapter = getAIAdapter(provider);
    const result = await adapter.generate({ prompt: body.prompt });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "AI request failed." },
      { status: 500 }
    );
  }
}
