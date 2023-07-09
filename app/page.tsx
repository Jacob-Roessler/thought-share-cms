import Image from 'next/image';
import { PostCard, PostWidget, Categories } from '@/components';

import { getPosts } from '@/services';

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="container mx-auto mb-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-2 col-span-1">
          {posts?.map((post: any, index: number) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1 ">
          <div className="lg:sticky relative top-0 my-3">
            <PostWidget posts={posts} />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
