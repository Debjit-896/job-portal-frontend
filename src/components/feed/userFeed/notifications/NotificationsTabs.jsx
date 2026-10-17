export default function NotificationsTabs({
  activeTab = 'all',
  onTabChange,
  counts = {
    all: 7,
    jobs: 3,
    network: 2,
    messages: 1,
    system: 1,
  },
}) {
  const tabs = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'jobs', label: 'Jobs', count: counts.jobs },
    { id: 'network', label: 'Network', count: counts.network },
    { id: 'messages', label: 'Messages', count: counts.messages },
    { id: 'system', label: 'System', count: counts.system },
  ];

  return (
    <div className="flex items-center gap-6 border-b border-[#E2E8F0] pt-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange && onTabChange(tab.id)}
            className={`pb-3 border-b-2 flex items-center gap-2 cursor-pointer border-0 bg-transparent text-[13.5px] transition-all -mb-[1px] ${
              isActive
                ? 'border-[#1463F3] text-[#1463F3] font-semibold'
                : 'border-transparent text-[#64748B] hover:text-[#102E6D] font-medium'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && tab.count !== null && (
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-[#1463F3] text-white'
                    : 'bg-[#F1F5F9] text-[#64748B]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
