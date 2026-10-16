import {
  User,
  Shield,
  Bell,
  Sun,
  Link2,
  CreditCard,
  HelpCircle,
} from 'lucide-react';

export default function SettingsTabMenu({
  activeTab = 'account',
  onTabChange,
}) {
  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Sun },
    { id: 'linked-accounts', label: 'Linked Accounts', icon: Link2 },
    { id: 'payments', label: 'Payments & Subscriptions', icon: CreditCard },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <div className="w-[200px] shrink-0 flex flex-col gap-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange && onTabChange(tab.id)}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg border-0 text-left text-[13px] cursor-pointer transition-all ${
              isActive
                ? 'bg-[#EAF3FF] text-[#1463F3] font-semibold'
                : 'bg-transparent text-[#475569] font-medium hover:bg-slate-100 hover:text-[#1E293B]'
            }`}
          >
            <Icon
              size={16}
              strokeWidth={isActive ? 2.2 : 1.8}
              className={isActive ? 'text-[#1463F3]' : 'text-[#64748B]'}
            />
            <span className="truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
