import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NetworkLayout } from '../../../components/layouts/userLayout/network';
import {
  NetworkHeroBanner,
  NetworkStatsOverview,
  PeopleYouMayKnowSection,
  YourConnectionsSection,
} from '../../../components/feed/userFeed/network';
import {
  FriendRequestsCard,
  PeopleYouMayKnowSidebarCard,
  NetworkGrowthCard,
} from '../../../components/sidebar/userSidebar/network';

export default function UserNetworkPage() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('network');
  const [activeStatsTab, setActiveStatsTab] = useState('all');

  // People You May Know main cards (4 users matching screenshot)
  const [peopleMayKnow, setPeopleMayKnow] = useState([
    {
      id: 1,
      name: 'Rohit Sharma',
      role: 'Frontend Developer',
      company: 'TechNova',
      location: 'Kolkata, West Bengal',
      mutual: 12,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      isConnected: false,
    },
    {
      id: 2,
      name: 'Sneha Roy',
      role: 'Full Stack Developer',
      company: 'CloudWind Technologies',
      location: 'Bangalore, Karnataka',
      mutual: 8,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      isConnected: false,
    },
    {
      id: 3,
      name: 'Ankit Das',
      role: 'Backend Developer',
      company: 'TCS',
      location: 'Kolkata, West Bengal',
      mutual: 6,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      isConnected: false,
    },
    {
      id: 4,
      name: 'Priya Sen',
      role: 'Software Engineer',
      company: 'Accenture',
      location: 'Hyderabad, Telangana',
      mutual: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isConnected: false,
    },
  ]);

  // Your Connections (4 connections matching screenshot)
  const [connections] = useState([
    {
      id: 101,
      name: 'Sourav Ghosh',
      role: 'Software Engineer at Microsoft',
      location: 'Kolkata, West Bengal',
      connectedTime: 'Connected 2 days ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 102,
      name: 'Ishita Mondal',
      role: 'Frontend Developer at Google',
      location: 'Bangalore, Karnataka',
      connectedTime: 'Connected 5 days ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 103,
      name: 'Kaushik Paul',
      role: 'DevOps Engineer at Amazon',
      location: 'Pune, Maharashtra',
      connectedTime: 'Connected 1 week ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 104,
      name: 'Tania Das',
      role: 'UI/UX Designer at Flipkart',
      location: 'Kolkata, West Bengal',
      connectedTime: 'Connected 1 week ago',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    },
  ]);

  // Friend Requests (Right Sidebar top widget matching screenshot)
  const [friendRequests, setFriendRequests] = useState([
    {
      id: 201,
      name: 'Rahul Saha',
      role: 'Software Engineer at Wipro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 202,
      name: 'Ananya Biswas',
      role: 'Frontend Developer at Accenture',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 203,
      name: 'Arijit Dey',
      role: 'Full Stack Developer at TCS',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    },
  ]);

  // People You May Know (Right Sidebar middle widget matching screenshot)
  const [sidebarSuggestions] = useState([
    {
      id: 301,
      name: 'Debasish Roy',
      role: 'Java Developer',
      location: 'Kolkata, West Bengal',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 302,
      name: 'Moumita Paul',
      role: 'React Developer',
      location: 'Bangalore, Karnataka',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 303,
      name: 'Sayan Kundu',
      role: 'Backend Developer',
      location: 'Hyderabad, Telangana',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 304,
      name: 'Riya Ghosh',
      role: 'Software Engineer',
      location: 'Mumbai, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    },
  ]);

  const handleConnectToggle = (personId) => {
    setPeopleMayKnow((prev) =>
      prev.map((p) => (p.id === personId ? { ...p, isConnected: !p.isConnected } : p))
    );
  };

  const handleConfirmRequest = (reqId) => {
    setFriendRequests((prev) => prev.filter((r) => r.id !== reqId));
  };

  const handleDeleteRequest = (reqId) => {
    setFriendRequests((prev) => prev.filter((r) => r.id !== reqId));
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    if (menuId === 'saved' || menuId === 'saved-jobs') {
      navigate('/candidate/saved-jobs');
    } else if (menuId === 'home') {
      navigate('/candidate/dashboard');
    } else if (menuId === 'jobs') {
      navigate('/candidate/jobs');
    } else if (menuId === 'companies') {
      navigate('/candidate/companies');
    } else if (menuId === 'messages') {
      navigate('/candidate/messages');
    } else if (menuId === 'notifications') {
      navigate('/candidate/notifications');
    }
  };

  const rightSidebarContent = (
    <>
      <FriendRequestsCard
        requests={friendRequests}
        onConfirm={handleConfirmRequest}
        onDelete={handleDeleteRequest}
        onViewAll={() => console.log('View all friend requests')}
      />

      <PeopleYouMayKnowSidebarCard
        people={sidebarSuggestions}
        onConnect={(id) => console.log('Connect sidebar user:', id)}
        onViewAll={() => console.log('View all suggestions')}
      />

      <NetworkGrowthCard
        connectionsCount={128}
        followingCount={42}
        peopleYouMayKnowCount={36}
        onViewAnalytics={() => console.log('View network analytics')}
      />
    </>
  );

  return (
    <NetworkLayout
      activeNav="network"
      activeMenu={activeMenu}
      onMenuClick={handleMenuClick}
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Your Network Hero Banner */}
      <NetworkHeroBanner />

      {/* 2. Overview Stats (Tabs & 4 Cards) */}
      <NetworkStatsOverview
        activeTab={activeStatsTab}
        onTabChange={setActiveStatsTab}
        stats={{
          connections: 128,
          invitations: 42,
          mayKnow: 36,
          suggestions: 5,
        }}
        onStatCardClick={(id) => console.log('Stat card clicked:', id)}
      />

      {/* 3. People You May Know Grid */}
      <PeopleYouMayKnowSection
        people={peopleMayKnow}
        onConnectToggle={handleConnectToggle}
        onViewAll={() => console.log('View all people you may know')}
      />

      {/* 4. Your Connections Section */}
      <YourConnectionsSection
        connections={connections}
        onMessage={(id) => console.log('Message user:', id)}
        onMoreOptions={(id) => console.log('More options for:', id)}
      />
    </NetworkLayout>
  );
}
