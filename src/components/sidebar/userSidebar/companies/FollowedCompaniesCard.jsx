import { ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../../../feed/userFeed/companies/CompanyLogo';

export default function FollowedCompaniesCard({ companies = [], onUnfollow, onViewAll }) {
  return (
    <SectionCard padding="16px">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#102E6D' }}>
          Followed Companies
        </h4>
        <button
          type="button"
          onClick={onViewAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#1463F3',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          View All <ArrowRight size={12} />
        </button>
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {companies.map((company) => (
          <div
            key={company.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
              <CompanyLogo company={company} size={34} />
              <div style={{ minWidth: 0 }}>
                <h5
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#102E6D',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.2',
                  }}
                >
                  {company.name}
                </h5>
                <p
                  style={{
                    fontSize: '10.5px',
                    color: '#64748B',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginTop: '2px',
                  }}
                >
                  {company.followers}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onUnfollow && onUnfollow(company.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1463F3',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '4px 6px',
                borderRadius: '6px',
                transition: 'background-color 0.15s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Unfollow
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
