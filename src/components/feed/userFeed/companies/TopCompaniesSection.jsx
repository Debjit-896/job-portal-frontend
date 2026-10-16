import { Flame, ArrowRight } from 'lucide-react';
import TopCompanyCard from './TopCompanyCard';

export default function TopCompaniesSection({ companies = [], onFollowToggle, onViewAll }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#EF4444',
              }}
            >
              <Flame size={18} fill="#EF4444" />
            </span>
            <h2
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#102E6D',
                letterSpacing: '-0.2px',
              }}
            >
              Top Companies
            </h2>
          </div>
          <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
            Most followed and active companies on JobNest
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#1463F3',
            fontSize: '12.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Grid of Top Company Cards (4 columns on desktop matching screenshot) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '14px',
        }}
      >
        {companies.map((company) => (
          <TopCompanyCard
            key={company.id}
            company={company}
            onFollowToggle={onFollowToggle}
          />
        ))}
      </div>
    </section>
  );
}
