import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { Post } from '@/types/Post';

const PostCard = ({ post }: { post: Post }) => {
  let aspect_ratio = (post.featuredImage.height / post.featuredImage.width) * 100;

  return (
    <div className="card card-bordered lg:card-side bg-base-100 shadow-xl my-3">
      <figure className={`${aspect_ratio > 60 ? 'md:max-w-sm' : 'md:max-w-md'}`}>
        <Image
          src={post.featuredImage.url}
          width={post.featuredImage.width}
          height={post.featuredImage.height}
          alt={post.featuredImage.fileName}
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <div className="avatar">
          <div className="w-12 rounded-full hover:scale-[200%]">
            <Image
              src={post.author.photo.url}
              width={post.author.photo.width}
              height={post.author.photo.height}
              alt={post.author.photo.fileName}
            />
          </div>
          <p className="ml-1">{post.author.name}</p>
          <p className="text-right">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
        <p className="md:py-2"> {post.excerpt}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post.slug}`} className="btn btn-primary hover:scale-110">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
