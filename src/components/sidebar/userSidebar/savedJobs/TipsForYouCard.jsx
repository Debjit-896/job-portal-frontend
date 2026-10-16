import { Lightbulb, User, Key, Bell, ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function TipsForYouCard({ onTipClick }) {
  const tips = [
    {
      id: 'update-profile',
      title: 'Update your profile',
      subtitle: 'A complete profile gets you 3x more interviews.',
      icon: User,
    },
    {
      id: 'add-skills',
      title: 'Add skills',
      subtitle: 'Include relevant skills to match with better jobs.',
      icon: Key,
    },
    {
      id: 'set-job-alerts',
      title: 'Set job alerts',
      subtitle: 'Get notified when new jobs matching your interest are posted.',
      icon: Bell,
    },
  ];

  return (
    <SectionCard padding="16px">
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
        <Lightbulb size={16} color="#1463F3" />
        <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#102E6D' }}>
          Tips for You
        </h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.id}
              onClick={() => onTipClick && onTipClick(tip.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
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
                    marginTop: '2px',
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
                    {tip.title}
                  </h5>
                  <p
                    style={{
                      fontSize: '10.5px',
                      color: '#64748B',
                      marginTop: '2px',
                      lineHeight: '1.35',
                    }}
                  >
                    {tip.subtitle}
                  </p>
                </div>
              </div>

              <ChevronRight size={14} color="#94A3B8" style={{ flexShrink: 0, marginLeft: '6px' }} />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
