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
      padding="18px 22px"
      style={{
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
      }}
      onClick={() => onJobClick && onJobClick(job)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        {/* Left Side: Company Icon + Job Information */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1, minWidth: 0 }}>
          {/* Company Logo Badge */}
          {job.isGoogle ? (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                fontSize: '22px',
                fontWeight: 800,
                color: '#4285F4',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              G
            </div>
          ) : job.isCloudLogo ? (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#EA580C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(234, 88, 12, 0.2)',
              }}
            >
              ☁️
            </div>
          ) : job.isLeafLogo ? (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#16A34A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(22, 163, 74, 0.2)',
              }}
            >
              🍃
            </div>
          ) : (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: job.iconBg || '#1E293B',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: job.iconText?.length > 2 ? '14px' : '18px',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              }}
            >
              {job.iconText || job.company?.charAt(0) || 'J'}
            </div>
          )}

          {/* Job Details */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#102E6D',
                marginBottom: '2px',
                lineHeight: '1.25',
              }}
            >
              {job.title}
            </h3>

            <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '8px' }}>
              {job.company}
            </p>

            {/* Metadata row: Location, Type, Work Model, Experience */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '11.5px',
                color: '#64748B',
                flexWrap: 'wrap',
                marginBottom: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} color="#94A3B8" />
                <span>{job.location}</span>
              </div>

              {job.workModel && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Building2 size={12} color="#94A3B8" />
                  <span>{job.workModel}</span>
                </div>
              )}

              {job.type && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Briefcase size={12} color="#94A3B8" />
                  <span>{job.type}</span>
                </div>
              )}

              {job.experience && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} color="#94A3B8" />
                  <span>{job.experience}</span>
                </div>
              )}
            </div>

            {/* Skill tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {job.skills?.map((skill) => (
                <Badge
                  key={skill}
                  style={{
                    fontSize: '11px',
                    padding: '2px 9px',
                    backgroundColor: '#F1F6FD',
                    color: '#2563EB',
                    border: '1px solid #D9E7FA',
                    borderRadius: '6px',
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Salary, Bookmark & Posted Time */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: '100%',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#059669',
              }}
            >
              {job.salary}
            </span>

            <button
              type="button"
              onClick={handleSave}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isSaved ? '#1463F3' : '#94A3B8',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={isSaved ? 'Unsave Job' : 'Save Job'}
            >
              <Bookmark size={16} fill={isSaved ? '#1463F3' : 'none'} />
            </button>
          </div>

          <span style={{ fontSize: '11px', color: '#94A3B8' }}>{job.postedTime}</span>
        </div>
      </div>
    </SectionCard>
  );
}
