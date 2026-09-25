"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Bot,
  Send,
  Sparkles,
  RotateCcw,
  Code2,
  Lightbulb,
  GraduationCap,
  Copy,
  Check,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_STUDENT } from "@/lib/mock-data";
import { TutorPersona } from "@/lib/ai";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
}

export default function AITutorPage() {
  const student = MOCK_STUDENT;
  const [persona, setPersona] = useState<TutorPersona>("SOCRATIC");
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-init",
      sender: "ai",
      content: `### Welcome to Your 24/7 AI Socratic Tutor! 👋

I'm your dedicated AI study companion for **ClassConnect AI**. Instead of just giving away final answers, I help you understand the *why* and the *how* so you can excel in exams, interviews, and real-world projects.

**How would you like to begin today?**
- Ask for an explanation of any complex concept.
- Paste a tricky algorithm or code snippet you want to debug.
- Request active-recall practice questions on your current course topic.`,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const starterPrompts = [
    "Explain how React Server Components work in Next.js 15",
    "How does Dijkstra's Algorithm work with a Min-Heap?",
    "What is RAG and why use vector embeddings?",
    "Explain the difference between SQL and NoSQL for web apps",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const message = textToSend || inputMessage;
    if (!message.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      content: message,
      timestamp: new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format(new Date()),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          persona,
          topic: "Full-Stack Web & Computer Science",
        }),
      });

      const data = await response.json();
      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        content: data.reply || "I encountered an error processing your query. Please try again.",
        timestamp: new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format(new Date()),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackReply: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: "ai",
        content: "Network issue contacting the AI service. Please verify your connection or try again.",
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: "ai",
        content: "Chat history cleared. What topic or problem would you like to study next?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      {/* Top Header & Persona Selectors */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-indigo-400" />
            24/7 Socratic AI Tutor
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Powered by Google Gemini 1.5 Flash • Adaptive Socratic dialogue
          </p>
        </div>

        {/* Persona Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto">
          <button
            onClick={() => setPersona("SOCRATIC")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              persona === "SOCRATIC"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3 text-indigo-300" />
            Socratic
          </button>
          <button
            onClick={() => setPersona("CODE_MENTOR")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              persona === "CODE_MENTOR"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Code2 className="w-3 h-3 text-purple-300" />
            Code Guru
          </button>
          <button
            onClick={() => setPersona("CONCEPT_EXPLAINER")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              persona === "CONCEPT_EXPLAINER"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Lightbulb className="w-3 h-3 text-emerald-300" />
            Explainer
          </button>
          <button
            onClick={() => setPersona("EXAM_PREP")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              persona === "EXAM_PREP"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3 h-3 text-amber-300" />
            Exam Prep
          </button>
        </div>
      </div>

      {/* Main Chat Stream Container */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            {msg.sender === "user" ? (
              <div className="w-8 h-8 rounded-full overflow-hidden relative border border-indigo-500/40 shrink-0">
                <Image
                  src={student.avatarUrl}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-indigo-600/30">
                <Bot className="w-4 h-4" />
              </div>
            )}

            {/* Content Bubble */}
            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed space-y-2 relative group ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "glass-card text-slate-200 border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between gap-4 text-[10px] opacity-70 pb-1 border-b border-white/10 mb-1">
                <span className="font-semibold">
                  {msg.sender === "user" ? student.name : "Socratic AI Tutor"}
                </span>
                <span>{msg.timestamp}</span>
              </div>

              {/* Render message text with basic formatting */}
              <div className="whitespace-pre-wrap font-sans">
                {msg.content}
              </div>

              {msg.sender === "ai" && (
                <button
                  onClick={() => handleCopy(msg.content, msg.id)}
                  className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy response"
                >
                  {copiedId === msg.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shrink-0 animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-2 text-xs text-indigo-300 border-indigo-500/20">
              <Sparkles className="w-4 h-4 animate-spin text-indigo-400" />
              <span>Socratic Tutor is formulating insights...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starter Chips */}
      {messages.length < 3 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-400" /> Suggested:
          </span>
          {starterPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-850 px-3 py-1.5 rounded-xl border border-slate-800 whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input Box Footer */}
      <div className="pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Ask a question in ${persona.toLowerCase().replace("_", " ")} mode... (e.g. How does Dijkstra algorithm work?)`}
            disabled={isLoading}
            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl pl-4 pr-24 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-lg"
          />

          <div className="absolute right-2 flex items-center gap-1">
            <button
              type="button"
              onClick={clearChat}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !inputMessage.trim()}
              className="h-8 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs"
            >
              <Send className="w-3.5 h-3.5 mr-1" />
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
