import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Bookmark } from 'lucide-react';

export default function PostActions({
  likesCount = 0,
  commentsCount = 0,
  initialLiked = false,
  initialSaved = false,
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
      <div className="flex items-center justify-between text-xs text-[#64748B] pb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <span className="w-4.5 h-4.5 rounded-full bg-[#1463F3] inline-flex items-center justify-center text-white ring-1.5 ring-white z-10">
              <ThumbsUp size={10} />
            </span>
            <span className="w-4.5 h-4.5 rounded-full bg-[#EF4444] inline-flex items-center justify-center text-white ring-1.5 ring-white -ml-1 text-[10px] z-0">
              &#10084;
            </span>
          </div>
          <span>{currentLikes}</span>
        </div>

        <div>
          <span>{commentsCount} comments</span>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
        <button
          type="button"
          onClick={handleLikeToggle}
          className={`flex items-center gap-2 py-2 px-3 rounded-lg border-none bg-transparent cursor-pointer text-xs font-semibold transition-colors ${
            liked ? 'text-[#1463F3] bg-[#EAF3FF]' : 'text-[#64748B] hover:bg-[#F1F5F9]'
          }`}
        >
          <ThumbsUp size={16} fill={liked ? '#1463F3' : 'none'} />
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>

        <button
          type="button"
          onClick={onComment}
          className="flex items-center gap-2 py-2 px-3 rounded-lg border-none bg-transparent cursor-pointer text-xs font-semibold text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
        >
          <MessageSquare size={16} />
          <span>Comment</span>
        </button>

        <button
          type="button"
          onClick={onShare}
          className="flex items-center gap-2 py-2 px-3 rounded-lg border-none bg-transparent cursor-pointer text-xs font-semibold text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
        >
          <Share2 size={16} />
          <span>Share</span>
        </button>

        <button
          type="button"
          onClick={handleSaveToggle}
          className={`flex items-center gap-2 py-2 px-3 rounded-lg border-none bg-transparent cursor-pointer text-xs font-semibold transition-colors ${
            saved ? 'text-[#1463F3] bg-[#EAF3FF]' : 'text-[#64748B] hover:bg-[#F1F5F9]'
          }`}
        >
          <Bookmark size={16} fill={saved ? '#1463F3' : 'none'} />
          <span>{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
