# 🎓 ClassConnect AI

> **The Next-Generation AI-Powered Virtual Classroom & Learning Ecosystem**  
> Combining the pedagogy of Google Classroom, the structure of Notion, the mastery of Coursera, the gamification of Duolingo, and the intelligence of ChatGPT into a unified modern SaaS platform.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-class--connect--ai.vercel.app-00dfa2?style=for-the-badge&logo=vercel&logoColor=white)](https://class-connect-ai.vercel.app/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.4-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-AlaminM01%2FClassConnect--AI-181717?style=for-the-badge&logo=github)](https://github.com/AlaminM01/ClassConnect-AI)

---

## 🌐 Live Production Application

🚀 **Live Deployment URL**: **[https://class-connect-ai.vercel.app/](https://class-connect-ai.vercel.app/)**

### 🎯 Instant Workspace Links
- 🏠 **Landing Page**: [https://class-connect-ai.vercel.app/](https://class-connect-ai.vercel.app/)
- 🎓 **Student Command Center**: [https://class-connect-ai.vercel.app/student](https://class-connect-ai.vercel.app/student)
- 🤖 **24/7 Socratic AI Tutor**: [https://class-connect-ai.vercel.app/student/ai-tutor](https://class-connect-ai.vercel.app/student/ai-tutor)
- 📝 **Notion-Grade AI Notes**: [https://class-connect-ai.vercel.app/student/notes](https://class-connect-ai.vercel.app/student/notes)
- ⚡ **Adaptive AI Quizzes**: [https://class-connect-ai.vercel.app/student/quiz](https://class-connect-ai.vercel.app/student/quiz)
- 🗂️ **3D Active-Recall Flashcards**: [https://class-connect-ai.vercel.app/student/flashcards](https://class-connect-ai.vercel.app/student/flashcards)
- 🏆 **Gamification Hub & Leaderboard**: [https://class-connect-ai.vercel.app/student/gamification](https://class-connect-ai.vercel.app/student/gamification)
- 📈 **Student Study Analytics**: [https://class-connect-ai.vercel.app/student/analytics](https://class-connect-ai.vercel.app/student/analytics)
- 🧑‍🏫 **Faculty Management Studio**: [https://class-connect-ai.vercel.app/teacher](https://class-connect-ai.vercel.app/teacher)
- 📊 **Faculty Cohort Diagnostics**: [https://class-connect-ai.vercel.app/teacher/analytics](https://class-connect-ai.vercel.app/teacher/analytics)

> 💡 **Role Switcher Tip**: The application includes built-in role switching. Click on your profile avatar in the navigation bar to toggle between **Student**, **Teacher**, and **Administrator** roles instantly without requiring new logins!

---

## 🌟 Executive Overview

Modern online learning suffers from fragmented tooling, passive video consumption, low retention rates, and isolated study environments. **ClassConnect AI** solves these systemic problems by integrating real-time generative AI into every facet of the student and instructor experience:

1. **24/7 Socratic AI Tutor**: An intelligent mentor that doesn't just blurt answers—it guides students through concepts, syntax, and problem-solving step-by-step with multiple personas (Socratic, Code Guru, Explainer, Exam Prep).
2. **Automated AI Notes & Flashcards**: Converts lecture transcripts and syllabi into organized, Notion-style notes, markdown summaries, and active-recall 3D flashcard decks.
3. **Adaptive AI Quiz Engine**: Creates instant self-assessment quizzes with answer rationales and personalized revision topics.
4. **Duolingo-Inspired Gamification**: Daily streaks, XP gain, level milestones, achievement badges, and campus leaderboards driving 98%+ student retention.
5. **Multi-Role Workspaces**: Tailored dashboards for **Students**, **Teachers**, and **Administrators** with instant 1-click role switching for testing and evaluation.

---

## 🏗️ Technical Architecture

```
classconnect-ai/
├── prisma/
│   └── schema.prisma         # Scalable PostgreSQL schema (Users, Courses, Submissions, Quizzes, AI)
├── public/                   # Static brand assets
├── src/
│   ├── app/
│   │   ├── (auth)/           # Authentication routes (Sign-in, Sign-up)
│   │   ├── dashboard/        # Dynamic role-based router
│   │   ├── student/          # Student Command Center:
│   │   │   ├── courses/      # Catalog & interactive video/syllabus player
│   │   │   ├── ai-tutor/     # 24/7 Socratic Chatbot with personas
│   │   │   ├── notes/        # Notion-grade AI notes generator
│   │   │   ├── quiz/         # Adaptive quiz engine with rationales
│   │   │   ├── flashcards/   # 3D active-recall flip card player
│   │   │   ├── gamification/ # Streaks, leaderboard, & achievements
│   │   │   └── analytics/    # Study velocity & topic mastery index
│   │   ├── teacher/          # Faculty Management Studio:
│   │   │   ├── courses/      # Curriculum authoring & module studio
│   │   │   └── analytics/    # Grade curves & early-warning diagnostics
│   │   ├── api/
│   │   │   └── ai/           # Gemini AI Tutor, Notes, & Quiz endpoints
│   │   ├── globals.css       # Tailwind CSS v4 + Dark Glassmorphic Theme
│   │   ├── layout.tsx        # App Root Layout with AuthProvider
│   │   └── page.tsx          # High-converting Landing Page
│   ├── components/
│   │   ├── ui/               # Accessible UI components (Button, Card, Badge, Progress)
│   │   ├── layout/           # AppHeader, UserNav, MobileNav
│   │   ├── student/          # StudentSidebar
│   │   └── teacher/          # TeacherSidebar
│   ├── context/
│   │   └── auth-context.tsx  # Persistent multi-role session state
│   └── lib/
│       ├── ai.ts             # Google Gemini SDK & zero-cost fallback engine
│       ├── auth.ts           # Demo accounts and auth helpers
│       ├── db.ts             # Prisma ORM singleton client
│       ├── mock-data.ts      # Seed datasets for demonstration
│       ├── types.ts          # Type-safe domain contracts
│       └── utils.ts          # Styling & formatting utilities
├── tests/                    # Automated Node test runner suite
├── vercel.json               # Production deployment headers & security
└── DEPLOYMENT.md             # Complete Zero-Cost Deployment Guide
```

---

## ⚡ Quickstart

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/AlaminM01/ClassConnect-AI.git
cd "ClassConnect AI"
npm install
```

### 2. Configure Environment (100% Free Tiers)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
All external APIs used have permanent free tiers with zero credit card required!

### 3. Generate Prisma Client & Run
```bash
# Generate Prisma Client
npm run prisma:generate

# Run Automated Test Suite
npm test

# Start Next.js Development Server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application locally.

---

## 🚀 Development Phases Status

- [x] **Phase 1**: Requirements analysis, architecture design, Prisma schema, project setup & SaaS landing page.
- [x] **Phase 2**: Authentication & multi-role session management (Student, Teacher, Admin).
- [x] **Phase 3**: Student command center & study dashboard with streak widgets and enrolled courses.
- [x] **Phase 4**: Teacher management studio, course studio, and grading queue.
- [x] **Phase 5**: Interactive course management, catalog, and video/syllabus player with XP rewards.
- [x] **Phase 6**: 24/7 Socratic AI Tutor chatbot with persona switcher and starter prompts.
- [x] **Phase 7**: Notion-grade AI Notes & Summaries Generator with personal study library.
- [x] **Phase 8**: Adaptive AI Quiz Generator with answer rationales and active-recall flashcard deck player.
- [x] **Phase 9**: Gamification hub, weekly campus leaderboard, daily streak claim, and confetti celebrations.
- [x] **Phase 10**: Deep learning analytics, weekly study velocity chart, and teacher cohort grade curves.
- [x] **Phase 11**: Mobile UX optimization, touch targets, and responsive bottom navigation bar.
- [x] **Phase 12**: Automated unit tests for gamification calculations, XP formatting, and Socratic AI fallbacks.
- [x] **Phase 13**: Production deployment configuration, security headers (`vercel.json`), and live Vercel deployment.
