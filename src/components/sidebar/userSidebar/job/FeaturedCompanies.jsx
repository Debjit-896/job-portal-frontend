import { useState } from 'react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function FeaturedCompanies({
  companies = [
    {
      id: 'google',
      name: 'Google',
      openRoles: '120+ open roles',
      logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png',
      isGoogle: true,
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      openRoles: '98+ open roles',
      isMicrosoft: true,
    },
    {
      id: 'amazon',
      name: 'Amazon',
      openRoles: '76+ open roles',
      iconText: 'a',
      isAmazon: true,
    },
    {
      id: 'tcs',
      name: 'TCS',
      openRoles: '65+ open roles',
      iconText: 'tcs',
      iconBg: '#0F172A',
    },
    {
      id: 'accenture',
      name: 'Accenture',
      openRoles: '54+ open roles',
      iconText: '>',
      iconBg: '#4C1D95',
    },
  ],
  onViewAll,
  onFollow,
}) {
  const [followedState, setFollowedState] = useState({});

  const handleFollowToggle = (id) => {
    setFollowedState((prev) => ({ ...prev, [id]: !prev[id] }));
    if (onFollow) onFollow(id);
  };

  return (
    <SectionCard padding="20px 18px">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D' }}>
          Featured Companies
        </h4>
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

      {/* Companies List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {companies.map((company) => {
          const isFollowed = !!followedState[company.id];
          return (
            <div
              key={company.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                {/* Logo Badge */}
                {company.isGoogle ? (
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFFFFF',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#4285F4',
                      flexShrink: 0,
                    }}
                  >
                    G
                  </div>
                ) : company.isMicrosoft ? (
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '2px',
                      padding: '8px',
                      backgroundColor: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ backgroundColor: '#F25022', borderRadius: '1px' }} />
                    <div style={{ backgroundColor: '#7FBA00', borderRadius: '1px' }} />
                    <div style={{ backgroundColor: '#00A4EF', borderRadius: '1px' }} />
                    <div style={{ backgroundColor: '#FFB900', borderRadius: '1px' }} />
                  </div>
                ) : company.isAmazon ? (
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#1E293B',
                      color: '#F59E0B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '18px',
                      flexShrink: 0,
                    }}
                  >
                    a
                  </div>
                ) : (
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: company.iconBg || '#1E293B',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '11px',
                      flexShrink: 0,
                    }}
                  >
                    {company.iconText}
                  </div>
                )}

                {/* Company Name & Open Roles */}
                <div style={{ minWidth: 0 }}>
                  <h5
                    style={{
                      fontSize: '13px',
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
                      fontSize: '11px',
                      color: '#64748B',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {company.openRoles}
                  </p>
                </div>
              </div>

              {/* Follow Button */}
              <button
                type="button"
                onClick={() => handleFollowToggle(company.id)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '16px',
                  border: isFollowed ? '1px solid #10B981' : '1px solid #D5E3F8',
                  backgroundColor: isFollowed ? '#ECFDF5' : '#FFFFFF',
                  color: isFollowed ? '#059669' : '#1463F3',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                {isFollowed && <Check size={11} />}
                <span>{isFollowed ? 'Following' : 'Follow'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
