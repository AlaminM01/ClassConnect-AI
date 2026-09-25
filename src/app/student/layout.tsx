import { AppHeader } from "@/components/layout/app-header";
import { StudentSidebar } from "@/components/student/student-sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      {/* Top Application Header */}
      <AppHeader title="Student Command Center" badge="Spring Semester" />

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <StudentSidebar />
        </div>

        {/* Dynamic Main Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
          <div className="max-w-7xl mx-auto space-y-8">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
