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
    { id: 'network', label: 'Network', icon: Network, path: '/candidate/network' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/candidate/messages', badge: unreadMessages },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '/candidate/notifications', badge: unreadNotifications },
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

      {/* 2. Explore Section */}
      <div>
        <h4 className="text-xs font-bold text-[#1E293B] pl-3.5 mb-2 tracking-[0.2px]">
          Explore
        </h4>
        <nav className="flex flex-col gap-1">
          {exploreNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`flex items-center px-3.5 py-2 rounded-[10px] border-0 cursor-pointer text-left w-full transition-all text-[13.5px] ${
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

      {/* 3. Follow Companies Promo Card */}
      <div className="bg-white rounded-[14px] p-4.5 border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-start">
        <div className="flex items-start gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-[9px] bg-[#EFF6FF] flex items-center justify-center text-[#1463F3] shrink-0">
            <Sparkles size={18} />
          </div>
          <h4 className="text-[12.5px] font-bold text-[#102E6D] leading-snug">
            Follow companies you&apos;re interested in
          </h4>
        </div>

        <p className="text-[11px] text-[#64748B] leading-relaxed mb-3.5">
          Get updates on new jobs, company news and more.
        </p>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('all-companies-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-[#1463F3] text-white border-0 rounded-[9px] py-2 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors hover:bg-[#0F52CC]"
        >
          <span>Explore Companies</span>
          <span className="text-[13px]">&rarr;</span>
        </button>
      </div>
    </aside>
  );
}

