import { Code } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileSkillsCard({ skills = [] }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <Code size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Skills</h3>
      </div>

      {/* Skills pills row matching ProfileSkillsCard */}
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
    </SectionCard>
  );
}
