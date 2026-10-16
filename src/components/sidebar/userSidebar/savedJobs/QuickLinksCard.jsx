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
    <SectionCard padding="16px">
      <h4
        style={{
          fontSize: '13.5px',
          fontWeight: 700,
          color: '#102E6D',
          marginBottom: '14px',
        }}
      >
        Quick Links
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div
              key={link.id}
              onClick={() => onItemClick && onItemClick(link.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 0',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748B',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} />
                </div>

                <div style={{ minWidth: 0 }}>
                  <h5
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#102E6D',
                      lineHeight: '1.2',
                    }}
                  >
                    {link.title}
                  </h5>
                  <p
                    style={{
                      fontSize: '10.5px',
                      color: '#64748B',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {link.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                {link.badge !== undefined && (
                  <span
                    style={{
                      backgroundColor: '#EFF6FF',
                      color: '#1463F3',
                      fontSize: '11px',
                      fontWeight: 700,
                      minWidth: '18px',
                      height: '18px',
                      borderRadius: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 4px',
                    }}
                  >
                    {link.badge}
                  </span>
                )}
                <ChevronRight size={14} color="#94A3B8" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
