import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import MainLayout from '../../../components/layouts/userLayout/home/MainLayout';
import WelcomeBanner from '../../../components/feed/userFeed/WelcomeBanner';
import CreatePost from '../../../components/feed/userFeed/CreatePost';
import FeedList from '../../../components/feed/userFeed/FeedList';
import {
  RecommendedJobs,
  TrendingTopics,
  PeopleYouMayKnow,
  UpgradeSkills,
} from '../../../components/sidebar/userSidebar';

export default function UserDashboard() {
  const { user } = useAuth();

  const [activeNav, setActiveNav] = useState('home');
  const [activeMenu, setActiveMenu] = useState('my-feed');

  // User Profile Data
  const userProfile = {
    name: user?.name || 'Debjit Pal',
    headline: user?.headline || 'Aspiring Full Stack Developer',
    avatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    profileCompletion: user?.profileCompletion || 80,
  };

  // Mock Feed Posts mirroring the screenshot
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'Rohit Sharma',
        role: 'Software Engineer @ TechNova',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
      },
      timeAgo: '2h ago',
      content:
        'Just completed my first project using Next.js and deployed it on Vercel. The experience was amazing! 🚀 Learned a lot about server components, API routes and deployment.\n\nIf anyone is also learning Next.js, feel free to connect. Let\'s learn together!',
      articlePreview: {
        title: 'Building a Modern Web App with Next.js',
        subtitle: 'From development to deployment — a complete journey with Next.js and Vercel.',
        domain: 'dev.to',
        url: 'https://dev.to',
      },
      likesCount: 42,
      commentsCount: 8,
      isLiked: false,
      isSaved: false,
    },
    {
      id: 2,
      author: {
        name: 'Priya Das',
        role: 'Frontend Developer @ BrightTech',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      },
      timeAgo: '4h ago',
      content:
        'Excited to share that I\'ve started working on a new project using React + Node.js + Express for a job portal. Looking forward to building more cool features. #WebDevelopment #React',
      articlePreview: null,
      likesCount: 27,
      commentsCount: 5,
      isLiked: false,
      isSaved: false,
    },
  ]);

  const handleCreatePost = (newPostText) => {
    const newPost = {
      id: Date.now(),
      author: {
        name: userProfile.name,
        role: userProfile.headline,
        avatar: userProfile.avatar,
      },
      timeAgo: 'Just now',
      content: newPostText,
      articlePreview: null,
      likesCount: 0,
      commentsCount: 0,
      isLiked: false,
      isSaved: false,
    };
    setPosts([newPost, ...posts]);
  };

  const rightSidebarContent = (
    <>
      <RecommendedJobs />
      <TrendingTopics />
      <PeopleYouMayKnow />
      <UpgradeSkills />
    </>
  );

  const navigate = useNavigate();

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    if (navId === 'jobs') {
      navigate('/candidate/jobs');
    } else if (navId === 'companies') {
      navigate('/candidate/companies');
    } else if (navId === 'network') {
      navigate('/candidate/network');
    }
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    if (menuId === 'companies') {
      navigate('/candidate/companies');
    } else if (menuId === 'saved-jobs') {
      navigate('/candidate/saved-jobs');
    } else if (menuId === 'network') {
      navigate('/candidate/network');
    } else if (menuId === 'settings') {
      navigate('/candidate/settings');
    }
  };

  return (
    <MainLayout
      activeNav={activeNav}
      onNavClick={handleNavClick}
      activeMenu={activeMenu}
      onMenuClick={handleMenuClick}
      userProfile={userProfile}
      rightSidebar={rightSidebarContent}
    >
      <WelcomeBanner />
      <CreatePost
        userAvatar={userProfile.avatar}
        userName={userProfile.name}
        onPost={handleCreatePost}
      />
      <FeedList posts={posts} />
    </MainLayout>
  );
}
