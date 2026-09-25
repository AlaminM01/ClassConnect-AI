"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Briefcase,
  Lock,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/auth-context";
import { UserRole } from "@/lib/types";

export default function SignInPage() {
  const router = useRouter();
  const { login, loginAs } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>("STUDENT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStandardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      login(email || "alex.chen@university.edu", selectedRole);
      router.push(selectedRole === "STUDENT" ? "/student" : selectedRole === "TEACHER" ? "/teacher" : "/admin");
    }, 400);
  };

  const handleInstantDemoLogin = (role: UserRole) => {
    loginAs(role);
    router.push(role === "STUDENT" ? "/student" : role === "TEACHER" ? "/teacher" : "/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#090d16]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-transparent blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              ClassConnect <span className="text-indigo-400 font-mono text-sm bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">AI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-400 mt-1">Sign in to your learning workspace</p>
        </div>

        <Card className="glass-card border-slate-800 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-base text-slate-200">Select Access Role</CardTitle>
            <CardDescription className="text-xs">Choose the role you want to sign in as:</CardDescription>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedRole("STUDENT")}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all border ${
                  selectedRole === "STUDENT"
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-white"
                }`}
              >
                <UserCheck className="w-4 h-4" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("TEACHER")}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all border ${
                  selectedRole === "TEACHER"
                    ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Teacher
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("ADMIN")}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all border ${
                  selectedRole === "ADMIN"
                    ? "bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-600/30"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-white"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Admin
              </button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleStandardLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      selectedRole === "STUDENT"
                        ? "alex.chen@university.edu"
                        : selectedRole === "TEACHER"
                        ? "s.jenkins@stanford.edu"
                        : "admin@classconnect.ai"
                    }
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Authenticating..." : `Sign In as ${selectedRole.charAt(0) + selectedRole.slice(1).toLowerCase()}`}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            {/* Quick 1-Click Demo Evaluation Box */}
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> 1-Click Instant Demo Access
                </span>
                <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30">
                  Ready to test
                </Badge>
              </div>

              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => handleInstantDemoLogin("STUDENT")}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between text-xs transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[10px]">
                      S
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 group-hover:text-indigo-300">Alex Chen (Student)</p>
                      <p className="text-[10px] text-slate-400">Level 7 • 3,450 XP • 12-Day Streak</p>
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-indigo-400 opacity-60 group-hover:opacity-100" />
                </button>

                <button
                  type="button"
                  onClick={() => handleInstantDemoLogin("TEACHER")}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between text-xs transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                      T
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 group-hover:text-purple-300">Dr. Sarah Jenkins (Teacher)</p>
                      <p className="text-[10px] text-slate-400">Computer Science Dept • 3 Active Courses</p>
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100" />
                </button>

                <button
                  type="button"
                  onClick={() => handleInstantDemoLogin("ADMIN")}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between text-xs transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 group-hover:text-cyan-300">Elena Vance (Admin)</p>
                      <p className="text-[10px] text-slate-400">Platform Security & Moderation</p>
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100" />
                </button>
              </div>
            </div>

            <div className="text-center pt-2 text-xs text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-indigo-400 hover:underline font-medium">
                Create Account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
