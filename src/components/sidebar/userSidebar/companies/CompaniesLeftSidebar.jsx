import {
  Home,
  BriefcaseBusiness,
  Building2,
  Network,
  MessageSquare,
  Bell,
  Compass,
  TrendingUp,
  Bookmark,
  Users,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CompaniesLeftSidebar({
  activeMenu = 'companies',
  onMenuClick,
  unreadMessages = 3,
  unreadNotifications = 5,
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

  const exploreNavItems = [
    { id: 'for-you', label: 'For You', icon: Compass, path: '#' },
    { id: 'trending', label: 'Trending', icon: TrendingUp, path: '#' },
    { id: 'saved', label: 'Saved', icon: Bookmark, path: '/candidate/saved-jobs' },
    { id: 'following', label: 'Following', icon: Users, path: '#' },
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

      {/* 2. Explore Section */}
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
          Explore
        </h4>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {exploreNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 14px',
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

      {/* 3. Follow Companies Promo Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          padding: '18px 14px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1463F3',
              flexShrink: 0,
            }}
          >
            <Sparkles size={18} />
          </div>
          <h4
            style={{
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#102E6D',
              lineHeight: '1.35',
            }}
          >
            Follow companies you&apos;re interested in
          </h4>
        </div>

        <p
          style={{
            fontSize: '11px',
            color: '#64748B',
            lineHeight: '1.45',
            marginBottom: '14px',
          }}
        >
          Get updates on new jobs, company news and more.
        </p>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('all-companies-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
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
          <span>Explore Companies</span>
          <span style={{ fontSize: '13px' }}>&rarr;</span>
        </button>
      </div>
    </aside>
  );
}
