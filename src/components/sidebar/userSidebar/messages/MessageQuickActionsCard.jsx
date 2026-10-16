import { Phone, Paperclip, Video, Ban } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function MessageQuickActionsCard({
  onScheduleCall,
  onSendFile,
  onStartVideoCall,
  onBlockUser,
}) {
  const actions = [
    {
      id: 'call',
      icon: Phone,
      label: 'Schedule a Call',
      onClick: onScheduleCall,
    },
    {
      id: 'file',
      icon: Paperclip,
      label: 'Send a File',
      onClick: onSendFile,
    },
    {
      id: 'video',
      icon: Video,
      label: 'Start Video Call',
      onClick: onStartVideoCall,
    },
    {
      id: 'block',
      icon: Ban,
      label: 'Block User',
      onClick: onBlockUser,
    },
  ];

  return (
    <SectionCard className="p-5 flex flex-col gap-3">
      <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
        Quick Actions
      </h4>

      <div className="flex flex-col gap-1">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              type="button"
              onClick={act.onClick}
              className="flex items-center gap-3 py-2 px-1 bg-transparent border-0 rounded-lg hover:bg-slate-50 cursor-pointer text-left transition-colors"
            >
              <div className="text-[#64748B] flex items-center justify-center">
                <Icon size={16} />
              </div>
              <span className="text-xs text-[#334155] font-medium">
                {act.label}
              </span>
            </button>
          );
        })}
      </div>
    </SectionCard>
  );
}
