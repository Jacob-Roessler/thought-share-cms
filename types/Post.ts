import { Author } from './Author';
import { Category } from './Category';
type Post = {
  authorCollection: { items: [Author] };
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  content: { json: {}; links: {} };
  featuredImage: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  categoriesCollection: { items: [Category] };
};

export type { Post };
