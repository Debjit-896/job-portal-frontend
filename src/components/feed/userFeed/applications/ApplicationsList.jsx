import ApplicationCard from './ApplicationCard';

export default function ApplicationsList({ applications = [], onViewDetails, onMoreOptions }) {
  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center mb-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h4 className="text-[14.5px] font-bold text-[#1E293B]">No applications found</h4>
        <p className="text-[12.5px] text-[#64748B] mt-1">Try adjusting your filters or search term to see more results.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {applications.map((app) => (
        <ApplicationCard
          key={app.id}
          application={app}
          onViewDetails={onViewDetails}
          onMoreOptions={onMoreOptions}
        />
      ))}
    </div>
  );
}
