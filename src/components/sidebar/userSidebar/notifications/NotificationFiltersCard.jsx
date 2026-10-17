import {
  SlidersHorizontal,
  Layers,
  BriefcaseBusiness,
  Users2,
  MessageSquare,
  Cpu,
  Check,
} from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NotificationFiltersCard({
  activeFilter = 'all',
  onFilterChange,
  counts = {
    all: 7,
    jobs: 3,
    network: 2,
    messages: 1,
    system: 1,
  },
  onMarkAllRead,
}) {
  const filterOptions = [
    { id: 'all', label: 'All', icon: Layers, count: counts.all },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness, count: counts.jobs },
    { id: 'network', label: 'Network', icon: Users2, count: counts.network },
    { id: 'messages', label: 'Messages', icon: MessageSquare, count: counts.messages },
    { id: 'system', label: 'System', icon: Cpu, count: counts.system },
  ];

  return (
    <SectionCard className="p-4.5">
      {/* Title with icon */}
      <div className="flex items-center gap-2 mb-3.5">
        <SlidersHorizontal size={16} className="text-[#102E6D]" />
        <h3 className="text-[14px] font-bold text-[#102E6D] tracking-tight">
          Notification Filters
        </h3>
      </div>

      {/* Filter list */}
      <div className="flex flex-col gap-1 mb-4">
        {filterOptions.map((item) => {
          const Icon = item.icon;
          const isSelected = activeFilter === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onFilterChange && onFilterChange(item.id)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-[9px] border-0 text-[13px] cursor-pointer transition-colors text-left ${
                isSelected
                  ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                  : 'bg-transparent text-[#475569] font-medium hover:bg-[#F8FAFC]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  size={16}
                  strokeWidth={isSelected ? 2.2 : 1.8}
                  className={isSelected ? 'text-[#1463F3]' : 'text-[#64748B]'}
                />
                <span>{item.label}</span>
              </div>

              {item.count !== undefined && item.count !== null && (
                <span
                  className={`text-[11px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5 ${
                    isSelected
                      ? 'bg-[#1463F3] text-white'
                      : 'bg-[#F1F5F9] text-[#64748B]'
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mark as Read Button */}
      <button
        type="button"
        onClick={onMarkAllRead}
        className="w-full py-2 px-3 border border-[#D0DFFA] bg-white hover:bg-[#F5F8FF] text-[#1463F3] rounded-[9px] text-[12.5px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
      >
        <Check size={14} strokeWidth={2.5} />
        <span>Mark as Read</span>
      </button>
    </SectionCard>
  );
}
