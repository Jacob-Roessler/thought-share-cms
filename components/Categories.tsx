import Link from 'next/link';

import { Post } from '@/types/Post';
import { getCategories } from '@/services';

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-2 px-10 py-10 bg-base-100 rounded-lg shadow-xl">
      Categories
      <div className="flex flex-row flex-wrap gap-1">
        {categories?.map((category: any, index: number) => {
          return (
            <span key={category.id} className="badge badge-primary">
              <Link href={`/categories/${category.slug}`}>
                {category.name} ({category.count})
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
