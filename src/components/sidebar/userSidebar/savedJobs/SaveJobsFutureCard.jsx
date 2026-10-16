import { Bookmark } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function SaveJobsFutureCard() {
  return (
    <SectionCard className="p-4 bg-gradient-to-br from-[#F0F6FE] to-[#E6F0FD] border border-[#D5E5FA]">
      <div className="flex items-start gap-3">
        <div className="w-[38px] h-[38px] rounded-full bg-[#1463F3] text-white flex items-center justify-center shadow-[0_3px_8px_rgba(20,99,243,0.25)] shrink-0">
          <Bookmark size={18} fill="#FFFFFF" />
        </div>

        <div>
          <h4 className="text-[13px] font-bold text-[#102E6D] mb-0.5">
            Save jobs, build your future
          </h4>
          <p className="text-[11px] text-[#64748B] leading-relaxed">
            Keep track of interesting job opportunities and apply when you&apos;re ready.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

