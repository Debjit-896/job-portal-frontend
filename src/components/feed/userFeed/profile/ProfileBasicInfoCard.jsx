import { Info, Edit2, User, Mail, Phone, Calendar, MapPin, Globe, ExternalLink } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileBasicInfoCard({ basicInfo, onEdit }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Info size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Basic Information</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
        >
          <Edit2 size={12} />
          <span>Edit</span>
        </button>
      </div>

      {/* 2-column info layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[12.5px]">
        {/* Left Column */}
        <div className="flex flex-col gap-3.5">
          {/* Full Name */}
          <div className="flex items-start gap-3">
            <User size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Full Name</p>
              <p className="font-semibold text-[#0F172A]">{basicInfo.fullName}</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex items-start gap-3">
            <Mail size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Email Address</p>
              <p className="font-semibold text-[#0F172A]">{basicInfo.email}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-3">
            <Phone size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Phone Number</p>
              <p className="font-semibold text-[#0F172A]">{basicInfo.phone}</p>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex items-start gap-3">
            <Calendar size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Date of Birth</p>
              <p className="font-semibold text-[#0F172A]">
                {basicInfo.dob} ({basicInfo.age ? `Age ${basicInfo.age}` : 'Age 21'})
              </p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-start gap-3">
            <span className="text-[#94A3B8] text-[13px] font-bold mt-0.5 shrink-0 w-3.5 text-center">
              ⚧
            </span>
            <div>
              <p className="text-[11px] text-[#64748B]">Gender</p>
              <p className="font-semibold text-[#0F172A]">{basicInfo.gender}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Location</p>
              <p className="font-semibold text-[#0F172A]">{basicInfo.location}</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-3">
            <span className="w-4 h-4 bg-[#0A66C2] text-white rounded-xs flex items-center justify-center font-bold text-[9px] mt-0.5 shrink-0">
              in
            </span>
            <div>
              <p className="text-[11px] text-[#64748B]">LinkedIn</p>
              <a
                href={`https://${basicInfo.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline inline-flex items-center gap-1"
              >
                <span>{basicInfo.linkedin}</span>
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0 font-mono">
              &lt;&gt;
            </span>
            <div>
              <p className="text-[11px] text-[#64748B]">GitHub</p>
              <a
                href={`https://${basicInfo.github}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline inline-flex items-center gap-1"
              >
                <span>{basicInfo.github}</span>
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="flex items-start gap-3">
            <Globe size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Portfolio</p>
              <a
                href={basicInfo.portfolio?.startsWith('http') ? basicInfo.portfolio : `https://${basicInfo.portfolio}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline inline-flex items-center gap-1"
              >
                <span>{basicInfo.portfolio}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
