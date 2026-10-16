import Header from '../home/Header';
import CompaniesLeftSidebar from '../../../sidebar/userSidebar/companies/CompaniesLeftSidebar';

export default function CompaniesLayout({
  children,
  rightSidebar,
  activeNav = 'companies',
  activeMenu = 'companies',
  onMenuClick,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Header */}
      <Header activeNav={activeNav} />

      {/* Main 3-Column Content Body */}
      <div className="w-full max-w-[1440px] mx-auto px-7 py-6 flex gap-6 items-start flex-1">
        {/* Left Navigation Sidebar */}
        <CompaniesLeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
        />

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          {children}
        </main>

        {/* Right Sidebar Column */}
        {rightSidebar && (
          <aside className="w-[290px] shrink-0 flex flex-col gap-4">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
