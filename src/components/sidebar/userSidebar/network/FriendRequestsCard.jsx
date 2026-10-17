import SectionCard from '../../../common/userCommon/SectionCard';

export default function FriendRequestsCard({
  requests = [],
  onConfirm,
  onDelete,
  onViewAll,
}) {
  return (
    <SectionCard className="p-4">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-1.5">
          <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
            Friend Requests
          </h4>
          <span className="bg-[#1463F3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {requests.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-[11.5px] font-semibold cursor-pointer hover:underline"
        >
          View All &rarr;
        </button>
      </div>

      {/* Requests list */}
      <div className="flex flex-col gap-3.5">
        {requests.map((req) => (
          <div key={req.id} className="flex flex-col gap-2">
            <div
              onClick={() => onMemberClick ? onMemberClick(req) : (window.location.href = `/candidate/network/${req.name.toLowerCase().replace(/\s+/g, '-')}`)}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0 border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                <img
                  src={req.avatar}
                  alt={req.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h5 className="text-[12.5px] font-bold text-[#102E6D] group-hover:text-[#1463F3] transition-colors m-0 leading-tight">
                  {req.name}
                </h5>
                <p className="text-[10.5px] text-[#64748B] mt-0.5 mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                  {req.role}
                </p>
              </div>
            </div>

            {/* Confirm & Delete buttons */}
            <div className="flex items-center gap-2 pl-12">
              <button
                type="button"
                onClick={() => onConfirm && onConfirm(req.id)}
                className="bg-[#1463F3] hover:bg-[#0E52D4] text-white border-0 rounded-md px-4 py-[5px] text-[11px] font-semibold cursor-pointer transition-colors duration-150"
              >
                Confirm
              </button>

              <button
                type="button"
                onClick={() => onDelete && onDelete(req.id)}
                className="bg-white hover:bg-slate-50 text-[#64748B] border border-[#E2E8F0] rounded-md px-3.5 py-[5px] text-[11px] font-medium cursor-pointer transition-colors duration-150"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
