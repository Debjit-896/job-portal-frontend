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
    { id: 'network', label: 'Network', icon: Network, path: '/candidate/network' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '#', badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '#', badge: unreadNotifications },
  ];

  const jobSearchItems = [
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, path: '/candidate/saved-jobs' },
    { id: 'applied-jobs', label: 'Applied Jobs', icon: CheckSquare, path: '#' },
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
    <aside className="w-[210px] shrink-0 flex flex-col gap-5.5">
      {/* 1. Primary Navigation Menu */}
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

      {/* 2. My Job Search Navigation */}
      <div>
        <h4 className="text-xs font-bold text-[#1E293B] pl-3.5 mb-2 tracking-[0.2px]">
          My Job Search
        </h4>
        <nav className="flex flex-col gap-1">
          {jobSearchItems.map((item) => {
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

      {/* 3. Promo Card: Keep track of your dream jobs */}
      <div className="bg-white rounded-[14px] p-[16px_14px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-start relative overflow-hidden">
        <div className="flex justify-between w-full items-start">
          <div className="max-w-[120px]">
            <h4 className="text-[12.5px] font-bold text-[#102E6D] leading-snug mb-1.5">
              Keep track of your dream jobs
            </h4>
            <p className="text-[10.5px] text-[#64748B] leading-relaxed mb-3.5">
              Save jobs you like and come back to them anytime.
            </p>
          </div>

          {/* Bookmark & Character Illustration Graphic */}
          <div className="relative w-[46px] h-[46px] shrink-0">
            <div className="w-8 h-10 bg-[#1463F3] rounded-md flex items-start justify-center pt-1.5 text-white shadow-[0_4px_10px_rgba(20,99,243,0.25)]">
              <Bookmark size={15} fill="#FFFFFF" />
            </div>
            {/* Person avatar circle */}
            <div className="absolute bottom-0 right-0 w-[26px] h-[26px] rounded-full bg-[#EFF6FF] border-2 border-white flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/candidate/jobs')}
          className="w-full bg-[#1463F3] text-white border-0 rounded-[9px] py-2 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors hover:bg-[#0F52CC]"
        >
          <span>Browse Jobs</span>
          <span className="text-[13px]">&rarr;</span>
        </button>
      </div>
    </aside>
  );
}

