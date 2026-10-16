import { useState } from 'react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function FeaturedCompanies({
  companies = [
    {
      id: 'google',
      name: 'Google',
      openRoles: '120+ open roles',
      logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png',
      isGoogle: true,
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      openRoles: '98+ open roles',
      isMicrosoft: true,
    },
    {
      id: 'amazon',
      name: 'Amazon',
      openRoles: '76+ open roles',
      iconText: 'a',
      isAmazon: true,
    },
    {
      id: 'tcs',
      name: 'TCS',
      openRoles: '65+ open roles',
      iconText: 'tcs',
      iconBg: '#0F172A',
    },
    {
      id: 'accenture',
      name: 'Accenture',
      openRoles: '54+ open roles',
      iconText: '>',
      iconBg: '#4C1D95',
    },
  ],
  onViewAll,
  onFollow,
}) {
  const [followedState, setFollowedState] = useState({});

  const handleFollowToggle = (id) => {
    setFollowedState((prev) => ({ ...prev, [id]: !prev[id] }));
    if (onFollow) onFollow(id);
  };

  return (
    <SectionCard className="p-[20px_18px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[14.5px] font-bold text-[#102E6D]">
          Featured Companies
        </h4>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer inline-flex items-center gap-0.5 hover:underline"
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Companies List */}
      <div className="flex flex-col gap-3.5">
        {companies.map((company) => {
          const isFollowed = !!followedState[company.id];
          return (
            <div
              key={company.id}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Logo Badge */}
                {company.isGoogle ? (
                  <div className="w-9 h-9 rounded-lg border border-[#E2E8F0] flex items-center justify-center bg-white text-lg font-extrabold text-[#4285F4] shrink-0">
                    G
                  </div>
                ) : company.isMicrosoft ? (
                  <div className="w-9 h-9 rounded-lg border border-[#E2E8F0] grid grid-cols-2 gap-0.5 p-2 bg-white shrink-0">
                    <div className="bg-[#F25022] rounded-[1px]" />
                    <div className="bg-[#7FBA00] rounded-[1px]" />
                    <div className="bg-[#00A4EF] rounded-[1px]" />
                    <div className="bg-[#FFB900] rounded-[1px]" />
                  </div>
                ) : company.isAmazon ? (
                  <div className="w-9 h-9 rounded-lg bg-[#1E293B] text-[#F59E0B] flex items-center justify-center font-extrabold text-lg shrink-0">
                    a
                  </div>
                ) : (
                  <div
                    style={{ backgroundColor: company.iconBg || '#1E293B' }}
                    className="w-9 h-9 rounded-lg text-white flex items-center justify-center font-bold text-[11px] shrink-0"
                  >
                    {company.iconText}
                  </div>
                )}

                {/* Company Name & Open Roles */}
                <div className="min-w-0">
                  <h5 className="text-[13px] font-semibold text-[#102E6D] truncate leading-tight">
                    {company.name}
                  </h5>
                  <p className="text-[11px] text-[#64748B] truncate">
                    {company.openRoles}
                  </p>
                </div>
              </div>

              {/* Follow Button */}
              <button
                type="button"
                onClick={() => handleFollowToggle(company.id)}
                className={`px-3 py-1 rounded-2xl border text-[11.5px] font-semibold cursor-pointer shrink-0 transition-all inline-flex items-center gap-1 ${
                  isFollowed
                    ? 'border-[#10B981] bg-[#ECFDF5] text-[#059669]'
                    : 'border-[#D5E3F8] bg-white text-[#1463F3] hover:bg-[#F0F6FF]'
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

