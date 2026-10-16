import { Bookmark } from 'lucide-react';

export default function SavedJobsHeader({
  totalCount = 12,
  appliedCount = 3,
  notAppliedCount = 9,
  activeTab = 'all',
  onTabChange,
  sortBy = 'Recently Saved',
  onSortChange,
}) {
  const tabs = [
    { id: 'all', label: `All Saved Jobs (${totalCount})` },
    { id: 'applied', label: `Applied (${appliedCount})` },
    { id: 'not-applied', label: `Not Applied (${notAppliedCount})` },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Title & Description */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              backgroundColor: '#1463F3',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(20, 99, 243, 0.25)',
            }}
          >
            <Bookmark size={16} fill="#FFFFFF" />
          </div>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: '#102E6D',
              letterSpacing: '-0.3px',
              margin: 0,
            }}
          >
            Saved Jobs
          </h1>
        </div>
        <p style={{ fontSize: '13px', color: '#64748B', margin: 0, paddingLeft: '37px' }}>
          Jobs you&apos;ve saved for later. Don&apos;t miss out on great opportunities!
        </p>
      </div>

      {/* Tabs Row + Sort By Dropdown */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '0',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {/* Tab Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '10px 0 12px 0',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#1463F3' : '#64748B',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'color 0.15s ease',
                }}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#1463F3',
                      borderRadius: '2px 2px 0 0',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '6px' }}>
          <span style={{ fontSize: '12px', color: '#64748B' }}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '12px',
              fontWeight: 600,
              color: '#102E6D',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="Recently Saved">Recently Saved</option>
            <option value="Oldest Saved">Oldest Saved</option>
            <option value="Deadline Approaching">Deadline Approaching</option>
          </select>
        </div>
      </div>
    </div>
  );
}
