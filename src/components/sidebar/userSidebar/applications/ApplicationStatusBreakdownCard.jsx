import { ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ApplicationStatusBreakdownCard({
  statuses = [
    { id: 'applied', label: 'Applied', count: 8, color: '#3B82F6' },
    { id: 'in-review', label: 'In Review', count: 1, color: '#A855F7' },
    { id: 'interview-scheduled', label: 'Interview Scheduled', count: 2, color: '#10B981', isIcon: true },
    { id: 'offer-received', label: 'Offer Received', count: 1, color: '#22C55E' },
    { id: 'rejected', label: 'Rejected', count: 1, color: '#EF4444' },
  ],
  activeStatus,
  onStatusClick,
}) {
  return (
    <SectionCard className="p-4 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#F1F5F9]">
        <div className="text-[#1E293B]">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="text-[13.5px] font-bold text-[#1E293B]">
          Application Status
        </h3>
      </div>

      {/* List of statuses */}
      <div className="flex flex-col">
        {statuses.map((item) => {
          const isSelected = activeStatus === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onStatusClick && onStatusClick(item.id)}
              className={`flex items-center justify-between py-2 px-1.5 rounded-lg cursor-pointer transition-colors hover:bg-[#F8FAFC] ${
                isSelected ? 'bg-[#EFF6FF]' : ''
              }`}
            >
              {/* Left: colored dot / icon + label */}
              <div className="flex items-center gap-2.5">
                {item.id === 'interview-scheduled' ? (
                  <span className="w-2.5 h-2.5 flex items-center justify-center text-[#10B981]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                ) : (
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                <span className="text-[13px] font-medium text-[#334155]">
                  {item.label}
                </span>
              </div>

              {/* Right: count + arrow */}
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <span className="text-[12.5px] font-semibold text-[#64748B]">
                  {item.count}
                </span>
                <ChevronRight size={14} className="text-[#94A3B8]" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
