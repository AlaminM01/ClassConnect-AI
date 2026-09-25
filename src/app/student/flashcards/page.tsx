"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  RotateCw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_FLASHCARDS } from "@/lib/mock-data";
import { FlashcardItem } from "@/lib/types";

export default function FlashcardsPage() {
  const [cards, setCards] = useState<FlashcardItem[]>(MOCK_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredMap, setMasteredMap] = useState<Record<string, boolean>>({
    "fc-1": true,
    "fc-3": true,
  });
  const [earnedXP, setEarnedXP] = useState(false);

  const currentCard = cards[currentIndex];
  const totalCards = cards.length;
  const masteredCount = Object.values(masteredMap).filter(Boolean).length;
  const progressPercent = Math.round((masteredCount / totalCards) * 100);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleMarkMastered = (mastered: boolean) => {
    setMasteredMap({ ...masteredMap, [currentCard.id]: mastered });
    if (mastered) {
      setEarnedXP(true);
      setTimeout(() => setEarnedXP(false), 2500);
    }
    handleNext();
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <Layers className="w-7 h-7 text-emerald-400" />
            Active-Recall Flashcards
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Retain algorithms, system architectures, and syntax with spaced-repetition testing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {earnedXP && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold animate-bounce">
              <Award className="w-3.5 h-3.5" />
              <span>+20 XP Mastered!</span>
            </div>
          )}
          <div className="w-32 text-right">
            <div className="flex justify-between text-[11px] text-slate-300 mb-1 font-semibold">
              <span>Deck Mastery</span>
              <span className="text-emerald-400">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Flashcard Stage */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Badge variant="outline" className="text-indigo-400 border-indigo-500/30">
            Card {currentIndex + 1} of {totalCards}
          </Badge>
          <span className="text-slate-400">Click card or space to flip</span>
        </div>

        {/* 3D Flip Card Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative min-h-[300px] sm:min-h-[340px] w-full rounded-3xl cursor-pointer select-none perspective-1000 group transition-all"
        >
          <Card
            className={`glass-card w-full h-full min-h-[300px] sm:min-h-[340px] p-8 sm:p-12 flex flex-col justify-between border-slate-700/80 transition-all duration-300 ${
              isFlipped
                ? "bg-slate-900/90 border-indigo-500/40 shadow-2xl shadow-indigo-600/10"
                : "bg-slate-900/60 hover:border-slate-600"
            }`}
          >
            {/* Card Header Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                {isFlipped ? "Answer / Explanation" : "Prompt / Concept Question"}
              </span>

              <div className="flex items-center gap-2">
                {masteredMap[currentCard.id] && (
                  <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30">
                    Mastered
                  </Badge>
                )}
                <span className="p-1 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
                  <RotateCw className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card Center Content */}
            <div className="my-auto py-6 text-center">
              <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                {isFlipped ? currentCard.back : currentCard.front}
              </h3>
            </div>

            {/* Card Footer Hint */}
            <div className="text-center text-[11px] text-slate-500">
              {isFlipped ? "Click anywhere to flip back to question" : "Click anywhere to reveal answer"}
            </div>
          </Card>
        </div>

        {/* Navigation & Mastery Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="sm"
              className="h-9 px-3 text-xs"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="sm"
              className="h-9 px-3 text-xs"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              onClick={() => handleMarkMastered(false)}
              variant="outline"
              size="sm"
              className="h-9 px-4 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border-rose-500/30 font-semibold"
            >
              <XCircle className="w-4 h-4 mr-1.5" />
              Still Reviewing
            </Button>
            <Button
              onClick={() => handleMarkMastered(true)}
              variant="emerald"
              size="sm"
              className="h-9 px-4 text-xs font-semibold shadow-md shadow-emerald-600/30"
            >
              <CheckCircle2 className="w-4 h-4 mr-1.5" />
              Mastered (+20 XP)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
