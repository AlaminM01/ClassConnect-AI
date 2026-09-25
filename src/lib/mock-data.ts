import {
  CurrentUser,
  CourseSummary,
  AssignmentItem,
  QuizQuestionItem,
  FlashcardItem,
  AchievementItem,
  LeaderboardEntry,
} from "./types";

export const MOCK_STUDENT: CurrentUser = {
  id: "user-student-1",
  name: "Alex Chen",
  email: "alex.chen@university.edu",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  role: "STUDENT",
  xp: 3450,
  level: 7,
  currentStreak: 12,
  longestStreak: 21,
  headline: "Computer Science Sophomore & Aspiring AI Engineer",
  bio: "Passionate about full-stack web architectures, distributed systems, and generative AI models.",
};

export const MOCK_TEACHER: CurrentUser = {
  id: "user-teacher-1",
  name: "Dr. Sarah Jenkins",
  email: "s.jenkins@stanford.edu",
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  role: "TEACHER",
  xp: 12800,
  level: 25,
  currentStreak: 45,
  longestStreak: 89,
  headline: "Associate Professor of AI & Distributed Systems",
  bio: "Teaching software engineering, cloud systems, and generative AI to future innovators.",
};

export const MOCK_ADMIN: CurrentUser = {
  id: "user-admin-1",
  name: "Elena Vance",
  email: "admin@classconnect.ai",
  avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  role: "ADMIN",
  xp: 9999,
  level: 30,
  currentStreak: 90,
  longestStreak: 120,
  headline: "Platform Operations & Security Lead",
};

export const MOCK_COURSES: CourseSummary[] = [
  {
    id: "course-1",
    title: "Full-Stack AI Engineering with Next.js 15 & LLMs",
    slug: "full-stack-ai-engineering",
    description:
      "Master production-grade modern web applications integrated with Gemini and OpenAI APIs, vector databases, and streaming UI.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    category: "Artificial Intelligence",
    level: "INTERMEDIATE",
    teacherName: "Dr. Sarah Jenkins",
    teacherAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    enrolledStudentsCount: 1420,
    progressPercent: 68,
    modulesCount: 6,
    lessonsCount: 32,
  },
  {
    id: "course-2",
    title: "Data Structures & Algorithmic Problem Solving",
    slug: "data-structures-and-algorithms",
    description:
      "In-depth analysis of trees, graphs, dynamic programming, and complexity with visual AI walk-throughs.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    category: "Computer Science",
    level: "BEGINNER",
    teacherName: "Prof. Marcus Brody",
    teacherAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    enrolledStudentsCount: 2310,
    progressPercent: 42,
    modulesCount: 8,
    lessonsCount: 48,
  },
  {
    id: "course-3",
    title: "Cloud Native Architecture & Distributed Systems",
    slug: "cloud-native-architecture",
    description:
      "Microservices, Docker, Kubernetes, Kafka event streaming, and resilient edge deployments.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    category: "Cloud Computing",
    level: "ADVANCED",
    teacherName: "Dr. Sarah Jenkins",
    teacherAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    enrolledStudentsCount: 890,
    progressPercent: 15,
    modulesCount: 5,
    lessonsCount: 24,
  },
];

export const MOCK_ASSIGNMENTS: AssignmentItem[] = [
  {
    id: "assign-1",
    title: "Build a Streaming AI Chatbot with Server Actions",
    courseTitle: "Full-Stack AI Engineering",
    dueDate: "Tomorrow at 11:59 PM",
    totalPoints: 100,
    status: "PENDING",
  },
  {
    id: "assign-2",
    title: "Implement Dijkstra's & A* Shortest Path Algorithm",
    courseTitle: "Data Structures & Algorithms",
    dueDate: "Oct 2, 2026",
    totalPoints: 100,
    status: "GRADED",
    grade: 96,
  },
  {
    id: "assign-3",
    title: "Containerize Multi-tier PostgreSQL Service with Docker",
    courseTitle: "Cloud Native Architecture",
    dueDate: "Oct 8, 2026",
    totalPoints: 50,
    status: "SUBMITTED",
  },
];

export const MOCK_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    code: "FIRST_SUBMISSION",
    title: "First Step",
    description: "Submit your very first assignment on the platform",
    badgeIcon: "Rocket",
    xpReward: 100,
    unlocked: true,
    unlockedAt: "Sept 12, 2026",
  },
  {
    id: "ach-2",
    code: "STREAK_7",
    title: "Streak Warrior",
    description: "Maintain a study streak for 7 consecutive days",
    badgeIcon: "Flame",
    xpReward: 250,
    unlocked: true,
    unlockedAt: "Sept 18, 2026",
  },
  {
    id: "ach-3",
    code: "QUIZ_WHIZ",
    title: "Quiz Grandmaster",
    description: "Score 100% on 3 consecutive AI-generated quizzes",
    badgeIcon: "Award",
    xpReward: 300,
    unlocked: true,
    unlockedAt: "Sept 22, 2026",
  },
  {
    id: "ach-4",
    code: "AI_ENTHUSIAST",
    title: "AI Synthesis Pioneer",
    description: "Generate 25 AI notes or study summaries",
    badgeIcon: "BrainCircuit",
    xpReward: 500,
    unlocked: false,
  },
  {
    id: "ach-5",
    code: "TOP_PERFORMER",
    title: "Campus Champion",
    description: "Reach the top 3 on the global weekly leaderboard",
    badgeIcon: "Trophy",
    xpReward: 1000,
    unlocked: false,
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "usr-4",
    name: "Sophia Martinez",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    xp: 5240,
    level: 11,
    streak: 28,
  },
  {
    rank: 2,
    userId: "usr-student-1",
    name: "Alex Chen (You)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    xp: 3450,
    level: 7,
    streak: 12,
    isCurrentUser: true,
  },
  {
    rank: 3,
    userId: "usr-8",
    name: "Devon Vance",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    xp: 3210,
    level: 7,
    streak: 15,
  },
  {
    rank: 4,
    userId: "usr-9",
    name: "Aisha Patel",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    xp: 2980,
    level: 6,
    streak: 9,
  },
  {
    rank: 5,
    userId: "usr-10",
    name: "Liam O'Connor",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    xp: 2650,
    level: 6,
    streak: 14,
  },
];

export const MOCK_QUIZ_QUESTIONS: QuizQuestionItem[] = [
  {
    id: "q-1",
    question: "What is the primary benefit of React Server Components (RSC) in Next.js 15?",
    options: [
      "They completely eliminate the need for client-side JavaScript bundle for server rendered components",
      "They replace HTML with WebAssembly bytecode",
      "They run inside service workers in the client browser",
      "They allow direct CSS injection without compilation",
    ],
    correctIndex: 0,
    explanation:
      "React Server Components execute strictly on the server and do not bundle their dependencies into the client JavaScript payload, drastically reducing initial load times.",
  },
  {
    id: "q-2",
    question: "Which hook in React 19 / modern React allows seamless action status monitoring?",
    options: ["useActionState", "useEvent", "useLifecycle", "useServerCallback"],
    correctIndex: 0,
    explanation:
      "useActionState (formerly useFormState) manages pending state and action return values with optimistic UI updates.",
  },
  {
    id: "q-3",
    question: "What does vector similarity search calculate when retrieving context for RAG?",
    options: [
      "Cosine distance or dot product between embedding vectors in high-dimensional latent space",
      "Exact keyword frequency match count (TF-IDF only)",
      "Alphabetical sorting distance of strings",
      "Network packet transit ping latency",
    ],
    correctIndex: 0,
    explanation:
      "Vector embeddings encode semantic meaning into high-dimensional vectors. Cosine similarity calculates the directional angle to measure conceptual relevance.",
  },
];

export const MOCK_FLASHCARDS: FlashcardItem[] = [
  {
    id: "fc-1",
    front: "What is RAG (Retrieval-Augmented Generation)?",
    back: "An AI architecture that retrieves relevant documents from a knowledge store (like a vector DB) to augment prompt context before generating responses.",
    mastered: true,
  },
  {
    id: "fc-2",
    front: "What is the time complexity of searching a balanced AVL / Red-Black Tree?",
    back: "O(log N), because self-balancing ensures the maximum tree height remains strictly bounded by logarithmic proportions.",
    mastered: false,
  },
  {
    id: "fc-3",
    front: "What is the ACID guarantee in PostgreSQL databases?",
    back: "Atomicity (all or nothing), Consistency (valid state transitions), Isolation (independent concurrent transactions), and Durability (committed data survives crashes).",
    mastered: true,
  },
  {
    id: "fc-4",
    front: "How does optimistic UI updating improve user experience?",
    back: "It renders expected mutations on the UI instantly before the network request resolves, rolling back only if an error occurs.",
    mastered: false,
  },
];
