export type UserRole = "STUDENT" | "TEACHER" | "ADMIN";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: UserRole;
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  headline?: string;
  bio?: string;
}

export interface CourseSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS";
  teacherName: string;
  teacherAvatar: string;
  enrolledStudentsCount: number;
  progressPercent?: number;
  modulesCount: number;
  lessonsCount: number;
}

export interface AssignmentItem {
  id: string;
  title: string;
  courseTitle: string;
  dueDate: string;
  totalPoints: number;
  status: "SUBMITTED" | "GRADED" | "PENDING" | "LATE";
  grade?: number;
}

export interface QuizQuestionItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  mastered: boolean;
}

export interface AchievementItem {
  id: string;
  code: string;
  title: string;
  description: string;
  badgeIcon: string;
  xpReward: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatarUrl: string;
  xp: number;
  level: number;
  streak: number;
  isCurrentUser?: boolean;
}
