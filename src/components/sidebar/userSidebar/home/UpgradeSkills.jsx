import { Target, ArrowRight } from 'lucide-react';

export default function UpgradeSkills({ onBrowseCourses }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #E6EDFE 100%)',
        borderRadius: '14px',
        padding: '16px 18px',
        border: '1px solid #D6E4FB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#DBEAFE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563EB',
            flexShrink: 0,
          }}
        >
          <Target size={22} />
        </div>
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#102E6D', marginBottom: '2px' }}>
            Upgrade Your Skills
          </h4>
          <p style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.3' }}>
            Take courses, get certified and make your profile stand out.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onBrowseCourses}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '6px 10px',
          borderRadius: '8px',
          border: '1px solid #C7D9FA',
          backgroundColor: '#EEF2FF',
          color: '#3B82F6',
          fontSize: '11px',
          fontWeight: 600,
          cursor: 'pointer',
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: 'all 0.15s',
        }}
      >
        Browse Courses <ArrowRight size={11} />
      </button>
    </div>
  );
}
