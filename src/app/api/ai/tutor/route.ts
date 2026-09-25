import { NextRequest, NextResponse } from "next/server";
import { genAI, PERSONA_PROMPTS, TutorPersona, generateFallbackTutorResponse } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, persona = "SOCRATIC", topic } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message string is required." },
        { status: 400 }
      );
    }

    const typedPersona = (persona in PERSONA_PROMPTS ? persona : "SOCRATIC") as TutorPersona;
    const systemPrompt = PERSONA_PROMPTS[typedPersona];

    let reply = "";

    // 1. Try Gemini API if key is present
    if (genAI && process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: systemPrompt,
        });

        const prompt = `${topic ? `[Context Topic: ${topic}]\n` : ""}Student: ${message}`;
        const result = await model.generateContent(prompt);
        reply = result.response.text();
      } catch (geminiError) {
        console.warn("Gemini API call failed or rate-limited, using intelligent fallback:", geminiError);
        reply = generateFallbackTutorResponse(message, typedPersona, topic);
      }
    } else {
      // 2. Instant zero-cost intelligent pedagogical fallback
      reply = generateFallbackTutorResponse(message, typedPersona, topic);
    }

    return NextResponse.json({
      success: true,
      reply,
      persona: typedPersona,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("AI Tutor endpoint error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI response." },
      { status: 500 }
    );
  }
}
