import { MapPin, Briefcase, Clock, Bookmark, MoreHorizontal } from 'lucide-react';
import CompanyLogo from '../companies/CompanyLogo';

export default function SavedJobCard({
  job,
  onSaveToggle,
  onApply,
  onMoreOptions,
}) {
  const isSaved = !!job.isSaved;

  return (
    <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-5 sm:p-[20px_24px] flex items-start justify-between gap-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
      {/* Left side: Company Logo + Job Details */}
      <div className="flex items-start gap-4 min-w-0 flex-1">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <CompanyLogo company={job.company} size={48} />
          {job.company.subtext && (
            <span className="text-[10px] text-[#64748B] font-medium">
              {job.company.subtext}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          {/* Company Name */}
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-0.5">
            {job.company.name}
          </h4>

          {/* Job Title */}
          <h3 className="text-[15px] font-bold text-[#1E293B] mb-2 leading-tight">
            {job.title}
          </h3>

          {/* Location & Details row */}
          <div className="flex items-center gap-3 flex-wrap text-[11.5px] text-[#64748B] mb-3.5">
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} className="text-[#94A3B8]" />
              {job.location}
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              <Briefcase size={13} className="text-[#94A3B8]" />
              {job.type}
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} className="text-[#94A3B8]" />
              {job.experience}
            </span>
          </div>

          {/* Skill Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {job.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-[#EFF6FF] text-[#1463F3] text-[11px] font-semibold py-1 px-2.5 rounded-md border border-[#DBEAFE]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Action Button (Saved pill OR Apply Now) + More options */}
      <div className="flex items-start gap-4 shrink-0">
        <div className="flex flex-col items-end gap-1.5">
          {job.hasApplyButton ? (
            <button
              type="button"
              onClick={() => onApply && onApply(job.id)}
              className="bg-white text-[#1463F3] border border-[#1463F3] rounded-lg py-1.5 px-4 text-xs font-semibold cursor-pointer transition-colors hover:bg-[#EFF6FF]"
            >
              Apply Now
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSaveToggle && onSaveToggle(job.id)}
              className="bg-[#EFF6FF] text-[#1463F3] border border-[#DBEAFE] rounded-lg py-1.5 px-3.5 text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:bg-[#DBEAFE]"
            >
              <Bookmark size={13} fill="#1463F3" />
              <span>Saved</span>
            </button>
          )}

          <span className="text-[10.5px] text-[#94A3B8]">
            {job.savedTime}
          </span>
        </div>

        {/* 3 dots menu button */}
        <button
          type="button"
          onClick={() => onMoreOptions && onMoreOptions(job.id)}
          className="bg-transparent border-0 text-[#94A3B8] cursor-pointer p-1 rounded-md flex items-center justify-center hover:text-[#475569]"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}

