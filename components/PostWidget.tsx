import moment from 'moment';
import Link from 'next/link';

import { Post } from '@/types/Post';

const PostWidget = ({ posts }: any) => {
  return (
    <div className=" px-10 py-10 bg-base-100 rounded-lg shadow-xl">
      <div className="mb-1 border-b border-white border-opacity-25">Recent Posts</div>
      <ul>
        {posts?.slice(0, 10).map((post: Post, index: number) => {
          return (
            <li key={post.title} className="hover:scale-105">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostWidget;
