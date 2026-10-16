import { MapPin, Users, MoreHorizontal } from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function MessageUserProfileCard({
  profile = {
    name: 'Rahul Saha',
    role: 'Software Developer at Wipro',
    location: 'Kolkata, West Bengal',
    connections: '2nd connection',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    isOnline: true,
  },
  onViewProfile,
  onMoreOptions,
}) {
  return (
    <SectionCard className="p-5 flex flex-col gap-4">
      <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
        Profile
      </h4>

      {/* Avatar, Name, Role, Location */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-2.5">
          <Avatar src={profile.avatar} name={profile.name} size={68} />
          {profile.isOnline && (
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full" />
          )}
        </div>

        <div className="flex items-center gap-1.5 justify-center">
          <h3 className="text-[15px] font-bold text-[#102E6D] m-0">
            {profile.name}
          </h3>
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
        </div>

        <p className="text-[12px] text-[#475569] font-medium mt-1 mb-2">
          {profile.role}
        </p>

        <div className="flex flex-col items-center gap-1 text-[11px] text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#94A3B8]" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={13} className="text-[#94A3B8]" />
            <span>{profile.connections}</span>
          </div>
        </div>
      </div>

      {/* View Profile & 3 dots action row */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={onViewProfile}
          className="flex-1 bg-white hover:bg-slate-50 text-[#1463F3] border border-[#BFDBFE] rounded-lg py-2 text-xs font-semibold cursor-pointer transition-colors"
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={onMoreOptions}
          className="w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-50 text-[#64748B] border border-[#E2E8F0] rounded-lg cursor-pointer transition-colors shrink-0"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>
    </SectionCard>
  );
}
