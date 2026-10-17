import { User, Edit2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileAboutMeCard({ about, onEdit }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <User size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">About Me</h3>
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

      <p className="text-[12.5px] text-[#475569] leading-relaxed">
        {about}
      </p>
    </SectionCard>
  );
}
