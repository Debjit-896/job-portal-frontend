import { Building2, ChevronDown, Users, Check } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

export default function AllCompaniesSection({
  companies = [],
  selectedIndustry,
  onIndustryChange,
  selectedLocation,
  onLocationChange,
  selectedSort,
  onSortChange,
  onFollowToggle,
}) {
  return (
    <section id="all-companies-section" className="flex flex-col gap-3.5 mt-1.5">
      {/* Header with Title and Filters */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-[#1463F3]" />
            <h2 className="text-base font-bold text-[#102E6D] tracking-[-0.2px]">
              All Companies
            </h2>
          </div>
          <p className="text-xs text-[#64748B] mt-0.5">
            Browse and follow companies across different industries
          </p>
        </div>

        {/* Filter Dropdowns on the right */}
        <div className="flex items-center gap-2">
          {/* Industry dropdown */}
          <div className="relative bg-white border border-[#E2E8F0] rounded-lg py-1.5 pr-6.5 pl-3 flex items-center">
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange && onIndustryChange(e.target.value)}
              className="appearance-none border-0 bg-transparent text-xs font-medium text-[#475569] cursor-pointer outline-none"
            >
              <option value="All Industries">All Industries</option>
              <option value="Entertainment & Streaming">Entertainment &amp; Streaming</option>
              <option value="Music & Audio">Music &amp; Audio</option>
              <option value="IT Services & Consulting">IT Services &amp; Consulting</option>
              <option value="E-commerce & Retail">E-commerce &amp; Retail</option>
              <option value="Social Media & Networking">Social Media &amp; Networking</option>
            </select>
            <ChevronDown
              size={13}
              className="text-[#64748B] absolute right-2 pointer-events-none"
            />
          </div>

          {/* Location dropdown */}
          <div className="relative bg-white border border-[#E2E8F0] rounded-lg py-1.5 pr-6.5 pl-3 flex items-center">
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
              className="appearance-none border-0 bg-transparent text-xs font-medium text-[#475569] cursor-pointer outline-none"
            >
              <option value="All Locations">All Locations</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Europe">Europe</option>
            </select>
            <ChevronDown
              size={13}
              className="text-[#64748B] absolute right-2 pointer-events-none"
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative bg-white border border-[#E2E8F0] rounded-lg py-1.5 pr-6.5 pl-3 flex items-center">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              className="appearance-none border-0 bg-transparent text-xs font-medium text-[#475569] cursor-pointer outline-none"
            >
              <option value="Most Followed">Most Followed</option>
              <option value="Newest">Newest</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
            <ChevronDown
              size={13}
              className="text-[#64748B] absolute right-2 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Grid of Company Cards (3 columns on desktop matching screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {companies.map((company) => {
          const isFollowed = !!company.isFollowed;
          return (
            <div
              key={company.id}
              className="bg-white rounded-[14px] border border-[#E2E8F0] p-[16px_16px_14px_16px] flex flex-col justify-between transition-all duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.07)]"
            >
              <div>
                {/* Top: Logo + Name + Follow button */}
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <CompanyLogo company={company} size={38} />
                    <div className="min-w-0">
                      <h3 className="text-[13.5px] font-bold text-[#102E6D] truncate leading-tight">
                        {company.name}
                      </h3>
                      <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                        {company.industry}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onFollowToggle && onFollowToggle(company.id)}
                    className={`py-1.5 px-3.5 rounded-lg text-[11.5px] font-semibold cursor-pointer transition-all inline-flex items-center gap-1 shrink-0 ${
                      isFollowed
                        ? 'border-0 bg-[#1463F3] text-white'
                        : 'border border-[#1463F3] bg-white text-[#1463F3] hover:bg-[#F0F6FF]'
                    }`}
                  >
                    {isFollowed && <Check size={11} strokeWidth={2.5} />}
                    <span>{isFollowed ? 'Following' : 'Follow'}</span>
                  </button>
                </div>

                {/* Subtitle details: location and employees */}
                <p className="text-[10.5px] text-[#94A3B8] mt-2 pl-[49px]">
                  {company.location} &bull; {company.employees}
                </p>
              </div>

              {/* Followers */}
              <div className="flex items-center gap-1.5 text-[#64748B] text-[11px] mt-3 pl-[49px]">
                <Users size={12} className="text-[#94A3B8]" />
                <span>{company.followers}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

