import {
  Home,
  BriefcaseBusiness,
  Building2,
  Users2,
  MessageSquare,
  Bell,
  Bookmark,
  CheckSquare,
  FileEdit,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ApplicationsLeftSidebar({
  activeMenu = 'my-applications',
  onMenuClick,
  unreadMessages = 3,
  unreadNotifications = 7,
}) {
  const navigate = useNavigate();

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/candidate/dashboard' },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness, path: '/candidate/jobs' },
    { id: 'companies', label: 'Companies', icon: Building2, path: '/candidate/companies' },
    { id: 'network', label: 'Network', icon: Users2, path: '/candidate/network' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/candidate/messages', badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '/candidate/notifications', badge: unreadNotifications },
  ];

  const myJobSearchItems = [
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/candidate/saved-jobs' },
    { id: 'my-applications', label: 'My Applications', icon: CheckSquare, path: '/candidate/applications' },
    { id: 'my-posts', label: 'My Posts', icon: FileEdit, path: '#' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/candidate/settings' },
  ];

  const handleNav = (item) => {
    if (onMenuClick) onMenuClick(item.id);
    if (item.path && item.path !== '#') {
      navigate(item.path);
    }
  };

  return (
    <aside className="w-[205px] shrink-0 flex flex-col gap-6">
      {/* 1. Primary Top Navigation Menu */}
      <nav className="flex flex-col gap-1">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-[10px] border-0 cursor-pointer text-left w-full transition-all text-[13.5px] ${
                isActive
                  ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                  : 'bg-transparent text-[#475569] font-medium hover:bg-[#F8FAFC]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={17}
                  strokeWidth={isActive ? 2.3 : 1.9}
                  className={isActive ? 'text-[#1463F3]' : 'text-[#64748B]'}
                />
                <span>{item.label}</span>
              </div>

              {item.badge !== undefined && item.badge > 0 && (
                <span className="bg-[#EF4444] text-white text-[10.5px] font-bold min-w-[18px] h-[18px] rounded-[9px] flex items-center justify-center px-1">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* 2. My Job Search Navigation Section */}
      <div>
        <h4 className="text-[12px] font-bold text-[#1E293B] pl-3.5 mb-2.5 tracking-[0.2px]">
          My Job Search
        </h4>
        <nav className="flex flex-col gap-1">
          {myJobSearchItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`flex items-center px-3.5 py-2.5 rounded-[10px] border-0 cursor-pointer text-left w-full transition-all text-[13.5px] ${
                  isActive
                    ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                    : 'bg-transparent text-[#475569] font-medium hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={17}
                    strokeWidth={isActive ? 2.3 : 1.9}
                    className={isActive ? 'text-[#1463F3]' : 'text-[#64748B]'}
                  />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 3. Promo Banner Card: Keep applying, keep growing! */}
      <div className="bg-[#EFF6FF] rounded-[14px] p-4 border border-[#DBEAFE] flex flex-col items-start relative overflow-hidden">
        <div className="flex items-start justify-between w-full mb-3">
          <div className="max-w-[110px]">
            <h4 className="text-[12.5px] font-bold text-[#102E6D] leading-tight mb-1">
              Keep applying,
              <br />
              keep growing!
            </h4>
            <p className="text-[10px] text-[#64748B] leading-tight">
              Every application brings you closer to your dream job.
            </p>
          </div>

          {/* Character illustration graphic with laptop */}
          <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1463F3] overflow-hidden">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="8" fill="#1463F3" opacity="0.85"/>
                <path d="M12 40C12 32 17 28 24 28C31 28 36 32 36 40" fill="#1463F3"/>
                <rect x="18" y="32" width="16" height="10" rx="1.5" fill="#93C5FD"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Explore Jobs Button */}
        <button
          type="button"
          onClick={() => navigate('/candidate/jobs')}
          className="w-full bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-[9px] py-2 px-3 text-[11.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors"
        >
          <span>Explore Jobs</span>
          <span className="text-sm font-normal">&rarr;</span>
        </button>
      </div>
    </aside>
  );
}
