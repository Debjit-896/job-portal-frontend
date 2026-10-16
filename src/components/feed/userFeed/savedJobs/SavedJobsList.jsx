import SavedJobCard from './SavedJobCard';

export default function SavedJobsList({
  jobs = [],
  onSaveToggle,
  onApply,
  onMoreOptions,
}) {
  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-12 text-center text-[#64748B]">
        <p className="text-sm font-medium m-0">
          No saved jobs found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3.5">
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

