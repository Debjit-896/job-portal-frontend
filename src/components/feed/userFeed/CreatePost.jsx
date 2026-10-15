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
    { label: 'Photo', icon: Image, color: '#3B82F6' },
    { label: 'Video', icon: Video, color: '#10B981' },
    { label: 'Article', icon: FileText, color: '#F59E0B' },
    { label: 'Poll', icon: BarChart2, color: '#8B5CF6' },
  ];

  return (
    <SectionCard padding="18px 20px">
      {/* Top row: Avatar + input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
        <Avatar src={userAvatar} name={userName} size={42} />
        <div
          style={{
            flex: 1,
            backgroundColor: '#F8FAFC',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Share something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handlePost();
            }}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '13.5px',
              color: '#1E293B',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>

      {/* Bottom row: Media upload buttons & Post action button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {actionButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.label}
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748B',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '4px 6px',
                  borderRadius: '6px',
                  transition: 'background-color 0.15s, color 0.15s',
                }}
              >
                <Icon size={18} color={btn.color} />
                <span>{btn.label}</span>
              </button>
            );
          })}
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handlePost}
          disabled={!content.trim()}
          style={{
            padding: '7px 22px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          Post
        </Button>
      </div>
    </SectionCard>
  );
}
