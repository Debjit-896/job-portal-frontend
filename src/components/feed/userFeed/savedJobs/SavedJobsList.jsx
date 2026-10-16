import SavedJobCard from './SavedJobCard';

export default function SavedJobsList({
  jobs = [],
  onSaveToggle,
  onApply,
  onMoreOptions,
}) {
  if (jobs.length === 0) {
    return (
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid #E2E8F0',
          padding: '48px 24px',
          textAlign: 'center',
          color: '#64748B',
        }}
      >
        <p style={{ fontSize: '14px', fontWeight: 500, margin: 0 }}>
          No saved jobs found in this category.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {jobs.map((job) => (
        <SavedJobCard
          key={job.id}
          job={job}
          onSaveToggle={onSaveToggle}
          onApply={onApply}
          onMoreOptions={onMoreOptions}
        />
      ))}
    </div>
  );
}
