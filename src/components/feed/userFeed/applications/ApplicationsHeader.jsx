import { Search } from 'lucide-react';

export default function ApplicationsHeader({
  counts = {
    all: 12,
    applied: 8,
    interview: 2,
    offered: 1,
    rejected: 1,
  },
  activeTab = 'all',
  onTabChange,
  searchQuery = '',
  onSearchChange,
}) {
  const tabs = [
    { id: 'all', label: `All (${counts.all})` },
    { id: 'applied', label: `Applied (${counts.applied})` },
    { id: 'interview', label: `Interview (${counts.interview})` },
    { id: 'offered', label: `Offered (${counts.offered})` },
    { id: 'rejected', label: `Rejected (${counts.rejected})` },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* 1. Page Title & Subtitle with blue icon */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1463F3] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(20,99,243,0.3)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>

        <div>
          <h1 className="text-[22px] font-bold text-[#0F172A] tracking-[-0.3px] leading-tight">
            My Applications
          </h1>
          <p className="text-[12.5px] text-[#64748B] mt-0.5">
            Track the status of all your job applications in one place.
          </p>
        </div>
      </div>

      {/* 2. Navigation Tabs Bar + Search applications field */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] gap-4 flex-wrap pb-0">
        {/* Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`pb-3 text-[13.5px] font-semibold border-b-2 bg-transparent border-0 cursor-pointer whitespace-nowrap transition-all ${
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

        {/* Search input field */}
        <div className="relative mb-2 sm:mb-2.5">
          <Search size={14} className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="pl-8 pr-3 py-1.5 text-[12.5px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#1463F3] focus:bg-white w-[200px] sm:w-[220px] transition-all"
          />
        </div>
      </div>
    </div>
  );
}
