import { Target } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function WantBetterJobMatchesCard({ onUpdatePreferences }) {
  return (
    <SectionCard
      padding="18px 16px"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #E0EDFD 100%)',
        border: '1px solid #BFDBFE',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            backgroundColor: '#1463F3',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(20, 99, 243, 0.25)',
          }}
        >
          <Target size={16} />
        </div>
        <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#102E6D' }}>
          Want better job matches?
        </h4>
      </div>

      <p
        style={{
          fontSize: '11px',
          color: '#475569',
          lineHeight: '1.45',
          marginBottom: '14px',
        }}
      >
        Tell us your career interests and get personalized recommendations.
      </p>

      <button
        type="button"
        onClick={onUpdatePreferences}
        style={{
          backgroundColor: '#1463F3',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 14px',
          fontSize: '11.5px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          boxShadow: '0 2px 6px rgba(20, 99, 243, 0.2)',
          transition: 'background-color 0.15s ease',
        }}
      >
        <span>Update Preferences</span>
        <span>&rarr;</span>
      </button>
    </SectionCard>
  );
}
