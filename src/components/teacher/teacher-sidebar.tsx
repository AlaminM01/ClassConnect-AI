"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  HelpCircle,
  Users,
  BarChart3,
  UploadCloud,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const teacherNavItems = [
  {
    name: "Dashboard Overview",
    href: "/teacher",
    icon: LayoutDashboard,
  },
  {
    name: "Course Studio",
    href: "/teacher/courses",
    icon: BookOpen,
  },
  {
    name: "Assignments & Grading",
    href: "/teacher/assignments",
    icon: CalendarCheck,
    badge: "8 New",
  },
  {
    name: "Quiz Builder",
    href: "/teacher/quizzes",
    icon: HelpCircle,
  },
  {
    name: "Attendance Sessions",
    href: "/teacher/attendance",
    icon: Users,
  },
  {
    name: "Resource Manager",
    href: "/teacher/resources",
    icon: UploadCloud,
  },
  {
    name: "Cohort AI Insights",
    href: "/teacher/analytics",
    icon: BarChart3,
    highlight: true,
  },
];

export function TeacherSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-800/80 bg-slate-950/70 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Workspace Header */}
      <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Faculty Studio
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
          INSTRUCTOR
        </span>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {teacherNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group",
                isActive
                  ? "bg-purple-600/15 text-purple-300 border border-purple-500/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-purple-400"
                      : "text-slate-400 group-hover:text-slate-200"
                  )}
                />
                <span>{item.name}</span>
              </div>

              {item.badge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* AI Teacher Assistant Widget */}
      <div className="p-4 m-3 rounded-2xl bg-gradient-to-br from-purple-950/60 via-indigo-950/40 to-slate-900 border border-purple-500/20 text-xs">
        <div className="flex items-center gap-2 text-purple-300 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
          <span>AI Grading Co-Pilot</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
          Auto-evaluate student code and suggest personalized rubric feedback.
        </p>
        <Link href="/teacher/assignments">
          <button className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-md shadow-purple-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            Grade Submissions
          </button>
        </Link>
      </div>
    </aside>
  );
}
