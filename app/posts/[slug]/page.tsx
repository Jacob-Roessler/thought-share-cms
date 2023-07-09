import { getPost } from '@/services';
import { Post } from '@/types/Post';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import renderOptions from '@/services/richTextConfig.js';

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post: Post = await getPost(slug);
  let aspect_ratio = (post.featuredImage.height / post.featuredImage.width) * 100;

  return (
    <div className="container mx-auto bg-gray-800 ">
      <div className="bg-black">
        <div className="hero ">
          <Image
            width={post.featuredImage.width}
            height={post.featuredImage.height}
            className="xl:max-w-[70%]"
            src={post.featuredImage.url}
            alt={post.featuredImage.fileName}
          ></Image>
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md ">
              <h1 className="mb-5 text-xl md:text-5xl font-bold">{post.title}</h1>
              <p className="mb-5">{post.excerpt}</p>
              <ul className="flex flex-wrap justify-center">
                {post.categoriesCollection.items.map((c, i) => {
                  return (
                    <li key={c.name}>
                      <div className="badge">{c.name}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <article className="prose py-4 px-10 max-w-none">
          {documentToReactComponents(
            post.content.json as any,
            renderOptions(post.content.links as any)
          )}
        </article>
      </div>
    </div>
  );
}
