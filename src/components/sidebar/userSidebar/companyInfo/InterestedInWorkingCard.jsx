import { Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function InterestedInWorkingCard({ company }) {
  const navigate = useNavigate();

  return (
    <SectionCard className="p-4.5 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[14px]">
      <div className="flex items-start gap-3 mb-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] text-[#1463F3] flex items-center justify-center shrink-0">
          <Building2 size={18} />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-[#102E6D] leading-tight mb-1">
            Interested in working here?
          </h4>
          <p className="text-[10.5px] text-[#475569] leading-snug">
            Explore open positions at {company.name} and become a part of our team.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate('/candidate/jobs')}
        className="w-full mt-2 bg-[#1463F3] hover:bg-[#0E52D4] text-white py-2 px-3.5 rounded-lg text-[12px] font-semibold flex items-center justify-center gap-1.5 shadow-[0_2px_6px_rgba(20,99,243,0.25)] transition-colors cursor-pointer border-0"
      >
        <span>View Jobs</span>
        <span className="text-sm">&rarr;</span>
      </button>
    </SectionCard>
  );
}
