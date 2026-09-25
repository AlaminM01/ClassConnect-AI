"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Download,
  Plus,
  HelpCircle,
  Clock,
  ArrowRight,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SavedNote {
  id: string;
  title: string;
  topic: string;
  summary: string;
  keyTakeaways: string[];
  fullContent: string;
  createdAt: string;
}

const INITIAL_NOTES: SavedNote[] = [
  {
    id: "note-1",
    title: "Next.js 15 Server Actions & Streaming UI",
    topic: "Next.js 15 Server Actions",
    summary:
      "Deep dive into React 19 actions, server-client boundary serialization, and zero-bundle server mutations.",
    keyTakeaways: [
      "Server actions run strictly on the Node.js server with direct DB access.",
      "Optimistic UI updates display mutations instantly before server validation resolves.",
      "Zero bundle bloat because server action dependencies never ship to the client.",
    ],
    fullContent: `## 📌 Overview: Next.js 15 Server Actions & Streaming UI

### 1. Conceptual Architecture
Server Actions provide an RPC-style bridge between client forms and backend code without manual REST/GraphQL endpoint boilerplate.

### 2. Implementation Pattern
\`\`\`tsx
"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitQuizScore(userId: string, score: number) {
  await db.quizResult.create({
    data: { userId, score, totalQuestions: 10, answers: {} },
  });
  revalidatePath("/student/gamification");
}
\`\`\`

### 3. Key Exam & Production Takeaways
- Always validate input arguments on the server using Zod or schema guards.
- Wrap mutations with \`useActionState\` for clean pending states.`,
    createdAt: "Sept 23, 2026",
  },
  {
    id: "note-2",
    title: "Dijkstra's Algorithm & Priority Queue Heuristics",
    topic: "Dijkstra's Algorithm",
    summary:
      "Shortest path algorithm on weighted graphs, min-heap optimizations, and negative edge limitations.",
    keyTakeaways: [
      "Time complexity is O((V + E) log V) with a binary min-heap.",
      "Greedy selection guarantees optimal path only when edge weights are non-negative.",
      "Bellman-Ford must be used when negative cycle detection is required.",
    ],
    fullContent: `## 📌 Overview: Dijkstra's Shortest Path Algorithm

### 1. Algorithm Invariants
- Each vertex starts with an initial distance of infinity, except the source vertex (distance 0).
- Vertices are visited in strictly non-decreasing order of their cumulative shortest distance.

### 2. Python Reference Implementation
\`\`\`python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        curr_dist, curr_node = heapq.heappop(pq)
        if curr_dist > distances[curr_node]:
            continue
        for neighbor, weight in graph[curr_node].items():
            dist = curr_dist + weight
            if dist < distances[neighbor]:
                distances[neighbor] = dist
                heapq.heappush(pq, (dist, neighbor))
    return distances
\`\`\``,
    createdAt: "Sept 20, 2026",
  },
];

export default function AINotesPage() {
  const [savedNotes, setSavedNotes] = useState<SavedNote[]>(INITIAL_NOTES);
  const [selectedNote, setSelectedNote] = useState<SavedNote>(INITIAL_NOTES[0]);
  const [topicInput, setTopicInput] = useState("");
  const [transcriptInput, setTranscriptInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const sampleTopics = [
    "Retrieval-Augmented Generation (RAG) Architecture",
    "PostgreSQL B-Tree Indexes & Query Optimization",
    "Docker Multi-Stage Builds & Container Security",
  ];

  const handleGenerateNote = async (topicToUse?: string) => {
    const topic = topicToUse || topicInput;
    if (!topic.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          transcript: transcriptInput,
        }),
      });

      const data = await res.json();
      if (data.note) {
        const newNote: SavedNote = {
          id: `note-${Date.now()}`,
          title: data.note.title,
          topic: data.note.topic,
          summary: data.note.summary,
          keyTakeaways: data.note.keyTakeaways || [],
          fullContent: data.note.fullContent,
          createdAt: "Just now",
        };
        setSavedNotes([newNote, ...savedNotes]);
        setSelectedNote(newNote);
        setTopicInput("");
        setTranscriptInput("");
      }
    } catch (err) {
      console.error("Notes error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedNote.fullContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <FileText className="w-7 h-7 text-indigo-400" />
            Notion-Grade AI Notes & Summaries
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Transform lecture recordings, transcripts, and curriculum topics into structured study guides.
          </p>
        </div>
      </div>

      {/* Generator Prompt Box */}
      <Card className="glass-card p-6 border-indigo-500/20 bg-indigo-950/10 space-y-4">
        <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
          <span>Generate New Smart Study Note</span>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Topic or Lecture Title
            </label>
            <input
              type="text"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              placeholder="e.g. Distributed Consensus with Raft & Paxos..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Optional Lecture Transcript / Raw Notes (AI will synthesize and organize)
            </label>
            <textarea
              rows={3}
              value={transcriptInput}
              onChange={(e) => setTranscriptInput(e.target.value)}
              placeholder="Paste raw transcript, meeting notes, or textbook excerpt here..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] text-slate-400 font-semibold">Try:</span>
            {sampleTopics.map((top, idx) => (
              <button
                key={idx}
                onClick={() => handleGenerateNote(top)}
                className="text-[11px] text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                + {top}
              </button>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <Button
              onClick={() => handleGenerateNote()}
              disabled={isGenerating || !topicInput.trim()}
              variant="gradient"
              size="sm"
              className="font-semibold text-xs shadow-md"
            >
              {isGenerating ? "Synthesizing Smart Note..." : "Generate AI Note ✨"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Split Grid: Left (Saved Notes Directory) / Right (Active Note Reader) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Notes Directory (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-purple-400" />
              Notes Library ({savedNotes.length})
            </h2>
          </div>

          <div className="space-y-3">
            {savedNotes.map((note) => {
              const isSelected = selectedNote.id === note.id;

              return (
                <Card
                  key={note.id}
                  onClick={() => setSelectedNote(note)}
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "bg-indigo-600/15 border-indigo-500/40 shadow-md"
                      : "glass-card hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                    <span className="font-semibold text-indigo-400 uppercase tracking-wider">{note.topic}</span>
                    <span>{note.createdAt}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{note.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {note.summary}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right: Active Note Reader (8 Cols) */}
        <div className="lg:col-span-8">
          <Card className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <Badge variant="outline" className="text-[10px] text-indigo-400 border-indigo-500/30 mb-2">
                  {selectedNote.topic}
                </Badge>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {selectedNote.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">Generated by ClassConnect AI • {selectedNote.createdAt}</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <Button variant="outline" size="sm" onClick={handleCopy} className="h-8 text-xs">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Link href={`/student/quiz?topic=${encodeURIComponent(selectedNote.topic)}`}>
                  <Button variant="default" size="sm" className="h-8 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500">
                    <HelpCircle className="w-3.5 h-3.5 mr-1" /> Quiz Me on This
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Takeaways Cards */}
            {selectedNote.keyTakeaways && selectedNote.keyTakeaways.length > 0 && (
              <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Key Concept Takeaways
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedNote.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Markdown Content Render */}
            <div className="prose prose-invert max-w-none text-xs leading-relaxed space-y-4 text-slate-300 whitespace-pre-wrap font-sans">
              {selectedNote.fullContent}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
