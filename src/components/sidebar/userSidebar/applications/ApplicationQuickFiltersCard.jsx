import { RotateCcw, ChevronDown } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ApplicationQuickFiltersCard({
  jobTypes = ['Full-time', 'Part-time', 'Internship', 'Contract'],
  selectedJobTypes = ['Full-time'],
  onToggleJobType,
  selectedLocation = 'All Locations',
  onLocationChange,
  selectedExperience = 'All Levels',
  onExperienceChange,
  onClearFilters,
}) {
  const locations = ['All Locations', 'Bengaluru, Karnataka', 'Kolkata, West Bengal', 'Hyderabad, Telangana', 'Redmond, WA', 'Noida, Uttar Pradesh', 'Los Angeles, CA', 'Stockholm, Sweden'];
  const experienceLevels = ['All Levels', 'Entry Level (0-2 yrs)', 'Mid Level (2-5 yrs)', 'Senior Level (5+ yrs)'];

  return (
    <SectionCard className="p-4 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-[#F1F5F9]">
        <div className="text-[#1E293B]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="7" y1="12" x2="17" y2="12"></line>
            <line x1="10" y1="18" x2="14" y2="18"></line>
          </svg>
        </div>
        <h3 className="text-[13.5px] font-bold text-[#1E293B]">
          Quick Filters
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {/* Job Type Checkboxes */}
        <div>
          <label className="text-[11.5px] font-semibold text-[#64748B] block mb-2">
            Job Type
          </label>
          <div className="flex flex-col gap-2">
            {jobTypes.map((type) => {
              const isChecked = selectedJobTypes.includes(type);
              return (
                <label
                  key={type}
                  className="flex items-center gap-2.5 text-[12.5px] text-[#334155] cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleJobType && onToggleJobType(type)}
                    className="w-4 h-4 rounded border-[#CBD5E1] text-[#1463F3] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#1463F3]"
                  />
                  <span className={isChecked ? 'font-medium text-[#0F172A]' : 'text-[#475569]'}>
                    {type}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="text-[11.5px] font-semibold text-[#64748B] block mb-1.5">
            Location
          </label>
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3 py-2 text-[12.5px] text-[#334155] appearance-none cursor-pointer outline-none focus:border-[#1463F3] transition-colors pr-8 font-normal"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="text-[#94A3B8] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Experience Level Dropdown */}
        <div>
          <label className="text-[11.5px] font-semibold text-[#64748B] block mb-1.5">
            Experience Level
          </label>
          <div className="relative">
            <select
              value={selectedExperience}
              onChange={(e) => onExperienceChange && onExperienceChange(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] rounded-lg px-3 py-2 text-[12.5px] text-[#334155] appearance-none cursor-pointer outline-none focus:border-[#1463F3] transition-colors pr-8 font-normal"
            >
              {experienceLevels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="text-[#94A3B8] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          type="button"
          onClick={onClearFilters}
          className="w-full bg-white border border-[#BFDBFE] hover:bg-[#EFF6FF] text-[#1463F3] font-semibold text-[12px] py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors mt-1"
        >
          <RotateCcw size={13} className="text-[#1463F3]" />
          <span>Clear Filters</span>
        </button>
      </div>
    </SectionCard>
  );
}
