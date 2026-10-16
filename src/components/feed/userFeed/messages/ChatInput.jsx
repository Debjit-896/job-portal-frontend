import { useState } from 'react';
import { Smile, Paperclip, Image, Send } from 'lucide-react';

export default function ChatInput({ onSendMessage, onAttachFile, onAttachImage }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSendMessage && onSendMessage(text);
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-3.5 border-t border-[#E2E8F0] bg-white flex items-center gap-2.5 shrink-0">
      {/* Input container */}
      <div className="flex-1 flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 gap-2 focus-within:border-[#BFDBFE] transition-colors">
        {/* Smile emoji */}
        <button
          type="button"
          className="text-[#94A3B8] hover:text-[#64748B] bg-transparent border-0 cursor-pointer p-0.5 flex items-center justify-center transition-colors"
          title="Insert Emoji"
        >
          <Smile size={18} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-0 text-xs text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
        />

        {/* Paperclip attach */}
        <button
          type="button"
          onClick={onAttachFile}
          className="text-[#94A3B8] hover:text-[#64748B] bg-transparent border-0 cursor-pointer p-0.5 flex items-center justify-center transition-colors"
          title="Attach file"
        >
          <Paperclip size={17} />
        </button>

        {/* Image attach */}
        <button
          type="button"
          onClick={onAttachImage}
          className="text-[#94A3B8] hover:text-[#64748B] bg-transparent border-0 cursor-pointer p-0.5 flex items-center justify-center transition-colors"
          title="Attach image"
        >
          <Image size={17} />
        </button>
      </div>

      {/* Send button */}
      <button
        type="button"
        onClick={handleSend}
        disabled={!text.trim()}
        className={`w-9 h-9 rounded-xl flex items-center justify-center border-0 cursor-pointer transition-colors shadow-xs ${
          text.trim()
            ? 'bg-[#1463F3] hover:bg-[#0E52D4] text-white cursor-pointer'
            : 'bg-[#1463F3] text-white opacity-80 cursor-pointer'
        }`}
        title="Send Message"
      >
        <Send size={15} />
      </button>
    </div>
  );
}
