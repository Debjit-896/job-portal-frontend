import { Bookmark } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function SaveJobsFutureCard() {
  return (
    <SectionCard
      padding="16px"
      style={{
        background: 'linear-gradient(135deg, #F0F6FE 0%, #E6F0FD 100%)',
        border: '1px solid #D5E5FA',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#1463F3',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(20, 99, 243, 0.25)',
            flexShrink: 0,
          }}
        >
          <Bookmark size={18} fill="#FFFFFF" />
        </div>

        <div>
          <h4
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#102E6D',
              marginBottom: '3px',
            }}
          >
            Save jobs, build your future
          </h4>
          <p
            style={{
              fontSize: '11px',
              color: '#64748B',
              lineHeight: '1.45',
            }}
          >
            Keep track of interesting job opportunities and apply when you&apos;re ready.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
