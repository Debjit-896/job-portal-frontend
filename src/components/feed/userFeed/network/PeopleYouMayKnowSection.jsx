import { MoreHorizontal, Users, UserPlus, Check } from 'lucide-react';

export default function PeopleYouMayKnowSection({
  people = [],
  onConnectToggle,
  onMemberClick,
  onViewAll,
}) {
  return (
    <section id="people-you-may-know-section" className="flex flex-col gap-3.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-bold text-[#102E6D] mb-0.5">
            People You May Know
          </h2>
          <p className="text-[11.5px] text-[#64748B] m-0">
            Based on your profile, skills, and activity.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer inline-flex items-center gap-[3px] hover:underline"
        >
          View All &rarr;
        </button>
      </div>

      {/* 4 People Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
        {people.map((person) => {
          const isConnected = !!person.isConnected;
          return (
            <div
              key={person.id}
              onClick={() => onMemberClick && onMemberClick(person)}
              className="bg-white rounded-[14px] border border-[#E2E8F0] p-4 sm:p-3.5 flex flex-col items-center text-center relative shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              {/* 3 dots menu button top right */}
              <button
                type="button"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2.5 right-2.5 bg-transparent border-0 text-[#94A3B8] hover:text-[#475569] cursor-pointer p-0.5"
              >
                <MoreHorizontal size={16} />
              </button>

              {/* Avatar */}
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-2.5 border-2 border-[#EFF6FF]">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Roles */}
              <h4 className="text-[13.5px] font-bold text-[#102E6D] hover:text-[#1463F3] transition-colors mb-0.5">
                {person.name}
              </h4>
              <p className="text-[11px] text-[#475569] m-0 font-medium">
                {person.role}
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5 mb-0">
                {person.company}
              </p>
              <p className="text-[10px] text-[#94A3B8] mt-1 mb-0">
                &bull; {person.location}
              </p>

              {/* Mutual connections */}
              <div className="flex items-center gap-1 text-[#64748B] text-[10.5px] my-3">
                <Users size={12} className="text-[#94A3B8]" />
                <span>{person.mutual} mutual connections</span>
              </div>

              {/* Connect Button */}
              <button
                type="button"
                onClick={() => onConnectToggle && onConnectToggle(person.id)}
                className={`w-full border-0 rounded-lg py-[7px] text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-colors duration-150 ${
                  isConnected
                    ? 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                    : 'bg-[#1463F3] text-white hover:bg-[#0E52D4] shadow-[0_2px_6px_rgba(20,99,243,0.25)]'
                }`}
              >
                {isConnected ? (
                  <>
                    <Check size={13} />
                    <span>Pending</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={13} />
                    <span>Connect</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
