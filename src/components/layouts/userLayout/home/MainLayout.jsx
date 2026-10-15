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
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <Header activeNav={activeNav} onNavClick={onNavClick} />

      {/* Main 3-Column Content Body */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '24px 28px',
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start',
          flex: 1,
        }}
      >
        {/* Left Sidebar */}
        <LeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
          userProfile={userProfile}
        />

        {/* Center Feed Column */}
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {children}
        </main>

        {/* Right Sidebar Column */}
        {rightSidebar && (
          <aside
            style={{
              width: '320px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
