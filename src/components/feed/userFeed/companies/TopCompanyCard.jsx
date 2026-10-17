import { Users, Check } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

export default function TopCompanyCard({ company, onFollowToggle, onCompanyClick }) {
  const isFollowed = !!company.isFollowed;

  return (
    <div
      onClick={() => onCompanyClick && onCompanyClick(company.id)}
      className="bg-white rounded-[14px] border border-[#E2E8F0] p-[18px_18px_16px_18px] flex flex-col justify-between transition-all duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.07)] cursor-pointer"
    >
      <div>
        {/* Top: Logo + Name with verified check + Subtitle */}
        <div className="flex items-start gap-3 mb-3">
          <CompanyLogo company={company} size={42} />

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[14.5px] font-bold text-[#102E6D] hover:text-[#1463F3] transition-colors leading-tight">
                {company.name}
              </h3>
              {company.isVerified && (
                <span
                  title="Verified Company"
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#1463F3] text-white shrink-0"
                >
                  <Check size={9} strokeWidth={3} />
                </span>
              )}
            </div>

            <p className="text-[11px] text-[#64748B] mt-0.5 leading-tight">
              {company.industry}
            </p>
            <p className="text-[10.5px] text-[#94A3B8] mt-px">
              {company.location} &bull; {company.employees}
            </p>
          </div>
        </div>

        {/* Middle: Description paragraph */}
        <p className="text-xs text-[#475569] leading-relaxed mb-4 min-h-[36px] line-clamp-2">
          {company.description}
        </p>
      </div>

      {/* Bottom Row: Followers count + Follow/Following button */}
      <div className="flex items-center justify-between pt-2.5 border-t border-[#F1F5F9]">
        <div className="flex items-center gap-1.5 text-[#64748B] text-[11px]">
          <Users size={13} className="text-[#94A3B8]" />
          <span>{company.followers}</span>
        </div>

        <button
          type="button"
          onClick={() => onFollowToggle && onFollowToggle(company.id)}
          className={`px-4 py-1.5 rounded-lg text-[11.5px] font-semibold cursor-pointer transition-all inline-flex items-center gap-1 ${
            isFollowed
              ? 'border-0 bg-[#1463F3] text-white'
              : 'border border-[#1463F3] bg-white text-[#1463F3] hover:bg-[#F0F6FF]'
          }`}
        >
          {isFollowed && <Check size={12} strokeWidth={2.5} />}
          <span>{isFollowed ? 'Following' : 'Follow'}</span>
        </button>
      </div>
    </div>
  );
}

