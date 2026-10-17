import { Globe2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileLanguagesCard({ languages = [] }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <Globe2 size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Languages</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languages.map((lang) => (
          <div key={lang.language}>
            <p className="text-[13px] font-bold text-[#0F172A]">
              {lang.language}
            </p>
            <p className="text-[11.5px] text-[#64748B] mt-0.5">
              {lang.proficiency}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
