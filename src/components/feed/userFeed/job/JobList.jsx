import { ChevronDown } from 'lucide-react';
import JobFeedCard from './JobFeedCard';

export default function JobList({
  jobs = [],
  activeTab = 'all',
  onTabChange,
  sortBy = 'Most Relevant',
  onSortChange,
  counts = { all: '4,892', recommended: '1,248', saved: '86' },
}) {
  const tabs = [
    { id: 'all', label: 'All Jobs', count: counts.all },
    { id: 'recommended', label: 'Recommended', count: counts.recommended },
    { id: 'saved', label: 'Saved', count: counts.saved },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Filter Tabs & Sort Dropdown bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '8px',
        }}
      >
        {/* Tabs: All Jobs, Recommended, Saved */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 0',
                  position: 'relative',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#1463F3' : '#64748B',
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    backgroundColor: isActive ? '#EAF3FF' : '#F1F5F9',
                    color: isActive ? '#1463F3' : '#64748B',
                    padding: '2px 7px',
                    borderRadius: '10px',
                  }}
                >
                  {tab.count}
                </span>

                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-9px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#1463F3',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sort by Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#64748B' }}>
          <span>Sort by</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontWeight: 600,
              color: '#102E6D',
            }}
          >
            <span>{sortBy}</span>
            <ChevronDown size={14} color="#64748B" />
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {jobs.map((job) => (
          <JobFeedCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
