import { CheckCheck, FileText, Download } from 'lucide-react';
import Avatar from '../../../common/userCommon/Avatar';

export default function MessageBubble({ message, partnerAvatar, partnerName }) {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex items-start gap-2.5 my-2.5 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Sender Avatar if not me */}
      {!isMe && (
        <div className="shrink-0 mt-0.5">
          <Avatar src={partnerAvatar} name={partnerName} size={30} />
        </div>
      )}

      <div className={`flex flex-col max-w-[460px] ${isMe ? 'items-end' : 'items-start'}`}>
        {/* Text message bubble */}
        {message.text && (
          <div
            className={`p-3.5 rounded-2xl text-[12.5px] leading-relaxed shadow-xs ${
              isMe
                ? 'bg-[#1463F3] text-white rounded-br-xs'
                : 'bg-[#F1F5F9] text-[#1E293B] rounded-bl-xs'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* File attachment preview bubble if any */}
        {message.file && (
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-xl flex items-center justify-between gap-4 mt-1.5 shadow-xs w-[280px]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                <FileText size={16} />
              </div>
              <div className="min-w-0">
                <h5 className="text-xs font-semibold text-[#1E293B] m-0 truncate">
                  {message.file.name}
                </h5>
                <span className="text-[10px] text-[#94A3B8]">
                  {message.file.size}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="p-1.5 text-[#64748B] hover:text-[#1463F3] hover:bg-slate-100 rounded-md bg-transparent border-0 cursor-pointer transition-colors shrink-0"
              title="Download"
            >
              <Download size={15} />
            </button>
          </div>
        )}

        {/* Timestamp & read receipts */}
        <div className={`flex items-center gap-1 text-[10px] text-[#94A3B8] mt-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
          <span>{message.time}</span>
          {isMe && <CheckCheck size={13} className="text-[#1463F3]" />}
        </div>
      </div>
    </div>
  );
}
