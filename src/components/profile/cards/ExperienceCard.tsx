import React from 'react';
import { Briefcase, Edit2, Calendar, Plus, Trash2, ArrowRight } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';
import CompanyLogo from '../../feed/userFeed/companies/CompanyLogo';
import { WorkExperience } from '../../../types/profile';

export interface ExperienceCardProps {
  experiences?: WorkExperience[];
  onAdd?: () => void;
  onEdit?: (item?: WorkExperience) => void;
  onDelete?: (id: string) => void;
  onShowAll?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experiences = [],
  onAdd,
  onEdit,
  onDelete,
  onShowAll,
}) => {
  const visibleExperiences = experiences.slice(0, 3);

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Work Experience</h3>
          {experiences.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {experiences.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
            >
              <Plus size={13} />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>

      {/* Experience Timeline */}
      {experiences.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <Briefcase size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No work experience added yet</p>
          <p className="text-[11px] mt-0.5">Add your career milestones and current roles</p>
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
            >
              <Plus size={12} />
              <span>Add Experience</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6 relative before:absolute before:top-4 before:bottom-4 before:left-[19px] before:w-0.5 before:bg-[#E2E8F0]">
          {visibleExperiences.map((exp) => (
            <div key={exp.id} className="flex items-start justify-between gap-4 relative z-10 group">
              <div className="flex items-start gap-4 min-w-0 flex-1">
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

              {/* Item Action Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                {onEdit && (
                  <button
                    type="button"
                    onClick={() => onEdit(exp)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit this position"
                  >
                    <Edit2 size={13} />
                  </button>
                )}
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(exp.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete this position"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show all button when > 3 items */}
      {experiences.length > 3 && onShowAll && (
        <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
          <button
            type="button"
            onClick={onShowAll}
            className="text-[#1463F3] hover:text-[#0F52CC] text-[12.5px] font-semibold flex items-center gap-1.5 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <span>Show all {experiences.length} experiences</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </SectionCard>
  );
};

export default ExperienceCard;
