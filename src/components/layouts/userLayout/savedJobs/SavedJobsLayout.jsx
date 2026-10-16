import Header from '../home/Header';
import SavedJobsLeftSidebar from '../../../sidebar/userSidebar/savedJobs/SavedJobsLeftSidebar';

export default function SavedJobsLayout({
  children,
  rightSidebar,
  activeNav,
  activeMenu = 'saved-jobs',
  onMenuClick,
}) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header - Unified candidate dashboard header */}
      <Header activeNav={activeNav} />

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
        {/* Left Navigation Sidebar */}
        <SavedJobsLeftSidebar
          activeMenu={activeMenu}
          onMenuClick={onMenuClick}
        />

        {/* Center Main Content Area */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {children}
        </main>

        {/* Right Sidebar Column */}
        {rightSidebar && (
          <aside
            style={{
              width: '290px',
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
