import Header from '../home/Header';
import JobFilterSidebar from './JobFilterSidebar';

export default function JobLayout({
  children,
  rightSidebar,
  activeNav = 'jobs',
  onFilterChange,
}) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <Header activeNav={activeNav} />

      {/* Main 3-Column Layout: Filter Sidebar (Left), Center Feed/List, Right Sidebar */}
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
        {/* Left Filter Sidebar */}
        <JobFilterSidebar onFilterChange={onFilterChange} />

        {/* Center Main Content Area */}
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {children}
        </main>

        {/* Right Sidebar */}
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
