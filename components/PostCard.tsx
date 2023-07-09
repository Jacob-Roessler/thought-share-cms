import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { Post } from '@/types/Post';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="card card-compact card-bordered  bg-base-100 shadow-xl my-3">
      <div className="basis-3/5 flex flex-col justify-center">
        <Image
          src={post.featuredImage?.url}
          width={post.featuredImage?.width}
          height={post.featuredImage?.height}
          alt={post.featuredImage?.fileName}
          className="w-full"
        />
      </div>
      <div className="card-body overflow-hidden">
        <h2 className="card-title text-blue-500 hover:underline">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="avatar">
          {post.authorCollection.items.map((author, index) => {
            return (
              <>
                <div className="w-8 rounded-full hover:scale-[200%]">
                  <Image
                    src={author.avatar.url}
                    width={author.avatar.width}
                    height={author.avatar.height}
                    alt={author.avatar.fileName}
                  />
                </div>
                <p className="ml-1">{author.name}</p>
              </>
            );
          })}

          <p className="text-right">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
        <p className="md:py-2"> {post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
