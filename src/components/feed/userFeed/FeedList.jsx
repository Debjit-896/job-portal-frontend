import PostCard from './PostCard';

export default function FeedList({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-10 px-5 text-center bg-white rounded-[14px] border border-[#E9EFF8] text-[#64748B]">
        <p className="text-sm m-0">No posts in your feed yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
