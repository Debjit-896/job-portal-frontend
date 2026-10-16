import { Phone, Video, MoreVertical } from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';

export default function ChatHeader({
  activeChat = {
    name: 'Rahul Saha',
    isOnline: true,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
  },
  onCall,
  onVideoCall,
  onMoreOptions,
}) {
  return (
    <div className="h-16 px-5 border-b border-[#E2E8F0] flex items-center justify-between bg-white shrink-0">
      {/* Left: Avatar + Name + Online badge */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar src={activeChat.avatar} name={activeChat.name} size={38} />
          {activeChat.isOnline && (
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] border-2 border-white rounded-full" />
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#102E6D] m-0 leading-tight">
            {activeChat.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            {activeChat.isOnline && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            )}
            <span className="text-[11px] text-[#64748B]">
              {activeChat.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Phone, Video, 3-dots */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onCall}
          title="Voice Call"
          className="p-2 text-[#64748B] hover:text-[#1463F3] hover:bg-slate-50 rounded-lg bg-transparent border-0 cursor-pointer transition-colors"
        >
          <Phone size={17} />
        </button>

        <button
          type="button"
          onClick={onVideoCall}
          title="Video Call"
          className="p-2 text-[#64748B] hover:text-[#1463F3] hover:bg-slate-50 rounded-lg bg-transparent border-0 cursor-pointer transition-colors"
        >
          <Video size={18} />
        </button>

        <button
          type="button"
          onClick={onMoreOptions}
          title="More Options"
          className="p-2 text-[#64748B] hover:text-[#1463F3] hover:bg-slate-50 rounded-lg bg-transparent border-0 cursor-pointer transition-colors"
        >
          <MoreVertical size={17} />
        </button>
      </div>
    </div>
  );
}
