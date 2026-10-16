import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { SettingsLayout } from '../../../components/layouts/userLayout/settings';
import {
  SettingsHeader,
  SettingsTabMenu,
  AccountInfoSection,
  LanguageRegionSection,
  AccountSecuritySection,
  DataAccountManagementSection,
} from '../../../components/feed/userFeed/settings';
import {
  SettingsProfileWidget,
  SettingsQuickSettingsCard,
  SettingsNeedHelpCard,
} from '../../../components/sidebar/userSidebar/settings';

export default function UserSettingsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState('settings');
  const [activeTab, setActiveTab] = useState('account');

  // Account information state
  const [accountInfo, setAccountInfo] = useState({
    fullName: user?.name || 'Debjit Pal',
    email: user?.email || 'debjitpal123@gmail.com',
    phone: user?.phone || '+91 98765 43210',
    passwordMasked: '*********',
  });

  const [language, setLanguage] = useState('English (US)');
  const [timeZone, setTimeZone] = useState('(GMT+05:30) Kolkata');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  // User Profile Data for the Right Widget
  const userProfile = {
    name: user?.name || 'Debjit Pal',
    role: user?.headline || 'Software Developer',
    location: user?.location || 'Kolkata, West Bengal, India',
    avatar:
      user?.avatar ||
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    profileCompletion: user?.profileCompletion || 80,
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    if (menuId === 'home') {
      navigate('/candidate/dashboard');
    } else if (menuId === 'jobs') {
      navigate('/candidate/jobs');
    } else if (menuId === 'companies') {
      navigate('/candidate/companies');
    } else if (menuId === 'network') {
      navigate('/candidate/network');
    } else if (menuId === 'saved-jobs' || menuId === 'saved') {
      navigate('/candidate/saved-jobs');
    } else if (menuId === 'settings') {
      navigate('/candidate/settings');
    }
  };

  const rightSidebarContent = (
    <>
      <SettingsProfileWidget
        userProfile={userProfile}
        onEditProfile={() => console.log('Edit profile')}
      />
      <SettingsQuickSettingsCard
        onEditProfile={() => setActiveTab('profile')}
        onChangePassword={() => console.log('Change password')}
        onNotificationPreferences={() => setActiveTab('notifications')}
        onLanguageRegion={() => setActiveTab('account')}
      />
      <SettingsNeedHelpCard
        onGoToHelpCenter={() => console.log('Help center')}
        onContactSupport={() => console.log('Contact support')}
      />
    </>
  );

  return (
    <SettingsLayout
      activeNav=""
      activeMenu={activeMenu}
      onMenuClick={handleMenuClick}
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Page Title & Subtitle */}
      <SettingsHeader
        title="Settings"
        subtitle="Manage your account, privacy, and preferences"
      />

      {/* 2. Main Body with Inner Tab Menu on Left & Settings Forms on Right */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Inner Settings Tab Menu */}
        <SettingsTabMenu
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content for Active Tab */}
        <div className="flex-1 min-w-0 flex flex-col gap-5 w-full">
          {activeTab === 'account' && (
            <>
              {/* Account Information */}
              <AccountInfoSection
                account={accountInfo}
                onEdit={() => console.log('Edit account details')}
                onChangePassword={() => console.log('Change password')}
              />

              {/* Language & Region */}
              <LanguageRegionSection
                language={language}
                onLanguageChange={setLanguage}
                timeZone={timeZone}
                onTimeZoneChange={setTimeZone}
              />

              {/* Account Security */}
              <AccountSecuritySection
                is2FAEnabled={is2FAEnabled}
                onToggle2FA={() => setIs2FAEnabled((prev) => !prev)}
                onViewLoginActivity={() => console.log('View login activity')}
              />

              {/* Data & Account Management */}
              <DataAccountManagementSection
                onRequestData={() => console.log('Request data copy')}
                onDeactivateAccount={() => console.log('Deactivate account')}
              />
            </>
          )}

          {activeTab !== 'account' && (
            <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-8 text-center text-[#64748B]">
              <h3 className="text-base font-bold text-[#102E6D] capitalize mb-1">
                {activeTab.replace('-', ' ')} Settings
              </h3>
              <p className="text-xs text-[#64748B] m-0">
                Configure your {activeTab.replace('-', ' ')} settings and preferences.
              </p>
            </div>
          )}
        </div>
      </div>
    </SettingsLayout>
  );
}
