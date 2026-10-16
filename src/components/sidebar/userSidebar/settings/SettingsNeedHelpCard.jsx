import { Headphones } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function SettingsNeedHelpCard({
  onGoToHelpCenter,
  onContactSupport,
}) {
  return (
    <SectionCard className="p-5 flex flex-col items-start gap-3 bg-white">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
          <Headphones size={18} />
        </div>
        <div>
          <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
            Need Help?
          </h4>
          <p className="text-[11px] text-[#64748B] mt-0.5 mb-0">
            Have questions or need assistance?
          </p>
        </div>
      </div>

      <p className="text-[11.5px] text-[#475569] leading-relaxed m-0">
        Visit our{' '}
        <span
          onClick={onGoToHelpCenter}
          className="text-[#1463F3] font-semibold cursor-pointer hover:underline"
        >
          Help Center
        </span>{' '}
        or{' '}
        <span
          onClick={onContactSupport}
          className="text-[#1463F3] font-semibold cursor-pointer hover:underline"
        >
          contact support
        </span>
        .
      </p>

      <button
        type="button"
        onClick={onGoToHelpCenter}
        className="w-full mt-1 bg-white hover:bg-slate-50 text-[#1463F3] border border-[#BFDBFE] rounded-lg py-2 px-3 text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-colors duration-150"
      >
        <span>Go to Help Center</span>
        <span>&rarr;</span>
      </button>
    </SectionCard>
  );
}
