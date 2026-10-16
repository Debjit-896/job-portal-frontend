import { Bookmark } from 'lucide-react';

export default function SavedJobsHeader({
  totalCount = 12,
  appliedCount = 3,
  notAppliedCount = 9,
  activeTab = 'all',
  onTabChange,
  sortBy = 'Recently Saved',
  onSortChange,
}) {
  const tabs = [
    { id: 'all', label: `All Saved Jobs (${totalCount})` },
    { id: 'applied', label: `Applied (${appliedCount})` },
    { id: 'not-applied', label: `Not Applied (${notAppliedCount})` },
  ];

  return (
    <div className="flex flex-col gap-4.5">
      {/* Title & Description */}
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-7 h-7 rounded-[7px] bg-[#1463F3] text-white flex items-center justify-center shadow-[0_2px_6px_rgba(20,99,243,0.25)] shrink-0">
            <Bookmark size={16} fill="#FFFFFF" />
          </div>
          <h1 className="text-[22px] font-extrabold text-[#102E6D] tracking-[-0.3px] m-0">
            Saved Jobs
          </h1>
        </div>
        <p className="text-[13px] text-[#64748B] m-0 pl-9.5">
          Jobs you&apos;ve saved for later. Don&apos;t miss out on great opportunities!
        </p>
      </div>

      {/* Tabs Row + Sort By Dropdown */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-0 flex-wrap gap-3">
        {/* Tab Buttons */}
        <div className="flex items-center gap-7">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`bg-transparent border-0 pt-2.5 pb-3 text-[13.5px] cursor-pointer relative transition-colors ${
                  isActive ? 'font-semibold text-[#1463F3]' : 'font-medium text-[#64748B] hover:text-[#102E6D]'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#1463F3] rounded-t-[2px]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 pb-1.5">
          <span className="text-xs text-[#64748B]">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
            className="border-0 bg-transparent text-xs font-semibold text-[#102E6D] cursor-pointer outline-none"
          >
            <option value="Recently Saved">Recently Saved</option>
            <option value="Oldest Saved">Oldest Saved</option>
            <option value="Deadline Approaching">Deadline Approaching</option>
          </select>
        </div>
      </div>
    </div>
  );
}

