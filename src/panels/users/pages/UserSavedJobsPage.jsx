import { useState } from 'react';
import { SavedJobsLayout } from '../../../components/layouts/userLayout/savedJobs';
import {
  SavedJobsHeader,
  SavedJobsList,
} from '../../../components/feed/userFeed/savedJobs';
import {
  SaveJobsFutureCard,
  QuickLinksCard,
  TipsForYouCard,
  WantBetterJobMatchesCard,
} from '../../../components/sidebar/userSidebar/savedJobs';

export default function UserSavedJobsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('Recently Saved');

  // Exact jobs as pictured in the user's screenshot
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Junior Web Developer',
      company: {
        id: 'cloudwind',
        name: 'CloudWind Technologies LLP',
        subtext: 'CloudWind',
        isCloudWind: true,
      },
      location: 'Kolkata, West Bengal',
      type: 'Full-time',
      experience: '2–3 yrs exp',
      skills: ['PHP', 'Laravel', 'React', 'PostgreSQL'],
      isSaved: true,
      hasApplyButton: false,
      savedTime: 'Saved 2 days ago',
      status: 'not-applied',
    },
    {
      id: 2,
      title: 'Software Development Engineer I',
      company: {
        id: 'amazon',
        name: 'Amazon',
        subtext: 'Amazon',
        isAmazon: true,
      },
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      experience: '0–2 yrs exp',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
      isSaved: true,
      hasApplyButton: false,
      savedTime: 'Saved 3 days ago',
      status: 'not-applied',
    },
    {
      id: 3,
      title: 'System Engineer',
      company: {
        id: 'tcs',
        name: 'TCS',
        subtext: 'TCS',
        isTcs: true,
      },
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '0–2 yrs exp',
      skills: ['Java', 'Spring Boot', 'Angular', 'SQL'],
      isSaved: true,
      hasApplyButton: false,
      savedTime: 'Saved 4 days ago',
      status: 'applied',
    },
    {
      id: 4,
      title: 'Associate Software Engineer',
      company: {
        id: 'accenture',
        name: 'Accenture',
        subtext: 'Accenture',
        isAccenture: true,
      },
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '0–1 yrs exp',
      skills: ['Java', '.NET', 'SQL', 'C#'],
      isSaved: true,
      hasApplyButton: false,
      savedTime: 'Saved 5 days ago',
      status: 'applied',
    },
    {
      id: 5,
      title: 'Software Engineer',
      company: {
        id: 'microsoft',
        name: 'Microsoft',
        subtext: 'Microsoft',
        isMicrosoft: true,
      },
      location: 'Redmond, WA (Remote)',
      type: 'Full-time',
      experience: '1–3 yrs exp',
      skills: ['C#', 'Azure', '.NET', 'SQL'],
      isSaved: true,
      hasApplyButton: false,
      savedTime: 'Saved 6 days ago',
      status: 'applied',
    },
    {
      id: 6,
      title: 'Frontend Developer',
      company: {
        id: 'google',
        name: 'Google',
        subtext: 'Google',
        isGoogle: true,
      },
      location: 'Noida, Uttar Pradesh (Remote)',
      type: 'Full-time',
      experience: '1–3 yrs exp',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      isSaved: false,
      hasApplyButton: true, // "Apply Now" button shown in screenshot
      savedTime: 'Saved 1 week ago',
      status: 'not-applied',
    },
  ]);

  const handleSaveToggle = (jobId) => {
    setJobs((prev) =>
      prev.map((j) => (j.id === jobId ? { ...j, isSaved: !j.isSaved } : j))
    );
  };

  const handleApply = (jobId) => {
    console.log('Apply to job:', jobId);
  };

  const handleMoreOptions = (jobId) => {
    console.log('More options for job:', jobId);
  };

  // Filter based on activeTab
  const filteredJobs = jobs.filter((job) => {
    if (activeTab === 'applied') return job.status === 'applied';
    if (activeTab === 'not-applied') return job.status === 'not-applied';
    return true;
  });

  const appliedCount = jobs.filter((j) => j.status === 'applied').length;
  const notAppliedCount = jobs.filter((j) => j.status === 'not-applied').length;

  const rightSidebarContent = (
    <>
      <SaveJobsFutureCard />
      <QuickLinksCard
        appliedCount={appliedCount}
        recommendedCount={12}
        alertsCount={5}
        onItemClick={(linkId) => {
          if (linkId === 'applied-jobs') window.location.href = '/candidate/applications';
        }}
      />
      <TipsForYouCard
        onTipClick={(tipId) => console.log('Tip clicked:', tipId)}
      />
      <WantBetterJobMatchesCard
        onUpdatePreferences={() => console.log('Update preferences clicked')}
      />
    </>
  );

  return (
    <SavedJobsLayout
      activeMenu="saved-jobs"
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Header with title, tabs, and sort dropdown */}
      <SavedJobsHeader
        totalCount={12}
        appliedCount={3}
        notAppliedCount={9}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* 2. List of Saved Job Cards */}
      <SavedJobsList
        jobs={filteredJobs}
        onSaveToggle={handleSaveToggle}
        onApply={handleApply}
        onMoreOptions={handleMoreOptions}
      />
    </SavedJobsLayout>
  );
}
