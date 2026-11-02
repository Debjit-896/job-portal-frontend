import { useState, useRef } from 'react';
import {
  Activity,
  Plus,
  MessageSquare,
  FileText,
  Share2,
  ThumbsUp,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trash2,
  Eye,
  FileCheck2,
} from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileActivityCard({
  activities = { posts: [], comments: [], documents: [] },
  onOpenCreatePost = () => {},
  onViewAll = () => {},
  onDeleteActivity = () => {},
}) {
  const [activeTab, setActiveTab] = useState('posts'); // 'posts' | 'comments' | 'documents'
  const [openMenuId, setOpenMenuId] = useState(null);
  const scrollRef = useRef(null);

  const posts = activities.posts || [];
  const comments = activities.comments || [];
  const documents = activities.documents || [];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const currentItems =
    activeTab === 'posts'
      ? posts
      : activeTab === 'comments'
      ? comments
      : documents;

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px] relative">
      {/* Top Header: Title, Followers badge & Create Post Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F1F5F9]">
        <div>
          <div className="flex items-center gap-2">
            <Activity size={17} className="text-[#1463F3]" />
            <h3 className="text-[14.5px] font-bold text-[#0F172A]">Activity</h3>
          </div>
          <p className="text-[11.5px] text-[#64748B] mt-0.5">
            Posts, comments, and documents shared with the network
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-center">
          <button
            type="button"
            onClick={onOpenCreatePost}
            className="bg-[#1463F3] hover:bg-[#0E52CC] text-white rounded-lg py-1.5 px-3.5 text-[12px] font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus size={14} strokeWidth={2.5} />
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {/* Tabs Row: Posts, Comments, Documents */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('posts')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'posts'
                ? 'bg-[#1463F3] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>Posts</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'posts'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {posts.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('comments')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'comments'
                ? 'bg-[#1463F3] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>Comments</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'comments'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {comments.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'documents'
                ? 'bg-[#1463F3] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>Documents</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'documents'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {documents.length}
            </span>
          </button>
        </div>

        {/* Scroll navigation arrows */}
        {currentItems.length > 2 && (
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Scroll right"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Scrolling Row */}
      {currentItems.length === 0 ? (
        <div className="py-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400">
          <p className="text-[12.5px] font-medium text-slate-600">
            No {activeTab} yet.
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {activeTab === 'posts' && 'Create your first post to share with recruiters and network.'}
            {activeTab === 'comments' && 'Comments you post on other feeds will appear here.'}
            {activeTab === 'documents' && 'Upload resumes, project docs, or whitepapers to showcase.'}
          </p>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex items-stretch gap-3.5 overflow-x-auto pb-2 scrollbar-none snap-x focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* POSTS TAB */}
          {activeTab === 'posts' &&
            posts.map((post) => (
              <div
                key={post.id}
                className="w-[280px] sm:w-[310px] shrink-0 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-sm rounded-xl p-3.5 flex flex-col justify-between transition-all snap-start relative"
              >
                {/* Header & More Symbol */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={post.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                      alt={post.author?.name}
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold text-[#0F172A] truncate">
                        {post.author?.name}
                      </p>
                      <p className="text-[10px] text-[#64748B]">{post.timeAgo}</p>
                    </div>
                  </div>

                  {/* More Symbol (...) */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenMenuId(openMenuId === post.id ? null : post.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                      title="More options"
                    >
                      <MoreHorizontal size={15} />
                    </button>

                    {openMenuId === post.id && (
                      <div className="absolute right-0 top-6 w-36 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-30 text-[11.5px] animate-in fade-in duration-100">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenMenuId(null);
                            if (onViewAll) onViewAll();
                          }}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                        >
                          <Eye size={12} />
                          <span>View Post</span>
                        </button>
                        {onDeleteActivity && (
                          <button
                            type="button"
                            onClick={() => {
                              setOpenMenuId(null);
                              onDeleteActivity('posts', post.id);
                            }}
                            className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600 flex items-center gap-2"
                          >
                            <Trash2 size={12} />
                            <span>Delete</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content excerpt */}
                <p className="text-[12px] text-[#334155] leading-relaxed line-clamp-3 mb-2 flex-1">
                  {post.content}
                </p>

                {/* Optional Photo or Document in post */}
                {post.photo && (
                  <div className="w-full h-28 rounded-lg overflow-hidden bg-slate-200 mb-2">
                    <img
                      src={post.photo}
                      alt="Post attachment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {post.document && (
                  <div className="p-2 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-[#1463F3] shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-[#0F172A] truncate">
                        {post.document.title}
                      </p>
                      <p className="text-[9.5px] text-[#64748B]">
                        {post.document.size}
                      </p>
                    </div>
                  </div>
                )}

                {/* Stats / Reactions */}
                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-[#E2E8F0]/70 mt-1">
                  <span className="flex items-center gap-1 text-[#1463F3] font-medium">
                    <ThumbsUp size={12} />
                    {post.likesCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {post.commentsCount} comments
                  </span>
                </div>
              </div>
            ))}

          {/* COMMENTS TAB */}
          {activeTab === 'comments' &&
            comments.map((cmt) => (
              <div
                key={cmt.id}
                className="w-[280px] sm:w-[310px] shrink-0 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-sm rounded-xl p-3.5 flex flex-col justify-between transition-all snap-start relative"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1463F3] font-semibold">
                    <MessageSquare size={13} />
                    <span>Commented</span>
                  </div>

                  {/* More Symbol (...) */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenMenuId(openMenuId === cmt.id ? null : cmt.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                      title="More options"
                    >
                      <MoreHorizontal size={15} />
                    </button>

                    {openMenuId === cmt.id && (
                      <div className="absolute right-0 top-6 w-36 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-30 text-[11.5px] animate-in fade-in duration-100">
                        {onDeleteActivity && (
                          <button
                            type="button"
                            onClick={() => {
                              setOpenMenuId(null);
                              onDeleteActivity('comments', cmt.id);
                            }}
                            className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600 flex items-center gap-2"
                          >
                            <Trash2 size={12} />
                            <span>Delete</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Where he commented */}
                <p className="text-[11px] text-[#64748B] mb-1 font-medium line-clamp-1">
                  On post: <span className="text-[#0F172A] font-semibold">{cmt.targetPost}</span>
                </p>

                {/* Comment text */}
                <p className="text-[12px] text-[#334155] bg-white p-2.5 rounded-lg border border-[#E2E8F0] leading-relaxed line-clamp-3 mb-2 flex-1 italic">
                  "{cmt.commentText}"
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-[#E2E8F0]/70 mt-1">
                  <span>{cmt.timestamp}</span>
                  <span className="flex items-center gap-1 text-[#1463F3] font-medium">
                    <ThumbsUp size={11} /> {cmt.likes || 0}
                  </span>
                </div>
              </div>
            ))}

          {/* DOCUMENTS TAB */}
          {activeTab === 'documents' &&
            documents.map((doc) => (
              <div
                key={doc.id}
                className="w-[280px] sm:w-[310px] shrink-0 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-sm rounded-xl p-3.5 flex flex-col justify-between transition-all snap-start relative"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#1463F3] text-white flex items-center justify-center font-bold text-xs uppercase shadow-xs shrink-0">
                    {doc.type || 'DOC'}
                  </div>

                  {/* More Symbol (...) */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenMenuId(openMenuId === doc.id ? null : doc.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                      title="More options"
                    >
                      <MoreHorizontal size={15} />
                    </button>

                    {openMenuId === doc.id && (
                      <div className="absolute right-0 top-6 w-36 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-30 text-[11.5px] animate-in fade-in duration-100">
                        <a
                          href={doc.url || '#'}
                          download={doc.title}
                          onClick={() => setOpenMenuId(null)}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                        >
                          <FileCheck2 size={12} />
                          <span>Download</span>
                        </a>
                        {onDeleteActivity && (
                          <button
                            type="button"
                            onClick={() => {
                              setOpenMenuId(null);
                              onDeleteActivity('documents', doc.id);
                            }}
                            className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600 flex items-center gap-2"
                          >
                            <Trash2 size={12} />
                            <span>Delete</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Document Title & Details */}
                <div className="flex-1 mb-2">
                  <h4 className="text-[12.5px] font-bold text-[#0F172A] line-clamp-2 leading-tight">
                    {doc.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    {doc.size} • {doc.pages ? `${doc.pages} pages` : 'Document'}
                  </p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">
                    {doc.timestamp}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0]/70 flex items-center justify-between">
                  <span className="text-[10.5px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Verified Doc
                  </span>
                  <a
                    href={doc.url || '#'}
                    className="text-[#1463F3] text-[11px] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>View</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Bottom Option: Show All */}
      <div className="mt-3.5 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between">
        <button
          type="button"
          onClick={onViewAll}
          className="text-[#1463F3] hover:text-[#0F52CC] text-[12.5px] font-semibold flex items-center gap-1.5 hover:underline bg-transparent border-0 cursor-pointer"
        >
          <span>
            Show all {activeTab}
          </span>
          <ChevronRight size={14} />
        </button>

        <span className="text-[11px] text-[#94A3B8]">
          Swipe or scroll horizontally to explore
        </span>
      </div>
    </SectionCard>
  );
}
