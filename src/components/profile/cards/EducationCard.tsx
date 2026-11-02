import React from 'react';
import { GraduationCap, Edit2, Calendar, MapPin, Building2, Plus, Trash2, ArrowRight } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';
import { Education } from '../../../types/profile';

export interface EducationCardProps {
  education?: Education[];
  onAdd?: () => void;
  onEdit?: (item?: Education) => void;
  onDelete?: (id: string) => void;
  onShowAll?: () => void;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education = [],
  onAdd,
  onEdit,
  onDelete,
  onShowAll,
}) => {
  const visibleEducation = education.slice(0, 3);

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <GraduationCap size={17} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Education</h3>
          {education.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {education.length}
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

      {education.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <GraduationCap size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No education added yet</p>
          <p className="text-[11px] mt-0.5">Showcase your degrees and educational background</p>
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
            >
              <Plus size={12} />
              <span>Add Education</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {visibleEducation.map((edu) => (
            <div key={edu.id} className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-[#0F284E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 size={20} />
                </div>

                <div className="min-w-0 flex-1">
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

              <div className="flex items-center gap-1 shrink-0">
                {onEdit && (
                  <button
                    type="button"
                    onClick={() => onEdit(edu)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit education"
                  >
                    <Edit2 size={13} />
                  </button>
                )}
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(edu.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete education"
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
      {education.length > 3 && onShowAll && (
        <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
          <button
            type="button"
            onClick={onShowAll}
            className="text-[#1463F3] hover:text-[#0F52CC] text-[12.5px] font-semibold flex items-center gap-1.5 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <span>Show all {education.length} education records</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </SectionCard>
  );
};

export default EducationCard;
