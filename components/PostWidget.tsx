import moment from 'moment';
import Link from 'next/link';

import { Post } from '@/types/Post';

const PostWidget = ({ posts }: any) => {
  return (
    <div className=" px-10 py-10 bg-base-100 rounded-lg shadow-xl">
      Recent Posts
      <ul>
        {posts?.slice(0, 10).map((post: any, index: number) => {
          let p: Post = post.node;
          return (
            <li key={p.title}>
              <Link href={`/posts/${p.slug}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostWidget;
