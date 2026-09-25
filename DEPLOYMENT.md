# 🌐 Production Deployment Guide - ClassConnect AI

This guide walks you through deploying **ClassConnect AI** to production with **Zero Financial Cost** (100% Free Tiers across all services, no credit card required).

---

## 🚀 1. One-Click Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AlaminM01/ClassConnect-AI)

1. Fork or clone [AlaminM01/ClassConnect-AI](https://github.com/AlaminM01/ClassConnect-AI).
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the Framework Preset to **Next.js**.
5. Add the Environment Variables listed below.
6. Click **Deploy**!

---

## 🔑 2. Environment Variables & Free Tier Services

All cloud services used in ClassConnect AI offer **generous, permanent free tiers**:

| Variable | Recommended Provider | Free Tier Details |
|---|---|---|
| `DATABASE_URL` | **Neon.tech** or **Supabase** | 0.5 GB Postgres database, 100% free with no credit card. |
| `GEMINI_API_KEY` | **Google AI Studio** | 15 RPM, 1,500 requests/day for Gemini 1.5 Flash completely free. |
| `NEXT_PUBLIC_APP_URL` | **Vercel** | Your production domain (e.g. `https://classconnect-ai.vercel.app`). |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | *(Optional)* **Clerk** | 10,000 monthly active users for free. Built-in demo accounts work out-of-the-box! |

### Sample Production `.env`:
```env
DATABASE_URL="postgresql://user:password@ep-cool-db.us-east-2.aws.neon.tech/neondb?sslmode=require"
NEXT_PUBLIC_APP_URL="https://classconnect-ai.vercel.app"
GEMINI_API_KEY="AIzaSy..."
```

---

## 🗄️ 3. Database Initialization (Prisma)

Once your PostgreSQL database URL is created on Neon or Supabase:

```bash
# Push schema tables and relations to remote database
npx prisma db push

# Generate client bindings
npx prisma generate
```

---

## 🔒 4. Zero-Cost Protection Guarantees

ClassConnect AI was built with strict safety defaults:
- **Intelligent Fallback AI**: If no `GEMINI_API_KEY` is provided or if rate limits are reached, the platform seamlessly switches to deterministic Socratic responses. **The application will never fail or incur unexpected API bills.**
- **No Paid External Dependencies**: All core learning features, flashcard players, note generators, streak trackers, and quiz scoring algorithms run directly inside Next.js serverless functions.
