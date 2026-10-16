import { Target, ArrowRight } from 'lucide-react';

export default function UpgradeSkills({ onBrowseCourses }) {
  return (
    <div className="bg-gradient-to-br from-[#EFF6FF] to-[#E6EDFE] rounded-[14px] p-4 border border-[#D6E4FB] flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
          <Target size={22} />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-[#102E6D] mb-0.5">
            Upgrade Your Skills
          </h4>
          <p className="text-[11px] text-[#64748B] leading-tight">
            Take courses, get certified and make your profile stand out.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onBrowseCourses}
        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#C7D9FA] bg-[#EEF2FF] text-[#3B82F6] text-[11px] font-semibold cursor-pointer shrink-0 whitespace-nowrap transition-colors hover:bg-[#E0E7FF]"
      >
        Browse Courses <ArrowRight size={11} />
      </button>
    </div>
  );
}

