import { Building2, ChevronDown, Users, Check } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

export default function AllCompaniesSection({
  companies = [],
  selectedIndustry,
  onIndustryChange,
  selectedLocation,
  onLocationChange,
  selectedSort,
  onSortChange,
  onFollowToggle,
}) {
  return (
    <section id="all-companies-section" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '6px' }}>
      {/* Header with Title and Filters */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building2 size={18} color="#1463F3" />
            <h2
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#102E6D',
                letterSpacing: '-0.2px',
              }}
            >
              All Companies
            </h2>
          </div>
          <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
            Browse and follow companies across different industries
          </p>
        </div>

        {/* Filter Dropdowns on the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Industry dropdown */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '6px 26px 6px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange && onIndustryChange(e.target.value)}
              style={{
                appearance: 'none',
                border: 'none',
                background: 'transparent',
                fontSize: '12px',
                fontWeight: 500,
                color: '#475569',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="All Industries">All Industries</option>
              <option value="Entertainment & Streaming">Entertainment &amp; Streaming</option>
              <option value="Music & Audio">Music &amp; Audio</option>
              <option value="IT Services & Consulting">IT Services &amp; Consulting</option>
              <option value="E-commerce & Retail">E-commerce &amp; Retail</option>
              <option value="Social Media & Networking">Social Media &amp; Networking</option>
            </select>
            <ChevronDown
              size={13}
              color="#64748B"
              style={{ position: 'absolute', right: '8px', pointerEvents: 'none' }}
            />
          </div>

          {/* Location dropdown */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '6px 26px 6px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
              style={{
                appearance: 'none',
                border: 'none',
                background: 'transparent',
                fontSize: '12px',
                fontWeight: 500,
                color: '#475569',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="All Locations">All Locations</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Europe">Europe</option>
            </select>
            <ChevronDown
              size={13}
              color="#64748B"
              style={{ position: 'absolute', right: '8px', pointerEvents: 'none' }}
            />
          </div>

          {/* Sort dropdown */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '6px 26px 6px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <select
              value={selectedSort}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              style={{
                appearance: 'none',
                border: 'none',
                background: 'transparent',
                fontSize: '12px',
                fontWeight: 500,
                color: '#475569',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="Most Followed">Most Followed</option>
              <option value="Newest">Newest</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
            <ChevronDown
              size={13}
              color="#64748B"
              style={{ position: 'absolute', right: '8px', pointerEvents: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Grid of Company Cards (3 columns on desktop matching screenshot) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '14px',
        }}
      >
        {companies.map((company) => {
          const isFollowed = !!company.isFollowed;
          return (
            <div
              key={company.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                padding: '16px 16px 14px 16px',
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
                {/* Top: Logo + Name + Follow button */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', minWidth: 0, flex: 1 }}>
                    <CompanyLogo company={company} size={38} />
                    <div style={{ minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: '#102E6D',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          lineHeight: '1.25',
                        }}
                      >
                        {company.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '11px',
                          color: '#64748B',
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {company.industry}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onFollowToggle && onFollowToggle(company.id)}
                    style={{
                      padding: '5px 14px',
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
                      gap: '3px',
                      flexShrink: 0,
                    }}
                  >
                    {isFollowed && <Check size={11} strokeWidth={2.5} />}
                    <span>{isFollowed ? 'Following' : 'Follow'}</span>
                  </button>
                </div>

                {/* Subtitle details: location and employees */}
                <p
                  style={{
                    fontSize: '10.5px',
                    color: '#94A3B8',
                    marginTop: '8px',
                    paddingLeft: '49px',
                  }}
                >
                  {company.location} &bull; {company.employees}
                </p>
              </div>

              {/* Followers */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: '#64748B',
                  fontSize: '11px',
                  marginTop: '12px',
                  paddingLeft: '49px',
                }}
              >
                <Users size={12} color="#94A3B8" />
                <span>{company.followers}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
