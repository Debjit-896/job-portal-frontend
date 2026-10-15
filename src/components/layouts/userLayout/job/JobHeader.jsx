import { useState } from 'react';
import {
  Briefcase,
  Search,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import Avatar from '../../../common/userCommon/Avatar';

export default function JobHeader({
  activeNav = 'jobs',
  unreadNotifications = 3,
}) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userName = user?.name || 'Debjit Pal';
  const userAvatar = user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

  const navLinks = [
    { id: 'home', label: 'Home', path: '/candidate/dashboard' },
    { id: 'jobs', label: 'Jobs', path: '/candidate/jobs' },
    { id: 'companies', label: 'Companies', path: '#' },
    { id: 'network', label: 'Network', path: '#' },
    { id: 'messages', label: 'Messages', path: '#' },
    { id: 'notifications', label: 'Notifications', path: '#', badge: unreadNotifications },
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
        padding: '0 32px',
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
        {/* Left: Brand Logo */}
        <div
          onClick={() => navigate('/candidate/dashboard')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0 }}
        >
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

        {/* Center: Top Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <div
                key={link.id}
                onClick={() => {
                  if (link.path && link.path !== '#') {
                    navigate(link.path);
                  }
                }}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  padding: '22px 4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#1463F3' : '#475569',
                  transition: 'color 0.15s ease',
                  userSelect: 'none',
                }}
              >
                <span>{link.label}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span
                    style={{
                      backgroundColor: '#EF4444',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 700,
                      minWidth: '16px',
                      height: '16px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 4px',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
                {/* Active Underline bar */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#1463F3',
                      borderRadius: '3px 3px 0 0',
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Search Icon & Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748B',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
            title="Search"
          >
            <Search size={19} />
          </button>

          {/* Profile Dropdown */}
          <div style={{ position: 'relative' }}>
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
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
