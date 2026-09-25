"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Download,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function TeacherAnalyticsPage() {
  const [reportExported, setReportExported] = useState(false);

  const gradeDistribution = [
    { grade: "A (90-100%)", count: 1940, percent: 42, color: "bg-emerald-500" },
    { grade: "B (80-89%)", count: 1755, percent: 38, color: "bg-indigo-500" },
    { grade: "C (70-79%)", count: 693, percent: 15, color: "bg-amber-500" },
    { grade: "D/F (<70%)", count: 232, percent: 5, color: "bg-rose-500" },
  ];

  const atRiskStudents = [
    { name: "Jordan Reed", course: "Data Structures", missedQuizzes: 2, avgScore: 58 },
    { name: "Taylor Kim", course: "Cloud Native Architecture", missedQuizzes: 1, avgScore: 61 },
    { name: "Morgan Bailey", course: "Full-Stack AI Engineering", missedQuizzes: 2, avgScore: 64 },
  ];

  const handleExportReport = () => {
    setReportExported(true);
    setTimeout(() => setReportExported(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-purple-400" />
            Cohort Performance & AI Diagnostics
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time telemetry across 4,620 students, grade distribution curves, and intervention triggers.
          </p>
        </div>

        <Button
          onClick={handleExportReport}
          variant="default"
          size="sm"
          className="bg-purple-600 hover:bg-purple-500 font-semibold"
        >
          {reportExported ? (
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Report Downloaded!
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Download className="w-4 h-4 mr-1" /> Export Full AI Report
            </span>
          )}
        </Button>
      </div>

      {/* Grade Distribution & At-Risk Intervention Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Grade Curve (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                Semester Grade Distribution (4,620 Students)
              </h3>
              <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 text-[10px]">
                88.5% Passing Rate
              </Badge>
            </div>

            <div className="space-y-4">
              {gradeDistribution.map((item, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-300">{item.grade}</span>
                    <span className="text-slate-400">
                      <strong>{item.count.toLocaleString()}</strong> students ({item.percent}%)
                    </span>
                  </div>
                  <Progress value={item.percent} indicatorClassName={item.color} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: At-Risk Students & AI Early Warning (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="glass-card p-6 border-rose-500/30 bg-rose-950/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Intervention Alert (3 Students)
              </h3>
              <Badge variant="destructive" className="text-[10px]">
                Urgent
              </Badge>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              These students scored below 65% on recent quizzes and missed homework milestones:
            </p>

            <div className="space-y-2.5">
              {atRiskStudents.map((st, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">{st.name}</p>
                    <p className="text-[10px] text-slate-400">{st.course}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-rose-400">{st.avgScore}% avg</span>
                    <span className="text-[10px] text-slate-500 block">{st.missedQuizzes} missed</span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="sm" className="w-full text-xs bg-rose-600 hover:bg-rose-500 font-semibold mt-2">
              Send Automated AI Remediation Packet
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
