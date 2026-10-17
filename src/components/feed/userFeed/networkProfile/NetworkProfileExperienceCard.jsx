import { Briefcase, Calendar } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileExperienceCard({ experiences = [] }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <Briefcase size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Work Experience</h3>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-6 relative before:absolute before:top-4 before:bottom-4 before:left-[19px] before:w-0.5 before:bg-[#E2E8F0]">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex items-start gap-4 relative z-10">
            {/* Logo */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs border ${
                exp.isTechNova
                  ? 'bg-[#1E1B4B] text-white border-transparent'
                  : 'bg-[#1463F3] text-white border-transparent'
              }`}
            >
              {exp.isTechNova ? (
                <div className="w-5 h-5 rounded-full border border-purple-400 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                </div>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                {exp.role}
              </h4>
              <p className="text-[12.5px] font-medium text-[#475569] mt-0.5">
                {exp.company}
              </p>

              <div className="flex items-center gap-1.5 text-[11.5px] text-[#64748B] mt-1">
                <Calendar size={13} className="text-[#94A3B8]" />
                <span>{exp.duration}</span>
              </div>

              <p className="text-[12px] text-[#475569] mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
