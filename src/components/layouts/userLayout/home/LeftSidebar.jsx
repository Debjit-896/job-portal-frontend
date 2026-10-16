import {
  Users,
  Building2,
  Network,
  Bookmark,
  FileText,
  Settings,
  ChevronRight,
  ArrowRight,
  Rocket,
  Eye,
  TrendingUp,
} from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';
import Button from '../../../common/userCommon/Button';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function LeftSidebar({
  activeMenu = 'my-feed',
  onMenuClick,
  userProfile = {
    name: 'Debjit Pal',
    headline: 'Aspiring Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    profileCompletion: 80,
  },
}) {
  const menuItems = [
    { id: 'my-feed', label: 'My Feed', icon: Users, badge: null },
    { id: 'companies', label: 'Companies', icon: Building2, badge: null },
    { id: 'network', label: 'Network', icon: Network, badge: null },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, badge: null },
    { id: 'my-applications', label: 'My Applications', icon: FileText, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <aside className="flex flex-col gap-3.5 w-[255px] shrink-0">
      {/* 1. Profile Mini Card */}
      <SectionCard padding="p-4">
        <div className="flex items-center gap-3">
          <Avatar src={userProfile.avatar} name={userProfile.name} size={46} />
          <div className="min-w-0 flex-1">
            <h3 className="text-[14.5px] font-bold text-[#102E6D] mb-0.5 truncate">
              {userProfile.name}
            </h3>
            <p className="text-xs text-[#64748B] mb-1 truncate">
              {userProfile.headline}
            </p>
            <div className="inline-flex items-center gap-0.5 text-[11.5px] text-[#1463F3] font-semibold cursor-pointer hover:underline">
              View Profile <ArrowRight size={12} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#EDF2F7] my-3" />

        {/* Profile Completion Widget */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11.5px] font-semibold text-[#102E6D]">
              Complete Your Profile
            </span>
            <span className="text-[11.5px] font-bold text-[#102E6D]">
              {userProfile.profileCompletion}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden mb-2.5">
            <div
              className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full"
              style={{ width: `${userProfile.profileCompletion}%` }}
            />
          </div>

          <div className="flex items-start justify-between gap-1.5 cursor-pointer">
            <p className="text-[11px] text-[#64748B] leading-snug">
              Add skills, projects and experience to get more job opportunities.
            </p>
            <ChevronRight size={14} className="text-[#94A3B8] mt-0.5 shrink-0" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#EDF2F7] my-3" />

        {/* Profile Analytics / Viewers */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between cursor-pointer py-0.5">
            <div className="flex items-center gap-1.5">
              <Eye size={13} className="text-[#64748B]" />
              <span className="text-[11.5px] text-[#64748B] font-medium">
                Profile viewers
              </span>
            </div>
            <span className="text-xs font-bold text-[#1463F3]">
              {userProfile.profileViewers ?? 142}
            </span>
          </div>

          <div className="flex items-center justify-between cursor-pointer py-0.5">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={13} className="text-[#64748B]" />
              <span className="text-[11.5px] text-[#64748B] font-medium">
                Post impressions
              </span>
            </div>
            <span className="text-xs font-bold text-[#102E6D]">
              {userProfile.postImpressions ?? '1.2k'}
            </span>
          </div>
        </div>
      </SectionCard>

      {/* 2. Navigation Menu */}
      <SectionCard padding="p-2" className="flex flex-col gap-0.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onMenuClick && onMenuClick(item.id)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-[9px] border-none text-left w-full text-[13px] transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                  : 'bg-transparent text-[#475569] hover:bg-[#F8FAFC] font-medium'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  size={17}
                  strokeWidth={isActive ? 2.2 : 1.9}
                  className={isActive ? 'text-[#1463F3]' : 'text-[#64748B]'}
                />
                <span>{item.label}</span>
              </div>

              {item.badge !== null && item.badge > 0 && (
                <span className="bg-[#EF4444] text-white text-[10px] font-bold min-w-4.5 h-4.5 rounded-full flex items-center justify-center px-1">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </SectionCard>

      {/* 3. Promo Banner / Grow Your Career */}
      <div className="bg-gradient-to-br from-[#F0F6FF] to-[#E8F1FD] rounded-[14px] p-4 border border-[#DCE7F7] relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1463F3] shadow-[0_2px_6px_rgba(20,99,243,0.15)]">
            <Rocket size={16} />
          </div>
          <h4 className="text-[13px] font-bold text-[#102E6D]">Grow Your Career</h4>
        </div>
        <p className="text-[11.5px] text-[#64748B] leading-normal mb-3.5">
          Join discussions, follow companies, get noticed by recruiters.
        </p>
        <Button variant="primary" size="sm" fullWidth className="text-xs py-1.5 px-3">
          Explore Now
        </Button>
      </div>
    </aside>
  );
}
