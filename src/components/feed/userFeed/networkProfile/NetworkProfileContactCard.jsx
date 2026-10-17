import { Info, Mail, Phone, MapPin, Globe } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileContactCard({ contactInfo }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <Info size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Contact Information</h3>
      </div>

      {/* 2-column contact details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[12.5px]">
        {/* Left Column */}
        <div className="flex flex-col gap-3.5">
          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Email</p>
              <p className="font-semibold text-[#0F172A]">{contactInfo.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Phone</p>
              <p className="font-semibold text-[#0F172A]">{contactInfo.phone}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Location</p>
              <p className="font-semibold text-[#0F172A]">{contactInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5">
          {/* LinkedIn */}
          <div className="flex items-start gap-3">
            <span className="w-4 h-4 bg-[#0A66C2] text-white rounded-xs flex items-center justify-center font-bold text-[9px] mt-0.5 shrink-0">
              in
            </span>
            <div>
              <p className="text-[11px] text-[#64748B]">LinkedIn</p>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline"
              >
                {contactInfo.linkedin}
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
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline"
              >
                {contactInfo.github}
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="flex items-start gap-3">
            <Globe size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div>
              <p className="text-[11px] text-[#64748B]">Portfolio</p>
              <a
                href={contactInfo.portfolio?.startsWith('http') ? contactInfo.portfolio : `https://${contactInfo.portfolio}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1463F3] hover:underline"
              >
                {contactInfo.portfolio}
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
