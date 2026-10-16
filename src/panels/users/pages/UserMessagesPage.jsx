import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessagesLayout } from '../../../components/layouts/userLayout/messages';
import {
  ConversationListPanel,
  ActiveChatWindow,
} from '../../../components/feed/userFeed/messages';
import {
  MessageUserProfileCard,
  MessageSharedFilesCard,
  MessageQuickActionsCard,
  MessageSuggestedConnectionsCard,
} from '../../../components/sidebar/userSidebar/messages';

export default function UserMessagesPage() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState('messages');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChatId, setActiveChatId] = useState(1);

  // Conversations matching screenshot list exactly
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Rahul Saha',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      isOnline: true,
      lastMessage: 'Hey Debjit, I saw your profile and...',
      time: '10:24 AM',
      unreadCount: 2,
    },
    {
      id: 2,
      name: 'Priya Sen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Sure, let\'s connect tomorrow!',
      time: '9:12 AM',
      unreadCount: 1,
    },
    {
      id: 3,
      name: 'TCS Hiring Team',
      customLogo: <span className="text-[#E11D48] font-black text-xs tracking-tighter">tcs</span>,
      logoBg: 'bg-[#FFF1F2]',
      isOnline: false,
      lastMessage: 'Hi! We are excited to inform you...',
      time: 'Yesterday',
      unreadCount: 1,
    },
    {
      id: 4,
      name: 'Anik Das',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Thanks for the update!',
      time: 'Yesterday',
      unreadCount: 0,
    },
    {
      id: 5,
      name: 'Sneha Roy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Can you share your resume again?',
      time: 'Mon',
      unreadCount: 0,
    },
    {
      id: 6,
      name: 'CloudWind Technologies',
      customLogo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      logoBg: 'bg-[#0284C7]',
      isOnline: false,
      lastMessage: 'We are impressed with your profile...',
      time: 'Sun',
      unreadCount: 0,
    },
    {
      id: 7,
      name: 'Arijit Dey',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Let\'s catch up soon',
      time: 'Sun',
      unreadCount: 0,
    },
    {
      id: 8,
      name: 'Moumita Paul',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Great! Looking forward to it.',
      time: 'Sat',
      unreadCount: 0,
    },
    {
      id: 9,
      name: 'Riya Ghosh',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Thanks for the connection!',
      time: 'Sat',
      unreadCount: 0,
    },
    {
      id: 10,
      name: 'Debashish Roy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      isOnline: false,
      lastMessage: 'Nice to meet you!',
      time: 'Fri',
      unreadCount: 0,
    },
  ]);

  // Messages matching Rahul Saha conversation in screenshot
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Hi Debjit,\nI saw your profile and your skills look really impressive! I\'m also a software developer at Wipro. Would you like to connect and discuss opportunities in our team?',
      time: '10:24 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hi Rahul,\nThank you! Yes, I\'d love to connect. I\'m currently exploring opportunities in full-stack development.',
      time: '10:24 AM',
    },
    {
      id: 3,
      sender: 'them',
      text: 'Great! I\'ll share some details about our open positions. Also, if you\'re interested, we can have a quick call this week.',
      time: '10:32 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: 'That sounds good. Please share the details whenever you get a chance.',
      time: '10:35 AM',
    },
    {
      id: 5,
      sender: 'them',
      text: 'Here\'s the JD for the current opening.',
      file: {
        name: 'Wipro_Job_Details.pdf',
        size: '1.2 MB',
      },
      time: '10:37 AM',
    },
  ]);

  const activeChat = conversations.find((c) => c.id === activeChatId) || conversations[0];

  const handleSendMessage = (text) => {
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text,
      time: 'Just now',
    };
    setMessages((prev) => [...prev, newMsg]);

    // Update conversation last message snippet
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? { ...c, lastMessage: text, time: 'Just now' }
          : c
      )
    );
  };

  const handleNavClick = (menuId) => {
    setActiveMenu(menuId);
    if (menuId === 'home') navigate('/candidate/dashboard');
    else if (menuId === 'jobs') navigate('/candidate/jobs');
    else if (menuId === 'companies') navigate('/candidate/companies');
    else if (menuId === 'network') navigate('/candidate/network');
    else if (menuId === 'saved' || menuId === 'saved-jobs') navigate('/candidate/saved-jobs');
    else if (menuId === 'messages') navigate('/candidate/messages');
  };

  const rightSidebarContent = (
    <>
      <MessageUserProfileCard
        profile={{
          name: activeChat.name,
          role: 'Software Developer at Wipro',
          location: 'Kolkata, West Bengal',
          connections: '2nd connection',
          avatar: activeChat.avatar,
          isOnline: activeChat.isOnline,
        }}
        onViewProfile={() => console.log('View profile:', activeChat.name)}
        onMoreOptions={() => console.log('More options')}
      />
      <MessageSharedFilesCard
        onSeeAll={() => console.log('See all files')}
        onFileClick={(file) => console.log('File clicked:', file.name)}
      />
      <MessageQuickActionsCard
        onScheduleCall={() => console.log('Schedule call')}
        onSendFile={() => console.log('Send file')}
        onStartVideoCall={() => console.log('Start video call')}
        onBlockUser={() => console.log('Block user')}
      />
      <MessageSuggestedConnectionsCard
        onSeeAll={() => console.log('See all suggested connections')}
        onConnect={(id) => console.log('Connect with:', id)}
      />
    </>
  );

  return (
    <MessagesLayout
      activeNav="messages"
      activeMenu={activeMenu}
      onMenuClick={handleNavClick}
      rightSidebar={rightSidebarContent}
    >
      {/* Messages Inner Card with Conversation List on Left & Chat on Right */}
      <div className="bg-white rounded-[14px] border border-[#E2E8F0] shadow-xs flex overflow-hidden h-[calc(100vh-120px)] min-h-[640px]">
        {/* Left Sub-Panel: Conversations List */}
        <ConversationListPanel
          conversations={conversations}
          activeConversationId={activeChatId}
          onSelectConversation={setActiveChatId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          unreadCount={3}
          onNewMessage={() => console.log('New message compose')}
        />

        {/* Right Sub-Panel: Active Chat Window */}
        <ActiveChatWindow
          activeChat={activeChat}
          messages={messages}
          onSendMessage={handleSendMessage}
          onAttachFile={() => console.log('Attach file')}
          onAttachImage={() => console.log('Attach image')}
          onCall={() => console.log('Voice call')}
          onVideoCall={() => console.log('Video call')}
          onMoreOptions={() => console.log('More chat options')}
        />
      </div>
    </MessagesLayout>
  );
}
