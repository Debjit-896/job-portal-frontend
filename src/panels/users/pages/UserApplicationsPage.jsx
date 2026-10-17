import { useState, useMemo } from 'react';
import { ApplicationsLayout } from '../../../components/layouts/userLayout/applications';
import {
  ApplicationsHeader,
  ApplicationsList,
} from '../../../components/feed/userFeed/applications';
import {
  ApplicationSummaryCard,
  ApplicationStatusBreakdownCard,
  ApplicationQuickFiltersCard,
} from '../../../components/sidebar/userSidebar/applications';

export default function UserApplicationsPage() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'applied' | 'interview' | 'offered' | 'rejected'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState(['Full-time']);
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedExperience, setSelectedExperience] = useState('All Levels');

  // Exact dataset matching screenshot
  const initialApplications = [
    {
      id: 'app-amazon',
      company: {
        id: 'amazon',
        name: 'Amazon',
        isAmazon: true,
      },
      role: 'Frontend Developer',
      location: 'Bengaluru, Karnataka',
      appliedDate: '12 Sep 2025',
      status: 'Interview Scheduled',
      statusType: 'interview',
      eventInfo: 'Technical Interview on 18 Sep 2025',
      jobType: 'Full-time',
      experienceLevel: 'Mid Level (2-5 yrs)',
    },
    {
      id: 'app-google',
      company: {
        id: 'google',
        name: 'Google',
        isGoogle: true,
      },
      role: 'Software Engineer',
      location: 'Kolkata, West Bengal',
      appliedDate: '10 Sep 2025',
      status: 'Applied',
      statusType: 'applied',
      jobType: 'Full-time',
      experienceLevel: 'Entry Level (0-2 yrs)',
    },
    {
      id: 'app-tcs',
      company: {
        id: 'tcs',
        name: 'TCS',
        isTcs: true,
      },
      role: 'System Engineer',
      location: 'Hyderabad, Telangana',
      appliedDate: '08 Sep 2025',
      status: 'Applied',
      statusType: 'applied',
      jobType: 'Full-time',
      experienceLevel: 'Entry Level (0-2 yrs)',
    },
    {
      id: 'app-microsoft',
      company: {
        id: 'microsoft',
        name: 'Microsoft',
        isMicrosoft: true,
      },
      role: 'Software Engineer',
      location: 'Redmond, WA',
      appliedDate: '05 Sep 2025',
      status: 'In Review',
      statusType: 'in-review',
      jobType: 'Full-time',
      experienceLevel: 'Mid Level (2-5 yrs)',
    },
    {
      id: 'app-accenture',
      company: {
        id: 'accenture',
        name: 'Accenture',
        isAccenture: true,
      },
      role: 'Associate Software Engineer',
      location: 'Bangalore, Karnataka',
      appliedDate: '02 Sep 2025',
      status: 'Applied',
      statusType: 'applied',
      jobType: 'Full-time',
      experienceLevel: 'Entry Level (0-2 yrs)',
    },
    {
      id: 'app-adobe',
      company: {
        id: 'adobe',
        name: 'Adobe',
        isAdobe: true,
      },
      role: 'Frontend Developer',
      location: 'Noida, Uttar Pradesh',
      appliedDate: '28 Aug 2025',
      status: 'Rejected',
      statusType: 'rejected',
      jobType: 'Full-time',
      experienceLevel: 'Mid Level (2-5 yrs)',
    },
    {
      id: 'app-netflix',
      company: {
        id: 'netflix',
        name: 'Netflix',
        isNetflix: true,
      },
      role: 'Backend Developer',
      location: 'Los Angeles, CA',
      appliedDate: '25 Aug 2025',
      status: 'Offer Received',
      statusType: 'offered',
      jobType: 'Full-time',
      experienceLevel: 'Senior Level (5+ yrs)',
    },
    {
      id: 'app-spotify',
      company: {
        id: 'spotify',
        name: 'Spotify',
        isSpotify: true,
      },
      role: 'Full Stack Developer',
      location: 'Stockholm, Sweden',
      appliedDate: '20 Aug 2025',
      status: 'Applied',
      statusType: 'applied',
      jobType: 'Full-time',
      experienceLevel: 'Mid Level (2-5 yrs)',
    },
  ];

  const handleToggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleClearFilters = () => {
    setSelectedJobTypes(['Full-time']);
    setSelectedLocation('All Locations');
    setSelectedExperience('All Levels');
    setSearchQuery('');
    setActiveTab('all');
  };

  // Filter applications
  const filteredApplications = useMemo(() => {
    return initialApplications.filter((app) => {
      // Tab filter
      if (activeTab === 'applied' && app.statusType !== 'applied') return false;
      if (activeTab === 'interview' && app.statusType !== 'interview') return false;
      if (activeTab === 'offered' && app.statusType !== 'offered') return false;
      if (activeTab === 'rejected' && app.statusType !== 'rejected') return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = app.company.name.toLowerCase().includes(query);
        const matchesRole = app.role.toLowerCase().includes(query);
        const matchesLocation = app.location.toLowerCase().includes(query);
        if (!matchesName && !matchesRole && !matchesLocation) return false;
      }

      // Job Type filter
      if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(app.jobType)) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'All Locations' && !app.location.includes(selectedLocation)) {
        return false;
      }

      // Experience filter
      if (selectedExperience !== 'All Levels' && app.experienceLevel !== selectedExperience) {
        return false;
      }

      return true;
    });
  }, [activeTab, searchQuery, selectedJobTypes, selectedLocation, selectedExperience]);

  const summaryData = {
    total: 12,
    interviews: 2,
    offer: 1,
    rejected: 1,
  };

  const statusBreakdownData = [
    { id: 'applied', label: 'Applied', count: 8, color: '#3B82F6' },
    { id: 'in-review', label: 'In Review', count: 1, color: '#A855F7' },
    { id: 'interview', label: 'Interview Scheduled', count: 2, color: '#10B981', isIcon: true },
    { id: 'offered', label: 'Offer Received', count: 1, color: '#22C55E' },
    { id: 'rejected', label: 'Rejected', count: 1, color: '#EF4444' },
  ];

  const rightSidebarContent = (
    <>
      <ApplicationSummaryCard summary={summaryData} />
      <ApplicationStatusBreakdownCard
        statuses={statusBreakdownData}
        activeStatus={activeTab}
        onStatusClick={(statusId) => setActiveTab(statusId)}
      />
      <ApplicationQuickFiltersCard
        selectedJobTypes={selectedJobTypes}
        onToggleJobType={handleToggleJobType}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        selectedExperience={selectedExperience}
        onExperienceChange={setSelectedExperience}
        onClearFilters={handleClearFilters}
      />
    </>
  );

  return (
    <ApplicationsLayout
      activeMenu="my-applications"
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Page Header with Title, Tabs, and Search */}
      <ApplicationsHeader
        counts={{
          all: 12,
          applied: 8,
          interview: 2,
          offered: 1,
          rejected: 1,
        }}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. List of Application Cards */}
      <ApplicationsList
        applications={filteredApplications}
        onViewDetails={(app) => console.log('View details for:', app)}
        onMoreOptions={(app) => console.log('More options for:', app)}
      />
    </ApplicationsLayout>
  );
}
