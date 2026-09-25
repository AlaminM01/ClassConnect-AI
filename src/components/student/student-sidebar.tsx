"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  FileText,
  HelpCircle,
  Layers,
  CalendarCheck,
  Trophy,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/student",
    icon: LayoutDashboard,
  },
  {
    name: "My Courses",
    href: "/student/courses",
    icon: BookOpen,
  },
  {
    name: "AI Tutor Chatbot",
    href: "/student/ai-tutor",
    icon: Bot,
    badge: "AI",
  },
  {
    name: "Smart Notes",
    href: "/student/notes",
    icon: FileText,
  },
  {
    name: "AI Quiz Generator",
    href: "/student/quiz",
    icon: HelpCircle,
  },
  {
    name: "Flashcard Decks",
    href: "/student/flashcards",
    icon: Layers,
  },
  {
    name: "Assignments",
    href: "/student/assignments",
    icon: CalendarCheck,
  },
  {
    name: "Leaderboard & XP",
    href: "/student/gamification",
    icon: Trophy,
    highlight: true,
  },
  {
    name: "Learning Analytics",
    href: "/student/analytics",
    icon: BarChart3,
  },
];

export function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-800/80 bg-slate-950/70 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Workspace Tag */}
      <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Student Space
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          PRO
        </span>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group",
                isActive
                  ? "bg-indigo-600/15 text-indigo-300 border border-indigo-500/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-indigo-400"
                      : "text-slate-400 group-hover:text-slate-200"
                  )}
                />
                <span>{item.name}</span>
              </div>

              {item.badge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* AI Assistant Quick Callout */}
      <div className="p-4 m-3 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-purple-950/40 to-slate-900 border border-indigo-500/20 text-xs">
        <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
          <span>Need Instant Help?</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
          Ask the Socratic AI Tutor to explain complex topics or review code.
        </p>
        <Link href="/student/ai-tutor">
          <button className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer">
            Launch AI Tutor
          </button>
        </Link>
      </div>
    </aside>
  );
}
