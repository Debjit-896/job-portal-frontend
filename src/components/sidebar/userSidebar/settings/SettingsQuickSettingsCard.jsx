import { User, KeyRound, Bell, Globe, ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function SettingsQuickSettingsCard({
  onEditProfile,
  onChangePassword,
  onNotificationPreferences,
  onLanguageRegion,
}) {
  const settingsLinks = [
    {
      id: 'profile',
      icon: User,
      title: 'Edit Profile',
      subtitle: 'Update your personal info',
      onClick: onEditProfile,
    },
    {
      id: 'password',
      icon: KeyRound,
      title: 'Change Password',
      subtitle: 'Update your password',
      onClick: onChangePassword,
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Notification Preferences',
      subtitle: 'Choose what you want to be notified about',
      onClick: onNotificationPreferences,
    },
    {
      id: 'language',
      icon: Globe,
      title: 'Language & Region',
      subtitle: 'Set your language and time zone',
      onClick: onLanguageRegion,
    },
  ];

  return (
    <SectionCard className="p-5 flex flex-col gap-3">
      <h4 className="text-[14px] font-bold text-[#102E6D] m-0">
        Quick Settings
      </h4>

      <div className="flex flex-col">
        {settingsLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={item.onClick}
              className={`flex items-center justify-between py-3 px-1 text-left bg-transparent border-0 cursor-pointer rounded-lg hover:bg-slate-50 transition-colors ${
                index !== settingsLinks.length - 1 ? 'border-b border-[#F1F5F9]' : ''
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[12.5px] font-semibold text-[#1E293B] m-0 truncate">
                    {item.title}
                  </h5>
                  <p className="text-[10.5px] text-[#64748B] mt-0.5 mb-0 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <ChevronRight size={15} className="text-[#94A3B8] shrink-0" />
            </button>
          );
        })}
      </div>
    </SectionCard>
  );
}
