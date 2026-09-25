"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Flame,
  Star,
  ChevronDown,
  UserCheck,
  Briefcase,
  ShieldCheck,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/lib/types";

export function UserNav() {
  const router = useRouter();
  const { user, role, switchRole, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) {
    return (
      <Link
        href="/sign-in"
        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  const handleRoleSwitch = (newRole: UserRole) => {
    switchRole(newRole);
    setIsOpen(false);
    if (newRole === "STUDENT") router.push("/student");
    else if (newRole === "TEACHER") router.push("/teacher");
    else router.push("/admin");
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push("/sign-in");
  };

  return (
    <div className="relative flex items-center gap-3" ref={dropdownRef}>
      {/* Gamification Stats Header Pill (For Students) */}
      {role === "STUDENT" && (
        <div className="hidden sm:flex items-center gap-2">
          {/* Streak Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-bounce" />
            <span>{user.currentStreak}d</span>
          </div>

          {/* XP & Level Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
            <span>Lvl {user.level}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{user.xp.toLocaleString()} XP</span>
          </div>
        </div>
      )}

      {/* User Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all text-left cursor-pointer"
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-indigo-500/40 bg-slate-800 shrink-0">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-xs font-semibold text-white leading-tight flex items-center gap-1.5">
            {user.name}
            <Badge
              variant={
                role === "STUDENT"
                  ? "default"
                  : role === "TEACHER"
                  ? "secondary"
                  : "outline"
              }
              className={`text-[9px] px-1.5 py-0 uppercase ${
                role === "STUDENT"
                  ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                  : role === "TEACHER"
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                  : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
              }`}
            >
              {role}
            </Badge>
          </span>
          <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
            {user.email}
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="p-2 border-b border-slate-800/80 mb-1">
            <p className="text-xs font-bold text-white">{user.name}</p>
            <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Active Role:</span>
              <span className="text-[10px] font-bold text-indigo-400">{role}</span>
            </div>
          </div>

          {/* Role Switching Options */}
          <div className="py-1">
            <p className="px-2 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" /> Switch Workspace
            </p>
            <button
              onClick={() => handleRoleSwitch("STUDENT")}
              className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-colors ${
                role === "STUDENT"
                  ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                  : "text-slate-300 hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>Student Hub</span>
              </div>
              {role === "STUDENT" && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
            </button>

            <button
              onClick={() => handleRoleSwitch("TEACHER")}
              className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-colors ${
                role === "TEACHER"
                  ? "bg-purple-600/20 text-purple-300 font-semibold"
                  : "text-slate-300 hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>Teacher Studio</span>
              </div>
              {role === "TEACHER" && <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
            </button>

            <button
              onClick={() => handleRoleSwitch("ADMIN")}
              className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition-colors ${
                role === "ADMIN"
                  ? "bg-cyan-600/20 text-cyan-300 font-semibold"
                  : "text-slate-300 hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Admin Operations</span>
              </div>
              {role === "ADMIN" && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
            </button>
          </div>

          <div className="border-t border-slate-800/80 pt-1 mt-1">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 p-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
