import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CompanyInfoLayout } from '../../../components/layouts/userLayout/companyInfo';
import {
  CompanyBannerHeader,
  CompanyAboutSection,
  CompanyPhotosSection,
  CompanyRecentPostsSection,
} from '../../../components/feed/userFeed/companyInfo';
import {
  CompanyDetailsCard,
  EmployeesAtCompanyCard,
  SimilarCompaniesCard,
  InterestedInWorkingCard,
} from '../../../components/sidebar/userSidebar/companyInfo';
import { getCompanyById } from '../../../constants/companiesData';

export default function UserCompanyInfoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Load company information dynamically based on URL parameter (or default to cloudwind)
  const company = useMemo(() => {
    return getCompanyById(id || 'cloudwind');
  }, [id]);

  const handleCompanyNavigation = (targetCompanyId) => {
    navigate(`/candidate/companies/${targetCompanyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rightSidebarContent = (
    <>
      <CompanyDetailsCard company={company} />
      <EmployeesAtCompanyCard
        company={company}
        onViewAll={() => console.log('View all employees')}
      />
      <SimilarCompaniesCard
        companies={company.similarCompanies}
        onCompanyClick={handleCompanyNavigation}
      />
      <InterestedInWorkingCard company={company} />
    </>
  );

  return (
    <CompanyInfoLayout
      activeNav="companies"
      activeMenu="companies"
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Top Cover, Profile, Action Buttons & Tabs Header */}
      <CompanyBannerHeader
        company={company}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onFollowToggle={(isFollowing) => console.log('Follow toggled:', isFollowing)}
        onMessage={() => navigate('/candidate/messages')}
      />

      {/* Tab Specific Content */}
      {activeTab === 'overview' && (
        <div className="flex flex-col gap-4">
          {/* 2. About Us Section with metrics & video preview */}
          <CompanyAboutSection
            company={company}
            onPlayVideo={() => console.log('Play company video')}
          />

          {/* 3. Company Photos Gallery with right scroll button */}
          <CompanyPhotosSection
            photos={company.photos}
            onViewAll={() => console.log('View all photos')}
          />

          {/* 4. Recent Posts Section */}
          <CompanyRecentPostsSection
            company={company}
            post={company.recentPost}
            onViewAll={() => console.log('View all posts')}
          />
        </div>
      )}

      {activeTab === 'jobs' && (
        <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-8 text-center">
          <h4 className="text-[15px] font-bold text-[#0F172A] mb-2">
            Open Positions at {company.name}
          </h4>
          <p className="text-[12.5px] text-[#64748B] mb-4">
            Explore current job opportunities and apply directly.
          </p>
          <button
            type="button"
            onClick={() => navigate('/candidate/jobs')}
            className="bg-[#1463F3] text-white py-2 px-5 rounded-lg text-[13px] font-semibold"
          >
            Browse All Jobs
          </button>
        </div>
      )}

      {(activeTab === 'life' || activeTab === 'people' || activeTab === 'insights') && (
        <div className="bg-white rounded-[14px] border border-[#E2E8F0] p-8 text-center">
          <h4 className="text-[15px] font-bold text-[#0F172A] mb-1.5 capitalize">
            {activeTab} at {company.name}
          </h4>
          <p className="text-[12.5px] text-[#64748B]">
            More insights and stories coming soon from {company.name}.
          </p>
        </div>
      )}
    </CompanyInfoLayout>
  );
}
