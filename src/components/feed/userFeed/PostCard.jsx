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
    <SectionCard padding="20px 22px">
      {/* Post Header: Avatar, Name, Title, Time, and More options */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar src={author.avatar} name={author.name} size={42} />
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#102E6D',
                marginBottom: '1px',
              }}
            >
              {author.name}
            </h4>
            <p
              style={{
                fontSize: '12px',
                color: '#64748B',
                marginBottom: '2px',
              }}
            >
              {author.role}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '11px',
                color: '#94A3B8',
              }}
            >
              <span>{timeAgo}</span>
              <span>•</span>
              <Users size={11} />
            </div>
          </div>
        </div>

        <button
          type="button"
          style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '4px',
          }}
          title="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Post Content */}
      <div
        style={{
          fontSize: '13.5px',
          color: '#1E293B',
          lineHeight: '1.55',
          marginBottom: articlePreview ? '14px' : '16px',
          whiteSpace: 'pre-line',
        }}
      >
        {content}
      </div>

      {/* Article / Link Preview Card if available */}
      {articlePreview && (
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            backgroundColor: '#F8FAFC',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'stretch',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (articlePreview.url) window.open(articlePreview.url, '_blank');
          }}
        >
          {/* Article Image / Banner */}
          <div
            style={{
              width: '180px',
              minHeight: '110px',
              backgroundColor: '#0F172A',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              color: '#FFFFFF',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {articlePreview.image ? (
              <img
                src={articlePreview.image}
                alt={articlePreview.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>
                  NEXT.<span style={{ color: '#38BDF8' }}>js</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '11px', color: '#94A3B8' }}>
                  ▲ Vercel
                </div>
              </div>
            )}
          </div>

          {/* Article Info */}
          <div
            style={{
              padding: '14px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <h5
              style={{
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#102E6D',
                marginBottom: '4px',
                lineHeight: '1.3',
              }}
            >
              {articlePreview.title}
            </h5>
            <p
              style={{
                fontSize: '12px',
                color: '#64748B',
                lineHeight: '1.4',
                marginBottom: '8px',
              }}
            >
              {articlePreview.subtitle}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '11px',
                color: '#64748B',
              }}
            >
              <ExternalLink size={12} color="#94A3B8" />
              <span>{articlePreview.domain || 'dev.to'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Post Actions */}
      <PostActions
        likesCount={likesCount}
        commentsCount={commentsCount}
        isLiked={isLiked}
        isSaved={isSaved}
      />
    </SectionCard>
  );
}
