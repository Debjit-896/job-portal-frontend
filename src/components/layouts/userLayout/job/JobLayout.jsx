import Header from '../home/Header';
import JobFilterSidebar from './JobFilterSidebar';

export default function JobLayout({
  children,
  rightSidebar,
  activeNav = 'jobs',
  onFilterChange,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Header */}
      <Header activeNav={activeNav} />

      {/* Main 3-Column Layout: Filter Sidebar (Left), Center Feed/List, Right Sidebar */}
      <div className="w-full max-w-[1440px] mx-auto px-7 py-6 flex gap-6 items-start flex-1">
        {/* Left Filter Sidebar */}
        <JobFilterSidebar onFilterChange={onFilterChange} />

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 flex flex-col gap-5">
          {children}
        </main>

        {/* Right Sidebar */}
        {rightSidebar && (
          <aside className="w-80 shrink-0 flex flex-col gap-4">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
