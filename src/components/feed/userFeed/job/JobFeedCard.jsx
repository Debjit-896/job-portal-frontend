import { useState } from 'react';
import { Bookmark, MapPin, Briefcase, Clock, Building2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Badge from '../../../common/userCommon/Badge';

export default function JobFeedCard({ job, onJobClick, onSaveToggle }) {
  const [isSaved, setIsSaved] = useState(job.isSaved || false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    if (onSaveToggle) onSaveToggle(job.id, !isSaved);
  };

  return (
    <SectionCard
      className="p-[18px_22px] cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-[#BFDBFE]"
      onClick={() => onJobClick && onJobClick(job)}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left Side: Company Icon + Job Information */}
        <div className="flex items-start gap-3.5 flex-1 min-w-0">
          {/* Company Logo Badge */}
          {job.isGoogle ? (
            <div className="w-11 h-11 rounded-[10px] border border-[#E2E8F0] flex items-center justify-center bg-white text-[22px] font-extrabold text-[#4285F4] shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
              G
            </div>
          ) : job.isCloudLogo ? (
            <div className="w-11 h-11 rounded-[10px] bg-[#EA580C] flex items-center justify-center text-xl shrink-0 shadow-[0_2px_6px_rgba(234,88,12,0.2)]">
              ☁️
            </div>
          ) : job.isLeafLogo ? (
            <div className="w-11 h-11 rounded-[10px] bg-[#16A34A] flex items-center justify-center text-xl shrink-0 shadow-[0_2px_6px_rgba(22,163,74,0.2)]">
              🍃
            </div>
          ) : (
            <div
              style={{ backgroundColor: job.iconBg || '#1E293B' }}
              className={`w-11 h-11 rounded-[10px] text-white flex items-center justify-center font-extrabold shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.08)] ${
                job.iconText?.length > 2 ? 'text-sm' : 'text-lg'
              }`}
            >
              {job.iconText || job.company?.charAt(0) || 'J'}
            </div>
          )}

          {/* Job Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-bold text-[#102E6D] mb-0.5 leading-tight group-hover:text-[#1463F3]">
              {job.title}
            </h3>

            <p className="text-[12.5px] text-[#64748B] mb-2">
              {job.company}
            </p>

            {/* Metadata row: Location, Type, Work Model, Experience */}
            <div className="flex items-center gap-3 text-[11.5px] text-[#64748B] flex-wrap mb-2.5">
              <div className="flex items-center gap-1">
                <MapPin size={12} className="text-[#94A3B8]" />
                <span>{job.location}</span>
              </div>

              {job.workModel && (
                <div className="flex items-center gap-1">
                  <Building2 size={12} className="text-[#94A3B8]" />
                  <span>{job.workModel}</span>
                </div>
              )}

              {job.type && (
                <div className="flex items-center gap-1">
                  <Briefcase size={12} className="text-[#94A3B8]" />
                  <span>{job.type}</span>
                </div>
              )}

              {job.experience && (
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-[#94A3B8]" />
                  <span>{job.experience}</span>
                </div>
              )}
            </div>

            {/* Skill tags */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {job.skills?.map((skill) => (
                <Badge
                  key={skill}
                  className="text-[11px] px-2.5 py-0.5 bg-[#F1F6FD] text-[#2563EB] border-[#D9E7FA] rounded-md"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Salary, Bookmark & Posted Time */}
        <div className="flex flex-col items-end justify-between h-full gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-[13.5px] font-bold text-[#059669]">
              {job.salary}
            </span>

            <button
              type="button"
              onClick={handleSave}
              className={`bg-transparent border-0 cursor-pointer p-0.5 flex items-center justify-center ${
                isSaved ? 'text-[#1463F3]' : 'text-[#94A3B8] hover:text-[#1463F3]'
              }`}
              title={isSaved ? 'Unsave Job' : 'Save Job'}
            >
              <Bookmark size={16} fill={isSaved ? '#1463F3' : 'none'} />
            </button>
          </div>

          <span className="text-[11px] text-[#94A3B8]">{job.postedTime}</span>
        </div>
      </div>
    </SectionCard>
  );
}

