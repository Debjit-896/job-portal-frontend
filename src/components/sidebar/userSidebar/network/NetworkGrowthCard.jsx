import { TrendingUp, ArrowUpRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkGrowthCard({
  connectionsCount = 128,
  followingCount = 42,
  peopleYouMayKnowCount = 36,
  onViewAnalytics,
}) {
  return (
    <SectionCard className="p-4 bg-gradient-to-br from-[#EFF6FF] to-[#E0EDFD] border border-[#BFDBFE]">
      <div className="flex items-start gap-2.5 mb-2.5">
        <div className="w-8 h-8 rounded-full bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(20,99,243,0.25)]">
          <TrendingUp size={16} />
        </div>

        <div>
          <h4 className="text-[13px] font-bold text-[#102E6D] m-0">
            Your Network Growth
          </h4>
          <p className="text-[11px] text-[#475569] mt-[3px] mb-0 leading-[1.4]">
            A bigger network means more opportunities, insights and support.
          </p>
        </div>
      </div>

      {/* 3 Metric Pills */}
      <div className="grid grid-cols-3 gap-2 my-3.5 bg-white rounded-10 p-2.5 px-2 border border-[#D5E5FA]">
        <div className="text-center">
          <h5 className="text-[15px] font-extrabold text-[#102E6D] m-0">
            {connectionsCount}
          </h5>
          <p className="text-[9.5px] text-[#64748B] mt-0.5 mb-[3px]">
            Total Connections
          </p>
          <span className="text-[10px] font-bold text-[#10B981] inline-flex items-center">
            <ArrowUpRight size={11} /> 12%
          </span>
        </div>

        <div className="text-center border-l border-r border-[#EDF2F7]">
          <h5 className="text-[15px] font-extrabold text-[#102E6D] m-0">
            {followingCount}
          </h5>
          <p className="text-[9.5px] text-[#64748B] mt-0.5 mb-[3px]">
            Following
          </p>
          <span className="text-[10px] font-bold text-[#10B981] inline-flex items-center">
            <ArrowUpRight size={11} /> 8%
          </span>
        </div>

        <div className="text-center">
          <h5 className="text-[15px] font-extrabold text-[#102E6D] m-0">
            {peopleYouMayKnowCount}
          </h5>
          <p className="text-[9.5px] text-[#64748B] mt-0.5 mb-[3px]">
            People You May Know
          </p>
          <span className="text-[10px] font-bold text-[#10B981] inline-flex items-center">
            <ArrowUpRight size={11} /> 5%
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onViewAnalytics}
        className="w-full bg-white hover:bg-slate-50 text-[#1463F3] border border-[#BFDBFE] rounded-lg py-2 px-3 text-[11.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-colors duration-150"
      >
        <span>View Network Analytics</span>
        <span>&rarr;</span>
      </button>
    </SectionCard>
  );
}
