import {
  Users,
  Building2,
  Network,
  Bookmark,
  FileText,
  Settings,
  ChevronRight,
  ArrowRight,
  Rocket,
  Eye,
  TrendingUp,
} from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';
import Button from '../../../common/userCommon/Button';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function LeftSidebar({
  activeMenu = 'my-feed',
  onMenuClick,
  userProfile = {
    name: 'Debjit Pal',
    headline: 'Aspiring Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    profileCompletion: 80,
  },
}) {
  const menuItems = [
    { id: 'my-feed', label: 'My Feed', icon: Users, badge: null },
    { id: 'companies', label: 'Companies', icon: Building2, badge: null },
    { id: 'network', label: 'Network', icon: Network, badge: null },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: Bookmark, badge: null },
    { id: 'my-applications', label: 'My Applications', icon: FileText, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '255px', flexShrink: 0 }}>
      {/* 1. Profile Mini Card */}
      <SectionCard padding="16px">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar src={userProfile.avatar} name={userProfile.name} size={46} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <h3
              style={{
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#102E6D',
                marginBottom: '2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {userProfile.name}
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: '#64748B',
                marginBottom: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {userProfile.headline}
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '11.5px',
                color: '#1463F3',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View Profile <ArrowRight size={12} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#EDF2F7', margin: '14px 0 12px 0' }} />

        {/* Profile Completion Widget */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#102E6D' }}>
              Complete Your Profile
            </span>
            <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#102E6D' }}>
              {userProfile.profileCompletion}%
            </span>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              height: '5px',
              backgroundColor: '#E2E8F0',
              borderRadius: '3px',
              overflow: 'hidden',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${userProfile.profileCompletion}%`,
                background: 'linear-gradient(90deg, #10B981 0%, #34D399 100%)',
                borderRadius: '3px',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <p style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
              Add skills, projects and experience to get more job opportunities.
            </p>
            <ChevronRight size={14} color="#94A3B8" style={{ marginTop: '2px', flexShrink: 0 }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#EDF2F7', margin: '12px 0 10px 0' }} />

        {/* Profile Analytics / Viewers */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: '2px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={13} color="#64748B" />
              <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 500 }}>
                Profile viewers
              </span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#1463F3' }}>
              {userProfile.profileViewers ?? 142}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: '2px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TrendingUp size={13} color="#64748B" />
              <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 500 }}>
                Post impressions
              </span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#102E6D' }}>
              {userProfile.postImpressions ?? '1.2k'}
            </span>
          </div>
        </div>
      </SectionCard>

      {/* 2. Navigation Menu */}
      <SectionCard padding="8px" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onMenuClick && onMenuClick(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 12px',
                borderRadius: '9px',
                border: 'none',
                backgroundColor: isActive ? '#EAF3FF' : 'transparent',
                color: isActive ? '#1463F3' : '#475569',
                fontWeight: isActive ? 600 : 500,
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                <Icon size={17} strokeWidth={isActive ? 2.2 : 1.9} color={isActive ? '#1463F3' : '#64748B'} />
                <span>{item.label}</span>
              </div>

              {item.badge !== null && item.badge > 0 && (
                <span
                  style={{
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontSize: '10px',
                    fontWeight: 700,
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '9px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </SectionCard>

      {/* 3. Promo Banner / Grow Your Career */}
      <div
        style={{
          background: 'linear-gradient(135deg, #F0F6FF 0%, #E8F1FD 100%)',
          borderRadius: '14px',
          padding: '16px',
          border: '1px solid #DCE7F7',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1463F3',
              boxShadow: '0 2px 6px rgba(20, 99, 243, 0.15)',
            }}
          >
            <Rocket size={16} />
          </div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#102E6D' }}>Grow Your Career</h4>
        </div>
        <p style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45', marginBottom: '14px' }}>
          Join discussions, follow companies, get noticed by recruiters.
        </p>
        <Button variant="primary" size="sm" fullWidth style={{ fontSize: '12px', padding: '7px 12px' }}>
          Explore Now
        </Button>
      </div>
    </aside>
  );
}
