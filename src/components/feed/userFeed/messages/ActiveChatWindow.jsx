import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

export default function ActiveChatWindow({
  activeChat,
  messages = [],
  onSendMessage,
  onAttachFile,
  onAttachImage,
  onCall,
  onVideoCall,
  onMoreOptions,
}) {
  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white text-[#94A3B8] text-xs">
        Select a conversation to start chatting.
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white h-full">
      {/* 1. Chat Header */}
      <ChatHeader
        activeChat={activeChat}
        onCall={onCall}
        onVideoCall={onVideoCall}
        onMoreOptions={onMoreOptions}
      />

      {/* 2. Chat messages scroll area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 bg-[#FFFFFF]">
        {/* Date divider pill */}
        <div className="flex justify-center my-3">
          <span className="bg-[#F1F5F9] text-[#64748B] text-[10.5px] font-medium px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* Message list */}
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            partnerAvatar={activeChat.avatar}
            partnerName={activeChat.name}
          />
        ))}
      </div>

      {/* 3. Bottom message input */}
      <ChatInput
        onSendMessage={onSendMessage}
        onAttachFile={onAttachFile}
        onAttachImage={onAttachImage}
      />
    </div>
  );
}
