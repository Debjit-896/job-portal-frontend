import { MapPin, Calendar, MoreVertical, Check, Sparkles } from 'lucide-react';
import CompanyLogo from '../companies/CompanyLogo';

export default function ApplicationCard({ application, onViewDetails, onMoreOptions }) {
  const {
    company,
    role,
    location,
    appliedDate,
    status, // 'Interview Scheduled' | 'Applied' | 'In Review' | 'Rejected' | 'Offer Received'
    statusType, // 'interview' | 'applied' | 'in-review' | 'rejected' | 'offered'
    eventInfo, // e.g. "Technical Interview on 18 Sep 2025"
  } = application;

  // Render Status Badge matching screenshot exactly
  const renderStatusBadge = () => {
    switch (statusType) {
      case 'interview':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
            <Check size={12} strokeWidth={3} className="text-[#16A34A]" />
            <span>Interview Scheduled</span>
          </span>
        );
      case 'in-review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
            <span>In Review</span>
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-[#FEE2E2] text-[#B91C1C] border border-[#FECACA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
            <span>Rejected</span>
          </span>
        );
      case 'offered':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
            <Check size={12} strokeWidth={3} className="text-[#16A34A]" />
            <span>Offer Received</span>
          </span>
        );
      case 'applied':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
            <Check size={12} strokeWidth={3} className="text-[#0284C7]" />
            <span>Applied</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-4.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Left side: Company Logo + Details */}
      <div className="flex items-start gap-4 min-w-0">
        <CompanyLogo company={company} size={50} />

        <div className="min-w-0">
          <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
            {company.name}
          </h3>
          <p className="text-[13px] text-[#475569] font-medium mt-0.5">
            {role}
          </p>

          {/* Location & Applied Date */}
          <div className="flex items-center gap-3 text-[11.5px] text-[#64748B] mt-2 flex-wrap">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-[#94A3B8]" />
              {location}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-[#94A3B8]" />
              Applied on {appliedDate}
            </span>
          </div>

          {/* Optional Event Sub-row (e.g. Technical Interview date) */}
          {eventInfo && (
            <div className="flex items-center gap-1.5 text-[11.5px] text-[#64748B] mt-2.5">
              <Calendar size={13} className="text-[#94A3B8]" />
              <span>{eventInfo}</span>
            </div>
          )}
        </div>
      </div>

      {/* Center/Right: Status pill + View Details Button + More Options */}
      <div className="flex items-center gap-5 sm:gap-6 justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F1F5F9]">
        {/* Status Badge */}
        <div>{renderStatusBadge()}</div>

        {/* View Details Button */}
        <button
          type="button"
          onClick={() => onViewDetails && onViewDetails(application)}
          className="border border-[#BFDBFE] hover:border-[#1463F3] text-[#1463F3] hover:bg-[#EFF6FF] px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer bg-white"
        >
          View Details
        </button>

        {/* Vertical 3 dots */}
        <button
          type="button"
          onClick={() => onMoreOptions && onMoreOptions(application)}
          className="text-[#94A3B8] hover:text-[#475569] p-1 cursor-pointer bg-transparent border-0"
        >
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}
