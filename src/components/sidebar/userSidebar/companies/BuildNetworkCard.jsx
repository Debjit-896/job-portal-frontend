import { ShieldCheck } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function BuildNetworkCard({ onExploreNetwork }) {
  return (
    <SectionCard className="p-[18px_16px] bg-gradient-to-br from-[#EFF6FF] to-[#E0EDFD] border border-[#BFDBFE]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-[#1463F3] text-white flex items-center justify-center shadow-[0_2px_6px_rgba(20,99,243,0.25)] shrink-0">
          <ShieldCheck size={16} />
        </div>
        <h4 className="text-[13px] font-bold text-[#102E6D]">
          Build your professional network
        </h4>
      </div>

      <p className="text-[11px] text-[#475569] leading-relaxed mb-3.5">
        Follow companies, connect with their employees and stay updated.
      </p>

      <button
        type="button"
        onClick={onExploreNetwork}
        className="bg-[#1463F3] text-white border-0 rounded-lg py-2 px-3.5 text-[11.5px] font-semibold cursor-pointer inline-flex items-center gap-1 shadow-[0_2px_6px_rgba(20,99,243,0.2)] transition-colors hover:bg-[#0F52CC]"
      >
        <span>Explore Network</span>
        <span>&rarr;</span>
      </button>
    </SectionCard>
  );
}

