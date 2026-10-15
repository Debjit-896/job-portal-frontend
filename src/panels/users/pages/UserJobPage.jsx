import { useState } from 'react';
import { JobLayout } from '../../../components/layouts/userLayout/job';
import {
  JobHeroBanner,
  JobList,
  JobPagination,
} from '../../../components/feed/userFeed/job';
import {
  GetNoticedCard,
  FeaturedCompanies,
  TopSkillsInDemand,
  JobAlertsCard,
} from '../../../components/sidebar/userSidebar/job';

export default function UserJobPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [currentPage, setCurrentPage] = useState(1);

  // Exact jobs as pictured in the screenshot
  const jobsData = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'ApexSoft Technologies',
      iconBg: '#1E293B',
      iconText: 'A',
      location: 'Kolkata, West Bengal',
      workModel: 'Remote',
      type: 'Full-time',
      experience: '2-4 yrs exp',
      salary: '₹6L – ₹12L / year',
      postedTime: 'Posted 2 days ago',
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
      isSaved: false,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'CloudWind Technologies',
      isGoogle: true,
      location: 'Bangalore, Karnataka',
      workModel: 'Remote',
      type: 'Full-time',
      experience: '2-5 yrs exp',
      salary: '₹8L – ₹15L / year',
      postedTime: 'Posted 1 day ago',
      skills: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      isSaved: false,
    },
    {
      id: 3,
      title: 'Backend Developer (Java)',
      company: 'TechSphere Inc.',
      iconBg: '#1D4ED8',
      iconText: 'T',
      location: 'Hyderabad, Telangana',
      workModel: 'On-site',
      type: 'Full-time',
      experience: '3-6 yrs exp',
      salary: '₹10L – ₹18L / year',
      postedTime: 'Posted 3 days ago',
      skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL'],
      isSaved: false,
    },
    {
      id: 4,
      title: 'Software Engineer (React + Node.js)',
      company: 'GreenByte Labs',
      isLeafLogo: true,
      location: 'Remote',
      type: 'Full-time',
      experience: '1-3 yrs exp',
      salary: '₹7L – ₹12L / year',
      postedTime: 'Posted 4 days ago',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      isSaved: false,
    },
    {
      id: 5,
      title: 'Java Developer (Spring Boot)',
      company: 'NextGen Systems',
      iconBg: '#4F46E5',
      iconText: 'M',
      location: 'Pune, Maharashtra',
      workModel: 'On-site',
      type: 'Full-time',
      experience: '2-5 yrs exp',
      salary: '₹8L – ₹14L / year',
      postedTime: 'Posted 5 days ago',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
      isSaved: false,
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      company: 'Skyline Digital',
      iconBg: '#0F172A',
      iconText: 'S',
      location: 'Kolkata, West Bengal',
      workModel: 'Remote',
      type: 'Full-time',
      experience: '1-3 yrs exp',
      salary: '₹5L – ₹10L / year',
      postedTime: 'Posted 6 days ago',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Design Systems'],
      isSaved: false,
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      company: 'MetaWorks',
      iconBg: '#EA580C',
      iconText: 'm',
      location: 'Bangalore, Karnataka',
      workModel: 'On-site',
      type: 'Full-time',
      experience: '3-6 yrs exp',
      salary: '₹12L – ₹20L / year',
      postedTime: 'Posted 1 week ago',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Linux'],
      isSaved: false,
    },
    {
      id: 8,
      title: 'Data Analyst',
      company: 'Insight Analytics',
      iconBg: '#0284C7',
      iconText: 'J',
      location: 'Remote',
      type: 'Full-time',
      experience: '0-2 yrs exp',
      salary: '₹4L – ₹8L / year',
      postedTime: 'Posted 1 week ago',
      skills: ['SQL', 'Python', 'Excel', 'Tableau'],
      isSaved: false,
    },
  ];

  const handleHeroSearch = (filters) => {
    console.log('Search filters:', filters);
  };

  const handleFilterSidebarChange = (filters) => {
    console.log('Sidebar filters:', filters);
  };

  const rightSidebarContent = (
    <>
      <GetNoticedCard />
      <FeaturedCompanies />
      <TopSkillsInDemand />
      <JobAlertsCard />
    </>
  );

  return (
    <JobLayout
      activeNav="jobs"
      onFilterChange={handleFilterSidebarChange}
      rightSidebar={rightSidebarContent}
    >
      {/* Center 1: Find Your Next Job Hero Search Banner */}
      <JobHeroBanner onSearch={handleHeroSearch} />

      {/* Center 2: Filter Tabs, Sort, and Job Cards */}
      <JobList
        jobs={jobsData}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Center 3: Pagination Bar */}
      <JobPagination
        currentPage={currentPage}
        totalPages={123}
        onPageChange={setCurrentPage}
      />
    </JobLayout>
  );
}
