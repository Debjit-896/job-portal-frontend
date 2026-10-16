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
      className="bg-[#fffbeb] border border-[#fef3c7] border-l-4 border-l-[#f59e0b] rounded-lg px-4 py-3 mb-6 flex items-center justify-between flex-wrap gap-3 shadow-[0_2px_8px_rgba(245,158,11,0.08)]"
    >
      <div className="flex items-center gap-3 min-w-[240px]">
        <div className="text-[#d97706] flex items-center">
          <AlertTriangle size={20} />
        </div>
        <div>
          <span className="font-semibold text-[#92400e] text-sm">
            Email verification pending:
          </span>{' '}
          <span className="text-[#b45309] text-sm">
            Your account ({user.email}) has not been verified yet. Please complete verification.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleVerifyClick}
          className="inline-flex items-center gap-1.5 bg-[#d97706] hover:bg-[#b45309] text-white border-0 rounded-md py-1.5 px-3.5 text-[13px] font-semibold cursor-pointer transition-colors duration-200"
        >
          <span>Verify Now</span>
          <ArrowRight size={14} />
        </button>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="bg-transparent border-0 text-[#92400e] hover:text-[#78350f] cursor-pointer p-1 flex items-center transition-colors duration-150"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
