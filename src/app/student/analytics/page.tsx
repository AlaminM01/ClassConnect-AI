"use client";

import {
  BarChart3,
  TrendingUp,
  Brain,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function StudentAnalyticsPage() {
  const weeklyHours = [
    { day: "Mon", hours: 2.5, percent: 65 },
    { day: "Tue", hours: 3.2, percent: 85 },
    { day: "Wed", hours: 1.8, percent: 45 },
    { day: "Thu", hours: 4.0, percent: 100 },
    { day: "Fri", hours: 3.5, percent: 90 },
    { day: "Sat", hours: 2.0, percent: 50 },
    { day: "Sun", hours: 1.5, percent: 40 },
  ];

  const topicMastery = [
    { name: "React 19 & Next.js 15 Server Components", score: 94, status: "Mastered", color: "bg-emerald-500" },
    { name: "PostgreSQL & Prisma ORM Schema Design", score: 88, status: "Proficient", color: "bg-indigo-500" },
    { name: "Algorithms & Shortest Path (Dijkstra/A*)", score: 71, status: "Needs Review", color: "bg-amber-500" },
    { name: "Cloud Architecture & Docker Containers", score: 62, status: "Foundational", color: "bg-purple-500" },
    { name: "Vector Embeddings & RAG Search", score: 85, status: "Proficient", color: "bg-cyan-500" },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-indigo-400" />
            Learning Analytics & Study Velocity
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Data-driven insights on syllabus retention, weekly study hours, and concept mastery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs text-emerald-400 border-emerald-500/30">
            Retention Rate: 91.2% 📈
          </Badge>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card p-5">
          <span className="text-xs font-semibold text-slate-400">Total Study Time</span>
          <p className="text-2xl font-black text-white mt-1">18.5 hrs</p>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.4 hrs vs last week
          </p>
        </Card>

        <Card className="glass-card p-5">
          <span className="text-xs font-semibold text-slate-400">Average Quiz Accuracy</span>
          <p className="text-2xl font-black text-white mt-1">87.4%</p>
          <p className="text-[11px] text-indigo-400 mt-1">Top 10% in cohort</p>
        </Card>

        <Card className="glass-card p-5">
          <span className="text-xs font-semibold text-slate-400">Active Flashcards</span>
          <p className="text-2xl font-black text-white mt-1">68 Cards</p>
          <p className="text-[11px] text-purple-400 mt-1">52 Mastered (76%)</p>
        </Card>

        <Card className="glass-card p-5">
          <span className="text-xs font-semibold text-slate-400">Assignment On-Time</span>
          <p className="text-2xl font-black text-white mt-1">100%</p>
          <p className="text-[11px] text-emerald-400 mt-1">3 of 3 submitted</p>
        </Card>
      </div>

      {/* Weekly Velocity Chart & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Weekly Study Velocity (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <Card className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Weekly Hours Spent (Mon - Sun)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">18.5 total study hours logged</p>
              </div>
              <span className="text-xs font-bold text-indigo-400 font-mono">Daily Target: 2.5h</span>
            </div>

            {/* Vertical Bar Chart Visualizer */}
            <div className="grid grid-cols-7 gap-3 items-end h-44 pt-4 px-2">
              {weeklyHours.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[10px] text-slate-400 font-mono">{item.hours}h</span>
                  <div className="w-full bg-slate-800 rounded-t-xl overflow-hidden h-32 flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-xl transition-all duration-500"
                      style={{ height: `${item.percent}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-300">{item.day}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Topic Mastery Breakdown */}
          <Card className="glass-card p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400" />
                Topic Mastery Index
              </h3>
              <span className="text-xs text-slate-400">Measured from AI Quizzes</span>
            </div>

            <div className="space-y-4 pt-2">
              {topicMastery.map((topic, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{topic.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-mono">{topic.score}%</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          topic.score >= 85
                            ? "bg-emerald-500/15 text-emerald-300"
                            : topic.score >= 70
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-purple-500/15 text-purple-300"
                        }`}
                      >
                        {topic.status}
                      </span>
                    </div>
                  </div>
                  <Progress value={topic.score} indicatorClassName={topic.color} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Rail: AI Study Plan & Weak Spot Actions (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="glass-card p-6 border-indigo-500/30 bg-indigo-950/20 space-y-4">
            <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
              <span>AI Personalized Action Plan</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Reinforce: Graph Theory (71%)</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Your last quiz showed hesitation between Dijkstra and Bellman-Ford negative edge handling.
              </p>
              <div className="pt-2">
                <Link href="/student/flashcards">
                  <Button variant="default" size="sm" className="w-full text-xs h-8 bg-indigo-600 hover:bg-indigo-500 font-semibold">
                    <Layers className="w-3.5 h-3.5 mr-1" /> Review Graph Flashcards
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Strength: Next.js 15 RSC (94%)</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Excellent performance in Server Actions and zero-bundle server logic. Ready for the Advanced RAG module!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
