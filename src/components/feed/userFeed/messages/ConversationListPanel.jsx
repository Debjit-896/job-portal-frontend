import { Search, SquarePen } from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';

export default function ConversationListPanel({
  conversations = [],
  activeConversationId,
  onSelectConversation,
  searchQuery = '',
  onSearchChange,
  activeFilter = 'all',
  onFilterChange,
  onNewMessage,
  unreadCount = 3,
}) {
  return (
    <div className="w-[300px] shrink-0 border-r border-[#E2E8F0] flex flex-col bg-white h-full">
      {/* 1. Header with title & new message edit icon */}
      <div className="p-4 pb-3 flex items-center justify-between border-b border-[#F1F5F9]">
        <h2 className="text-base font-bold text-[#102E6D] m-0">
          Messages
        </h2>
        <button
          type="button"
          onClick={onNewMessage}
          title="New Message"
          className="text-[#1463F3] hover:text-[#0E52D4] bg-transparent border-0 cursor-pointer p-1 rounded-md hover:bg-blue-50 transition-colors"
        >
          <SquarePen size={18} />
        </button>
      </div>

      {/* 2. Search input */}
      <div className="px-3.5 pt-3 pb-2">
        <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-2.5 py-1.5 focus-within:border-[#BFDBFE] transition-colors">
          <Search size={14} className="text-[#94A3B8] shrink-0" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="w-full bg-transparent border-0 text-xs text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
          />
        </div>
      </div>

      {/* 3. Filter pills (All 3, Unread 3, Groups) */}
      <div className="px-3.5 pb-2.5 flex items-center gap-2 border-b border-[#F1F5F9] text-xs">
        <button
          type="button"
          onClick={() => onFilterChange && onFilterChange('all')}
          className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full border-0 cursor-pointer font-medium text-[11.5px] transition-colors ${
            activeFilter === 'all'
              ? 'bg-[#1463F3] text-white'
              : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
          }`}
        >
          <span>All</span>
          <span
            className={`text-[10px] font-bold px-1 rounded-full ${
              activeFilter === 'all'
                ? 'bg-white/20 text-white'
                : 'bg-white text-[#64748B]'
            }`}
          >
            {conversations.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onFilterChange && onFilterChange('unread')}
          className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full border-0 cursor-pointer font-medium text-[11.5px] transition-colors ${
            activeFilter === 'unread'
              ? 'bg-[#1463F3] text-white'
              : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
          }`}
        >
          <span>Unread</span>
          <span
            className={`text-[10px] font-bold px-1 rounded-full ${
              activeFilter === 'unread'
                ? 'bg-white/20 text-white'
                : 'bg-white text-[#64748B]'
            }`}
          >
            {unreadCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onFilterChange && onFilterChange('groups')}
          className={`py-1 px-2.5 rounded-full border-0 cursor-pointer font-medium text-[11.5px] transition-colors ${
            activeFilter === 'groups'
              ? 'bg-[#1463F3] text-white'
              : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
          }`}
        >
          Groups
        </button>
      </div>

      {/* 4. Conversation item list */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#F8FAFC]">
        {conversations.map((chat) => {
          const isSelected = activeConversationId === chat.id;
          return (
            <div
              key={chat.id}
              onClick={() => onSelectConversation && onSelectConversation(chat.id)}
              className={`p-3.5 flex items-start gap-3 cursor-pointer transition-colors relative ${
                isSelected
                  ? 'bg-[#EFF6FF] border-l-[3px] border-[#1463F3]'
                  : 'hover:bg-slate-50'
              }`}
            >
              {/* Avatar with optional online dot */}
              <div className="relative shrink-0">
                {chat.customLogo ? (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                      chat.logoBg || 'bg-[#EFF6FF]'
                    }`}
                  >
                    {chat.customLogo}
                  </div>
                ) : (
                  <Avatar src={chat.avatar} name={chat.name} size={40} />
                )}
                {chat.isOnline && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] border-2 border-white rounded-full" />
                )}
              </div>

              {/* Name, Snippet, Timestamp, Unread Badge */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-[13px] font-bold text-[#102E6D] m-0 truncate">
                    {chat.name}
                  </h4>
                  <span className="text-[10px] text-[#94A3B8] shrink-0">
                    {chat.time}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] text-[#64748B] m-0 truncate leading-snug">
                    {chat.lastMessage}
                  </p>

                  {chat.unreadCount > 0 && (
                    <span className="bg-[#1463F3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
