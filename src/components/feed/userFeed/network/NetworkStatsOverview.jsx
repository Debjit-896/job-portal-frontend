import { Users, UserPlus, Users2, UserCheck, ChevronRight } from 'lucide-react';

export default function NetworkStatsOverview({
  activeTab = 'all',
  onTabChange,
  stats = {
    connections: 128,
    invitations: 42,
    mayKnow: 36,
    suggestions: 5,
  },
  onStatCardClick,
}) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'connections', label: 'Connections' },
    { id: 'following', label: 'Following' },
    { id: 'may-know', label: 'People You May Know' },
  ];

  const cards = [
    {
      id: 'connections',
      count: stats.connections,
      label: 'Total Connections',
      icon: Users,
    },
    {
      id: 'invitations',
      count: stats.invitations,
      label: 'Pending Invitations',
      icon: UserPlus,
    },
    {
      id: 'may-know',
      count: stats.mayKnow,
      label: 'People You May Know',
      icon: Users2,
    },
    {
      id: 'suggestions',
      count: stats.suggestions,
      label: 'New Suggestions',
      icon: UserCheck,
    },
  ];

  return (
    <div className="flex flex-col gap-[18px]">
      {/* 4 Tabs Row */}
      <div className="flex items-center gap-7 border-b border-[#E2E8F0]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange && onTabChange(tab.id)}
              className={`bg-transparent border-0 pt-2 pb-3 px-0 text-[13.5px] cursor-pointer relative transition-colors duration-150 ${
                isActive ? 'font-semibold text-[#1463F3]' : 'font-medium text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#1463F3] rounded-t-[2px]" />
              )}
            </button>
          );
        })}
      </div>

      {/* 4 Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onStatCardClick && onStatCardClick(card.id)}
              className="bg-white rounded-xl border border-[#E2E8F0] px-[18px] py-4 flex items-center justify-between cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-[1.5px] transition-all duration-150"
            >
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-full bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#102E6D] m-0 leading-tight">
                    {card.count}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 mb-0 whitespace-nowrap">
                    {card.label}
                  </p>
                </div>
              </div>

              <ChevronRight size={15} className="text-[#94A3B8]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
