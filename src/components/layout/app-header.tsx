"use client";

import Link from "next/link";
import { GraduationCap, Search, Bell } from "lucide-react";
import { UserNav } from "./user-nav";

interface AppHeaderProps {
  title?: string;
  badge?: string;
}

export function AppHeader({ title = "Dashboard", badge }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-16 glass-nav border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between">
      {/* Brand & Workspace Name */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-bold text-base tracking-tight text-white hidden sm:inline-flex items-center gap-1.5">
            ClassConnect <span className="text-indigo-400 font-mono text-xs bg-indigo-500/10 px-1 py-0.2 rounded border border-indigo-500/20">AI</span>
          </span>
        </Link>

        <div className="h-4 w-px bg-slate-800 hidden sm:block" />

        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-slate-200">{title}</h1>
          {badge && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Quick Search & Actions */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center relative w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, lessons, notes..."
            className="w-full bg-slate-900/60 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Notifications Icon */}
        <button
          className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-all cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        </button>

        {/* User Navigation Dropdown */}
        <UserNav />
      </div>
    </header>
  );
}
