import { Bell, Target } from 'lucide-react';
import Button from '../../../common/userCommon/Button';

export default function JobAlertsCard({ onCreateAlert }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #E3EFFF 100%)',
        borderRadius: '14px',
        padding: '18px 20px',
        border: '1px solid #D2E4FC',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#DBEAFE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563EB',
            flexShrink: 0,
          }}
        >
          <Target size={20} />
        </div>
        <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#102E6D' }}>
          Get Job Alerts
        </h4>
      </div>

      <p style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45', marginBottom: '14px' }}>
        Be the first to know about new job postings matching your skills and preferences.
      </p>

      <Button
        variant="primary"
        size="sm"
        fullWidth
        onClick={onCreateAlert}
        icon={Bell}
        style={{
          fontSize: '12.5px',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '8px 14px',
        }}
      >
        Create Job Alert
      </Button>
    </div>
  );
}
