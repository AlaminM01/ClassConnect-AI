"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Brain,
  Clock,
  Layers,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_QUIZ_QUESTIONS } from "@/lib/mock-data";
import { QuizQuestionItem } from "@/lib/types";

export default function AIQuizPage() {
  const [topicInput, setTopicInput] = useState("React Server Components & Next.js 15");
  const [difficulty, setDifficulty] = useState<"BEGINNER" | "INTERMEDIATE" | "ADVANCED">("INTERMEDIATE");
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [questions, setQuestions] = useState<QuizQuestionItem[]>(MOCK_QUIZ_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const sampleTopics = [
    "Next.js 15 & Server Components",
    "Dijkstra Shortest Path & Graphs",
    "RAG & Vector Embeddings",
    "PostgreSQL ACID Transactions",
  ];

  const handleGenerateQuiz = async (topicToUse?: string) => {
    const topic = topicToUse || topicInput;
    if (!topic.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty }),
      });
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setCurrentIndex(0);
        setSelectedAnswers({});
        setShowExplanation(false);
        setScore(0);
        setQuizStarted(true);
        setQuizCompleted(false);
      }
    } catch (err) {
      console.error("Quiz error:", err);
      // Fallback to local questions
      setQuestions(MOCK_QUIZ_QUESTIONS);
      setQuizStarted(true);
      setQuizCompleted(false);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentIndex] !== undefined) return; // Already answered

    const isCorrect = optionIndex === questions[currentIndex].correctIndex;
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optionIndex });
    setShowExplanation(true);
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <HelpCircle className="w-7 h-7 text-indigo-400" />
            AI Adaptive Quiz Engine
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Generate custom syllabus quizzes on demand to verify mastery and earn bonus XP.
          </p>
        </div>
      </div>

      {/* Generator Prompt Box (when quiz not active) */}
      {!quizStarted && (
        <Card className="glass-card p-6 sm:p-8 space-y-5 border-indigo-500/20 bg-indigo-950/15">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            <span>Generate Adaptive Quiz</span>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">
                Topic or Exam Syllabus Concept
              </label>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="e.g. Transformers & Self-Attention..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">
                Difficulty Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["BEGINNER", "INTERMEDIATE", "ADVANCED"] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setDifficulty(lvl)}
                    className={`py-2 px-3 rounded-xl font-semibold border transition-all ${
                      difficulty === lvl
                        ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-400 font-semibold">Popular Topics:</span>
              {sampleTopics.map((top, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTopicInput(top);
                    handleGenerateQuiz(top);
                  }}
                  className="text-[11px] text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  {top}
                </button>
              ))}
            </div>

            <div className="pt-3">
              <Button
                onClick={() => handleGenerateQuiz()}
                disabled={isGenerating || !topicInput.trim()}
                variant="gradient"
                className="w-full font-semibold shadow-lg shadow-indigo-600/25"
              >
                {isGenerating ? "Synthesizing AI Quiz..." : "Start AI Diagnostic Quiz ✨"}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Active Quiz Player Stage */}
      {quizStarted && !quizCompleted && currentQ && (
        <Card className="glass-card p-6 sm:p-8 space-y-6 border-indigo-500/30">
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-indigo-400 border-indigo-500/30">
                Question {currentIndex + 1} of {questions.length}
              </Badge>
              <span className="text-slate-400 font-medium">Difficulty: {difficulty}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px] bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Score: {score}/{currentIndex + (selectedAnswers[currentIndex] !== undefined ? 1 : 0)}</span>
              </div>
            </div>
          </div>

          <Progress value={progressPercent} className="h-1.5" />

          {/* Question Text */}
          <div className="py-2">
            <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const hasAnswered = selectedAnswers[currentIndex] !== undefined;
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let optionStyle =
                "bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700";

              if (hasAnswered) {
                if (isCorrect) {
                  optionStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-200 font-semibold";
                } else if (isSelected && !isCorrect) {
                  optionStyle = "bg-rose-500/20 border-rose-500/60 text-rose-200 font-semibold";
                } else {
                  optionStyle = "bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-[10px] shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation && (
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 space-y-1.5 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 font-bold text-indigo-300">
                <Brain className="w-4 h-4 text-indigo-400" />
                <span>Conceptual Rationale</span>
              </div>
              <p className="leading-relaxed text-slate-300">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next / Submit Footer */}
          {selectedAnswers[currentIndex] !== undefined && (
            <div className="pt-2 flex justify-end">
              <Button
                onClick={handleNext}
                variant="gradient"
                size="sm"
                className="font-semibold text-xs px-6 shadow-md"
              >
                {currentIndex < questions.length - 1 ? (
                  <span className="flex items-center gap-1.5">
                    Next Question <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    View Results <Award className="w-3.5 h-3.5" />
                  </span>
                )}
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Quiz Results Screen */}
      {quizCompleted && (
        <Card className="glass-card p-8 sm:p-10 text-center space-y-6 border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-slate-900/60 shadow-2xl">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto shadow-xl shadow-amber-500/20">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <Badge variant="gradient" className="text-xs font-bold uppercase tracking-wider">
              Quiz Completed!
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {score} / {questions.length} Correct
            </h2>
            <p className="text-sm text-slate-300">
              {score === questions.length
                ? "Flawless Performance! You demonstrated complete conceptual mastery. 🎯"
                : score >= questions.length / 2
                ? "Great effort! Review the flashcards below to solidify the missed concepts. 💡"
                : "Good diagnostic attempt! Dive into the AI Socratic Tutor to master this topic. 📚"}
            </p>
          </div>

          {/* XP Reward Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>+{score * 50 + 50} XP Awarded to your Profile!</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-800">
            <Button
              onClick={() => {
                setQuizStarted(false);
                setQuizCompleted(false);
              }}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Practice Another Topic
            </Button>
            <Link href="/student/flashcards">
              <Button variant="outline" size="sm" className="text-xs">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                Review Flashcards
              </Button>
            </Link>
            <Link href="/student/ai-tutor">
              <Button variant="default" size="sm" className="text-xs bg-indigo-600 hover:bg-indigo-500 font-semibold">
                <Bot className="w-3.5 h-3.5 mr-1.5" />
                Ask Socratic AI
              </Button>
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
}
