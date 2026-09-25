import { AppHeader } from "@/components/layout/app-header";
import { TeacherSidebar } from "@/components/teacher/teacher-sidebar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      {/* Top Application Header */}
      <AppHeader title="Teacher Studio & Faculty Portal" badge="Faculty Access" />

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <TeacherSidebar />
        </div>

        {/* Dynamic Main Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
