import { Shield, Lock } from 'lucide-react';
import SectionCard from '../../../../common/userCommon/SectionCard';

export default function AccountSecuritySection({
  is2FAEnabled = false,
  onToggle2FA,
  onViewLoginActivity,
}) {
  return (
    <SectionCard className="p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[15px] font-bold text-[#102E6D] m-0">
          Account Security
        </h2>
        <p className="text-xs text-[#64748B] mt-1 mb-0">
          Keep your account safe and secure
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Two-Factor Authentication (2FA) */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Shield size={16} className="text-[#94A3B8]" />
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#1E293B]">
                Two-Factor Authentication (2FA)
              </span>
              <span
                className={`text-[10.5px] px-2 py-0.5 rounded-full font-semibold ${is2FAEnabled
                    ? 'bg-[#DCFCE7] text-[#166534]'
                    : 'bg-[#FEE2E2] text-[#DC2626]'
                  }`}
              >
                {is2FAEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggle2FA}
            className="bg-transparent border-0 text-[#1463F3] hover:underline font-semibold text-xs cursor-pointer"
          >
            {is2FAEnabled ? 'Disable' : 'Enable'}
          </button>
        </div>

        {/* Login Activity */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Lock size={16} className="text-[#94A3B8]" />
            <div>
              <p className="font-medium text-[#1E293B] m-0">
                Login Activity
              </p>
              <p className="text-[11px] text-[#94A3B8] m-0">
                View your recent login activity
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onViewLoginActivity}
            className="bg-transparent border-0 text-[#1463F3] hover:underline font-semibold text-xs cursor-pointer"
          >
            View
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
