import { useState } from 'react';
import { Check, UserPlus, MessageSquare, MoreHorizontal, MapPin, Calendar, Mail } from 'lucide-react';

export default function NetworkProfileHeaderCard({ member, onMessage }) {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FF] rounded-[18px] border border-[#D5E5FA] p-6 sm:p-7 relative overflow-hidden shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
        {/* Left: Avatar + Details */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          {/* Avatar with Online Green Dot */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white shadow-md shrink-0 mx-auto sm:mx-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Green online indicator dot */}
            <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white shadow-xs" />
          </div>

          {/* Details */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0F172A] leading-tight">
                {member.name}
              </h1>
              {member.isVerified && (
                <span
                  title="Verified Professional"
                  className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center text-[10px] shrink-0"
                >
                  <Check size={10} strokeWidth={3} />
                </span>
              )}
            </div>

            <p className="text-[13px] font-medium text-[#475569] mt-1">
              {member.headline}
            </p>

            {/* Quick badges row: Location, Age, Email */}
            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap text-[11.5px] text-[#64748B] mt-2.5">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#94A3B8]" />
                {member.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-[#94A3B8]" />
                {member.age} years
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail size={13} className="text-[#94A3B8]" />
                {member.email}
              </span>
            </div>

            {/* Bio */}
            <p className="text-[12px] text-[#475569] mt-3 leading-relaxed max-w-xl">
              {member.shortBio}
            </p>

            {/* Skill tags under header */}
            {member.tags && member.tags.length > 0 && (
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mt-3">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Connect, Message, 3-dots */}
        <div className="flex items-center gap-2.5 shrink-0 self-center sm:self-start">
          <button
            type="button"
            onClick={() => setIsConnected(!isConnected)}
            className={`py-2 px-5 rounded-lg text-[12.5px] font-semibold cursor-pointer flex items-center gap-1.5 transition-all shadow-xs ${
              isConnected
                ? 'bg-slate-100 text-slate-700 border border-slate-300'
                : 'bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0'
            }`}
          >
            {isConnected ? (
              <>
                <Check size={13} />
                <span>Pending</span>
              </>
            ) : (
              <>
                <UserPlus size={13} />
                <span>Connect</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onMessage}
            className="py-2 px-4.5 rounded-lg text-[12.5px] font-semibold text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] cursor-pointer flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <MessageSquare size={13} />
            <span>Message</span>
          </button>

          <button
            type="button"
            className="p-2 rounded-lg text-[#64748B] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] cursor-pointer transition-colors shadow-xs"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
