import { Bell, Check, MoreHorizontal } from 'lucide-react';

export default function NotificationsHeader({
  title = 'Notifications',
  subtitle = 'Stay updated with your jobs, network, companies and platform activity.',
  onMarkAllRead,
  onMoreOptions,
}) {
  return (
    <div className="flex items-center justify-between pb-1">
      {/* Left side: Icon, Title & Subtitle */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-[#EBF2FE] flex items-center justify-center text-[#1463F3] shrink-0 mt-0.5">
          <Bell size={22} className="fill-[#1463F3]/20" />
        </div>

        <div>
          <h1 className="text-[20px] font-bold text-[#102E6D] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-[12.5px] text-[#64748B] mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right side: Mark all as read & More options buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMarkAllRead}
          className="border border-[#D0DFFA] bg-white hover:bg-[#F5F8FF] text-[#1463F3] text-[12.5px] font-medium py-1.5 px-3 rounded-[8px] flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
        >
          <Check size={14} strokeWidth={2.5} />
          <span>Mark all as read</span>
        </button>

        <button
          type="button"
          onClick={onMoreOptions}
          className="w-8 h-8 rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center text-[#64748B] cursor-pointer shadow-xs transition-colors"
          title="More options"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
