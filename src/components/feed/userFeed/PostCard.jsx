import { MoreHorizontal, Users, ExternalLink } from 'lucide-react';
import Avatar from '../../common/userCommon/Avatar';
import SectionCard from '../../common/userCommon/SectionCard';
import PostActions from './PostActions';

export default function PostCard({ post }) {
  const {
    author = {},
    timeAgo = '1h ago',
    content = '',
    articlePreview,
    likesCount = 0,
    commentsCount = 0,
    isLiked = false,
    isSaved = false,
  } = post;

  return (
    <SectionCard padding="p-5 md:p-5.5">
      {/* Post Header: Avatar, Name, Title, Time, and More options */}
      <div className="flex items-start justify-between mb-3.5">
        <div className="flex items-center gap-3">
          <Avatar src={author.avatar} name={author.name} size={42} />
          <div>
            <h4 className="text-sm font-bold text-[#102E6D] mb-0.5">
              {author.name}
            </h4>
            <p className="text-xs text-[#64748B] mb-0.5">
              {author.role}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
              <span>{timeAgo}</span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1">
                <Users size={11} /> Anyone
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="border-none bg-transparent cursor-pointer text-[#94A3B8] p-1 rounded-md hover:bg-[#F1F5F9] transition-colors"
          title="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Post Content Paragraph */}
      <div className="text-[13.5px] text-[#334155] leading-relaxed mb-3.5 whitespace-pre-line">
        {content}
      </div>

      {/* Embedded Article / Link Preview */}
      {articlePreview && (
        <a
          href={articlePreview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3.5 border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F8FAFC] no-underline hover:border-[#CBD5E1] transition-colors group"
        >
          <div className="p-3.5 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="uppercase tracking-wider font-semibold text-[#1463F3]">
                {articlePreview.domain || 'dev.to'}
              </span>
              <ExternalLink size={13} className="text-[#94A3B8] group-hover:text-[#1463F3] transition-colors" />
            </div>
            <h5 className="text-sm font-bold text-[#102E6D] leading-snug group-hover:text-[#1463F3] transition-colors">
              {articlePreview.title}
            </h5>
            <p className="text-xs text-[#64748B] leading-normal line-clamp-2">
              {articlePreview.subtitle}
            </p>
          </div>
        </a>
      )}

      {/* Post Engagement Action Bar */}
      <PostActions
        likesCount={likesCount}
        commentsCount={commentsCount}
        initialLiked={isLiked}
        initialSaved={isSaved}
      />
    </SectionCard>
  );
}
