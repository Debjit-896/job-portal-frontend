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
    <SectionCard padding="18px 20px">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D' }}>
          Recommended Jobs
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#1463F3',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Jobs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {jobs.map((job) => {
          const isSaved = !!savedJobs[job.id];
          return (
            <div
              key={job.id}
              onClick={() => onJobClick && onJobClick(job)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                cursor: 'pointer',
              }}
            >
              {/* Company Logo Badge */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: job.iconBg || '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '18px',
                  flexShrink: 0,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.06)',
                }}
              >
                {job.isLeafLogo ? '🍃' : job.isCloudLogo ? '☁️' : job.iconText}
              </div>

              {/* Job Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                  <h4
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: '#102E6D',
                      lineHeight: '1.25',
                      marginBottom: '2px',
                    }}
                  >
                    {job.title}
                  </h4>
                  <button
                    type="button"
                    onClick={(e) => toggleSave(job.id, e)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isSaved ? '#1463F3' : '#94A3B8',
                      cursor: 'pointer',
                      padding: '2px',
                    }}
                    title={isSaved ? 'Unsave' : 'Save'}
                  >
                    <Bookmark size={15} fill={isSaved ? '#1463F3' : 'none'} />
                  </button>
                </div>

                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '6px' }}>
                  {job.company}
                </p>

                {/* Skill Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  {job.tags.map((tag) => (
                    <Badge
                      key={tag}
                      style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        backgroundColor: '#F1F5F9',
                        color: '#475569',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Location & Metadata */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    color: '#94A3B8',
                  }}
                >
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
