import { NextRequest, NextResponse } from "next/server";
import { genAI } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic = "Full-Stack Web Architectures", transcript = "" } = body;

    const noteData = {
      title: `${topic} - Master Study Guide`,
      topic,
      summary: `Comprehensive synthesized review of ${topic}, highlighting architectural design decisions, performance trade-offs, and critical implementation details.`,
      keyTakeaways: [
        `Core mechanism: Efficient state transitions and bounded latency guarantees.`,
        `Avoid common anti-patterns: Uncached database queries and redundant network roundtrips.`,
        `Edge and serverless execution models provide sub-second startup when cold-starts are minimized.`,
        `Active recall checkpoint: Verify edge case handling under concurrent workload peaks.`,
      ],
      fullContent: `## 📌 Overview: ${topic}

${
  transcript
    ? `### Lecture Transcript Analysis:\n> "${transcript.slice(0, 300)}..."\n`
    : ""
}

### 1. Conceptual Framework
Understanding **${topic}** requires decomposing the system into three primary tiers:
- **Presentation & Interface Tier**: Client render cycles, state synchronization, and reactive UI boundaries.
- **Compute & Business Logic Tier**: Stateless handlers, server actions, and distributed consensus mechanisms.
- **Storage & State Tier**: ACID compliance, indexing strategies, and caching layers (Redis / Vector stores).

### 2. Implementation & Code Blueprint
\`\`\`typescript
// Production design pattern for ${topic}
export async function executeEngineWorkflow(payload: { id: string; timestamp: number }) {
  try {
    // 1. Validate payload boundary
    if (!payload.id) throw new Error("Invalid entity identifier");

    // 2. Perform idempotent state transition
    const result = await processStateMutation(payload);
    return { success: true, data: result };
  } catch (error) {
    console.error("Execution error:", error);
    throw error;
  }
}
\`\`\`

### 3. High-Yield Exam & Interview Checklist
1. What is the amortized complexity of this approach compared to brute-force alternatives?
2. How does the system recover from transient network partition failures?
3. Which monitoring metrics (P99 latency, CPU utilization) indicate resource saturation?`,
    };

    if (genAI && process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are an expert pedagogical note-taking AI. Create a structured Notion-grade study guide on the topic: "${topic}".
Lecture notes/context: "${transcript}".
Format with clear markdown headings, bullet points, code examples, and review questions.`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        noteData.fullContent = text;
      } catch (e) {
        console.warn("Gemini call fell back to deterministic generator:", e);
      }
    }

    return NextResponse.json({
      success: true,
      note: noteData,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("AI Notes endpoint error:", error);
    return NextResponse.json(
      { error: "Failed to generate smart notes." },
      { status: 500 }
    );
  }
}
