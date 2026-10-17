import {
  Briefcase,
  Users,
  MessageSquare,
  Building,
  Settings,
  MoreHorizontal,
  ArrowRight,
  UserPlus,
} from 'lucide-react';

export default function NotificationCard({
  notification,
  onActionClick,
  onMoreOptions,
  onMarkAsRead,
}) {
  const {
    id,
    type,
    unread = false,
    actor,
    avatar,
    icon,
    iconBg,
    isHiring = false,
    title,
    body,
    actionLink,
    timeAgo,
  } = notification;

  // Render the left visual icon/avatar
  const renderVisual = () => {
    if (avatar) {
      return (
        <img
          src={avatar}
          alt={actor || 'Avatar'}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
      );
    }

    if (icon === 'amazon') {
      return (
        <div className="w-10 h-10 rounded-[10px] bg-[#111827] flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-xs">
          A
        </div>
      );
    }

    if (icon === 'briefcase') {
      return (
        <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#10B981]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
          <Briefcase size={20} />
        </div>
      );
    }

    if (icon === 'users') {
      return (
        <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#6366F1]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
          <Users size={20} />
        </div>
      );
    }

    if (icon === 'message') {
      return (
        <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#1463F3]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
          <MessageSquare size={20} />
        </div>
      );
    }

    if (icon === 'building') {
      return (
        <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#0D9488]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
          <Building size={20} />
        </div>
      );
    }

    if (icon === 'settings') {
      return (
        <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#94A3B8]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
          <Settings size={20} />
        </div>
      );
    }

    return (
      <div className={`w-10 h-10 rounded-[10px] ${iconBg || 'bg-[#1463F3]'} flex items-center justify-center text-white shrink-0 shadow-xs`}>
        <Briefcase size={20} />
      </div>
    );
  };

  return (
    <div
      onClick={() => onMarkAsRead && onMarkAsRead(id)}
      className={`group relative rounded-[14px] p-4 transition-all duration-150 border cursor-pointer ${
        unread
          ? 'bg-[#F2F6FE] border-[#DBE7FA] shadow-xs'
          : 'bg-white border-[#E9EFF8] hover:border-[#D5E2F5] hover:bg-[#FAFBFD]'
      }`}
    >
      <div className="flex items-start gap-3.5">
        {/* Unread indicator blue dot */}
        <div className="w-2.5 flex justify-center pt-3.5 shrink-0">
          {unread && (
            <span className="w-2 h-2 rounded-full bg-[#1463F3] block" />
          )}
        </div>

        {/* Visual Badge/Avatar */}
        <div className="shrink-0">{renderVisual()}</div>

        {/* Content Container */}
        <div className="flex-1 min-w-0 pr-2">
          {/* Top Line: Actor Name & Badges */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[13.5px] font-bold text-[#102E6D]">
              {actor}
            </span>

            {isHiring && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                Hiring Now
              </span>
            )}
          </div>

          {/* Title (Bold statement like "Your application for Junior Web Developer has been viewed") */}
          {title && (
            <h4 className="text-[13px] font-bold text-[#102E6D] leading-snug mb-0.5">
              {title}
            </h4>
          )}

          {/* Subtext / Description Body */}
          {body && (
            <p className="text-[12px] text-[#64748B] leading-relaxed">
              {body}
            </p>
          )}

          {/* Action Link (e.g. View jobs -> or View job ->) */}
          {actionLink && (
            <div className="mt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onActionClick) onActionClick(notification);
                }}
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#1463F3] hover:text-[#0E52D4] border-0 bg-transparent p-0 cursor-pointer"
              >
                <span>{actionLink.text}</span>
                <ArrowRight size={13} strokeWidth={2.2} />
              </button>
            </div>
          )}
        </div>

        {/* Right side: Time Ago and More Options (...) */}
        <div className="flex items-center gap-3 shrink-0 self-start pt-0.5">
          <span className="text-[11.5px] text-[#94A3B8] whitespace-nowrap">
            {timeAgo}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onMoreOptions) onMoreOptions(id);
            }}
            className="w-7 h-7 rounded-md flex items-center justify-center text-[#94A3B8] hover:text-[#64748B] hover:bg-black/5 border-0 bg-transparent cursor-pointer transition-colors"
            title="Options"
          >
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
