import { ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Button from '../../../common/userCommon/Button';

export default function GetNoticedCard({ onCompleteProfile }) {
  return (
    <SectionCard padding="20px 18px">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D', marginBottom: '6px' }}>
            Get noticed by top companies
          </h4>
          <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.45', marginBottom: '14px' }}>
            Build a complete profile, add your skills and experience, and increase your chances of getting hired.
          </p>
        </div>

        {/* Small resume/badge icon illustration */}
        <div style={{ position: 'relative', width: '42px', height: '48px', flexShrink: 0 }}>
          <div
            style={{
              width: '36px',
              height: '44px',
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              padding: '6px 5px',
              gap: '3px',
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#93C5FD' }} />
            <div style={{ width: '22px', height: '2px', backgroundColor: '#BFDBFE', borderRadius: '1px' }} />
            <div style={{ width: '18px', height: '2px', backgroundColor: '#BFDBFE', borderRadius: '1px' }} />
          </div>
          {/* Checkmark badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 800,
              border: '1.5px solid #FFFFFF',
            }}
          >
            ✓
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        size="sm"
        fullWidth
        onClick={onCompleteProfile}
        style={{
          fontSize: '12.5px',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '8px 14px',
        }}
      >
        Complete Your Profile <ArrowRight size={13} />
      </Button>
    </SectionCard>
  );
}
