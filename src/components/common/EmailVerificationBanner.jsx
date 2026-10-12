import { useState } from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * Banner shown on dashboards when user.emailVerified === false.
 * Provides immediate CTA to navigate to /verify-email.
 */
export default function EmailVerificationBanner() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);

  // If user is not loaded or already verified, don't show banner
  if (!user || user.emailVerified === true || dismissed) {
    return null;
  }

  const handleVerifyClick = () => {
    navigate(`/verify-email?email=${encodeURIComponent(user.email || '')}`, {
      state: {
        email: user.email,
      }
    });
  };

  return (
    <div
      role="alert"
      style={{
        backgroundColor: '#fffbeb',
        border: '1px solid #fef3c7',
        borderLeft: '4px solid #f59e0b',
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 2px 8px rgba(245, 158, 11, 0.08)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '240px' }}>
        <div style={{ color: '#d97706', display: 'flex', alignItems: 'center' }}>
          <AlertTriangle size={20} />
        </div>
        <div>
          <span style={{ fontWeight: '600', color: '#92400e', fontSize: '0.875rem' }}>
            Email verification pending:
          </span>{' '}
          <span style={{ color: '#b45309', fontSize: '0.875rem' }}>
            Your account ({user.email}) has not been verified yet. Please complete verification.
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={handleVerifyClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#d97706',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 14px',
            fontSize: '0.8125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b45309')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
        >
          <span>Verify Now</span>
          <ArrowRight size={14} />
        </button>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          style={{
            background: 'none',
            border: 'none',
            color: '#92400e',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
