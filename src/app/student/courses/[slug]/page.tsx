"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BookOpen,
  ArrowLeft,
  CheckCircle,
  Play,
  FileText,
  Bot,
  Sparkles,
  Download,
  Share2,
  ChevronRight,
  Flame,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_COURSES } from "@/lib/mock-data";

export default function CoursePlayerPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = MOCK_COURSES.find((c) => c.slug === slug) || MOCK_COURSES[0];

  const syllabus = [
    {
      moduleTitle: "Module 1: Foundations of Modern AI Architecture",
      lessons: [
        { id: "l1", title: "1. Evolution from RNNs to Transformers", duration: "12 min", completed: true },
        { id: "l2", title: "2. Attention Mechanism & Latent Space", duration: "18 min", completed: true },
        { id: "l3", title: "3. Vector Embeddings & Similarity Metric", duration: "15 min", completed: true },
      ],
    },
    {
      moduleTitle: "Module 2: Server Actions & Streaming in Next.js 15",
      lessons: [
        { id: "l4", title: "4. Streaming UI with Server Actions & Gemini", duration: "22 min", completed: false },
        { id: "l5", title: "5. Optimistic UI Updates & Error Rollbacks", duration: "16 min", completed: false },
        { id: "l6", title: "6. Zero-Config PostgreSQL Schema with Prisma", duration: "25 min", completed: false },
      ],
    },
    {
      moduleTitle: "Module 3: Production RAG Pipelines",
      lessons: [
        { id: "l7", title: "7. Chunking Strategies & Hybrid Search", duration: "20 min", completed: false },
        { id: "l8", title: "8. Deploying to Edge & Serverless Clusters", duration: "30 min", completed: false },
      ],
    },
  ];

  const [activeLessonId, setActiveLessonId] = useState("l4");
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({
    l1: true,
    l2: true,
    l3: true,
  });
  const [activeTab, setActiveTab] = useState<"notes" | "ai" | "resources">("notes");
  const [earnedXP, setEarnedXP] = useState(false);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const isNowCompleted = !prev[lessonId];
      if (isNowCompleted) {
        setEarnedXP(true);
        setTimeout(() => setEarnedXP(false), 3000);
      }
      return { ...prev, [lessonId]: isNowCompleted };
    });
  };

  const currentLesson =
    syllabus.flatMap((m) => m.lessons).find((l) => l.id === activeLessonId) ||
    syllabus[1].lessons[0];

  const totalLessons = syllabus.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Course Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/student/courses">
            <Button variant="outline" size="sm" className="h-8 px-2 text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Catalog
            </Button>
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              {course.title}
            </h1>
            <p className="text-xs text-slate-400">
              Instructor: <span className="text-indigo-300 font-semibold">{course.teacherName}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          {earnedXP && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold animate-bounce">
              <Award className="w-3.5 h-3.5" />
              <span>+50 XP Earned!</span>
            </div>
          )}
          <div className="w-36 text-right">
            <div className="flex justify-between text-[11px] text-slate-300 mb-1 font-semibold">
              <span>Course Progress</span>
              <span className="text-indigo-400">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Split Grid: Left Player Stage & Notes (2 Cols) / Right Syllabus Sidebar (1 Col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Video / Content Stage (8 Cols) */}
        <div className="lg:col-span-8 space-y-5">
          {/* Virtual Classroom Video Stage */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col justify-between p-6">
            <div className="flex items-center justify-between z-10">
              <Badge variant="gradient" className="text-xs font-bold">
                {currentLesson.title}
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
                  <Play className="w-3 h-3 text-indigo-400 fill-indigo-400" /> 1080p 60fps
                </span>
              </div>
            </div>

            {/* Stage Center Graphic */}
            <div className="text-center my-auto z-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 mx-auto shadow-xl shadow-indigo-600/30 hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-8 h-8 fill-indigo-400 ml-1" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Click to Start Video Lecture ({currentLesson.duration})
              </p>
              <p className="text-xs text-slate-500">
                Interactive transcript and AI Socratic checkpoints enabled
              </p>
            </div>

            {/* Stage Footer Controls */}
            <div className="flex items-center justify-between z-10 pt-2 border-t border-slate-800/80">
              <span className="text-xs text-slate-400">Duration: {currentLesson.duration}</span>
              <Button
                variant={completedLessons[currentLesson.id] ? "emerald" : "default"}
                size="sm"
                onClick={() => toggleLessonCompletion(currentLesson.id)}
                className="text-xs font-semibold"
              >
                <CheckCircle className="w-4 h-4 mr-1.5" />
                {completedLessons[currentLesson.id] ? "Completed (Earned 50 XP)" : "Mark as Completed (+50 XP)"}
              </Button>
            </div>
          </div>

          {/* Interactive Lesson Tabs (Notes, AI Q&A, Resources) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <button
                onClick={() => setActiveTab("notes")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === "notes"
                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
                Smart Lesson Notes
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === "ai"
                    ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Bot className="w-4 h-4 text-purple-400" />
                Ask Socratic AI
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === "resources"
                    ? "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Download className="w-4 h-4" />
                Lecture Slides & Code
              </button>
            </div>

            {/* Tab 1: Smart Notes */}
            {activeTab === "notes" && (
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-sm font-bold text-white">AI-Generated Key Takeaways</h3>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-indigo-400 border-indigo-500/30">
                    Notion Markdown
                  </Badge>
                </div>

                <div className="prose prose-invert text-xs space-y-3 leading-relaxed text-slate-300">
                  <p>
                    In this lesson, we explore how <strong>React Server Components (RSC)</strong> in Next.js 15 interact with Google Gemini AI streaming responses to provide instantaneous UI updates without heavy client JavaScript payloads.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-indigo-300">
                    {`// Server Action streaming text chunks directly to client
export async function streamAIResponse(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContentStream(prompt);
  return result.stream;
}`}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400">
                    <li>Server Actions execute in Node.js server environment with direct database access.</li>
                    <li>Client components remain light and fast, consuming stream chunks asynchronously.</li>
                    <li>Error boundaries catch network drops gracefully without refreshing the view.</li>
                  </ul>
                </div>
              </Card>
            )}

            {/* Tab 2: Socratic AI */}
            {activeTab === "ai" && (
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Lesson Socratic Companion</h3>
                    <p className="text-xs text-slate-400">Ask any clarifying question regarding {currentLesson.title}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/20 text-xs text-purple-200">
                  ✨ Socratic Tip: &quot;How does the response streaming protocol differ from standard JSON REST polling?&quot;
                </div>

                <Link href={`/student/ai-tutor?topic=${encodeURIComponent(currentLesson.title)}`}>
                  <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-500 font-semibold text-xs">
                    Open Full Socratic Chat Session →
                  </Button>
                </Link>
              </Card>
            )}

            {/* Tab 3: Resources */}
            {activeTab === "resources" && (
              <Card className="glass-card p-6 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-indigo-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Lecture-4-Slides-Architecture.pdf</p>
                      <p className="text-[10px] text-slate-500">4.8 MB • PDF Presentation</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs h-8">
                    <Download className="w-3.5 h-3.5 mr-1" /> Download
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Syllabus Navigation Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="glass-card p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                Course Curriculum
              </h3>
              <span className="text-[11px] text-slate-400">{completedCount}/{totalLessons} done</span>
            </div>

            <div className="space-y-4">
              {syllabus.map((mod, modIdx) => (
                <div key={modIdx} className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {mod.moduleTitle}
                  </span>

                  <div className="space-y-1">
                    {mod.lessons.map((lesson) => {
                      const isCurrent = lesson.id === activeLessonId;
                      const isDone = completedLessons[lesson.id];

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLessonId(lesson.id)}
                          className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isCurrent
                              ? "bg-indigo-600/20 text-indigo-200 border border-indigo-500/40 font-semibold"
                              : "hover:bg-slate-850/60 text-slate-300 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate pr-2">
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLessonCompletion(lesson.id);
                              }}
                              className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 transition-colors ${
                                isDone
                                  ? "bg-emerald-500 border-emerald-400 text-white"
                                  : "border-slate-600 hover:border-indigo-400"
                              }`}
                            >
                              {isDone && <CheckCircle className="w-3.5 h-3.5" />}
                            </span>
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 shrink-0">{lesson.duration}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
