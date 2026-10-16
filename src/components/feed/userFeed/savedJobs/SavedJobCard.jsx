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
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.06)';
        e.currentTarget.style.transform = 'translateY(-1.5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Left side: Company Logo + Job Details */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <CompanyLogo company={job.company} size={48} />
          {job.company.subtext && (
            <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 500 }}>
              {job.company.subtext}
            </span>
          )}
        </div>

        <div style={{ minWidth: 0, flex: 1 }}>
          {/* Company Name */}
          <h4
            style={{
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#102E6D',
              marginBottom: '2px',
            }}
          >
            {job.company.name}
          </h4>

          {/* Job Title */}
          <h3
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#1E293B',
              marginBottom: '8px',
            }}
          >
            {job.title}
          </h3>

          {/* Location & Details row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              fontSize: '11.5px',
              color: '#64748B',
              marginBottom: '14px',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={13} color="#94A3B8" />
              {job.location}
            </span>
            <span>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Briefcase size={13} color="#94A3B8" />
              {job.type}
            </span>
            <span>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} color="#94A3B8" />
              {job.experience}
            </span>
          </div>

          {/* Skill Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {job.skills?.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: '#EFF6FF',
                  color: '#1463F3',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid #DBEAFE',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Action Button (Saved pill OR Apply Now) + More options */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          {job.hasApplyButton ? (
            <button
              type="button"
              onClick={() => onApply && onApply(job.id)}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#1463F3',
                border: '1px solid #1463F3',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              Apply Now
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSaveToggle && onSaveToggle(job.id)}
              style={{
                backgroundColor: '#EFF6FF',
                color: '#1463F3',
                border: '1px solid #DBEAFE',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease',
              }}
            >
              <Bookmark size={13} fill="#1463F3" />
              <span>Saved</span>
            </button>
          )}

          <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>
            {job.savedTime}
          </span>
        </div>

        {/* 3 dots menu button */}
        <button
          type="button"
          onClick={() => onMoreOptions && onMoreOptions(job.id)}
          style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
