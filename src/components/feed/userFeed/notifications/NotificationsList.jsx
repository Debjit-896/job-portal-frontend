import NotificationCard from './NotificationCard';
import { BellOff } from 'lucide-react';

export default function NotificationsList({
  notifications = [],
  onActionClick,
  onMoreOptions,
  onMarkAsRead,
}) {
  if (notifications.length === 0) {
    return (
      <div className="bg-white rounded-[14px] border border-[#E9EFF8] p-12 text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8] mb-3">
          <BellOff size={24} />
        </div>
        <h4 className="text-[15px] font-bold text-[#102E6D] mb-1">
          No notifications yet
        </h4>
        <p className="text-[12.5px] text-[#64748B] max-w-[280px]">
          We will notify you when something important happens regarding your jobs, network, or messages.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onActionClick={onActionClick}
          onMoreOptions={onMoreOptions}
          onMarkAsRead={onMarkAsRead}
        />
      ))}
    </div>
  );
}
