import { CheckSquare, Compass, Bell, ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function QuickLinksCard({
  appliedCount = 3,
  recommendedCount = 12,
  alertsCount = 5,
  onItemClick,
}) {
  const links = [
    {
      id: 'applied-jobs',
      title: 'Applied Jobs',
      subtitle: 'View and track your applications',
      icon: CheckSquare,
      badge: appliedCount,
    },
    {
      id: 'recommended-jobs',
      title: 'Recommended Jobs',
      subtitle: 'Based on your profile',
      icon: Compass,
      badge: recommendedCount,
    },
    {
      id: 'job-alerts',
      title: 'Job Alerts',
      subtitle: 'Get notified about new jobs',
      icon: Bell,
      badge: alertsCount,
    },
  ];

  return (
    <SectionCard className="p-4">
      <h4 className="text-[13.5px] font-bold text-[#102E6D] mb-3.5">
        Quick Links
      </h4>

      <div className="flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div
              key={link.id}
              onClick={() => onItemClick && onItemClick(link.id)}
              className="flex items-center justify-between py-1 cursor-pointer rounded-lg hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#64748B] shrink-0">
                  <Icon size={16} />
                </div>

                <div className="min-w-0">
                  <h5 className="text-[12.5px] font-semibold text-[#102E6D] leading-tight">
                    {link.title}
                  </h5>
                  <p className="text-[10.5px] text-[#64748B] mt-0.5 truncate">
                    {link.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {link.badge !== undefined && (
                  <span className="bg-[#EFF6FF] text-[#1463F3] text-[11px] font-bold min-w-[18px] h-[18px] rounded-[9px] flex items-center justify-center px-1">
                    {link.badge}
                  </span>
                )}
                <ChevronRight size={14} className="text-[#94A3B8]" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

