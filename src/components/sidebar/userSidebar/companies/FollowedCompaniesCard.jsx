import { ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../../../feed/userFeed/companies/CompanyLogo';

export default function FollowedCompaniesCard({ companies = [], onUnfollow, onViewAll }) {
  return (
    <SectionCard className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h4 className="text-[13.5px] font-bold text-[#102E6D]">
          Followed Companies
        </h4>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-[11.5px] font-semibold cursor-pointer inline-flex items-center gap-0.5 hover:underline"
        >
          View All <ArrowRight size={12} />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-between gap-2.5"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <CompanyLogo company={company} size={34} />
              <div className="min-w-0">
                <h5 className="text-[12.5px] font-semibold text-[#102E6D] truncate leading-tight">
                  {company.name}
                </h5>
                <p className="text-[10.5px] text-[#64748B] truncate mt-0.5">
                  {company.followers}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onUnfollow && onUnfollow(company.id)}
              className="bg-transparent border-0 text-[#1463F3] text-[11px] font-semibold cursor-pointer py-1 px-1.5 rounded-md hover:bg-[#EFF6FF] transition-colors shrink-0"
            >
              Unfollow
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

