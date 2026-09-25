"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Users,
  Play,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MOCK_COURSES } from "@/lib/mock-data";

export default function StudentCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    { label: "All Subjects", value: "ALL" },
    { label: "Artificial Intelligence", value: "Artificial Intelligence" },
    { label: "Computer Science", value: "Computer Science" },
    { label: "Cloud Computing", value: "Cloud Computing" },
  ];

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-indigo-400" />
            Course Catalog & My Classes
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Access your registered courses or enroll in new AI-guided curriculums.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses, topics..."
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.value
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="glass-card flex flex-col justify-between p-0 overflow-hidden group">
            <div>
              {/* Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.thumbnailUrl}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="gradient" className="text-[10px] font-bold">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-[10px] bg-slate-900/80 backdrop-blur-md">
                    {course.level}
                  </Badge>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{course.modulesCount} Modules • {course.lessonsCount} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>{course.enrolledStudentsCount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Progress & Launch Button */}
            <div className="p-5 pt-0 space-y-3">
              {course.progressPercent !== undefined && (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" /> Progress
                    </span>
                    <span className="font-bold text-indigo-400">{course.progressPercent}%</span>
                  </div>
                  <Progress value={course.progressPercent} />
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative border border-slate-700">
                    <Image
                      src={course.teacherAvatar}
                      alt={course.teacherName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-slate-300 truncate max-w-[110px]">
                    {course.teacherName}
                  </span>
                </div>

                <Link href={`/student/courses/${course.slug}`}>
                  <Button variant="default" size="sm" className="h-8 text-xs font-semibold">
                    <Play className="w-3 h-3 mr-1 fill-white" />
                    Open Player
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
