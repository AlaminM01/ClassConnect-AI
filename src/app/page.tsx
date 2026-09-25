"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Bot,
  Sparkles,
  BookOpen,
  Trophy,
  ArrowRight,
  Flame,
  CheckCircle2,
  Layers,
  BarChart3,
  Shield,
  Zap,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher" | "ai">("student");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-3xl pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-nav border-b border-slate-800/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-all">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                ClassConnect <span className="text-indigo-400">AI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Virtual Classroom Ecosystem</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#role-showcase" className="hover:text-white transition-colors">Workspaces</a>
            <a href="#pedagogy" className="hover:text-white transition-colors">AI Pedagogy</a>
            <a href="#pricing" className="hover:text-white transition-colors">Free Tiers</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="text-xs text-slate-300 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/student">
              <Button variant="gradient" size="sm" className="text-xs font-semibold shadow-md shadow-indigo-600/25">
                Launch Platform <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next-Gen AI Classroom Powered by Google Gemini</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Notion</span> Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Duolingo</span> & ChatGPT for Education.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          ClassConnect AI unites course management, 24/7 Socratic AI tutoring, smart lecture notes, adaptive quizzes, and viral gamification into a unified, modern SaaS platform.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/student" className="w-full sm:w-auto">
            <Button variant="gradient" size="lg" className="w-full sm:w-auto font-bold text-sm px-8 shadow-xl shadow-indigo-600/30">
              <GraduationCap className="w-4 h-4 mr-2" />
              Launch Student Hub
            </Button>
          </Link>
          <Link href="/teacher" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-slate-300 border-slate-700 hover:bg-slate-900 text-sm">
              <Users className="w-4 h-4 mr-2 text-indigo-400" />
              Explore Faculty Studio
            </Button>
          </Link>
        </div>

        {/* Trust & Guarantee Pills */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free Tiers Across All Services
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant 1-Click Demo Login
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Credit Card Required
          </span>
        </div>
      </section>

      {/* Interactive Workspace Showcase */}
      <section id="role-showcase" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience Every Angle of the Platform</h2>
          <p className="text-sm text-slate-400">Select a workspace below to inspect tailored workflows for students, educators, and AI mentorship.</p>
          
          {/* Workspace Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-900 border border-slate-800 gap-1 mt-4">
            <button
              onClick={() => setActiveTab("student")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "student"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🎓 Student Command Center
            </button>
            <button
              onClick={() => setActiveTab("teacher")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "teacher"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🧑‍🏫 Faculty Management Studio
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "ai"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ✨ 24/7 Socratic AI Tutor
            </button>
          </div>
        </div>

        {/* Tab Showcase Cards */}
        <Card className="glass-card p-6 sm:p-8 border-indigo-500/20 bg-slate-900/60 shadow-2xl relative overflow-hidden">
          {activeTab === "student" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <Badge variant="outline" className="text-indigo-400 border-indigo-500/30 mb-1">
                    Student Experience
                  </Badge>
                  <h3 className="text-lg font-bold text-white">Daily Gamified Study Routine</h3>
                  <p className="text-xs text-slate-400">Track streaks, earn XP, complete lessons, and conquer campus leaderboards.</p>
                </div>
                <Link href="/student">
                  <Button variant="gradient" size="sm" className="text-xs font-semibold">
                    Open Student Dashboard <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Study Streak</span>
                    <Flame className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-2xl font-black text-amber-400">12 Days 🔥</p>
                  <p className="text-[11px] text-slate-400">Top 5% consistency on campus</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Mastery Level</span>
                    <Trophy className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-2xl font-black text-white">Level 4 (2,450 XP)</p>
                  <p className="text-[11px] text-indigo-300">+50 XP awarded per completed module</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Active Courses</span>
                    <BookOpen className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-2xl font-black text-purple-400">3 In Progress</p>
                  <p className="text-[11px] text-slate-400">Full-Stack AI, Rust & Algorithms</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "teacher" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <Badge variant="outline" className="text-indigo-400 border-indigo-500/30 mb-1">
                    Faculty Studio
                  </Badge>
                  <h3 className="text-lg font-bold text-white">Curriculum Management & Early Diagnostics</h3>
                  <p className="text-xs text-slate-400">Identify at-risk students before exams with AI-assisted learning telemetry.</p>
                </div>
                <Link href="/teacher">
                  <Button variant="gradient" size="sm" className="text-xs font-semibold">
                    Open Faculty Studio <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Active Students</span>
                    <Users className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-black text-emerald-400">128 Enrolled</p>
                  <p className="text-[11px] text-slate-400">92% average syllabus completion</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">AI Early-Warning Alert</span>
                    <Zap className="w-4 h-4 text-rose-400" />
                  </div>
                  <p className="text-sm font-bold text-rose-300">3 Students Struggling</p>
                  <p className="text-[11px] text-slate-400">Identified on &quot;Async Concurrency&quot; module</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Course Creation</span>
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-2xl font-black text-indigo-400">Studio Modal</p>
                  <p className="text-[11px] text-slate-400">Upload syllabus, add videos, & trigger quizzes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <Badge variant="outline" className="text-indigo-400 border-indigo-500/30 mb-1">
                    AI Pedagogical Engine
                  </Badge>
                  <h3 className="text-lg font-bold text-white">4 Specialized AI Mentor Personas</h3>
                  <p className="text-xs text-slate-400">Socratic guidance, code reviews, deep conceptual breakdowns, and rapid exam preparation.</p>
                </div>
                <Link href="/student/ai-tutor">
                  <Button variant="gradient" size="sm" className="text-xs font-semibold">
                    Chat with AI Tutor <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-1">
                  <div className="text-xs font-bold text-indigo-300">🏛️ Socratic Mentor</div>
                  <p className="text-[11px] text-slate-400">Guides with probing questions instead of spoon-feeding answers.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1">
                  <div className="text-xs font-bold text-purple-300">💻 Code Guru</div>
                  <p className="text-[11px] text-slate-400">Reviews code syntax, fixes runtime bugs, and explains complexity.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                  <div className="text-xs font-bold text-emerald-300">💡 Concept Explainer</div>
                  <p className="text-[11px] text-slate-400">Breaks down complex academic topics with intuitive real-world metaphors.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                  <div className="text-xs font-bold text-amber-300">🎯 Exam Prep</div>
                  <p className="text-[11px] text-slate-400">Generates rapid-fire practice drills, cheat-sheets, and high-yield questions.</p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </section>

      {/* Feature Deep Dive Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="gradient" className="text-[10px] font-bold uppercase tracking-wider">
            Enterprise Feature Suite
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Built for High-Performance Learning</h2>
          <p className="text-xs sm:text-sm text-slate-400">Everything needed to transform passive online lectures into an engaging, sticky learning journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-indigo-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">24/7 Socratic AI Tutor</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Never get stuck on homework or code again. Intelligent tutoring with multi-turn memory, starter prompts, and formatted code blocks.
            </p>
            <Link href="/student/ai-tutor" className="text-xs text-indigo-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              Launch AI Tutor <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Card 2 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-purple-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Notion-Grade AI Notes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Feed lecture transcripts or topics into the synthesis engine to receive structured markdown notes, key takeaways, and study checklists.
            </p>
            <Link href="/student/notes" className="text-xs text-purple-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              Generate Notes <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Card 3 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-emerald-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Adaptive Quizzes & 3D Flashcards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Active-recall memory systems. 3D card flips with confidence sorting, and multiple-choice quizzes that explain the rationale for every option.
            </p>
            <Link href="/student/quiz" className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              Test Knowledge <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Card 4 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-amber-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Duolingo Gamification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Daily study streaks, level badges, achievement unlocks, and full-screen confetti animations that make learning genuinely addictive.
            </p>
            <Link href="/student/gamification" className="text-xs text-amber-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              View Leaderboard <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Card 5 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-blue-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Study Velocity Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visual velocity charts track hours committed, topic mastery index, and exam readiness scores updated automatically after every lesson.
            </p>
            <Link href="/student/analytics" className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              Inspect Analytics <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Card 6 */}
          <Card className="glass-card p-6 border-slate-800 hover:border-pink-500/40 transition-all space-y-3 group">
            <div className="w-10 h-10 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Role-Based Access Control</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seamlessly switch between Student, Faculty, and Admin personas with a single click. Ideal for live demonstrations, reviews, and hackathons.
            </p>
            <Link href="/dashboard" className="text-xs text-pink-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
              Enter Dashboard <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>
        </div>
      </section>

      {/* Zero Cost Assurance Banner */}
      <section id="pricing" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900/80 border border-indigo-500/30 text-center space-y-4 shadow-2xl">
          <Badge variant="gradient" className="text-[10px] font-bold uppercase tracking-wider">
            Open & Free Deployment
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            100% Free Forever Tiers. Zero Surprise Bills.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Every component in ClassConnect AI is engineered around generous free tiers: Google Gemini 1.5 Flash (1500 req/day free), Vercel serverless hosting, and Neon/Supabase PostgreSQL.
          </p>
          <div className="pt-2">
            <Link href="/student">
              <Button variant="gradient" size="lg" className="font-bold text-xs px-8 shadow-lg shadow-indigo-600/25">
                Start Learning Now — It&apos;s Free! 🚀
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-white">ClassConnect AI</span>
          <span>— Intelligent Virtual Classroom Ecosystem</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/student" className="hover:text-white transition-colors">Student</Link>
          <Link href="/teacher" className="hover:text-white transition-colors">Teacher</Link>
          <a
            href="https://github.com/AlaminM01/ClassConnect-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            GitHub Repository
          </a>
        </div>
      </footer>
    </div>
  );
}
