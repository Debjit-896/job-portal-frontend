import { useState } from 'react';
import { Check, MessageSquare, MoreHorizontal } from 'lucide-react';
import CompanyLogo from '../companies/CompanyLogo';

export default function CompanyBannerHeader({
  company,
  activeTab = 'overview',
  onTabChange,
  onFollowToggle,
  onMessage,
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'life', label: 'Life' },
    { id: 'people', label: 'People' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <div className="bg-white rounded-[16px] border border-[#E2E8F0] shadow-sm overflow-hidden">
      {/* 1. Top Cover / Hero Graphic */}
      <div className="relative h-[175px] sm:h-[195px] w-full bg-[#0F284E] overflow-hidden">
        {/* Background photo of modern office with laptop and desk */}
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
          alt="Company Office Banner"
          className="w-full h-full object-cover opacity-35"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F42]/95 via-[#0C326B]/80 to-[#10438C]/70" />

        {/* Banner Content (Text + Graphic) */}
        <div className="absolute inset-0 p-6 sm:p-8 flex items-center justify-between text-white">
          <div className="max-w-[480px]">
            <h1 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight leading-tight">
              {company.tagline || 'Innovate • Build • Grow'}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-blue-100/90 mt-1 font-medium">
              {company.subTagline || 'Technology solutions for a better tomorrow'}
            </p>
          </div>

          {/* Right Floating Laptop Mockup / Illustration card */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1463F3] flex items-center justify-center text-white font-bold">
                &lt;/&gt;
              </div>
              <div>
                <p className="text-[12px] font-bold text-white tracking-wide">
                  {company.badgeText || 'Your Ideas Our Technology'}
                </p>
                <p className="text-[10.5px] text-blue-200">
                  Reliable & Scalable Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Profile Header Body */}
      <div className="px-6 pt-3 pb-4 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          {/* Logo (offset to overlap banner) + Company Details (positioned cleanly in white area) */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 min-w-0 flex-1">
            <div className="-mt-14 sm:-mt-16 w-[88px] h-[88px] sm:w-[98px] sm:h-[98px] rounded-[18px] bg-white p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#E2E8F0] shrink-0 flex items-center justify-center relative z-10">
              <CompanyLogo company={company} size={84} />
            </div>

            <div className="min-w-0 flex-1 pt-1 sm:pt-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] leading-tight truncate">
                  {company.name}
                </h2>
                {company.isVerified && (
                  <span
                    title="Verified Company"
                    className="w-4 h-4 rounded-full bg-[#1463F3] text-white flex items-center justify-center text-[10px] shrink-0"
                  >
                    <Check size={10} strokeWidth={3} />
                  </span>
                )}
              </div>

              <p className="text-[12px] text-[#64748B] mt-1 leading-normal">
                {company.industry} &bull; {company.location} &bull; {company.employeesCount}
              </p>
            </div>
          </div>

          {/* Action Buttons: Follow, Message, 3-dots */}
          <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-end pb-0.5">
            <button
              type="button"
              onClick={() => {
                setIsFollowed(!isFollowed);
                if (onFollowToggle) onFollowToggle(!isFollowed);
              }}
              className={`px-6 py-2 rounded-lg text-[13px] font-semibold cursor-pointer transition-all shadow-sm ${
                isFollowed
                  ? 'bg-slate-100 text-slate-700 border border-slate-300'
                  : 'bg-[#1463F3] hover:bg-[#0F52CC] text-white border-0'
              }`}
            >
              {isFollowed ? 'Following' : 'Follow'}
            </button>

            <button
              type="button"
              onClick={onMessage}
              className="px-5 py-2 rounded-lg text-[13px] font-semibold text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] cursor-pointer transition-colors"
            >
              Message
            </button>

            <button
              type="button"
              className="p-2 rounded-lg text-[#64748B] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] cursor-pointer transition-colors"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Company Description Subtext */}
        <p className="text-[13px] text-[#475569] leading-relaxed max-w-3xl mb-4">
          {company.headline}
        </p>

        {/* 3. Navigation Tabs Bar */}
        <div className="flex items-center gap-8 border-t border-[#F1F5F9] pt-3 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`pb-2 text-[13.5px] font-semibold border-b-2 bg-transparent border-0 cursor-pointer whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-[#1463F3] text-[#1463F3]'
                    : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
