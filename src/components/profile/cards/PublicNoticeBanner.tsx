import React from 'react';

export const PublicNoticeBanner: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] p-4 text-center text-[#64748B] text-[11.5px] leading-relaxed">
      This profile is public and visible to recruiters and employers across JobNova AI. You can customize your privacy settings in the account settings panel.
    </div>
  );
};

export default PublicNoticeBanner;

