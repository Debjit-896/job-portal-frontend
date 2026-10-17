import { ArrowRight, Check } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../../../feed/userFeed/companies/CompanyLogo';

export default function TrendingCompaniesCard({ companies = [], onFollowToggle, onViewAll }) {
  return (
    <SectionCard className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h4 className="text-[13.5px] font-bold text-[#102E6D]">
          Trending Companies
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
        {companies.map((company) => {
          const isFollowed = !!company.isFollowed;
          return (
            <div
              key={company.id}
              onClick={() => onCompanyClick ? onCompanyClick(company.id) : (window.location.href = `/candidate/companies/${company.id}`)}
              className="flex items-center justify-between gap-2.5 p-1 -mx-1 rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <CompanyLogo company={company} size={34} />
                <div className="min-w-0">
                  <h5 className="text-[12.5px] font-semibold text-[#102E6D] hover:text-[#1463F3] truncate leading-tight">
                    {company.name}
                  </h5>
                  <p className="text-[10.5px] text-[#64748B] truncate mt-0.5">
                    {company.followers}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onFollowToggle) onFollowToggle(company.id);
                }}
                className={`py-1 px-3 rounded-2xl border text-[11px] font-semibold cursor-pointer transition-all shrink-0 inline-flex items-center gap-1 ${
                  isFollowed
                    ? 'border-[#10B981] bg-[#ECFDF5] text-[#059669]'
                    : 'border-[#CBD5E1] bg-white text-[#475569] hover:bg-[#F8FAFC]'
                }`}
              >
                {isFollowed && <Check size={11} />}
                <span>{isFollowed ? 'Following' : 'Follow'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

