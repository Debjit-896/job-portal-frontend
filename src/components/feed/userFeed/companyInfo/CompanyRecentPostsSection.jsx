import { useState } from 'react';
import { ArrowRight, ThumbsUp, Heart } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import CompanyLogo from '../companies/CompanyLogo';

export default function CompanyRecentPostsSection({ company, post, onViewAll }) {
  const [likes, setLikes] = useState(post?.likes || 128);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="text-[15px] font-bold text-[#0F172A]">
          Recent Posts
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-0.5 hover:underline bg-transparent border-0 cursor-pointer"
        >
          View All Posts <ArrowRight size={12} />
        </button>
      </div>

      {/* Post Box */}
      <div className="flex flex-col gap-3.5">
        {/* Post Author Bar */}
        <div className="flex items-center gap-3">
          <CompanyLogo company={company} size={40} />
          <div>
            <h4 className="text-[13px] font-bold text-[#0F172A] leading-tight">
              {company.name}
            </h4>
            <p className="text-[11px] text-[#64748B] mt-0.5">
              {post?.date || '2 days ago'}
            </p>
          </div>
        </div>

        {/* Post Text & Right Floating Graphic Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Text Content */}
          <div className="md:col-span-7">
            <p className="text-[12.5px] text-[#334155] leading-relaxed whitespace-pre-line mb-3">
              {post?.content}
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 text-[11.5px] text-[#1463F3] font-medium">
              {post?.tags?.map((tag) => (
                <span key={tag} className="hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Banner Graphic */}
          <div className="md:col-span-5 rounded-xl overflow-hidden bg-gradient-to-r from-[#0C2D57] to-[#1463F3] text-white p-4 relative shadow-sm min-h-[110px] flex flex-col justify-between">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80"
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] text-blue-200 uppercase font-semibold tracking-wider">
                Better
              </p>
              <h5 className="text-[15px] font-extrabold leading-tight">
                {post?.bannerTitle || 'Solutions Together'}
              </h5>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-[11px] text-blue-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
              <span>CloudWind</span>
            </div>
          </div>
        </div>

        {/* Post Engagements Bottom Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-[11.5px] text-[#64748B]">
          {/* Reaction badges */}
          <div
            onClick={toggleLike}
            className="flex items-center gap-1.5 cursor-pointer select-none"
          >
            <div className="flex items-center -space-x-1">
              <span className="w-4.5 h-4.5 rounded-full bg-[#1463F3] text-white flex items-center justify-center text-[9px] shadow-xs">
                <ThumbsUp size={9} fill="white" />
              </span>
              <span className="w-4.5 h-4.5 rounded-full bg-[#EF4444] text-white flex items-center justify-center text-[9px] shadow-xs">
                <Heart size={9} fill="white" />
              </span>
            </div>
            <span className="font-semibold text-[#0F172A]">{likes}</span>
          </div>

          {/* Comments & shares */}
          <div className="flex items-center gap-3">
            <span>{post?.comments || 12} comments</span>
            <span>&bull;</span>
            <span>{post?.shares || 5} shares</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
