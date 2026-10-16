import { useState } from 'react';
import { UserPlus, Check, ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Avatar from '../../../common/userCommon/Avatar';

export default function PeopleYouMayKnow({
  people = [
    {
      id: 1,
      name: 'Ankit Saha',
      role: 'Frontend Developer at BrightTech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 2,
      name: 'Sneha Roy',
      role: 'Software Engineer at CloudWind',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 3,
      name: 'Souvik Das',
      role: 'Full Stack Developer at NexGen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
  ],
  onViewAll,
  onConnect,
}) {
  const [connectedState, setConnectedState] = useState({});

  const handleConnect = (id) => {
    setConnectedState((prev) => ({ ...prev, [id]: !prev[id] }));
    if (onConnect) onConnect(id);
  };

  return (
    <SectionCard className="p-[18px_20px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="text-[14.5px] font-bold text-[#102E6D]">
          People You May Know
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer inline-flex items-center gap-0.5 hover:underline"
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* People List */}
      <div className="flex flex-col gap-3.5">
        {people.map((person) => {
          const isConnected = !!connectedState[person.id];
          return (
            <div
              key={person.id}
              className="flex items-center justify-between gap-2.5"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar src={person.avatar} name={person.name} size={36} />
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold text-[#102E6D] truncate">
                    {person.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] truncate">
                    {person.role}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleConnect(person.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-2xl text-[11.5px] font-semibold cursor-pointer shrink-0 transition-all ${
                  isConnected
                    ? 'border border-[#10B981] bg-[#ECFDF5] text-[#059669]'
                    : 'border border-[#D5E3F8] bg-white text-[#1463F3] hover:bg-[#F0F6FF]'
                }`}
              >
                {isConnected ? <Check size={12} /> : <UserPlus size={12} />}
                <span>{isConnected ? 'Pending' : 'Connect'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

