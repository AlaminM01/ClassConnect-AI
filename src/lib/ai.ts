import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
export const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export type TutorPersona = "SOCRATIC" | "CODE_MENTOR" | "CONCEPT_EXPLAINER" | "EXAM_PREP";

export const PERSONA_PROMPTS: Record<TutorPersona, string> = {
  SOCRATIC:
    "You are Socrates AI, an empathetic, encouraging learning mentor for ClassConnect AI. Guide students through concepts by asking thought-provoking questions, giving intuitive analogies, and breaking down complex problems step-by-step rather than giving raw answers directly.",
  CODE_MENTOR:
    "You are a Senior Staff Software Engineer and Code Mentor. Help students understand algorithms, system architecture, data structures, and debugging with clean TypeScript/JavaScript/Python code examples, Big-O analysis, and best practices.",
  CONCEPT_EXPLAINER:
    "You are an expert educator who specializes in Feynman-technique explanations. Explain complex computer science and engineering topics with extreme clarity, real-world analogies, and memorable bullet points.",
  EXAM_PREP:
    "You are a rigorous exam and technical interview coach. Challenge the student with quick conceptual drill questions, point out common pitfalls, and teach high-yield test strategies.",
};

// Zero-cost intelligent fallback generator when no API key is provided
export function generateFallbackTutorResponse(
  message: string,
  persona: TutorPersona = "SOCRATIC",
  topic?: string
): string {
  const lower = message.toLowerCase();

  if (lower.includes("react server component") || lower.includes("rsc")) {
    return `### Understanding React Server Components (RSC)

Great question! Let's examine the architectural difference:

1. **Zero Client Bundle Impact**: Unlike traditional components, Server Components execute *only* on the server. Their dependencies (like large Markdown parsers or database clients) are never downloaded by the browser.
2. **Direct Backend Access**: You can directly query PostgreSQL or Prisma right inside your component:
\`\`\`tsx
// This runs strictly on the server!
export default async function CoursesList() {
  const courses = await db.course.findMany();
  return <CourseGrid data={courses} />;
}
\`\`\`
3. **Seamless Streaming**: When combined with React Suspense, Next.js streams HTML chunks to the browser as soon as server queries resolve.

💡 **Socratic Question**: If an RSC cannot use hooks like \`useState\` or \`useEffect\`, where in the component tree would you place an interactive search filter?`;
  }

  if (lower.includes("dijkstra") || lower.includes("graph") || lower.includes("shortest path")) {
    return `### Dijkstra's Shortest Path Algorithm

Let's break down how Dijkstra guarantees the shortest path on weighted graphs with non-negative edges:

1. **Greedy Principle**: At each step, it explores the unvisited node with the smallest cumulative distance from the source.
2. **Priority Queue (Min-Heap)**: By maintaining a min-heap, finding the next closest vertex takes **O(log V)** time instead of O(V).
3. **Edge Relaxation**:
\`\`\`python
# Edge relaxation condition:
if current_distance + weight < distances[neighbor]:
    distances[neighbor] = current_distance + weight
    heapq.heappush(pq, (distances[neighbor], neighbor))
\`\`\`

💡 **Thought Exercise**: What would happen if a graph contained an edge with a negative weight? Why would Dijkstra fail, and which algorithm should we use instead?`;
  }

  if (lower.includes("rag") || lower.includes("vector") || lower.includes("embedding")) {
    return `### Retrieval-Augmented Generation (RAG) Architecture

RAG solves LLM hallucination and knowledge cutoff by pairing a vector database with generative prompts:

1. **Ingestion**: Documents are chunked (e.g. 500 tokens) and transformed into dense vector embeddings using an embedding model.
2. **Retrieval**: When a student asks a question, we compute cosine similarity between the query vector and document embeddings to extract the top-K relevant chunks.
3. **Augmentation & Generation**:
\`\`\`ts
const context = retrievedChunks.map(c => c.text).join("\\n");
const prompt = \`Use the following course materials to answer: \${context}\\n\\nQuestion: \${query}\`;
\`\`\`

💡 **Challenge**: Why is choosing the right chunk size and overlap critical for vector search precision?`;
  }

  return `### Hello! I am your ClassConnect AI Study Mentor

I am here to help you master **${topic || "Computer Science & Full-Stack AI Engineering"}**.

Here is how we can explore this topic together:
- **Deconstruct Concepts**: Break down tricky algorithms, formulas, or system architectures.
- **Code Review & Debugging**: Inspect logic bugs, edge cases, and time/space complexity.
- **Active Recall**: Test your understanding with targeted review questions.

**Try asking me:**
- *"How do Server Actions in Next.js 15 handle database mutations?"*
- *"Can you explain the difference between BFS and DFS with an intuitive analogy?"*
- *"Why is vector embedding similarity measured using cosine distance?"*

What specific concept or assignment problem would you like to tackle today?`;
}
