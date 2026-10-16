import Header from './Header';
import LeftSidebar from './LeftSidebar';

export default function MainLayout({
  children,
  rightSidebar,
  activeNav = 'home',
  onNavClick,
  activeMenu = 'home',
  onMenuClick,
  userProfile,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Header */}
      <Header activeNav={activeNav} onNavClick={onNavClick} />

      {/* Main 3-Column Content Body */}
      <div className="w-full max-w-[1440px] mx-auto px-7 py-6 flex gap-6 items-start flex-1">
        {/* Left Sidebar */}
        <LeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
          userProfile={userProfile}
        />

        {/* Center Feed Column */}
        <main className="flex-1 min-w-0 flex flex-col gap-5">
          {children}
        </main>

        {/* Right Sidebar Column */}
        {rightSidebar && (
          <aside className="w-80 shrink-0 flex flex-col gap-4">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
