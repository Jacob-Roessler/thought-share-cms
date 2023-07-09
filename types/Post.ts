import { Author } from './Author';
import { Category } from './Category';
type Post = {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  content: {
    html: string;
  };
  featuredImage: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  categories: [Category];
};

export type { Post };
