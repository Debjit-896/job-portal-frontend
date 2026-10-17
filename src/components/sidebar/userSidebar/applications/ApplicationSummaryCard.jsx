import { CheckSquare } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ApplicationSummaryCard({ summary = { total: 12, interviews: 2, offer: 1, rejected: 1 } }) {
  return (
    <SectionCard className="p-4 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      {/* Title */}
      <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-[#F1F5F9]">
        <div className="text-[#1463F3]">
          <CheckSquare size={17} strokeWidth={2.2} />
        </div>
        <h3 className="text-[13.5px] font-bold text-[#1E293B]">
          Application Summary
        </h3>
      </div>

      {/* 2x2 Grid of Metrics */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Total Applications */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0]/60 rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
          <div>
            <div className="text-[17px] font-bold text-[#0F172A] leading-tight">
              {summary.total}
            </div>
            <div className="text-[10.5px] text-[#64748B] font-medium leading-tight mt-0.5">
              Total Applications
            </div>
          </div>
        </div>

        {/* Interviews */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0]/60 rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <div className="text-[17px] font-bold text-[#0F172A] leading-tight">
              {summary.interviews}
            </div>
            <div className="text-[10.5px] text-[#64748B] font-medium leading-tight mt-0.5">
              Interviews
            </div>
          </div>
        </div>

        {/* Offer Received */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0]/60 rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FAF5FF] text-[#8B5CF6] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div>
            <div className="text-[17px] font-bold text-[#0F172A] leading-tight">
              {summary.offer}
            </div>
            <div className="text-[10.5px] text-[#64748B] font-medium leading-tight mt-0.5">
              Offer Received
            </div>
          </div>
        </div>

        {/* Rejected */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0]/60 rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div>
            <div className="text-[17px] font-bold text-[#0F172A] leading-tight">
              {summary.rejected}
            </div>
            <div className="text-[10.5px] text-[#64748B] font-medium leading-tight mt-0.5">
              Rejected
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
