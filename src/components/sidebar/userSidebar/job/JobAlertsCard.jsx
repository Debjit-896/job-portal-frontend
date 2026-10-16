import { Bell, Target } from 'lucide-react';
import Button from '../../../common/userCommon/Button';

export default function JobAlertsCard({ onCreateAlert }) {
  return (
    <div className="bg-gradient-to-br from-[#EFF6FF] to-[#E3EFFF] rounded-[14px] p-5 border border-[#D2E4FC]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-[38px] h-[38px] rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
          <Target size={20} />
        </div>
        <h4 className="text-sm font-bold text-[#102E6D]">
          Get Job Alerts
        </h4>
      </div>

      <p className="text-[11.5px] text-[#64748B] leading-[1.45] mb-3.5">
        Be the first to know about new job postings matching your skills and preferences.
      </p>

      <Button
        variant="primary"
        size="sm"
        fullWidth
        onClick={onCreateAlert}
        icon={Bell}
        className="text-[12.5px] font-semibold rounded-lg py-2 px-3.5"
      >
        Create Job Alert
      </Button>
    </div>
  );
}

