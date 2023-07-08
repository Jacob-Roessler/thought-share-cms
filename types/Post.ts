type Post = {
  author: {
    bio: string | null;
    name: string;
    id: string;
    photo: {
      url: string;
      fileName: string;
      width: number;
      height: number;
    };
  };
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
  categories: [
    {
      name: string;
      slug: string;
    }
  ];
};

export type { Post };
