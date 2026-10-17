import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationsLayout } from '../../../components/layouts/userLayout/notifications';
import {
  NotificationsHeader,
  NotificationsTabs,
  NotificationsList,
} from '../../../components/feed/userFeed/notifications';
import {
  NotificationFiltersCard,
  RecentActivityCard,
  EnableNotificationsCard,
} from '../../../components/sidebar/userSidebar/notifications';

export default function UserNotificationsPage() {
  const navigate = useNavigate();

  // Active filter tab: 'all' | 'jobs' | 'network' | 'messages' | 'system'
  const [activeTab, setActiveTab] = useState('all');

  // Full notifications list mirroring screenshot
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      category: 'jobs',
      type: 'job_viewed',
      unread: true,
      actor: 'CloudWind Technologies LLP',
      isHiring: true,
      icon: 'amazon', // 'A' badge on dark background
      title: 'Your application for Junior Web Developer has been viewed',
      body: 'CloudWind Technologies LLP viewed your application 2 hours ago.',
      actionLink: null,
      timeAgo: '2 hours ago',
    },
    {
      id: 2,
      category: 'jobs',
      type: 'job_match',
      unread: false,
      actor: '',
      icon: 'briefcase',
      iconBg: 'bg-[#10B981]',
      title: 'New job match for you',
      body: 'We found 5 new Frontend Developer jobs based on your skills and preferences.',
      actionLink: {
        text: 'View jobs',
        path: '/candidate/jobs',
      },
      timeAgo: '4 hours ago',
    },
    {
      id: 3,
      category: 'network',
      type: 'connection_accepted',
      unread: true,
      actor: 'Sneha Roy',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      title: 'accepted your connection request',
      body: 'You are now connected with Sneha Roy.',
      actionLink: null,
      timeAgo: '6 hours ago',
    },
    {
      id: 4,
      category: 'jobs',
      type: 'job_posted',
      unread: true,
      actor: 'TCS',
      icon: 'users',
      iconBg: 'bg-[#6366F1]',
      title: 'posted a new job',
      body: 'TCS is hiring for Software Engineer (Fresher) in Kolkata.',
      actionLink: {
        text: 'View job',
        path: '/candidate/jobs',
      },
      timeAgo: '8 hours ago',
    },
    {
      id: 5,
      category: 'messages',
      type: 'message_received',
      unread: true,
      actor: 'Rahul Saha',
      icon: 'message',
      iconBg: 'bg-[#1463F3]',
      title: 'sent you a message',
      body: '"Hi Debjit, I saw your profile and we have similar interests. Let\'s connect!"',
      actionLink: null,
      timeAgo: '10 hours ago',
    },
    {
      id: 6,
      category: 'network',
      type: 'company_follow',
      unread: false,
      actor: 'Accenture',
      icon: 'building',
      iconBg: 'bg-[#0D9488]',
      title: 'started following you',
      body: 'Accenture is now following your profile.',
      actionLink: null,
      timeAgo: '1 day ago',
    },
    {
      id: 7,
      category: 'network',
      type: 'post_comment',
      unread: true,
      actor: 'Ankit Das',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      title: 'commented on your post',
      body: '"Great insights! Keep sharing such content."',
      actionLink: null,
      timeAgo: '1 day ago',
    },
    {
      id: 8,
      category: 'system',
      type: 'platform_update',
      unread: false,
      actor: '',
      icon: 'settings',
      iconBg: 'bg-[#94A3B8]',
      title: 'Platform Update',
      body: 'Your weekly activity summary is ready Check your profile performance and recent activity.',
      actionLink: null,
      timeAgo: '2 days ago',
    },
    {
      id: 9,
      category: 'network',
      type: 'post_liked',
      unread: true,
      actor: 'Priya Sen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      title: 'liked your post',
      body: '"Great post! Very helpful for beginners."',
      actionLink: null,
      timeAgo: '2 days ago',
    },
    {
      id: 10,
      category: 'system',
      type: 'system_notification',
      unread: true,
      actor: '',
      icon: 'message',
      iconBg: 'bg-[#7C3AED]',
      title: 'System Notification',
      body: 'Your Job Alert preferences have been updated You will now receive notifications for Remote jobs and Frontend Developer roles.',
      actionLink: null,
      timeAgo: '3 days ago',
    },
  ]);

  // Dynamic counts for each category
  const filterCounts = useMemo(() => {
    return {
      all: 7, // 7 unread or total badge shown in screenshot
      jobs: 3,
      network: 2,
      messages: 1,
      system: 1,
    };
  }, []);

  // Filtered notifications based on activeTab
  const filteredNotifications = useMemo(() => {
    if (activeTab === 'all') return notifications;
    return notifications.filter((item) => item.category === activeTab);
  }, [activeTab, notifications]);

  // Handlers
  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, unread: false }))
    );
  };

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };

  const handleActionClick = (notification) => {
    if (notification.actionLink?.path) {
      navigate(notification.actionLink.path);
    }
  };

  const handleMenuClick = (menuId) => {
    if (menuId === 'home') navigate('/candidate/dashboard');
    else if (menuId === 'jobs') navigate('/candidate/jobs');
    else if (menuId === 'companies') navigate('/candidate/companies');
    else if (menuId === 'network') navigate('/candidate/network');
    else if (menuId === 'messages') navigate('/candidate/messages');
    else if (menuId === 'notifications') navigate('/candidate/notifications');
    else if (menuId === 'saved-jobs') navigate('/candidate/saved-jobs');
    else if (menuId === 'settings') navigate('/candidate/settings');
  };

  // Right sidebar content
  const rightSidebarContent = (
    <>
      <NotificationFiltersCard
        activeFilter={activeTab}
        onFilterChange={setActiveTab}
        counts={filterCounts}
        onMarkAllRead={handleMarkAllAsRead}
      />
      <RecentActivityCard />
      <EnableNotificationsCard
        onEnable={() => {
          if ('Notification' in window) {
            Notification.requestPermission();
          }
        }}
      />
    </>
  );

  return (
    <NotificationsLayout
      activeNav="notifications"
      activeMenu="notifications"
      onMenuClick={handleMenuClick}
      onManageNotifications={() => navigate('/candidate/settings')}
      rightSidebar={rightSidebarContent}
    >
      {/* 1. Notifications Page Header */}
      <NotificationsHeader
        title="Notifications"
        subtitle="Stay updated with your jobs, network, companies and platform activity."
        onMarkAllRead={handleMarkAllAsRead}
        onMoreOptions={() => console.log('More header options')}
      />

      {/* 2. Category Tabs */}
      <NotificationsTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={filterCounts}
      />

      {/* 3. Notification Cards List */}
      <NotificationsList
        notifications={filteredNotifications}
        onActionClick={handleActionClick}
        onMoreOptions={(id) => console.log('More options for notification:', id)}
        onMarkAsRead={handleMarkAsRead}
      />
    </NotificationsLayout>
  );
}
