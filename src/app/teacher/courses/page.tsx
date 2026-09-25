"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Search,
  Users,
  Clock,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_COURSES } from "@/lib/mock-data";
import { CourseSummary } from "@/lib/types";

export default function TeacherCoursesPage() {
  const [courses, setCourses] = useState<CourseSummary[]>(MOCK_COURSES);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Artificial Intelligence");
  const [newDescription, setNewDescription] = useState("");

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCourse: CourseSummary = {
      id: `course-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/\s+/g, "-"),
      description: newDescription || "Comprehensive newly created syllabus module.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      category: newCategory,
      level: "BEGINNER",
      teacherName: "Dr. Sarah Jenkins",
      teacherAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      enrolledStudentsCount: 0,
      progressPercent: 0,
      modulesCount: 1,
      lessonsCount: 4,
    };

    setCourses([newCourse, ...courses]);
    setNewTitle("");
    setNewDescription("");
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header & Create CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-purple-400" />
            Faculty Course Studio
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Author, organize, and publish curriculums with AI-assisted syllabus generators.
          </p>
        </div>

        <Button
          onClick={() => setShowCreateModal(true)}
          variant="default"
          className="bg-purple-600 hover:bg-purple-500 font-semibold shadow-lg shadow-purple-600/30"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Create New Course
        </Button>
      </div>

      {/* Course List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="glass-card flex flex-col justify-between p-0 overflow-hidden group">
            <div>
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={course.thumbnailUrl}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="gradient" className="text-[10px]">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30 bg-slate-950/80">
                    Published
                  </Badge>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    {course.modulesCount} Modules • {course.lessonsCount} Lessons
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 font-semibold">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    {course.enrolledStudentsCount.toLocaleString()} Enrolled
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 pt-3">
              <span className="text-[11px] text-slate-500 font-mono">Slug: {course.slug}</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs px-2.5">
                  <Edit className="w-3 h-3 mr-1" /> Edit
                </Button>
                <Link href={`/student/courses/${course.slug}`}>
                  <Button variant="default" size="sm" className="h-8 text-xs bg-purple-600 hover:bg-purple-500 px-2.5">
                    View <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="glass-card w-full max-w-lg p-6 border-slate-700 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Create New Curriculum
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                ✕ Cancel
              </button>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Distributed Database Engineering"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Brief overview of course outcomes and syllabus..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-500 font-semibold"
                >
                  Publish Course
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
