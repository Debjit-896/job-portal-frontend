import Header from '../home/Header';
import MessagesLeftSidebar from '../../../sidebar/userSidebar/messages/MessagesLeftSidebar';

export default function MessagesLayout({
  children,
  rightSidebar,
  activeNav = 'messages',
  activeMenu = 'messages',
  onMenuClick,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      {/* Top Header */}
      <Header activeNav={activeNav} />

      {/* Main 3-Column Content Body */}
      <div className="w-full max-w-[1440px] mx-auto px-7 py-6 flex gap-6 items-start flex-1">
        {/* Left Navigation Sidebar */}
        <MessagesLeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
        />

        {/* Center Main Content Area (Chat container) */}
        <main className="flex-1 min-w-0 flex flex-col">
          {children}
        </main>

        {/* Right Sidebar Column */}
        {rightSidebar && (
          <aside className="w-[300px] shrink-0 flex flex-col gap-4">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
