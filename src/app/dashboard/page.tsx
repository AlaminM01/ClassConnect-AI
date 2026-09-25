"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { GraduationCap, Loader2 } from "lucide-react";

export default function DashboardRedirect() {
  const router = useRouter();
  const { role, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (role === "TEACHER") {
        router.replace("/teacher");
      } else if (role === "ADMIN") {
        router.replace("/admin");
      } else {
        router.replace("/student");
      }
    }
  }, [role, isLoading, router]);

  return (
    <div className="min-h-screen bg-[#090d16] flex flex-col items-center justify-center text-slate-200">
      <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 animate-pulse">
        <GraduationCap className="w-7 h-7" />
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
        <span>Routing to your {role.toLowerCase()} workspace...</span>
      </div>
    </div>
  );
}
