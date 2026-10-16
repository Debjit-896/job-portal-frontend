import { useState } from 'react';
import { Image, Video, FileText, BarChart2 } from 'lucide-react';
import Avatar from '../../common/userCommon/Avatar';
import Button from '../../common/userCommon/Button';
import SectionCard from '../../common/userCommon/SectionCard';

export default function CreatePost({
  userAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  userName = 'Debjit Pal',
  onPost,
}) {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;
    if (onPost) {
      onPost(content);
    }
    setContent('');
  };

  const actionButtons = [
    { label: 'Photo', icon: Image, color: 'text-[#3B82F6]' },
    { label: 'Video', icon: Video, color: 'text-[#10B981]' },
    { label: 'Article', icon: FileText, color: 'text-[#F59E0B]' },
    { label: 'Poll', icon: BarChart2, color: 'text-[#8B5CF6]' },
  ];

  return (
    <SectionCard padding="p-4.5 md:p-5">
      {/* Top row: Avatar + input */}
      <div className="flex items-center gap-3.5 mb-3.5">
        <Avatar src={userAvatar} name={userName} size={42} />
        <div className="flex-1 bg-[#F8FAFC] rounded-full border border-[#E2E8F0] px-4.5 py-2.5 flex items-center focus-within:border-[#1463F3] focus-within:bg-white transition-all">
          <input
            type="text"
            placeholder="Share something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handlePost();
            }}
            className="w-full border-none outline-none bg-transparent text-[13.5px] text-[#1E293B] placeholder-[#94A3B8]"
          />
        </div>
      </div>

      {/* Bottom row: Attachment Action Buttons + Post Button */}
      <div className="flex items-center justify-between pt-2.5 border-t border-[#F1F5F9] flex-wrap gap-2">
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          {actionButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.label}
                type="button"
                className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg border-none bg-transparent cursor-pointer text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
              >
                <Icon size={17} className={btn.color} />
                <span className="text-[12.5px] font-medium text-[#475569]">
                  {btn.label}
                </span>
              </button>
            );
          })}
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handlePost}
          disabled={!content.trim()}
          className="text-xs px-4"
        >
          Post
        </Button>
      </div>
    </SectionCard>
  );
}
