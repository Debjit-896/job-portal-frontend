import PostCard from './PostCard';

export default function FeedList({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return (
      <div
        style={{
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid #E9EFF8',
          color: '#64748B',
        }}
      >
        <p style={{ fontSize: '14px' }}>No posts in your feed yet.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
