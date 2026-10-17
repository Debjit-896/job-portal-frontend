import { User } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileAboutCard({ about }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#F1F5F9]">
        <User size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">About Me</h3>
      </div>

      <p className="text-[12.5px] text-[#475569] leading-relaxed">
        {about}
      </p>
    </SectionCard>
  );
}
