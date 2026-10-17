import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileEducationCard({ education = [] }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <GraduationCap size={17} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Education</h3>
      </div>

      <div className="flex flex-col gap-4">
        {education.map((edu) => (
          <div key={edu.id} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F284E] text-white flex items-center justify-center shrink-0">
              <Building2 size={20} />
            </div>

            <div className="min-w-0">
              <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                {edu.institution}
              </h4>
              <p className="text-[12.5px] font-medium text-[#475569] mt-0.5">
                {edu.degree}
              </p>

              <div className="flex items-center gap-2 text-[11.5px] text-[#64748B] mt-1.5 flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#94A3B8]" />
                  {edu.period}
                </span>
                {edu.location && (
                  <>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-[#94A3B8]" />
                      {edu.location}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
