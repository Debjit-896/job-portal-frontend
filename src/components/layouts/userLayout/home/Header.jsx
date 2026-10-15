import { useState } from 'react';
import {
  Briefcase,
  Search,
  Home,
  BriefcaseBusiness,
  MessageSquare,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import Avatar from '../../common/userCommon/Avatar';

export default function Header({
  activeNav = 'home',
  onNavClick,
  unreadMessages = 3,
  unreadNotifications = 5,
}) {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userName = user?.name || 'Debjit Pal';
  const userAvatar = user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, badge: null },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness, badge: null },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadNotifications },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E6EEF9',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Left Section: Brand Logo & Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#1463F3',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(20, 99, 243, 0.25)',
              }}
            >
              <Briefcase size={22} strokeWidth={2.2} />
            </div>
            <span
              style={{
                fontSize: '21px',
                fontWeight: '700',
                color: '#102E6D',
                letterSpacing: '-0.3px',
              }}
            >
              JobNest
            </span>
          </div>

          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13.5px',
              color: '#627BAF',
              fontWeight: 500,
            }}
          >
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Jobs</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Network</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Grow</span>
          </nav>
        </div>

        {/* Center: Search Bar */}
        <div style={{ flex: 1, maxWidth: '440px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#F4F7FC',
              borderRadius: '24px',
              padding: '9px 18px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.2s',
            }}
          >
            <Search size={17} color="#8DA0C2" />
            <input
              type="text"
              placeholder="Search jobs, companies, people or posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '13.5px',
                color: '#102E6D',
                fontFamily: 'inherit',
              }}
            />
          </div>
        </div>

        {/* Right Section: Navigation Icons & Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick && onNavClick(item.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px 8px 4px 8px',
                    position: 'relative',
                    color: isActive ? '#1463F3' : '#64748B',
                    transition: 'color 0.15s ease',
                  }}
                  title={item.label}
                >
                  <div style={{ position: 'relative' }}>
                    <Icon size={20} strokeWidth={isActive ? 2.3 : 1.9} />
                    {item.badge !== null && item.badge > 0 && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-8px',
                          backgroundColor: '#EF4444',
                          color: '#FFFFFF',
                          fontSize: '10px',
                          fontWeight: 700,
                          minWidth: '16px',
                          height: '16px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0 3px',
                          border: '2px solid #FFFFFF',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: isActive ? 600 : 500,
                      marginTop: '3px',
                    }}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '24px',
                        height: '2.5px',
                        backgroundColor: '#1463F3',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Profile Dropdown */}
          <div style={{ position: 'relative' }}>
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                cursor: 'pointer',
                padding: '4px 6px',
                borderRadius: '20px',
                userSelect: 'none',
              }}
            >
              <Avatar src={userAvatar} name={userName} size={36} />
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: '#102E6D',
                }}
              >
                {userName}
              </span>
              <ChevronDown size={15} color="#64748B" />
            </div>

            {isDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '48px',
                  width: '180px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #E2E8F0',
                  padding: '6px',
                  zIndex: 200,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    color: '#334155',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={15} /> View Profile
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    color: '#334155',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings size={15} /> Account Settings
                </div>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#F1F5F9',
                    margin: '4px 0',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    color: '#EF4444',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    if (logout) logout();
                  }}
                >
                  <LogOut size={15} /> Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
