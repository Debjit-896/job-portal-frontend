import {
  Home,
  BriefcaseBusiness,
  Building2,
  Users2,
  MessageSquare,
  Bell,
  User,
  Bookmark,
  CheckSquare,
  FileEdit,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotificationsLeftSidebar({
  activeMenu = 'notifications',
  onMenuClick,
  unreadMessages = 3,
  unreadNotifications = 7,
  onManageNotifications,
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

  const quickLinks = [
    { id: 'profile', label: 'My Profile', icon: User, path: '#' },
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
    <aside className="w-[205px] shrink-0 flex flex-col gap-5">
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

      {/* 2. Quick Links Section */}
      <div>
        <h4 className="text-[12px] font-bold text-[#1E293B] pl-3.5 mb-2 tracking-[0.2px]">
          Quick Links
        </h4>
        <nav className="flex flex-col gap-1">
          {quickLinks.map((item) => {
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

      {/* 3. Promo Card: Stay Updated Stay Ahead */}
      <div className="bg-gradient-to-br from-[#EEF4FF] to-[#E3EDFD] rounded-[16px] p-4.5 border border-[#D5E4FC] shadow-[0_2px_8px_rgba(20,99,243,0.06)] flex flex-col items-start relative overflow-hidden">
        {/* Header and graphic */}
        <div className="flex items-start justify-between w-full mb-3">
          <div>
            <h4 className="text-[13px] font-bold text-[#102E6D] leading-tight mb-1">
              Stay Updated
              <br />
              Stay Ahead
            </h4>
            <p className="text-[10px] text-[#64748B] leading-tight max-w-[100px]">
              Get the latest job alerts, network updates and more.
            </p>
          </div>

          {/* Graphic badge with bell and person working on laptop */}
          <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
            {/* Soft decorative background circles */}
            <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-full blur-[1px]"></div>
            
            {/* Bell badge floating */}
            <div className="absolute -top-1 -right-0.5 w-6 h-6 bg-[#1463F3] rounded-full flex items-center justify-center text-white shadow-[0_2px_6px_rgba(20,99,243,0.4)] z-10">
              <Bell size={12} className="fill-white" />
            </div>

            {/* Avatar / illustration icon */}
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Working user"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Manage Notifications Button */}
        <button
          type="button"
          onClick={() => {
            if (onManageNotifications) onManageNotifications();
            else navigate('/candidate/settings');
          }}
          className="w-full bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-[9px] py-2 px-3 text-[11.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_8px_rgba(20,99,243,0.25)] transition-colors"
        >
          <span>Manage Notifications</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </aside>
  );
}
