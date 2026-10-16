import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Briefcase,
  Search,
  Home,
  BriefcaseBusiness,
  Building2,
  Users2,
  MessageSquare,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useAuth } from '../../../../hooks/useAuth';
import Avatar from '../../../common/userCommon/Avatar';

export default function Header({
  activeNav,
  onNavClick,
  unreadMessages = 3,
  unreadNotifications = 5,
}) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userName = user?.name || 'Debjit Pal';
  const userAvatar = user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

  const currentActiveNav =
    activeNav ||
    (location.pathname.startsWith('/candidate/network') || location.pathname.startsWith('/user/network')
      ? 'network'
      : location.pathname.startsWith('/candidate/companies') || location.pathname.startsWith('/user/companies')
      ? 'companies'
      : location.pathname.startsWith('/candidate/jobs') || location.pathname.startsWith('/user/jobs')
      ? 'jobs'
      : 'home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/candidate/dashboard', badge: null },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness, path: '/candidate/jobs', badge: null },
    { id: 'companies', label: 'Companies', icon: Building2, path: '/candidate/companies', badge: null },
    { id: 'network', label: 'Network', icon: Users2, path: '/candidate/network', badge: null },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: null, badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: null, badge: unreadNotifications },
  ];

  const handleNavItemClick = (item) => {
    if (onNavClick) {
      onNavClick(item.id);
    }
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6EEF9] h-[68px] flex items-center px-7">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-6">
        {/* Left Section: Brand Logo & Links */}
        <div className="flex items-center gap-8 shrink-0">
          <div
            onClick={() => navigate('/candidate/dashboard')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-[38px] height-[38px] h-[38px] bg-[#1463F3] rounded-[10px] flex items-center justify-center text-white shadow-[0_4px_10px_rgba(20,99,243,0.25)]">
              <Briefcase size={22} strokeWidth={2.2} />
            </div>
            <span className="text-[21px] font-bold text-[#102E6D] tracking-[-0.3px]">
              JobNest
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-3 text-[13.5px] text-[#627BAF] font-medium">
            <span
              onClick={() => navigate('/candidate/jobs')}
              className="cursor-pointer transition-colors hover:text-[#1463F3]"
            >
              Jobs
            </span>
            <span className="text-[#CBD5E1]">&bull;</span>
            <span
              onClick={() => navigate('/candidate/network')}
              className="cursor-pointer transition-colors hover:text-[#1463F3]"
            >
              Network
            </span>
            <span className="text-[#CBD5E1]">&bull;</span>
            <span
              onClick={() => navigate('/candidate/companies')}
              className="cursor-pointer transition-colors hover:text-[#1463F3]"
            >
              Grow
            </span>
          </nav>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-[440px]">
          <div className="flex items-center gap-2.5 bg-[#F4F7FC] rounded-full px-4.5 py-2 border border-[#E2E8F0] transition-all focus-within:border-[#1463F3] focus-within:bg-white focus-within:shadow-[0_2px_8px_rgba(20,99,243,0.1)]">
            <Search size={17} className="text-[#8DA0C2] shrink-0" />
            <input
              type="text"
              placeholder="Search jobs, companies, people or posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none bg-transparent outline-none w-full text-[13.5px] text-[#102E6D] placeholder-[#8DA0C2]"
            />
          </div>
        </div>

        {/* Right Section: Navigation Icons & Profile */}
        <div className="flex items-center gap-5.5 shrink-0">
          <div className="flex items-center gap-4.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentActiveNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item)}
                  className={`flex flex-col items-center justify-center bg-transparent border-none cursor-pointer py-1.5 px-2 relative transition-colors duration-150 ${
                    isActive ? 'text-[#1463F3]' : 'text-[#64748B] hover:text-[#102E6D]'
                  }`}
                  title={item.label}
                >
                  <div className="relative">
                    <Icon size={20} strokeWidth={isActive ? 2.3 : 1.9} />
                    {item.badge !== null && item.badge > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-[#EF4444] text-white text-[10px] font-bold min-w-4 h-4 rounded-full flex items-center justify-center px-1 border-2 border-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className={`text-[11px] mt-0.5 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#1463F3] rounded-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2.5 cursor-pointer p-1 rounded-full hover:bg-[#F1F5F9] select-none transition-colors"
            >
              <Avatar src={userAvatar} name={userName} size={36} />
              <span className="hidden sm:inline text-[13.5px] font-semibold text-[#102E6D]">
                {userName}
              </span>
              <ChevronDown size={15} className="text-[#64748B]" />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)] border border-[#E2E8F0] p-1.5 z-50">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#334155] cursor-pointer hover:bg-[#F8FAFC]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={15} /> View Profile
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#334155] cursor-pointer hover:bg-[#F8FAFC]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings size={15} /> Account Settings
                </div>
                <div className="h-px bg-[#F1F5F9] my-1" />
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#EF4444] cursor-pointer hover:bg-[#FEF2F2] font-medium"
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
