import { Briefcase, Edit2, Calendar } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../companies/CompanyLogo';

export default function ProfileWorkExperienceCard({ experiences = [], onEdit }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Work Experience</h3>
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

      {/* Experience Timeline */}
      <div className="flex flex-col gap-6 relative before:absolute before:top-4 before:bottom-4 before:left-[19px] before:w-0.5 before:bg-[#E2E8F0]">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex items-start gap-4 relative z-10">
            {/* Company Logo Icon */}
            <div className="shrink-0 bg-white rounded-xl shadow-xs border border-[#E2E8F0] p-0.5">
              <CompanyLogo company={exp.company} size={36} />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                {exp.companyName}
              </h4>
              <p className="text-[12.5px] font-medium text-[#475569] mt-0.5">
                {exp.role}
              </p>

              <div className="flex items-center gap-1.5 text-[11.5px] text-[#64748B] mt-1">
                <Calendar size={13} className="text-[#94A3B8]" />
                <span>{exp.duration}</span>
              </div>

              {/* Skills used */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
