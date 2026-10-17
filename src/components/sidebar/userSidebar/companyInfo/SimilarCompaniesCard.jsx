import { useState } from 'react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../../../feed/userFeed/companies/CompanyLogo';

export default function SimilarCompaniesCard({ companies = [], onCompanyClick }) {
  const [followingMap, setFollowingMap] = useState({});

  const toggleFollow = (id, e) => {
    e.stopPropagation();
    setFollowingMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SectionCard className="p-4.5 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      <h3 className="text-[13.5px] font-bold text-[#0F172A] mb-3 pb-2 border-b border-[#F1F5F9]">
        Similar Companies
      </h3>

      <div className="flex flex-col gap-3">
        {companies.map((comp) => {
          const isFollowing = !!followingMap[comp.id];
          return (
            <div
              key={comp.id}
              onClick={() => onCompanyClick && onCompanyClick(comp.id)}
              className="flex items-center justify-between gap-2.5 p-1 -mx-1 rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              {/* Left logo + info */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <CompanyLogo company={comp} size={34} />
                <div className="min-w-0">
                  <h4 className="text-[12.5px] font-semibold text-[#0F172A] truncate leading-tight">
                    {comp.name}
                  </h4>
                  <p className="text-[10.5px] text-[#64748B] truncate mt-0.5">
                    {comp.industry} &bull; {comp.size}
                  </p>
                </div>
              </div>

              {/* Follow button */}
              <button
                type="button"
                onClick={(e) => toggleFollow(comp.id, e)}
                className={`py-1 px-3 text-[11px] font-semibold rounded-lg border transition-all shrink-0 cursor-pointer ${
                  isFollowing
                    ? 'bg-[#1463F3] text-white border-[#1463F3]'
                    : 'bg-white text-[#1463F3] border-[#BFDBFE] hover:bg-[#EFF6FF]'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
