import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Bookmark } from 'lucide-react';

export default function PostActions({
  likesCount = 0,
  commentsCount = 0,
  isLiked: initialLiked = false,
  isSaved: initialSaved = false,
  onLike,
  onComment,
  onShare,
  onSave,
}) {
  const [liked, setLiked] = useState(initialLiked);
  const [currentLikes, setCurrentLikes] = useState(likesCount);
  const [saved, setSaved] = useState(initialSaved);

  const handleLikeToggle = () => {
    const nextState = !liked;
    setLiked(nextState);
    setCurrentLikes((prev) => (nextState ? prev + 1 : Math.max(0, prev - 1)));
    if (onLike) onLike(nextState);
  };

  const handleSaveToggle = () => {
    const nextState = !saved;
    setSaved(nextState);
    if (onSave) onSave(nextState);
  };

  return (
    <div>
      {/* Top Counts & Reaction icons row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#64748B',
          paddingBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Reaction icons stack */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#1463F3',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 0 0 1.5px #FFFFFF',
                zIndex: 2,
              }}
            >
              <ThumbsUp size={10} fill="#FFFFFF" />
            </span>
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#EF4444',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginLeft: '-5px',
                boxShadow: '0 0 0 1.5px #FFFFFF',
                zIndex: 1,
                fontSize: '9px',
              }}
            >
              ❤️
            </span>
          </div>
          <span>{currentLikes}</span>
        </div>

        <div>
          <span>{commentsCount} comments</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#F1F5F9', marginBottom: '8px' }} />

      {/* Interactive Action Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {/* Like */}
          <button
            type="button"
            onClick={handleLikeToggle}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: liked ? '#1463F3' : '#64748B',
              fontWeight: liked ? 600 : 500,
              fontSize: '13px',
              padding: '6px 4px',
              borderRadius: '6px',
            }}
          >
            <ThumbsUp size={16} fill={liked ? '#1463F3' : 'none'} />
            <span>Like</span>
          </button>

          {/* Comment */}
          <button
            type="button"
            onClick={onComment}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748B',
              fontWeight: 500,
              fontSize: '13px',
              padding: '6px 4px',
              borderRadius: '6px',
            }}
          >
            <MessageSquare size={16} />
            <span>Comment</span>
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={onShare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748B',
              fontWeight: 500,
              fontSize: '13px',
              padding: '6px 4px',
              borderRadius: '6px',
            }}
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>

        {/* Bookmark / Save */}
        <button
          type="button"
          onClick={handleSaveToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: saved ? '#1463F3' : '#64748B',
            padding: '6px 4px',
            borderRadius: '6px',
          }}
          title={saved ? 'Unsave' : 'Save post'}
        >
          <Bookmark size={17} fill={saved ? '#1463F3' : 'none'} />
        </button>
      </div>
    </div>
  );
}
