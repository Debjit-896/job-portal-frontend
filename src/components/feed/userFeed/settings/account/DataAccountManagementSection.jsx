import { Download, Trash2 } from 'lucide-react';
import SectionCard from '../../../../common/userCommon/SectionCard';

export default function DataAccountManagementSection({
  onRequestData,
  onDeactivateAccount,
}) {
  return (
    <SectionCard className="p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[15px] font-bold text-[#102E6D] m-0">
          Data & Account Management
        </h2>
        <p className="text-xs text-[#64748B] mt-1 mb-0">
          Manage your data and account preferences
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Download Your Data */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Download size={16} className="text-[#94A3B8]" />
            <div>
              <p className="font-medium text-[#1E293B] m-0">
                Download Your Data
              </p>
              <p className="text-[11px] text-[#94A3B8] m-0">
                Get a copy of your data
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onRequestData}
            className="bg-transparent border-0 text-[#1463F3] hover:underline font-semibold text-xs cursor-pointer"
          >
            Request
          </button>
        </div>

        {/* Deactivate Account */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Trash2 size={16} className="text-[#94A3B8]" />
            <div>
              <p className="font-medium text-[#1E293B] m-0">
                Deactivate Account
              </p>
              <p className="text-[11px] text-[#94A3B8] m-0">
                Temporarily disable or permanently delete your account
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onDeactivateAccount}
            className="bg-transparent border-0 text-[#1463F3] hover:underline font-semibold text-xs cursor-pointer"
          >
            Deactivate
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
