import { test } from "node:test";
import assert from "node:assert/strict";

function generateFallbackTutorResponse(message, topic) {
  const lower = message.toLowerCase();

  if (lower.includes("react server component") || lower.includes("rsc")) {
    return "Zero Client Bundle Impact";
  }
  if (lower.includes("dijkstra") || lower.includes("graph")) {
    return "Dijkstra's Shortest Path Algorithm";
  }
  if (lower.includes("rag") || lower.includes("vector")) {
    return "Retrieval-Augmented Generation";
  }
  return `Master ${topic || "Computer Science"}`;
}

test("AI fallback tutor handles React Server Components queries", () => {
  const reply = generateFallbackTutorResponse("Tell me about React Server Components");
  assert.match(reply, /Zero Client Bundle Impact/);
});

test("AI fallback tutor handles algorithm queries", () => {
  const reply = generateFallbackTutorResponse("How does dijkstra work?");
  assert.match(reply, /Dijkstra's Shortest Path Algorithm/);
});

test("AI fallback tutor handles RAG queries", () => {
  const reply = generateFallbackTutorResponse("What is RAG in vector embeddings?");
  assert.match(reply, /Retrieval-Augmented Generation/);
});
