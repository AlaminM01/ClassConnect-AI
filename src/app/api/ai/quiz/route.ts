import { NextRequest, NextResponse } from "next/server";
import { genAI } from "@/lib/ai";
import { MOCK_QUIZ_QUESTIONS } from "@/lib/mock-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic = "Full-Stack AI Engineering", difficulty = "INTERMEDIATE" } = body;

    let questions = MOCK_QUIZ_QUESTIONS;

    if (genAI && process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" },
        });

        const prompt = `Generate 3 high-yield multiple-choice questions on the topic "${topic}" at ${difficulty} level.
Return JSON format matching:
[
  {
    "id": "q1",
    "question": "question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "clear conceptual rationale"
  }
]`;

        const result = await model.generateContent(prompt);
        const parsed = JSON.parse(result.response.text());
        if (Array.isArray(parsed) && parsed.length > 0) {
          questions = parsed;
        }
      } catch (geminiError) {
        console.warn("Gemini quiz generation fallback:", geminiError);
      }
    }

    return NextResponse.json({
      success: true,
      topic,
      difficulty,
      questions,
      totalQuestions: questions.length,
    });
  } catch (error) {
    console.error("Quiz API error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI quiz." },
      { status: 500 }
    );
  }
}
