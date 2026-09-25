"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  ArrowRight,
  UserCheck,
  Briefcase,
  Lock,
  Mail,
  User,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { UserRole } from "@/lib/types";

export default function SignUpPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [role, setRole] = useState<UserRole>("STUDENT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      login(email || "alex.chen@university.edu", role);
      router.push(role === "STUDENT" ? "/student" : "/teacher");
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#090d16]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-transparent blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 group mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              ClassConnect <span className="text-indigo-400 font-mono text-sm bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">AI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">Create Your Account</h1>
          <p className="text-sm text-slate-400 mt-1">Join thousands of students and educators</p>
        </div>

        <Card className="glass-card border-slate-800 shadow-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-200">Select Account Type</CardTitle>
            <CardDescription className="text-xs">Choose how you plan to use ClassConnect AI:</CardDescription>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setRole("STUDENT")}
                className={`py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border ${
                  role === "STUDENT"
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-white"
                }`}
              >
                <UserCheck className="w-4 h-4" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole("TEACHER")}
                className={`py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border ${
                  role === "TEACHER"
                    ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30"
                    : "bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Educator / Teacher
              </button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Chen"
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Institutional Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@university.edu"
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">University / College / School</label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Stanford University / MIT / Campus"
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
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
                className="w-full font-semibold mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Profile..." : "Get Started for Free"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="text-center pt-2 text-xs text-slate-400">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-indigo-400 hover:underline font-medium">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
