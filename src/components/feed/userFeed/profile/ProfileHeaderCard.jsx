import { Check, Camera, Edit2, MapPin, Calendar, Mail } from 'lucide-react';

export default function ProfileHeaderCard({ profile, onEdit }) {
  return (
    <div className="bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FF] rounded-[18px] border border-[#D5E5FA] p-6 sm:p-7 relative overflow-hidden shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
        {/* Left: Avatar + Details */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          {/* Avatar with Camera Icon */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white shadow-md shrink-0 mx-auto sm:mx-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={onEdit}
              title="Change Profile Photo"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0F284E] text-white flex items-center justify-center shadow-md border-2 border-white hover:bg-[#1463F3] transition-colors cursor-pointer"
            >
              <Camera size={14} />
            </button>
          </div>

          {/* Details */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0F172A] leading-tight">
                {profile.name}
              </h1>
              {profile.isVerified && (
                <span
                  title="Verified Candidate"
                  className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center text-[10px] shrink-0"
                >
                  <Check size={10} strokeWidth={3} />
                </span>
              )}
            </div>

            <p className="text-[13.5px] font-medium text-[#475569] mt-1">
              {profile.headline}
            </p>

            {/* Quick badges row: Location, Age, Email */}
            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap text-[11.5px] text-[#64748B] mt-2.5">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#94A3B8]" />
                {profile.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-[#94A3B8]" />
                {profile.age} years
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail size={13} className="text-[#94A3B8]" />
                {profile.email}
              </span>
            </div>

            {/* Bio line */}
            <p className="text-[12px] text-[#475569] mt-3 leading-relaxed max-w-xl">
              {profile.shortBio}
            </p>
          </div>
        </div>

        {/* Right: Edit Profile Button */}
        <div className="shrink-0 self-center sm:self-start">
          <button
            type="button"
            onClick={onEdit}
            className="bg-white hover:bg-[#F8FAFC] text-[#1463F3] border border-[#BFDBFE] hover:border-[#1463F3] rounded-lg py-2 px-4.5 text-[12.5px] font-semibold cursor-pointer flex items-center gap-1.5 shadow-xs transition-all"
          >
            <Edit2 size={13} />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
