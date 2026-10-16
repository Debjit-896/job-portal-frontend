import { useState } from 'react';
import { CompaniesLayout } from '../../../components/layouts/userLayout/companies';
import {
  CompaniesHeroBanner,
  TopCompaniesSection,
  AllCompaniesSection,
} from '../../../components/feed/userFeed/companies';
import {
  FollowedCompaniesCard,
  TrendingCompaniesCard,
  BuildNetworkCard,
} from '../../../components/sidebar/userSidebar/companies';

export default function UserCompaniesPage() {
  const [activeMenu, setActiveMenu] = useState('companies');
  const [industryFilter, setIndustryFilter] = useState('All Industries');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [sortFilter, setSortFilter] = useState('Most Followed');

  // Top 8 Companies matching screenshot exactly
  const [topCompanies, setTopCompanies] = useState([
    {
      id: 'google',
      name: 'Google',
      isVerified: true,
      isGoogle: true,
      industry: 'Internet Services & Software',
      location: 'Mountain View, CA',
      employees: '10K+ employees',
      description:
        'Build products that help billions of people find information, solve problems and make life better.',
      followers: '245K followers',
      isFollowed: false,
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      isVerified: true,
      isMicrosoft: true,
      industry: 'Software & Cloud',
      location: 'Redmond, WA',
      employees: '10K+ employees',
      description:
        'Empowering every person and every organization on the planet to achieve more.',
      followers: '198K followers',
      isFollowed: false,
    },
    {
      id: 'amazon',
      name: 'Amazon',
      isVerified: true,
      isAmazon: true,
      industry: 'E-commerce & Cloud',
      location: 'Seattle, WA',
      employees: '10K+ employees',
      description:
        'We work to be Earth\'s most customer-centric company, where customers can find and discover anything.',
      followers: '176K followers',
      isFollowed: true, // "Following" in screenshot
    },
    {
      id: 'tcs',
      name: 'TCS',
      isVerified: false,
      isTcs: true,
      industry: 'IT Services & Consulting',
      location: 'Mumbai, India',
      employees: '10K+ employees',
      description:
        'Building on belief, TCS helps global businesses transform with technology.',
      followers: '142K followers',
      isFollowed: false,
    },
    {
      id: 'accenture',
      name: 'Accenture',
      isVerified: true,
      isAccenture: true,
      industry: 'Consulting & Professional Services',
      location: 'Dublin, Ireland',
      employees: '10K+ employees',
      description:
        'We bring together people, technology and innovation to create value and change the world.',
      followers: '120K followers',
      isFollowed: false,
    },
    {
      id: 'meta',
      name: 'Meta',
      isVerified: true,
      isMeta: true,
      industry: 'Social Media & Technology',
      location: 'Menlo Park, CA',
      employees: '10K+ employees',
      description:
        'Build the next evolution of social technology and the metaverse.',
      followers: '110K followers',
      isFollowed: false,
    },
    {
      id: 'apple',
      name: 'Apple',
      isVerified: true,
      isApple: true,
      industry: 'Consumer Electronics & Software',
      location: 'Cupertino, CA',
      employees: '10K+ employees',
      description:
        'We create the most advanced technology, for everyone.',
      followers: '98K followers',
      isFollowed: false,
    },
    {
      id: 'adobe',
      name: 'Adobe',
      isVerified: true,
      isAdobe: true,
      industry: 'Software & Creative Tools',
      location: 'San Jose, CA',
      employees: '10K+ employees',
      description:
        'Creativity changes everything. We give everyone the power to create, collaborate and bring ideas to life.',
      followers: '85K followers',
      isFollowed: false,
    },
  ]);

  // All Companies grid matching bottom section of screenshot
  const [allCompanies, setAllCompanies] = useState([
    {
      id: 'netflix',
      name: 'Netflix',
      isNetflix: true,
      industry: 'Entertainment & Streaming',
      location: 'Los Angeles, CA',
      employees: '5K+ employees',
      followers: '76K followers',
      isFollowed: false,
    },
    {
      id: 'spotify',
      name: 'Spotify',
      isSpotify: true,
      industry: 'Music & Audio',
      location: 'Stockholm, Sweden',
      employees: '5K+ employees',
      followers: '68K followers',
      isFollowed: false,
    },
    {
      id: 'infosys',
      name: 'Infosys',
      isInfosys: true,
      industry: 'IT Services & Consulting',
      location: 'Bengaluru, India',
      employees: '10K+ employees',
      followers: '62K followers',
      isFollowed: false,
    },
    {
      id: 'wipro',
      name: 'Wipro',
      isWipro: true,
      industry: 'IT Services & Consulting',
      location: 'Bengaluru, India',
      employees: '10K+ employees',
      followers: '56K followers',
      isFollowed: false,
    },
    {
      id: 'flipkart',
      name: 'Flipkart',
      isFlipkart: true,
      industry: 'E-commerce & Retail',
      location: 'Bengaluru, India',
      employees: '10K+ employees',
      followers: '52K followers',
      isFollowed: false,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      isLinkedIn: true,
      industry: 'Social Media & Networking',
      location: 'Sunnyvale, CA',
      employees: '5K+ employees',
      followers: '49K followers',
      isFollowed: false,
    },
  ]);

  // Followed Companies in right sidebar
  const [followedCompanies, setFollowedCompanies] = useState([
    { id: 'google', name: 'Google', isGoogle: true, followers: '245K followers' },
    { id: 'microsoft', name: 'Microsoft', isMicrosoft: true, followers: '198K followers' },
    { id: 'tcs', name: 'TCS', isTcs: true, followers: '142K followers' },
    { id: 'accenture', name: 'Accenture', isAccenture: true, followers: '120K followers' },
    { id: 'amazon', name: 'Amazon', isAmazon: true, followers: '176K followers' },
  ]);

  // Trending Companies in right sidebar
  const [trendingCompanies, setTrendingCompanies] = useState([
    { id: 'openai', name: 'OpenAI', isOpenAI: true, followers: '92K followers', isFollowed: false },
    { id: 'netflix', name: 'Netflix', isNetflix: true, followers: '76K followers', isFollowed: false },
    { id: 'meta', name: 'Meta', isMeta: true, followers: '110K followers', isFollowed: false },
    { id: 'adobe', name: 'Adobe', isAdobe: true, followers: '85K followers', isFollowed: false },
    { id: 'spotify', name: 'Spotify', isSpotify: true, followers: '68K followers', isFollowed: false },
  ]);

  // Handle follow toggling
  const handleTopCompanyFollowToggle = (companyId) => {
    setTopCompanies((prev) =>
      prev.map((c) => (c.id === companyId ? { ...c, isFollowed: !c.isFollowed } : c))
    );
  };

  const handleAllCompanyFollowToggle = (companyId) => {
    setAllCompanies((prev) =>
      prev.map((c) => (c.id === companyId ? { ...c, isFollowed: !c.isFollowed } : c))
    );
  };

  const handleTrendingCompanyFollowToggle = (companyId) => {
    setTrendingCompanies((prev) =>
      prev.map((c) => (c.id === companyId ? { ...c, isFollowed: !c.isFollowed } : c))
    );
  };

  const handleUnfollowFromSidebar = (companyId) => {
    setFollowedCompanies((prev) => prev.filter((c) => c.id !== companyId));
  };

  const rightSidebarContent = (
    <>
      <FollowedCompaniesCard
        companies={followedCompanies}
        onUnfollow={handleUnfollowFromSidebar}
        onViewAll={() => console.log('View all followed companies')}
      />
      <TrendingCompaniesCard
        companies={trendingCompanies}
        onFollowToggle={handleTrendingCompanyFollowToggle}
        onViewAll={() => console.log('View all trending companies')}
      />
      <BuildNetworkCard
        onExploreNetwork={() => console.log('Explore professional network')}
      />
    </>
  );

  return (
    <CompaniesLayout
      activeNav="companies"
      activeMenu={activeMenu}
      onMenuClick={setActiveMenu}
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Discover Great Companies Hero Banner */}
      <CompaniesHeroBanner
        onSearch={(searchData) => console.log('Hero Search:', searchData)}
        onTagClick={(tag) => console.log('Tag selected:', tag)}
      />

      {/* 2. Top Companies 4x2 Grid */}
      <TopCompaniesSection
        companies={topCompanies}
        onFollowToggle={handleTopCompanyFollowToggle}
        onViewAll={() => console.log('View all top companies')}
      />

      {/* 3. All Companies Grid with Filter Selectors */}
      <AllCompaniesSection
        companies={allCompanies}
        selectedIndustry={industryFilter}
        onIndustryChange={setIndustryFilter}
        selectedLocation={locationFilter}
        onLocationChange={setLocationFilter}
        selectedSort={sortFilter}
        onSortChange={setSortFilter}
        onFollowToggle={handleAllCompanyFollowToggle}
      />
    </CompaniesLayout>
  );
}
