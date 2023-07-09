import { getCategoryPosts } from '@/services';
import { PostCard } from '@/components';

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getCategoryPosts(params.slug);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-3">
        {posts.map((post: any, index: number) => {
          return <PostCard key={post.name} post={post} />;
        })}
      </div>
    </div>
  );
}
