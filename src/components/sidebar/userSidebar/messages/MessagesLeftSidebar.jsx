import {
  Home,
  BriefcaseBusiness,
  Building2,
  Users2,
  MessageSquare,
  Bell,
  Users,
  UserCheck,
  Bookmark,
  Mail,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MessagesLeftSidebar({
  activeMenu = 'messages',
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

  const myNetworkItems = [
    { id: 'connections', label: 'Connections', icon: Users, path: '#' },
    { id: 'following', label: 'Following', icon: UserCheck, path: '#' },
    { id: 'saved', label: 'Saved', icon: Bookmark, path: '/candidate/saved-jobs' },
    { id: 'invitations', label: 'Invitations', icon: Mail, path: '#' },
  ];

  const handleNav = (item) => {
    if (onMenuClick) onMenuClick(item.id);
    if (item.path && item.path !== '#') {
      navigate(item.path);
    }
  };

  return (
    <aside className="w-[210px] shrink-0 flex flex-col gap-[22px]">
      {/* 1. Main Navigation */}
      <nav className="flex flex-col gap-[3px]">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className={`flex items-center justify-between px-3.5 py-[9px] rounded-10 border-0 text-[13.5px] cursor-pointer text-left w-full transition-all duration-150 ${
                isActive
                  ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                  : 'bg-transparent text-[#475569] font-medium hover:bg-slate-100 hover:text-slate-800'
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

      {/* 2. My Network Navigation */}
      <div>
        <h4 className="text-xs font-bold text-[#1E293B] pl-3.5 mb-2 tracking-[0.2px]">
          My Network
        </h4>
        <nav className="flex flex-col gap-[3px]">
          {myNetworkItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`flex items-center px-3.5 py-[9px] rounded-10 border-0 text-[13.5px] cursor-pointer text-left w-full transition-all duration-150 ${
                  isActive
                    ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                    : 'bg-transparent text-[#475569] font-medium hover:bg-slate-100 hover:text-slate-800'
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

      {/* 3. Promo Card: Grow Your Network */}
      <div className="bg-white rounded-[14px] p-4 sm:p-3.5 border border-[#E2E8F0] shadow-xs flex flex-col items-start">
        {/* People group illustration */}
        <div className="flex items-center justify-center w-full mb-2.5">
          <div className="flex items-center bg-[#EFF6FF] px-3 py-1.5 rounded-full">
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

        <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-1">
          Grow Your Network
        </h4>

        <p className="text-[11px] text-[#64748B] leading-[1.45] mb-3.5">
          Connect with professionals, find opportunities, and build your career together.
        </p>

        <button
          type="button"
          onClick={() => navigate('/candidate/network')}
          className="w-full bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-[9px] py-2 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors duration-150"
        >
          <span>Explore People</span>
          <span className="text-[13px]">&rarr;</span>
        </button>
      </div>
    </aside>
  );
}
