import Avatar from '../../../common/userCommon/Avatar';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function MessageSuggestedConnectionsCard({
  suggestions = [
    {
      id: 1,
      name: 'Anik Das',
      role: 'Backend Developer at TCS',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    },
    {
      id: 2,
      name: 'Priya Sen',
      role: 'Software Engineer at Accenture',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
    },
  ],
  onSeeAll,
  onConnect,
}) {
  return (
    <SectionCard className="p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
          Suggested Connections
        </h4>
        <button
          type="button"
          onClick={onSeeAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer hover:underline p-0"
        >
          See All
        </button>
      </div>

      <div className="flex flex-col gap-3.5">
        {suggestions.map((person) => (
          <div key={person.id} className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <Avatar src={person.avatar} name={person.name} size={36} />
              <div className="min-w-0">
                <h5 className="text-xs font-bold text-[#102E6D] m-0 truncate">
                  {person.name}
                </h5>
                <p className="text-[10px] text-[#64748B] mt-0.5 mb-0 truncate">
                  {person.role}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onConnect && onConnect(person.id)}
              className="bg-white hover:bg-blue-50 text-[#1463F3] border border-[#BFDBFE] rounded-md px-3 py-1 text-[11px] font-semibold cursor-pointer shrink-0 transition-colors"
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
