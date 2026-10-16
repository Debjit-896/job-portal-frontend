import {
  Home,
  BriefcaseBusiness,
  Building2,
  Network,
  MessageSquare,
  Bell,
  Bookmark,
  CheckSquare,
  FileEdit,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SavedJobsLeftSidebar({
  activeMenu = 'saved-jobs',
  onMenuClick,
  unreadMessages = 3,
  unreadNotifications = 7,
}) {
  const navigate = useNavigate();

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/candidate/dashboard' },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness, path: '/candidate/jobs' },
    { id: 'companies', label: 'Companies', icon: Building2, path: '/candidate/companies' },
    { id: 'network', label: 'Network', icon: Network, path: '#' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '#', badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '#', badge: unreadNotifications },
  ];

  const jobSearchItems = [
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/candidate/saved-jobs' },
    { id: 'applied-jobs', label: 'Applied Jobs', icon: CheckSquare, path: '#' },
    { id: 'my-posts', label: 'My Posts', icon: FileEdit, path: '#' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '#' },
  ];

  const handleNav = (item) => {
    if (onMenuClick) onMenuClick(item.id);
    if (item.path && item.path !== '#') {
      navigate(item.path);
    }
  };

  return (
    <aside style={{ width: '210px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '22px' }}>
      {/* 1. Primary Navigation Menu */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 14px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: isActive ? '#EAF3FF' : 'transparent',
                color: isActive ? '#1463F3' : '#475569',
                fontWeight: isActive ? 600 : 500,
                fontSize: '13.5px',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon
                  size={17}
                  strokeWidth={isActive ? 2.3 : 1.9}
                  color={isActive ? '#1463F3' : '#64748B'}
                />
                <span>{item.label}</span>
              </div>

              {item.badge !== undefined && item.badge > 0 && (
                <span
                  style={{
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '9px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* 2. My Job Search Navigation */}
      <div>
        <h4
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#1E293B',
            paddingLeft: '14px',
            marginBottom: '8px',
            letterSpacing: '0.2px',
          }}
        >
          My Job Search
        </h4>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {jobSearchItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: isActive ? '#EAF3FF' : 'transparent',
                  color: isActive ? '#1463F3' : '#475569',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon
                    size={17}
                    strokeWidth={isActive ? 2.3 : 1.9}
                    color={isActive ? '#1463F3' : '#64748B'}
                  />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 3. Promo Card: Keep track of your dream jobs */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          padding: '16px 14px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: '120px' }}>
            <h4
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: '#102E6D',
                lineHeight: '1.35',
                marginBottom: '6px',
              }}
            >
              Keep track of your dream jobs
            </h4>
            <p
              style={{
                fontSize: '10.5px',
                color: '#64748B',
                lineHeight: '1.4',
                marginBottom: '14px',
              }}
            >
              Save jobs you like and come back to them anytime.
            </p>
          </div>

          {/* Bookmark & Character Illustration Graphic */}
          <div
            style={{
              position: 'relative',
              width: '46px',
              height: '46px',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '40px',
                backgroundColor: '#1463F3',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '6px',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(20, 99, 243, 0.25)',
              }}
            >
              <Bookmark size={15} fill="#FFFFFF" />
            </div>
            {/* Person avatar circle */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#EFF6FF',
                border: '2px solid #FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
                alt="Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/candidate/jobs')}
          style={{
            width: '100%',
            backgroundColor: '#1463F3',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '9px',
            padding: '8px 12px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            boxShadow: '0 3px 8px rgba(20, 99, 243, 0.25)',
            transition: 'background-color 0.15s ease',
          }}
        >
          <span>Browse Jobs</span>
          <span style={{ fontSize: '13px' }}>&rarr;</span>
        </button>
      </div>
    </aside>
  );
}
