"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BookOpen,
  CalendarCheck,
  BarChart3,
  Plus,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  UploadCloud,
  FileCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_TEACHER, MOCK_COURSES } from "@/lib/mock-data";

export default function TeacherDashboard() {
  const teacher = MOCK_TEACHER;
  const [deployedPack, setDeployedPack] = useState(false);

  const pendingSubmissions = [
    {
      id: "sub-1",
      studentName: "Alex Chen",
      studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      assignment: "Build a Streaming AI Chatbot with Server Actions",
      course: "Full-Stack AI Engineering",
      submittedAt: "10 mins ago",
      status: "NEEDS_GRADING",
    },
    {
      id: "sub-2",
      studentName: "Sophia Martinez",
      studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      assignment: "Implement Dijkstra's & A* Shortest Path",
      course: "Data Structures & Algorithms",
      submittedAt: "45 mins ago",
      status: "NEEDS_GRADING",
    },
    {
      id: "sub-3",
      studentName: "Liam O'Connor",
      studentAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      assignment: "Containerize PostgreSQL Service",
      course: "Cloud Native Architecture",
      submittedAt: "2 hours ago",
      status: "NEEDS_GRADING",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Instructor Banner & Quick Actions */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-500/20 p-6 sm:p-8 bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-slate-900/60 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Faculty AI Assistant Active</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {teacher.name} 🎓
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              {teacher.headline}. You have <span className="text-purple-300 font-bold">4,620 active students</span> across 3 courses with 8 pending assignments to review.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-500 font-medium">
                <Plus className="w-4 h-4 mr-1.5" />
                Create New Course
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <CalendarCheck className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
                Add Assignment
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <HelpCircle className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                Generate AI Quiz
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <UploadCloud className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                Upload PDF/Video
              </Button>
            </div>
          </div>

          {/* Teacher Profile Card Mini */}
          <div className="shrink-0 flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <div className="w-14 h-14 rounded-2xl overflow-hidden relative border border-purple-500/40">
              <Image
                src={teacher.avatarUrl}
                alt={teacher.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{teacher.name}</p>
              <p className="text-xs text-purple-400">Stanford CS Faculty</p>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Educator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Metric Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Total Enrolled Students</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">4,620</p>
          <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +14% this month
          </p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Active Courses</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">3 Live</p>
          <p className="text-xs text-slate-400 mt-1">19 Modules • 104 Lessons</p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Pending Review</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">8 Submissions</p>
          <p className="text-xs text-amber-300 mt-1">Average grading time: 4m</p>
        </Card>

        <Card className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400">Cohort Mastery</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-white">88.5%</p>
          <p className="text-xs text-emerald-400 mt-1 font-medium">94.8% submission rate</p>
        </Card>
      </div>

      {/* 3. Main Split View: Left (Course Studio Matrix) / Right (AI Diagnostics & Grading Queue) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Course Management Studio */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Course Studio & Curricula
              </h2>
              <span className="text-xs text-slate-400 font-medium">3 of 3 Published</span>
            </div>

            <div className="space-y-4">
              {MOCK_COURSES.map((course) => (
                <Card key={course.id} className="glass-card p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-700/60">
                        <Image
                          src={course.thumbnailUrl}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                            {course.category}
                          </span>
                          <Badge variant="outline" className="text-[9px] text-emerald-400 border-emerald-500/30">
                            Published
                          </Badge>
                        </div>
                        <h3 className="text-sm font-bold text-white mt-1">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {course.modulesCount} Modules • {course.lessonsCount} Lessons • {course.enrolledStudentsCount.toLocaleString()} Students
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <Button variant="outline" size="sm" className="text-xs h-8">
                        Edit Syllabus
                      </Button>
                      <Button variant="default" size="sm" className="text-xs h-8 bg-purple-600 hover:bg-purple-500">
                        Manage Class
                      </Button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-4">
                      <span>Completion Rate: <strong className="text-slate-200">76%</strong></span>
                      <span>Avg Quiz Score: <strong className="text-purple-300">89.2%</strong></span>
                    </div>
                    <Link href={`/teacher/courses/${course.slug}`} className="text-purple-400 hover:underline flex items-center gap-1 font-medium">
                      View Roster <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Pending Grading Queue */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                Recent Submissions Awaiting Review
              </h2>
              <span className="text-xs text-amber-400 font-semibold">8 in queue</span>
            </div>

            <Card className="glass-card p-0 overflow-hidden">
              <div className="divide-y divide-slate-800">
                {pendingSubmissions.map((sub) => (
                  <div key={sub.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-850/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0 border border-slate-700">
                        <Image
                          src={sub.studentAvatar}
                          alt={sub.studentName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{sub.studentName}</p>
                        <p className="text-xs text-slate-300 line-clamp-1">{sub.assignment}</p>
                        <p className="text-[10px] text-slate-500">{sub.course} • {sub.submittedAt}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="outline" size="sm" className="h-8 text-xs">
                        Review Code
                      </Button>
                      <Button variant="default" size="sm" className="h-8 text-xs bg-purple-600 hover:bg-purple-500">
                        Grade
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Rail (1 Col): AI Cohort Early Warning & Diagnostics */}
        <div className="space-y-6">
          {/* AI Cohort Diagnostics Card */}
          <Card className="glass-card p-5 border-purple-500/30 bg-purple-950/15">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">AI Cohort Diagnostic</h4>
                  <p className="text-[10px] text-purple-300">Real-time Concept Tracking</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[9px] text-purple-400 border-purple-500/30">
                Live Alert
              </Badge>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Topic Struggle Detected: Graph Traversals</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  4 students scored below 65% on question #3 (Dijkstra vs A* heuristics) in yesterday&apos;s pop quiz.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-purple-900/20 border border-purple-500/20 text-[11px] text-purple-200">
                💡 <strong>AI Recommendation:</strong> Deploy targeted 4-card review deck and 15-minute concept review quiz before next week&apos;s exam.
              </div>

              <Button
                variant={deployedPack ? "emerald" : "default"}
                size="sm"
                onClick={() => setDeployedPack(true)}
                className={`w-full text-xs font-semibold ${deployedPack ? "" : "bg-purple-600 hover:bg-purple-500"}`}
              >
                {deployedPack ? (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> AI Revision Pack Sent to 4 Students!
                  </span>
                ) : (
                  "Deploy AI Revision Pack (1-Click)"
                )}
              </Button>
            </div>
          </Card>

          {/* Quick Attendance Session Launcher */}
          <Card className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-400" />
                Live Attendance Session
              </h4>
              <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30">
                Ready
              </Badge>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              Generate a temporary 4-digit code or QR code for today&apos;s lecture to record student attendance automatically.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1 mb-3">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Active Session Code</span>
              <p className="text-3xl font-mono font-black text-indigo-400 tracking-widest">7842</p>
              <p className="text-[10px] text-slate-400">Expires in 18 minutes • 42 checked in</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Lecture Attendance</span>
                <span className="font-bold text-emerald-400">89.4% (42/47)</span>
              </div>
              <Progress value={89.4} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
