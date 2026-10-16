import { Globe, Clock, ChevronDown } from 'lucide-react';
import SectionCard from '../../../../common/userCommon/SectionCard';

export default function LanguageRegionSection({
  language = 'English (US)',
  onLanguageChange,
  timeZone = '(GMT+05:30) Kolkata',
  onTimeZoneChange,
}) {
  return (
    <SectionCard className="p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[15px] font-bold text-[#102E6D] m-0">
          Language & Region
        </h2>
        <p className="text-xs text-[#64748B] mt-1 mb-0">
          Set your preferred language and time zone
        </p>
      </div>

      {/* Selectors */}
      <div className="flex flex-col gap-4 text-xs">
        {/* Language Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
            <Globe size={15} className="text-[#94A3B8]" />
            <span>Language</span>
          </div>

          <div className="relative flex-1 max-w-[280px]">
            <select
              value={language}
              onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
              className="w-full appearance-none bg-white border border-[#E2E8F0] rounded-lg py-2 pl-3 pr-8 text-xs text-[#1E293B] font-medium outline-none cursor-pointer hover:border-[#CBD5E1] transition-colors"
            >
              <option value="English (US)">English (US)</option>
              <option value="English (UK)">English (UK)</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
            </select>
            <ChevronDown
              size={14}
              className="text-[#64748B] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        {/* Time Zone Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
            <Clock size={15} className="text-[#94A3B8]" />
            <span>Time Zone</span>
          </div>

          <div className="relative flex-1 max-w-[280px]">
            <select
              value={timeZone}
              onChange={(e) => onTimeZoneChange && onTimeZoneChange(e.target.value)}
              className="w-full appearance-none bg-white border border-[#E2E8F0] rounded-lg py-2 pl-3 pr-8 text-xs text-[#1E293B] font-medium outline-none cursor-pointer hover:border-[#CBD5E1] transition-colors"
            >
              <option value="(GMT+05:30) Kolkata">(GMT+05:30) Kolkata</option>
              <option value="(GMT-08:00) Pacific Time">(GMT-08:00) Pacific Time</option>
              <option value="(GMT-05:00) Eastern Time">(GMT-05:00) Eastern Time</option>
              <option value="(GMT+00:00) UTC">(GMT+00:00) UTC</option>
            </select>
            <ChevronDown
              size={14}
              className="text-[#64748B] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
