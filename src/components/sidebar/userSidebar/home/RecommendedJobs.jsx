import { useState } from 'react';
import { Bookmark, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Badge from '../../../common/userCommon/Badge';

export default function RecommendedJobs({
  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'ApexSoft Technologies',
      iconBg: '#1E293B',
      iconText: 'A',
      tags: ['React', 'Next.js', 'JavaScript'],
      location: 'Kolkata, West Bengal',
      type: 'Hybrid',
      postedTime: '2 days ago',
      isSaved: false,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'CloudWind Technologies',
      iconBg: '#EA580C',
      iconText: 'C',
      isCloudLogo: true,
      tags: ['React', 'Node.js', 'PostgreSQL'],
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      postedTime: '1 day ago',
      isSaved: false,
    },
    {
      id: 3,
      title: 'Backend Developer (Java)',
      company: 'TechSphere Inc.',
      iconBg: '#1D4ED8',
      iconText: 'T',
      tags: ['Java', 'Spring Boot', 'Microservices'],
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      postedTime: '3 days ago',
      isSaved: false,
    },
    {
      id: 4,
      title: 'Software Engineer (React + Node.js)',
      company: 'GreenByte Labs',
      iconBg: '#16A34A',
      iconText: 'G',
      isLeafLogo: true,
      tags: ['React', 'Node.js', 'Express.js'],
      location: 'Remote',
      type: 'Full-time',
      postedTime: '4 days ago',
      isSaved: false,
    },
  ],
  onViewAll,
  onJobClick,
}) {
  const [savedJobs, setSavedJobs] = useState({});

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSavedJobs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SectionCard className="p-[18px_20px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14.5px] font-bold text-[#102E6D]">
          Recommended Jobs
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer inline-flex items-center gap-0.5 hover:underline"
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Jobs List */}
      <div className="flex flex-col gap-4">
        {jobs.map((job) => {
          const isSaved = !!savedJobs[job.id];
          return (
            <div
              key={job.id}
              onClick={() => onJobClick && onJobClick(job)}
              className="flex items-start gap-3 cursor-pointer group"
            >
              {/* Company Logo Badge */}
              <div
                style={{ backgroundColor: job.iconBg || '#1E293B' }}
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-[0_2px_5px_rgba(0,0,0,0.06)]"
              >
                {job.isLeafLogo ? '🍃' : job.isCloudLogo ? '☁️' : job.iconText}
              </div>

              {/* Job Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-[13.5px] font-bold text-[#102E6D] leading-tight mb-0.5 group-hover:text-[#1463F3] transition-colors">
                    {job.title}
                  </h4>
                  <button
                    type="button"
                    onClick={(e) => toggleSave(job.id, e)}
                    className={`bg-transparent border-0 cursor-pointer p-0.5 ${
                      isSaved ? 'text-[#1463F3]' : 'text-[#94A3B8] hover:text-[#1463F3]'
                    }`}
                    title={isSaved ? 'Unsave' : 'Save'}
                  >
                    <Bookmark size={15} fill={isSaved ? '#1463F3' : 'none'} />
                  </button>
                </div>

                <p className="text-xs text-[#64748B] mb-1.5">
                  {job.company}
                </p>

                {/* Skill Badges */}
                <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                  {job.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="text-[11px] px-2 py-0.5 bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Location & Metadata */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
                  <MapPin size={11} />
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.postedTime}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

