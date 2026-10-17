import { Lock } from 'lucide-react';

export default function ProfilePublicNoticeBanner() {
  return (
    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[14px] p-4 flex items-center gap-3 text-[12px]">
      <div className="w-8 h-8 rounded-lg bg-white text-[#1463F3] border border-[#BFDBFE] flex items-center justify-center shrink-0">
        <Lock size={15} />
      </div>
      <div>
        <h5 className="font-bold text-[#102E6D] leading-tight">
          This is your public profile
        </h5>
        <p className="text-[#64748B] text-[11px] mt-0.5">
          Changes you make here will be visible to other users on JobNest.
        </p>
      </div>
    </div>
  );
}
