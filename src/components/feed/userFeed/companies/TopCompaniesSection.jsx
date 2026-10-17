import { Flame, ArrowRight } from 'lucide-react';
import TopCompanyCard from './TopCompanyCard';

export default function TopCompaniesSection({ companies = [], onFollowToggle, onCompanyClick, onViewAll }) {
  return (
    <section className="flex flex-col gap-3.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center text-[#EF4444]">
              <Flame size={18} fill="#EF4444" />
            </span>
            <h2 className="text-base font-bold text-[#102E6D] tracking-[-0.2px]">
              Top Companies
            </h2>
          </div>
          <p className="text-xs text-[#64748B] mt-0.5">
            Most followed and active companies on JobNest
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-[12.5px] font-semibold cursor-pointer inline-flex items-center gap-1 hover:underline"
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Grid of Top Company Cards (4 columns on desktop matching screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {companies.map((company) => (
          <TopCompanyCard
            key={company.id}
            company={company}
            onFollowToggle={onFollowToggle}
            onCompanyClick={onCompanyClick}
          />
        ))}
      </div>
    </section>
  );
}

