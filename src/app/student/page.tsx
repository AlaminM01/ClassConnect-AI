"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Star,
  Play,
  ArrowRight,
  Sparkles,
  Bot,
  BookOpen,
  CalendarCheck,
  Trophy,
  Brain,
  Layers,
  Clock,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  MOCK_STUDENT,
  MOCK_COURSES,
  MOCK_ASSIGNMENTS,
  MOCK_LEADERBOARD,
} from "@/lib/mock-data";
import { getLevelProgress } from "@/lib/utils";

export default function StudentDashboard() {
  const student = MOCK_STUDENT;
  const levelInfo = getLevelProgress(student.xp);
  const activeCourse = MOCK_COURSES[0];

  return (
    <div className="space-y-8">
      {/* 1. Personalized Greeting Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-indigo-500/20 p-6 sm:p-8 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>AI Study Companion Active</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, {student.name.split(" ")[0]}! 🚀
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              You are currently on a <span className="text-amber-400 font-bold">{student.currentStreak}-day study streak</span>! Complete today&apos;s AI quiz or flashcard review to maintain your bonus XP multiplier.
            </p>

            {/* Quick Action Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Link href="/student/ai-tutor">
                <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-500 font-medium">
                  <Bot className="w-4 h-4 mr-1.5" />
                  Ask Socratic AI
                </Button>
              </Link>
              <Link href="/student/quiz">
                <Button variant="outline" size="sm" className="text-xs">
                  <Brain className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                  Practice AI Quiz
                </Button>
              </Link>
              <Link href="/student/flashcards">
                <Button variant="outline" size="sm" className="text-xs">
                  <Layers className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  Review Flashcards
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Streak Card Mini */}
          <div className="shrink-0 flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-8 h-8 fill-amber-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white">{student.currentStreak}</span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Days</span>
              </div>
              <p className="text-xs text-slate-400">Top 5% on campus</p>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400">
                <TrendingUp className="w-3 h-3" />
                <span>+50 bonus XP today</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Stat Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Enrolled Courses</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">3 Courses</p>
          <p className="text-xs text-slate-400 mt-1">68% overall syllabus progress</p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">XP & Rank</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Star className="w-4 h-4 fill-purple-400" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">{student.xp.toLocaleString()} XP</p>
          <p className="text-xs text-purple-400 mt-1 font-medium">Level {student.level} Scholar</p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Pending Homework</span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">1 Due Soon</p>
          <p className="text-xs text-rose-300 mt-1">Due tomorrow, 11:59 PM</p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Leaderboard Rank</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">#2 on Campus</p>
          <p className="text-xs text-amber-300 mt-1 font-medium">Top 3 Weekly Podium</p>
        </Card>
      </div>

      {/* 3. Main Split View: Left Column (Courses & Continue Learning) / Right Column (Gamification & Deadlines) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning Spotlight Hero */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                Continue Learning
              </h2>
              <Link href="/student/courses" className="text-xs font-semibold text-indigo-400 hover:underline flex items-center gap-1">
                View all courses <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <Card className="glass-card overflow-hidden border-indigo-500/30 p-0">
              <div className="grid sm:grid-cols-12 gap-0">
                <div className="sm:col-span-5 relative min-h-[180px] sm:min-h-full">
                  <Image
                    src={activeCourse.thumbnailUrl}
                    alt={activeCourse.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-slate-950/90" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="gradient" className="text-[10px] font-bold">
                      IN PROGRESS
                    </Badge>
                  </div>
                </div>

                <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                      {activeCourse.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {activeCourse.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Lesson 4: Streaming LLM Responses & Server Actions with Next.js 15
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-300 font-medium">
                      <span>Course Completion</span>
                      <span className="text-indigo-400 font-bold">{activeCourse.progressPercent}%</span>
                    </div>
                    <Progress value={activeCourse.progressPercent || 0} />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>15 min remaining</span>
                    </div>
                    <Link href={`/student/courses/${activeCourse.slug}`}>
                      <Button variant="default" size="sm" className="font-semibold shadow-md">
                        Resume Lesson
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enrolled Courses Grid */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              My Enrolled Courses
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {MOCK_COURSES.map((course) => (
                <Card key={course.id} className="glass-card flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-3">
                    <div className="relative h-36 w-full rounded-xl overflow-hidden">
                      <Image
                        src={course.thumbnailUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-[10px] bg-slate-900/80 backdrop-blur-md">
                          {course.level}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">
                        {course.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] text-slate-300">
                        <span>Progress</span>
                        <span className="font-bold text-indigo-400">{course.progressPercent}%</span>
                      </div>
                      <Progress value={course.progressPercent || 0} />
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative">
                          <Image
                            src={course.teacherAvatar}
                            alt={course.teacherName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-slate-400 text-[11px] truncate max-w-[100px]">
                          {course.teacherName}
                        </span>
                      </div>
                      <Link href={`/student/courses/${course.slug}`}>
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-indigo-400 hover:text-white px-2">
                          Enter Class
                          <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Rail (1 Col): Gamification, Deadlines, AI Study Suggestions */}
        <div className="space-y-6">
          {/* Level Progress & XP Milestone Widget */}
          <Card className="glass-card p-5 border-indigo-500/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black text-xs">
                  {levelInfo.level}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Level {levelInfo.level} Scholar</h4>
                  <p className="text-[10px] text-slate-400">{levelInfo.currentXP} / {levelInfo.nextLevelXP} XP to Level {levelInfo.level + 1}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[10px] text-indigo-400 border-indigo-500/30">
                +15% XP Boost
              </Badge>
            </div>
            <Progress value={levelInfo.percent} className="h-2.5" />
          </Card>

          {/* 7-Day Study Streak Tracker */}
          <Card className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h4 className="text-xs font-bold text-white">Weekly Study Streak</h4>
              </div>
              <span className="text-xs font-bold text-amber-400">{student.currentStreak} Days 🔥</span>
            </div>

            {/* Streak day indicators */}
            <div className="grid grid-cols-7 gap-1.5 py-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => {
                const isCompleted = idx < 5;
                const isToday = idx === 4;

                return (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 font-semibold">{day}</span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        isCompleted
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : isToday
                          ? "bg-indigo-600 text-white animate-pulse"
                          : "bg-slate-800 text-slate-500 border border-slate-700/50"
                      }`}
                    >
                      {isCompleted ? <Flame className="w-4 h-4 fill-amber-400" /> : day}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Complete a 5-min lesson today to keep your streak alive!
            </p>
          </Card>

          {/* Upcoming Assignments Due */}
          <Card className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-rose-400" />
                Upcoming Homework
              </h4>
              <Link href="/student/assignments" className="text-[10px] text-indigo-400 hover:underline">
                View all
              </Link>
            </div>

            <div className="space-y-2.5">
              {MOCK_ASSIGNMENTS.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-slate-200 line-clamp-1">
                      {assignment.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{assignment.courseTitle}</p>
                    <p className="text-[10px] text-amber-300 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {assignment.dueDate}
                    </p>
                  </div>
                  <Badge
                    variant={
                      assignment.status === "GRADED"
                        ? "success"
                        : assignment.status === "SUBMITTED"
                        ? "secondary"
                        : "warning"
                    }
                    className="text-[9px] shrink-0 uppercase"
                  >
                    {assignment.status === "GRADED" ? `Graded (${assignment.grade}%)` : assignment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Campus Leaderboard Podium */}
          <Card className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                Campus Leaderboard
              </h4>
              <Link href="/student/gamification" className="text-[10px] text-amber-400 hover:underline">
                Full Rankings
              </Link>
            </div>

            <div className="space-y-2">
              {MOCK_LEADERBOARD.slice(0, 4).map((entry) => (
                <div
                  key={entry.userId}
                  className={`p-2.5 rounded-xl flex items-center justify-between text-xs transition-colors ${
                    entry.isCurrentUser
                      ? "bg-indigo-600/20 border border-indigo-500/40 text-indigo-200"
                      : "bg-slate-900/40 border border-slate-800/60 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        entry.rank === 1
                          ? "bg-amber-400 text-slate-950"
                          : entry.rank === 2
                          ? "bg-slate-300 text-slate-950"
                          : entry.rank === 3
                          ? "bg-amber-700 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {entry.rank}
                    </span>
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-slate-700">
                      <Image
                        src={entry.avatarUrl}
                        alt={entry.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-semibold text-slate-200 truncate max-w-[90px]">
                      {entry.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400">
                    {entry.xp.toLocaleString()} XP
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
