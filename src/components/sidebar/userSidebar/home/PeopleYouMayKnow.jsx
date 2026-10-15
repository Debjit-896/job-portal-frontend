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
    <SectionCard padding="18px 20px">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D' }}>
          People You May Know
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#1463F3',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* People List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {people.map((person) => {
          const isConnected = !!connectedState[person.id];
          return (
            <div
              key={person.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <Avatar src={person.avatar} name={person.name} size={36} />
                <div style={{ minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#102E6D',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {person.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#64748B',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {person.role}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleConnect(person.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 10px',
                  borderRadius: '16px',
                  border: isConnected ? '1px solid #10B981' : '1px solid #D5E3F8',
                  backgroundColor: isConnected ? '#ECFDF5' : '#FFFFFF',
                  color: isConnected ? '#059669' : '#1463F3',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.15s',
                }}
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
