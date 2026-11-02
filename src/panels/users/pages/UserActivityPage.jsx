import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  Search,
  Activity,
  MessageSquare,
  FileText,
  ThumbsUp,
  Share2,
  Trash2,
  ExternalLink,
  Download,
  MoreHorizontal,
  FileCheck2,
} from 'lucide-react';
import { ProfileLayout } from '../../../components/layouts/userLayout/profile';
import SectionCard from '../../../components/common/userCommon/SectionCard';
import CreatePostModal from '../../../components/feed/userFeed/profile/CreatePostModal';
import {
  getStoredActivities,
  saveStoredActivities,
} from '../../../constants/profileActivityData';
import { useToast } from '../../../components/common/toast';

export default function UserActivityPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToast } = useToast?.() || { addToast: () => {} };

  const initialTab = searchParams.get('tab') || 'all';
  const [activeTab, setActiveTab] = useState(initialTab); // 'all' | 'posts' | 'comments' | 'documents'
  const [searchQuery, setSearchQuery] = useState('');
  const [activities, setActivities] = useState(getStoredActivities);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    saveStoredActivities(activities);
  }, [activities]);

  const user = {
    name: 'Debjit Pal',
    headline: 'Full Stack Developer | Java & Web Technologies',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  };

  const handleCreatePost = (newPost) => {
    setActivities((prev) => {
      const updated = {
        ...prev,
        posts: [newPost, ...prev.posts],
        // if user uploaded a document in post, also add to documents list
        documents: newPost.document
          ? [
              {
                id: 'doc-' + Date.now(),
                title: newPost.document.title,
                type: newPost.document.type,
                size: newPost.document.size,
                pages: 1,
                timestamp: 'Just now',
                url: '#',
              },
              ...prev.documents,
            ]
          : prev.documents,
      };
      return updated;
    });

    if (addToast) {
      addToast('Post published successfully!', 'success');
    }
  };

  const handleToggleLikePost = (postId) => {
    setActivities((prev) => ({
      ...prev,
      posts: prev.posts.map((p) => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likesCount: isLiked ? p.likesCount + 1 : p.likesCount - 1,
          };
        }
        return p;
      }),
    }));
  };

  const handleToggleLikeComment = (commentId) => {
    setActivities((prev) => ({
      ...prev,
      comments: prev.comments.map((c) => {
        if (c.id === commentId) {
          const isLiked = !c.isLiked;
          return {
            ...c,
            isLiked,
            likes: isLiked ? (c.likes || 0) + 1 : Math.max(0, (c.likes || 1) - 1),
          };
        }
        return c;
      }),
    }));
  };

  const handleDeleteItem = (category, id) => {
    setActivities((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id !== id),
    }));
    setOpenDropdownId(null);
    if (addToast) {
      addToast(`Item removed from ${category}`, 'info');
    }
  };

  // Filter items
  const filteredPosts = activities.posts.filter((p) =>
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredComments = activities.comments.filter(
    (c) =>
      c.commentText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.targetPost.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredDocuments = activities.documents.filter((d) =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProfileLayout activeMenu="my-posts">
      {/* Top Header Card */}
      <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px] mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/candidate/profile')}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="Back to Profile"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-[#1463F3]" />
                <h1 className="text-[18px] font-bold text-[#0F172A]">All Activity</h1>
              </div>
              <p className="text-[12px] text-[#64748B] mt-0.5">
                Explore all posts, comments, and uploaded documents by Debjit Pal
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-[#1463F3] hover:bg-[#0E52CC] text-white rounded-xl py-2 px-4 text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Plus size={15} strokeWidth={2.5} />
            <span>Create Post</span>
          </button>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-5 pt-4 border-t border-[#F1F5F9]">
          {/* Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#1463F3] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              All ({activities.posts.length + activities.comments.length + activities.documents.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('posts')}
              className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                activeTab === 'posts'
                  ? 'bg-[#1463F3] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              Posts ({activities.posts.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('comments')}
              className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                activeTab === 'comments'
                  ? 'bg-[#1463F3] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              Comments ({activities.comments.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('documents')}
              className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                activeTab === 'documents'
                  ? 'bg-[#1463F3] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              Documents ({activities.documents.length})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search in activity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[12px] outline-none focus:border-[#1463F3] focus:bg-white text-slate-800"
            />
          </div>
        </div>
      </SectionCard>

      {/* Main List Container */}
      <div className="flex flex-col gap-4">
        {/* Render POSTS */}
        {(activeTab === 'all' || activeTab === 'posts') &&
          filteredPosts.map((post) => (
            <SectionCard key={post.id} className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author?.avatar || user.avatar}
                    alt={post.author?.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                      {post.author?.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B]">{post.author?.headline}</p>
                    <p className="text-[10px] text-[#94A3B8] mt-0.5">{post.timeAgo} &bull; {post.visibility || 'Public'}</p>
                  </div>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdownId(openDropdownId === post.id ? null : post.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <MoreHorizontal size={16} />
                  </button>

                  {openDropdownId === post.id && (
                    <div className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-30 text-[11.5px] animate-in fade-in duration-100">
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('posts', post.id)}
                        className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2"
                      >
                        <Trash2 size={13} />
                        <span>Delete post</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Post Text */}
              <p className="text-[13px] text-[#1E293B] leading-relaxed whitespace-pre-line mb-3">
                {post.content}
              </p>

              {/* Photo attachment if any */}
              {post.photo && (
                <div className="w-full max-h-96 rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-200">
                  <img src={post.photo} alt="Post attachment" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Document attachment if any */}
              {post.document && (
                <div className="p-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#1463F3] text-white flex items-center justify-center font-bold text-xs uppercase shadow-xs shrink-0">
                      {post.document.type || 'DOC'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-semibold text-[#0F172A] truncate">
                        {post.document.title}
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        {post.document.size}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-3 py-1 bg-white border border-[#BFDBFE] text-[#1463F3] rounded-lg text-[11.5px] font-semibold hover:bg-[#DBEAFE] transition-colors"
                  >
                    View
                  </button>
                </div>
              )}

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-[12px]">
                <button
                  type="button"
                  onClick={() => handleToggleLikePost(post.id)}
                  className={`flex items-center gap-1.5 py-1 px-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                    post.isLiked
                      ? 'bg-[#EFF6FF] text-[#1463F3]'
                      : 'text-[#64748B] hover:bg-slate-100'
                  }`}
                >
                  <ThumbsUp size={14} fill={post.isLiked ? '#1463F3' : 'none'} />
                  <span>{post.likesCount} Likes</span>
                </button>

                <div className="flex items-center gap-3 text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} />
                    <span>{post.commentsCount} comments</span>
                  </span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-slate-900">
                    <Share2 size={14} />
                    <span>Share</span>
                  </span>
                </div>
              </div>
            </SectionCard>
          ))}

        {/* Render COMMENTS */}
        {(activeTab === 'all' || activeTab === 'comments') &&
          filteredComments.map((cmt) => (
            <SectionCard key={cmt.id} className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 text-[12px] text-[#1463F3] font-semibold">
                  <MessageSquare size={15} />
                  <span>Commented on a discussion</span>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdownId(openDropdownId === cmt.id ? null : cmt.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <MoreHorizontal size={16} />
                  </button>

                  {openDropdownId === cmt.id && (
                    <div className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-30 text-[11.5px] animate-in fade-in duration-100">
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('comments', cmt.id)}
                        className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2"
                      >
                        <Trash2 size={13} />
                        <span>Delete comment</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-[12px] text-[#64748B] mb-2 font-medium">
                Target post: <span className="font-semibold text-[#0F172A]">{cmt.targetPost}</span>
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[13px] text-[#1E293B] italic leading-relaxed mb-3">
                "{cmt.commentText}"
              </div>

              <div className="flex items-center justify-between text-[11.5px] text-[#64748B] pt-2 border-t border-[#F1F5F9]">
                <span>{cmt.timestamp}</span>
                <button
                  type="button"
                  onClick={() => handleToggleLikeComment(cmt.id)}
                  className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    cmt.isLiked
                      ? 'bg-[#EFF6FF] text-[#1463F3]'
                      : 'hover:bg-slate-100 text-[#64748B]'
                  }`}
                >
                  <ThumbsUp size={13} fill={cmt.isLiked ? '#1463F3' : 'none'} />
                  <span>{cmt.likes || 0} Likes</span>
                </button>
              </div>
            </SectionCard>
          ))}

        {/* Render DOCUMENTS */}
        {(activeTab === 'all' || activeTab === 'documents') &&
          filteredDocuments.map((doc) => (
            <SectionCard key={doc.id} className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#1463F3] text-white flex items-center justify-center font-bold text-sm uppercase shadow-xs shrink-0">
                    {doc.type || 'DOC'}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-bold text-[#0F172A] truncate">
                      {doc.title}
                    </h3>
                    <p className="text-[11.5px] text-[#64748B] mt-0.5">
                      {doc.size} &bull; {doc.pages ? `${doc.pages} pages` : 'Document'} &bull; {doc.timestamp}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <a
                    href={doc.url || '#'}
                    download={doc.title}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-[12px] flex items-center gap-1.5 transition-colors"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleDeleteItem('documents', doc.id)}
                    className="p-2 text-slate-400 hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                    title="Delete document"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </SectionCard>
          ))}

        {/* Empty State */}
        {((activeTab === 'posts' && filteredPosts.length === 0) ||
          (activeTab === 'comments' && filteredComments.length === 0) ||
          (activeTab === 'documents' && filteredDocuments.length === 0) ||
          (activeTab === 'all' &&
            filteredPosts.length === 0 &&
            filteredComments.length === 0 &&
            filteredDocuments.length === 0)) && (
          <div className="py-12 text-center bg-white rounded-2xl border border-slate-200">
            <Activity size={32} className="mx-auto text-slate-300 mb-2" />
            <h4 className="text-[14px] font-bold text-slate-700">No activity found</h4>
            <p className="text-[12px] text-slate-400 mt-1 max-w-sm mx-auto">
              {searchQuery
                ? `No matching records found for "${searchQuery}".`
                : 'No activities recorded in this category.'}
            </p>
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        user={user}
        onPost={handleCreatePost}
      />
    </ProfileLayout>
  );
}
