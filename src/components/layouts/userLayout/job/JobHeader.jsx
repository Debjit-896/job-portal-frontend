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
    { id: 'companies', label: 'Companies', path: '/candidate/companies' },
    { id: 'network', label: 'Network', path: '/candidate/network' },
    { id: 'messages', label: 'Messages', path: '#' },
    { id: 'notifications', label: 'Notifications', path: '#', badge: unreadNotifications },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6EEF9] h-[68px] flex items-center px-8">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <div
          onClick={() => navigate('/candidate/dashboard')}
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="w-[38px] h-[38px] bg-[#1463F3] rounded-10 flex items-center justify-center text-white shadow-[0_4px_10px_rgba(20,99,243,0.25)]">
            <Briefcase size={22} strokeWidth={2.2} />
          </div>
          <span className="text-[21px] font-bold text-[#102E6D] tracking-tight">
            JobNest
          </span>
        </div>

        {/* Center: Top Navigation Links */}
        <nav className="flex items-center gap-7">
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
                className={`relative cursor-pointer py-[22px] px-1 inline-flex items-center gap-1.5 text-sm select-none transition-colors duration-150 ${
                  isActive
                    ? 'font-semibold text-[#1463F3]'
                    : 'font-medium text-[#475569] hover:text-[#102E6D]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="bg-[#EF4444] text-white text-[10px] font-bold min-w-4 h-4 rounded-full flex items-center justify-center px-1">
                    {link.badge}
                  </span>
                )}
                {/* Active Underline bar */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1463F3] rounded-t-[3px]" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Search Icon & Profile */}
        <div className="flex items-center gap-5 shrink-0">
          <button
            type="button"
            className="bg-transparent border-0 cursor-pointer text-[#64748B] hover:text-[#102E6D] p-1.5 flex items-center justify-center rounded-full transition-colors duration-150"
            title="Search"
          >
            <Search size={19} />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2.5 cursor-pointer py-1 px-1.5 rounded-full select-none hover:bg-slate-50 transition-colors duration-150"
            >
              <Avatar src={userAvatar} name={userName} size={36} />
              <span className="text-[13.5px] font-semibold text-[#102E6D]">
                {userName}
              </span>
              <ChevronDown size={15} className="text-[#64748B]" />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 w-[180px] bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-1.5 z-50">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#334155] hover:bg-slate-100 cursor-pointer transition-colors duration-150"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={15} /> View Profile
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#334155] hover:bg-slate-100 cursor-pointer transition-colors duration-150"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings size={15} /> Account Settings
                </div>
                <div className="h-px bg-[#F1F5F9] my-1" />
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#EF4444] hover:bg-red-50 cursor-pointer font-medium transition-colors duration-150"
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
