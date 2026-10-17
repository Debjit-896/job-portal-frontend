import {
  Home,
  BriefcaseBusiness,
  Building2,
  Users2,
  MessageSquare,
  Bell,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NetworkProfileLeftSidebar({
  activeMenu = 'network',
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

      {/* 2. Promo Banner Card: Grow Your Network */}
      <div className="bg-[#EFF6FF] rounded-[14px] p-4 border border-[#DBEAFE] flex flex-col items-start relative overflow-hidden">
        {/* People group illustration */}
        <div className="flex items-center justify-center w-full mb-2.5">
          <div className="flex items-center bg-[#DBEAFE] px-3 py-1.5 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
              alt="Person 1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=60&q=80"
              alt="Person 2"
              className="w-[26px] h-[26px] rounded-full border-2 border-white object-cover -ml-1.5"
            />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=60&q=80"
              alt="Person 3"
              className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-1.5"
            />
          </div>
        </div>

        <h4 className="text-[12.5px] font-bold text-[#102E6D] leading-tight mb-1">
          Grow Your Network
        </h4>
        <p className="text-[10px] text-[#64748B] leading-tight mb-3.5">
          Connect with professionals, find opportunities, and build your career together.
        </p>

        {/* Explore People Button */}
        <button
          type="button"
          onClick={() => navigate('/candidate/network')}
          className="w-full bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-[9px] py-2 px-3 text-[11.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors"
        >
          <span>Explore People</span>
          <span className="text-sm font-normal">&rarr;</span>
        </button>
      </div>
    </aside>
  );
}
