import { useState } from 'react';
import { Search, MapPin, MoreHorizontal, ChevronDown } from 'lucide-react';

export default function YourConnectionsSection({
  connections = [],
  onMessage,
  onMoreOptions,
}) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recently connected');

  const tabs = [
    { id: 'all', label: `All (${connections.length})` },
    { id: 'recent', label: 'Recent' },
    { id: 'work', label: 'Work' },
    { id: 'school', label: 'School' },
    { id: 'location', label: 'Location' },
  ];

  const filteredConnections = connections.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="flex flex-col gap-3.5 mt-1.5">
      {/* Header with Title, Search Bar and Sort */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-[15px] font-bold text-[#102E6D] m-0">
          Your Connections
        </h2>

        <div className="flex items-center gap-3">
          {/* Search Connections input */}
          <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-lg px-3 py-1.5 w-[210px]">
            <Search size={14} className="text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search your connections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 outline-none bg-transparent text-[11.5px] text-[#1E293B] w-full"
            />
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] text-[#64748B]">Sort by:</span>
            <div className="relative flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border-0 bg-transparent text-[11.5px] font-semibold text-[#102E6D] pr-4 cursor-pointer outline-none"
              >
                <option value="Recently connected">Recently connected</option>
                <option value="First Name">First Name</option>
                <option value="Last Name">Last Name</option>
              </select>
              <ChevronDown
                size={12}
                className="text-[#64748B] absolute right-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Connection Filter Pills / Tabs */}
      <div className="flex items-center gap-[22px] border-b border-[#E2E8F0]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`bg-transparent border-0 pt-2 pb-2.5 px-0 text-[12.5px] cursor-pointer relative transition-colors duration-150 ${
                isActive ? 'font-semibold text-[#1463F3]' : 'font-medium text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#1463F3] rounded-t-[2px]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Connections List */}
      <div className="flex flex-col gap-2.5">
        {filteredConnections.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl border border-[#E2E8F0] px-[18px] py-3.5 flex items-center justify-between gap-4 shadow-xs hover:shadow-sm transition-shadow duration-150"
          >
            {/* Left: Avatar + Name + Title */}
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 border border-[#E2E8F0]">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h4 className="text-[13px] font-bold text-[#102E6D] m-0 truncate">
                  {person.name}
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 mb-0 truncate">
                  {person.role}
                </p>
              </div>
            </div>

            {/* Middle: Location info */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#64748B] w-[180px] shrink-0">
              <MapPin size={13} className="text-[#94A3B8]" />
              <span className="truncate">{person.location}</span>
            </div>

            {/* Connected time ago */}
            <div className="hidden md:block text-[11px] text-[#94A3B8] w-[140px] shrink-0 text-right">
              {person.connectedTime}
            </div>

            {/* Right: Message button + 3-dots menu */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onMessage && onMessage(person.id)}
                className="bg-white hover:bg-[#EFF6FF] text-[#1463F3] border border-[#1463F3] rounded-lg px-4 py-[5px] text-[11.5px] font-semibold cursor-pointer transition-colors duration-150"
              >
                Message
              </button>

              <button
                type="button"
                onClick={() => onMoreOptions && onMoreOptions(person.id)}
                className="bg-transparent border-0 text-[#94A3B8] hover:text-[#475569] cursor-pointer p-1"
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
