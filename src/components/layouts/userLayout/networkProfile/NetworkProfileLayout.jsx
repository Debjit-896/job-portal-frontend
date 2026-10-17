import Header from '../home/Header';
import NetworkProfileLeftSidebar from '../../../sidebar/userSidebar/networkProfile/NetworkProfileLeftSidebar';

export default function NetworkProfileLayout({
  children,
  activeNav = 'network',
  activeMenu = 'network',
  onMenuClick,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      {/* Top Header */}
      <Header activeNav={activeNav} />

      {/* Main Content Area */}
      <div className="w-full max-w-[1360px] mx-auto px-6 py-6 flex gap-6 items-start flex-1">
        {/* Left Navigation Sidebar */}
        <NetworkProfileLeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
        />

        {/* Center/Full Profile Main Content */}
        <main className="flex-1 min-w-0 flex flex-col gap-4">
          {children}
        </main>
      </div>
    </div>
  );
}
