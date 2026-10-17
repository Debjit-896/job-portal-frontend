import { useState } from 'react';
import { Bell, X, Mail } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function EnableNotificationsCard({
  onEnable,
  onDismiss,
}) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <SectionCard className="p-4 relative bg-[#F8FAFF] border-[#D6E4FB] overflow-hidden">
      {/* Close button */}
      <button
        onClick={() => {
          setIsDismissed(true);
          if (onDismiss) onDismiss();
        }}
        className="absolute top-3 right-3 text-[#94A3B8] hover:text-[#64748B] p-1 border-0 bg-transparent cursor-pointer"
        aria-label="Dismiss notification alert"
      >
        <X size={14} />
      </button>

      {/* Title */}
      <h3 className="text-[13px] font-bold text-[#102E6D] leading-snug max-w-[190px] mb-1.5">
        Get notified about
        <br />
        opportunities first!
      </h3>

      {/* Description */}
      <p className="text-[11px] text-[#64748B] leading-relaxed max-w-[190px] mb-3.5">
        Enable desktop notifications to receive real-time updates.
      </p>

      {/* Graphic badge positioned top right */}
      <div className="absolute right-3.5 top-8 w-16 h-16 pointer-events-none flex items-center justify-center">
        {/* Soft circular background */}
        <div className="w-14 h-14 rounded-full bg-[#E0ECFD] flex items-center justify-center relative">
          <div className="w-7 h-7 rounded-full bg-[#1463F3] flex items-center justify-center text-white shadow-md">
            <Bell size={14} className="fill-white" />
          </div>
          {/* Floating mail/message pill */}
          <div className="absolute -bottom-1 -right-1 bg-[#3B82F6] text-white p-1 rounded-md shadow-sm">
            <Mail size={10} />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={onEnable}
        className="bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-[8px] py-1.5 px-3 text-[11.5px] font-semibold cursor-pointer shadow-[0_2px_6px_rgba(20,99,243,0.25)] transition-colors"
      >
        Enable Notifications
      </button>
    </SectionCard>
  );
}
