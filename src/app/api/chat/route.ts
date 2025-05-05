import { NextResponse } from "next/server";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set in environment variables");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompts } = await request.json();

    if (!prompts || !Array.isArray(prompts)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      messages: prompts.map((prompt) => ({ role: "user", content: prompt })),
      model: "gpt-4",
    });

    return NextResponse.json({
      answer:
        completion.choices[0]?.message?.content || "No response generated",
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
