import { useState, useRef } from 'react';
import { useBodyScrollLock } from '../../../../hooks/useBodyScrollLock';
import {
  X,
  Globe,
  Users,
  Lock,
  MessageCircle,
  Smile,
  Image as ImageIcon,
  FileText,
  Trash2,
  Send,
  CheckCircle2,
} from 'lucide-react';

const COMMON_EMOJIS = ['🔥', '🚀', '💡', '👏', '❤️', '🎉', '💻', '✨', '🎯', '📈', '🤝', '🏆', '🌟', '👍', '☕'];

export default function CreatePostModal({
  isOpen,
  onClose,
  user,
  onPost,
}) {
  useBodyScrollLock(isOpen);

  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('Anyone');
  const [commentPermission, setCommentPermission] = useState('Anyone');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);

  const photoInputRef = useRef(null);
  const docInputRef = useRef(null);
  const textareaRef = useRef(null);

  if (!isOpen) return null;

  const handleEmojiClick = (emoji) => {
    setContent((prev) => prev + emoji);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPhoto({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        previewUrl,
        file,
      });
      // clear doc if photo chosen
      setShowEmojiPicker(false);
    }
  };

  const handleDocUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentFile({
        name: file.name,
        size: (file.size / 1024).toFixed(0) + ' KB',
        type: file.name.split('.').pop()?.toUpperCase() || 'DOC',
        file,
      });
      setShowEmojiPicker(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !photo && !documentFile) return;

    const newPost = {
      id: 'post-' + Date.now(),
      content: content.trim(),
      visibility,
      commentPermission,
      photo: photo ? photo.previewUrl : null,
      document: documentFile
        ? {
            title: documentFile.name,
            size: documentFile.size,
            type: documentFile.type,
            pages: 1,
            timestamp: 'Just now',
          }
        : null,
      author: {
        name: user?.name || 'Debjit Pal',
        headline: user?.headline || 'Full Stack Developer',
        avatar:
          user?.avatar ||
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      timeAgo: 'Just now',
      likesCount: 0,
      commentsCount: 0,
      isLiked: false,
    };

    if (onPost) {
      onPost(newPost);
    }

    // Reset state & close
    setContent('');
    setPhoto(null);
    setDocumentFile(null);
    setShowEmojiPicker(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-xl flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            Create a post
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="p-5 flex flex-col gap-4">
            {/* Top User Info Section */}
            <div className="flex items-start gap-3">
              <img
                src={
                  user?.avatar ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
                }
                alt={user?.name || 'User'}
                className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
              />
              <div className="flex flex-col gap-1 min-w-0">
                <h4 className="text-[14px] font-bold text-[#0F172A] leading-tight">
                  {user?.name || 'Debjit Pal'}
                </h4>

                {/* Who can see & Who can comment options */}
                <div className="flex items-center gap-2 flex-wrap text-[11px]">
                  {/* Who can see */}
                  <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-full text-slate-700 transition-colors">
                    {visibility === 'Anyone' ? (
                      <Globe size={11} className="text-[#1463F3]" />
                    ) : visibility === 'Connections only' ? (
                      <Users size={11} className="text-emerald-600" />
                    ) : (
                      <Lock size={11} className="text-amber-600" />
                    )}
                    <span className="font-medium text-slate-500">Visible to:</span>
                    <select
                      value={visibility}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                    >
                      <option value="Anyone">Anyone (Public)</option>
                      <option value="Connections only">Connections only</option>
                      <option value="Only me">Only me</option>
                    </select>
                  </div>

                  {/* Who can comment */}
                  <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-full text-slate-700 transition-colors">
                    <MessageCircle size={11} className="text-[#1463F3]" />
                    <span className="font-medium text-slate-500">Comments:</span>
                    <select
                      value={commentPermission}
                      onChange={(e) => setCommentPermission(e.target.value)}
                      className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                    >
                      <option value="Anyone">Anyone can comment</option>
                      <option value="Connections only">Connections only</option>
                      <option value="No one">No one</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content Textarea */}
            <div className="relative">
              <textarea
                ref={textareaRef}
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What do you want to talk about? Share ideas, opportunities, or updates..."
                className="w-full border-none outline-none resize-none text-[13.5px] text-[#0F172A] placeholder-slate-400 p-1 focus:ring-0"
                autoFocus
              />
            </div>

            {/* Photo Preview if attached */}
            {photo && (
              <div className="relative rounded-xl border border-slate-200 bg-slate-50 overflow-hidden max-h-56">
                <img
                  src={photo.previewUrl}
                  alt="Post preview"
                  className="w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setPhoto(null)}
                  className="absolute top-2 right-2 p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                  title="Remove photo"
                >
                  <Trash2 size={14} />
                </button>
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10.5px] rounded-md font-medium">
                  {photo.name} ({photo.size})
                </div>
              </div>
            )}

            {/* Document Preview if attached */}
            {documentFile && (
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#1463F3] text-white flex items-center justify-center shrink-0 font-bold text-xs uppercase shadow-xs">
                    {documentFile.type}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#0F172A] truncate">
                      {documentFile.name}
                    </p>
                    <p className="text-[11px] text-[#64748B]">
                      Document • {documentFile.size}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDocumentFile(null)}
                  className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-white transition-colors"
                  title="Remove document"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}

            {/* Quick Emoji Tray */}
            {showEmojiPicker && (
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap gap-1.5 items-center animate-in fade-in slide-in-from-top-1 duration-150">
                <span className="text-[11px] font-semibold text-slate-500 mr-1">
                  Add emoji:
                </span>
                {COMMON_EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleEmojiClick(emoji)}
                    className="w-7 h-7 flex items-center justify-center text-sm rounded-lg hover:bg-white hover:shadow-xs transition-transform active:scale-110 cursor-pointer"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            {/* Hidden file inputs */}
            <input
              type="file"
              ref={photoInputRef}
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
            <input
              type="file"
              ref={docInputRef}
              accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
              className="hidden"
              onChange={handleDocUpload}
            />
          </div>

          {/* Bottom Action Bar */}
          <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
            {/* Attachment Buttons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${
                  showEmojiPicker
                    ? 'bg-[#EFF6FF] text-[#1463F3]'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
                title="Add emoji"
              >
                <Smile size={16} className="text-amber-500" />
                <span className="hidden sm:inline">Emoji</span>
              </button>

              <button
                type="button"
                onClick={() => photoInputRef.current?.click()}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${
                  photo
                    ? 'bg-[#EFF6FF] text-[#1463F3]'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
                title="Upload Photo"
              >
                <ImageIcon size={16} className="text-[#1463F3]" />
                <span className="hidden sm:inline">Photo</span>
              </button>

              <button
                type="button"
                onClick={() => docInputRef.current?.click()}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer ${
                  documentFile
                    ? 'bg-[#EFF6FF] text-[#1463F3]'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
                title="Upload Document"
              >
                <FileText size={16} className="text-emerald-600" />
                <span className="hidden sm:inline">Document</span>
              </button>
            </div>

            {/* Post Button */}
            <button
              type="submit"
              disabled={!content.trim() && !photo && !documentFile}
              className={`px-5 py-2 rounded-xl font-semibold text-[13px] flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
                content.trim() || photo || documentFile
                  ? 'bg-[#1463F3] hover:bg-[#0F52CC] text-white shadow-[#1463F3]/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send size={13} />
              <span>Post</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
