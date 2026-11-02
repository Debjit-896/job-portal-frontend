import React from 'react';
import { Code, Plus } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';

export interface SkillsCardProps {
  skills?: string[];
  onAdd?: () => void;
  onEdit?: () => void;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({
  skills = [],
  onAdd,
}) => {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Code size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Skills</h3>
          {skills.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {skills.length}
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

      {skills.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <Code size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No skills added yet</p>
          <p className="text-[11px] mt-0.5">Showcase your technical strengths and tools</p>
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
            >
              <Plus size={12} />
              <span>Add Skills</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[12px] font-medium text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-lg hover:bg-[#DBEAFE] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </SectionCard>
  );
};

export default SkillsCard;
