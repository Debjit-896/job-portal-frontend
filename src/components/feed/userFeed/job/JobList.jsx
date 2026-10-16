import { ChevronDown } from 'lucide-react';
import JobFeedCard from './JobFeedCard';

export default function JobList({
  jobs = [],
  activeTab = 'all',
  onTabChange,
  sortBy = 'Most Relevant',
  onSortChange,
  counts = { all: '4,892', recommended: '1,248', saved: '86' },
}) {
  const tabs = [
    { id: 'all', label: 'All Jobs', count: counts.all },
    { id: 'recommended', label: 'Recommended', count: counts.recommended },
    { id: 'saved', label: 'Saved', count: counts.saved },
  ];

  return (
    <div className="flex flex-col gap-3.5">
      {/* Top Filter Tabs & Sort Dropdown bar */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
        {/* Tabs: All Jobs, Recommended, Saved */}
        <div className="flex items-center gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`bg-transparent border-0 cursor-pointer inline-flex items-center gap-1.5 py-2 relative text-[13.5px] transition-colors ${
                  isActive ? 'font-bold text-[#1463F3]' : 'font-medium text-[#64748B] hover:text-[#102E6D]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-[10px] ${
                    isActive ? 'bg-[#EAF3FF] text-[#1463F3]' : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}
                >
                  {tab.count}
                </span>

                {isActive && (
                  <span className="absolute -bottom-[9px] left-0 right-0 h-[2.5px] bg-[#1463F3] rounded-[2px]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Sort by Dropdown */}
        <div className="flex items-center gap-2 text-[12.5px] text-[#64748B]">
          <span>Sort by</span>
          <div className="flex items-center gap-1.5 bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1 cursor-pointer font-semibold text-[#102E6D]">
            <span>{sortBy}</span>
            <ChevronDown size={14} className="text-[#64748B]" />
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <JobFeedCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

