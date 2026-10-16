import SectionCard from '../../../common/userCommon/SectionCard';

export default function PeopleYouMayKnowSidebarCard({
  people = [],
  onConnect,
  onViewAll,
}) {
  return (
    <SectionCard className="p-4">
      <div className="flex items-center justify-between mb-3.5">
        <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
          People You May Know
        </h4>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-[11.5px] font-semibold cursor-pointer hover:underline"
        >
          View All &rarr;
        </button>
      </div>

      <div className="flex flex-col gap-3.5">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex items-center justify-between gap-2.5"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#E2E8F0]">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h5 className="text-xs font-bold text-[#102E6D] m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                  {person.name}
                </h5>
                <p className="text-[10.5px] text-[#64748B] mt-px mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                  {person.role}
                </p>
                <p className="text-[9.5px] text-[#94A3B8] mt-px mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                  &bull; {person.location}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onConnect && onConnect(person.id)}
              className="bg-white hover:bg-[#EFF6FF] text-[#1463F3] border border-[#1463F3] rounded-md px-3 py-1 text-[11px] font-semibold cursor-pointer shrink-0 transition-colors duration-150"
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
