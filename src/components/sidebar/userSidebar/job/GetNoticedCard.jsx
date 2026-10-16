import { ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Button from '../../../common/userCommon/Button';

export default function GetNoticedCard({ onCompleteProfile }) {
  return (
    <SectionCard className="p-[20px_18px]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-[14.5px] font-bold text-[#102E6D] mb-1.5">
            Get noticed by top companies
          </h4>
          <p className="text-xs text-[#64748B] leading-[1.45] mb-3.5">
            Build a complete profile, add your skills and experience, and increase your chances of getting hired.
          </p>
        </div>

        {/* Small resume/badge icon illustration */}
        <div className="relative w-[42px] h-[48px] shrink-0">
          <div className="w-9 h-11 bg-[#EFF6FF] border-[1.5px] border-[#BFDBFE] rounded-md flex flex-col p-[6px_5px] gap-0.5">
            <div className="w-3 h-3 rounded-full bg-[#93C5FD]" />
            <div className="w-[22px] h-0.5 bg-[#BFDBFE] rounded-[1px]" />
            <div className="w-[18px] h-0.5 bg-[#BFDBFE] rounded-[1px]" />
          </div>
          {/* Checkmark badge */}
          <div className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[10px] font-extrabold border-[1.5px] border-white">
            ✓
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        size="sm"
        fullWidth
        onClick={onCompleteProfile}
        className="text-[12.5px] font-semibold rounded-lg py-2 px-3.5"
      >
        Complete Your Profile <ArrowRight size={13} />
      </Button>
    </SectionCard>
  );
}

