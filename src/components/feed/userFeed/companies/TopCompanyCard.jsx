import { Users, Check } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

export default function TopCompanyCard({ company, onFollowToggle }) {
  const isFollowed = !!company.isFollowed;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        padding: '18px 18px 16px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.07)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div>
        {/* Top: Logo + Name with verified check + Subtitle */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <CompanyLogo company={company} size={42} />

          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <h3
                style={{
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: '#102E6D',
                  lineHeight: '1.25',
                }}
              >
                {company.name}
              </h3>
              {company.isVerified && (
                <span
                  title="Verified Company"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#1463F3',
                    color: '#FFFFFF',
                  }}
                >
                  <Check size={9} strokeWidth={3} />
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: '11px',
                color: '#64748B',
                marginTop: '2px',
                lineHeight: '1.3',
              }}
            >
              {company.industry}
            </p>
            <p
              style={{
                fontSize: '10.5px',
                color: '#94A3B8',
                marginTop: '1px',
              }}
            >
              {company.location} &bull; {company.employees}
            </p>
          </div>
        </div>

        {/* Middle: Description paragraph */}
        <p
          style={{
            fontSize: '12px',
            color: '#475569',
            lineHeight: '1.48',
            marginBottom: '16px',
            minHeight: '36px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {company.description}
        </p>
      </div>

      {/* Bottom Row: Followers count + Follow/Following button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '10px',
          borderTop: '1px solid #F1F5F9',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748B', fontSize: '11px' }}>
          <Users size={13} color="#94A3B8" />
          <span>{company.followers}</span>
        </div>

        <button
          type="button"
          onClick={() => onFollowToggle && onFollowToggle(company.id)}
          style={{
            padding: '6px 16px',
            borderRadius: '8px',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            border: isFollowed ? 'none' : '1px solid #1463F3',
            backgroundColor: isFollowed ? '#1463F3' : '#FFFFFF',
            color: isFollowed ? '#FFFFFF' : '#1463F3',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {isFollowed && <Check size={12} strokeWidth={2.5} />}
          <span>{isFollowed ? 'Following' : 'Follow'}</span>
        </button>
      </div>
    </div>
  );
}
