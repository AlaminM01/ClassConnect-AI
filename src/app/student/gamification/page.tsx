"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Flame,
  Star,
  Award,
  Sparkles,
  Rocket,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_STUDENT, MOCK_ACHIEVEMENTS, MOCK_LEADERBOARD } from "@/lib/mock-data";
import { getLevelProgress } from "@/lib/utils";
import confetti from "canvas-confetti";

export default function GamificationPage() {
  const [student, setStudent] = useState(MOCK_STUDENT);
  const [claimedStreak, setClaimedStreak] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<"CAMPUS" | "GLOBAL">("CAMPUS");

  const levelInfo = getLevelProgress(student.xp);

  const handleClaimDailyStreak = () => {
    if (claimedStreak) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }

    setStudent((prev) => ({
      ...prev,
      xp: prev.xp + 100,
      currentStreak: prev.currentStreak + 1,
    }));
    setClaimedStreak(true);
  };

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="w-5 h-5 text-indigo-400" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-purple-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      default:
        return <Trophy className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <Trophy className="w-7 h-7 text-amber-400" />
            Gamification & Leaderboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Maintain daily study streaks, climb campus ranks, and unlock verifiable skill badges.
          </p>
        </div>

        <Button
          onClick={handleClaimDailyStreak}
          disabled={claimedStreak}
          variant={claimedStreak ? "secondary" : "gradient"}
          size="sm"
          className="font-bold shadow-lg shadow-indigo-600/30"
        >
          {claimedStreak ? (
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Streak Claimed (+100 XP)
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-300 fill-amber-300 animate-bounce" />
              Claim Daily Streak (+100 XP)
            </span>
          )}
        </Button>
      </div>

      {/* Top Banner: Level Progress & Streak Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level Progression */}
        <Card className="glass-card p-6 border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-slate-900 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Scholar Level
            </span>
            <Badge variant="outline" className="text-xs text-indigo-300 border-indigo-500/40">
              Level {levelInfo.level}
            </Badge>
          </div>

          <div>
            <p className="text-3xl font-black text-white">{student.xp.toLocaleString()} XP</p>
            <p className="text-xs text-slate-400 mt-1">
              {levelInfo.currentXP} / {levelInfo.nextLevelXP} XP to Level {levelInfo.level + 1}
            </p>
          </div>

          <div className="space-y-1.5">
            <Progress value={levelInfo.percent} className="h-2.5" />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Progress</span>
              <span className="text-indigo-300 font-bold">{levelInfo.percent}%</span>
            </div>
          </div>
        </Card>

        {/* Streak Flame Center */}
        <Card className="glass-card p-6 border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-slate-900 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Daily Streak
            </span>
            <Badge variant="outline" className="text-xs text-amber-300 border-amber-500/40">
              Active Shield 🛡️
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/20">
              <Flame className="w-10 h-10 fill-amber-400 animate-bounce" />
            </div>
            <div>
              <p className="text-3xl font-black text-white">{student.currentStreak} Days</p>
              <p className="text-xs text-amber-300/80">Best: {student.longestStreak} days</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Streak multiplier active: 1.2x bonus XP</span>
          </div>
        </Card>

        {/* Campus League Standing */}
        <Card className="glass-card p-6 border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-slate-900 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              League Standing
            </span>
            <Badge variant="outline" className="text-xs text-purple-300 border-purple-500/40">
              Diamond League
            </Badge>
          </div>

          <div>
            <p className="text-3xl font-black text-white">Rank #2</p>
            <p className="text-xs text-slate-400 mt-1">Stanford CS Sophomore Cohort</p>
          </div>

          <div className="text-[11px] text-purple-300 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Top 3 promotion zone • 2 days remaining</span>
          </div>
        </Card>
      </div>

      {/* Main Split Grid: Left Leaderboard / Right Achievements Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Leaderboard Table (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Weekly Podium Standings
            </h2>

            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setLeaderboardTab("CAMPUS")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  leaderboardTab === "CAMPUS" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Campus
              </button>
              <button
                onClick={() => setLeaderboardTab("GLOBAL")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  leaderboardTab === "GLOBAL" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Global
              </button>
            </div>
          </div>

          <Card className="glass-card p-0 overflow-hidden divide-y divide-slate-800">
            {MOCK_LEADERBOARD.map((entry) => {
              const isUser = entry.isCurrentUser;

              return (
                <div
                  key={entry.userId}
                  className={`p-4 flex items-center justify-between gap-4 transition-colors ${
                    isUser
                      ? "bg-indigo-600/15 border-l-4 border-l-indigo-500 text-indigo-100"
                      : "hover:bg-slate-850/40 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Rank Indicator */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        entry.rank === 1
                          ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/40"
                          : entry.rank === 2
                          ? "bg-slate-300 text-slate-950 shadow-md shadow-slate-300/40"
                          : entry.rank === 3
                          ? "bg-amber-700 text-white shadow-md shadow-amber-700/40"
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}
                    >
                      {entry.rank}
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border border-slate-700 shrink-0">
                      <Image
                        src={entry.avatarUrl}
                        alt={entry.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1.5">
                        {entry.name}
                        {isUser && (
                          <Badge variant="outline" className="text-[9px] text-indigo-400 border-indigo-500/40 py-0">
                            You
                          </Badge>
                        )}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>Level {entry.level} Scholar</span>
                        <span>•</span>
                        <span className="text-amber-400 flex items-center gap-0.5 font-bold">
                          <Flame className="w-3 h-3 fill-amber-400" />
                          {entry.streak}d streak
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-sm font-extrabold text-amber-400 shrink-0">
                    {entry.xp.toLocaleString()} XP
                  </span>
                </div>
              );
            })}
          </Card>
        </div>

        {/* Achievements Showcase (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              Achievements ({MOCK_ACHIEVEMENTS.filter((a) => a.unlocked).length}/{MOCK_ACHIEVEMENTS.length})
            </h2>
          </div>

          <div className="space-y-3">
            {MOCK_ACHIEVEMENTS.map((ach) => (
              <Card
                key={ach.id}
                className={`p-4 transition-all flex items-start gap-3.5 ${
                  ach.unlocked
                    ? "glass-card border-indigo-500/30"
                    : "glass-card border-slate-800/60 opacity-55"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                    ach.unlocked
                      ? "bg-indigo-600/20 border-indigo-500/40 shadow-md shadow-indigo-600/20"
                      : "bg-slate-900 border-slate-800 text-slate-600"
                  }`}
                >
                  {getAchievementIcon(ach.badgeIcon)}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{ach.title}</h4>
                    <span className="text-[10px] font-mono font-bold text-amber-400">
                      +{ach.xpReward} XP
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                  {ach.unlocked && ach.unlockedAt && (
                    <span className="text-[9px] text-emerald-400 font-semibold block pt-0.5">
                      Unlocked on {ach.unlockedAt}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
