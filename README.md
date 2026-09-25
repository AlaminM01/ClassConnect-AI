# 🎓 ClassConnect AI

> **The Next-Generation AI-Powered Virtual Classroom & Learning Ecosystem**  
> Combining the pedagogy of Google Classroom, the structure of Notion, the mastery of Coursera, the gamification of Duolingo, and the intelligence of ChatGPT into a unified modern SaaS platform.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.4-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)

---

## 🌟 Executive Overview

Modern online learning suffers from fragmented tooling, passive video consumption, low retention rates, and isolated study environments. **ClassConnect AI** solves these systemic problems by integrating real-time generative AI into every facet of the student and instructor experience:

1. **24/7 Socratic AI Tutor**: An intelligent mentor that doesn't just blurt answers—it guides students through concepts, syntax, and problem-solving step-by-step.
2. **Automated AI Notes & Flashcards**: Converts lecture transcripts and syllabi into organized, Notion-style notes, markdown summaries, and active-recall flashcard decks.
3. **Adaptive AI Quiz Engine**: Creates instant self-assessment quizzes with answer rationales and personalized revision topics.
4. **Duolingo-Inspired Gamification**: Daily streaks, XP gain, level milestones, achievement badges, and campus leaderboards driving 98%+ student retention.
5. **Multi-Role Workspaces**: Tailored dashboards for **Students**, **Teachers**, and **Administrators**.

---

## 🏗️ Technical Architecture

```
classconnect-ai/
├── prisma/
│   └── schema.prisma         # Scalable PostgreSQL schema (Users, Courses, Submissions, Quizzes, AI)
├── public/                   # Static assets & brand media
├── src/
│   ├── app/
│   │   ├── (auth)/           # Authentication routes (Sign-in, Sign-up)
│   │   ├── (dashboard)/      # Protected workspaces:
│   │   │   ├── student/      # Enrolled courses, streaks, flashcards, AI tutor
│   │   │   ├── teacher/      # Course studio, assignments, grading, analytics
│   │   │   └── admin/        # User moderation, system health, audit logs
│   │   ├── api/
│   │   │   ├── ai/           # AI Tutor, Notes Generator, Quiz Generator endpoints
│   │   │   └── ...           # CRUD & domain APIs
│   │   ├── globals.css       # Tailwind CSS v4 + Glassmorphic dark styling
│   │   ├── layout.tsx        # Root layout with font optimization & theme tokens
│   │   └── page.tsx          # High-converting landing page with role switchers
│   ├── components/
│   │   ├── ui/               # Modular UI components (Button, Card, Badge, Progress)
│   │   └── shared/           # Navigation, avatars, stats, and dialogs
│   └── lib/
│       ├── db.ts             # Prisma ORM singleton client
│       ├── types.ts          # Type-safe TypeScript domain contracts
│       ├── utils.ts          # Styling & formatting helpers
│       ├── mock-data.ts      # Seed datasets for demonstration & testing
│       └── ai.ts             # Google Gemini SDK orchestration
```

---

## ⚡ Quickstart

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/AlaminM01/EDUSYNC_AI.git
cd "ClassConnect AI"
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your credentials:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/classconnect?schema=public"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
GEMINI_API_KEY="your-gemini-api-key"
```

### 3. Generate Prisma Client & Run
```bash
# Generate Prisma Client
npm run prisma:generate

# Start Next.js Development Server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📊 Database Schema Highlights

The application uses **Prisma ORM** with **PostgreSQL**:
- **User**: Multi-role support (`STUDENT`, `TEACHER`, `ADMIN`), XP tracking, streaks, levels.
- **Course & Module & Lesson**: Modular hierarchical syllabus structure with video and markdown lesson delivery.
- **Enrollment & LessonCompletion**: Granular student progress tracking.
- **Assignment & Submission**: Homework lifecycle with grading and AI-suggested feedback.
- **Quiz, QuizQuestion & QuizResult**: AI and teacher-created assessments with scoring.
- **FlashcardDeck & Flashcard**: Active recall system with mastery tracking.
- **AIChatSession & AIChatMessage**: Context-aware Socratic dialogues.
- **AINote & AIReport**: Auto-generated structured study guides and performance diagnostics.
- **Achievement & UserAchievement**: Badge unlocking with automated XP rewards.

---

## 🚀 Development Phases

- [x] **Phase 1**: Requirements analysis, architecture design, Prisma schema, project setup & landing page.
- [ ] **Phase 2**: Authentication & multi-role session management.
- [ ] **Phase 3**: Student command center & study dashboard.
- [ ] **Phase 4**: Teacher management studio & assignment grading.
- [ ] **Phase 5**: Interactive course management & lesson player.
- [ ] **Phase 6**: AI Tutor chatbot with streaming Socratic answers.
- [ ] **Phase 7**: Notion-grade AI Notes & Summaries Generator.
- [ ] **Phase 8**: AI Quiz & Flashcard Generator.
- [ ] **Phase 9**: Gamification, streaks, XP rewards & leaderboard.
- [ ] **Phase 10**: Deep analytics & cohort performance insights.
- [ ] **Phase 11**: Mobile UX optimization & responsive audit.
- [ ] **Phase 12**: Automated testing & quality assurance.
- [ ] **Phase 13**: Production deployment & cloud configurations.
