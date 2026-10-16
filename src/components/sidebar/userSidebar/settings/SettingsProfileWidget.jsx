import Avatar from '../../../common/userCommon/Avatar';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function SettingsProfileWidget({
  userProfile = {
    name: 'Debjit Pal',
    role: 'Software Developer',
    location: 'Kolkata, West Bengal, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    profileCompletion: 80,
  },
  onEditProfile,
}) {
  return (
    <SectionCard className="p-5 flex flex-col gap-4">
      {/* Top: Avatar, Name, Role, Location */}
      <div className="flex items-center gap-3.5">
        <Avatar src={userProfile.avatar} name={userProfile.name} size={54} />
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold text-[#102E6D] m-0 leading-snug truncate">
            {userProfile.name}
          </h3>
          <p className="text-[12px] text-[#475569] mt-0.5 mb-0.5 font-medium truncate">
            {userProfile.role}
          </p>
          <p className="text-[11px] text-[#94A3B8] m-0 truncate">
            {userProfile.location}
          </p>
        </div>
      </div>

      {/* Profile Completion Card / Progress Area */}
      <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-[#E2E8F0] flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#1E293B]">Complete your profile</span>
          <span className="font-bold text-[#1463F3]">{userProfile.profileCompletion}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#1463F3] h-full rounded-full transition-all duration-300"
            style={{ width: `${userProfile.profileCompletion}%` }}
          />
        </div>

        <p className="text-[11.5px] text-[#64748B] leading-relaxed m-0">
          Add skills, experience and a profile photo to get more job recommendations.
        </p>

        <button
          type="button"
          onClick={onEditProfile}
          className="mt-1 w-fit bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-lg px-4 py-2 text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5 shadow-[0_2px_6px_rgba(20,99,243,0.25)] transition-colors duration-150"
        >
          <span>Edit Profile</span>
          <span>&rarr;</span>
        </button>
      </div>
    </SectionCard>
  );
}
