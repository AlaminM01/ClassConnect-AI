"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  HelpCircle,
  Trophy,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const { role } = useAuth();

  const isTeacher = role === "TEACHER";

  const studentTabs = [
    { name: "Home", href: "/student", icon: LayoutDashboard },
    { name: "Courses", href: "/student/courses", icon: BookOpen },
    { name: "AI Tutor", href: "/student/ai-tutor", icon: Bot, isAi: true },
    { name: "Quiz", href: "/student/quiz", icon: HelpCircle },
    { name: "XP", href: "/student/gamification", icon: Trophy },
  ];

  const teacherTabs = [
    { name: "Studio", href: "/teacher", icon: LayoutDashboard },
    { name: "Courses", href: "/teacher/courses", icon: BookOpen },
    { name: "Grading", href: "/teacher/assignments", icon: HelpCircle },
    { name: "Analytics", href: "/teacher/analytics", icon: Trophy },
  ];

  const tabs = isTeacher ? teacherTabs : studentTabs;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-slate-800/80 px-2 py-1.5 backdrop-blur-2xl">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all",
                isActive
                  ? "text-indigo-400 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <div
                className={cn(
                  "p-1 rounded-xl transition-all",
                  tab.isAi && "bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30",
                  isActive && !tab.isAi && "bg-indigo-600/15"
                )}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
