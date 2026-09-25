import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClassConnect AI | Next-Gen AI Virtual Classroom & Learning Ecosystem",
  description:
    "An intelligent learning ecosystem combining the best of Google Classroom, Coursera, Notion, Duolingo, and ChatGPT with real-time AI Tutors, automated notes, and smart quizzes.",
  keywords: [
    "AI Classroom",
    "Virtual Classroom",
    "AI Tutor",
    "Next.js 15",
    "EdTech",
    "Smart Notes",
    "AI Quiz",
    "ClassConnect AI",
  ],
  authors: [{ name: "ClassConnect AI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
