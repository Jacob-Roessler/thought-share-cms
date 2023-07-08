import { getPost } from '@/services';
import { Post } from '@/types/Post';

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post: Post = await getPost(slug);
  let aspect_ratio = (post.featuredImage.height / post.featuredImage.width) * 100;

  return (
    <div className="container mx-auto bg-gray-800 ">
      <div className="">
        <div
          className={` ${aspect_ratio < 60 ? 'aspect-w-16 aspect-h-9' : 'aspect-w-4 aspect-h-3'}`}
        >
          <div
            className="hero "
            style={{
              backgroundImage: `url(${post.featuredImage.url})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{post.title}</h1>
                <p className="mb-5">{post.excerpt}</p>
                <ul>
                  {post.categories.map((c, i) => {
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
      </div>
      <article
        className="prose  py-4  px-10"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></article>
    </div>
  );
}
